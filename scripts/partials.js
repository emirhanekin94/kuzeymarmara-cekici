'use strict';

const { SITE_URL, BUSINESS, whatsappLink, telLink } = require('../data/business.js');
const { REGIONS } = require('../data/regions.js');
const { SERVICES } = require('../data/services.js');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function head({ title, description, canonicalPath, schema, preloadImage }) {
  const canonical = `${SITE_URL}${canonicalPath}`;
  return `<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:locale" content="tr_TR">
  <meta property="og:site_name" content="${escapeHtml(BUSINESS.name)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#070b14">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  ${preloadImage ? `<link rel="preload" as="image" href="${preloadImage}" fetchpriority="high">` : ''}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" media="print" onload="this.media='all'">
  <link rel="stylesheet" href="/css/style.css">
  ${schema ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>` : ''}`;
}

function topBar() {
  return `<div class="top-bar">
    <div class="container top-bar-inner">
      <span class="live-pulse"><span class="pulse-dot"></span> 7/24 Nöbetçi Çekici Aktif • Anadolu Yakası, Kocaeli &amp; Otoyol Koridorunda 10-15 Dk Varış</span>
      <a class="top-bar-phone" href="${telLink()}">${BUSINESS.phoneDisplay}</a>
    </div>
  </div>`;
}

function headerNav(active) {
  const regionLinks = REGIONS.map(r => `<a href="/bolgeler/${r.slug}">${escapeHtml(r.shortName)}</a>`).join('');
  const serviceLinks = SERVICES.map(s => `<a href="/hizmetler/${s.slug}">${escapeHtml(s.name)}</a>`).join('');
  const is = (k) => (active === k ? ' class="active"' : '');
  return `<header class="site-header">
    ${topBar()}
    <div class="container nav-inner">
      <a href="/" class="brand">
        <span class="brand-mark">M</span>
        <span class="brand-text">Marmara Çekici<br><small>Anadolu Yakası &amp; Otoyol Filosu</small></span>
      </a>
      <nav class="main-nav" id="main-nav">
        <a href="/"${is('home')}>Ana Sayfa</a>
        <div class="nav-dropdown">
          <a href="/hizmetler/"${is('services')}>Hizmetlerimiz ▾</a>
          <div class="dropdown-panel">${serviceLinks}</div>
        </div>
        <div class="nav-dropdown">
          <a href="/bolgeler/"${is('regions')}>Bölgeler ▾</a>
          <div class="dropdown-panel">${regionLinks}</div>
        </div>
        <a href="/blog/"${is('blog')}>Blog</a>
        <a href="/hakkimizda"${is('about')}>Hakkımızda</a>
        <a href="/galeri"${is('gallery')}>Galeri</a>
        <a href="/iletisim"${is('contact')}>İletişim</a>
      </nav>
      <div class="nav-actions">
        <a class="btn btn-ghost-call desktop-only" href="${telLink()}">📞 ${BUSINESS.phoneDisplay}</a>
        <button class="hamburger" id="hamburger" aria-label="Menü" aria-expanded="false" aria-controls="main-nav">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;
}

function stickyDock() {
  return `<div class="sticky-dock" role="group" aria-label="Acil çağrı">
    <a class="dock-btn dock-call" href="${telLink()}">
      <span class="dock-icon">📞</span><span>HEMEN ARA</span>
    </a>
    <a class="dock-btn dock-whatsapp" id="dock-whatsapp" href="${whatsappLink()}" target="_blank" rel="noopener">
      <span class="dock-icon">📍</span><span>KONUM AT</span>
    </a>
  </div>
  <div class="desktop-float" aria-hidden="false">
    <a class="float-btn float-call" href="${telLink()}" title="Hemen Ara">📞</a>
    <a class="float-btn float-whatsapp" id="float-whatsapp" href="${whatsappLink()}" target="_blank" rel="noopener" title="WhatsApp Konum Gönder">💬</a>
  </div>`;
}

function trustBadges() {
  return `<div class="trust-grid">
    <div class="trust-badge">
      <span class="trust-icon">⏱️</span>
      <strong>10-15 Dk Hızlı İntikal</strong>
      <p>Bölgede Hazır Bekleyen Nöbetçi Araçlar</p>
    </div>
    <div class="trust-badge">
      <span class="trust-icon">🛡️</span>
      <strong>%100 Taşıma Kaskolu</strong>
      <p>Aracınız Şasi Sabitlemeyle Güvende</p>
    </div>
    <div class="trust-badge">
      <span class="trust-icon">💰</span>
      <strong>Sabit Fiyat Sözü</strong>
      <p>Sürpriz Yok, Şeffaf Hesaplama</p>
    </div>
    <div class="trust-badge">
      <span class="trust-icon">💳</span>
      <strong>7/24 Yerinde Ödeme</strong>
      <p>Mobil POS, Kredi Kartına Taksit</p>
    </div>
  </div>`;
}

function breadcrumb(items) {
  const inner = items.map((it, i) => {
    if (i === items.length - 1) return `<span aria-current="page">${escapeHtml(it.name)}</span>`;
    return `<a href="${it.url}">${escapeHtml(it.name)}</a>`;
  }).join('<span class="crumb-sep">/</span>');
  return `<nav class="breadcrumb" aria-label="Breadcrumb">${inner}</nav>`;
}

function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.url}`
    }))
  };
}

function faqSchema(faqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}

function faqSection(faqs, title) {
  const items = faqs.map(f => `<details class="faq-item">
      <summary>${escapeHtml(f.q)}</summary>
      <p>${escapeHtml(f.a)}</p>
    </details>`).join('');
  return `<section class="section faq-section">
    <div class="container">
      <h2>${escapeHtml(title || 'Sıkça Sorulan Sorular')}</h2>
      <div class="faq-list">${items}</div>
    </div>
  </section>`;
}

function footer() {
  const regionLinks = REGIONS.slice(0, 10).map(r => `<a href="/bolgeler/${r.slug}">${escapeHtml(r.shortName)}</a>`).join('');
  const serviceLinks = SERVICES.map(s => `<a href="/hizmetler/${s.slug}">${escapeHtml(s.name)}</a>`).join('');
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col footer-brand">
        <div class="brand">
          <span class="brand-mark">M</span>
          <span class="brand-text">Marmara Çekici<br><small>Anadolu Yakası &amp; Otoyol Filosu</small></span>
        </div>
        <p>${escapeHtml(BUSINESS.slogan)}</p>
        <p class="footer-phone"><a href="${telLink()}">${BUSINESS.phoneDisplay}</a></p>
        <p>${escapeHtml(BUSINESS.hours)}</p>
      </div>
      <div class="footer-col">
        <h3>Hizmetlerimiz</h3>
        <div class="footer-links">${serviceLinks}</div>
      </div>
      <div class="footer-col">
        <h3>Hizmet Bölgeleri</h3>
        <div class="footer-links">${regionLinks}<a href="/bolgeler/">Tüm Bölgeler →</a></div>
      </div>
      <div class="footer-col">
        <h3>Kurumsal</h3>
        <div class="footer-links">
          <a href="/hakkimizda">Hakkımızda</a>
          <a href="/iletisim">İletişim</a>
          <a href="/galeri">Galeri</a>
          <a href="/blog/">Blog</a>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <p>© ${new Date().getFullYear()} ${escapeHtml(BUSINESS.name)}. Tüm hakları saklıdır.</p>
    </div>
  </footer>`;
}

function localBusinessSchema() {
  return {
    '@type': ['EmergencyService', 'AutoRepair', 'TowingService', 'LocalBusiness'],
    name: BUSINESS.name,
    image: `${SITE_URL}/assets/og-cover.jpg`,
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    url: SITE_URL,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count
    },
    areaServed: BUSINESS.areaServed.map(a => ({ '@type': 'Place', name: a }))
  };
}

function page({ title, description, canonicalPath, active, bodySchemas, bodyHtml, preloadImage }) {
  const graph = [localBusinessSchema(), ...(bodySchemas || [])];
  const schema = { '@context': 'https://schema.org', '@graph': graph };
  return `<!DOCTYPE html>
<html lang="tr">
<head>
${head({ title, description, canonicalPath, schema, preloadImage })}
</head>
<body>
${headerNav(active)}
<main>
${bodyHtml}
</main>
${footer()}
${stickyDock()}
<script src="/js/main.js" defer></script>
</body>
</html>`;
}

module.exports = {
  escapeHtml, head, headerNav, stickyDock, trustBadges, breadcrumb, breadcrumbSchema,
  faqSchema, faqSection, footer, localBusinessSchema, page
};
