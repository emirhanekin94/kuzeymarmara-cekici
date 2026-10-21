'use strict';

const SERVICES = [
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

SERVICES.forEach(s => {
  s.metaTitle = s.title;
  s.metaDescription = s.metaDesc;
  s.intro = s.lead;
});

module.exports = { SERVICES };
