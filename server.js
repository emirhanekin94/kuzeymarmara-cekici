'use strict';

/**
 * Marmara Çekici — Sıfır bağımlılıklı Node.js sunucusu.
 * Özellikler: Gzip/Deflate sıkıştırma, temiz URL desteği, güvenlik başlıkları,
 * agresif önbellekleme (statik varlıklar için immutable, HTML için stale-while-revalidate).
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { URL } = require('url');

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

const IMMUTABLE_EXT = new Set(['.woff2', '.woff', '.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico', '.ttf']);

// Kısa URL takma adları: /kurtkoy, /kurtkoy-cekici, /kurtkoy-oto-cekici -> /bolgeler/kurtkoy-oto-cekici
let REGION_ALIASES = {};
try {
  const { REGIONS } = require('./data/regions.js');
  REGIONS.forEach((r) => {
    const alias = r.slug.replace(/-oto-cekici$/, '');
    REGION_ALIASES['/' + alias] = `/bolgeler/${r.slug}`;
    REGION_ALIASES['/' + alias + '-cekici'] = `/bolgeler/${r.slug}`;
    REGION_ALIASES['/' + r.slug] = `/bolgeler/${r.slug}`;
  });
} catch (e) {
  // data katmanı henüz üretilmemiş olabilir; sorun değil.
}

const URL_REDIRECTS = {
  '/blog/kurtkoy-ve-gebze-en-yakin-oto-cekici-secim-rehberi': '/blog/kurtkoy-ve-gebze-en-yakin-oto-cekici-rehberi.html',
  '/blog/kurtkoy-ve-gebze-en-yakin-oto-cekici-secim-rehberi.html': '/blog/kurtkoy-ve-gebze-en-yakin-oto-cekici-rehberi.html',
  '/blog/kuzey-marmara-otoyolu-cekici-fiyatlari-2026': '/blog/kuzey-marmara-otoyolu-cekici-fiyatlari-nasil-hesaplanir.html',
  '/blog/kuzey-marmara-otoyolu-cekici-fiyatlari-2026.html': '/blog/kuzey-marmara-otoyolu-cekici-fiyatlari-nasil-hesaplanir.html',
  '/blog/otomatik-vites-ve-elektrikli-araclar-nasil-cekilir': '/blog/otomatik-vitesli-ve-elektrikli-araclar-nasil-cekilir.html',
  '/blog/otomatik-vites-ve-elektrikli-araclar-nasil-cekilir.html': '/blog/otomatik-vitesli-ve-elektrikli-araclar-nasil-cekilir.html'
};

function safeJoin(root, requestPath) {
  const decoded = decodeURIComponent(requestPath);
  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  return path.join(root, normalized);
}

function tryResolve(urlPath) {
  const candidates = [];
  if (urlPath === '/') {
    candidates.push('/index.html');
  } else if (urlPath.endsWith('/')) {
    candidates.push(urlPath + 'index.html');
  } else {
    candidates.push(urlPath); // tam eşleşme (örn. /css/style.css)
    candidates.push(urlPath + '.html'); // temiz URL (örn. /iletisim)
    candidates.push(urlPath + '/index.html');

    // Alt dizin akıllı çözümleme (örn. /oto-cekici.html -> /hizmetler/oto-cekici.html)
    candidates.push('/hizmetler' + urlPath);
    candidates.push('/hizmetler' + urlPath + '.html');
    candidates.push('/bolgeler' + urlPath);
    candidates.push('/bolgeler' + urlPath + '.html');
    candidates.push('/blog' + urlPath);
    candidates.push('/blog' + urlPath + '.html');
  }

  for (const candidate of candidates) {
    const filePath = safeJoin(ROOT, candidate);
    if (filePath.startsWith(ROOT) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return filePath;
    }
  }
  return null;
}

function securityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(self), camera=(), microphone=()');
}

function cacheHeaders(res, ext) {
  if (IMMUTABLE_EXT.has(ext)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (ext === '.css' || ext === '.js') {
    res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
  } else {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  }
}

function sendFile(req, res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      send404(res);
      return;
    }

    securityHeaders(res);
    cacheHeaders(res, ext);
    res.setHeader('Content-Type', contentType);

    const acceptEncoding = (req.headers['accept-encoding'] || '');
    const compressible = /text|javascript|json|svg|xml/.test(contentType);

    if (compressible) {
      res.setHeader('Vary', 'Accept-Encoding');
      if (/\bgzip\b/.test(acceptEncoding)) {
        res.setHeader('Content-Encoding', 'gzip');
        zlib.gzip(data, (zErr, zData) => {
          if (zErr) {
            res.statusCode = 200;
            res.setHeader('Content-Length', data.length);
            res.end(data);
          } else {
            res.statusCode = 200;
            res.setHeader('Content-Length', zData.length);
            res.end(zData);
          }
        });
        return;
      } else if (/\bdeflate\b/.test(acceptEncoding)) {
        res.setHeader('Content-Encoding', 'deflate');
        zlib.deflate(data, (zErr, zData) => {
          if (zErr) {
            res.statusCode = 200;
            res.setHeader('Content-Length', data.length);
            res.end(data);
          } else {
            res.statusCode = 200;
            res.setHeader('Content-Length', zData.length);
            res.end(zData);
          }
        });
        return;
      }
    }

    res.statusCode = 200;
    res.setHeader('Content-Length', data.length);
    res.end(data);
  });
}

function send404(res) {
  const notFoundPath = path.join(ROOT, '404.html');
  securityHeaders(res);
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (fs.existsSync(notFoundPath)) {
    fs.createReadStream(notFoundPath).pipe(res);
  } else {
    res.end('<h1>404 - Sayfa Bulunamadı</h1><p><a href="/">Ana sayfaya dön</a></p>');
  }
}

function startServer(port) {
  const currentServer = http.createServer((req, res) => {
    let urlPath;
    try {
      urlPath = new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname;
    } catch (e) {
      urlPath = '/';
    }

    const cleanPath = urlPath.length > 1 && urlPath.endsWith('/') ? urlPath.slice(0, -1) : urlPath;
    if (URL_REDIRECTS[cleanPath] || URL_REDIRECTS[urlPath]) {
      res.statusCode = 301;
      res.setHeader('Location', URL_REDIRECTS[cleanPath] || URL_REDIRECTS[urlPath]);
      res.end();
      return;
    }

    if (REGION_ALIASES[cleanPath]) {
      urlPath = REGION_ALIASES[cleanPath];
    } else if (REGION_ALIASES[urlPath]) {
      urlPath = REGION_ALIASES[urlPath];
    }

    // Dizin isteklerinde trailing slash yoksa 301 yönlendirmesi yap (örn: /hizmetler -> /hizmetler/)
    const checkDir = safeJoin(ROOT, urlPath);
    if (fs.existsSync(checkDir) && fs.statSync(checkDir).isDirectory() && !urlPath.endsWith('/')) {
      res.statusCode = 301;
      res.setHeader('Location', urlPath + '/');
      res.end();
      return;
    }

    const filePath = tryResolve(urlPath);
    if (!filePath) {
      send404(res);
      return;
    }
    sendFile(req, res, filePath);
  });

  currentServer.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ Port ${port} başka bir uygulama tarafından kullanılıyor. Port ${port + 1} deneniyor...`);
      startServer(port + 1);
    } else {
      console.error('Sunucu hatası:', err);
    }
  });

  currentServer.listen(port, () => {
    console.log(`🚀 Marmara Çekici sunucusu http://localhost:${port} üzerinde çalışıyor`);
  });
}

startServer(Number(PORT));
