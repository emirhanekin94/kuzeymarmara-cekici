/**
 * KUZEY MARMARA OTO ÇEKİCİ - 7/24 BLOG & REHBER ÜRETİM MOTORU
 * Tel & WhatsApp: 0533 265 70 89
 */

const fs = require('fs');
const path = require('path');

const PHONE = '0533 265 70 89';
const PHONE_RAW = '905332657089';
const DOMAIN = 'https://kuzeymarmaracekici.com';

const blogs = [
  {
    slug: 'otoyolda-arac-arizalandiginda-yapilmasi-gerekenler',
    title: 'Otoyolda Araç Arızalandığında Yapılması Gerekenler | Otoyol Güvenlik & Çekici Rehberi',
    metaDesc: 'TEM ve Kuzey Marmara Otoyolu\'nda araç arızalandığında can güvenliğini koruma rehberi. 150m reflektör mesafesi, emniyet şeridi kuralları, çelik bariyer tahliyesi: 0533 265 70 89.',
    keywords: 'otoyolda yolda kalmak, otoban çekici, otoyol acil yardım, emniyet şeridi kuralları, reflektör kaç metreye konur, kuzey marmara otoyolu çekici, tem otoyolu kurtarma',
    image: 'otoyol-cekici.webp',
    date: '2026-10-15',
    readTime: '6 Dakika',
    headline: 'Otoyolda Araç Arızalandığında Yapılması Gereken Hayati Adımlar ve Güvenlik Rehberi',
    lead: '120-140 km/s hızla akan otoyol trafiğinde aracınız aniden stop ettiğinde veya lastiğiniz patladığında panik yapmadan doğru adımları atmak hayati önem taşır.',
    content: `
      <p style="font-size:1.05rem; line-height:1.8; color:#334155; margin-bottom:20px;">
        Kuzey Marmara Otoyolu (KMO) ve TEM Otoyolu gibi yüksek hızlı transit hatlarda araç arızası yaşamak, şehir içi trafiğinde arızalanmaktan çok daha yüksek risk barındırır. Arkadan 140 km/s hızla gelen yüzlerce tonluk tırlar ve binek otomobillerin durma mesafesi onlarca metreyi bulur. Bu sebeple emniyet şeridinde beklemek dahi son derece tehlikelidir.
      </p>

      <div style="background:#fff7ed; border-left:4px solid #ff5500; padding:20px; border-radius:8px; margin:25px 0;">
        <h4 style="color:#c2410c; margin-bottom:8px; font-size:1.1rem;">⚠️ Karayolları Trafik Yönetmeliği Madde 135 Kuralı</h4>
        <p style="color:#7c2d12; margin:0; line-height:1.6; font-size:0.95rem;">
          Otoyollarda ve şehirlerarası bölünmüş yollarda kırmızı üçgen reflektör, arızalı aracın arkasına <strong>en az 150 metre</strong> mesafeye yerleştirilmelidir. Şehir içi gibi 30 metreye koymak yüksek hızda gelen araçların durmasını imkansız kılar.
        </p>
      </div>

      <h3 style="color:#0f172a; font-size:1.35rem; font-weight:800; margin:25px 0 12px;">1. Adım: Aracı Mümkünse Emniyet Şeridinin En Sağına Yanaştırın</h3>
      <p style="font-size:1rem; line-height:1.75; color:#334155; margin-bottom:20px;">
        Motor stop etmeden önce güç kaybı hissettiğiniz an derhal dörtlü ikaz lambalarınızı yakın ve sağ şeride doğru yumuşakça geçiş yapın. Aracınızı emniyet şeridinin en sağına, çelik bariyerlere mümkün olduğunca yakın şekilde sıfırlayarak durdurun. Direksiyonu da sağa (bariyere doğru) çevirip el frenini çekin. Bu sayede arkadan bir araç çarpsa bile aracınız yola doğru değil bariyer tarafına fırlar.
      </p>

      <h3 style="color:#0f172a; font-size:1.35rem; font-weight:800; margin:25px 0 12px;">2. Adım: Aracın İçinde Asla Beklemeyin! Çelik Bariyerin Arkasına Geçin</h3>
      <p style="font-size:1rem; line-height:1.75; color:#334155; margin-bottom:20px;">
        Sürücülerin yaptığı en ölümcül hata, çekici beklerken aracın içinde oturmaktır. Emniyet şeridinde bekleyen araçlara arkadan çarpma vakaları otoyol ölümlerinin başında gelir. Araçtaki tüm yolcuları sağ kapılardan indirerek derhal çelik bariyerin dışına, güvenli yeşil alana veya tepeye tahliye edin.
      </p>

      <h3 style="color:#0f172a; font-size:1.35rem; font-weight:800; margin:25px 0 12px;">3. Adım: Profesyonel Otoyol Çekicisini Arayın ve Konum Paylaşın</h3>
      <p style="font-size:1rem; line-height:1.75; color:#334155; margin-bottom:20px;">
        Güvenli alana geçtikten sonra <strong>0533 265 70 89</strong> numaramızdan Kuzey Marmara Çekici merkezini arayın veya WhatsApp üzerinden canlı konum gönderin. Otoyol üzerindeki en yakın kilometre taşını veya yön tabelasını bildirmeniz ekibimizin en yakın gişeden size ulaşmasını hızlandıracaktır.
      </p>
    `,
    faqs: [
      { q: 'Otoyolda üçgen reflektör kaç metre geriye konulmalıdır?', a: 'Karayolları Trafik Kanunu gereğince otoyollarda reflektör aracın en az 150 metre gerisine yerleştirilmelidir.' },
      { q: 'Otoyolda emniyet şeridinde lastik değiştirebilir miyim?', a: 'Son derece risklidir; profesyonel tepe lambalı koruma aracı olmadan lastik değiştirmeye çalışmayınız.' },
      { q: 'Kuzey Marmara Otoyolu çekicisi ne kadar sürede ulaşır?', a: 'Otoyol gişe çıkışlarındaki nöbetçi araçlarımız ortalama 12-15 dakikada yanınıza varır.' }
    ]
  },
  {
    slug: 'kuzey-marmara-otoyolu-cekici-fiyatlari-nasil-hesaplanir',
    title: 'Kuzey Marmara Otoyolu Çekici Fiyatları Nasıl Hesaplanır? | 2026 Rehberi',
    metaDesc: '2026 güncel oto çekici fiyat hesaplama rehberi. Taban ücret, kilometre tarifesi, otoyol gişe geçişleri ve Kurtköy-Gebze çekici maliyetleri: 0533 265 70 89.',
    keywords: 'çekici fiyatları 2026, oto çekici ne kadar, kuzey marmara otoyolu çekici fiyatı, kurtköy çekici ücreti, çekici km fiyatı, oto kurtarıcı fiyat hesaplama',
    image: 'otomobil_cekici-1.webp',
    date: '2026-10-18',
    readTime: '5 Dakika',
    headline: 'Kuzey Marmara Çekici Fiyatları Nasıl Hesaplanır? Şeffaf 2026 Ücret Tarifesi',
    lead: 'Oto çekici çağırırken sürpriz faturalarla karşılaşmamak için fiyatın hangi parametrelere göre belirlendiğini ve sabit fiyat garantisinin önemini bilin.',
    content: `
      <p style="font-size:1.05rem; line-height:1.8; color:#334155; margin-bottom:20px;">
        Oto çekici hizmetlerinde fiyatlandırma; aracın bulunduğu lokasyon, taşınacağı servis mesafesi (kilometre), araç sınıfı (binek, SUV, ağır vasıta) ve operasyonel zorluk (kilitli tekerlek, şarampol vb.) kriterlerine göre şekillenir.
      </p>

      <h3 style="color:#0f172a; font-size:1.35rem; font-weight:800; margin:25px 0 12px;">Fiyatı Belirleyen 4 Ana Unsur</h3>
      <ul style="line-height:1.9; color:#334155; font-size:1rem; margin-bottom:20px;">
        <li><strong>1. Açılış Taban Ücreti:</strong> Kurtarıcı aracın adrese sevk edilmesi ve yükleme/indirme işçiliğini kapsayan sabit başlangıç bedelidir.</li>
        <li><strong>2. Kilometre Başına Tarife:</strong> Aracın yüklendiği noktadan teslim edileceği tamirhane veya servise kadar olan mesafedir.</li>
        <li><strong>3. Araç Tipi ve Ağırlığı:</strong> Binek otomobil ile 3 tonluk zırhlı SUV veya ticari minibüsün taşıma platformu ve ekipman maliyeti farklıdır.</li>
        <li><strong>4. Otoyol / Köprü Geçişleri:</strong> Kuzey Marmara veya Osmangazi Köprüsü gibi paralı otoyol gişe ücretleri açıkça fiyata dahil edilir.</li>
      </ul>

      <div style="background:#f0fdf4; border-left:4px solid #10b981; padding:20px; border-radius:8px; margin:25px 0;">
        <h4 style="color:#166534; margin-bottom:8px; font-size:1.1rem;">💡 Kuzey Marmara Çekici Sabit Fiyat Sözü</h4>
        <p style="color:#14532d; margin:0; line-height:1.6; font-size:0.95rem;">
          Bizimle iletişime geçtiğinizde konumunuzu alır ve telefonda net fiyat bildiririz. İşlem sonunda asla "otoyol farkı", "gece tarifesi" veya "ekstra vinçleme" gibi sürpriz masraflar çıkarılmaz.
        </p>
      </div>
    `,
    faqs: [
      { q: 'Çekici fiyatı telefonda net olarak söylenir mi?', a: 'Evet, nereden nereye gideceği teyit edildiğinde sabit fiyat bildirilir.' },
      { q: 'Kredi kartı ile taksitli ödeme yapılabilir mi?', a: 'Mobil POS cihazımızla kredi kartlarına tek çekim veya taksit imkanı sunulmaktadır.' },
      { q: 'Fatura veriyor musunuz?', a: 'Evet, kaskodan veya sigortadan geri ödeme alabilmeniz için kurumsal e-fatura düzenlenir.' }
    ]
  },
  {
    slug: 'otomatik-vitesli-ve-elektrikli-araclar-nasil-cekilir',
    title: 'Otomatik Vitesli ve Elektrikli Araçlar Otoyolda Nasıl Çekilir? | Güvenlik Rehberi',
    metaDesc: 'Otomatik vites ve elektrikli (Tesla vb.) araçlar çekilirken yapılan ölümcül hatalar. Şanzıman dişlisi yanması, çekici modu ve sıfır açılı rampa protokolü: 0533 265 70 89.',
    keywords: 'otomatik vitesli araç çekme, elektrikli araba nasıl çekilir, tesla çekici modu, şanzıman kilidi, basık araba çekici, sıfır açılı rampa çekici',
    image: 'luks-arac-cekici.webp',
    date: '2026-10-19',
    readTime: '6 Dakika',
    headline: 'Otomatik Vitesli ve Elektrikli Araçlar Otoyolda Nasıl Çekilir? Şanzıman ve Batarya Güvenliği',
    lead: 'Otomatik şanzımanlı veya elektrikli bir aracı yanlış çekmek, on binlerce liralık mekanik ve batarya hasarına neden olabilir. İşte dikkat edilmesi gereken kurallar.',
    content: `
      <p style="font-size:1.05rem; line-height:1.8; color:#334155; margin-bottom:20px;">
        Geleneksel manuel araçlarda vitesi boşa alıp halatla çekmek mümkünken, modern otomatik şanzımanlı (DSG, ZF, CVT) ve elektrikli (Tesla, Togg, Porsche Taycan vb.) araçlarda bu yöntem şanzıman dişlilerinin anında kaynamasına ve elektrik motorlarının yanmasına yol açar.
      </p>

      <h3 style="color:#0f172a; font-size:1.35rem; font-weight:800; margin:25px 0 12px;">Otomatik Vites Neden Halatla Çekilmez?</h3>
      <p style="font-size:1rem; line-height:1.75; color:#334155; margin-bottom:20px;">
        Otomatik şanzımanlarda yağ pompası motor çalıştığı sürece hidrolik basınç üretir. Motor dururken tekerlekler döndürülürse, şanzıman içindeki dişliler yağsız kalarak aşırı sürtünmeden dolayı kilitlenir. Bu sebeple otomatik araçlar mutlaka dört tekeri de yerle teması kesilerek kayar kasa üzerinde taşınmalıdır.
      </p>

      <h3 style="color:#0f172a; font-size:1.35rem; font-weight:800; margin:25px 0 12px;">Elektrikli Araçlarda "Transport Mode" (Çekici Modu)</h3>
      <p style="font-size:1rem; line-height:1.75; color:#334155; margin-bottom:20px;">
        Elektrikli otomobillerde tekerlekler doğrudan elektrik motorlarına bağlıdır. Tekerlek döndüğünde jeneratör gibi yüksek voltajlı elektrik üretir ve batarya koruma sistemini yakabilir. Bu yüzden araç ekrandan "Çekici Modu"na (Transport Mode) alınmalı ve sıfır açılı kayar platform ile çekilmelidir.
      </p>
    `,
    faqs: [
      { q: 'Otomatik vitesli araba N modunda çekilebilir mi?', a: 'Kısa mesafeli (birkaç metre) platforma yükleme dışında N modunda yolda halatla çekilmemelidir.' },
      { q: 'Elektrikli araç için özel çekici mi gerekir?', a: 'Evet, alt bataryaya darbe vurmayan ve sıfır açıyla inen hidrolik platformlu çekici zorunludur.' },
      { q: 'Tekerlekler kilitliyse araç nasıl yüklenir?', a: 'Tekerleklerin altına yerleştirilen kayar arabacıklar (dolly) sayesinde şanzımana yük binmeden yüklenir.' }
    ]
  },
  {
    slug: 'aku-neden-aniden-biter-takviye-nasil-yapilir',
    title: 'Akü Neden Aniden Biter? | Otoyolda Yerinde Akü Takviye Rehberi - 0533 265 70 89',
    metaDesc: 'Araç aküsü neden aniden biter? Kış ve yaz aylarında akü arızaları, doğru takviye kablosu kullanımı ve beyin korumalı 12V/24V dijital booster avantajı.',
    keywords: 'akü neden biter, akü takviyesi nasıl yapılır, otoyolda akü bitti, yerinde akü takviye, dijital booster akü, start stop akü takviye',
    image: 'aku-takviye.webp',
    date: '2026-10-17',
    readTime: '5 Dakika',
    headline: 'Akü Neden Aniden Biter? Otoyolda ve Şehirde Güvenli Akü Takviye Rehberi',
    lead: 'Marşa bastığınızda tık sesi gelip araç çalışmıyorsa sebebi büyük ihtimalle aküdür. Ancak yanlış takviye araç beynini yakabilir!',
    content: `
      <p style="font-size:1.05rem; line-height:1.8; color:#334155; margin-bottom:20px;">
        Otomobil aküleri ortalama 3 ila 5 yıl ömre sahiptir. Aşırı soğuk hava kimyasal reaksiyonu yavaşlatırken, aşırı yaz sıcağı da akü içindeki sıvının buharlaşarak plakaların kısa devre yapmasına yol açar.
      </p>

      <h3 style="color:#0f172a; font-size:1.35rem; font-weight:800; margin:25px 0 12px;">Yanlış Takviye Neden Beyin (ECU) Yakar?</h3>
      <p style="font-size:1rem; line-height:1.75; color:#334155; margin-bottom:20px;">
        Başka bir araçtan rastgele kabloyla takviye yaparken voltaj dalgalanması yaşanır. Yeni nesil araçlarda yüzlerce mikroçip ve hassas beyin (ECU) bulunur. Ters kutup bağlamak veya aşırı akım sıçraması binlerce liralık beyin hasarına yol açar.
      </p>

      <h3 style="color:#0f172a; font-size:1.35rem; font-weight:800; margin:25px 0 12px;">Profesyonel Taşınabilir Booster Çözümü</h3>
      <p style="font-size:1rem; line-height:1.75; color:#334155; margin-bottom:20px;">
        Kuzey Marmara Çekici yol yardım araçlarımızda dijital akım korumalı 12V/24V endüstriyel booster cihazları bulunmaktadır. Aracınızın elektronik aksamına en ufak voltaj şoku vermeden yerinde güvenle marş basılır.
      </p>
    `,
    faqs: [
      { q: 'Start-Stop akülere standart kabloyla takviye yapılır mı?', a: 'Riskli voltaj sıçramaları sebebiyle korumalı dijital booster kullanılması önerilir.' },
      { q: 'Kurtköy ve KMO\'da yerinde akü takviyesi ne kadar sürede gelir?', a: 'Mobil yol yardım ekibimiz ortalama 10 dakika içinde adresinize ulaşır.' },
      { q: 'Araç yine çalışmazsa çekiciye alınır mı?', a: 'Evet, alternatör veya marş motoru arızasında hemen çekici devreye girer.' }
    ]
  },
  {
    slug: 'kurtkoy-ve-gebze-en-yakin-oto-cekici-rehberi',
    title: 'Kurtköy ve Gebze Çevresinde En Yakın Oto Çekici Seçim Rehberi | 2026',
    metaDesc: 'Kurtköy, Gebze, Pendik ve Çayırova sanayi bölgesinde korsan çekicilere yakalanmadan kurumsal, kaskolu ve sabit fiyatlı çekici seçme rehberi: 0533 265 70 89.',
    keywords: 'kurtköy çekici rehberi, gebze en yakın çekici, güvenilir çekici nasıl seçilir, kaskolu çekici kurtköy, korsan çekici riskleri',
    image: 'kazali-arac-cekici.webp',
    date: '2026-10-20',
    readTime: '5 Dakika',
    headline: 'Kurtköy ve Gebze Çevresinde En Yakın Oto Çekici Çağırırken Dikkat Edilmesi Gerekenler',
    lead: 'Sanayi ve transit geçiş akslarında yolda kaldığınızda doğru çekiciyi seçmek hem cebinizi hem de aracınızı korur.',
    content: `
      <p style="font-size:1.05rem; line-height:1.8; color:#334155; margin-bottom:20px;">
        Kurtköy ve Gebze, devasa sanayi siteleri ve otoban bağlantı kollarıyla İstanbul-Kocaeli sınırının en yoğun araç trafiğine sahiptir. Bu bölgelerde yolda kalan sürücüler çoğu zaman panikle ilk gördükleri çekiciyi çağırmakta ve yüksek faturalarla karşılaşmaktadır.
      </p>

      <h3 style="color:#0f172a; font-size:1.35rem; font-weight:800; margin:25px 0 12px;">Güvenilir Bir Çekicide Olması Gereken 3 Şart</h3>
      <ul style="line-height:1.9; color:#334155; font-size:1rem; margin-bottom:20px;">
        <li><strong>1. Emtia Taşıma Sigortası:</strong> Aracınız çekiciye yüklendiği andan itibaren kaza, devrilme veya hırsızlığa karşı sigortalı olmalıdır.</li>
        <li><strong>2. Telefonda Sabit Fiyat Teyidi:</strong> "Oraya gelince bakarız" diyen değil, mesafeyi alıp telefonda net rakam veren firmaları tercih edin.</li>
        <li><strong>3. Resmi Fatura ve Kurumsal Kimlik:</strong> Kasko şirketinizden veya sigortadan paranızı geri alabilmeniz için yasal fatura şarttır.</li>
      </ul>
    `,
    faqs: [
      { q: 'Kurtköy ve Gebze\'de çekici ücreti neye göre belirlenir?', a: 'Mesafe (km) ve araç türüne göre sabit şeffaf tarife uygulanır.' },
      { q: 'Firma araçları kaskolu mu?', a: 'Kuzey Marmara Çekici filomuzdaki tüm taşımalar %100 nakliyat sigortalıdır.' }
    ]
  }
];

function generateArticleHtml(blog) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.headline,
    "description": blog.metaDesc,
    "image": `${DOMAIN}/images/${blog.image}`,
    "datePublished": `${blog.date}T09:00:00+03:00`,
    "dateModified": "2026-10-20T22:00:00+03:00",
    "author": {
      "@type": "Organization",
      "name": "Kuzey Marmara Çekici",
      "url": DOMAIN
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kuzey Marmara Çekici",
      "logo": {
        "@type": "ImageObject",
        "url": `${DOMAIN}/images/logo.svg`
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blog.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${blog.title}</title>
  <meta name="description" content="${blog.metaDesc}">
  <meta name="keywords" content="${blog.keywords}">
  <link rel="canonical" href="${DOMAIN}/blog/${blog.slug}.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="../css/style.css?v=3.1">

  <script type="application/ld+json">
  ${JSON.stringify(articleSchema, null, 2)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(faqSchema, null, 2)}
  </script>
</head>
<body>

  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="../index.html" class="brand-logo">
          <img src="../images/logo.svg" alt="Kuzey Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">KUZEY MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım &amp; Kurtarma</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="../index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="../hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="../bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="../galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="index.html" class="nav-link active">Blog</a></li>
            <li><a href="../hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="../iletisim.html" class="nav-link">İletişim</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <a href="tel:${PHONE_RAW}" class="header-call-pill">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>${PHONE}</span>
          </a>
          <button type="button" class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 45px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="../index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <a href="index.html" style="color: #cbd5e1; text-decoration: none;">Blog</a> /
        <span style="color: #ff5500; font-weight: 600;">Rehber</span>
      </nav>
      <div style="max-width: 820px;">
        <span style="color: #ff5500; font-weight: 700; font-size: 0.85rem; text-transform: uppercase;">📅 ${blog.date} • ⏱️ ${blog.readTime} Okuma</span>
        <h1 style="font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 900; line-height: 1.25; margin: 12px 0 15px;">
          ${blog.headline}
        </h1>
        <p style="font-size: 1.05rem; line-height: 1.6; color: #cbd5e1;">
          ${blog.lead}
        </p>
      </div>
    </div>
  </section>

  <main class="section">
    <div class="container" style="max-width: 860px;">
      <article style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px; margin-bottom: 30px;">
        <div style="border-radius: 12px; overflow: hidden; margin-bottom: 25px;">
          <img src="../images/${blog.image}" alt="${blog.headline}" width="800" height="420" loading="lazy" style="width: 100%; height: auto; max-height: 420px; object-fit: cover; display: block;">
        </div>

        ${blog.content}

        <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 30px 0;">

        <h3 style="font-size: 1.35rem; font-weight: 800; color: #0f172a; margin-bottom: 15px;">
          Sıkça Sorulan Sorular
        </h3>
        <div class="faq-list">
          ${blog.faqs.map((f, idx) => `
            <div style="margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 16px;">
              <h4 style="font-size: 1.05rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">
                ${idx + 1}. ${f.q}
              </h4>
              <p style="color: #475569; line-height: 1.6; font-size: 0.95rem;">
                ${f.a}
              </p>
            </div>
          `).join('')}
        </div>

        <div style="background: #070b14; color: #fff; padding: 30px; border-radius: 14px; text-align: center; margin-top: 30px;">
          <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 8px;">Otoyolda Acil Çekiciye mi İhtiyacınız Var?</h3>
          <p style="color: #cbd5e1; font-size: 0.95rem; margin-bottom: 20px;">10-15 dakikada en yakın nöbetçi kurtarıcımızı yönlendirelim.</p>
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">📞 Hemen Ara: ${PHONE}</a>
        </div>
      </article>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div style="text-align: center; color: #94a3b8; font-size: 0.9rem; padding: 20px 0;">
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

  <script src="../js/main.js?v=3.0" defer></script>
</body>
</html>`;
}

function generateBlogIndexHtml() {
  const cardsHtml = blogs.map(b => `
    <div class="service-card" style="background:#fff;">
      <div class="service-card-img-wrap">
        <img src="../images/${b.image}" alt="${b.headline}" width="600" height="350">
        <span class="service-card-badge">${b.readTime}</span>
      </div>
      <div class="service-card-body">
        <span style="color:#ff5500; font-size:0.8rem; font-weight:700;">📅 ${b.date}</span>
        <h3 class="service-title" style="margin-top:5px;"><a href="${b.slug}.html">${b.headline}</a></h3>
        <p class="service-text">${b.lead}</p>
        <a href="${b.slug}.html" class="service-btn">Yazıyı Oku →</a>
      </div>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sürücü Rehberi & Blog | Kuzey Marmara Çekici - 0533 265 70 89</title>
  <meta name="description" content="Otoyolda araç arızası, çekici çağırma kuralları, fiyat hesaplama, akü takviyesi ve araç kurtarma rehber yazıları.">
  <link rel="canonical" href="${DOMAIN}/blog/index.html">
  <link rel="icon" type="image/svg+xml" href="../images/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="../css/style.css?v=3.1">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Kuzey Marmara Çekici Sürücü Rehberi & Blog",
    "description": "Otoyolda araç arızası, çekici çağırma kuralları, fiyat hesaplama ve araç kurtarma rehber yazıları.",
    "url": "${DOMAIN}/blog/index.html",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "${DOMAIN}/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "${DOMAIN}/blog/index.html" }
      ]
    }
  }
  </script>
</head>
<body>

  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="../index.html" class="brand-logo">
          <img src="../images/logo.svg" alt="Kuzey Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">KUZEY MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım &amp; Kurtarma</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="../index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="../hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="../bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="../galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="index.html" class="nav-link active">Blog</a></li>
            <li><a href="../hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="../iletisim.html" class="nav-link">İletişim</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <a href="tel:${PHONE_RAW}" class="header-call-pill">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>${PHONE}</span>
          </a>
          <button type="button" class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 45px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="../index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <span style="color: #ff5500; font-weight: 600;">Blog</span>
      </nav>
      <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 900; margin-bottom: 15px;">
        Sürücü Rehberi &amp; <span style="color: #ff5500;">Otoyol Güvenliği</span>
      </h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 780px;">
        Kuzey Marmara Otoyolu ve TEM güzergahında araç kullanan tüm sürücüler için hayat kurtaran rehber yazılarımız ve teknik ipuçları.
      </p>
    </div>
  </section>

  <main class="section">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px;">
        ${cardsHtml}
      </div>
    </div>
  </main>

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

  <script src="../js/main.js?v=3.0" defer></script>
</body>
</html>`;
}

const outDir = path.join(__dirname, '..', 'blog');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('🚀 Kuzey Marmara Çekici Blog Makaleleri Üretiliyor...');

blogs.forEach(b => {
  const filePath = path.join(outDir, `${b.slug}.html`);
  fs.writeFileSync(filePath, generateArticleHtml(b), 'utf8');
  console.log(`✓ Üretildi: blog/${b.slug}.html`);
});

fs.writeFileSync(path.join(outDir, 'index.html'), generateBlogIndexHtml(), 'utf8');
console.log('✓ Üretildi: blog/index.html (Dizin)');

console.log('🎉 Toplam ' + (blogs.length + 1) + ' blog sayfası başarıyla tamamlandı!');
