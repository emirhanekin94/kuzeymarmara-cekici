'use strict';

const fs = require('fs');
const path = require('path');
const { SITE_URL, BUSINESS, telLink, whatsappLink } = require('../data/business.js');
const { REGIONS } = require('../data/regions.js');
const { SERVICES } = require('../data/services.js');
const { BLOG_POSTS } = require('../data/blog.js');
const {
  escapeHtml, page, trustBadges, breadcrumb, breadcrumbSchema, faqSchema, faqSection
} = require('./partials.js');

const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'blog');

/* ===================== INDEX (ANA SAYFA) ===================== */

const HOME_FAQS = [
  { q: 'Kuzey Marmara ve TEM Otoyolu\'nda ne kadar sürede yanımda olursunuz?', a: 'Hat boyunca konuşlu nöbetçi araçlarımız sayesinde ortalama 10-15 dakika içinde olay yerine ulaşıyoruz.' },
  { q: 'Fiyatlandırmanız nasıl işliyor, ek ücret çıkar mı?', a: 'Taban ücret + km bazlı şeffaf tarifemizle, konumunuzu aldığımız anda telefonda sabit fiyat teyidi veriyoruz. Sürpriz ek ücret talep etmiyoruz.' },
  { q: 'Kredi kartı veya FAST ile ödeme yapabilir miyim?', a: 'Evet, mobil POS cihazlarımızla yerinde kredi kartı (taksitli) ve FAST havale ile ödeme kabul ediyoruz.' },
  { q: 'Hangi bölgelere hizmet veriyorsunuz?', a: 'Kuzey Marmara Otoyolu, TEM Otoyolu, Kurtköy, Pendik, Gebze, Çayırova, Tuzla, Sabiha Gökçen ve çevresindeki tüm ilçe ve sanayi bölgelerine 7/24 hizmet veriyoruz.' },
  { q: 'Elektrikli veya lüks spor araçlar için özel ekipmanınız var mı?', a: 'Evet, sıfır dereceli rampa aparatı ve elektrikli araçlar için "Transport Mode" uyumlu kayar kasa platformlarımız bulunmaktadır.' }
];

function homeHeroHtml() {
  return `<section class="hero">
    <div class="container hero-inner">
      <h1>Kuzey Marmara &amp; TEM Otoyolunda 7/24 En Yakın Acil Oto Çekici</h1>
      <p class="hero-lead">Kurtköy, Pendik, Çayırova, Gebze, Tuzla ve Sabiha Gökçen Havalimanı çevresinde 10-15 dakikada yanınızdayız. %100 kaskolu taşıma, sabit fiyat garantisi, kredi kartına taksit.</p>
      <div class="ads-highlights">
        <span>✅ 15 Dakikada Yanınızda</span>
        <span>✅ Kaskolu Taşıma</span>
        <span>✅ Sabit Fiyat</span>
        <span>✅ Kredi Kartı Geçerli</span>
      </div>
      <div class="hero-cta">
        <a class="btn btn-call" href="${telLink()}">📞 Hemen Ara: ${BUSINESS.phoneDisplay}</a>
        <a class="btn btn-whatsapp" href="${whatsappLink()}" target="_blank" rel="noopener">💬 WhatsApp Konum Gönder</a>
      </div>
    </div>
  </section>`;
}

function homeSearchHtml() {
  const allItems = [
    ...REGIONS.map(r => ({ name: r.shortName, url: `/bolgeler/${r.slug}`, type: 'Bölge' })),
    ...SERVICES.map(s => ({ name: s.name, url: `/hizmetler/${s.slug}`, type: 'Hizmet' }))
  ];
  const rows = allItems.map(it => `<a class="service-mini-card" data-search-item="${escapeHtml(it.name)}" href="${it.url}">
      <span>${it.type === 'Bölge' ? '📍' : '🔧'}</span>
      <span>${escapeHtml(it.name)}</span>
    </a>`).join('');
  return `<section class="section">
    <div class="container">
      <h2>Bölge veya Hizmet Arayın</h2>
      <p class="section-lead">Bulunduğunuz bölgeyi veya ihtiyacınız olan hizmeti yazarak hızlıca ilgili sayfaya ulaşabilirsiniz.</p>
      <input type="text" id="live-search" placeholder="Örn: Kurtköy, akü takviye, Gebze..." style="width:100%;max-width:480px;padding:14px 16px;border-radius:12px;border:1.5px solid var(--border-light);font-size:15px;margin-bottom:18px;font-family:inherit;">
      <div class="service-grid-mini">${rows}</div>
    </div>
  </section>`;
}

function homeServicesHtml() {
  const cards = SERVICES.map(s => `<a class="service-card" href="/hizmetler/${s.slug}">
      <span class="service-icon-big">${s.icon}</span>
      <h3>${escapeHtml(s.name)}</h3>
      <p>${escapeHtml(s.intro)}</p>
      <span class="region-card-link">Detayları Gör →</span>
    </a>`).join('');
  return `<section class="section section-alt">
    <div class="container">
      <h2>Hizmetlerimiz</h2>
      <p class="section-lead">Binek araçtan ağır vasıtaya, motosikletten lüks spor araca kadar her türlü kurtarma ve taşıma ihtiyacınız için uzman ekipman ve ekiplerimiz hazır.</p>
      <div class="service-grid">${cards}</div>
    </div>
  </section>`;
}

function homeRegionsHtml() {
  const featured = REGIONS.filter(r => r.isAds).concat(REGIONS.filter(r => !r.isAds)).slice(0, 9);
  const cards = featured.map(r => `<a class="region-card" href="/bolgeler/${r.slug}">
      <h3>${escapeHtml(r.shortName)} Oto Çekici</h3>
      <p>${escapeHtml(r.intro.slice(0, 100))}…</p>
      <span class="region-card-link">Detayları Gör →</span>
    </a>`).join('');
  return `<section class="section">
    <div class="container">
      <h2>Hizmet Bölgelerimiz</h2>
      <p class="section-lead">Kuzey Marmara Otoyolu ve TEM Otoyolu'na bağlı tüm stratejik ilçe ve sanayi aksında 7/24 hizmet veriyoruz.</p>
      <div class="region-grid">${cards}</div>
      <p style="margin-top:18px;"><a class="btn btn-outline" href="/bolgeler/">Tüm Bölgeleri Gör →</a></p>
    </div>
  </section>`;
}

function homeBlogHtml() {
  const cards = BLOG_POSTS.slice(0, 3).map(p => `<a class="blog-card" href="/blog/${p.slug}">
      <span class="blog-tag">${escapeHtml(p.tag)}</span>
      <h3>${escapeHtml(p.title)}</h3>
      <span class="region-card-link">Oku →</span>
    </a>`).join('');
  return `<section class="section section-alt">
    <div class="container">
      <h2>Oto Kurtarma Rehberi</h2>
      <p class="section-lead">Otoyolda arıza, kaza ve bakım konularında bilmeniz gereken her şey.</p>
      <div class="blog-grid">${cards}</div>
      <p style="margin-top:18px;"><a class="btn btn-outline" href="/blog/" style="border-color:rgba(255,255,255,0.2);color:#fff;">Tüm Blog Yazıları →</a></p>
    </div>
  </section>`;
}

function buildIndex() {
  const bodyHtml = `
  ${homeHeroHtml()}
  <section class="section"><div class="container">${trustBadges()}</div></section>
  ${homeSearchHtml()}
  ${homeServicesHtml()}
  ${homeRegionsHtml()}
  ${homeBlogHtml()}
  ${faqSection(HOME_FAQS, 'Sıkça Sorulan Sorular')}
  <section class="section cta-section">
    <div class="container cta-inner">
      <h2>Yolda Kaldınız mı? Hemen Arayın.</h2>
      <p>7/24 nöbetçi ekiplerimiz, Kuzey Marmara ve TEM Otoyolu hattında 10-15 dakika içinde yanınızda.</p>
      <div class="hero-cta">
        <a class="btn btn-call" href="${telLink()}">📞 Hemen Ara</a>
        <a class="btn btn-whatsapp" href="${whatsappLink()}" target="_blank" rel="noopener">💬 Konum Gönder</a>
      </div>
    </div>
  </section>`;

  return page({
    title: 'Kuzey Marmara Çekici | 7/24 En Yakın Acil Oto Çekici & Yol Yardım',
    description: 'Kuzey Marmara Otoyolu, TEM Otoyolu, Kurtköy, Pendik, Gebze, Çayırova, Tuzla ve Sabiha Gökçen çevresinde 7/24 acil oto çekici ve yol yardım. 10-15 dakikada yanınızdayız.',
    canonicalPath: '/',
    active: 'home',
    bodySchemas: [faqSchema(HOME_FAQS)],
    bodyHtml
  });
}

/* ===================== HAKKIMIZDA ===================== */

function buildAbout() {
  const breadcrumbItems = [{ name: 'Ana Sayfa', url: '/' }, { name: 'Hakkımızda', url: '/hakkimizda' }];
  const bodyHtml = `
  <section class="hero hero-sub">
    <div class="container hero-inner">
      ${breadcrumb(breadcrumbItems)}
      <h1>Hakkımızda</h1>
      <p class="hero-lead">Kuzey Marmara ve TEM Otoyolu hattında ${BUSINESS.foundingYear} yılından bu yana 7/24 kesintisiz oto çekici, kurtarma ve yol yardım hizmeti veriyoruz.</p>
    </div>
  </section>
  <section class="section">
    <div class="container content-block">
      <h2>Hikayemiz</h2>
      <p>${escapeHtml(BUSINESS.name)}, Kuzey Marmara Otoyolu ve TEM Otoyolu'nun Anadolu yakasındaki en yoğun koridorunda, sürücülerin en çok ihtiyaç duyduğu anda yanlarında olmak amacıyla kuruldu. Kurtköy, Pendik, Gebze, Çayırova ve Tuzla gibi hem yoğun sanayi hem de yoğun konut nüfusuna sahip bölgelerde, nöbetçi kurtarıcı filomuzla 7/24 kesintisiz hizmet veriyoruz.</p>
      <h2>Filomuz &amp; Ekipmanlarımız</h2>
      <div class="info-grid">
        <div class="info-card"><h3>Hidrolik Kayar Kasa Platformlar</h3><p>Binek, SUV ve lüks araçlar için sıfır hasar taşıma garantili kayar platform araçlar.</p></div>
        <div class="info-card"><h3>Ağır Hizmet Vinç Sistemleri</h3><p>Çift çeker gözlüklü ve körüklü süspansiyonlu sistemlerle kamyon, tır ve otobüs kurtarma.</p></div>
        <div class="info-card"><h3>Sıfır Dereceli Rampa Aparatı</h3><p>Basık gövdeli spor ve lüks araçlar için alt kaporta hasarını önleyen özel rampa sistemi.</p></div>
        <div class="info-card"><h3>Gece Güvenlik İkaz Kuleleri</h3><p>Otoyol üzeri operasyonlarda görünürlüğü artıran LED ikaz ve reflektif ekipmanlar.</p></div>
      </div>
      <h2>Güvencelerimiz</h2>
      <ul class="check-list">
        <li>%100 Emtia Nakliyat Taşıma Kaskosu</li>
        <li>KTK Yetki Belgeli Uzman Operatörler</li>
        <li>Sıfır Hasar Garantisi</li>
        <li>Şeffaf, Sabit Fiyat Politikası</li>
      </ul>
      <h2>Neden Bizi Seçmelisiniz?</h2>
      <p>7/24 kesintisiz nöbetçi filo, 10-15 dakika ortalama intikal süresi, bölge uzmanlığına dayalı güzergah bilgisi ve her araç tipine uygun özel ekipmanımızla, Kuzey Marmara ve TEM Otoyolu hattında güvenilir çözüm ortağınız olmaya devam ediyoruz.</p>
    </div>
  </section>`;

  return page({
    title: 'Hakkımızda | Kuzey Marmara Çekici',
    description: 'Kuzey Marmara Çekici\'nin hikayesi, filosu, ekipmanları ve güvenceleri hakkında bilgi alın. 7/24 KTK yetki belgeli uzman operatörler.',
    canonicalPath: '/hakkimizda',
    active: 'about',
    bodySchemas: [breadcrumbSchema(breadcrumbItems)],
    bodyHtml
  });
}

/* ===================== İLETİŞİM ===================== */

function buildContact() {
  const breadcrumbItems = [{ name: 'Ana Sayfa', url: '/' }, { name: 'İletişim', url: '/iletisim' }];
  const bodyHtml = `
  <section class="hero hero-sub">
    <div class="container hero-inner">
      ${breadcrumb(breadcrumbItems)}
      <h1>İletişim</h1>
      <p class="hero-lead">Acil durumlar için doğrudan arayın veya WhatsApp'tan konumunuzu paylaşın; diğer konular için formu kullanabilirsiniz.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="info-grid">
        <div class="info-card"><h3>📞 Acil Çağrı Hattı</h3><p><a href="${telLink()}" style="font-weight:800;color:var(--orange-2);font-size:18px;">${BUSINESS.phoneDisplay}</a></p></div>
        <div class="info-card"><h3>💬 WhatsApp</h3><p><a href="${whatsappLink()}" target="_blank" rel="noopener" style="font-weight:800;color:var(--wa-2);font-size:18px;">${BUSINESS.phoneDisplay}</a></p></div>
        <div class="info-card"><h3>⏱️ Çalışma Saatleri</h3><p>${escapeHtml(BUSINESS.hours)}</p></div>
        <div class="info-card"><h3>📍 Hizmet Bölgesi</h3><p>${escapeHtml(BUSINESS.address.streetAddress)}, ${escapeHtml(BUSINESS.address.locality)}/${escapeHtml(BUSINESS.address.region)}</p></div>
      </div>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container two-col">
      <div>
        <h2>Bize Yazın</h2>
        <p>Acil olmayan talepleriniz için formu doldurabilirsiniz; acil durumlarda lütfen doğrudan arayın.</p>
        <form class="contact-form" id="contact-form">
          <label>Ad Soyad <input type="text" name="name" required></label>
          <label>Telefon <input type="tel" name="phone" required></label>
          <label>Mesajınız <textarea name="message" rows="4" required></textarea></label>
          <button type="submit" class="btn btn-call" style="border:none;cursor:pointer;">Gönder</button>
          <p id="contact-form-status" style="display:none;color:var(--green-1);font-weight:600;"></p>
        </form>
      </div>
      <div>
        <h2>Hizmet Verdiğimiz Bölgeler</h2>
        <div class="neighbor-grid">${REGIONS.map(r => `<a class="neighbor-link" href="/bolgeler/${r.slug}" style="background:var(--bg-card);border-color:rgba(255,255,255,0.1);color:var(--text-on-dark);">${escapeHtml(r.shortName)}</a>`).join('')}</div>
      </div>
    </div>
  </section>`;

  return page({
    title: 'İletişim | Kuzey Marmara Çekici',
    description: 'Kuzey Marmara Çekici iletişim bilgileri: telefon, WhatsApp, çalışma saatleri ve hizmet bölgeleri. 7/24 acil çağrı hattı.',
    canonicalPath: '/iletisim',
    active: 'contact',
    bodySchemas: [breadcrumbSchema(breadcrumbItems)],
    bodyHtml
  });
}

/* ===================== GALERİ ===================== */

function buildGallery() {
  const breadcrumbItems = [{ name: 'Ana Sayfa', url: '/' }, { name: 'Galeri', url: '/galeri' }];
  const items = [
    'Hidrolik Kayar Kasa Platform Araç', 'Ağır Hizmet Vinç Operasyonu', 'Sıfır Dereceli Rampa ile Lüks Araç Yükleme',
    'Gece Otoyol Güvenlik İkaz Kulesi', 'Motosiklet Transfer Sehpası', 'Mobil Akü Takviye Operasyonu',
    'Otoyol Üzeri Acil Müdahale', 'Elektrikli Araç Transport Mode Yükleme', 'Ekibimiz Sahada'
  ];
  const grid = items.map(i => `<div class="gallery-item">${escapeHtml(i)}</div>`).join('');
  const bodyHtml = `
  <section class="hero hero-sub">
    <div class="container hero-inner">
      ${breadcrumb(breadcrumbItems)}
      <h1>Galeri</h1>
      <p class="hero-lead">Filomuz, ekipmanlarımız ve saha operasyonlarımızdan kareler.</p>
    </div>
  </section>
  <section class="section">
    <div class="container"><div class="gallery-grid">${grid}</div></div>
  </section>`;

  return page({
    title: 'Galeri | Kuzey Marmara Çekici',
    description: 'Kuzey Marmara Çekici filosu, ekipmanları ve saha operasyonlarından görseller.',
    canonicalPath: '/galeri',
    active: 'gallery',
    bodySchemas: [breadcrumbSchema(breadcrumbItems)],
    bodyHtml
  });
}

/* ===================== BLOG ===================== */

function buildBlogIndex() {
  const breadcrumbItems = [{ name: 'Ana Sayfa', url: '/' }, { name: 'Blog', url: '/blog/' }];
  const cards = BLOG_POSTS.map(p => `<a class="blog-card" href="/blog/${p.slug}">
      <span class="blog-tag">${escapeHtml(p.tag)}</span>
      <h3>${escapeHtml(p.title)}</h3>
      <p style="font-size:13px;color:var(--text-muted);">${escapeHtml(p.publishDate)}</p>
      <span class="region-card-link">Oku →</span>
    </a>`).join('');
  const bodyHtml = `
  <section class="hero hero-sub">
    <div class="container hero-inner">
      ${breadcrumb(breadcrumbItems)}
      <h1>Oto Kurtarma Rehberi &amp; Blog</h1>
      <p class="hero-lead">Otoyolda arıza, kaza, bakım ve çekici hizmetleri hakkında bilmeniz gereken her şey.</p>
    </div>
  </section>
  <section class="section">
    <div class="container"><div class="blog-grid">${cards}</div></div>
  </section>`;

  return page({
    title: 'Blog | Kuzey Marmara Çekici Oto Kurtarma Rehberi',
    description: 'Otoyolda arıza, kaza, akü, lastik ve çekici fiyatları hakkında kapsamlı rehber makaleler.',
    canonicalPath: '/blog/',
    active: 'blog',
    bodySchemas: [breadcrumbSchema(breadcrumbItems)],
    bodyHtml
  });
}

function buildBlogPost(post) {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' }, { name: 'Blog', url: '/blog/' }, { name: post.title, url: `/blog/${post.slug}` }
  ];
  const sections = post.sections.map(s => `<h2>${escapeHtml(s.heading)}</h2>${s.html}`).join('');
  const bodyHtml = `
  <section class="hero hero-sub">
    <div class="container hero-inner">
      ${breadcrumb(breadcrumbItems)}
      <span class="blog-tag" style="color:var(--orange-1);">${escapeHtml(post.tag)}</span>
      <h1>${escapeHtml(post.title)}</h1>
    </div>
  </section>
  <section class="section">
    <div class="container content-block blog-article">
      <p class="blog-meta">Yayınlanma Tarihi: ${escapeHtml(post.publishDate)} • ${escapeHtml(BUSINESS.name)} Editör Ekibi</p>
      ${sections}
    </div>
  </section>
  ${faqSection(post.faqs, 'Sıkça Sorulan Sorular')}
  <section class="section cta-section">
    <div class="container cta-inner">
      <h2>Yolda Kaldınız mı? Hemen Arayın.</h2>
      <p>7/24 nöbetçi ekiplerimiz 10-15 dakika içinde yanınızda.</p>
      <div class="hero-cta">
        <a class="btn btn-call" href="${telLink()}">📞 Hemen Ara</a>
        <a class="btn btn-whatsapp" href="${whatsappLink()}" target="_blank" rel="noopener">💬 Konum Gönder</a>
      </div>
    </div>
  </section>`;

  const articleSchema = {
    '@type': 'Article',
    headline: post.title,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: { '@type': 'Organization', name: BUSINESS.name },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` }
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`
  };

  return page({
    title: post.metaTitle,
    description: post.metaDescription,
    canonicalPath: `/blog/${post.slug}`,
    active: 'blog',
    bodySchemas: [breadcrumbSchema(breadcrumbItems), articleSchema, faqSchema(post.faqs)],
    bodyHtml
  });
}

/* ===================== 404 ===================== */

function build404() {
  const bodyHtml = `
  <section class="hero hero-sub">
    <div class="container hero-inner text-center">
      <h1>404 - Sayfa Bulunamadı</h1>
      <p class="hero-lead">Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Acil durumlar için hemen arayabilirsiniz.</p>
      <div class="hero-cta" style="justify-content:center;">
        <a class="btn btn-call" href="${telLink()}">📞 Hemen Ara</a>
        <a class="btn btn-outline" href="/" style="color:#fff;border-color:rgba(255,255,255,0.3);">Ana Sayfaya Dön</a>
      </div>
    </div>
  </section>`;
  return page({
    title: '404 - Sayfa Bulunamadı | Kuzey Marmara Çekici',
    description: 'Aradığınız sayfa bulunamadı.',
    canonicalPath: '/404',
    active: '',
    bodySchemas: [],
    bodyHtml
  });
}

/* ===================== RUN ===================== */

function run() {
  fs.writeFileSync(path.join(ROOT, 'index.html'), buildIndex(), 'utf8');
  fs.writeFileSync(path.join(ROOT, 'hakkimizda.html'), buildAbout(), 'utf8');
  fs.writeFileSync(path.join(ROOT, 'iletisim.html'), buildContact(), 'utf8');
  fs.writeFileSync(path.join(ROOT, 'galeri.html'), buildGallery(), 'utf8');
  fs.writeFileSync(path.join(ROOT, '404.html'), build404(), 'utf8');

  fs.mkdirSync(BLOG_DIR, { recursive: true });
  fs.writeFileSync(path.join(BLOG_DIR, 'index.html'), buildBlogIndex(), 'utf8');
  for (const post of BLOG_POSTS) {
    fs.writeFileSync(path.join(BLOG_DIR, `${post.slug}.html`), buildBlogPost(post), 'utf8');
  }

  console.log('✔ Statik sayfalar (index, hakkimizda, iletisim, galeri, 404) ve blog oluşturuldu.');
}

run();
