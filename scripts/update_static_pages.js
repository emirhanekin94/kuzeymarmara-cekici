/**
 * KUZEY MARMARA OTO ÇEKİCİ - STATİK SAYFALAR ÜRETİM MOTORU
 * Tel & WhatsApp: 0536 769 43 24
 * Sayfalar: hakkimizda.html, iletisim.html, galeri.html
 */

const fs = require('fs');
const path = require('path');

const PHONE = '0536 769 43 24';
const PHONE_RAW = '905367694324';
const DOMAIN = 'https://kuzeymarmaracekici.com';

const waSvg = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: middle; margin-right: 6px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>`;

const headerCallPillHtml = `
          <a href="tel:${PHONE_RAW}" class="header-call-pill">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>${PHONE}</span>
          </a>`;

const richFooterHtml = `
  <!-- 4 Kolonlu Kurumsal Site Footer -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col footer-brand">
        <div class="footer-logo">
          <img src="images/logo.svg" alt="Marmara Çekici Logo" width="44" height="44">
          <span style="color: #fff; font-size: 1.25rem; font-weight: 900; margin-left: 10px;">MARMARA <span style="color: #ea580c;">ÇEKİCİ</span></span>
        </div>
        <p style="color: #94a3b8; font-size: 0.9rem; line-height: 1.6; margin: 12px 0 16px;">
          İstanbul Anadolu Yakası (Pendik, Kartal, Maltepe, Tuzla), Kocaeli (Gebze, Çayırova) ve Kuzey Marmara &amp; TEM otoyol koridorunda 7/24 güvenilir, kaskolu ve sabit fiyatlı oto kurtarıcı filosu.
        </p>
        <p style="color: #cbd5e1; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px;">
          Acil Çağrı: <a href="tel:${PHONE_RAW}" style="color: #ea580c; text-decoration: none; font-weight: 800;">${PHONE}</a>
        </p>
        <p style="color: #64748b; font-size: 0.85rem;">7 Gün 24 Saat Kesintisiz Nöbetçi Çekici Filosu</p>
      </div>

      <div class="footer-col">
        <h4 style="color: #fff; font-weight: 800; font-size: 1.05rem; margin-bottom: 16px;">Hizmetlerimiz</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2.1; font-size: 0.9rem;">
          <li><a href="/hizmetler/oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Kayar Kasa Oto Çekici</a></li>
          <li><a href="/hizmetler/otoyol-oto-kurtarma.html" style="color: #94a3b8; text-decoration: none;">Otoyol Oto Kurtarma</a></li>
          <li><a href="/hizmetler/kaza-vinc-kurtarma.html" style="color: #94a3b8; text-decoration: none;">Kaza &amp; Vinç Kurtarma</a></li>
          <li><a href="/hizmetler/luks-spor-arac-cekici.html" style="color: #94a3b8; text-decoration: none;">Lüks &amp; Spor Araç Taşıma</a></li>
          <li><a href="/hizmetler/ahtapot-cekici.html" style="color: #94a3b8; text-decoration: none;">Ahtapot Vinç Çekici</a></li>
          <li><a href="/hizmetler/kapali-otopark-cekici.html" style="color: #94a3b8; text-decoration: none;">Kapalı Otopark Çekicisi</a></li>
          <li><a href="/hizmetler/index.html" style="color: #ea580c; text-decoration: none; font-weight: 700;">Tüm 13 Hizmet →</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 style="color: #fff; font-weight: 800; font-size: 1.05rem; margin-bottom: 16px;">Öne Çıkan Bölgeler</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2.1; font-size: 0.9rem;">
          <li><a href="/bolgeler/kurtkoy-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Kurtköy Çekici</a></li>
          <li><a href="/bolgeler/kuzey-marmara-otoyolu-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">KMO Otoyol Çekici</a></li>
          <li><a href="/bolgeler/tem-otoyolu-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">TEM Otoyolu Çekici</a></li>
          <li><a href="/bolgeler/gebze-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Gebze Çekici</a></li>
          <li><a href="/bolgeler/pendik-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Pendik Çekici</a></li>
          <li><a href="/bolgeler/sabiha-gokcen-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Sabiha Gökçen Çekici</a></li>
          <li><a href="/bolgeler/index.html" style="color: #ea580c; text-decoration: none; font-weight: 700;">Tüm Bölgelerimiz →</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 style="color: #fff; font-weight: 800; font-size: 1.05rem; margin-bottom: 16px;">Kurumsal &amp; Hızlı Menü</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2.1; font-size: 0.9rem;">
          <li><a href="/" style="color: #94a3b8; text-decoration: none;">Ana Sayfa</a></li>
          <li><a href="/hakkimizda.html" style="color: #94a3b8; text-decoration: none;">Hakkımızda</a></li>
          <li><a href="/galeri.html" style="color: #94a3b8; text-decoration: none;">Foto Galeri</a></li>
          <li><a href="/blog/index.html" style="color: #94a3b8; text-decoration: none;">Blog &amp; Rehber</a></li>
          <li><a href="/iletisim.html" style="color: #94a3b8; text-decoration: none;">İletişim</a></li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom" style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 25px; margin-top: 25px; text-align: center; color: #64748b; font-size: 0.88rem;">
      <p>&copy; 2026 Marmara Çekici. Tüm hakları saklıdır. 7/24 Kesintisiz Otoyol &amp; Şehir İçi Oto Kurtarma.</p>
    </div>
  </footer>`;

const mobileDockHtml = `
  <div class="mobile-sticky-dock">
    <a href="tel:${PHONE_RAW}" class="sticky-dock-btn sticky-call-btn" aria-label="Hemen Ara">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
      <span>HEMEN ARA</span>
    </a>
    <button type="button" class="sticky-dock-btn sticky-whatsapp-btn btn-send-location" aria-label="WhatsApp Konum Gönder">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
      <span>KONUM AT</span>
    </button>
  </div>`;

// 1. HAKKIMIZDA SAYFASI (SİL BAŞTAN YENİDEN YAZILDI)
function buildHakkimizda() {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hakkımızda | Marmara Çekici &amp; Kurtköy Oto Kurtarma - 0536 769 43 24</title>
  <meta name="description" content="Marmara Çekici kurumsal tarihi, modern araç filomuz, 15+ yıllık otoyol kurtarma deneyimimiz, sabit fiyat sözümüz ve %100 nakliyat kaskosu güvencemiz.">
  <meta name="robots" content="index, follow">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="format-detection" content="telephone=no">
  <link rel="canonical" href="${DOMAIN}/hakkimizda.html">
  <link rel="alternate" type="text/plain" href="${DOMAIN}/llms.txt" title="LLM Knowledge Base">
  <link rel="icon" type="image/svg+xml" href="images/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="css/style.css?v=3.4">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Marmara Çekici Hakkımızda",
    "description": "Marmara Çekici kurumsal bilgileri, donanımlı araç filomuz ve hizmet ilkelerimiz.",
    "url": "${DOMAIN}/hakkimizda.html",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "${DOMAIN}/" },
        { "@type": "ListItem", "position": 2, "name": "Hakkımızda", "item": "${DOMAIN}/hakkimizda.html" }
      ]
    }
  }
  </script>
</head>
<body>

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="brand-logo">
          <img src="images/logo.svg" alt="Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Anadolu Yakası, Kocaeli &amp; Otoyol Kurtarma</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="/" class="nav-link">Ana Sayfa</a></li>
            <li><a href="/hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="/bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="/galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="/blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="/hakkimizda.html" class="nav-link active">Hakkımızda</a></li>
            <li><a href="/iletisim.html" class="nav-link">İletişim</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          ${headerCallPillHtml}
          <button type="button" class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Subpage Hero -->
  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 55px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <span style="color: #ea580c; font-weight: 600;">Hakkımızda</span>
      </nav>
      <h1 style="font-size: clamp(2rem, 4vw, 2.85rem); font-weight: 900; margin-bottom: 15px;">
        15 Yılı Aşkın <span style="color: #ea580c;">Otoyol &amp; Kurtarma Güvencesi</span>
      </h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 820px; line-height: 1.6;">
        Kuzey Marmara Otoyolu, TEM Otoyolu ve Kurtköy arterlerinde sürücülere esnaf samimiyeti, kurumsal şeffaflık ve modern teknolojiyle 7/24 kesintisiz oto çekici ve yol yardım hizmeti sunuyoruz.
      </p>
    </div>
  </section>

  <main class="section" style="padding: 60px 0; background: #f8fafc;">
    <div class="container" style="max-width: 1000px;">
      
      <!-- Hikayemiz & Misyonumuz -->
      <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 40px; margin-bottom: 35px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
        <span style="color: #ea580c; font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Kurumsal Tarihçemiz</span>
        <h2 style="font-size: clamp(1.6rem, 3vw, 2.1rem); font-weight: 900; color: #0f172a; margin: 10px 0 20px;">
          Yolda Kalan Sürücünün Yanında, Dürüst ve İlkeli Hizmet
        </h2>
        <p style="font-size: 1.05rem; line-height: 1.85; color: #334155; margin-bottom: 18px;">
          <strong>Marmara Çekici</strong>; Türkiye'nin en kritik ve yüksek hızlı ulaşım koridorları olan Kuzey Marmara Otoyolu (KMO), TEM Otoyolu ve Anadolu Yakası sanayi kavşaklarında (Kurtköy, Gebze, Pendik, Tuzla, Çayırova) profesyonel kurtarma hizmeti vermek amacıyla kuruldu.
        </p>
        <p style="font-size: 1rem; line-height: 1.8; color: #475569; margin-bottom: 18px;">
          Sektörde uzun yıllardır süregelen iki büyük mağduriyeti ortadan kaldırmak en temel varoluş amacımız oldu: <strong>Birincisi</strong>; yolda çaresiz kalan sürücülere iş bitiminde dayatılan fahiş ve sürpriz fiyatlar. <strong>İkincisi</strong>; yetersiz ekipman ve eğitimsiz personel yüzünden lüks, spor ya da elektrikli araçların çekilirken alt takımlarının, tamponlarının ve şanzımanlarının zarar görmesi.
        </p>
        <p style="font-size: 1rem; line-height: 1.8; color: #475569;">
          Biz bu düzeni değiştirdik. Telefonda konumu dinleyip net ve sabit fiyat veren, filosu %100 nakliyat sigortalı olan, basık araçlar için sıfır dereceli rampa kullanan ve ortalama 10-15 dakikada olay yerine varan kurumsal bir kurtarma ekosistemi inşa ettik.
        </p>
      </div>

      <!-- 4 Temel Değerimiz -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 35px;">
        
        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 25px;">
          <div style="font-size: 2rem; margin-bottom: 10px;">🏷️</div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 8px;">Şeffaf &amp; Sabit Fiyat Sözü</h3>
          <p style="color: #64748b; font-size: 0.92rem; line-height: 1.6;">Telefonda onaylanan ücret dışında otoyol gişe bahanesi veya gece tarifesi adı altında sonradan sürpriz ek ücret asla talep edilmez.</p>
        </div>

        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 25px;">
          <div style="font-size: 2rem; margin-bottom: 10px;">🛡️</div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 8px;">%100 Nakliyat Emtia Kaskosu</h3>
          <p style="color: #64748b; font-size: 0.92rem; line-height: 1.6;">Aracınız platforma yüklendiği andan servise teslim edilene kadar tam kapsamlı taşıyıcı sorumluluk sigortası altındadır.</p>
        </div>

        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 25px;">
          <div style="font-size: 2rem; margin-bottom: 10px;">⏱️</div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 8px;">10-15 Dk Hızlı İntikal</h3>
          <p style="color: #64748b; font-size: 0.92rem; line-height: 1.6;">Kurtköy gişeleri, KMO viyadükleri, TEM ve sanayi kavşaklarında konuşlu hazır nöbetçi araçlarımızla rekor sürede yanınızdayız.</p>
        </div>

        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 25px;">
          <div style="font-size: 2rem; margin-bottom: 10px;">🏎️</div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 8px;">Sıfır Temas &amp; Hasarsız Taşıma</h3>
          <p style="color: #64748b; font-size: 0.92rem; line-height: 1.6;">Basık spor otomobiller, elektrikli bataryalı araçlar ve otomatik vitesli araçlar için özel aparatlar ve sıfır açılı rampalar kullanılır.</p>
        </div>

      </div>

      <!-- Rakamlarla Biz -->
      <div style="background: #090d16; color: #fff; border-radius: 18px; padding: 40px; margin-bottom: 35px; text-align: center;">
        <span style="color: #ea580c; font-weight: 800; font-size: 0.85rem; text-transform: uppercase;">Güven Veren İstatistikler</span>
        <h2 style="font-size: 1.8rem; font-weight: 900; margin: 10px 0 30px;">Rakamlarla Marmara Çekici</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 25px;">
          <div>
            <span style="font-size: 2.5rem; font-weight: 900; color: #ea580c; display: block;">15+</span>
            <span style="color: #94a3b8; font-size: 0.95rem;">Yıllık Saha Tecrübesi</span>
          </div>
          <div>
            <span style="font-size: 2.5rem; font-weight: 900; color: #ea580c; display: block;">28.000+</span>
            <span style="color: #94a3b8; font-size: 0.95rem;">Başarılı Kurtarma</span>
          </div>
          <div>
            <span style="font-size: 2.5rem; font-weight: 900; color: #ea580c; display: block;">10-15 Dk</span>
            <span style="color: #94a3b8; font-size: 0.95rem;">Ortalama İntikal</span>
          </div>
          <div>
            <span style="font-size: 2.5rem; font-weight: 900; color: #ea580c; display: block;">%100</span>
            <span style="color: #94a3b8; font-size: 0.95rem;">Kaskolu Transfer</span>
          </div>
        </div>
      </div>

      <!-- Donanımlı Filomuz -->
      <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 35px; margin-bottom: 35px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 15px;">Modern Araç Filomuz ve Teknik Donanımımız</h2>
        <p style="color: #475569; line-height: 1.8; margin-bottom: 20px;">
          Filomuzda yer alan tüm kurtarıcı araçlar otoyol çalışma standartlarına uygun olarak yüksek parlaklıklı LED flaşör kuleleri, güvenlik kukaları, sesli ikaz sistemleri ve çift tamburlu hidrolik vinçlerle donatılmıştır:
        </p>
        <ul style="color: #334155; line-height: 2; font-size: 0.95rem; padding-left: 20px; margin: 0;">
          <li><strong>Hidrolik Kayar Kasa Çekiciler:</strong> Binek ve SUV segment araçlar için hızlı, sürtünmesiz ve emniyetli platformlar.</li>
          <li><strong>Sıfır Açılı Rampalı Lüks Çekiciler:</strong> Porsche, Ferrari, BMW M serisi ve basık şasili spor otomobiller için özel uzatma rampaları.</li>
          <li><strong>Dört Tekerden Askılı Ahtapot Çekiciler:</strong> Kapalı otoparklarda kalan veya şanzımanı kilitli araçları tekerlekten askıya alarak tahliye eden vinçli kurtarıcılar.</li>
          <li><strong>Alçak Tavan Kapalı Otopark Kurtarıcıları:</strong> AVM ve rezidans yer altı otoparklarına girebilen basık kabinli özel araçlar.</li>
          <li><strong>Mobil Yol Yardım Araçları:</strong> 12V/24V dijital akım korumalı akü takviye cihazları, havalı bijon anahtarları ve mobil hava üniteleri.</li>
        </ul>
      </div>

      <!-- Doğrudan Çağrı Kartı -->
      <div style="background: #ffffff; border: 2px solid #ea580c; border-radius: 18px; padding: 35px; text-align: center;">
        <h3 style="font-size: 1.4rem; font-weight: 900; color: #0f172a; margin-bottom: 10px;">Otoyolda veya Şehir İçinde Yolda mı Kaldınız?</h3>
        <p style="color: #64748b; font-size: 1rem; margin-bottom: 20px;">Konumunuzu bildirin, 10-15 dakika içinde en yakın nöbetçi çekicimiz yanınızda olsun.</p>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px;">
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">📞 Hemen Bizi Arayın: ${PHONE}</a>
          <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">${waSvg} WhatsApp Canlı Konum At</button>
        </div>
      </div>

    </div>
  </main>

  ${richFooterHtml}
  ${mobileDockHtml}

  <script src="js/main.js?v=3.4" defer></script>
</body>
</html>`;
}

// 2. İLETİŞİM SAYFASI (SSS/NEDEN BİZ YOK - DİREKT ACİL SEVK MERKEZİ)
function buildIletisim() {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>İletişim &amp; 7/24 Acil Çekici Çağrı Merkezi | Marmara Çekici - 0536 769 43 24</title>
  <meta name="description" content="Marmara Çekici 7/24 acil çağrı ve sevk merkezi. Kurtköy, KMO, TEM, Pendik ve Gebze nöbetçi çekici telefon hattı: 0536 769 43 24. WhatsApp ile canlı konum gönderin.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${DOMAIN}/iletisim.html">
  <link rel="alternate" type="text/plain" href="${DOMAIN}/llms.txt" title="LLM Knowledge Base">
  <link rel="icon" type="image/svg+xml" href="images/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="css/style.css?v=3.4">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Marmara Çekici İletişim",
    "description": "Marmara Çekici 7/24 acil oto çekici çağrı merkezi ve nöbet istasyonları.",
    "url": "${DOMAIN}/iletisim.html",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "${DOMAIN}/" },
        { "@type": "ListItem", "position": 2, "name": "İletişim", "item": "${DOMAIN}/iletisim.html" }
      ]
    }
  }
  </script>
</head>
<body>

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="brand-logo">
          <img src="images/logo.svg" alt="Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Anadolu Yakası, Kocaeli &amp; Otoyol Kurtarma</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="/" class="nav-link">Ana Sayfa</a></li>
            <li><a href="/hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="/bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="/galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="/blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="/hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="/iletisim.html" class="nav-link active">İletişim</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          ${headerCallPillHtml}
          <button type="button" class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Subpage Hero -->
  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 50px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <span style="color: #ea580c; font-weight: 600;">İletişim</span>
      </nav>
      <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 900; margin-bottom: 12px;">
        7/24 İletişim &amp; <span style="color: #ea580c;">Acil Çekici Sevk Merkezi</span>
      </h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 800px; line-height: 1.6;">
        Kuzey Marmara Otoyolu, TEM Otoyolu ve Kurtköy-Gebze hattında yolda kaldığınız her an santralimize doğrudan ulaşabilir veya WhatsApp üzerinden canlı konum göndererek nöbetçi çekicimizi çağırabilirsiniz.
      </p>
    </div>
  </section>

  <main class="section" style="padding: 60px 0; background: #f8fafc;">
    <div class="container" style="max-width: 1050px;">
      
      <!-- 3 Hızlı İletişim Kartı -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-bottom: 40px;">
        
        <!-- Telefon -->
        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 32px 25px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          <div style="width: 65px; height: 65px; background: rgba(234,88,12,0.1); color: #ea580c; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-size: 1.8rem;">
            📞
          </div>
          <h3 style="color: #0f172a; font-size: 1.3rem; font-weight: 800; margin-bottom: 8px;">7/24 Acil Çağrı Hattı</h3>
          <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 20px; line-height: 1.6;">Operatörümüz çağrınızı 30 saniye içinde yanıtlar ve en yakın nöbetçi çekiciyi sevk eder.</p>
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg btn-block" style="text-decoration:none;">
            📞 ${PHONE}
          </a>
        </div>

        <!-- WhatsApp -->
        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 32px 25px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          <div style="width: 65px; height: 65px; background: rgba(16,185,129,0.1); color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
            ${waSvg.replace('width="20" height="20"', 'width="34" height="34"').replace('margin-right: 6px;', 'margin-right: 0;')}
          </div>
          <h3 style="color: #0f172a; font-size: 1.3rem; font-weight: 800; margin-bottom: 8px;">WhatsApp Canlı Konum</h3>
          <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 20px; line-height: 1.6;">Harita üzerinden canlı konumunuzu atın, GPS koordinatınız doğrulanarak ekibimiz hemen yola çıksın.</p>
          <button type="button" class="btn btn-whatsapp btn-lg btn-block btn-send-location">
            ${waSvg} Canlı Konum Gönder
          </button>
        </div>

        <!-- Merkez Üs -->
        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 32px 25px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          <div style="width: 65px; height: 65px; background: rgba(15,23,42,0.08); color: #0f172a; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-size: 1.8rem;">
            📍
          </div>
          <h3 style="color: #0f172a; font-size: 1.3rem; font-weight: 800; margin-bottom: 8px;">Kurtköy &amp; KMO Sevk Üssü</h3>
          <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 20px; line-height: 1.6;">Kurtköy Kavşağı, Kuzey Marmara Otoyolu Bağlantı Arterleri, Pendik / İstanbul</p>
          <span style="display: inline-block; font-weight: 800; color: #ea580c; background: rgba(234,88,12,0.1); padding: 8px 16px; border-radius: 999px; font-size: 0.85rem;">⏱️ 10 - 15 Dk Varış</span>
        </div>

      </div>

      <!-- Nöbetçi İstasyonlarımız & Sevk Noktaları -->
      <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 35px; margin-bottom: 40px;">
        <h3 style="font-size: 1.35rem; font-weight: 900; color: #0f172a; margin-bottom: 10px;">
          7/24 Hazır Bekleyen Nöbetçi Çekici İstasyonlarımız
        </h3>
        <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 25px;">
          Aracınız nerede kalırsa kalsın, aşağıdaki 4 stratejik nöbet noktamızdan en yakın olanı olay yerine derhal hareket eder:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
            <strong style="color: #0f172a; display: block; font-size: 1rem; margin-bottom: 5px;">1. Kurtköy &amp; Viaport Üssü</strong>
            <span style="color: #64748b; font-size: 0.88rem; display: block; margin-bottom: 8px;">Viaport AVM, Yenişehir, Sabiha Gökçen</span>
            <span style="color: #ea580c; font-weight: 700; font-size: 0.85rem;">⚡ 8 - 10 Dk Varış</span>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
            <strong style="color: #0f172a; display: block; font-size: 1rem; margin-bottom: 5px;">2. KMO Mecidiye Gişeler</strong>
            <span style="color: #64748b; font-size: 0.88rem; display: block; margin-bottom: 8px;">Kuzey Marmara Otoyolu, Dinlenme Tesisi</span>
            <span style="color: #ea580c; font-weight: 700; font-size: 0.85rem;">⚡ 10 - 12 Dk Varış</span>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
            <strong style="color: #0f172a; display: block; font-size: 1rem; margin-bottom: 5px;">3. TEM Şekerpınar &amp; Tuzla</strong>
            <span style="color: #64748b; font-size: 0.88rem; display: block; margin-bottom: 8px;">TEM Otoyolu, Mehmetçik Vakfı, Orhanlı</span>
            <span style="color: #ea580c; font-weight: 700; font-size: 0.85rem;">⚡ 10 - 15 Dk Varış</span>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
            <strong style="color: #0f172a; display: block; font-size: 1rem; margin-bottom: 5px;">4. Gebze OSB &amp; Çayırova</strong>
            <span style="color: #64748b; font-size: 0.88rem; display: block; margin-bottom: 8px;">GOSB, Barış Mah., D-100 Sanayi</span>
            <span style="color: #ea580c; font-weight: 700; font-size: 0.85rem;">⚡ 10 - 15 Dk Varış</span>
          </div>
        </div>
      </div>

      <!-- Hızlı Çekici Çağırma Formu -->
      <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 35px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
        <h3 style="font-size: 1.35rem; font-weight: 900; color: #0f172a; margin-bottom: 8px;">
          WhatsApp Üzerinden Hızlı Fiyat ve Sevk Talebi
        </h3>
        <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 25px;">
          Formu doldurun, bilgileriniz doğrudan WhatsApp sevk hattımıza iletilsin ve anında net sabit fiyat teklifi sunulsun:
        </p>

        <form id="dispatch-quote-form" class="wp-contact-form">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px; margin-bottom: 20px;">
            
            <div>
              <label for="dispatch-region" style="display: block; font-size: 0.88rem; font-weight: 700; color: #334155; margin-bottom: 6px;">Bulunduğunuz Konum / Gişe</label>
              <input type="text" id="dispatch-region" name="region_select" class="wp-form-input" placeholder="Örn: Kurtköy Viaport, KMO Kurnaköy Gişeleri..." required style="width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 0.95rem;">
            </div>

            <div>
              <label for="dispatch-vehicle" style="display: block; font-size: 0.88rem; font-weight: 700; color: #334155; margin-bottom: 6px;">Araç Modeli &amp; Türü</label>
              <select id="dispatch-vehicle" name="vehicle_type_select" class="wp-form-input" style="width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 0.95rem; background: #fff;">
                <option value="Binek Otomobil (Sedan / Hatchback)">Binek Otomobil</option>
                <option value="SUV / 4x4 / Jeep">SUV / 4x4 / Jeep</option>
                <option value="Lüks / Spor / Elektrikli Araç">Lüks / Spor / Elektrikli Araç</option>
                <option value="Hafif Ticari / Minibüs / Panelvan">Hafif Ticari / Minibüs</option>
                <option value="Motosiklet / Scooter">Motosiklet / Scooter</option>
                <option value="Karavan / Tekne">Karavan / Tekne</option>
              </select>
            </div>

            <div>
              <label for="dispatch-problem" style="display: block; font-size: 0.88rem; font-weight: 700; color: #334155; margin-bottom: 6px;">Durum / Arıza Nedeni</label>
              <select id="dispatch-problem" name="problem_select" class="wp-form-input" style="width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 0.95rem; background: #fff;">
                <option value="Mekanik Arıza / Motor Çalışmıyor">Mekanik Arıza / Araç Çalışmıyor</option>
                <option value="Trafik Kazası / Hasarlı Araç">Trafik Kazası / Hasarlı Araç</option>
                <option value="Akü Bitti / Marş Basmıyor">Akü Bitti / Takviye Lazım</option>
                <option value="Lastik Patladı / Stepne Değişimi">Lastik Patladı / Stepne Değişimi</option>
                <option value="Otomatik Şanzıman Kilitli">Otomatik Şanzıman Kilitli / El Freni</option>
                <option value="Şehirlerarası Araç Transferi">Şehirlerarası Taşıma</option>
              </select>
            </div>

            <div>
              <label for="dispatch-target" style="display: block; font-size: 0.88rem; font-weight: 700; color: #334155; margin-bottom: 6px;">Gidilecek Servis / Adres</label>
              <input type="text" id="dispatch-target" name="to_location" class="wp-form-input" placeholder="Örn: Pendik Oto Sanayi, Gebze Yetkili Servis..." style="width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 0.95rem;">
            </div>

          </div>

          <button type="submit" class="btn btn-whatsapp btn-lg btn-block" style="padding: 16px; font-size: 1.05rem; display: flex; align-items: center; justify-content: center; gap: 8px;">
            ${waSvg} <span>WhatsApp ile Anında Çekici Çağır &amp; Fiyat Al</span>
          </button>
        </form>
      </div>

    </div>
  </main>

  ${richFooterHtml}
  ${mobileDockHtml}

  <script src="js/main.js?v=3.4" defer></script>
</body>
</html>`;
}

// 3. FOTO GALERİ SAYFASI (FİLTRELER ÇALIŞIYOR, KOYU LACİVERT ÇAKIŞMA KALDIRILDI, 4 KOLON FOOTER EKLENDİ)
function buildGaleri() {
  const galleryItems = [
    {
      img: 'otoyol-cekici.webp',
      category: 'otoyol',
      tag: 'KMO OTOYOL',
      tagColor: '#ea580c',
      title: 'KMO Otoyol Güvenlikli Kurtarma',
      desc: 'Kuzey Marmara Otoyolu emniyet şeridinde flaşör kuleleri ve güvenlik koridoru eşliğinde tahliye.'
    },
    {
      img: 'luks-arac-cekici.webp',
      category: 'luks',
      tag: 'LÜKS TRANSFER',
      tagColor: '#10b981',
      title: 'Porsche & Spor Araç Taşıma',
      desc: 'Sıfır açılı rampa aparatı ile karlık ve tampona temas etmeden hasarsız yükleme.'
    },
    {
      img: 'kazali-arac-cekici.webp',
      category: 'kaza',
      tag: 'KAZA & VİNÇ',
      tagColor: '#f59e0b',
      title: 'Ağır Hasarlı Kaza Kurtarma',
      desc: 'Çift tamburlu hidrolik çelik vinçle şarampolden ve bariyerden emniyetli araç çekimi.'
    },
    {
      img: 'otomobil_cekici-1.webp',
      category: 'otoyol',
      tag: 'KURTKÖY MERKEZ',
      tagColor: '#ea580c',
      title: 'Kayar Kasa Hidrolik Taşıma',
      desc: 'Kurtköy Viaport çıkışında arızalanan binek aracın Pendik servisine kaskolu transferi.'
    },
    {
      img: 'aku-takviye.webp',
      category: 'yol-yardim',
      tag: 'YOL YARDIM',
      tagColor: '#10b981',
      title: 'Yerinde 12V / 24V Akü Takviyesi',
      desc: 'Dijital akım korumalı endüstriyel booster ile araç beynine zarar vermeden yerinde marş.'
    },
    {
      img: 'lastik-tamir.webp',
      category: 'yol-yardim',
      tag: 'YOL YARDIM',
      tagColor: '#10b981',
      title: 'Mobil Lastik & Stepne Değişimi',
      desc: 'Otoyol emniyet şeridinde hava basımı, havalı bijon anahtarı ve stepne montajı.'
    },
    {
      img: 'motorsiklet-cekici.webp',
      category: 'luks',
      tag: 'MOTOSİKLET',
      tagColor: '#ea580c',
      title: 'Özel Kilit Aparatlı Motor Çekici',
      desc: 'Ön teker sabitleme sehpası ve 4 noktadan gergi kilitleriyle dik konumda güvenli nakil.'
    },
    {
      img: 'sehirlerarasi-cekici.webp',
      category: 'otoyol',
      tag: '81 İL NAKLİYAT',
      tagColor: '#0f172a',
      title: 'Şehirler Arası Kaskolu Taşıma',
      desc: 'İstanbul çıkışlı tüm Türkiye illerine adresten adrese tam emtia kaskolu sevk.'
    },
    {
      img: 'otomobil-cekici-2.webp',
      category: 'otoyol',
      tag: 'TEM OTOYOLU',
      tagColor: '#ea580c',
      title: 'TEM Şekerpınar Dinlenme Kurtarması',
      desc: 'Hararet yapan hafif ticari aracın Gebze Sanayi Sitesi ustasına süratli intikali.'
    },
    {
      img: 'suv-cekici.webp',
      category: 'luks',
      tag: '4X4 & SUV',
      tagColor: '#10b981',
      title: 'Ağır SUV & Crossover Taşıma',
      desc: '3.5 tona kadar taşıma kapasiteli geniş tablalı hidrolik platform transferi.'
    },
    {
      img: 'luks-arac-cekici-1.webp',
      category: 'luks',
      tag: 'ELEKTRİKLİ ARAÇ',
      tagColor: '#10b981',
      title: 'Tesla & Elektrikli Araç Transferi',
      desc: 'Transport modu devrede, batarya korumalı ve dolly arabacıklı güvenli yükleme.'
    },
    {
      img: 'otomobil-cekici-3.webp',
      category: 'kaza',
      tag: 'VİNÇLİ KURTARMA',
      tagColor: '#f59e0b',
      title: 'Şarampol & Çamurdan Kurtarma',
      desc: 'Yağışlı havada yol dışına çıkan aracın 20 tonluk vinç tertibatıyla kurtarılması.'
    }
  ];

  const cardsHtml = galleryItems.map(item => `
        <div class="photo-slot-card gallery-item" data-category="${item.category}" style="cursor: pointer; background: #fff; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 15px rgba(0,0,0,0.03); transition: transform 0.2s ease, box-shadow 0.2s ease;">
          <div style="position: relative; overflow: hidden; height: 220px;">
            <img src="images/${item.img}" alt="${item.title}" width="600" height="400" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; display: block;" data-lightbox-src="images/${item.img}" data-lightbox-title="${item.title}" data-lightbox-desc="${item.desc}">
            <span style="position: absolute; top: 12px; left: 12px; background: rgba(15,23,42,0.85); backdrop-filter: blur(4px); color: #fff; font-size: 0.72rem; font-weight: 800; padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15);">${item.tag}</span>
          </div>
          <div style="padding: 16px 18px;">
            <h4 style="color: #0f172a; font-size: 1.05rem; font-weight: 800; margin-bottom: 6px;">${item.title}</h4>
            <p style="color: #64748b; font-size: 0.88rem; line-height: 1.5; margin: 0;">${item.desc}</p>
          </div>
        </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Foto Galeri | Marmara Çekici Filosu &amp; Gerçek Kurtarma Vakaları - 0536 769 43 24</title>
  <meta name="description" content="Marmara Çekici araç filosu, hidrolik kayar kasa araçlarımız, otoyol acil kurtarma operasyonları, lüks araç taşıma ve vinçli kurtarma fotoğrafları.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${DOMAIN}/galeri.html">
  <link rel="alternate" type="text/plain" href="${DOMAIN}/llms.txt" title="LLM Knowledge Base">
  <link rel="icon" type="image/svg+xml" href="images/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="css/style.css?v=3.4">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Marmara Çekici Foto Galeri",
    "description": "Kuzey Marmara Otoyolu, TEM ve Kurtköy oto kurtarma filosu ve saha operasyonu fotoğrafları.",
    "url": "${DOMAIN}/galeri.html",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "${DOMAIN}/" },
        { "@type": "ListItem", "position": 2, "name": "Galeri", "item": "${DOMAIN}/galeri.html" }
      ]
    }
  }
  </script>
</head>
<body>

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="brand-logo">
          <img src="images/logo.svg" alt="Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Anadolu Yakası, Kocaeli &amp; Otoyol Kurtarma</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="/" class="nav-link">Ana Sayfa</a></li>
            <li><a href="/hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="/bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="/galeri.html" class="nav-link active">Galeri</a></li>
            <li><a href="/blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="/hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="/iletisim.html" class="nav-link">İletişim</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          ${headerCallPillHtml}
          <button type="button" class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Subpage Hero -->
  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 50px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <span style="color: #ea580c; font-weight: 600;">Foto Galeri</span>
      </nav>
      <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 900; margin-bottom: 15px;">
        Saha Operasyonlarımız &amp; <span style="color: #ea580c;">Araç Filomuz</span>
      </h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 800px; line-height: 1.6;">
        Kuzey Marmara Otoyolu, TEM ve Kurtköy bölgesinde gerçekleştirdiğimiz gerçek oto kurtarma, lüks araç taşıma ve mobil yol yardım operasyonlarımızdan kareler.
      </p>
    </div>
  </section>

  <!-- Galeri Ana Alanı (Açık Gri Temiz Arka Plan) -->
  <main class="section" style="padding: 50px 0 70px; background: #f8fafc;">
    <div class="container">
      
      <!-- Filtre Butonları -->
      <div class="gallery-filter-tabs" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 35px;">
        <button type="button" class="filter-tab-btn active" data-gallery-filter="all">Tümü</button>
        <button type="button" class="filter-tab-btn" data-gallery-filter="otoyol">Otoyol Kurtarma</button>
        <button type="button" class="filter-tab-btn" data-gallery-filter="luks">Lüks &amp; Spor Araç</button>
        <button type="button" class="filter-tab-btn" data-gallery-filter="kaza">Kaza &amp; Vinç</button>
        <button type="button" class="filter-tab-btn" data-gallery-filter="yol-yardim">Yol Yardım &amp; Akü</button>
      </div>

      <!-- Galeri Grid -->
      <div id="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
        ${cardsHtml}
      </div>

      <script>
      (function() {
        function setupGalleryFilter() {
          var btns = document.querySelectorAll('.gallery-filter-tabs [data-gallery-filter]');
          var grid = document.getElementById('gallery-grid');
          if (!btns.length || !grid) return;
          var cards = grid.querySelectorAll('.photo-slot-card, .gallery-item');
          btns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
              e.preventDefault();
              btns.forEach(function(b) { b.classList.remove('active'); });
              btn.classList.add('active');
              var filter = btn.getAttribute('data-gallery-filter') || 'all';
              cards.forEach(function(card) {
                var cat = (card.getAttribute('data-category') || '').trim().toLowerCase();
                var target = filter.toLowerCase();
                if (target === 'all' || cat === target || cat.indexOf(target) !== -1) {
                  card.style.display = 'block';
                } else {
                  card.style.display = 'none';
                }
              });
            });
          });
        }
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', setupGalleryFilter);
        } else {
          setupGalleryFilter();
        }
      })();
      </script>

    </div>
  </main>

  <!-- Açık Renk Şık Eylem Çağrısı (Dark Section Kaldırıldı - Footer ile Renk Çakışması Engellendi) -->
  <section style="background: #ffffff; border-top: 1px solid #e2e8f0; padding: 50px 0; text-align: center;">
    <div class="container" style="max-width: 800px;">
      <span class="section-badge" style="background: rgba(234,88,12,0.1); color: #ea580c; border: 1px solid rgba(234,88,12,0.25); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
        7/24 Kesintisiz Otoyol Nöbeti
      </span>
      <h2 style="font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 900; color: #0f172a; margin: 12px 0 10px;">
        Aracınız Yolda mı Kaldı? Hemen Çekici Çağırın
      </h2>
      <p style="color: #64748b; font-size: 1rem; margin-bottom: 25px; line-height: 1.6;">
        Kurtköy, KMO, TEM, Pendik ve Gebze'de hazır bekleyen nöbetçi ekiplerimizle ortalama 10-15 dakikada yanınızdayız.
      </p>
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px;">
        <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">📞 Hemen Bizi Arayın: ${PHONE}</a>
        <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">${waSvg} WhatsApp Canlı Konum At</button>
      </div>
    </div>
  </section>

  <!-- Lightbox Modal -->
  <div id="gallery-lightbox" class="lightbox-modal" aria-hidden="true" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(7,11,20,0.95); z-index:9999; justify-content:center; align-items:center; padding:20px;">
    <div style="position:relative; max-width:900px; width:100%; text-align:center;">
      <button type="button" class="lightbox-close-btn" style="position:absolute; top:-40px; right:0; background:none; border:none; color:#fff; font-size:2rem; cursor:pointer;" aria-label="Kapat">✕</button>
      <img id="lightbox-img" src="images/otoyol-cekici.webp" alt="Galeri Büyütülmüş Görsel" width="900" height="600" style="max-width:100%; max-height:75vh; border-radius:12px; box-shadow:0 10px 40px rgba(0,0,0,0.5);">
      <h3 id="lightbox-title" style="color:#fff; margin-top:15px; font-size:1.3rem;"></h3>
      <p id="lightbox-desc" style="color:#cbd5e1; font-size:0.95rem; margin-top:5px;"></p>
    </div>
  </div>

  ${richFooterHtml}
  ${mobileDockHtml}

  <script src="js/main.js?v=3.4" defer></script>
</body>
</html>`;
}

// Dosyaları Üret
const rootDir = path.join(__dirname, '..');
fs.writeFileSync(path.join(rootDir, 'hakkimizda.html'), buildHakkimizda(), 'utf8');
console.log('✓ hakkimizda.html üretildi');

fs.writeFileSync(path.join(rootDir, 'iletisim.html'), buildIletisim(), 'utf8');
console.log('✓ iletisim.html üretildi');

fs.writeFileSync(path.join(rootDir, 'galeri.html'), buildGaleri(), 'utf8');
console.log('✓ galeri.html üretildi');
