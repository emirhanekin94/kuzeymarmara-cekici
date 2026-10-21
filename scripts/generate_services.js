/**
 * KUZEY MARMARA OTO ÇEKİCİ - 7/24 HİZMET SAYFALARI ÜRETİM MOTORU
 * Tel & WhatsApp: 0533 265 70 89
 */

const fs = require('fs');
const path = require('path');

const PHONE = '0533 265 70 89';
const PHONE_RAW = '905332657089';
const DOMAIN = 'https://kuzeymarmaracekici.com';

const services = [
  {
    slug: 'oto-cekici',
    name: 'Kayar Kasa Oto Çekici',
    title: 'Kayar Kasa Oto Çekici 7/24 | Kuzey Marmara Çekici - 0533 265 70 89',
    metaDesc: 'Binek otomobil, crossover ve SUV araçlarınız için hidrolik kayar kasa çekici. Sıfır hasar garantisi, %100 taşıma kaskosu, 10-15 dk intikal: 0533 265 70 89.',
    keywords: 'oto çekici, kayar kasa çekici, kurtköy oto çekici, kuzey marmara oto çekici, acil çekici, hasarsız araç çekici, çekici çağır',
    image: 'otomobil_cekici-1.webp',
    lead: 'Kuzey Marmara Otoyolu, TEM ve çevre ilçelerde binek, SUV ve hafif ticari araçlarınızı geniş açılı hidrolik kayar kasa platformlarımızla tampon sürtmesi olmadan, kaskolu ve hasarsız taşıyoruz.',
    features: [
      'Geniş açılı ve sıfır eğimli hidrolik kayar platform',
      '4 noktadan profesyonel tekerlek sabitleme kemerleri',
      '%100 Emtia Nakliyat ve Taşıyıcı Sorumluluk Kaskosu',
      'Kurtköy, Pendik, Gebze ve yetkili servislere öncelikli kabul',
      'Ortalama 10 ila 15 dakikada en yakın nöbetçi kurtarıcı'
    ],
    faqs: [
      { q: 'Kayar kasa çekici aracıma zarar verir mi?', a: 'Hayır, platform yere tam sıfır indiği için tampon, karter veya egzoz sürtmesi yaşanmaz.' },
      { q: 'Taşıma esnasında kasko var mı?', a: 'Evet, yükleme anından teslimata kadar tüm araçlar %100 nakliyat sigortası güvencesindedir.' },
      { q: 'Kaç dakikada gelirsiniz?', a: 'Bölgedeki nöbetçi araçlarımız ortalama 10-15 dakika içinde yanınızda olur.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile araç başında taksitli/tek çekim ödeme yapabilirsiniz.' },
      { q: 'Hangi araç tiplerini taşıyorsunuz?', a: 'Sedan, hatchback, SUV, lüks binek ve hafif ticari araçların tümünü taşımaktayız.' }
    ]
  },
  {
    slug: 'otoyol-oto-kurtarma',
    name: 'Kuzey Marmara & TEM Otoyol Acil Kurtarıcı',
    title: 'Otoyol Oto Kurtarma 7/24 | KMO & TEM Çekici - 0533 265 70 89',
    metaDesc: 'Kuzey Marmara Otoyolu ve TEM Otoyolu acil çekici ve kurtarma servisi. Gişeler, viyadükler ve dinlenme tesislerinde 7/24 hızlı intikal: 0533 265 70 89.',
    keywords: 'otoyol çekici, otoban çekici, kuzey marmara otoyolu kurtarıcı, tem otoyolu çekici, otoban yol yardım, acil otoban kurtarma',
    image: 'otoyol-cekici.webp',
    lead: 'Yüksek hızlı otoyollarda arızalanan veya kaza yapan araçlar için özel otoyol güvenlik ikaz donanımlı, güçlü vinçli ve kayar kasalı acil kurtarma filomuz 7/24 hazır.',
    features: [
      '1 km önceden uyaran yüksek parlaklıklı LED otoyol flaşör kulesi',
      'Otoyol kurallarına uygun hızlı ve güvenli emniyet şeridi tahliyesi',
      'KMO tünelleri ve viyadüklerinde kaza/arıza uzman müdahalesi',
      'Yakıt ikmali, akü takviyesi ve yerinde lastik desteği',
      'Otoyol gişe çıkışlarına ve istenen servise doğrudan transfer'
    ],
    faqs: [
      { q: 'Otoyolda durmak tehlikeli mi, ne yapmalıyım?', a: 'Dörtlülerinizi yakın, aracı emniyet şeridinin en sağına çekin, çelik bariyerin arkasına geçin ve hemen bizi arayın.' },
      { q: 'Otoyol gişelerine ne kadar sürede varırsınız?', a: 'Çıkış ve bağlantı noktalarındaki araçlarımızla ortalama 12-15 dakikada olay yerindeyiz.' },
      { q: 'Gişe ücreti çekici fiyatına dahil mi?', a: 'Telefonda teyit edilen fiyatta tüm kalemler şeffaftır, sürpriz ücret talep edilmez.' },
      { q: 'Gece çekici hizmetiniz var mı?', a: 'Evet, 7 gün 24 saat otoyol nöbeti tutmaktayız.' },
      { q: 'Viyadükte savrulma durumunda vinç gelir mi?', a: 'Evet, çift çeker ağır hizmet vinç tertibatlı araçlarımız mevcuttur.' }
    ]
  },
  {
    slug: 'kaza-vinc-kurtarma',
    name: 'Kaza & Ağır Hizmet Vinç Kurtarma',
    title: 'Kaza & Vinçli Oto Kurtarma 7/24 | Kuzey Marmara - 0533 265 70 89',
    metaDesc: 'Şarampol, devrilme, bariyer sıkışması ve kilitli araç durumlarında vinçli oto kurtarma. Kuzey Marmara ve TEM hattında 7/24 acil müdahale: 0533 265 70 89.',
    keywords: 'kaza çekici, vinçli oto kurtarma, şarampol çekici, devrilen araç kurtarma, kaza kurtarıcı, ahtapot çekici',
    image: 'kazali-arac-cekici.webp',
    lead: 'Trafik kazası, şarampole inme, devrilme veya mekanik aks kırılması durumlarında çift halatlı ağır hizmet vinç tertibatlı araçlarımızla olay yerine anında ulaşıyoruz.',
    features: [
      'Ağır tonajlı hidrolik çelik halat vinç tertibatı',
      'Aksı kırık veya tekerlekleri dönmeyen araçlar için kaydırma aparatları',
      'Kaza tespit tutanağı sürecinde profesyonel operatör rehberliği',
      'Kasko ve sigorta anlaşmalı yetkili servislere doğrudan hasarsız teslim',
      'Olay yeri çevre ve trafik güvenlik önlemleri yönetimi'
    ],
    faqs: [
      { q: 'Tekerlekleri dönmeyen veya kilitli araç çekilebilir mi?', a: 'Evet, özel tekerlek kaydırma arabaları (dolly) ile şanzımana zarar vermeden yüklüyoruz.' },
      { q: 'Kaza sonrası sigorta için belge veriyor musunuz?', a: 'Evet, fatura ve taşıma irsaliyesi eksiksiz düzenlenir, kaskodan geri tahsil edebilirsiniz.' },
      { q: 'Şarampolden araç çekebilir misiniz?', a: 'Ağır hizmet vinç donanımımızla şarampoldeki araçları emniyetle yukarı alıyoruz.' },
      { q: 'Fiyat nasıl belirlenir?', a: 'Aracın durumu, vinç ihtiyacı ve mesafeye göre şeffaf sabit fiyat verilir.' }
    ]
  },
  {
    slug: 'luks-spor-arac-cekici',
    name: 'Lüks & Spor Basık Araç Taşıma',
    title: 'Lüks & Spor Araç Çekici | Sıfır Açılı Rampa - 0533 265 70 89',
    metaDesc: 'Porsche, Ferrari, Tesla, BMW M, Mercedes AMG ve basık spor araçlar için sıfır dereceli rampa uzantılı özel çekici. Tam kaskolu: 0533 265 70 89.',
    keywords: 'lüks araç çekici, spor araba çekici, basık araç çekici, tesla çekici, porsche çekici, sıfır açılı çekici',
    image: 'luks-arac-cekici.webp',
    lead: 'Düşük şasili, spor, coupe ve elektrikli prestij araçları için sıfır dereceli rampa uzantıları ve yumuşak mikrofiber jant bağlama aparatlarıyla sürtmesiz VIP transfer.',
    features: [
      'Sıfır dereceli yere tam yatan alçak şasi rampa sistemi',
      'Ön tampon, difüzör ve marşpiyel sürtme riski sıfır',
      'Jant çizilmesini engelleyen mikrofiber korumalı bağlama kayışları',
      'Elektrikli araçlar için "Transport Mode" güvenlik protokolü',
      'Yüksek teminatlı özel emtia ve süper lüks araç kaskosu'
    ],
    faqs: [
      { q: 'Aracımın tamponu çok basık, sürtme riski var mı?', a: 'Hayır, sıfır açılı rampa uzantılarımız sayesinde tampon yere temas etmeden yüklenir.' },
      { q: 'Elektrikli araçların (Tesla vb.) bataryası zarar görür mü?', a: 'Hayır, araç serbest çekici moduna alınır ve bataryaya sıfır yük biner.' },
      { q: 'Jantlarım çizilir mi?', a: 'Metale temas ettirmeyen özel tekstil kayışlar kullanıyoruz.' },
      { q: 'Kasko teminatı ne kadar?', a: 'Lüks araç taşıma poliçemiz milyonlarca liralık teminat kapsamındadır.' }
    ]
  },
  {
    slug: 'agir-vasita-cekici',
    name: 'Kamyon, Tır, Otobüs & Minibüs Çekici',
    title: 'Ağır Vasıta Çekici 7/24 | Kamyon & Tır Kurtarma - 0533 265 70 89',
    metaDesc: 'Kuzey Marmara Otoyolu ve TEM koridorunda kamyon, tır, otobüs ve hafif ticari araçlar için 7/24 ağır vasıta çekici ve kurtarıcı: 0533 265 70 89.',
    keywords: 'ağır vasıta çekici, kamyon çekici, tır çekici, minibüs çekici, otobüs kurtarma, kmo ağır vasıta çekici',
    image: 'minibus-cekici.webp',
    lead: 'Kuzey Marmara Otoyolu, lojistik depoları ve sanayi yollarında arızalanan kamyon, tır, dorse, otobüs ve minibüsler için yüksek tonajlı ağır kurtarma sistemleri.',
    features: [
      'Çift çeker ağır hizmet kurtarma ve gözlüklü çekici filosu',
      'Hava bağlantılı fren serbest bırakma ve şaft sökme müdahalesi',
      'Yüklü veya boş ticari araçların güvenli transferi',
      'Otoyol trafiğini tıkamadan hızlı emniyet tahliyesi',
      'Gebze, Pendik ve Tuzla ağır vasıta sanayilerine doğrudan teslimat'
    ],
    faqs: [
      { q: 'Yüklü tır ve kamyon çekebiliyor musunuz?', a: 'Evet, yüksek çekme kapasiteli ağır kurtarıcılarımızla yüklü araçları da naklediyoruz.' },
      { q: 'Hava freni kilitlenen araçlara müdahale var mı?', a: 'Harici hava hattımızla frenleri açıp güvenle çekiciye bağlıyoruz.' },
      { q: 'Otoyolda kaç dakikada yanımızda olursunuz?', a: 'Ağır vasıta nöbetçi aracımız ortalama 15-20 dakikada intikal eder.' },
      { q: 'Fatura kesiliyor mu?', a: 'Kurumsal firmalar için KDV dahil resmi fatura düzenlenir.' }
    ]
  },
  {
    slug: 'yol-yardim-aku-takviye',
    name: 'Mobil Akü Takviye & Yol Yardım',
    title: 'Mobil Akü Takviye 7/24 | Yerinde Yol Yardım - 0533 265 70 89',
    metaDesc: 'Yerinde akü takviyesi ve acil yol yardım. Kurtköy, Gebze, Pendik, KMO ve TEM hattında 12V/24V taşınabilir booster ile marş basma: 0533 265 70 89.',
    keywords: 'akü takviye, mobil akü yol yardım, yerinde akü çalıştırma, kurtköy akü takviye, gebze akü yol yardım, acil yol yardım',
    image: 'aku-takviye.webp',
    lead: 'Aracınız marş basmıyor veya aküsü bittiyse çekici masrafına gerek kalmadan yerinde çözüm. 12V ve 24V endüstriyel dijital booster cihazlarımızla anında çalıştırma.',
    features: [
      '12V ve 24V binek, ticari ve kamyonlara uygun profesyonel booster',
      'Start-Stop, AGM ve EFB modern akülerle %100 elektronik uyumluluk',
      'Araç beynine (ECU) zarar vermeyen voltaj korumalı bağlantı',
      'Alternatör ve şarj dinamosu yerinde ölçüm kontrolü',
      'Kurtköy, havalimanı ve otoyollarda 10 dakikada adrese ulaşım'
    ],
    faqs: [
      { q: 'Akü takviyesi aracın beynine zarar verir mi?', a: 'Hayır, kullandığımız dijital boosterlar aşırı akım ve ters kutup korumalıdır; elektronik beyne asla zarar vermez.' },
      { q: 'Start-Stop araçlarda takviye yapılabilir mi?', a: 'Evet, AGM ve EFB yeni nesil start-stop araçlara tam uyumludur.' },
      { q: 'Araç çalışmazsa çekici hizmetiniz var mı?', a: 'Akü arızası dışındaki mekanik sorunlarda kayar kasa çekicimiz anında yönlendirilir.' },
      { q: 'Ücret ne kadar?', a: 'Çekiciye göre çok daha ekonomik, sabit yerinde servis ücretimiz geçerlidir.' }
    ]
  },
  {
    slug: 'yerinde-lastik-yol-yardim',
    name: 'Mobil Lastik Tamiri & Stepne Değişimi',
    title: 'Mobil Lastik Yol Yardım 7/24 | Stepne Değişimi - 0533 265 70 89',
    metaDesc: 'Otoyolda ve şehir içinde yerinde lastik tamiri, fitil uygulaması, hava desteği ve stepne montajı. 7/24 acil mobil lastikçi: 0533 265 70 89.',
    keywords: 'mobil lastikçi, yerinde lastik tamiri, otoyol lastikçi, stepne değişimi, acil lastik yol yardım, kurtköy lastikçi',
    image: 'lastik-tamir.webp',
    lead: 'Otoyolda veya caddede lastiğiniz patladıysa, bijon kilitlendiyse veya kriko yoksa yerinde emniyetli müdahale ile yolculuğunuza kaldığınız yerden devam edin.',
    features: [
      'Otoyolda reflektörlü ve flaşörlü güvenli çalışma koridoru',
      'Pnömatik somun sökme ve yüksek tonajlı kriko tertibatı',
      'Yerinde profesyonel fitil tamiri ve kompresör hava basımı',
      'Stepne montajı ve patlak lastiğin bagaja emniyetle alınması',
      'Lastik yarılması durumunda yedek lastik veya çekiciye aktarma'
    ],
    faqs: [
      { q: 'Stepnem yoksa ne yapabiliriz?', a: 'Lastikte basit çivi/vida deliği varsa fitille tamir edip hava basıyoruz; yarık varsa en yakın lastikçiye çekiyoruz.' },
      { q: 'Otoyolda lastik değiştirmek tehlikeli mi?', a: 'Evet, tepe lambalı koruma aracımız arkadan gelen trafiği yavaşlatarak emniyet koridoru oluşturur.' },
      { q: 'Kamyon ve minibüs lastiği için uygun musunuz?', a: 'Hafif ticari ve binek araçların tüm ebatlarına yerinde müdahale ediyoruz.' },
      { q: 'Kaç dakikada gelirsiniz?', a: 'Ortalama 10-15 dakika içinde konumunuzdayız.' }
    ]
  },
  {
    slug: 'motosiklet-cekici',
    name: 'Motosiklet Çekici & Transfer',
    title: 'Motosiklet Çekici 7/24 | Özel Kilit Aparatlı - 0533 265 70 89',
    metaDesc: 'Scooter, racing, touring ve chopper motosikletler için özel ön tekerlek sabitleme sehpası ve sarsıntısız motosiklet çekici: 0533 265 70 89.',
    keywords: 'motosiklet çekici, motor çekici, motor kurtarma, scooter çekici, motosiklet taşıma istanbul kocaeli',
    image: 'motorsiklet-cekici.webp',
    lead: 'Motosikletler standart çekiciyle taşınmaz! Özel ön tekerlek sabitleme sehpamız ve 4 noktadan hidrolik gergili yumuşak kayışlarımızla motorunuz dik konumda, çizilmeden taşınır.',
    features: [
      'Ön tekerleği sımsıkı saran özel motosiklet sabitleme kıskacı',
      'Granajlara ve boyaya temas etmeyen yumuşak askı kuşakları',
      'Devrilme, yatma ve sarsıntı riski sıfır taşıma geometrisi',
      'Tüm racing, scooter, enduro ve touring modellerine uygunluk',
      'Şehir içi yetkili servislere veya şehirler arası kapalı nakliyat'
    ],
    faqs: [
      { q: 'Motosikletim çekici üzerinde devrilir mi?', a: 'Asla; ön tekerlek kıskacı ve 4 noktadan gergi kilitleriyle motor dik ve sarsıntısız sabitlenir.' },
      { q: 'Granaj ve kaportada çizilme olur mu?', a: 'Mikrofiber yumuşak kayışlar kullanıldığı için boyaya hiçbir metal temas etmez.' },
      { q: 'Büyük touring veya ağır motorları çekiyor musunuz?', a: 'Evet, 400 kg üzeri ağır cruiser ve touring motorlar için de aparatlarımız uygundur.' },
      { q: 'Fiyat tarifesi binek araçla aynı mı?', a: 'Motosikletler için özel ekonomik taban fiyat tarifemiz geçerlidir.' }
    ]
  },
  {
    slug: 'sehirlerarasi-arac-tasima',
    name: 'Şehirler Arası Araç Taşıma & Nakliyat',
    title: 'Şehirler Arası Araç Taşıma | 81 İle Güvenli Nakil - 0533 265 70 89',
    metaDesc: 'İstanbul ve Kocaeli çıkışlı Ankara, İzmir, Bursa, Antalya ve tüm Türkiye illerine kaskolu tekli ve çoklu şehirler arası araç nakliyatı: 0533 265 70 89.',
    keywords: 'şehirler arası çekici, şehirlerarası araç taşıma, kaskolu araç nakliyatı, çoklu çekici, tekli araç transferi, ankara istanbul çekici',
    image: 'sehirlerarasi-cekici.webp',
    lead: 'İstanbul ve Kocaeli hareketli olarak Ankara, İzmir, Bursa, Antalya başta olmak üzere 81 il ve ilçeye %100 emtia nakliyat sigortası ve canlı GPS takibiyle araç nakli.',
    features: [
      'Adresten teslim alıp dilediğiniz adrese anahtar teslim ulaştırma',
      'Taşıma esnasında canlı GPS konumu ve anlık operasyon bilgilendirmesi',
      'Piyasa değerine göre tam kapsamlı nakliyat emtia kaskosu',
      'Tekli ekspres transfer veya çoklu ekonomik çekici seçenekleri',
      'Arızalı, kazalı, sıfır kilometre ve lüks araç filo taşımacılığı'
    ],
    faqs: [
      { q: 'Şehirler arası taşımada aracım sigortalı mı?', a: 'Evet, yükleme anında imzalanan teslim tesellüm tutanağı ve tam nakliyat kaskosuyla taşınır.' },
      { q: 'Teslimat süresi ne kadar sürer?', a: 'Ekspres tekli taşımalarda 500 km altı aynı gün, daha uzak iller 24-48 saat içinde teslim edilir.' },
      { q: 'Aracımın konumunu takip edebilir miyim?', a: 'Evet, operatörümüz yol boyunca canlı WhatsApp konumu paylaşır.' },
      { q: 'Fiyat nasıl hesaplanır?', a: 'Mesafe (km), araç türü ve tekli/çoklu tercihine göre en uygun sabit fiyat teklifi verilir.' }
    ]
  }
];

function generateServiceHtml(svc) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": svc.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": `${DOMAIN}/` },
      { "@type": "ListItem", "position": 2, "name": "Hizmetlerimiz", "item": `${DOMAIN}/hizmetler/index.html` },
      { "@type": "ListItem", "position": 3, "name": svc.name, "item": `${DOMAIN}/hizmetler/${svc.slug}.html` }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Kuzey Marmara Çekici - ${svc.name}`,
    "serviceType": svc.name,
    "provider": {
      "@type": "EmergencyService",
      "name": "Kuzey Marmara Çekici",
      "telephone": `+${PHONE_RAW}`,
      "url": DOMAIN,
      "image": `${DOMAIN}/images/${svc.image}`
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Kuzey Marmara Otoyolu, TEM ve Çevre İlçeler"
    }
  };

  const otherServicesList = services
    .filter(s => s.slug !== svc.slug)
    .map(s => `<li><a href="${s.slug}.html" style="color:#0f172a; text-decoration:none; display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f5f9; font-size:0.88rem;"><span>⚙️ ${s.name}</span> <strong style="color:#ea580c;">İncele →</strong></a></li>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${svc.title}</title>
  <meta name="description" content="${svc.metaDesc}">
  <meta name="keywords" content="${svc.keywords}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${DOMAIN}/hizmetler/${svc.slug}.html">

  <link rel="icon" type="image/svg+xml" href="../images/logo.svg">
  <link rel="icon" type="image/webp" href="../images/logo.webp">
  <link rel="apple-touch-icon" href="../images/apple-touch-icon.png">

  <meta property="og:type" content="article">
  <meta property="og:title" content="${svc.title}">
  <meta property="og:description" content="${svc.metaDesc}">
  <meta property="og:url" content="${DOMAIN}/hizmetler/${svc.slug}.html">
  <meta property="og:image" content="${DOMAIN}/images/${svc.image}">
  <meta property="og:locale" content="tr_TR">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${svc.title}">
  <meta name="twitter:description" content="${svc.metaDesc}">
  <meta name="twitter:image" content="${DOMAIN}/images/${svc.image}">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="../css/style.css?v=3.1">

  <script type="application/ld+json">
  ${JSON.stringify(serviceSchema, null, 2)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(breadcrumbSchema, null, 2)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(faqSchema, null, 2)}
  </script>
</head>
<body>

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="../index.html" class="brand-logo" aria-label="Kuzey Marmara Çekici Ana Sayfa">
          <img src="../images/logo.svg" alt="Kuzey Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">KUZEY MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım &amp; Kurtarma</span>
          </div>
        </a>

        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="../index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="index.html" class="nav-link active">Hizmetlerimiz</a></li>
            <li><a href="../bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="../galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="../blog/index.html" class="nav-link">Blog</a></li>
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

  <!-- Hero -->
  <section class="ads-hero-container">
    <div class="container">
      <nav class="breadcrumb-nav" style="font-size: 0.875rem; margin-bottom: 16px; color: #94a3b8;">
        <a href="../index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <a href="index.html" style="color: #cbd5e1; text-decoration: none;">Hizmetlerimiz</a> /
        <span style="color: #ea580c; font-weight: 600;">${svc.name}</span>
      </nav>

      <span class="ads-hero-badge">
        <span class="pulse-dot"></span> 7/24 Kesintisiz Profesyonel Ekip • 10-15 Dk Varış
      </span>

      <h1 class="ads-hero-title">
        ${svc.name} &amp; <span style="color: #ea580c;">7/24 Acil Yol Yardım</span>
      </h1>

      <p class="ads-hero-desc">
        ${svc.lead}
      </p>

      <div class="ads-trust-pills">
        <span class="ads-trust-pill">🛡️ %100 Taşıma Kaskolu</span>
        <span class="ads-trust-pill">💰 Telefonda Sabit Fiyat</span>
        <span class="ads-trust-pill">💳 Mobil POS ile Kredi Kartı</span>
        <span class="ads-trust-pill">⏱️ 10-15 Dakika Varış</span>
      </div>

      <div class="ads-hero-ctas">
        <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg" style="box-shadow: 0 8px 24px rgba(234, 88, 12, 0.4);">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
          <span>Hemen Ara: ${PHONE}</span>
        </a>
        <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
          <span>WhatsApp Canlı Konum Gönder</span>
        </button>
      </div>

      <div class="ads-hero-photo-banner">
        <img src="../images/${svc.image}" alt="${svc.name} Filosu" width="1200" height="380">
        <div class="ads-hero-photo-caption">
          <span>✓ ${svc.name} - Kuzey Marmara &amp; TEM Koridorunda 7/24 Kesintisiz Hizmet</span>
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-sm">📞 10-15 Dk Varış: Ara</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ÇEKİCİ SÜRECİMİZ NASIL İŞLER? (4 ADIM) -->
  <section class="process-section">
    <div class="container">
      <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 30px;">
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
          <p><strong>0533 265 70 89</strong> numaramızı tek tıkla arayın veya WhatsApp üzerinden canlı konumunuzu gönderin. Çağrı merkezimiz 30 saniye içinde yanıt verir.</p>
          <span class="process-tag">30 Saniyede Yanıt</span>
        </div>

        <div class="process-card-luxury">
          <div class="process-card-header">
            <span class="process-num-pill">02</span>
            <span class="process-icon-circle">💰</span>
          </div>
          <h3>2. Net &amp; Sabit Fiyat Teyidi</h3>
          <p>Mesafe ve araç tipinize göre telefonda net fiyat verilir. Ek masraf, gişe sürprizi veya gizli ücret kesinlikle talep edilmez.</p>
          <span class="process-tag">Sürpriz Ücret Yok</span>
        </div>

        <div class="process-card-luxury">
          <div class="process-card-header">
            <span class="process-num-pill">03</span>
            <span class="process-icon-circle">🚚</span>
          </div>
          <h3>3. 10-15 Dk Hızlı İntikal</h3>
          <p>Bölgenizde hazır bekleyen nöbetçi hidrolik kayar kasa çekicimiz GPS yönlendirmesiyle rekor sürede yanınıza ulaşır.</p>
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

  <!-- NEDEN BİZ? / GÜVENİLİRLİK & AVANTAJLARIMIZ -->
  <section class="section" style="padding: 70px 0; background: #ffffff;">
    <div class="container">
      <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 30px;">
        <span class="section-badge" style="background: rgba(234,88,12,0.1); color: #ea580c; border: 1px solid rgba(234,88,12,0.25); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
          Neden Bizi Seçmelisiniz?
        </span>
        <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 900; color: #0f172a; margin: 12px 0 10px;">
          Neden Kuzey Marmara Çekici?
        </h2>
        <p style="color: #64748b; font-size: 1rem; line-height: 1.6;">
          En son teknoloji filomuz ve %100 müşteri memnuniyeti ilkemizle sunduğumuz kurumsal ayrıcalıklar.
        </p>
      </div>

      <div class="why-us-luxury-grid">
        <div class="why-card-luxury">
          <div class="why-icon-box">⏱️</div>
          <h3>10-15 Dakikada Hızlı İntikal</h3>
          <p>KMO gişeleri, viyadükler, TEM ve sanayi kavşaklarında konuşlu nöbetçi filomuzla olay yerine rekor sürede ulaşırız.</p>
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

  <!-- Ana İçerik -->
  <main class="section" style="padding: 50px 0 80px; background: #f8fafc;">
    <div class="container">
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px;" class="service-page-grid">
        
        <div class="service-content-col">
          <article class="content-block" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 35px 30px; margin-bottom: 30px; box-shadow: 0 4px 16px -2px rgba(15,23,42,0.04);">
            <div style="border-radius: 14px; overflow: hidden; margin-bottom: 25px;">
              <img src="../images/${svc.image}" alt="${svc.name}" width="800" height="533" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: cover; max-height: 420px;">
            </div>

            <h2 style="font-size: 1.55rem; font-weight: 900; color: #0f172a; margin-bottom: 15px;">
              ${svc.name} Hizmet Standartlarımız ve Avantajlarımız
            </h2>
            <p style="font-size: 1rem; line-height: 1.8; color: #334155; margin-bottom: 25px;">
              Kuzey Marmara Çekici olarak; en son teknoloji hidrolik donanımlı araçlarımız, eğitimli vinç operatörlerimiz ve %100 emtia taşıma kaskomuzla aracınızı sıfır hasar prensibiyle taşıyoruz. Otoyolun yüksek riskli yapısına uygun olarak güvenlik flaşörleri ve ikaz levhalarıyla donatılmış filomuz günün her saati hazır beklemektedir.
            </p>

            <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 15px;">
              Öne Çıkan Hizmet Özelliklerimiz
            </h3>
            <ul style="list-style: none; padding: 0; margin: 0 0 25px 0;">
              ${svc.features.map(f => `
                <li style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; gap: 10px; color: #334155; font-size: 0.95rem;">
                  <span style="color: #10b981; font-weight: 900;">✓</span> ${f}
                </li>
              `).join('')}
            </ul>

            <div style="background: #fff7ed; border-left: 4px solid #ea580c; padding: 22px; border-radius: 10px;">
              <h4 style="font-size: 1.15rem; font-weight: 800; color: #9a3412; margin-bottom: 8px;">
                💡 Operatör Notu &amp; Güvenlik Tavsiyesi
              </h4>
              <p style="font-size: 0.95rem; line-height: 1.7; color: #7c2d12; margin: 0;">
                Kuzey Marmara ve TEM güzergahında yolda kaldıysanız güvenliğiniz için aracın içinde beklemeyip çelik bariyerlerin arkasına geçiniz. 0533 265 70 89 numaramızdan WhatsApp canlı konumunuzu paylaştığınızda en yakın nöbetçi ekibimiz derhal yola çıkar.
              </p>
            </div>
          </article>

          <!-- SSS -->
          <article class="content-block" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 35px 30px; margin-bottom: 30px; box-shadow: 0 4px 16px -2px rgba(15,23,42,0.04);">
            <div style="margin-bottom: 24px;">
              <span style="color: #ea580c; font-weight: 800; font-size: 0.82rem; text-transform: uppercase;">Merak Edilenler</span>
              <h2 style="font-size: 1.55rem; font-weight: 900; color: #0f172a; margin-top: 6px;">
                ${svc.name} Hakkında Sıkça Sorulan Sorular
              </h2>
            </div>
            <div class="faq-accordion-list">
              ${svc.faqs.map((f, idx) => `
                <details class="faq-accordion-item" ${idx === 0 ? 'open' : ''}>
                  <summary class="faq-summary">
                    <span>${idx + 1}. ${f.q}</span>
                    <span class="faq-chevron">▼</span>
                  </summary>
                  <div class="faq-content">
                    <p style="margin: 0; line-height: 1.7;">${f.a}</p>
                  </div>
                </details>
              `).join('')}
            </div>
          </article>
        </div>

        <!-- Sidebar -->
        <aside class="service-sidebar-col">
          <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 28px; margin-bottom: 25px; position: sticky; top: 90px; box-shadow: 0 10px 30px rgba(15,23,42,0.06);">
            <span style="background: rgba(234,88,12,0.1); color: #ea580c; font-weight: 800; font-size: 0.8rem; padding: 5px 12px; border-radius: 999px; display: inline-block; margin-bottom: 14px;">
              7/24 Acil Çağrı
            </span>
            <h3 style="font-size: 1.35rem; font-weight: 900; color: #0f172a; margin-bottom: 10px; line-height: 1.3;">
              Hemen Çekici Çağırın
            </h3>
            <p style="font-size: 0.92rem; color: #64748b; line-height: 1.6; margin-bottom: 22px;">
              10-15 dakikada en yakın nöbetçi kurtarıcımızı konuma sevk edelim.
            </p>
            <a href="tel:${PHONE_RAW}" class="btn btn-call btn-block btn-lg" style="margin-bottom: 12px; text-decoration: none; justify-content: center; box-shadow: 0 6px 20px rgba(234, 88, 12, 0.35);">
              📞 Hemen Ara: ${PHONE}
            </a>
            <button type="button" class="btn btn-whatsapp btn-block btn-lg btn-send-location" style="justify-content: center;">
              💬 WhatsApp Canlı Konum
            </button>

            <div style="margin-top: 20px; padding: 14px; background: #f8fafc; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 1.5rem;">⭐⭐⭐⭐⭐</span>
              <div>
                <strong style="display: block; font-size: 0.88rem; color: #0f172a;">5.0 / 5.0 Memnuniyet</strong>
                <span style="font-size: 0.78rem; color: #64748b;">128+ Doğrulanmış Müşteri Yorumu</span>
              </div>
            </div>

            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 22px 0;">

            <h4 style="font-size: 1.05rem; font-weight: 800; color: #0f172a; margin-bottom: 14px;">
              Diğer Hizmetlerimiz
            </h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              ${otherServicesList}
            </ul>
          </div>
        </aside>

      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand-col">
          <div class="brand-logo" style="margin-bottom: 15px;">
            <img src="../images/logo.svg" alt="Kuzey Marmara Çekici Logo" width="40" height="40">
            <span class="brand-name" style="color: #fff; font-size: 1.2rem; font-weight: 900;">KUZEY MARMARA <span>ÇEKİCİ</span></span>
          </div>
          <p style="color: #94a3b8; font-size: 0.9rem; line-height: 1.6; margin-bottom: 15px;">
            Kuzey Marmara Otoyolu, TEM Otoyolu, Kurtköy, Pendik, Gebze, Çayırova ve çevre ilçelerde 7/24 güvenilir, kaskolu ve sabit fiyatlı oto kurtarıcı hizmeti.
          </p>
          <p style="color: #cbd5e1; font-weight: 700; font-size: 1rem;">
            Acil Çağrı: <a href="tel:${PHONE_RAW}" style="color: #ea580c; text-decoration: none;">${PHONE}</a>
          </p>
        </div>

        <div class="footer-links-col">
          <h4 style="color: #fff; font-weight: 800; margin-bottom: 15px;">Hızlı Menü</h4>
          <ul style="list-style: none; padding: 0; line-height: 2; font-size: 0.9rem;">
            <li><a href="../index.html" style="color: #94a3b8; text-decoration: none;">Ana Sayfa</a></li>
            <li><a href="index.html" style="color: #94a3b8; text-decoration: none;">Hizmetlerimiz</a></li>
            <li><a href="../bolgeler/index.html" style="color: #94a3b8; text-decoration: none;">Bölgelerimiz</a></li>
            <li><a href="../galeri.html" style="color: #94a3b8; text-decoration: none;">Galeri</a></li>
            <li><a href="../blog/index.html" style="color: #94a3b8; text-decoration: none;">Blog</a></li>
            <li><a href="../iletisim.html" style="color: #94a3b8; text-decoration: none;">İletişim</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h4 style="color: #fff; font-weight: 800; margin-bottom: 15px;">Popüler Hizmetler</h4>
          <ul style="list-style: none; padding: 0; line-height: 2; font-size: 0.9rem;">
            <li><a href="oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Kayar Kasa Çekici</a></li>
            <li><a href="otoyol-oto-kurtarma.html" style="color: #94a3b8; text-decoration: none;">Otoyol Kurtarıcı</a></li>
            <li><a href="luks-spor-arac-cekici.html" style="color: #94a3b8; text-decoration: none;">Lüks &amp; Spor Araç</a></li>
            <li><a href="yol-yardim-aku-takviye.html" style="color: #94a3b8; text-decoration: none;">Akü Takviye</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Kuzey Marmara Çekici. Tüm hakları saklıdır. 7/24 Kesintisiz Otoyol &amp; Şehir İçi Oto Kurtarma.</p>
      </div>
    </div>
  </footer>

  <!-- Mobil Dock -->
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

  <script src="../js/main.js?v=3.1" defer></script>
</body>
</html>`;
}

function generateIndexHtml() {
  const cardsHtml = services.map(s => `
    <div class="service-card">
      <div class="service-card-img-wrap">
        <img src="../images/${s.image}" alt="${s.name}" loading="lazy" width="600" height="400">
        <span class="service-card-badge">7/24 Aktif</span>
      </div>
      <div class="service-card-body">
        <h3 class="service-title"><a href="${s.slug}.html">${s.name}</a></h3>
        <p class="service-text">${s.lead}</p>
        <ul class="service-features">
          ${s.features.slice(0, 3).map(f => `<li><span class="check-icon">✓</span> ${f}</li>`).join('')}
        </ul>
        <a href="${s.slug}.html" class="service-btn">Hizmet Detayları →</a>
      </div>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hizmetlerimiz | Kuzey Marmara Çekici - 0533 265 70 89</title>
  <meta name="description" content="Kuzey Marmara Otoyolu, TEM Otoyolu ve çevre ilçelerde sunduğumuz 7/24 oto çekici, kurtarıcı, akü takviye, lastik değişimi ve yol yardım hizmetlerimiz.">
  <link rel="canonical" href="${DOMAIN}/hizmetler/index.html">
  <link rel="icon" type="image/svg+xml" href="../images/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="../css/style.css?v=3.1">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kuzey Marmara Çekici Hizmetlerimiz",
    "description": "Kuzey Marmara Otoyolu, TEM Otoyolu ve çevre ilçelerde 7/24 sunduğumuz oto çekici, kurtarıcı, akü takviye ve yol yardım hizmetlerimiz.",
    "url": "${DOMAIN}/hizmetler/index.html",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "${DOMAIN}/" },
        { "@type": "ListItem", "position": 2, "name": "Hizmetlerimiz", "item": "${DOMAIN}/hizmetler/index.html" }
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
            <li><a href="index.html" class="nav-link active">Hizmetlerimiz</a></li>
            <li><a href="../bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="../galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="../blog/index.html" class="nav-link">Blog</a></li>
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

  <!-- Subpage Hero -->
  <section class="subpage-hero" style="background: linear-gradient(180deg, #090d16 0%, #0f172a 100%); color: #fff; padding: 50px 0 45px; border-bottom: 1px solid rgba(255,255,255,0.08);">
    <div class="container">
      <nav class="breadcrumb-nav" style="font-size: 0.875rem; margin-bottom: 16px; color: #94a3b8;">
        <a href="../index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <span style="color: #ea580c; font-weight: 600;">Hizmetlerimiz</span>
      </nav>
      <h1 style="font-size: clamp(2rem, 4vw, 2.85rem); font-weight: 900; margin-bottom: 15px;">
        Kuzey Marmara &amp; TEM <span style="color: #ea580c;">Çekici Hizmetlerimiz</span>
      </h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 800px; line-height: 1.6;">
        Binek otomobilden ağır vasıtaya, motosikletten lüks basık araç taşımacılığına kadar 7/24 kaskolu ve son teknoloji oto kurtarma filosu.
      </p>
    </div>
  </section>

  <!-- ÇEKİCİ SÜRECİMİZ NASIL İŞLER? (4 ADIM) -->
  <section class="process-section">
    <div class="container">
      <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 30px;">
        <span class="section-badge" style="background: rgba(234,88,12,0.1); color: #ea580c; border: 1px solid rgba(234,88,12,0.25); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
          Şeffaf &amp; Güvenli Operasyon
        </span>
        <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 900; color: #0f172a; margin: 12px 0 10px;">
          Çekici Sürecimiz Nasıl İşler?
        </h2>
        <p style="color: #64748b; font-size: 1rem; line-height: 1.6;">
          Yolda kaldığınız andan itibaren 4 kolay ve şeffaf adımda aracınızı güvenle istediğiniz noktaya ulaştırıyoruz.
        </p>
      </div>

      <div class="process-grid-luxury">
        <div class="process-card-luxury">
          <div class="process-card-header">
            <span class="process-num-pill">01</span>
            <span class="process-icon-circle">📞</span>
          </div>
          <h3>1. Bize Ulaşın &amp; Konum Atın</h3>
          <p><strong>0533 265 70 89</strong> numaramızı tek tıkla arayın veya WhatsApp üzerinden canlı konumunuzu iletin. Çağrı merkezimiz 30 saniye içinde yanıt verir.</p>
          <span class="process-tag">30 Saniyede Yanıt</span>
        </div>

        <div class="process-card-luxury">
          <div class="process-card-header">
            <span class="process-num-pill">02</span>
            <span class="process-icon-circle">💰</span>
          </div>
          <h3>2. Net &amp; Sabit Fiyat Teyidi</h3>
          <p>Mesafe ve araç tipinize göre telefonda net fiyat verilir. Ek masraf, gişe sürprizi veya gizli ücret kesinlikle talep edilmez.</p>
          <span class="process-tag">Sürpriz Ücret Yok</span>
        </div>

        <div class="process-card-luxury">
          <div class="process-card-header">
            <span class="process-num-pill">03</span>
            <span class="process-icon-circle">🚚</span>
          </div>
          <h3>3. 10-15 Dk Hızlı İntikal</h3>
          <p>Bölgenizde hazır bekleyen nöbetçi hidrolik kayar kasa çekicimiz GPS yönlendirmesiyle rekor sürede yanınıza ulaşır.</p>
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

  <!-- NEDEN BİZ? / GÜVENİLİRLİK & AVANTAJLARIMIZ -->
  <section class="section" style="padding: 70px 0; background: #ffffff;">
    <div class="container">
      <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 30px;">
        <span class="section-badge" style="background: rgba(234,88,12,0.1); color: #ea580c; border: 1px solid rgba(234,88,12,0.25); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
          Neden Bizi Seçmelisiniz?
        </span>
        <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 900; color: #0f172a; margin: 12px 0 10px;">
          Neden Kuzey Marmara Çekici?
        </h2>
        <p style="color: #64748b; font-size: 1rem; line-height: 1.6;">
          15 yılı aşkın otoyol kurtarma deneyimimiz, son teknoloji filomuz ve %100 müşteri memnuniyeti ilkemiz.
        </p>
      </div>

      <div class="why-us-luxury-grid">
        <div class="why-card-luxury">
          <div class="why-icon-box">⏱️</div>
          <h3>10-15 Dakikada Hızlı İntikal</h3>
          <p>KMO gişeleri, viyadükler, TEM ve sanayi kavşaklarında konuşlu nöbetçi filomuzla olay yerine rekor sürede ulaşırız.</p>
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

  <!-- Hizmet Kartları Grid -->
  <main class="section" style="padding: 60px 0 80px; background: #f8fafc;">
    <div class="container">
      <div style="text-align: center; max-width: 760px; margin: 0 auto 35px;">
        <h2 style="font-size: 2rem; font-weight: 900; color: #0f172a; margin-bottom: 10px;">
          Tüm Kurtarma &amp; Yol Yardım Hizmetlerimiz
        </h2>
        <p style="color: #64748b; font-size: 1rem;">
          İhtiyacınıza uygun hizmeti seçerek detaylı bilgi alabilir veya hemen arayabilirsiniz.
        </p>
      </div>

      <div class="services-grid">
        ${cardsHtml}
      </div>

      <!-- SSS Bölümü -->
      <div style="margin-top: 60px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 35px 30px;">
        <h3 style="font-size: 1.5rem; font-weight: 900; color: #0f172a; margin-bottom: 20px;">
          Hizmetlerimiz Hakkında Sıkça Sorulan Sorular
        </h3>
        <div class="faq-accordion-list">
          <details class="faq-accordion-item" open>
            <summary class="faq-summary">
              <span>1. Çekici çağırdıktan sonra ne kadar sürede gelir?</span>
              <span class="faq-chevron">▼</span>
            </summary>
            <div class="faq-content">
              <p>Kuzey Marmara Otoyolu, Kurtköy, TEM ve Gebze aksında konuşlu nöbetçi araçlarımızla ortalama 10-15 dakika içinde olay yerindeyiz.</p>
            </div>
          </details>

          <details class="faq-accordion-item">
            <summary class="faq-summary">
              <span>2. Kredi kartı ile ödeme yapabilir miyim?</span>
              <span class="faq-chevron">▼</span>
            </summary>
            <div class="faq-content">
              <p>Evet, tüm kurtarıcı araçlarımızda mobil POS cihazı mevcuttur; tek çekim veya taksitle ödeme kabul edilmektedir.</p>
            </div>
          </details>

          <details class="faq-accordion-item">
            <summary class="faq-summary">
              <span>3. Lüks ve spor araçlar için özel ekipmanınız var mı?</span>
              <span class="faq-chevron">▼</span>
            </summary>
            <div class="faq-content">
              <p>Evet, basık ve lüks araçlar için sıfır dereceli hidrolik rampa uzantılarımız ve mikrofiber jant kilitlerimiz mevcuttur; sürtme riski sıfırdır.</p>
            </div>
          </details>

          <details class="faq-accordion-item">
            <summary class="faq-summary">
              <span>4. Aracım taşınırken kasko kapsamında mı?</span>
              <span class="faq-chevron">▼</span>
            </summary>
            <div class="faq-content">
              <p>Evet, yükleme anından teslimata kadar tüm araçlar %100 nakliyat emtia ve taşıyıcı sorumluluk sigortası güvencesindedir.</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand-col">
          <div class="brand-logo" style="margin-bottom: 15px;">
            <img src="../images/logo.svg" alt="Kuzey Marmara Çekici Logo" width="40" height="40">
            <span class="brand-name" style="color: #fff; font-size: 1.2rem; font-weight: 900;">KUZEY MARMARA <span>ÇEKİCİ</span></span>
          </div>
          <p style="color: #94a3b8; font-size: 0.9rem; line-height: 1.6; margin-bottom: 15px;">
            Kuzey Marmara Otoyolu, TEM Otoyolu, Kurtköy, Pendik, Gebze, Çayırova ve çevre ilçelerde 7/24 güvenilir, kaskolu ve sabit fiyatlı oto kurtarıcı hizmeti.
          </p>
          <p style="color: #cbd5e1; font-weight: 700; font-size: 1rem;">
            Acil Çağrı: <a href="tel:${PHONE_RAW}" style="color: #ea580c; text-decoration: none;">${PHONE}</a>
          </p>
        </div>

        <div class="footer-links-col">
          <h4 style="color: #fff; font-weight: 800; margin-bottom: 15px;">Hızlı Menü</h4>
          <ul style="list-style: none; padding: 0; line-height: 2; font-size: 0.9rem;">
            <li><a href="../index.html" style="color: #94a3b8; text-decoration: none;">Ana Sayfa</a></li>
            <li><a href="index.html" style="color: #94a3b8; text-decoration: none;">Hizmetlerimiz</a></li>
            <li><a href="../bolgeler/index.html" style="color: #94a3b8; text-decoration: none;">Bölgelerimiz</a></li>
            <li><a href="../galeri.html" style="color: #94a3b8; text-decoration: none;">Galeri</a></li>
            <li><a href="../blog/index.html" style="color: #94a3b8; text-decoration: none;">Blog</a></li>
            <li><a href="../iletisim.html" style="color: #94a3b8; text-decoration: none;">İletişim</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h4 style="color: #fff; font-weight: 800; margin-bottom: 15px;">Popüler Hizmetler</h4>
          <ul style="list-style: none; padding: 0; line-height: 2; font-size: 0.9rem;">
            <li><a href="oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Kayar Kasa Çekici</a></li>
            <li><a href="otoyol-oto-kurtarma.html" style="color: #94a3b8; text-decoration: none;">Otoyol Kurtarıcı</a></li>
            <li><a href="luks-spor-arac-cekici.html" style="color: #94a3b8; text-decoration: none;">Lüks &amp; Spor Araç</a></li>
            <li><a href="yol-yardim-aku-takviye.html" style="color: #94a3b8; text-decoration: none;">Akü Takviye</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Kuzey Marmara Çekici. Tüm hakları saklıdır. 7/24 Kesintisiz Otoyol &amp; Şehir İçi Oto Kurtarma.</p>
      </div>
    </div>
  </footer>

  <!-- Mobil Dock -->
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

  <script src="../js/main.js?v=3.1" defer></script>
</body>
</html>`;
}

// Üretim Başlat
const outDir = path.join(__dirname, '..', 'hizmetler');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('🚀 Kuzey Marmara Çekici Hizmet Sayfaları Üretiliyor...');

services.forEach(svc => {
  const filePath = path.join(outDir, `${svc.slug}.html`);
  fs.writeFileSync(filePath, generateServiceHtml(svc), 'utf8');
  console.log(`✓ Üretildi: hizmetler/${svc.slug}.html`);
});

fs.writeFileSync(path.join(outDir, 'index.html'), generateIndexHtml(), 'utf8');
console.log('✓ Üretildi: hizmetler/index.html (Dizin)');

console.log('🎉 Toplam ' + (services.length + 1) + ' hizmet sayfası başarıyla tamamlandı!');
