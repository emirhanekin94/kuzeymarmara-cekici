const fs = require('fs');
const path = require('path');

const PHONE = '0533 265 70 89';
const PHONE_RAW = '905332657089';

const headerCallPillHtml = `
          <a href="tel:${PHONE_RAW}" class="header-call-pill">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>${PHONE}</span>
          </a>`;

const processSectionHtml = `
  <!-- ÇEKİCİ SÜRECİMİZ NASIL İŞLER? (4 ADIM) -->
  <section class="process-section" style="background:#f8fafc; padding:65px 0;">
    <div class="container">
      <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 35px;">
        <span class="section-badge" style="background: rgba(234,88,12,0.1); color: #ea580c; border: 1px solid rgba(234,88,12,0.25); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
          Şeffaf &amp; Güvenli Operasyon
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
          <p><strong>${PHONE}</strong> numaramızı tek tıkla arayın veya WhatsApp üzerinden canlı konumunuzu iletin. Santralimiz 30 saniye içinde yanıt verir.</p>
          <span class="process-tag">30 Saniyede Yanıt</span>
        </div>

        <div class="process-card-luxury">
          <div class="process-card-header">
            <span class="process-num-pill">02</span>
            <span class="process-icon-circle">💰</span>
          </div>
          <h3>2. Net &amp; Sabit Fiyat Teyidi</h3>
          <p>Mesafe ve araç tipinize göre telefonda net fiyat teyit edilir. Ek masraf veya sonradan sürpriz ücret talep edilmez.</p>
          <span class="process-tag">Sürpriz Ücret Yok</span>
        </div>

        <div class="process-card-luxury">
          <div class="process-card-header">
            <span class="process-num-pill">03</span>
            <span class="process-icon-circle">🚚</span>
          </div>
          <h3>3. 10-15 Dk Hızlı İntikal</h3>
          <p>Kurtköy, KMO ve TEM arterlerinde konuşlu nöbetçi kayar kasa çekicimiz GPS yönlendirmesiyle rekor sürede yanınıza ulaşır.</p>
          <span class="process-tag">10-15 Dk Varış</span>
        </div>

        <div class="process-card-luxury">
          <div class="process-card-header">
            <span class="process-num-pill">04</span>
            <span class="process-icon-circle">🛡️</span>
          </div>
          <h3>4. Kaskolu &amp; Sıfır Hasarlı Teslimat</h3>
          <p>Aracınız özel tekerlek kilitleriyle hasarsız platforma yüklenir; %100 nakliyat sigortasıyla yetkili servise ulaştırılır.</p>
          <span class="process-tag">%100 Kaskolu</span>
        </div>
      </div>
    </div>
  </section>`;

const whyUsSectionHtml = `
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
  </section>`;

const faqSectionHtml = `
  <!-- SIKÇA SORULAN SORULAR (FAQ ACCORDION) -->
  <section class="section" id="sss" style="padding: 70px 0; background: #fff;">
    <div class="container" style="max-width: 880px;">
      <div class="section-header text-center" style="text-align: center; margin-bottom: 35px;">
        <span class="section-badge">Merak Edilenler</span>
        <h2 class="section-title">Sıkça Sorulan Sorular</h2>
        <p class="section-subtitle">Kuzey Marmara Otoyolu, Kurtköy ve çevre ilçelerde çekici hizmetlerimiz hakkında tüm merak ettikleriniz.</p>
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
            <span>Telefonda verilen fiyat sonradan değişir mi?</span>
            <span class="faq-chevron">▾</span>
          </button>
          <div class="faq-accordion-body">
            <p>Kesinlikle hayır. Belirttiğiniz konuma ve araç durumuna göre telefonda teyit edilen fiyat sabittir. Kapıda sürpriz ek ücret veya yol bahanesiyle ekstra fiyat talep edilmez.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

// 1. HAKKIMIZDA
function buildHakkimizda() {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hakkımızda | Kuzey Marmara Çekici & Kurtarma - ${PHONE}</title>
  <meta name="description" content="Kuzey Marmara Çekici; 15 yılı aşkın süredir Kuzey Marmara Otoyolu, TEM ve Kurtköy çevresinde 7/24 kaskolu, güvenli ve kurumsal oto çekici ve yol yardım hizmeti sunmaktadır.">
  <link rel="canonical" href="https://kuzeymarmaracekici.com/hakkimizda.html">
  <link rel="icon" type="image/svg+xml" href="images/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="css/style.css?v=3.1">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Kuzey Marmara Çekici Hakkımızda",
    "description": "Kuzey Marmara Çekici hakkında kurumsal bilgiler, araç filomuz ve hizmet ilkelerimiz.",
    "url": "https://kuzeymarmaracekici.com/hakkimizda.html",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://kuzeymarmaracekici.com/" },
        { "@type": "ListItem", "position": 2, "name": "Hakkımızda", "item": "https://kuzeymarmaracekici.com/hakkimizda.html" }
      ]
    }
  }
  </script>
</head>
<body>

  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="brand-logo">
          <img src="images/logo.svg" alt="Kuzey Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">KUZEY MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım &amp; Kurtarma</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="hakkimizda.html" class="nav-link active">Hakkımızda</a></li>
            <li><a href="iletisim.html" class="nav-link">İletişim</a></li>
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

  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 50px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <span style="color: #ff5500; font-weight: 600;">Hakkımızda</span>
      </nav>
      <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 900; margin-bottom: 15px;">
        Hakkımızda &amp; <span style="color: #ff5500;">Kurumsal Değerlerimiz</span>
      </h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 780px;">
        15 yılı aşkın süredir Kuzey Marmara Otoyolu ve TEM güzergahında yolda kalan sürücülere esnaf samimiyeti ve kurumsal iş ahlakıyla 7/24 kesintisiz hizmet veriyoruz.
      </p>
    </div>
  </section>

  <main class="section">
    <div class="container" style="max-width: 900px;">
      
      <article style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px; margin-bottom: 30px; box-shadow:0 4px 20px rgba(0,0,0,0.03);">
        <h2 style="font-size: 1.6rem; font-weight: 800; color: #0f172a; margin-bottom: 15px;">
          Biz Kimiz?
        </h2>
        <p style="font-size: 1.05rem; line-height: 1.8; color: #334155; margin-bottom: 20px;">
          <strong>Kuzey Marmara Çekici</strong>, başta Kuzey Marmara Otoyolu (KMO) ve TEM Otoyolu olmak üzere Kurtköy, Gebze, Pendik, Çayırova, Tuzla ve Sabiha Gökçen çevresinde 7 gün 24 saat kesintisiz oto çekici, vinçli oto kurtarma ve mobil yol yardım hizmetleri sunan öncü bir kurtarma platformudur.
        </p>
        <p style="font-size: 1rem; line-height: 1.8; color: #475569; margin-bottom: 20px;">
          Kurulduğumuz ilk günden itibaren benimsediğimiz temel ilke; <strong>yolda kalan sürücünün çaresizliğini istismar etmeyen şeffaf fiyat politikası</strong> ve <strong>araca sıfır hasar veren modern ekipman kullanımı</strong> olmuştur. Geniş açılı hidrolik kayar kasalarımız, basık ve elektrikli araçlara özel sıfır açılı rampalarımız ve otoyol güvenlik ikaz donanımlarımız ile hem can güvenliğinizi hem de aracınızın mekanik bütünlüğünü koruyoruz.
        </p>
      </article>

    </div>
  </main>

  ${processSectionHtml}

  ${whyUsSectionHtml}

  ${faqSectionHtml}

  <footer class="site-footer">
    <div class="container">
      <div style="text-align: center; color: #94a3b8; font-size: 0.9rem; padding: 25px 0;">
        © 2026 Kuzey Marmara Çekici - Tüm Hakları Saklıdır. 7/24 Acil Oto Kurtarma &amp; Yol Yardım.
      </div>
    </div>
  </footer>

  <div class="mobile-sticky-dock">
    <a href="tel:${PHONE_RAW}" class="sticky-dock-btn sticky-call-btn">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
      <span>HEMEN ARA</span>
    </a>
    <button type="button" class="sticky-dock-btn sticky-whatsapp-btn btn-send-location">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
      <span>KONUM AT</span>
    </button>
  </div>

  <script src="js/main.js?v=3.1" defer></script>
</body>
</html>`;
}

// 2. İLETİŞİM
function buildIletisim() {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>İletişim | Kuzey Marmara Çekici 7/24 Çağrı & WhatsApp - ${PHONE}</title>
  <meta name="description" content="Kuzey Marmara Çekici 7/24 iletişim ve acil çekici çağrı hattı: ${PHONE}. WhatsApp canlı konum göndererek anında en yakın çekiciyi çağırabilirsiniz.">
  <link rel="canonical" href="https://kuzeymarmaracekici.com/iletisim.html">
  <link rel="icon" type="image/svg+xml" href="images/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="css/style.css?v=3.1">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kuzey Marmara Çekici İletişim",
    "description": "Kuzey Marmara Çekici 7/24 iletişim ve acil çekici çağrı hattı: ${PHONE}.",
    "url": "https://kuzeymarmaracekici.com/iletisim.html",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://kuzeymarmaracekici.com/" },
        { "@type": "ListItem", "position": 2, "name": "İletişim", "item": "https://kuzeymarmaracekici.com/iletisim.html" }
      ]
    }
  }
  </script>
</head>
<body>

  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="brand-logo">
          <img src="images/logo.svg" alt="Kuzey Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">KUZEY MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım &amp; Kurtarma</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="iletisim.html" class="nav-link active">İletişim</a></li>
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

  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 50px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <span style="color: #ff5500; font-weight: 600;">İletişim</span>
      </nav>
      <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 900; margin-bottom: 15px;">
        7/24 İletişim &amp; <span style="color: #ff5500;">Acil Çağrı Merkezi</span>
      </h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 780px;">
        Yolda kaldığınızda bize anında ulaşabilirsiniz. Telefonla doğrudan arayabilir veya WhatsApp üzerinden canlı konum göndererek en yakın çekicimizi çağırabilirsiniz.
      </p>
    </div>
  </section>

  <main class="section">
    <div class="container">
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; margin-bottom: 40px;">
        
        <!-- Telefon Kartı -->
        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 30px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.03);">
          <div style="width: 60px; height: 60px; background: rgba(255,85,0,0.1); color: #ff5500; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-size: 1.8rem;">
            📞
          </div>
          <h3 style="color: #0f172a; font-size: 1.3rem; margin-bottom: 8px;">7/24 Acil Çağrı Hattı</h3>
          <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 20px;">Tek dokunuşla santralimize bağlanın, nöbetçi ekibimiz derhal yola çıksın.</p>
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg btn-block" style="text-decoration:none;">
            ${PHONE}
          </a>
        </div>

        <!-- WhatsApp Kartı -->
        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 30px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.03);">
          <div style="width: 60px; height: 60px; background: rgba(16,185,129,0.1); color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-size: 1.8rem;">
            💬
          </div>
          <h3 style="color: #0f172a; font-size: 1.3rem; margin-bottom: 8px;">WhatsApp Canlı Konum</h3>
          <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 20px;">Harita üzerinden canlı konum atın, en yakın ekibimiz dakikalar içinde yanınızda olsun.</p>
          <button type="button" class="btn btn-whatsapp btn-lg btn-block btn-send-location">
            WhatsApp ile Konum Gönder
          </button>
        </div>

        <!-- Merkez Üs -->
        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 30px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.03);">
          <div style="width: 60px; height: 60px; background: rgba(15,23,42,0.08); color: #0f172a; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-size: 1.8rem;">
            📍
          </div>
          <h3 style="color: #0f172a; font-size: 1.3rem; margin-bottom: 8px;">Merkez &amp; Nöbet Noktası</h3>
          <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 20px;">Kurtköy Kavşağı, Kuzey Marmara Otoyolu Bağlantı Yolu, Pendik / İstanbul</p>
          <span style="display:inline-block; font-weight:800; color:#ff5500; background:rgba(255,85,0,0.1); padding:8px 16px; border-radius:999px; font-size:0.85rem;">⏱️ 10 - 15 Dk Varış</span>
        </div>

      </div>

    </div>
  </main>

  ${processSectionHtml}

  ${whyUsSectionHtml}

  ${faqSectionHtml}

  <footer class="site-footer">
    <div class="container">
      <div style="text-align: center; color: #94a3b8; font-size: 0.9rem; padding: 25px 0;">
        © 2026 Kuzey Marmara Çekici - Tüm Hakları Saklıdır. 7/24 Acil Oto Kurtarma &amp; Yol Yardım.
      </div>
    </div>
  </footer>

  <div class="mobile-sticky-dock">
    <a href="tel:${PHONE_RAW}" class="sticky-dock-btn sticky-call-btn">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
      <span>HEMEN ARA</span>
    </a>
    <button type="button" class="sticky-dock-btn sticky-whatsapp-btn btn-send-location">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
      <span>KONUM AT</span>
    </button>
  </div>

  <script src="js/main.js?v=3.1" defer></script>
</body>
</html>`;
}

// 3. GALERİ
function buildGaleri() {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Foto Galeri | Kuzey Marmara Çekici Filosu & Kurtarma Vakaları - ${PHONE}</title>
  <meta name="description" content="Kuzey Marmara Çekici araç filosu, kayar kasa çekicilerimiz, otoyol acil kurtarma operasyonları, lüks araç taşıma ve vinçli kurtarma fotoğraf galerisi.">
  <link rel="canonical" href="https://kuzeymarmaracekici.com/galeri.html">
  <link rel="icon" type="image/svg+xml" href="images/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="css/style.css?v=3.1">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Kuzey Marmara Çekici Foto Galeri",
    "description": "Kuzey Marmara Otoyolu, TEM ve Kurtköy oto kurtarma filosu ve saha operasyonu fotoğrafları.",
    "url": "https://kuzeymarmaracekici.com/galeri.html",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://kuzeymarmaracekici.com/" },
        { "@type": "ListItem", "position": 2, "name": "Galeri", "item": "https://kuzeymarmaracekici.com/galeri.html" }
      ]
    }
  }
  </script>
</head>
<body>

  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="brand-logo">
          <img src="images/logo.svg" alt="Kuzey Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">KUZEY MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım &amp; Kurtarma</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="galeri.html" class="nav-link active">Galeri</a></li>
            <li><a href="blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="iletisim.html" class="nav-link">İletişim</a></li>
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

  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 50px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <span style="color: #ff5500; font-weight: 600;">Foto Galeri</span>
      </nav>
      <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 900; margin-bottom: 15px;">
        Saha Operasyonlarımız &amp; <span style="color: #ff5500;">Araç Filomuz</span>
      </h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 780px;">
        Kuzey Marmara Otoyolu, TEM ve Kurtköy bölgesinde gerçekleştirdiğimiz gerçek kurtarma, lüks araç taşıma ve yol yardım operasyonlarımızdan kareler.
      </p>
    </div>
  </section>

  <main class="section">
    <div class="container">
      <!-- Filtre Butonları -->
      <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 30px;">
        <button type="button" class="filter-tab-btn active" data-gallery-filter="all">Tümü</button>
        <button type="button" class="filter-tab-btn" data-gallery-filter="otoyol">Otoyol Kurtarma</button>
        <button type="button" class="filter-tab-btn" data-gallery-filter="luks">Lüks &amp; Spor Araç</button>
        <button type="button" class="filter-tab-btn" data-gallery-filter="kaza">Kaza &amp; Vinç</button>
        <button type="button" class="filter-tab-btn" data-gallery-filter="yol-yardim">Yol Yardım &amp; Akü</button>
      </div>

      <!-- Galeri Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
        
        <div class="photo-slot-card" data-category="otoyol" style="cursor: pointer; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <img src="images/otoyol-cekici.webp" alt="Kuzey Marmara Otoyolu Çekici Operasyonu" width="600" height="400" loading="lazy" style="width: 100%; height: 220px; object-fit: cover; display: block;" data-lightbox-src="images/otoyol-cekici.webp" data-lightbox-title="KMO Otoyol Güvenlikli Kurtarma" data-lightbox-desc="Otoyol emniyet şeridinde flaşör kulesi eşliğinde güvenli araç tahliyesi.">
          <div style="padding: 15px;">
            <span style="color: #ff5500; font-size: 0.75rem; font-weight: 800;">KMO OTOYOL</span>
            <h4 style="color: #0f172a; font-size: 1rem; margin-top: 5px;">Otoyol Güvenlikli Kurtarma</h4>
          </div>
        </div>

        <div class="photo-slot-card" data-category="luks" style="cursor: pointer; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <img src="images/luks-arac-cekici.webp" alt="Lüks Spor Araç Çekici" width="600" height="400" loading="lazy" style="width: 100%; height: 220px; object-fit: cover; display: block;" data-lightbox-src="images/luks-arac-cekici.webp" data-lightbox-title="Lüks Spor Araç Transferi" data-lightbox-desc="Sıfır açılı rampa aparatı ile hasarsız yükleme.">
          <div style="padding: 15px;">
            <span style="color: #10b981; font-size: 0.75rem; font-weight: 800;">LÜKS TRANSFER</span>
            <h4 style="color: #0f172a; font-size: 1rem; margin-top: 5px;">Porsche &amp; Spor Araç Taşıma</h4>
          </div>
        </div>

        <div class="photo-slot-card" data-category="kaza" style="cursor: pointer; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <img src="images/kazali-arac-cekici.webp" alt="Kaza ve Vinç Kurtarma" width="600" height="400" loading="lazy" style="width: 100%; height: 220px; object-fit: cover; display: block;" data-lightbox-src="images/kazali-arac-cekici.webp" data-lightbox-title="Ağır Hasarlı Kaza Kurtarma" data-lightbox-desc="Çift halatlı hidrolik vinçle şarampolden araç çekimi.">
          <div style="padding: 15px;">
            <span style="color: #f59e0b; font-size: 0.75rem; font-weight: 800;">KAZA &amp; VİNÇ</span>
            <h4 style="color: #0f172a; font-size: 1rem; margin-top: 5px;">Ağır Hasarlı Kaza Kurtarma</h4>
          </div>
        </div>

        <div class="photo-slot-card" data-category="otoyol" style="cursor: pointer; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <img src="images/otomobil_cekici-1.webp" alt="Kayar Kasa Çekici" width="600" height="400" loading="lazy" style="width: 100%; height: 220px; object-fit: cover; display: block;" data-lightbox-src="images/otomobil_cekici-1.webp" data-lightbox-title="Kayar Kasa Hidrolik Platform" data-lightbox-desc="Kurtköy merkezde binek aracın kaskolu transferi.">
          <div style="padding: 15px;">
            <span style="color: #ff5500; font-size: 0.75rem; font-weight: 800;">KURTKÖY</span>
            <h4 style="color: #0f172a; font-size: 1rem; margin-top: 5px;">Kayar Kasa Hidrolik Taşıma</h4>
          </div>
        </div>

        <div class="photo-slot-card" data-category="yol-yardim" style="cursor: pointer; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <img src="images/aku-takviye.webp" alt="Akü Takviye Yol Yardım" width="600" height="400" loading="lazy" style="width: 100%; height: 220px; object-fit: cover; display: block;" data-lightbox-src="images/aku-takviye.webp" data-lightbox-title="Yerinde Akü Takviye" data-lightbox-desc="12V/24V taşınabilir booster ile yerinde marş basma.">
          <div style="padding: 15px;">
            <span style="color: #10b981; font-size: 0.75rem; font-weight: 800;">YOL YARDIM</span>
            <h4 style="color: #0f172a; font-size: 1rem; margin-top: 5px;">Yerinde 12V/24V Akü Takviyesi</h4>
          </div>
        </div>

        <div class="photo-slot-card" data-category="yol-yardim" style="cursor: pointer; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <img src="images/lastik-tamir.webp" alt="Mobil Lastik Tamiri" width="600" height="400" loading="lazy" style="width: 100%; height: 220px; object-fit: cover; display: block;" data-lightbox-src="images/lastik-tamir.webp" data-lightbox-title="Mobil Stepne Montajı" data-lightbox-desc="Otoyolda güvenli hava basımı ve stepne değişimi.">
          <div style="padding: 15px;">
            <span style="color: #10b981; font-size: 0.75rem; font-weight: 800;">YOL YARDIM</span>
            <h4 style="color: #0f172a; font-size: 1rem; margin-top: 5px;">Mobil Lastik &amp; Stepne Değişimi</h4>
          </div>
        </div>

        <div class="photo-slot-card" data-category="luks" style="cursor: pointer; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <img src="images/motorsiklet-cekici.webp" alt="Motosiklet Çekici" width="600" height="400" loading="lazy" style="width: 100%; height: 220px; object-fit: cover; display: block;" data-lightbox-src="images/motorsiklet-cekici.webp" data-lightbox-title="Motosiklet Sabitleme Sehpası" data-lightbox-desc="Ön teker kıskacı ile devrilmeden dik taşıma.">
          <div style="padding: 15px;">
            <span style="color: #ff5500; font-size: 0.75rem; font-weight: 800;">MOTOSİKLET</span>
            <h4 style="color: #0f172a; font-size: 1rem; margin-top: 5px;">Özel Kilit Aparatlı Motor Çekici</h4>
          </div>
        </div>

        <div class="photo-slot-card" data-category="otoyol" style="cursor: pointer; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <img src="images/sehirlerarasi-cekici.webp" alt="Şehirler Arası Araç Taşıma" width="600" height="400" loading="lazy" style="width: 100%; height: 220px; object-fit: cover; display: block;" data-lightbox-src="images/sehirlerarasi-cekici.webp" data-lightbox-title="Şehirler Arası Çoklu Taşıma" data-lightbox-desc="81 ile tam nakliyat kaskosuyla adrese teslim transfer.">
          <div style="padding: 15px;">
            <span style="color: #0f172a; font-size: 0.75rem; font-weight: 800;">81 İL NAKLİYAT</span>
            <h4 style="color: #0f172a; font-size: 1rem; margin-top: 5px;">Şehirler Arası Kaskolu Nakil</h4>
          </div>
        </div>

      </div>
    </div>
  </main>

  ${processSectionHtml}

  ${whyUsSectionHtml}

  <!-- Lightbox Modal -->
  <div id="gallery-lightbox" class="lightbox-modal" aria-hidden="true" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(7,11,20,0.95); z-index:9999; justify-content:center; align-items:center; padding:20px;">
    <div style="position:relative; max-width:900px; width:100%; text-align:center;">
      <button type="button" class="lightbox-close-btn" style="position:absolute; top:-40px; right:0; background:none; border:none; color:#fff; font-size:2rem; cursor:pointer;">✕</button>
      <img id="lightbox-img" src="images/otoyol-cekici.webp" alt="Galeri Büyütülmüş Görsel" width="900" height="600" style="max-width:100%; max-height:75vh; border-radius:12px; box-shadow:0 10px 40px rgba(0,0,0,0.5);">
      <h3 id="lightbox-title" style="color:#fff; margin-top:15px; font-size:1.3rem;"></h3>
      <p id="lightbox-desc" style="color:#cbd5e1; font-size:0.95rem; margin-top:5px;"></p>
    </div>
  </div>

  <footer class="site-footer">
    <div class="container">
      <div style="text-align:center; color:#94a3b8; font-size:0.9rem; padding:25px 0;">
        © 2026 Kuzey Marmara Çekici - Tüm Hakları Saklıdır. 7/24 Acil Oto Kurtarma &amp; Yol Yardım.
      </div>
    </div>
  </footer>

  <div class="mobile-sticky-dock">
    <a href="tel:${PHONE_RAW}" class="sticky-dock-btn sticky-call-btn">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
      <span>HEMEN ARA</span>
    </a>
    <button type="button" class="sticky-dock-btn sticky-whatsapp-btn btn-send-location">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
      <span>KONUM AT</span>
    </button>
  </div>

  <script src="js/main.js?v=3.1" defer></script>
</body>
</html>`;
}

// Dosyaları Yaz
const rootDir = path.join(__dirname, '..');
fs.writeFileSync(path.join(rootDir, 'hakkimizda.html'), buildHakkimizda(), 'utf8');
console.log('✓ hakkimizda.html güncellendi');

fs.writeFileSync(path.join(rootDir, 'iletisim.html'), buildIletisim(), 'utf8');
console.log('✓ iletisim.html güncellendi');

fs.writeFileSync(path.join(rootDir, 'galeri.html'), buildGaleri(), 'utf8');
console.log('✓ galeri.html güncellendi');
