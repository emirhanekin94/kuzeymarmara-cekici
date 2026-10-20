/**
 * KUZEY MARMARA OTO ÇEKİCİ - SİTEMAP & ROBOTS GENERATOR
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://kuzeymarmaracekici.com';
const ROOT = path.join(__dirname, '..');

const urls = [
  { loc: `${DOMAIN}/`, priority: '1.0', changefreq: 'daily' },
  { loc: `${DOMAIN}/hakkimizda.html`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${DOMAIN}/iletisim.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${DOMAIN}/galeri.html`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${DOMAIN}/hizmetler/index.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${DOMAIN}/bolgeler/index.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${DOMAIN}/blog/index.html`, priority: '0.8', changefreq: 'weekly' },
  // Hizmetler
  { loc: `${DOMAIN}/hizmetler/oto-cekici.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/otoyol-oto-kurtarma.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/kaza-vinc-kurtarma.html`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/luks-spor-arac-cekici.html`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/agir-vasita-cekici.html`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/yol-yardim-aku-takviye.html`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/yerinde-lastik-yol-yardim.html`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/motosiklet-cekici.html`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${DOMAIN}/hizmetler/sehirlerarasi-arac-tasima.html`, priority: '0.8', changefreq: 'weekly' },
  // Bölgeler
  { loc: `${DOMAIN}/bolgeler/kurtkoy-oto-cekici.html`, priority: '0.95', changefreq: 'daily' },
  { loc: `${DOMAIN}/bolgeler/kuzey-marmara-otoyolu-oto-cekici.html`, priority: '0.95', changefreq: 'daily' },
  { loc: `${DOMAIN}/bolgeler/tem-otoyolu-oto-cekici.html`, priority: '0.9', changefreq: 'daily' },
  { loc: `${DOMAIN}/bolgeler/gebze-oto-cekici.html`, priority: '0.9', changefreq: 'daily' },
  { loc: `${DOMAIN}/bolgeler/pendik-oto-cekici.html`, priority: '0.9', changefreq: 'daily' },
  { loc: `${DOMAIN}/bolgeler/cayirova-oto-cekici.html`, priority: '0.9', changefreq: 'daily' },
  { loc: `${DOMAIN}/bolgeler/sabiha-gokcen-oto-cekici.html`, priority: '0.9', changefreq: 'daily' },
  { loc: `${DOMAIN}/bolgeler/tuzla-oto-cekici.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/bolgeler/sekerpinar-oto-cekici.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/bolgeler/dilovasi-oto-cekici.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/bolgeler/sultanbeyli-oto-cekici.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/bolgeler/sancaktepe-oto-cekici.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/bolgeler/kurnakoy-mecidiye-oto-cekici.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/bolgeler/darica-oto-cekici.html`, priority: '0.85', changefreq: 'weekly' },
  { loc: `${DOMAIN}/bolgeler/omerli-resadiye-oto-cekici.html`, priority: '0.85', changefreq: 'weekly' },
  // Blog
  { loc: `${DOMAIN}/blog/otoyolda-arac-arizalandiginda-yapilmasi-gerekenler.html`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${DOMAIN}/blog/kuzey-marmara-otoyolu-cekici-fiyatlari-nasil-hesaplanir.html`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${DOMAIN}/blog/otomatik-vitesli-ve-elektrikli-araclar-nasil-cekilir.html`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${DOMAIN}/blog/aku-neden-aniden-biter-takviye-nasil-yapilir.html`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${DOMAIN}/blog/kurtkoy-ve-gebze-en-yakin-oto-cekici-rehberi.html`, priority: '0.8', changefreq: 'monthly' }
];

const today = new Date().toISOString().split('T')[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`✓ sitemap.xml üretildi (${urls.length} URL)`);

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

fs.writeFileSync(path.join(ROOT, 'robots.txt'), robotsTxt, 'utf8');
console.log('✓ robots.txt üretildi');
