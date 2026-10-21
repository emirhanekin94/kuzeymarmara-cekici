/**
 * KUZEY MARMARA OTO ÇEKİCİ - 7/24 HİZMET SAYFALARI ÜRETİM MOTORU
 * Tel & WhatsApp: 0533 265 70 89
 * SEO Odaklı, Zengin İçerikli, Mobil & Masaüstü Uyumlu Yeni Nesil Tasarım
 */

const fs = require('fs');
const path = require('path');
const { SERVICE_EXTENSIONS } = require('../data/service_extensions.js');

const PHONE = '0533 265 70 89';
const PHONE_RAW = '905332657089';
const DOMAIN = 'https://kuzeymarmaracekici.com';

const services = [
  {
    slug: 'oto-cekici',
    name: 'Kayar Kasa Oto Çekici',
    badge: '⚡ 10-15 Dk Varış',
    title: 'Kayar Kasa Oto Çekici 7/24 | Kuzey Marmara Çekici - 0533 265 70 89',
    metaDesc: 'Binek otomobil, crossover ve SUV araçlarınız için hidrolik kayar kasa çekici. Sıfır hasar garantisi, %100 taşıma kaskosu, 10-15 dk intikal: 0533 265 70 89.',
    keywords: 'oto çekici, kayar kasa çekici, kurtköy oto çekici, kuzey marmara oto çekici, acil çekici, hasarsız araç çekici, çekici çağır',
    image: 'otomobil_cekici-1.webp',
    lead: 'Kuzey Marmara Otoyolu, TEM Otoyolu, Kurtköy, Viaport, Sabiha Gökçen, Gebze ve Pendik çevresinde binek ve SUV araçlarınızı geniş açılı hidrolik kayar kasa platformlarımızla tampon sürtmesi olmadan, kaskolu ve hasarsız taşıyoruz.',
    articleParagraphs: [
      "Kuzey Marmara Otoyolu (KMO) ve TEM Otoyolu gibi yüksek hızlı ulaşım koridorlarında araç arızası veya kaza yaşandığında, sıradan halatlı çekicilerle müdahale etmek hem aracınızın şasisine zarar verir hem de yüksek hızda akan trafikte ciddi hayati tehlike oluşturur. Kayar kasa oto çekici sistemimiz, aracınızın zeminle olan açısını sıfıra indirerek tamponun, karter muhafazasının veya egzoz borularının platforma sürtmesini tamamen engeller. Araç platforma hidrolik vinç yardımıyla yavaşça çekilir ve 4 tekerlekten özel tekstil gergili emniyet kemerleriyle kasaya kilitlenir.",
      "Kurtköy gişeleri, Kurnaköy, Mecidiye, Akse, Sabiha Gökçen Havalimanı kavşakları ve Gebze OSB bağlantılarında 7/24 tepe lambalı nöbet tutan kayar kasa filomuz, çağrınızın ardından ortalama 10 ila 15 dakika içinde tam konumunuza ulaşır. Aracınız ister otomatik vites, ister elektrikli, ister basık şasili spor model olsun; aktarma organlarına ve şanzımanına en ufak mekanik yük bindirilmeden güvenle platforma alınır.",
      "Tüm operasyonlarımız yükleme anından varış noktasına kadar %100 Emtia Nakliyat ve Taşıyıcı Sorumluluk Kaskosu güvencesindedir. Aracınızı Pendik Oto Sanayi, Kartal Oto Sanayi, Gebze Küçük Sanayi veya İstanbul Anadolu Yakası'ndaki dilediğiniz yetkili servise resmi teslim tutanağı ile teslim ediyoruz. Araç başında kredi kartı ile tek çekim veya taksitli ödeme yapabilirsiniz."
    ],
    features: [
      'Geniş açılı ve sıfır eğimli hidrolik kayar platform',
      '4 noktadan profesyonel tekerlek sabitleme kemerleri',
      '%100 Emtia Nakliyat ve Taşıyıcı Sorumluluk Kaskosu',
      'Kurtköy, Pendik, Gebze ve yetkili servislere öncelikli kabul',
      'Ortalama 10 ila 15 dakikada en yakın nöbetçi kurtarıcı'
    ],
    compatibleVehicles: [
      { icon: '🚗', title: 'Binek Otomobiller', desc: 'Sedan, hatchback ve station wagon tüm binek araçlar tampon sürtmesi olmadan yüklenir.' },
      { icon: '🚙', title: 'SUV & 4x4 Crossover', desc: 'Ağır şasili ve 4 çeker SUV araçlar için yüksek taşıma kapasiteli hidrolik tabla.' },
      { icon: '🏎️', title: 'Lüks & Spor Araçlar', desc: 'Alçak şaseli spor otomobiller için sıfır dereceli rampa uzantısı ve mikrofiber jant kayışı.' },
      { icon: '🚐', title: 'Hafif Ticari Araçlar', desc: 'Kamyonet, panelvan ve doblo sınıfı ticari araçların güvenli transferi.' }
    ],
    faqs: [
      { q: 'Kayar kasa çekici aracıma zarar verir mi?', a: 'Hayır, platform yere tam sıfır indiği için tampon, karter veya egzoz sürtmesi yaşanmaz. Araç 4 tekerlekten tekstil kayışlarla kilitlenir.' },
      { q: 'Taşıma esnasında kasko var mı?', a: 'Evet, yükleme anından teslimata kadar tüm araçlar %100 nakliyat sigortası ve taşıyıcı sorumluluk kaskosu güvencesindedir.' },
      { q: 'Kaç dakikada gelirsiniz?', a: 'Kurtköy, KMO gişeleri ve TEM üzerinde konuşlu nöbetçi ekiplerimiz ortalama 10-15 dakika içinde yanınızda olur.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, kurtarıcı araçlarımızdaki mobil POS ile tüm banka ve kredi kartlarıyla taksitli veya tek çekim ödeme yapabilirsiniz.' },
      { q: 'Aracımı dilediğim servise çeker misiniz?', a: 'Evet, talep ettiğiniz yetkili servise, özel sanayi ustasına veya evinize kaskolu teslimat yapılır.' }
    ]
  },
  {
    slug: 'otoyol-oto-kurtarma',
    name: 'Otoyol Acil Oto Kurtarma (KMO & TEM)',
    badge: '🚨 7/24 Otoyol Nöbeti',
    title: 'Otoyol Oto Kurtarma 7/24 | KMO & TEM Çekici - 0533 265 70 89',
    metaDesc: 'Kuzey Marmara Otoyolu ve TEM Otoyolu acil çekici ve kurtarma servisi. Gişeler, viyadükler ve dinlenme tesislerinde 7/24 hızlı intikal: 0533 265 70 89.',
    keywords: 'otoyol çekici, otoban çekici, kuzey marmara otoyolu kurtarıcı, tem otoyolu çekici, otoban yol yardım, acil otoban kurtarma',
    image: 'otoyol-cekici.webp',
    lead: 'Yüksek hızlı otoyollarda arızalanan veya kaza yapan araçlar için özel otoyol güvenlik ikaz donanımlı, güçlü vinçli ve kayar kasalı acil kurtarma filomuz 7/24 hazır.',
    articleParagraphs: [
      "Kuzey Marmara Otoyolu (140 km/s hız limiti) ve TEM Otoyolu yoğun ağır vasıta trafiğine sahiptir. Bu güzergahlarda emniyet şeridinde beklemek dahi hayati risk taşır. Ekiplerimiz, otoyol işletme protokollerine uygun tepe LED flaşör kuleleri ve reflektif güvenlik koridoru oluşturarak önce can güvenliğinizi sağlar, ardından aracınızı saniyeler içinde platforma alır.",
      "Tünel geçişleri, viyadükler ve gişe ayrımları otoyolda en çok müdahale ettiğimiz noktalardır. Lastik patlaması, motor harareti, yakıt tükenmesi veya mekanik arıza durumlarında GPS koordinatlarınız üzerinden en yakın çıkışta hazır bekleyen ekibimiz derhal yola çıkar.",
      "Otoyol acil kurtarma sürecinde sabit fiyat garantisi verilir; telefonda teyit edilen fiyat dışında otoyol gişe veya ek gizli masraf çıkarılmaz. Taşıma tutanağı ile sigorta şirketlerine ibraz edebileceğiniz resmi evrak düzenlenir."
    ],
    features: [
      '1 km önceden uyaran yüksek parlaklıklı LED otoyol flaşör kulesi',
      'Otoyol kurallarına uygun hızlı ve güvenli emniyet şeridi tahliyesi',
      'KMO tünelleri ve viyadüklerinde kaza/arıza uzman müdahalesi',
      'Yakıt ikmali, akü takviyesi ve yerinde lastik desteği',
      'Otoyol gişe çıkışlarına ve istenen servise doğrudan transfer'
    ],
    compatibleVehicles: [
      { icon: '🚗', title: 'Otoyolda Kalan Otomobiller', desc: 'Hararet yapan, lastiği yarılan veya stop eden binek otomobillerin süratle tahliyesi.' },
      { icon: '🚛', title: 'Hafif Ticari & Kamyonetler', desc: 'Yüklü veya boş ticari araçların otoyol güvenlik koridorunda platforma alınması.' },
      { icon: '⚡', title: 'Elektrikli Araçlar', desc: 'Şarjı biten veya sistem kilitleyen elektrikli otomobiller için özel çekici modu desteği.' },
      { icon: '🏎️', title: 'Spor & Coupe Araçlar', desc: 'Yüksek hızda lastik hasarı alan lüks otomobiller için sıfır dereceli rampa güvencesi.' }
    ],
    faqs: [
      { q: 'Otoyolda durmak tehlikeli mi, ne yapmalıyım?', a: 'Dörtlülerinizi yakın, aracı emniyet şeridinin en sağına çekin, çelik bariyerin arkasına geçin ve hemen bizi arayın.' },
      { q: 'Otoyol gişelerine ne kadar sürede varırsınız?', a: 'Çıkış ve bağlantı noktalarındaki araçlarımızla ortalama 12-15 dakikada olay yerindeyiz.' },
      { q: 'Gişe ücreti çekici fiyatına dahil mi?', a: 'Telefonda teyit edilen fiyatta tüm kalemler şeffaftır, sürpriz ücret talep edilmez.' },
      { q: 'Gece çekici hizmetiniz var mı?', a: 'Evet, 7 gün 24 saat otoyol nöbeti tutmaktayız.' }
    ]
  },
  {
    slug: 'kaza-vinc-kurtarma',
    name: 'Kaza & Ağır Hizmet Vinç Kurtarma',
    badge: '🏗️ Ağır Hizmet Vinç',
    title: 'Kaza & Vinçli Oto Kurtarma 7/24 | Kuzey Marmara - 0533 265 70 89',
    metaDesc: 'Şarampol, devrilme, bariyer sıkışması ve kilitli araç durumlarında vinçli oto kurtarma. Kuzey Marmara ve TEM hattında 7/24 acil müdahale: 0533 265 70 89.',
    keywords: 'kaza çekici, vinçli oto kurtarma, şarampol çekici, devrilen araç kurtarma, kaza kurtarıcı, ahtapot çekici',
    image: 'kazali-arac-cekici.webp',
    lead: 'Trafik kazası, şarampole inme, devrilme veya mekanik aks kırılması durumlarında çift halatlı ağır hizmet vinç tertibatlı araçlarımızla olay yerine anında ulaşıyoruz.',
    articleParagraphs: [
      "Ağır hasarlı kaza durumlarında standart çekiciler yetersiz kalır. Şarampole yuvarlanma, bariyerlere saplanma, aks kırılması veya devrilme gibi durumlarda çift çeker hidrolik bomlu vinç araçlarımız devreye girer. Operatörlerimiz olay yeri çevre güvenliğini alarak aracı gövdesine ek zarar vermeden çelik halat ve tekstil sapanlarla kurtarır.",
      "Kaza tespit tutanağı sürecinde sürücülerimize rehberlik ediyor, araçtaki eşyaların emniyetini sağlıyoruz. Aksı kırık veya tekerlekleri kilitli araçlar için tekerlek kaydırma arabaları (dolly) kullanılarak aracın şanzımanı ve alt takımı korunur.",
      "Kaza sonrası kasko ve sigorta şirketlerinin talep ettiği taşıma irsaliyesi, fatura ve operasyon fotoğrafları eksiksiz olarak sürücüye teslim edilir. Yetkili servislere hasarsız ve hızlı teslimat sağlanır."
    ],
    features: [
      'Ağır tonajlı hidrolik çelik halat vinç tertibatı',
      'Aksı kırık veya tekerlekleri dönmeyen araçlar için kaydırma aparatları',
      'Kaza tespit tutanağı sürecinde profesyonel operatör rehberliği',
      'Kasko ve sigorta anlaşmalı yetkili servislere doğrudan hasarsız teslim',
      'Olay yeri çevre ve trafik güvenlik önlemleri yönetimi'
    ],
    compatibleVehicles: [
      { icon: '💥', title: 'Ağır Hasarlı Araçlar', desc: 'Aksı kırılan, ön takımı kopan veya tekerlekleri kilitlenen araçlar vinçle kaldırılır.' },
      { icon: '🌾', title: 'Şarampole İnen Araçlar', desc: 'Yoldan çıkan veya meyilde kalan araçlar çelik vinç halatlarıyla hasarsız yukarı çekilir.' },
      { icon: '🚧', title: 'Bariyere Saplanan Araçlar', desc: 'Çelik bariyer arasına sıkışan araçlar hidrolik açıcı ve askı sistemleriyle kurtarılır.' },
      { icon: '🔄', title: 'Devrilen / Yan Yatan Araçlar', desc: 'Hassas tekstil sapanlarla tavan ezilmeden düzeltilip platforma alınır.' }
    ],
    faqs: [
      { q: 'Tekerlekleri dönmeyen araç çekilebilir mi?', a: 'Evet, özel tekerlek kaydırma arabaları (dolly) ile şanzımana zarar vermeden platforma yüklüyoruz.' },
      { q: 'Kaza sonrası sigorta için belge veriyor musunuz?', a: 'Evet, resmi fatura ve taşıma tutanağı eksiksiz düzenlenir; kaskodan geri tahsil edebilirsiniz.' },
      { q: 'Şarampolden araç çekebilir misiniz?', a: 'Ağır hizmet vinç donanımımızla şarampoldeki araçları emniyetle yukarı alıyoruz.' },
      { q: 'Fiyat nasıl belirlenir?', a: 'Aracın durumu, vinç ihtiyacı ve mesafeye göre telefonda şeffaf sabit fiyat verilir.' }
    ]
  },
  {
    slug: 'luks-spor-arac-cekici',
    name: 'Lüks & Spor Basık Araç Taşıma',
    badge: '🏎️ Sıfır Derece Rampa',
    title: 'Lüks & Spor Araç Çekici | Sıfır Açılı Rampa - 0533 265 70 89',
    metaDesc: 'Porsche, Ferrari, Tesla, BMW M, Mercedes AMG ve basık spor araçlar için sıfır dereceli rampa uzantılı özel çekici. Tam kaskolu: 0533 265 70 89.',
    keywords: 'lüks araç çekici, spor araba çekici, basık araç çekici, tesla çekici, porsche çekici, sıfır açılı çekici',
    image: 'luks-arac-cekici.webp',
    lead: 'Düşük şasili, spor, coupe ve elektrikli prestij araçları için sıfır dereceli rampa uzantıları ve yumuşak mikrofiber jant bağlama aparatlarıyla sürtmesiz VIP transfer.',
    articleParagraphs: [
      "Spor otomobiller, modifiyeli basık araçlar ve elektrikli modeller için standart çekici rampaları ölümcüldür. Ön karlık, difüzör, yan marşpiyeller veya batarya koruma sacı standart rampalarda yere sürterek binlerce liralık hasara yol açar. Filomuzdaki özel sıfır dereceli yere tam yatan hidrolik rampa sistemi, aracı zeminle aynı hizada karşılar.",
      "Jant sabitlemesinde metal kancalar yerine sadece yumuşak tekstil kayışlar kullanılır. Bu sayede elmas kesim veya boyalı özel alaşım jantlarda en ufak çizik dahi oluşmaz. Tesla, Porsche Taycan gibi araçlarda üretici onaylı 'Çekici / Taşıma Modu' protokolü uygulanır.",
      "Yüksek teminatlı emtia taşıma sigortamız lüks araçların piyasa değerini tam olarak kapsar. Araç başında detaylı fotoğraflı ekspertiz tutanağı düzenlenerek VIP teslimat gerçekleştirilir."
    ],
    features: [
      'Sıfır dereceli yere tam yatan alçak şasi rampa sistemi',
      'Ön tampon, difüzör ve marşpiyel sürtme riski sıfır',
      'Jant çizilmesini engelleyen mikrofiber korumalı bağlama kayışları',
      'Elektrikli araçlar için "Transport Mode" güvenlik protokolü',
      'Yüksek teminatlı özel emtia ve süper lüks araç kaskosu'
    ],
    compatibleVehicles: [
      { icon: '🏎️', title: 'Süper Spor & GT', desc: 'Porsche, Ferrari, Lamborghini, Aston Martin sınıfı yere yakın araçlar.' },
      { icon: '⚡', title: 'Elektrikli Prestij', desc: 'Tesla Model S/3/X/Y, Porsche Taycan, Togg, Mercedes EQ, BMW i serisi.' },
      { icon: '🏁', title: 'Modifiyeli & Basık Araçlar', desc: 'Coilover veya spor yay takılı, tampon mesafesi düşük tüm araçlar.' },
      { icon: '💎', title: 'Klasik & Koleksiyonluk', desc: 'Özel müze veya koleksiyon araçlarının titreşimsiz VIP kapalı/açık transferi.' }
    ],
    faqs: [
      { q: 'Aracımın tamponu çok basık, sürtme riski var mı?', a: 'Hayır, sıfır açılı rampa uzantılarımız sayesinde tampon yere temas etmeden yüklenir.' },
      { q: 'Elektrikli araçların (Tesla vb.) bataryası zarar görür mü?', a: 'Hayır, araç üretici çekici moduna alınır ve bataryaya sıfır yük biner.' },
      { q: 'Jantlarım çizilir mi?', a: 'Metale temas ettirmeyen mikrofiber özel tekstil kayışlar kullanıyoruz.' },
      { q: 'Kasko teminatı ne kadar?', a: 'Lüks araç taşıma poliçemiz milyonlarca liralık tam piyasa değeri teminatı kapsamındadır.' }
    ]
  },
  {
    slug: 'ahtapot-cekici',
    name: 'Ahtapot Çekici (4 Tekerden Askılı Vinç)',
    badge: '🐙 4 Tekerden Kaldırma',
    title: 'Ahtapot Çekici 7/24 | 4 Tekerden Askılı Kurtarıcı - 0533 265 70 89',
    metaDesc: 'Şanzımanı kilitli, el freni takılı veya sıkışık park halindeki araçlar için 4 tekerden askılı ahtapot çekici. Sıfır mekanik hasar: 0533 265 70 89.',
    keywords: 'ahtapot çekici, askılı çekici, tekerden kaldırma çekici, kilitli araç çekici, ahtapot vinç kurtarıcı',
    image: 'ahtapot-cekici.webp',
    lead: 'Şanzımanı kilitlenen, el freni takılı kalan, park yerinde kilitli duran veya tekerlekleri dönmeyen araçlar için 4 tekerlekten özel aparatla havaya kaldırıp kasaya alan ahtapot çekici desteği.',
    articleParagraphs: [
      "Otomatik şanzıman arızalarında tekerlekleri kilitlenen araçları sürükleyerek çekiciye yüklemek, şanzıman dişlilerine ve diferansiyele geri dönülmez hasarlar verir. Ahtapot çekici sistemimiz, 4 tekerleğe takılan özel kavrayıcı aparatlarla aracı havaya kaldırır ve doğrudan havadan kasaya indirir.",
      "Dar sokaklarda, park halinde iki araç arasında sıkışmış durumlarda veya kaldırım kenarında yanaşma açısı bulunmayan noktalarda dikey vinç sistemi sayesinde aracın burnunu çevirmeye gerek kalmadan müdahale edilir.",
      "Kurtköy, Pendik, Sabiha Gökçen ve Gebze çevresinde nöbet tutan ahtapot kurtarıcılarımızla aracınızı mekanik ve elektronik aksamına dokunmadan güvenle naklediyoruz."
    ],
    features: [
      '4 tekerleğe bağlanan tekerlek kelepçeleriyle havadan kaldırma',
      'Otomatik şanzımana, akslara ve difransiyele sıfır mekanik temas',
      'Dar sokaklarda ve otoparklarda yanaşma açısı gerektirmeyen dikey vinç',
      'Kilitli kalan elektrikli ve otomatik vitesli araçlarda %100 güvenli çözüm',
      'Otoyol bariyerlerine yapışan araçları tek hamlede kurtarma'
    ],
    compatibleVehicles: [
      { icon: '🔒', title: 'Şanzımanı Kilitli Araçlar', desc: 'P konumunda kilitlenen otomatik vitesli araçlar sürüklenmeden kaldırılır.' },
      { icon: '🅿️', title: 'Sıkışık Park Alanları', desc: 'Önü ve arkası kapalı, manevra yapılamayan dar otoparklardaki araçlar.' },
      { icon: '⚡', title: 'Elektronik El Freni Takılı Araçlar', desc: 'El freni motoru kilitlenen ve tekerleği dönmeyen araçlar.' },
      { icon: '⛔', title: 'Tekerlek Açısı Kırık Araçlar', desc: 'Rot kollarından biri kopmuş, direksiyon kumandası olmayan araçlar.' }
    ],
    faqs: [
      { q: 'Ahtapot çekici ne zaman gerekir?', a: 'Şanzıman kilitlendiğinde, tekerlekler dönmediğinde veya dar alandan çıkış yapılamadığında kullanılır.' },
      { q: 'Jantlara zarar verir mi?', a: 'Hayır, tekstil korumalı tekerlek kilitleri sadece lastiği kavrar, janta temas etmez.' },
      { q: 'Kurtköy ve Gebze bölgesine kaç dakikada gelir?', a: 'Nöbetçi ahtapot vinçli kurtarıcımız ortalama 15-20 dakikada yanınızda olur.' }
    ]
  },
  {
    slug: 'kapali-otopark-cekici',
    name: 'Kapalı Otopark Çekicisi (Alçak Tavan)',
    badge: '🏢 1.90m Alçak Tavan',
    title: 'Kapalı Otopark Çekicisi | Alçak Tavan Kurtarıcı - 0533 265 70 89',
    metaDesc: 'AVM, rezidans ve site kapalı otoparklarına girebilen alçak tavanlı özel kurtarıcı. 1.90m - 2.10m tavan yüksekliği uyumlu: 0533 265 70 89.',
    keywords: 'kapalı otopark çekici, alçak tavan çekici, avm otopark çekici, kapalı garaj kurtarma, bodrum kat çekici',
    image: 'kapali-otopark-cekici.webp',
    lead: 'Standart çekicilerin giremediği AVM, rezidans, havalimanı katlı otoparkları ve yer altı garajlarına rahatça girebilen alçak kabinli, özel kurtarıcılarımızla aracınızı mahsur kaldığı yerden çıkarıyoruz.',
    articleParagraphs: [
      "İstanbul Anadolu Yakası'ndaki rezidanslar, AVM'ler (Viaport, Pendorya, Neomarin) ve Sabiha Gökçen katlı otoparklarında tavan yüksekliği genellikle 1.90 metre ile 2.10 metre arasındadır. Standart bir çekici bu alanlara girerse tavan havalandırma kanallarına veya yangın sprinklerlarına çarpar. Özel alçak tavanlı kurtarıcımız 1.85 metre kabin yüksekliğiyle en derin bodrum katlara dahi güvenle iner.",
      "Dar spiral rampalar ve keskin otopark virajlarında yüksek manevra kabiliyetine sahip araçlarımız, aracınızı bulunduğu park yerinden sıfır hasarla çeker veya yer altı katından açık alana tahliye eder.",
      "Akü bitmesi veya tekerlek kilitlenmesi gibi durumlarda önce yerinde mobil müdahale denenir, çalıştırılamayan araçlar emniyetle açık alana çıkarılıp yetkili servise sevk edilir."
    ],
    features: [
      '1.90m - 2.10m yükseklik sınırındaki tüm kapalı otoparklara giriş',
      'Dar manevra açılı alçak şasi kurtarma platformu',
      'Bodrum katlardan ve spiral rampalardan hasarsız araç tahliyesi',
      'Akü takviyesi ve yerinde arıza giderme aparatları',
      'Sabiha Gökçen Havalimanı, Viaport ve rezidans otoparklarında anında intikal'
    ],
    compatibleVehicles: [
      { icon: '🏬', title: 'AVM Kapalı Otoparkları', desc: 'Viaport, Lens İstanbul ve çevre AVM otoparklarında kalan araçlar.' },
      { icon: '🏢', title: 'Rezidans & Site Garajları', desc: '-1, -2, -3 ve -4. bodrum katlardaki kapalı garaj tahliyeleri.' },
      { icon: '✈️', title: 'Havalimanı Katlı Otoparkı', desc: 'Sabiha Gökçen katlı otoparkında uzun süre yatan ve çalışmayan araçlar.' },
      { icon: '🅿️', title: 'Dar Tavanlı Özel Garajlar', desc: 'Villa veya iş merkezi yer altı otoparklarındaki araçlar.' }
    ],
    faqs: [
      { q: 'Standart çekici kapalı otoparka girebilir mi?', a: 'Hayır, standart çekiciler yüksek olduğu için tavan kirişlerine çarpar; özel alçak kabinli araç gerekir.' },
      { q: 'Otoparkın -3. katına inebiliyor musunuz?', a: 'Evet, kompakt dönüş çapına sahip özel araçlarımızla tüm yer altı katlarına inebiliyoruz.' },
      { q: 'Viaport kapalı otoparkına gelir misiniz?', a: 'Evet, Kurtköy merkezli filomuz Viaport ve çevre otoparklara 10 dakikada ulaşır.' }
    ]
  },
  {
    slug: 'agir-vasita-cekici',
    name: 'Ağır Vasıta, Kamyon & Tır Kurtarma',
    badge: '🚛 Ağır Tonaj Filo',
    title: 'Ağır Vasıta Çekici 7/24 | Kamyon & Tır Kurtarma - 0533 265 70 89',
    metaDesc: 'Kuzey Marmara Otoyolu ve TEM koridorunda kamyon, tır, otobüs ve hafif ticari araçlar için 7/24 ağır vasıta çekici ve kurtarıcı: 0533 265 70 89.',
    keywords: 'ağır vasıta çekici, kamyon çekici, tır çekici, minibüs çekici, otobüs kurtarma, kmo ağır vasıta çekici',
    image: 'minibus-cekici.webp',
    lead: 'Kuzey Marmara Otoyolu, lojistik depoları ve sanayi yollarında arızalanan kamyon, tır, dorse, otobüs ve minibüsler için yüksek tonajlı ağır kurtarma sistemleri.',
    articleParagraphs: [
      "Kuzey Marmara Otoyolu ve TEM koridoru Türkiye'nin en yoğun lojistik aksıdır. Arızalanan bir tır veya kamyon, otoyol trafiğinde kilometrelerce kuyruk oluşturabilir. Çift çeker gözlüklü ağır vasıta kurtarıcılarımız ve yüksek çekme kapasiteli vinçlerimizle 40 tona kadar tüm ticari araçları güvenle naklediyoruz.",
      "Hava freni kilitlenen araçlar için harici hava kompresörü bağlantısı ve şaft sökme müdahalesi olay yerinde uzman operatörlerimizce gerçekleştirilir. Böylece aktarma organlarına zarar verilmeden araç çekilir.",
      "Gebze OSB, Tuzla Lojistik Merkezleri, Orhanlı Depoları ve Dilovası liman hattındaki tüm sanayi sitelerine ve kurumsal servislere faturalı transfer sağlıyoruz."
    ],
    features: [
      'Çift çeker ağır hizmet kurtarma ve gözlüklü çekici filosu',
      'Hava bağlantılı fren serbest bırakma ve şaft sökme müdahalesi',
      'Yüklü veya boş ticari araçların güvenli transferi',
      'Otoyol trafiğini tıkamadan hızlı emniyet tahliyesi',
      'Gebze, Pendik ve Tuzla ağır vasıta sanayilerine doğrudan teslimat'
    ],
    compatibleVehicles: [
      { icon: '🚛', title: 'Tır & Çekici Kamyonlar', desc: 'Yüklü ve boş çekici araçlar, körüklü ve makaslı ağır vasıtalar.' },
      { icon: '📦', title: 'Kamyon & Kamyonetler', desc: 'Dağıtım araçları, kapalı kasa kamyonlar ve nakliye araçları.' },
      { icon: '🚌', title: 'Otobüs & Servis Minibüsleri', desc: 'Fabrika servisleri, turizm otobüsleri ve personel taşıtları.' },
      { icon: '🏗️', title: 'İş Makineleri & Dorseler', desc: 'Forklift, bobcat, dorse ve römorkların taşınması.' }
    ],
    faqs: [
      { q: 'Yüklü tır ve kamyon çekebiliyor musunuz?', a: 'Evet, yüksek çekme kapasiteli ağır kurtarıcılarımızla yüklü araçları da naklediyoruz.' },
      { q: 'Hava freni kilitlenen araçlara müdahale var mı?', a: 'Harici hava hattımızla frenleri açıp şaftı sökerek güvenle çekiciye bağlıyoruz.' },
      { q: 'Otoyolda kaç dakikada yanımızda olursunuz?', a: 'Ağır vasıta nöbetçi aracımız ortalama 15-20 dakikada intikal eder.' },
      { q: 'Kurumsal fatura kesiliyor mu?', a: 'Evet, kurumsal firmalar için KDV dahil resmi e-fatura düzenlenir.' }
    ]
  },
  {
    slug: 'yol-yardim-aku-takviye',
    name: 'Mobil Akü Takviye & Şarj Yol Yardım',
    badge: '🔋 12V/24V Booster',
    title: 'Mobil Akü Takviye 7/24 | Yerinde Yol Yardım - 0533 265 70 89',
    metaDesc: 'Yerinde akü takviyesi ve acil yol yardım. Kurtköy, Gebze, Pendik, KMO ve TEM hattında 12V/24V taşınabilir booster ile marş basma: 0533 265 70 89.',
    keywords: 'akü takviye, mobil akü yol yardım, yerinde akü çalıştırma, kurtköy akü takviye, gebze akü yol yardım, acil yol yardım',
    image: 'aku-takviye.webp',
    lead: 'Aracınız marş basmıyor veya aküsü bittiyse çekici masrafına gerek kalmadan yerinde çözüm. 12V ve 24V endüstriyel dijital booster cihazlarımızla anında çalıştırma.',
    articleParagraphs: [
      "Kış aylarında veya uzun süre park halinde kalan araçlarda akü voltajı düşer ve marş basmaz. Yanlış yapılan takviyeler modern araçların beyin (ECU) ünitesini yakabilir. Ekiplerimiz, aşırı akım ve ters kutup korumalı dijital profesyonel booster cihazlarıyla güvenli akü takviyesi sağlar.",
      "Start-Stop, AGM ve EFB modern akü tipleriyle %100 uyumlu cihazlarımız aracın elektronik hafızasını sıfırlamadan motoru çalıştırır. Çalıştırma sonrası alternatör şarj ölçümü yapılarak akünün durumu hakkında bilgi verilir.",
      "Kurtköy, Sabiha Gökçen Havalimanı otoparkı, Viaport ve çevresinde ortalama 10 dakika içinde adrese ulaşarak çekiciye gerek kalmadan yolunuza devam etmenizi sağlıyoruz."
    ],
    features: [
      '12V ve 24V binek, ticari ve kamyonlara uygun profesyonel booster',
      'Start-Stop, AGM ve EFB modern akülerle %100 elektronik uyumluluk',
      'Araç beynine (ECU) zarar vermeyen voltaj korumalı bağlantı',
      'Alternatör ve şarj dinamosu yerinde ölçüm kontrolü',
      'Kurtköy, havalimanı ve otoyollarda 10 dakikada adrese ulaşım'
    ],
    compatibleVehicles: [
      { icon: '🚗', title: 'Binek Araçlar (12V)', desc: 'Start-stop ve standart akülü tüm sedan ve hatchback otomobiller.' },
      { icon: '🚙', title: 'SUV & Ticari Araçlar', desc: 'Yüksek amperajlı aküye sahip büyük SUV ve kamyonetler.' },
      { icon: '🚛', title: 'Ağır Vasıtalar (24V)', desc: 'Çift akülü kamyon, tır ve otobüsler için 24V endüstriyel takviye.' },
      { icon: '🏍️', title: 'Motosikletler', desc: 'Küçük amperajlı motosiklet aküleri için hassas voltajlı takviye.' }
    ],
    faqs: [
      { q: 'Akü takviyesi aracın beynine zarar verir mi?', a: 'Hayır, kullandığımız dijital boosterlar aşırı akım korumalıdır; araç elektroniğine asla zarar vermez.' },
      { q: 'Start-Stop araçlarda takviye yapılabilir mi?', a: 'Evet, AGM ve EFB yeni nesil start-stop araçlara tam uyumludur.' },
      { q: 'Araç çalışmazsa çekici hizmetiniz var mı?', a: 'Akü arızası dışındaki mekanik sorunlarda kayar kasa çekicimiz anında sevk edilir.' }
    ]
  },
  {
    slug: 'yerinde-lastik-yol-yardim',
    name: 'Mobil Lastik Tamiri & Stepne Değişimi',
    badge: '🔧 Yerinde Lastikçi',
    title: 'Mobil Lastik Yol Yardım 7/24 | Stepne Değişimi - 0533 265 70 89',
    metaDesc: 'Otoyolda ve şehir içinde yerinde lastik tamiri, fitil uygulaması, hava desteği ve stepne montajı. 7/24 acil mobil lastikçi: 0533 265 70 89.',
    keywords: 'mobil lastikçi, yerinde lastik tamiri, otoyol lastikçi, stepne değişimi, acil lastik yol yardım, kurtköy lastikçi',
    image: 'lastik-tamir.webp',
    lead: 'Otoyolda veya caddede lastiğiniz patladıysa, bijon kilitlendiyse veya kriko yoksa yerinde emniyetli müdahale ile yolculuğunuza kaldığınız yerden devam edin.',
    articleParagraphs: [
      "Otoyolda patlayan lastiği değiştirmek tehlikeli bir iştir. Yanınızdan 140 km hızla tırlar geçerken kriko ile uğraşmak can güvenliğinizi tehlikeye atar. Donanımlı mobil lastik yol yardım aracımız arkadan gelen trafiği yavaşlatarak güvenlik koridoru açar.",
      "Bijon anahtarı, havalı somun sökme tabancası, yüksek tonajlı kriko ve profesyonel kompresörümüzle stepneniz 5 dakikada takılır. Çivi veya vida batması durumunda yerinde fitil tamiri yapılıp hava basılır.",
      "Stepnesi bulunmayan veya lastiği yarılan araçlar için en yakın anlaşmalı lastikçiye veya sanayi sitesine kayar kasa çekici desteği sağlanır."
    ],
    features: [
      'Otoyolda reflektörlü ve flaşörlü güvenli çalışma koridoru',
      'Pnömatik somun sökme ve yüksek tonajlı kriko tertibatı',
      'Yerinde profesyonel fitil tamiri ve kompresör hava basımı',
      'Stepne montajı ve patlak lastiğin bagaja emniyetle alınması',
      'Lastik yarılması durumunda yedek lastik veya çekiciye aktarma'
    ],
    compatibleVehicles: [
      { icon: '🚗', title: 'Binek Araç Stepne Değişimi', desc: 'Bijonları sıkışmış veya stepnesi takılamayan otomobiller.' },
      { icon: '🚙', title: 'Büyük Ebat SUV Lastikleri', desc: '19-22 inç ağır jantlı SUV araçların emniyetli lastik değişimi.' },
      { icon: '🚐', title: 'Ticari Araç Lastik Desteği', desc: 'Panelvan ve kamyonetlerin çift teker veya stepne montajı.' },
      { icon: '📍', title: 'Yerinde Fitil & Hava Basımı', desc: 'Basit çivi batmalarında teker sökülmeden hızlı fitil onarımı.' }
    ],
    faqs: [
      { q: 'Stepnem yoksa ne yapabiliriz?', a: 'Lastikte basit delik varsa fitille tamir edip hava basıyoruz; yarık varsa en yakın lastikçiye çekiyoruz.' },
      { q: 'Otoyolda lastik değiştirmek tehlikeli mi?', a: 'Evet, koruma aracımız arkadan gelen trafiği uyararak güvenli bir koridor oluşturur.' },
      { q: 'Kaç dakikada gelirsiniz?', a: 'Kurtköy ve KMO hattında ortalama 10-15 dakika içinde konumunuzdayız.' }
    ]
  },
  {
    slug: 'motosiklet-cekici',
    name: 'Motosiklet Çekici & Özel Taşıma',
    badge: '🏍️ Özel Ön Teker Sehpa',
    title: 'Motosiklet Çekici 7/24 | Özel Kilit Aparatlı - 0533 265 70 89',
    metaDesc: 'Scooter, racing, touring ve chopper motosikletler için özel ön tekerlek sabitleme sehpası ve sarsıntısız motosiklet çekici: 0533 265 70 89.',
    keywords: 'motosiklet çekici, motor çekici, motor kurtarma, scooter çekici, motosiklet taşıma istanbul kocaeli',
    image: 'motorsiklet-cekici.webp',
    lead: 'Motosikletler standart çekiciyle taşınmaz! Özel ön tekerlek sabitleme sehpamız ve 4 noktadan hidrolik gergili yumuşak kayışlarımızla motorunuz dik konumda, çizilmeden taşınır.',
    articleParagraphs: [
      "Motosiklet taşımacılığı en hassas çekici operasyonudur. Yan ayağı üzerine yatırılarak veya halatla rastgele bağlanan motosikletlerin grenajları kırılır, gidon eğilir ve amortisör keçeleri patlar. Araçlarımızda özel ön tekerlek sabitleme sehpası (wheel chock) bulunur.",
      "Ön tekerleği sıkıca kavrayan sehpa sayesinde motosiklet kendi dengesinde tamamen dik durur. Ardından gidondan ve arka maşadan mikrofiber yumuşak askı kayışlarıyla 4 noktadan sabitlenir. Boyaya hiçbir metal parça temas etmez.",
      "Scooter, racing, enduro, touring ve ağır cruiser modellerini İstanbul içi veya şehirler arası dilediğiniz adrese ya da yetkili servise kaskolu olarak teslim ediyoruz."
    ],
    features: [
      'Ön tekerleği sımsıkı saran özel motosiklet sabitleme kıskacı',
      'Granajlara ve boyaya temas etmeyen yumuşak askı kuşakları',
      'Devrilme, yatma ve sarsıntı riski sıfır taşıma geometrisi',
      'Tüm racing, scooter, enduro ve touring modellerine uygunluk',
      'Şehir içi yetkili servislere veya şehirler arası kapalı nakliyat'
    ],
    compatibleVehicles: [
      { icon: '🛵', title: 'Scooter & Maxi Scooter', desc: 'Vespa, Forza, Xmax sınıfı plastik grenajlı hassas scooterlar.' },
      { icon: '🏍️', title: 'Racing & Supersport', desc: 'R6, R1, CBR, S1000RR gibi agresif basık süper spor motorlar.' },
      { icon: '🏕️', title: 'Enduro & Adventure', desc: 'GS1250, Africa Twin gibi yüksek ağırlıklı arazi motorları.' },
      { icon: '🦅', title: 'Chopper & Cruiser', desc: 'Harley-Davidson gibi 350+ kg ağır Amerikan cruiser modelleri.' }
    ],
    faqs: [
      { q: 'Motosikletim çekici üzerinde devrilir mi?', a: 'Asla; ön tekerlek kıskacı ve 4 noktadan gergi kilitleriyle motor dik ve sarsıntısız sabitlenir.' },
      { q: 'Granaj ve kaportada çizilme olur mu?', a: 'Mikrofiber yumuşak kayışlar kullanıldığı için boyaya hiçbir metal temas etmez.' },
      { q: 'Fiyat tarifesi binek araçla aynı mı?', a: 'Motosikletler için özel ekonomik taban fiyat tarifemiz uygulanır.' }
    ]
  },
  {
    slug: 'tekne-karavan-cekici',
    name: 'Tekne & Karavan Çekici (Römork Transfer)',
    badge: '⛵ Çeki Demiri & Römork',
    title: 'Tekne & Karavan Çekici 7/24 | Güvenli Römork Taşıma - 0533 265 70 89',
    metaDesc: 'Karavan, tekne, bot, tiny house ve özel römorklu araçlar için çeki demirli ve kayar kasa profesyonel transfer desteği: 0533 265 70 89.',
    keywords: 'tekne çekici, karavan çekici, römork çekici, tiny house taşıma, bot çekici, karavan yol yardım',
    image: 'ticari-cekici-1.webp',
    lead: 'Tuzla Marina, Pendik Marina, göl kenarları ve otoyollarda tekne, karavan, tiny house ve her türlü çekme römorkun hasarsız ve belgeli nakli.',
    articleParagraphs: [
      "Tekne römorkları, çekme karavanlar ve tiny house yapıları standart araçlardan çok farklı dinamiklere sahiptir. Römork lastiği patlaması, torsiyon dingil kırılması veya çeki demiri arızalarında hem çeki demirli kurtarıcılarımız hem de geniş tablalı kayar kasa platformlarımız hazırdır.",
      "Tuzla Tersaneler Bölgesi, Viaport Marina, Pendik Marina ve sahil güzergahında marinalardan kışlama alanlarına veya bakım atölyelerine güvenli transfer sağlıyoruz.",
      "Tüm nakliyat süreci emtia sigortası kapsamında olup römork elektrik sinyalizasyon desteği araçlarımızca sağlanmaktadır."
    ],
    features: [
      'Tüm standart çeki demiri soket ve kaplinlerine tam uyum',
      'Römork elektrik ve sinyalizasyon test desteği',
      'Tuzla ve Pendik marinalarından kışlama ve bakım transferi',
      'Kayar kasa üzerinde güvenli takozlu ve gergili sabitleme',
      'Şehirlerarası karavan ve tekne sevkiyatında tam emtia kaskosu'
    ],
    compatibleVehicles: [
      { icon: '⛵', title: 'Tekne & Bot Römorkları', desc: 'Römorklu sürat tekneleri, şişme botlar ve yelkenli transferleri.' },
      { icon: '🚐', title: 'Çekme Karavanlar', desc: 'Otoyolda kalan veya kampa sevk edilecek çekme karavanlar.' },
      { icon: '🏡', title: 'Tiny House & Mobil Evler', desc: 'Geniş platformlu kayar kasa üzerinde ruhsatlı tiny house transferi.' },
      { icon: '🚜', title: 'Özel Yük Römorkları', desc: 'Motosiklet, at veya kargo taşıma römorklarının güvenli nakliyesi.' }
    ],
    faqs: [
      { q: 'Römorkumun tekerleği kilitliyse taşıyabilir misiniz?', a: 'Evet, kayar kasa platformumuza alarak tekerlek dönmese bile güvenle taşırız.' },
      { q: 'Tuzla Marina\'dan tekne çekimi yapıyor musunuz?', a: 'Evet, marinadan dilediğiniz tersaneye veya kışlama alanına transfer yapıyoruz.' }
    ]
  },
  {
    slug: 'ariza-yol-yardim',
    name: 'Mekanik & Elektrik Arıza Yol Yardım',
    badge: '🛠️ Yerinde Acil Çözüm',
    title: 'Mekanik & Elektrik Arıza Yol Yardım 7/24 - 0533 265 70 89',
    metaDesc: 'Yolda stop eden, hararet yapan, yakıtı biten veya elektrik arızası veren araçlar için yerinde hızlı tespit ve mobil müdahale: 0533 265 70 89.',
    keywords: 'arıza yol yardım, oto elektrik yol yardım, hararet yol yardım, acil oto tamir, yolda kalan araba tamiri',
    image: 'otoyol-yardim-cekici.webp',
    lead: 'Yolda kaldığınızda hemen çekiciye gerek olmayabilir! Yerinde tespit ekiplerimiz hararet, yakıt bitmesi, sigorta arızası, debriyaj teli ve basit elektrik problemlerini dakikalar içinde çözer.',
    articleParagraphs: [
      "Yolda stop eden her araç çekiciye binmek zorunda değildir. Bazen gevşeyen bir kelepçe, patlayan bir radyatör hortumu, atan bir sigorta veya biten yakıt aracın yolda kalmasına neden olur. Mobil arıza tespit ekibimiz yerinde OBD arıza teşhis cihazıyla aracın beynine bağlanarak sorunu nokta atışı tespit eder.",
      "Hararet yapan araçlara soğutma sıvısı takviyesi ve geçici kaçak önleme müdahalesi yapılır. Otoyolda yakıtı biten sürücülere en yakın istasyondan faturalı benzin veya motorin temin edilir.",
      "Yerinde çözülemeyecek ağır mekanik arızalarda kayar kasa çekicimiz bekletilmeden yönlendirilerek en uygun yetkili veya özel servise sevk sağlanır."
    ],
    features: [
      'Yerinde OBD arıza tespit cihazıyla dijital kod okuma',
      'Acil yakıt ikmali (Benzin / Motorin teslimatı)',
      'Hararet, su eksiltme ve hortum kaçaklarına geçici emniyet müdahalesi',
      'Çözülemeyen arızalarda en yakın yetkili servise kayar kasa çekici sevki',
      'Kurtköy, KMO, TEM ve Gebze sanayisine doğrudan bağlantı'
    ],
    compatibleVehicles: [
      { icon: '🌡️', title: 'Hararet Yapan Araçlar', desc: 'Radyatör suyu eksilen veya hortumu kaçıran araçlara yerinde müdahale.' },
      { icon: '⛽', title: 'Yakıtı Biten Araçlar', desc: 'Otoyolda mazot veya benzini tükenen araçlara güvenli yakıt ikmali.' },
      { icon: '🔌', title: 'Elektrik Arızası Verenler', desc: 'Sigorta atan, farları söken veya marş basmayan araçlar.' },
      { icon: '⚙️', title: 'Debriyaj & Vites Sorunları', desc: 'Mekanik kontrol yapılarak gerekirse servise transfer.' }
    ],
    faqs: [
      { q: 'Yerinde tamir olmazsa ne yapılır?', a: 'Arıza yerinde giderilemeyecek mekanik boyuttaysa, anlaşmalı servise kaskolu çekilir.' },
      { q: 'Yakıtım bittiğinde yakıt getiriyor musunuz?', a: 'Evet, en yakın akaryakıt istasyonundan resmi faturalı acil yakıt temini yapıyoruz.' }
    ]
  },
  {
    slug: 'sehirlerarasi-arac-tasima',
    name: 'Şehirler Arası Araç Taşıma & Nakliyat',
    badge: '🗺️ 81 İle Güvenli Nakil',
    title: 'Şehirler Arası Araç Taşıma | 81 İle Güvenli Nakil - 0533 265 70 89',
    metaDesc: 'İstanbul ve Kocaeli çıkışlı Ankara, İzmir, Bursa, Antalya ve tüm Türkiye illerine kaskolu tekli ve çoklu şehirler arası araç nakliyatı: 0533 265 70 89.',
    keywords: 'şehirler arası çekici, şehirlerarası araç taşıma, kaskolu araç nakliyatı, çoklu çekici, tekli araç transferi, ankara istanbul çekici',
    image: 'sehirlerarasi-cekici.webp',
    lead: 'İstanbul ve Kocaeli hareketli olarak Ankara, İzmir, Bursa, Antalya başta olmak üzere 81 il ve ilçeye %100 emtia nakliyat sigortası ve canlı GPS takibiyle araç nakli.',
    articleParagraphs: [
      "Şehirler arası araç nakliyesinde en kritik unsurlar kasko teminatı ve teslimat süresidir. İstanbul veya Kocaeli'den teslim aldığımız aracınız için resmi teslim tesellüm tutanağı düzenlenir ve aracın güncel piyasa değeri üzerinden tam kapsamlı Emtia Nakliyat Poliçesi başlatılır.",
      "Tekli VIP ekspres taşımalarda aracınız doğrudan kapınızdan alınıp hedef adrese aynı gün veya ertesi gün ulaştırılır. Yol boyunca operatörümüz tarafından canlı WhatsApp konumu paylaşılır.",
      "Arızalı, kazalı, sıfır kilometre galeri araçları, elektrikli modeller ve klasik otomobiller 81 ilin tamamına güvenle sevk edilir."
    ],
    features: [
      'Adresten teslim alıp dilediğiniz adrese anahtar teslim ulaştırma',
      'Taşıma esnasında canlı GPS konumu ve anlık operasyon bilgilendirmesi',
      'Piyasa değerine göre tam kapsamlı nakliyat emtia kaskosu',
      'Tekli ekspres transfer veya çoklu ekonomik çekici seçenekleri',
      'Arızalı, kazalı, sıfır kilometre ve lüks araç filo taşımacılığı'
    ],
    compatibleVehicles: [
      { icon: '🏙️', title: 'Tekli Ekspres Nakil', desc: 'Acil ihtiyaçlar için doğrudan adrese giden tek araçlık VIP taşıma.' },
      { icon: '🚛', title: 'Çoklu Ekonomik Sevkiyat', desc: 'Bütçe dostu, haftalık düzenli seferlerle iller arası araç nakli.' },
      { icon: '🏢', title: 'Kurumsal Filo Transferi', desc: 'Filo kiralama ve bayi sıfır km araçlarının iller arası dağıtımı.' },
      { icon: '💥', title: 'Kazalı Araç Nakliyesi', desc: 'Memleketine veya anlaşmalı servise götürülecek hasarlı araçlar.' }
    ],
    faqs: [
      { q: 'Şehirler arası taşımada aracım sigortalı mı?', a: 'Evet, yükleme anında imzalanan teslim tesellüm tutanağı ve tam nakliyat kaskosuyla taşınır.' },
      { q: 'Teslimat süresi ne kadar sürer?', a: 'Ekspres tekli taşımalarda 500 km altı aynı gün, daha uzak iller 24-48 saat içinde teslim edilir.' },
      { q: 'Aracımın konumunu takip edebilir miyim?', a: 'Evet, operatörümüz yol boyunca canlı WhatsApp konumu paylaşır.' },
      { q: 'Fiyat nasıl hesaplanır?', a: 'Mesafe (km), araç türü ve tekli/çoklu tercihine göre telefonda net sabit fiyat teklifi verilir.' }
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
      "name": "Marmara Çekici",
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
    .map(s => `<a href="/hizmetler/${s.slug}.html" class="sidebar-link-item"><span>⚙️ ${s.name}</span> <strong style="color:#ea580c;">İncele →</strong></a>`)
    .join('\n');

  const vehicleCardsHtml = svc.compatibleVehicles.map(v => `
    <div class="vehicle-type-item">
      <span class="vehicle-type-icon">${v.icon}</span>
      <div>
        <h4>${v.title}</h4>
        <p>${v.desc}</p>
      </div>
    </div>
  `).join('\n');

  const faqsHtml = svc.faqs.map((f, idx) => `
    <details class="faq-accordion-item" ${idx === 0 ? 'open' : ''} style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 12px; padding: 14px 18px;">
      <summary style="font-weight: 800; color: #0f172a; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.98rem;">${idx + 1}. ${f.q}</span>
        <span style="color: #ea580c; font-size: 1.1rem;">▾</span>
      </summary>
      <div style="margin-top: 10px; color: #475569; font-size: 0.92rem; line-height: 1.7; border-top: 1px solid #e2e8f0; padding-top: 10px;">
        ${f.a}
      </div>
    </details>
  `).join('\n');

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
  <link rel="alternate" type="text/plain" href="${DOMAIN}/llms.txt" title="LLM Knowledge Base">
  <link rel="preload" as="image" href="/images/${svc.image}" fetchpriority="high">

  <link rel="icon" type="image/svg+xml" href="/images/logo.svg">
  <link rel="icon" type="image/webp" href="/images/logo.webp">
  <link rel="apple-touch-icon" href="/images/apple-touch-icon.png">

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
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="/css/style.css?v=3.2">

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
        <a href="/" class="brand-logo" aria-label="Marmara Çekici Ana Sayfa">
          <img src="/images/logo.svg" alt="Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Anadolu Yakası, Kocaeli &amp; Otoyol Kurtarma</span>
          </div>
        </a>

        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="/" class="nav-link">Ana Sayfa</a></li>
            <li><a href="/hizmetler/index.html" class="nav-link active">Hizmetlerimiz</a></li>
            <li><a href="/bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="/galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="/blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="/hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="/iletisim.html" class="nav-link">İletişim</a></li>
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

  <!-- Lüks İç Sayfa Hero -->
  <section class="inner-hero-lux">
    <div class="container">
      <nav class="inner-breadcrumb-nav" aria-label="Breadcrumb">
        <a href="/">Ana Sayfa</a> <span>/</span>
        <a href="/hizmetler/index.html">Hizmetlerimiz</a> <span>/</span>
        <span class="current">${svc.name}</span>
      </nav>

      <span class="inner-hero-badge">
        <span class="pulse-dot"></span> ${svc.badge} • 7/24 Kesintisiz Otoyol Nöbeti
      </span>

      <h1 class="inner-hero-title">
        ${svc.name} &amp; <span>7/24 Acil Yol Yardım</span>
      </h1>

      <p class="inner-hero-desc">
        ${svc.lead}
      </p>

      <div class="inner-trust-pills">
        <span class="inner-trust-pill">🛡️ %100 Taşıma Kaskolu</span>
        <span class="inner-trust-pill">💰 Telefonda Sabit Fiyat Sözü</span>
        <span class="inner-trust-pill">💳 Mobil POS ile Kredi Kartı</span>
        <span class="inner-trust-pill">⏱️ 10-15 Dakika Varış Garantisi</span>
      </div>

      <div class="inner-hero-ctas">
        <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg" style="box-shadow: 0 8px 24px rgba(234, 88, 12, 0.4);">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
          <span>Hemen Ara: ${PHONE}</span>
        </a>
        <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
          <span>WhatsApp Canlı Konum Gönder</span>
        </button>
      </div>

      <!-- Quick Stats Strip -->
      <div class="stats-strip-lux">
        <div class="stats-strip-item">
          <span class="stats-strip-val">10-15 Dk</span>
          <span class="stats-strip-lbl">Ortalama Varış</span>
        </div>
        <div class="stats-strip-item">
          <span class="stats-strip-val">%100</span>
          <span class="stats-strip-lbl">Emtia Kaskosu</span>
        </div>
        <div class="stats-strip-item">
          <span class="stats-strip-val">7/24</span>
          <span class="stats-strip-lbl">Canlı Otoyol Nöbeti</span>
        </div>
        <div class="stats-strip-item">
          <span class="stats-strip-val">5.0 / 5.0</span>
          <span class="stats-strip-lbl">380+ Doğrulanmış Yorum</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Ana İçerik Alanı (2 Sütunlu Modern Grid) -->
  <main class="section" style="padding: 50px 0 80px; background: #f8fafc;">
    <div class="container">
      <div class="inner-page-layout">
        
        <!-- Sol İçerik Kolonu -->
        <div class="inner-content-col">
          
          <!-- Kart 1: Fotoğraflı Hizmet Tanıtımı ve SEO Makalesi -->
          <article class="inner-card-box">
            <div class="inner-media-showcase">
              <img src="/images/${svc.image}" alt="${svc.name} Filosu" width="800" height="420" loading="eager" fetchpriority="high">
              <div class="inner-media-meta-bar">
                <span>📍 Hizmet Alanı: Kuzey Marmara &amp; TEM Otoyolu Koridoru</span>
                <span>⚡ Ekip: Nöbetçi Kayar Kasa &amp; Vinç Filosu</span>
              </div>
            </div>

            <h2 class="inner-card-title">
              ${svc.name} Standartlarımız ve Profesyonel Operasyon
            </h2>
            
            ${svc.articleParagraphs.map(p => `<p class="inner-card-text">${p}</p>`).join('\n')}

            <h3 style="font-size: 1.22rem; font-weight: 800; color: #0f172a; margin: 24px 0 14px;">
              Öne Çıkan Güvenlik ve Donanım Özelliklerimiz
            </h3>
            <ul style="list-style: none; padding: 0; margin: 0 0 25px 0;">
              ${svc.features.map(f => `
                <li style="padding: 11px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; gap: 10px; color: #334155; font-size: 0.95rem;">
                  <span style="color: #10b981; font-weight: 900;">✓</span> ${f}
                </li>
              `).join('')}
            </ul>

            <div class="operator-callout-box">
              <h4>💡 Operatör Notu &amp; Otoyol Güvenlik Tavsiyesi</h4>
              <p>
                Kuzey Marmara Otoyolu, TEM ve Anadolu Yakası güzergahlarında yolda kaldıysanız güvenliğiniz için araç içinde beklemeyiniz. Dörtlülerinizi yakıp yolcularla birlikte çelik bariyerlerin arkasına geçiniz. <strong>${PHONE}</strong> numaramızdan WhatsApp canlı konumunuzu paylaştığınızda en yakın nöbetçi ekibimiz 10-15 dakikada yanınızda olacaktır.
              </p>
            </div>

            <!-- Kart 1.1: 2000+ Karakter Zengin Teknik Standartlar -->
            <div style="margin-top: 28px; border-top: 1px solid #e2e8f0; padding-top: 24px;">
              <h3 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin: 0 0 14px; display: flex; align-items: center; gap: 8px;">
                <span>⚙️</span> ${svc.name} İçin Teknik Donanım, Hidrolik Sistem ve Taşıma Standartları
              </h3>
              <p class="inner-card-text" style="line-height: 1.85;">
                ${(SERVICE_EXTENSIONS[svc.slug] || {}).technicalSpecs || ''}
              </p>
            </div>

            <!-- Kart 1.2: Hizmet Aşamaları, Kasko Güvencesi ve Şeffaf Fiyatlandırma -->
            <div style="margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 24px;">
              <h3 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin: 0 0 14px; display: flex; align-items: center; gap: 8px;">
                <span>🛡️</span> 5 Aşamalı Güvenli Hizmet Akışı, Kasko Teminatı &amp; Ödeme Güvencesi
              </h3>
              <p class="inner-card-text" style="line-height: 1.85;">
                ${(SERVICE_EXTENSIONS[svc.slug] || {}).serviceProcessAndWarranty || ''}
              </p>
            </div>

            <!-- Kart 1.3: Kalite ve Güvenlik Taahhüdü -->
            <div style="margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 24px;">
              <h3 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin: 0 0 14px; display: flex; align-items: center; gap: 8px;">
                <span>⚙️</span> Kalite, Ekipman Bakımı ve Sıfır Hasar Taahhüdü
              </h3>
              <p class="inner-card-text" style="line-height: 1.85;">
                ${(SERVICE_EXTENSIONS[svc.slug] || {}).qualityAndSafetyCommitment || ''}
              </p>
            </div>
          </article>

          <!-- Kart 2: Hangi Araç Tiplerine Hizmet Veriyoruz? -->
          <section class="inner-card-box">
            <h3 class="inner-card-title">
              Bu Hizmet Kapsamında Taşınan Araç Tipleri
            </h3>
            <p class="inner-card-text">
              Geniş açılı hidrolik platformumuz ve vinç donanımımız her araç sınıfına özel taşıma protokolü ile donatılmıştır.
            </p>
            <div class="vehicle-types-grid">
              ${vehicleCardsHtml}
            </div>
          </section>

          <!-- Kart 3: 4 Aşamalı Müdahale ve Taşıma Akışı -->
          <section class="inner-card-box">
            <h3 class="inner-card-title">
              4 Aşamalı Profesyonel Müdahale Akışı
            </h3>
            <p class="inner-card-text">
              Yolda kaldığınız andan aracınızın yetkili servise teslimine kadar tüm süreç şeffaf ve kaskolu yürütülür.
            </p>
            <div class="service-steps-row">
              <div class="service-step-item">
                <span class="step-badge">ADIM 01</span>
                <h4>1. Konum &amp; Sabit Fiyat</h4>
                <p>Çağrınız 30 saniyede yanıtlanır, WhatsApp konumuyla en yakın ekip tespit edilir ve telefonda sabit fiyat verilir.</p>
              </div>
              <div class="service-step-item">
                <span class="step-badge">ADIM 02</span>
                <h4>2. Güvenlik Koridoru</h4>
                <p>Otoyol LED flaşör kulesi ve reflektif güvenlik tedbirleriyle arkadan gelen trafik emniyetle yönlendirilir.</p>
              </div>
              <div class="service-step-item">
                <span class="step-badge">ADIM 03</span>
                <h4>3. Hasarsız Yükleme</h4>
                <p>Sıfır eğimli hidrolik tabla ile araç sürüklenmeden yüklenir ve 4 tekerlekten mikrofiber kayışlarla sabitlenir.</p>
              </div>
              <div class="service-step-item">
                <span class="step-badge">ADIM 04</span>
                <h4>4. Kaskolu Teslimat</h4>
                <p>%100 nakliyat sigortası güvencesiyle dilediğiniz yetkili servise veya adrese faturalı olarak teslim edilir.</p>
              </div>
            </div>
          </section>

          <!-- Kart 4: Bölgesel İntikal Tablosu -->
          <section class="inner-card-box">
            <h3 class="inner-card-title">
              Bölgesel Müdahale ve İntikal Sürelerimiz
            </h3>
            <p class="inner-card-text">
              Stratejik gişe ve kavşak noktalarında bekleyen nöbetçi ekiplerimizin ortalama varış süreleri:
            </p>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; text-align: left;">
                <thead>
                  <tr style="background: #f1f5f9; border-bottom: 2px solid #e2e8f0;">
                    <th style="padding: 12px 16px; color: #0f172a; font-weight: 800;">Güzergah / Bölge</th>
                    <th style="padding: 12px 16px; color: #0f172a; font-weight: 800;">Nöbet Noktası</th>
                    <th style="padding: 12px 16px; color: #0f172a; font-weight: 800;">Ortalama İntikal</th>
                    <th style="padding: 12px 16px; color: #0f172a; font-weight: 800;">Hizmet Durumu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: #0f172a;">Kurtköy &amp; Viaport Çevresi</td>
                    <td style="padding: 12px 16px; color: #64748b;">Ankara Cad. Kavşağı</td>
                    <td style="padding: 12px 16px; color: #ea580c; font-weight: 800;">8 - 10 Dakika</td>
                    <td style="padding: 12px 16px;"><span style="color: #10b981; font-weight: 700;">● Aktif Nöbetçi</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: #0f172a;">KMO Gişeleri (Kurnaköy / Mecidiye)</td>
                    <td style="padding: 12px 16px; color: #64748b;">KMO Gişe Ayrımı</td>
                    <td style="padding: 12px 16px; color: #ea580c; font-weight: 800;">12 - 15 Dakika</td>
                    <td style="padding: 12px 16px;"><span style="color: #10b981; font-weight: 700;">● Aktif Nöbetçi</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: #0f172a;">TEM Otoyolu (Kurtköy - Gebze Hattı)</td>
                    <td style="padding: 12px 16px; color: #64748b;">Şekerpınar Çıkışı</td>
                    <td style="padding: 12px 16px; color: #ea580c; font-weight: 800;">10 - 15 Dakika</td>
                    <td style="padding: 12px 16px;"><span style="color: #10b981; font-weight: 700;">● Aktif Nöbetçi</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 12px 16px; font-weight: 700; color: #0f172a;">Sabiha Gökçen Havalimanı</td>
                    <td style="padding: 12px 16px; color: #64748b;">Havalimanı Bağlantısı</td>
                    <td style="padding: 12px 16px; color: #ea580c; font-weight: 800;">8 - 10 Dakika</td>
                    <td style="padding: 12px 16px;"><span style="color: #10b981; font-weight: 700;">● Aktif Nöbetçi</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 700; color: #0f172a;">Gebze &amp; OSB Sanayi Yolları</td>
                    <td style="padding: 12px 16px; color: #64748b;">GOSB Meydanı</td>
                    <td style="padding: 12px 16px; color: #ea580c; font-weight: 800;">10 - 12 Dakika</td>
                    <td style="padding: 12px 16px;"><span style="color: #10b981; font-weight: 700;">● Aktif Nöbetçi</span></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; font-weight: 700; color: #0f172a;">Pendik, Kartal &amp; Tuzla</td>
                    <td style="padding: 12px 16px; color: #64748b;">E-5 Köprülü Kavşak</td>
                    <td style="padding: 12px 16px; color: #ea580c; font-weight: 800;">10 - 12 Dakika</td>
                    <td style="padding: 12px 16px;"><span style="color: #10b981; font-weight: 700;">● Aktif Nöbetçi</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- Kart 5: SSS -->
          <article class="inner-card-box">
            <h3 class="inner-card-title">
              ${svc.name} Hakkında Sıkça Sorulan Sorular
            </h3>
            <p class="inner-card-text">
              Sürücülerimizin bu hizmetimizle ilgili en çok merak ettiği sorular ve operasyonel cevaplarımız:
            </p>
            ${faqsHtml}
          </article>

        </div>

        <!-- Sağ Kenar Çubuğu (Sidebar) -->
        <aside class="inner-sidebar-col">
          
          <!-- Hızlı Çağrı Kartı -->
          <div class="sidebar-call-card-lux">
            <span style="display:inline-block; background:rgba(234,88,12,0.25); color:#ff7a33; border:1px solid rgba(234,88,12,0.5); padding:4px 12px; border-radius:999px; font-weight:800; font-size:0.75rem; margin-bottom:12px;">7/24 SAHA NÖBETİ</span>
            <h3>Acil Çekici Çağırın</h3>
            <p>
              Kurtköy, KMO, TEM veya Gebze'de yolda mı kaldınız? Konumunuzu paylaşın, en yakın kurtarıcımız 10-15 dakikada yanınızda olsun.
            </p>
            <a href="tel:${PHONE_RAW}" class="btn btn-call btn-block btn-lg" style="margin-bottom: 12px;">
              📞 Hemen Ara: ${PHONE}
            </a>
            <button type="button" class="btn btn-whatsapp btn-block btn-lg btn-send-location">
              💬 WhatsApp Canlı Konum
            </button>
            <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.8rem; color: #94a3b8; display: flex; justify-content: space-between;">
              <span>⏱️ Yanıt: 30 Saniye</span>
              <span>💳 Mobil POS / Kredi Kartı</span>
            </div>
          </div>

          <!-- Müşteri Güven Rozeti -->
          <div class="sidebar-list-card">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span style="font-size: 2rem;">🛡️</span>
              <div>
                <strong style="display: block; font-size: 0.95rem; color: #0f172a;">%100 Kaskolu Taşıma</strong>
                <span style="font-size: 0.8rem; color: #64748b;">Taşıyıcı Mali Mesuliyet Sigortası</span>
              </div>
            </div>
            <p style="font-size: 0.86rem; color: #475569; line-height: 1.6; margin: 0;">
              Aracınız platforma yüklendiği andan servise indirilene kadar tam kapsamlı emtia sigortası güvencesindedir.
            </p>
          </div>

          <!-- Diğer Hizmetlerimiz Menüsü -->
          <div class="sidebar-list-card">
            <h4>Tüm Hizmetlerimiz</h4>
            ${otherServicesList}
          </div>

        </aside>

      </div>
    </div>
  </main>

  <!-- KURUMSAL STANDARTLARIMIZ / NEDEN KUZEY MARMARA ÇEKİCİ? -->
  <section class="section section-dark" style="background: #090d16; color: #fff; padding: 70px 0;">
    <div class="container">
      <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 40px;">
        <span class="section-badge" style="background: rgba(234,88,12,0.15); color: #ea580c; border: 1px solid rgba(234,88,12,0.3); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
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

  <!-- ÇEKİCİ SÜRECİMİZ NASIL İŞLER? (4 ADIM) -->
  <section class="process-section" style="padding: 70px 0; background: #ffffff;">
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
          <p><strong>${PHONE}</strong> numaramızı tek tıkla arayın veya WhatsApp üzerinden canlı konumunuzu iletin. Çağrı merkezimiz 30 saniye içinde yanıt verir.</p>
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
          <p>Kurtköy, KMO ve TEM gişelerinde hazır bekleyen nöbetçi kayar kasa çekicimiz GPS yönlendirmesiyle rekor sürede yanınıza ulaşır.</p>
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

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col footer-brand">
        <div class="footer-logo">
          <img src="/images/logo.svg" alt="Marmara Çekici Logo" width="44" height="44">
          <span style="color: #fff; font-size: 1.25rem; font-weight: 900; margin-left: 10px;">MARMARA <span style="color: #ea580c;">ÇEKİCİ</span></span>
        </div>
        <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin-top: 15px;">
          İstanbul Anadolu Yakası, Kocaeli, Kuzey Marmara ve TEM otoyolu genelinde 7/24 nöbetçi çekici, vinç ve kurtarma filosu. %100 kaskolu, net fiyat garantili kurumsal hizmet.
        </p>
        <div style="margin-top: 20px;">
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-sm">📞 7/24 Acil Çağrı: ${PHONE}</a>
        </div>
      </div>

      <div class="footer-col">
        <h4 style="color: #fff; font-weight: 800; font-size: 1.05rem; margin-bottom: 16px;">Hizmetlerimiz</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2.1; font-size: 0.9rem;">
          <li><a href="/hizmetler/oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Kayar Kasa Çekici</a></li>
          <li><a href="/hizmetler/otoyol-oto-kurtarma.html" style="color: #94a3b8; text-decoration: none;">Otoyol Kurtarma</a></li>
          <li><a href="/hizmetler/kaza-vinc-kurtarma.html" style="color: #94a3b8; text-decoration: none;">Kaza &amp; Vinç Kurtarma</a></li>
          <li><a href="/hizmetler/luks-spor-arac-cekici.html" style="color: #94a3b8; text-decoration: none;">Lüks &amp; Spor Araç</a></li>
          <li><a href="/hizmetler/ahtapot-cekici.html" style="color: #94a3b8; text-decoration: none;">Ahtapot Çekici</a></li>
          <li><a href="/hizmetler/kapali-otopark-cekici.html" style="color: #94a3b8; text-decoration: none;">Kapalı Otopark</a></li>
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
        <h4 style="color: #fff; font-weight: 800; font-size: 1.05rem; margin-bottom: 16px;">Kurumsal</h4>
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

  <script src="/js/main.js?v=3.2" defer></script>
</body>
</html>`;
}

function generateIndexHtml() {
  const cardsHtml = services.map(s => `
    <div class="service-card">
      <div class="service-card-img-wrap">
        <img src="/images/${s.image}" alt="${s.name}" loading="lazy" width="600" height="400">
      </div>
      <div class="service-card-body">
        <h3 class="service-title"><a href="/hizmetler/${s.slug}.html">${s.name}</a></h3>
        <p class="service-text">${s.lead}</p>
        <ul class="service-features">
          ${s.features.slice(0, 3).map(f => `<li><span class="check-icon">✓</span> ${f}</li>`).join('')}
        </ul>
        <div style="display: flex; gap: 8px; margin-top: auto;">
          <a href="/hizmetler/${s.slug}.html" class="service-btn" style="flex: 1; text-align: center;">Detaylar →</a>
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-sm" style="padding: 10px 14px;">📞 Ara</a>
        </div>
      </div>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oto Çekici ve Yol Yardım Hizmetlerimiz | Kuzey Marmara - 0533 265 70 89</title>
  <meta name="description" content="Kuzey Marmara Otoyolu, TEM Otoyolu, Kurtköy ve Gebze çevresinde kayar kasa oto çekici, vinç, ahtapot, kapalı otopark, akü takviye ve mobil yol yardım hizmetlerimiz.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${DOMAIN}/hizmetler/index.html">
  <link rel="alternate" type="text/plain" href="${DOMAIN}/llms.txt" title="LLM Knowledge Base">
  <link rel="icon" type="image/svg+xml" href="/images/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="/css/style.css?v=3.2">

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
        <a href="/" class="brand-logo">
          <img src="/images/logo.svg" alt="Kuzey Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">KUZEY MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım &amp; Kurtarma</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="/" class="nav-link">Ana Sayfa</a></li>
            <li><a href="/hizmetler/index.html" class="nav-link active">Hizmetlerimiz</a></li>
            <li><a href="/bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="/galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="/blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="/hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="/iletisim.html" class="nav-link">İletişim</a></li>
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
        <a href="/" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <span style="color: #ea580c; font-weight: 600;">Hizmetlerimiz</span>
      </nav>
      <h1 style="font-size: clamp(2rem, 4vw, 2.85rem); font-weight: 900; margin-bottom: 15px;">
        Oto Çekici ve Yol Yardım <span style="color: #ea580c;">Hizmetlerimiz</span>
      </h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 800px; line-height: 1.6;">
        Modern araç filomuz, profesyonel ekipmanlarımız ve 10-15 dakikalık hızlı intikal süremizle Kuzey Marmara Otoyolu, TEM ve tüm çevre bölgelerde hizmetinizdeyiz.
      </p>
    </div>
  </section>

  <!-- 1. HİZMETLERİMİZ GRİDİ (KULLANICI İSTEĞİ: ÖNCE HİZMETLER GÖZÜKSÜN!) -->
  <section class="section" style="padding: 60px 0 75px; background: #f8fafc;">
    <div class="container">
      <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 40px;">
        <span class="section-badge" style="background: rgba(234,88,12,0.1); color: #ea580c; border: 1px solid rgba(234,88,12,0.25); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
          Tüm Kurtarma &amp; Çekici Çözümleri
        </span>
        <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 900; color: #0f172a; margin: 12px 0 10px;">
          Profesyonel Yol Yardım &amp; Çekici Kataloğu
        </h2>
        <p style="color: #64748b; font-size: 1rem; line-height: 1.6;">
          Binek otomobilden ağır vasıtaya, kapalı otopark kurtarmadan ahtapot vince kadar tüm araç tiplerine uygun özel ekipmanlarımızla yanınızdayız.
        </p>
      </div>

      <div class="services-grid">
${cardsHtml}
      </div>
    </div>
  </section>

  <!-- 2. ÖNCE KURUMSAL STANDARTLARIMIZ / NEDEN BİZ? (KULLANICI İSTEĞİ) -->
  <section class="section section-dark" style="background: #090d16; color: #fff; padding: 70px 0;">
    <div class="container">
      <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 40px;">
        <span class="section-badge" style="background: rgba(234,88,12,0.15); color: #ea580c; border: 1px solid rgba(234,88,12,0.3); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
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

  <!-- 3. SONRA ÇEKİCİ SÜRECİMİZ NASIL İŞLER? (4 ADIM) -->
  <section class="process-section" style="background: #fff; padding: 65px 0;">
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
          <p><strong>${PHONE}</strong> numaramızı tek tıkla arayın veya WhatsApp üzerinden canlı konumunuzu iletin. Çağrı merkezimiz 30 saniye içinde yanıt verir.</p>
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
          <p>Kurtköy, KMO ve TEM gişelerinde hazır bekleyen nöbetçi kayar kasa çekicimiz GPS yönlendirmesiyle rekor sürede yanınıza ulaşır.</p>
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

  <!-- Tam Kurumsal Footer -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col footer-brand">
        <div class="footer-logo">
          <img src="/images/logo.svg" alt="Kuzey Marmara Çekici Logo" width="44" height="44">
          <span style="color: #fff; font-size: 1.25rem; font-weight: 900; margin-left: 10px;">KUZEY MARMARA <span style="color: #ea580c;">ÇEKİCİ</span></span>
        </div>
        <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin-top: 15px;">
          Kurtköy ve Kuzey Marmara Otoyolu merkezli filomuzla Pendik, Gebze, Çayırova, Tuzla ve TEM otoyolu hattında 7 gün 24 saat kaskolu, sabit fiyatlı oto çekici ve yol yardım hizmeti.
        </p>
        <div style="margin-top: 20px;">
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-sm">📞 7/24 Acil Çağrı: ${PHONE}</a>
        </div>
      </div>

      <div class="footer-col">
        <h4 style="color: #fff; font-weight: 800; font-size: 1.05rem; margin-bottom: 16px;">Hizmetlerimiz</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2.1; font-size: 0.9rem;">
          <li><a href="/hizmetler/oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Kayar Kasa Çekici</a></li>
          <li><a href="/hizmetler/otoyol-oto-kurtarma.html" style="color: #94a3b8; text-decoration: none;">Otoyol Kurtarma</a></li>
          <li><a href="/hizmetler/kaza-vinc-kurtarma.html" style="color: #94a3b8; text-decoration: none;">Kaza &amp; Vinç Kurtarma</a></li>
          <li><a href="/hizmetler/luks-spor-arac-cekici.html" style="color: #94a3b8; text-decoration: none;">Lüks &amp; Spor Araç</a></li>
          <li><a href="/hizmetler/ahtapot-cekici.html" style="color: #94a3b8; text-decoration: none;">Ahtapot Çekici</a></li>
          <li><a href="/hizmetler/kapali-otopark-cekici.html" style="color: #94a3b8; text-decoration: none;">Kapalı Otopark</a></li>
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
        <h4 style="color: #fff; font-weight: 800; font-size: 1.05rem; margin-bottom: 16px;">Kurumsal</h4>
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
      <p>&copy; 2026 Kuzey Marmara Çekici. Tüm hakları saklıdır. 7/24 Kesintisiz Otoyol &amp; Şehir İçi Oto Kurtarma.</p>
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

  <script src="/js/main.js?v=3.2" defer></script>
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
console.log('✓ Üretildi: hizmetler/index.html (Dizin - Hizmetler Öncelikli)');

console.log('🎉 Toplam ' + (services.length + 1) + ' hizmet sayfası başarıyla tamamlandı!');

module.exports = { services };
