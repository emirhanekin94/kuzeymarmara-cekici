'use strict';

/**
 * Kuzey Marmara Çekici — Sıfır bağımlılıklı Node.js sunucusu.
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

const IMMUTABLE_EXT = new Set(['.css', '.js', '.woff2', '.woff', '.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico']);

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
  } else if (ext === '.html') {
    res.setHeader('Cache-Control', 'public, max-age=0, stale-while-revalidate=86400');
  } else {
    res.setHeader('Cache-Control', 'public, max-age=3600');
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

    if (compressible && /\bgzip\b/.test(acceptEncoding)) {
      res.setHeader('Content-Encoding', 'gzip');
      res.statusCode = 200;
      zlib.gzip(data, (zErr, zData) => res.end(zErr ? data : zData));
    } else if (compressible && /\bdeflate\b/.test(acceptEncoding)) {
      res.setHeader('Content-Encoding', 'deflate');
      res.statusCode = 200;
      zlib.deflate(data, (zErr, zData) => res.end(zErr ? data : zData));
    } else {
      res.statusCode = 200;
      res.end(data);
    }
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
    if (REGION_ALIASES[cleanPath]) {
      urlPath = REGION_ALIASES[cleanPath];
    } else if (REGION_ALIASES[urlPath]) {
      urlPath = REGION_ALIASES[urlPath];
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
    console.log(`🚀 Kuzey Marmara Çekici sunucusu http://localhost:${port} üzerinde çalışıyor`);
  });
}

startServer(Number(PORT));
