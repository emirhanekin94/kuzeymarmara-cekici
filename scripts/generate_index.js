const fs = require('fs');
const path = require('path');
const { regions } = require('./generate_regions.js');

const PHONE = '0533 265 70 89';
const PHONE_RAW = '905332657089';

function generateIndexHtml() {
  const regionOptionsHtml = regions.map(r => `                  <option value="${r.name}">${r.name} (${r.hotspots.split(',')[0].trim()})</option>`).join('\n');

  const regionCardsHtml = regions.map(r => `
          <div class="region-photo-card" data-category="${r.category}">
            <div class="region-photo-img-wrap">
              <img src="images/${r.image}" alt="${r.name} Oto Çekici" loading="lazy" width="400" height="200">
              <span class="region-photo-badge">⏱️ ${r.eta} Varış</span>
              <span class="region-photo-category">${r.categoryLabel}</span>
            </div>
            <div class="region-photo-body">
              <h3 class="region-photo-title">
                <a href="bolgeler/${r.slug}.html">${r.name} Oto Çekici</a>
              </h3>
              <p class="region-photo-hotspots">📍 ${r.hotspots}</p>
              <div class="region-photo-features">
                <span>✓ 7/24 Nöbetçi Filo</span>
                <span>✓ %100 Kaskolu</span>
                <span>✓ Mobil POS</span>
              </div>
              <div class="region-photo-actions">
                <a href="tel:${PHONE_RAW}" class="btn btn-call btn-sm">📞 Hemen Ara</a>
                <a href="bolgeler/${r.slug}.html" class="btn btn-outline btn-sm">Bölge İncele →</a>
              </div>
            </div>
          </div>`).join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kuzey Marmara Çekici & Kurtköy Oto Çekici | 7/24 Acil Yol Yardım - 0533 265 70 89</title>
  <meta name="description" content="Kuzey Marmara Otoyolu, TEM Otoyolu, Kurtköy, Gebze, Pendik, Çayırova, Tuzla ve Sabiha Gökçen çevresinde 10-15 dakikada en yakın acil oto çekici, oto kurtarıcı ve yol yardım. Sabit fiyat garantisi: 0533 265 70 89.">
  <meta name="keywords" content="kuzey marmara çekici, kurtköy çekici, kurtköy oto çekici, gebze çekici, pendik çekici, çayırova çekici, kmo çekici, tem otoyolu çekici, sabiha gökçen çekici, oto kurtarma, oto çekici, acil çekici">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://kuzeymarmaracekici.com/">

  <!-- Favicon & Logolar -->
  <link rel="icon" type="image/svg+xml" href="images/logo.svg">
  <link rel="icon" type="image/webp" href="images/logo.webp">
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">

  <!-- Open Graph / Sosyal Medya -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Kuzey Marmara Çekici & Kurtköy Çekici | 7/24 Acil Oto Kurtarma & Yol Yardım">
  <meta property="og:description" content="Kuzey Marmara Otoyolu, TEM, Kurtköy, Gebze ve Pendik çevresinde 10-15 dakikada en yakın oto çekici ve yol yardım: 0533 265 70 89.">
  <meta property="og:url" content="https://kuzeymarmaracekici.com/">
  <meta property="og:image" content="https://kuzeymarmaracekici.com/images/kapak-fotografi.webp">
  <meta property="og:locale" content="tr_TR">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Kuzey Marmara Çekici & Kurtköy Çekici | 7/24 Acil Oto Kurtarma">
  <meta name="twitter:description" content="Kuzey Marmara ve TEM otoyollarında 15 dakikada en yakın oto çekici: 0533 265 70 89.">
  <meta name="twitter:image" content="https://kuzeymarmaracekici.com/images/kapak-fotografi.webp">

  <!-- Kapak Fotoğrafları Ön Yükleme -->
  <link rel="preload" as="image" href="images/kapak-fotografi-mobile.webp" type="image/webp" media="(max-width: 768px)" fetchpriority="high">
  <link rel="preload" as="image" href="images/kapak-fotografi.webp" type="image/webp" media="(min-width: 769px)" fetchpriority="high">

  <!-- Fontlar & CSS -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  </noscript>
  <link rel="stylesheet" href="css/style.css?v=3.1">

  <!-- Schema.org Yapılandırılmış Veri -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EmergencyService", "AutoRepair", "TowingService"],
        "@id": "https://kuzeymarmaracekici.com/#localbusiness",
        "name": "Kuzey Marmara Çekici - Kurtköy Oto Çekici, Kurtarma & Yol Yardım",
        "url": "https://kuzeymarmaracekici.com/",
        "logo": "https://kuzeymarmaracekici.com/images/logo.svg",
        "image": "https://kuzeymarmaracekici.com/images/kapak-fotografi.webp",
        "telephone": "+905332657089",
        "priceRange": "₺₺",
        "currenciesAccepted": "TRY",
        "paymentAccepted": "Nakit, Kredi Kartı, Banka Kartı, Havale, FAST, EFT",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kurtköy Kavşağı, Kuzey Marmara Otoyolu Bağlantı Yolu",
          "addressLocality": "Pendik / Kurtköy",
          "addressRegion": "İstanbul / Kocaeli",
          "postalCode": "34912",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.9126,
          "longitude": 29.3142
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Kurtköy" },
          { "@type": "AdministrativeArea", "name": "Kuzey Marmara Otoyolu" },
          { "@type": "AdministrativeArea", "name": "TEM Otoyolu" },
          { "@type": "AdministrativeArea", "name": "Gebze" },
          { "@type": "AdministrativeArea", "name": "Pendik" },
          { "@type": "AdministrativeArea", "name": "Çayırova" },
          { "@type": "AdministrativeArea", "name": "Sabiha Gökçen Havalimanı" },
          { "@type": "AdministrativeArea", "name": "Tuzla" },
          { "@type": "AdministrativeArea", "name": "Şekerpınar" },
          { "@type": "AdministrativeArea", "name": "Dilovası" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "385",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://kuzeymarmaracekici.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Kuzey Marmara Otoyolu ve Kurtköy çevresinde çekici ne kadar sürede yanıma ulaşır?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kurtköy gişeleri, KMO tünel çıkışları, Gebze ve Pendik bağlantı kollarındaki nöbetçi araçlarımızla ortalama 10 ila 15 dakika içinde yanınıza ulaşıyoruz."
            }
          },
          {
            "@type": "Question",
            "name": "Taşıma esnasında aracım kasko güvencesinde mi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evet. Tüm çekici filomuz 'Emtia Nakliyat & Taşıma Kaskosu'na sahiptir. Aracınız çekiciye yüklendiği andan teslim edilene kadar %100 sigorta teminatı altındadır."
            }
          },
          {
            "@type": "Question",
            "name": "Çekici ücretini kredi kartı ile ödeyebilir miyim?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evet. Çekici araçlarımızın tamamında mobil POS cihazı bulunmaktadır. Tüm bankaların kredi kartları (taksitli), banka kartları, nakit veya FAST / havale ile ödeme yapabilirsiniz."
            }
          },
          {
            "@type": "Question",
            "name": "Lüks, spor ve elektrikli araçlar için uygun çekiciniz var mı?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evet. Filomuzda sıfır açılı hidrolik kayar kasa ve özel tekerlek kilit aparatlı kurtarıcılarımız mevcuttur. Spor ve elektrikli araçlar tampon ve alt bataryaya en ufak hasar gelmeden yüklenir."
            }
          },
          {
            "@type": "Question",
            "name": "Kuzey Marmara Otoyolu çekici fiyatı ne kadar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fiyatlarımız şeffaf taban ücret ve kilometre tarifesine dayanır. Konumunuzu aldığımız an telefonda sabit fiyat teyidi verilir, sonradan ek sürpriz ücret talep edilmez."
            }
          }
        ]
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Ana Header (Kullanıcı İsteği: Üst Şerit Kaldırıldı, Temiz Kurumsal Tasarım) -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <!-- Logo -->
        <a href="index.html" class="brand-logo" aria-label="Kuzey Marmara Çekici Ana Sayfa">
          <img src="images/logo.svg" alt="Kuzey Marmara Çekici Logo" class="brand-logo-img" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">KUZEY MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım &amp; Oto Kurtarma</span>
          </div>
        </a>

        <!-- Masaüstü Navigasyon -->
        <nav class="main-nav" aria-label="Ana Menü">
          <ul class="nav-list">
            <li><a href="index.html" class="nav-link active">Ana Sayfa</a></li>
            <li><a href="hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="iletisim.html" class="nav-link">İletişim</a></li>
          </ul>
        </nav>

        <!-- Header Butonları -->
        <div class="header-actions">
          <a href="tel:${PHONE_RAW}" class="header-call-pill">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>${PHONE}</span>
          </a>
          <button type="button" class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat" aria-expanded="false">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobil Menü Drawer -->
  <div class="mobile-nav-drawer" style="display:none;"></div>

  <main>
    <!-- HERO BÖLÜMÜ -->
    <section class="hero-section">
      <picture class="hero-bg-picture">
        <source srcset="images/kapak-fotografi-mobile.webp" media="(max-width: 768px)" type="image/webp">
        <source srcset="images/kapak-fotografi.webp" media="(min-width: 769px)" type="image/webp">
        <img src="images/kapak-fotografi.webp" alt="Kuzey Marmara Oto Çekici Kurtarma Aracı" class="hero-bg-img" width="1920" height="1080">
      </picture>
      <div class="hero-bg-overlay"></div>

      <div class="container">
        <div class="hero-grid">
          <!-- Sol İçerik -->
          <div class="hero-content">
            <div class="hero-pill-badge">
              <span class="pulse-dot"></span>
              <span>Kuzey Marmara Otoyolu, Kurtköy &amp; Gebze Hattında 7/24 Nöbetçi</span>
            </div>

            <h1 class="hero-title">
              Kuzey Marmara Çekici &amp; <span class="text-highlight">Kurtköy Acil Oto Kurtarma</span>
            </h1>

            <p class="hero-description">
              Kuzey Marmara Otoyolu (KMO), TEM Otoyolu, Kurtköy, Pendik, Gebze, Çayırova ve Sabiha Gökçen çevresinde <strong>10 - 15 dakikada en yakın acil oto çekici ve yol yardım</strong>. Kaskolu taşıma, profesyonel oto kurtarma ve telefonda teyit edilen net sabit fiyat garantisi: <strong>${PHONE}</strong>.
            </p>

            <div class="hero-action-group">
              <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg hero-call-action">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
                <span>Hemen Ara: ${PHONE}</span>
              </a>
              <button type="button" class="btn btn-whatsapp btn-lg hero-whatsapp-action btn-send-location">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
                <span>WhatsApp Canlı Konum</span>
              </button>
            </div>

            <!-- İstatistik Kartları -->
            <div class="hero-stats-row">
              <div class="hero-stat-card">
                <span class="hero-stat-value">12 <span>Dk</span></span>
                <span class="hero-stat-label">Ortalama Varış</span>
              </div>
              <div class="hero-stat-card">
                <span class="hero-stat-value">7/24 <span>Açık</span></span>
                <span class="hero-stat-label">Nöbetçi Filo</span>
              </div>
              <div class="hero-stat-card">
                <span class="hero-stat-value">%100 <span>Kasko</span></span>
                <span class="hero-stat-label">Taşıma Sigortalı</span>
              </div>
              <div class="hero-stat-card">
                <span class="hero-stat-value">15+ <span>Yıl</span></span>
                <span class="hero-stat-label">Saha Tecrübesi</span>
              </div>
            </div>
          </div>

          <!-- Sağ: Hızlı Çekici / Teklif Formu -->
          <div class="quick-dispatch-card" id="hero-form-card">
            <div class="dispatch-card-header" id="hero-form-toggle">
              <div class="dispatch-card-header-text">
                <h3 class="dispatch-card-title">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#ff5500"><path d="M19 17h2c.55 0 1-.45 1-1v-3.5c0-.38-.21-.71-.53-.88l-2.02-1.01A1.99 1.99 0 0018.55 10H16V7a1 1 0 00-1-1H3a1 1 0 00-1 1v10h2a3 3 0 006 0h4a3 3 0 006 0zm-12 1a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2zM16 11.5h2.55l1.6 1.07V15H16v-3.5zM4 8h10v7H4V8z"/></svg>
                  <span>Hızlı Çekici Çağır</span>
                </h3>
                <p class="dispatch-card-subtitle">Konumunuzu seçin, en yakın ekibimiz dakikalar içinde yola çıksın.</p>
              </div>
            </div>

            <form class="dispatch-form" id="hero-quote-form">
              <div class="form-field">
                <label for="hero-region-select" class="form-label">Bulunduğunuz Semt / Bölge</label>
                <select id="hero-region-select" name="region_select" class="form-select">
${regionOptionsHtml}
                </select>
              </div>

              <div class="form-field">
                <label for="hero-vehicle-select" class="form-label">Araç Türü</label>
                <select id="hero-vehicle-select" name="vehicle_type_select" class="form-select">
                  <option value="Binek Otomobil (Sedan / Hatchback)">Binek Otomobil (Sedan / Hatchback)</option>
                  <option value="SUV / Jeep / 4x4">SUV / Crossover / 4x4</option>
                  <option value="Lüks / Spor / Elektrikli Araç">Lüks / Spor / Elektrikli Araç (Sıfır Derece Rampa)</option>
                  <option value="Hafif Ticari / Minibüs / Kamyonet">Hafif Ticari / Minibüs / Kamyonet</option>
                  <option value="Motosiklet / Scooter / ATV">Motosiklet / Scooter / ATV</option>
                  <option value="Karavan / Tekne / Römork">Karavan / Tekne / Römork</option>
                </select>
              </div>

              <div class="form-field">
                <label for="hero-problem-select" class="form-label">Durum / Arıza Nedeni</label>
                <select id="hero-problem-select" name="problem_select" class="form-select">
                  <option value="Mekanik Arıza / Araç Çalışmıyor">Mekanik Arıza / Araç Çalışmıyor</option>
                  <option value="Kaza / Hasar / Çarpışma">Kaza / Hasar / Çarpışma</option>
                  <option value="Akü Bitti / Takviye Lazım">Akü Bitti / Yerinde Takviye Desteği</option>
                  <option value="Lastik Patladı / Stepne Değişimi">Lastik Patladı / Stepne Değişimi</option>
                  <option value="Şanzıman / Kilitli Teker / Parktan Çıkarma">Şanzıman Kilitli / El Freni Takılı</option>
                  <option value="Şehirlerarası Araç Transferi">Şehirlerarası Araç Transferi</option>
                </select>
              </div>

              <div class="form-field">
                <label for="hero-to-location" class="form-label">Götürülecek Yer / Servis (İsteğe Bağlı)</label>
                <input type="text" id="hero-to-location" name="to_location" class="wp-form-input" placeholder="Örn: Kurtköy, Pendik Sanayi, Gebze Yetkili Servis...">
              </div>

              <button type="submit" class="btn btn-whatsapp btn-block btn-lg" style="margin-top: 0.5rem;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
                <span>WhatsApp ile Sabit Fiyat Al</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- HİZMETLERİMİZ BÖLÜMÜ -->
    <section class="section" id="hizmetlerimiz">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">7/24 Profesyonel Kurtarma &amp; Çekici Filosu</span>
          <h2 class="section-title">Kuzey Marmara &amp; Kurtköy Oto Çekici Hizmetleri</h2>
          <p class="section-subtitle">
            Kuzey Marmara Otoyolu, Kurtköy, Gebze ve Pendik merkezli filomuzla <strong>acil oto çekici</strong>, <strong>otoyol oto kurtarma</strong> ve yerinde <strong>mobil yol yardım</strong> ihtiyaçlarınızda 10-15 dakikada yanınızdayız.
          </p>
        </div>

        <div class="services-grid">
          <!-- Hizmet 1 -->
          <div class="service-card">
            <div class="service-card-img-wrap">
              <img src="images/otomobil_cekici-1.webp" alt="Kayar Kasa Oto Çekici" loading="lazy" width="600" height="400">
              <span class="service-card-badge">En Çok Tercih Edilen</span>
            </div>
            <div class="service-card-body">
              <h3 class="service-title"><a href="hizmetler/oto-cekici.html">Kayar Kasa Oto Çekici</a></h3>
              <p class="service-text">Hidrolik kayar kasa platformumuzla binek ve SUV araçlarınızı tampon sürtmesi olmadan, kaskolu ve hasarsız olarak taşıyoruz.</p>
              <ul class="service-features">
                <li><span class="check-icon">✓</span> 10-15 dakikada hızlı intikal</li>
                <li><span class="check-icon">✓</span> Kurtköy, KMO gişeleri ve servislere nakil</li>
                <li><span class="check-icon">✓</span> Taşıma ve yol kaskosu güvencesi</li>
              </ul>
              <a href="hizmetler/oto-cekici.html" class="service-btn">Hizmet Detayları →</a>
            </div>
          </div>

          <!-- Hizmet 2 -->
          <div class="service-card">
            <div class="service-card-img-wrap">
              <img src="images/luks-arac-cekici.webp" alt="Lüks ve Spor Araç Çekici" loading="lazy" width="600" height="400">
              <span class="service-card-badge">Özel Sıfır Derece Rampa</span>
            </div>
            <div class="service-card-body">
              <h3 class="service-title"><a href="hizmetler/luks-spor-arac-cekici.html">Lüks &amp; Spor Araç Çekici</a></h3>
              <p class="service-text">Kurtköy, Sabiha Gökçen ve KMO güzergahında alçak tabanlı spor otomobil, coupe, elektrikli ve prestij araçlar için sıfır açılı güvenli taşıma.</p>
              <ul class="service-features">
                <li><span class="check-icon">✓</span> Alçak şasi ve basık araç uyumu</li>
                <li><span class="check-icon">✓</span> Özel tekerlek bağlama kilitleri</li>
                <li><span class="check-icon">✓</span> Yüksek kasko teminatı ile transfer</li>
              </ul>
              <a href="hizmetler/luks-spor-arac-cekici.html" class="service-btn">Hizmet Detayları →</a>
            </div>
          </div>

          <!-- Hizmet 3 -->
          <div class="service-card">
            <div class="service-card-img-wrap">
              <img src="images/kazali-arac-cekici.webp" alt="Kaza ve Kurtarma Çekici" loading="lazy" width="600" height="400">
              <span class="service-card-badge">7/24 Acil Müdahale</span>
            </div>
            <div class="service-card-body">
              <h3 class="service-title"><a href="hizmetler/oto-kurtarma.html">Kaza &amp; Vinç Kurtarma</a></h3>
              <p class="service-text">Şarampole yuvarlanma, bariyer sıkışması, devrilme veya ağır hasarlı kazalarda güçlü vinç ve ahtapot aparatlarıyla acil kurtarma.</p>
              <ul class="service-features">
                <li><span class="check-icon">✓</span> Çift halatlı hidrolik vinç sistemi</li>
                <li><span class="check-icon">✓</span> Otoyol güvenlik önlemleri ve flaşör</li>
                <li><span class="check-icon">✓</span> Tutanak ve sigorta servisi yönlendirme</li>
              </ul>
              <a href="hizmetler/oto-kurtarma.html" class="service-btn">Hizmet Detayları →</a>
            </div>
          </div>

          <!-- Hizmet 4 -->
          <div class="service-card">
            <div class="service-card-img-wrap">
              <img src="images/aku-takviye.webp" alt="Mobil Akü Takviye Yol Yardım" loading="lazy" width="600" height="400">
              <span class="service-card-badge">Yerinde Hızlı Servis</span>
            </div>
            <div class="service-card-body">
              <h3 class="service-title"><a href="hizmetler/yol-yardim-aku-takviye.html">Akü Takviye &amp; Yol Yardım</a></h3>
              <p class="service-text">Aracınız çalışmıyorsa çekici çağırmadan yerinde 12V / 24V profesyonel dijital booster cihazımız ile anında akü takviyesi ve test yapıyoruz.</p>
              <ul class="service-features">
                <li><span class="check-icon">✓</span> Dijital akü ve şarj dinamosu testi</li>
                <li><span class="check-icon">✓</span> Start-Stop &amp; AGM akü uyumu</li>
                <li><span class="check-icon">✓</span> Çekici masrafına gerek kalmadan çözüm</li>
              </ul>
              <a href="hizmetler/yol-yardim-aku-takviye.html" class="service-btn">Hizmet Detayları →</a>
            </div>
          </div>

          <!-- Hizmet 5 -->
          <div class="service-card">
            <div class="service-card-img-wrap">
              <img src="images/motorsiklet-cekici.webp" alt="Motosiklet Çekici" loading="lazy" width="600" height="400">
              <span class="service-card-badge">Özel Sabitleme Aparatlı</span>
            </div>
            <div class="service-card-body">
              <h3 class="service-title"><a href="hizmetler/motosiklet-cekici.html">Motosiklet Çekici</a></h3>
              <p class="service-text">Scooter, racing, touring ve chopper motosikletlerinizi devrilme veya çizilme riski olmadan özel ön teker sabitleyici kilit sistemiyle taşıyoruz.</p>
              <ul class="service-features">
                <li><span class="check-icon">✓</span> 4 noktadan profesyonel gergili sabitleme</li>
                <li><span class="check-icon">✓</span> Hasarsız ve dik konumda taşıma</li>
                <li><span class="check-icon">✓</span> Otoyol, şehir içi ve şehirlerarası transfer</li>
              </ul>
              <a href="hizmetler/motosiklet-cekici.html" class="service-btn">Hizmet Detayları →</a>
            </div>
          </div>

          <!-- Hizmet 6 -->
          <div class="service-card">
            <div class="service-card-img-wrap">
              <img src="images/sehirlerarasi-cekici.webp" alt="Şehirlerarası Araç Taşıma" loading="lazy" width="600" height="400">
              <span class="service-card-badge">81 İle Güvenli Sevk</span>
            </div>
            <div class="service-card-body">
              <h3 class="service-title"><a href="hizmetler/sehirlerarasi-arac-tasima.html">Şehirlerarası Araç Taşıma</a></h3>
              <p class="service-text">İstanbul ve Kocaeli çıkışlı Ankara, İzmir, Bursa, Antalya ve Türkiye'nin tüm illerine kaskolu tekli ya da çoklu araç transfer hizmeti.</p>
              <ul class="service-features">
                <li><span class="check-icon">✓</span> Adresten alıp adrese teslim</li>
                <li><span class="check-icon">✓</span> Tam kapsamlı nakliyat emtia kaskosu</li>
                <li><span class="check-icon">✓</span> Canlı GPS konum takibi desteği</li>
              </ul>
              <a href="hizmetler/sehirlerarasi-arac-tasima.html" class="service-btn">Hizmet Detayları →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ÇEKİCİ SÜRECİMİZ NASIL İŞLER? (4 ADIM) -->
    <section class="process-section">
      <div class="container">
        <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 35px;">
          <span class="section-badge" style="background: rgba(234,88,12,0.1); color: #ea580c; border: 1px solid rgba(234,88,12,0.25); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
            Hızlı &amp; Zahmetsiz Kurtarma
          </span>
          <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 900; color: #0f172a; margin: 12px 0 10px;">
            Çekici Sürecimiz Nasıl İşler?
          </h2>
          <p style="color: #64748b; font-size: 1rem; line-height: 1.6;">
            Yolda kaldığınız andan itibaren 4 şeffaf adımda aracınızı güvenle istediğiniz noktaya ulaştırıyoruz.
          </p>
        </div>

        <div class="process-grid-luxury">
          <div class="process-card-luxury">
            <div class="process-card-header">
              <span class="process-num-pill">01</span>
              <span class="process-icon-circle">📞</span>
            </div>
            <h3>1. Bize Ulaşın &amp; Konum Atın</h3>
            <p><strong>${PHONE}</strong> numaramızı tek tıkla arayın veya WhatsApp üzerinden canlı konumunuzu iletin. Santralimiz 30 saniye içinde cevap verir.</p>
            <span class="process-tag">30 Saniyede Yanıt</span>
          </div>

          <div class="process-card-luxury">
            <div class="process-card-header">
              <span class="process-num-pill">02</span>
              <span class="process-icon-circle">💰</span>
            </div>
            <h3>2. Net &amp; Sabit Fiyat Teyidi</h3>
            <p>Mesafe ve araç tipinize göre telefonda net fiyat teyit edilir. Kapıda veya teslimatta asla sürpriz ek masraf çıkarılmaz.</p>
            <span class="process-tag">Sürpriz Ücret Yok</span>
          </div>

          <div class="process-card-luxury">
            <div class="process-card-header">
              <span class="process-num-pill">03</span>
              <span class="process-icon-circle">🚚</span>
            </div>
            <h3>3. 10-15 Dk Hızlı İntikal</h3>
            <p>Kurtköy, KMO ve TEM gişelerinde konuşlu hazır nöbetçi kayar kasa çekicimiz GPS yönlendirmesiyle rekor sürede yanınıza ulaşır.</p>
            <span class="process-tag">10-15 Dk Varış</span>
          </div>

          <div class="process-card-luxury">
            <div class="process-card-header">
              <span class="process-num-pill">04</span>
              <span class="process-icon-circle">🛡️</span>
            </div>
            <h3>4. Kaskolu &amp; Sıfır Hasarlı Teslimat</h3>
            <p>Aracınız özel aparatlarla şasiye temas etmeden platforma yüklenir; %100 nakliyat sigortasıyla dilediğiniz yetkili servise ulaştırılır.</p>
            <span class="process-tag">%100 Kaskolu</span>
          </div>
        </div>
      </div>
    </section>

    <!-- NEDEN BİZ? / KURUMSAL GÜVENCELERİMİZ -->
    <section class="section section-dark" style="background: #090d16; color: #fff; padding: 70px 0;">
      <div class="container">
        <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 40px;">
          <span class="section-badge" style="background: rgba(255,85,0,0.15); color: #ff5500; border: 1px solid rgba(255,85,0,0.3); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
            Kurumsal Standartlarımız
          </span>
          <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 900; color: #fff; margin: 12px 0 10px;">
            Neden Kuzey Marmara Çekici?
          </h2>
          <p style="color: #94a3b8; font-size: 1rem; line-height: 1.6;">
            15 yılı aşkın otoyol kurtarma deneyimimiz, kurumsal güvencelerimiz ve şeffaf hizmet ilkelerimizle yolda kalan sürücülerin ilk tercihiyiz.
          </p>
        </div>

        <div class="why-us-luxury-grid">
          <div class="why-card-luxury">
            <div class="why-icon-box">⏱️</div>
            <h3>10-15 Dakikada Hızlı İntikal</h3>
            <p>KMO gişeleri, TEM ve sanayi kavşaklarında konuşlu nöbetçi ekiplerimiz sayesinde olay yerine en kısa sürede ulaşırız.</p>
          </div>

          <div class="why-card-luxury">
            <div class="why-icon-box">🛡️</div>
            <h3>%100 Nakliyat Emtia Kaskosu</h3>
            <p>Yükleme anından teslimata kadar tüm araçlar tam kapsamlı taşıyıcı sorumluluk sigortası güvencesindedir.</p>
          </div>

          <div class="why-card-luxury">
            <div class="why-icon-box">🏷️</div>
            <h3>Şeffaf &amp; Sabit Fiyat Sözü</h3>
            <p>Telefonda onaylanan ücret dışında asla sürpriz ek masraf çıkarılmaz. Otoyol ücretleri ve km baştan netleştirilir.</p>
          </div>

          <div class="why-card-luxury">
            <div class="why-icon-box">🏎️</div>
            <h3>Sıfır Açılı Lüks &amp; Elektrikli Rampa</h3>
            <p>Basık spor araçlar ve elektrikli araçlar için sürtünmeyi önleyen özel sıfır dereceli rampa uzantıları kullanılır.</p>
          </div>

          <div class="why-card-luxury">
            <div class="why-icon-box">💳</div>
            <h3>Mobil POS ile Kredi Kartı / Taksit</h3>
            <p>Kurtarıcı araçlarımızdaki mobil POS ile tüm kredi kartlarıyla tek çekim veya taksit imkanı mevcuttur.</p>
          </div>

          <div class="why-card-luxury">
            <div class="why-icon-box">⭐</div>
            <h3>15+ Yıllık Otoyol Saha Deneyimi</h3>
            <p>Zorlu otoyol viyadükleri, tüneller, şarampol ve ağır kaza durumlarında profesyonel vinç ve kurtarma operatörlüğü.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOTOĞRAFLI HİZMET BÖLGELERİMİZ (18 BÖLGE - KULLANICI İSTEĞİ) -->
    <section class="section section-subtle" id="hizmet-bolgelerimiz" style="background: #f8fafc; padding: 70px 0;">
      <div class="container">
        <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 35px;">
          <span class="section-badge">7/24 Aktif Sahadayız</span>
          <h2 class="section-title">Fotoğraflı Hizmet Bölgelerimiz (18 Bölge)</h2>
          <p class="section-subtitle">
            Bulunduğunuz konumu arayın veya listeden seçin. Kurtköy, KMO, TEM, Gebze ve Pendik arterlerinde konuşlu ekiplerimizle ortalama <strong>10 - 15 dakikada</strong> yanınızdayız.
          </p>
        </div>

        <!-- Canlı Arama Çubuğu -->
        <div class="region-search-wrapper" style="max-width: 650px; margin: 0 auto 20px;">
          <div class="region-search-box">
            <svg class="region-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" id="region-search-input" class="region-search-input" placeholder="Bölge, cadde veya gişe ara... (Örn: Kurtköy, KMO, Gebze, Çayırova)" aria-label="Bölge Arama">
            <button type="button" id="region-search-clear" class="region-search-clear" aria-label="Aramayı Temizle">✕</button>
            <span class="region-search-badge">18 Bölge Aktif</span>
          </div>
        </div>

        <!-- Kategori Filtreleme Sekmeleri -->
        <div class="region-filter-tabs" style="display:flex; justify-content:center; flex-wrap:wrap; gap:10px; margin-bottom: 35px;">
          <button type="button" class="filter-tab-btn active" data-filter="all">Tüm Bölgeler (18)</button>
          <button type="button" class="filter-tab-btn" data-filter="otoyol-giseler">Otoyol &amp; Gişeler</button>
          <button type="button" class="filter-tab-btn" data-filter="anadolu-merkez">Anadolu Yakası</button>
          <button type="button" class="filter-tab-btn" data-filter="kocaeli-sanayi">Kocaeli &amp; Gebze OSB</button>
        </div>

        <!-- Fotoğraflı Bölge Kartları Grid -->
        <div class="region-photo-grid" id="regions-container">
${regionCardsHtml}
        </div>
      </div>
    </section>

    <!-- GERÇEK OPERASYON FOTOĞRAF GALERİSİ ÖNİZLEME -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 35px;">
          <span class="section-badge">Canlı Filo &amp; Saha Operasyonları</span>
          <h2 class="section-title">Gerçek Saha Kurtarma Vakalarımız</h2>
          <p class="section-subtitle">Kuzey Marmara Otoyolu, Kurtköy ve çevre arterlerde gerçekleştirdiğimiz başarılı operasyonlardan kareler.</p>
        </div>

        <div class="photo-gallery-grid">
          <div class="photo-slot-card">
            <div class="photo-box">
              <img src="images/otomobil_cekici-2.webp" alt="Kurtköy Otomobil Çekici Operasyonu" loading="lazy" width="600" height="400">
              <span class="photo-badge">Binek Çekici</span>
            </div>
            <div class="photo-caption">
              <h4 class="photo-caption-title">Kurtköy Viaport Çıkışı Transferi</h4>
              <p class="photo-caption-desc">Şanzıman arızası yaşayan sedan aracın yetkili servise emniyetli nakli.</p>
            </div>
          </div>

          <div class="photo-slot-card">
            <div class="photo-box">
              <img src="images/suv-cekici.webp" alt="KMO SUV Çekici Kurtarma" loading="lazy" width="600" height="400">
              <span class="photo-badge">SUV / 4x4</span>
            </div>
            <div class="photo-caption">
              <h4 class="photo-caption-title">KMO Mecidiye Mevkiinde Lastik Kurtarması</h4>
              <p class="photo-caption-desc">Yüksek hızda lastiği yarılan SUV aracın tepe lambalı koruma eşliğinde taşınması.</p>
            </div>
          </div>

          <div class="photo-slot-card">
            <div class="photo-box">
              <img src="images/luks-arac-cekici-1.webp" alt="Lüks Spor Araç Taşıma" loading="lazy" width="600" height="400">
              <span class="photo-badge">Lüks &amp; Spor</span>
            </div>
            <div class="photo-caption">
              <h4 class="photo-caption-title">Sabiha Gökçen Özel Araç Transferi</h4>
              <p class="photo-caption-desc">Özel rampa aparatlı sıfır sürtünmeli spor otomobil nakliyesi.</p>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 2rem;">
          <a href="galeri.html" class="btn btn-secondary">Tüm Galeri Fotoğraflarını İnceleyin →</a>
        </div>
      </div>
    </section>

    <!-- MÜŞTERİ YORUMLARI & SAHA DENEYİMLERİ -->
    <section class="section section-subtle" style="background: #f8fafc; padding: 60px 0;">
      <div class="container">
        <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 35px;">
          <span class="section-badge">Müşteri Memnuniyeti</span>
          <h2 class="section-title">Sürücülerin Bizimle Deneyimleri</h2>
          <p class="section-subtitle">Otoyolda ve şehir içi güzergahlarda hizmet verdiğimiz sürücülerimizin gerçek yorumları.</p>
        </div>

        <div class="reviews-grid">
          <!-- Yorum 1 -->
          <div class="review-card">
            <div class="review-header">
              <div class="reviewer-meta">
                <div class="reviewer-avatar">AK</div>
                <div>
                  <div class="reviewer-name">Ahmet Korkmaz</div>
                  <div class="reviewer-location">Kurtköy Viaport • BMW 320i</div>
                </div>
              </div>
              <span class="review-date">3 gün önce</span>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">
              Viaport AVM otopark çıkışında aracımın şanzımanı kilitlendi. Aradıktan 11 dakika sonra kayar kasa araç geldi. Kurtköy nöbetçi ekibi gerçekten çok profesyoneldi. Tampona en ufak sürtme olmadan Pendik'teki servise ulaştırdılar. Telefonda ne fiyat verdilerse kuruşu kuruşuna o alındı.
            </p>
          </div>

          <!-- Yorum 2 -->
          <div class="review-card">
            <div class="review-header">
              <div class="reviewer-meta">
                <div class="reviewer-avatar">SY</div>
                <div>
                  <div class="reviewer-name">Selim Yılmaz</div>
                  <div class="reviewer-location">Kuzey Marmara Otoyolu Kurnaköy • Mercedes E200</div>
                </div>
              </div>
              <span class="review-date">5 gün önce</span>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">
              Kuzey Marmara Otoyolu Kurnaköy gişelerine 2 km kala yüksek hızda arka lastiğim parçalandı. Emniyet şeridinde ailemle çok tedirgin olduk. 13 dakikada tepe lambalı koruma aracıyla geldiler, otoyol güvenliğini alıp aracı yüklediler. Hızlı ve güvenilir hizmet için teşekkürler.
            </p>
          </div>

          <!-- Yorum 3 -->
          <div class="review-card">
            <div class="review-header">
              <div class="reviewer-meta">
                <div class="reviewer-avatar">EA</div>
                <div>
                  <div class="reviewer-name">Emre Aydın</div>
                  <div class="reviewer-location">Gebze OSB • Ford Transit Panelvan</div>
                </div>
              </div>
              <span class="review-date">1 hafta önce</span>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">
              Şirket aracımız Gebze Organize Sanayi Bölgesi girişinde elektrik arızası nedeniyle stop etti. Mobil POS cihazıyla faturalı kredi kartı ödemesi yaptık. Zamanında teslimat ve hasarsız taşıma için kesinlikle öneriyorum.
            </p>
          </div>

          <!-- Yorum 4 -->
          <div class="review-card">
            <div class="review-header">
              <div class="reviewer-meta">
                <div class="reviewer-avatar">MD</div>
                <div>
                  <div class="reviewer-name">Merve Demirtaş</div>
                  <div class="reviewer-location">Sabiha Gökçen Havalimanı • Renault Clio</div>
                </div>
              </div>
              <span class="review-date">1 hafta önce</span>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">
              Uçaktan indikten sonra açık otoparkta aracımın aküsü tamamen bitmişti. WhatsApp'tan konum gönderdim, 10 dakika içinde gelip takviye cihazıyla çalıştırdılar. Uçuş yorgunluğunun üzerine büyük bir hızla çözüldü.
            </p>
          </div>

          <!-- Yorum 5 -->
          <div class="review-card">
            <div class="review-header">
              <div class="reviewer-meta">
                <div class="reviewer-avatar">CT</div>
                <div>
                  <div class="reviewer-name">Caner Tekin</div>
                  <div class="reviewer-location">TEM Otoyolu Çayırova • Audi A4</div>
                </div>
              </div>
              <span class="review-date">2 hafta önce</span>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">
              TEM Çayırova kavşağında motor hararet yaptı. Gece yarısı olmasına rağmen ekipleri çok çabuk ulaştı. Kaskolu taşıma belgesi verdiler ve Tuzla yetkili servisine teslim ettiler. Güvenilir ve dürüst esnaflık.
            </p>
          </div>

          <!-- Yorum 6 -->
          <div class="review-card">
            <div class="review-header">
              <div class="reviewer-meta">
                <div class="reviewer-avatar">OD</div>
                <div>
                  <div class="reviewer-name">Oğuzhan Duran</div>
                  <div class="reviewer-location">Pendik Kurtköy Bağlantısı • Tesla Model Y</div>
                </div>
              </div>
              <span class="review-date">3 hafta önce</span>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">
              Elektrikli aracım batarya korumaya geçti. Elektrikli araç taşıma modu konusunda bilgili operatör yönlendirdiler. Sıfır dereceli rampa ile alt batarya muhafazasına nokta kadar zarar gelmeden çektiler. Harika iş çıkardılar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SIKÇA SORULAN SORULAR (FAQ ACCORDION) -->
    <section class="section" id="sss" style="padding: 70px 0;">
      <div class="container" style="max-width: 880px;">
        <div class="section-header text-center" style="text-align: center; margin-bottom: 35px;">
          <span class="section-badge">Merak Edilenler</span>
          <h2 class="section-title">Sıkça Sorulan Sorular</h2>
          <p class="section-subtitle">Kuzey Marmara Otoyolu, Kurtköy, Gebze ve çevre bölgelerde çekici hizmetlerimiz hakkında tüm merak ettikleriniz.</p>
        </div>

        <div class="faq-accordion-wrap">
          <div class="faq-accordion-item active">
            <button type="button" class="faq-accordion-btn">
              <span>Kuzey Marmara Otoyolu ve Kurtköy'de çekici ne kadar sürede yanıma ulaşır?</span>
              <span class="faq-chevron">▾</span>
            </button>
            <div class="faq-accordion-body">
              <p>Kurtköy gişeleri, KMO viyadükleri, Gebze OSB ve Pendik bağlantı kollarındaki nöbetçi araçlarımızla çağrınızdan sonra ortalama <strong>10 ila 15 dakika</strong> içerisinde aracınızın yanına ulaşıyoruz.</p>
            </div>
          </div>

          <div class="faq-accordion-item">
            <button type="button" class="faq-accordion-btn">
              <span>Taşıma esnasında aracım kasko güvencesinde mi?</span>
              <span class="faq-chevron">▾</span>
            </button>
            <div class="faq-accordion-body">
              <p>Evet, filomuzdaki tüm kurtarıcılar "Emtia Nakliyat &amp; Taşıma Kaskosu" poliçesine sahiptir. Aracınız çekici platformuna bağlandığı andan teslim adresine indirilene kadar her türlü hasara karşı tam sigortalıdır.</p>
            </div>
          </div>

          <div class="faq-accordion-item">
            <button type="button" class="faq-accordion-btn">
              <span>Ödemeyi nasıl yapabilirim? Kredi kartı geçerli mi?</span>
              <span class="faq-chevron">▾</span>
            </button>
            <div class="faq-accordion-body">
              <p>Tüm çekicilerimizde mobil POS cihazı bulunmaktadır. Kredi kartı, banka kartı, nakit veya FAST / havale ile araç başında güvenle ve anında ödeme yapabilirsiniz.</p>
            </div>
          </div>

          <div class="faq-accordion-item">
            <button type="button" class="faq-accordion-btn">
              <span>Lüks, spor ve elektrikli araçlar için uygun donanımınız var mı?</span>
              <span class="faq-chevron">▾</span>
            </button>
            <div class="faq-accordion-body">
              <p>Evet. Sıfır dereceli hidrolik rampa uzantılarımız sayesinde basık tamponlu spor otomobiller ve alt bataryası hassas elektrikli araçlar (Tesla, Togg, Porsche vb.) sıfır sürtünmeyle hasarsız yüklenir.</p>
            </div>
          </div>

          <div class="faq-accordion-item">
            <button type="button" class="faq-accordion-btn">
              <span>Akü bittiğinde veya lastik patladığında çekici çağırmak şart mı?</span>
              <span class="faq-chevron">▾</span>
            </button>
            <div class="faq-accordion-body">
              <p>Hayır! Mobil yol yardım ekiplerimiz 12V/24V taşınabilir booster ile aracınızın bulunduğu yere gelerek yerinde akü takviyesi veya stepne değişimi yapabilmektedir.</p>
            </div>
          </div>

          <div class="faq-accordion-item">
            <button type="button" class="faq-accordion-btn">
              <span>Telefonda verilen fiyat sonradan değişir mi?</span>
              <span class="faq-chevron">▾</span>
            </button>
            <div class="faq-accordion-body">
              <p>Kesinlikle hayır. Belirttiğiniz konuma ve araç durumuna göre telefonda teyit edilen fiyat sabittir. Kapıda sürpriz ek ücret veya yol bahanesiyle ekstra fiyat talep edilmez.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ACİL ÇAĞRI BANNERI (CTA) -->
    <section class="section" style="padding-top: 0; padding-bottom: 70px;">
      <div class="container">
        <div class="emergency-banner-box">
          <div class="emergency-banner-content">
            <h2 class="emergency-banner-title">Yolda mı Kaldınız? Vakit Kaybetmeyin!</h2>
            <p class="emergency-banner-desc">7/24 nöbetçi kurtarıcı filomuzla Kurtköy, KMO, TEM, Gebze ve tüm çevre ilçelerde bir telefon uzağınızdayız.</p>
          </div>
          <div class="emergency-banner-actions">
            <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
              <span>${PHONE}</span>
            </a>
            <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
              <span>WhatsApp Konum</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Kolon 1 -->
        <div>
          <div class="brand-logo" style="margin-bottom: 1rem;">
            <img src="images/logo.svg" alt="Kuzey Marmara Çekici" width="38" height="38" style="border-radius:50%;">
            <div class="brand-text">
              <span class="brand-name" style="font-size: 1.05rem;">KUZEY MARMARA <span>ÇEKİCİ</span></span>
            </div>
          </div>
          <p style="font-size: 0.875rem; line-height: 1.6; color: var(--dark-muted);">
            Kurtköy ve Kuzey Marmara Otoyolu merkezli filomuzla Pendik, Gebze, Çayırova, Tuzla, TEM koridoru ve Kocaeli hattında 7 gün 24 saat kaskolu, sabit fiyat garantili oto çekici ve acil oto kurtarma hizmeti.
          </p>
        </div>

        <!-- Kolon 2 -->
        <div>
          <h3 class="footer-title">Hizmetlerimiz</h3>
          <ul class="footer-links">
            <li><a href="hizmetler/oto-cekici.html">Kayar Kasa Oto Çekici</a></li>
            <li><a href="hizmetler/luks-spor-arac-cekici.html">Lüks &amp; Spor Araç Taşıma</a></li>
            <li><a href="hizmetler/oto-kurtarma.html">Kaza &amp; Vinç Kurtarma</a></li>
            <li><a href="hizmetler/yol-yardim-aku-takviye.html">Mobil Akü Takviye</a></li>
            <li><a href="hizmetler/motosiklet-cekici.html">Motosiklet Çekici</a></li>
            <li><a href="hizmetler/sehirlerarasi-arac-tasima.html">Şehirlerarası Taşıma</a></li>
          </ul>
        </div>

        <!-- Kolon 3 -->
        <div>
          <h3 class="footer-title">Öne Çıkan Bölgeler</h3>
          <ul class="footer-links">
            <li><a href="bolgeler/kurtkoy-oto-cekici.html">Kurtköy Çekici (Merkez Üs)</a></li>
            <li><a href="bolgeler/kuzey-marmara-otoyolu-oto-cekici.html">Kuzey Marmara Otoyolu</a></li>
            <li><a href="bolgeler/tem-otoyolu-oto-cekici.html">TEM Otoyolu Çekici</a></li>
            <li><a href="bolgeler/gebze-oto-cekici.html">Gebze &amp; Gebze OSB</a></li>
            <li><a href="bolgeler/sabiha-gokcen-oto-cekici.html">Sabiha Gökçen Havalimanı</a></li>
            <li><a href="bolgeler/pendik-oto-cekici.html">Pendik &amp; Sahil</a></li>
            <li><a href="bolgeler/cayirova-oto-cekici.html">Çayırova &amp; Şekerpınar</a></li>
            <li><a href="bolgeler/index.html" style="color: var(--primary); font-weight:700;">Tüm 18 Bölgeyi Gör →</a></li>
          </ul>
        </div>

        <!-- Kolon 4 -->
        <div>
          <h3 class="footer-title">İletişim &amp; Konum</h3>
          <ul class="footer-links">
            <li style="color: var(--text-white); font-weight: 700;">📞 ${PHONE}</li>
            <li>📍 Kurtköy Gişeleri &amp; KMO Bağlantısı, Pendik / İstanbul</li>
            <li>⏰ 7 Gün 24 Saat Kesintisiz Nöbetçi</li>
            <li>💳 Nakit &amp; Kredi Kartı (Mobil POS)</li>
            <li><a href="iletisim.html" style="color: var(--primary); font-weight: 700;">İletişim &amp; Konum Sayfası →</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 Kuzey Marmara Çekici &amp; Acil Oto Kurtarma. Tüm hakları saklıdır.</span>
        <span>7/24 Acil Çağrı: <a href="tel:${PHONE_RAW}" style="color: #34d399; font-weight: 700;">${PHONE}</a></span>
      </div>
    </div>
  </footer>

  <!-- MOBİL SABİT DOCK -->
  <div class="mobile-sticky-dock" aria-label="Sabit Acil Çağrı Çubuğu">
    <div class="sticky-dock-inner">
      <a href="tel:${PHONE_RAW}" class="sticky-dock-btn sticky-call-btn" aria-label="Kuzey Marmara Çekiciyi Ara">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
        <span>HEMEN ARA</span>
      </a>
      <a href="#" class="sticky-dock-btn sticky-whatsapp-btn btn-send-location" aria-label="WhatsApp Konum Gönder">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
        <span>KONUM AT</span>
      </a>
    </div>
  </div>

  <script defer src="js/main.js?v=3.1"></script>
</body>
</html>`;
}

const indexPath = path.join(__dirname, '..', 'index.html');
fs.writeFileSync(indexPath, generateIndexHtml(), 'utf8');
console.log('✓ index.html başarıyla üretildi ve güncellendi!');
