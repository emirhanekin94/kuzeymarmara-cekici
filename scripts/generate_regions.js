/**
 * KUZEY MARMARA OTO ÇEKİCİ - 7/24 BÖLGE SAYFALARI ÜRETİM MOTORU
 * Tel & WhatsApp: 0533 265 70 89
 */

const fs = require('fs');
const path = require('path');

const PHONE = '0533 265 70 89';
const PHONE_RAW = '905332657089';
const DOMAIN = 'https://kuzeymarmaracekici.com';

const regions = [
  {
    slug: 'kurtkoy-oto-cekici',
    name: 'Kurtköy',
    category: 'anadolu-merkez',
    categoryLabel: 'Kurtköy & Viaport',
    title: 'Kurtköy Oto Çekici 7/24 | 10 Dk En Yakın Çekici - 0533 265 70 89',
    metaDesc: 'Kurtköy çekici, Kurtköy oto çekici ve 7/24 acil oto kurtarma. Viaport, Yenişehir, Çamlık, TEM ve KMO gişelerinde 10-15 dakikada intikal: 0533 265 70 89.',
    keywords: 'kurtköy çekici, kurtköy oto çekici, viaport çekici, kurtköy acil çekici, yenişehir çekici, çamlık çekici, kurtköy oto kurtarma, kurtköy yol yardım',
    eta: '10 Dk',
    caseTitle: 'Viaport AVM Kavşağında Otomatik Vites Arıza Kurtarması',
    caseDesc: 'Hafta sonu Viaport AVM çıkışında şanzımanı kilitlenen otomatik vitesli araca 8 dakikada ulaşılarak hidrolik kayar kasa ve koruma aparatlarıyla Pendik yetkili servisine transfer edildi.',
    vehicleType: 'C-Segment Otomobil',
    deliveryPoint: 'Pendik Yetkili Servis',
    leadText: 'Kurtköy Merkez, Viaport AVM çevresi, Yenişehir Mahallesi, Çamlık, Kurtköy Sanayi ve TEM/KMO bağlantı yollarında 7/24 nöbetçi çekici filomuzla 10-15 dakikada yanınızdayız. Sabit fiyat garantisi, %100 taşıma kaskosu ve profesyonel ekip.',
    hotspots: 'Viaport AVM, Kurtköy Gişeleri, Yenişehir Mah., Çamlık, Ankara Caddesi, Sabiha Gökçen Bağlantısı',
    trafficAnalysis: "Kurtköy; Sabiha Gökçen Havalimanı, Viaport AVM, Teknopark İstanbul ve devasa konut projelerinin kesiştiği, aynı zamanda hem TEM Otoyolu hem de Kuzey Marmara Otoyolu gişelerine doğrudan açılan en stratejik merkezdir. Bölgenin ana arteri Ankara Caddesi ile havalimanı bağlantı viyadükleridir. Sabah ve akşam mesai saatlerinde, özellikle Viaport AVM çevresinde ve otoban bağlantı kollarında yoğun trafik sıkışıklığı yaşanır. Yağışlı havalarda viyadük geçişleri ve kavşak katılımlarında ani dur-kalklar zincirleme kazalara ve arızalara zemin hazırlar.",
    scenarios: "Kurtköy bölgesinde en sık karşılaştığımız arıza vakaları; Viaport ve site otoparklarında uzun süre yatan araçların akü bitmesi, start-stop hatası vermesi ve otopark içinde tekerlek kilitlemesidir. İkinci büyük senaryo, otoban katılım viyadüklerinde yüksek hızda giderken hararet yapan veya lastik patlatan araçlardır. Ayrıca yeni nesil elektrikli araçların şarj istasyonlarına ulaşamadan batarya korumaya geçmesi ve çekici talep etmesi son dönemde sıkça görülmektedir.",
    equipmentProtocol: "Kurtköy operasyonlarımızda hem kapalı rezidans ve AVM otoparklarına rahatça girebilen alçak kabinli kurtarıcılar hem de otoyol için geniş tablalı kayar kasa çekiciler devrededir. Tekerlekleri kilitli veya elektrikli el freni devrede kalan araçlar için özel tekerlek arabacıkları (dolly) kullanılır; böylece aracın aktarma organlarına ve şanzımanına en ufak sürtünme veya mekanik hasar verilmez.",
    localAdvice: "Kurtköy gişeleri ve Ankara Caddesi üzerindeki nöbet noktalarımız sayesinde çağrınızdan sonra ortalama 8-12 dakika içinde yanınızda oluyoruz. Aracınızı Pendik Oto Sanayi, Kartal Oto Sanayi veya Sabiha Gökçen çevresindeki dilediğiniz yetkili servise güvenle ulaştırıyoruz. Yolda kaldıysanız güvenli bir alana geçip 0533 265 70 89 numaramızdan canlı konum paylaşınız.",
    faqs: [
      { q: 'Kurtköy oto çekici kaç dakikada yanıma gelir?', a: 'Kurtköy merkez ve Viaport çevresinde hazır bekleyen nöbetçi ekiplerimizle ortalama 10 ila 15 dakika içinde adresinizdeyiz.' },
      { q: 'Viaport kapalı otoparkından araç çekebiliyor musunuz?', a: 'Evet, alçak tavanlı kapalı otopark kurtarıcılarımızla yer altı katlarından hasarsız araç tahliyesi yapıyoruz.' },
      { q: 'Kurtköy çekici fiyatı ne kadar?', a: 'Mesafe, araç türü ve varış noktasına göre şeffaf sabit fiyat tarifemiz geçerlidir. Telefonda belirtilen fiyat harici asla sürpriz ücret çıkmaz.' },
      { q: 'Akü takviyesi ve yerinde lastik tamiri var mı?', a: 'Evet, 12V/24V taşınabilir dijital booster ile akü takviyesi ve yerinde stepne değişimi desteğimiz 7/24 aktiftir.' },
      { q: 'Ödeme kredi kartıyla yapılabilir mi?', a: 'Evet, kurtarıcı araçlarımızda mobil POS cihazı bulunmakta olup kredi kartı, banka kartı ve FAST geçerlidir.' }
    ]
  },
  {
    slug: 'kuzey-marmara-otoyolu-oto-cekici',
    name: 'Kuzey Marmara Otoyolu',
    category: 'otoyol-giseler',
    categoryLabel: 'KMO & Gişeler',
    title: 'Kuzey Marmara Otoyolu Çekici 7/24 | 15 Dk Kurtarma - 0533 265 70 89',
    metaDesc: 'Kuzey Marmara Otoyolu çekici, KMO gişeleri, tüneller, viyadükler ve dinlenme tesislerinde 7/24 acil oto kurtarıcı. 15 dakikada intikal: 0533 265 70 89.',
    keywords: 'kuzey marmara otoyolu çekici, kuzey marmara çekici, kmo çekici, kmo oto kurtarma, kuzey marmara oto kurtarıcı, otoban çekici kuzey marmara',
    eta: '15 Dk',
    caseTitle: 'KMO Mecidiye Mevkiinde Lastik Parçalanması Kurtarması',
    caseDesc: 'Kuzey Marmara Otoyolu Mecidiye dinlenme tesisi yakınında çift lastiği yarılan SUV araca 12 dakikada ulaşılarak tepe lambalı güvenlik koridoru eşliğinde kayar kasaya yüklendi.',
    vehicleType: 'Lüks SUV',
    deliveryPoint: 'Gebze Yetkili Servis',
    leadText: 'Kuzey Marmara Otoyolu (KMO) boyunca; gişeler, viyadükler, tüneller, dinlenme tesisleri ve bağlantı kollarında 7/24 tam donanımlı otoyol çekici filomuzla hizmetinizdeyiz. 15 dakikada acil intikal ve %100 emtia taşıma sigortası.',
    hotspots: 'Kurtköy Gişeleri, Kurnaköy Gişeleri, Mecidiye Tesisleri, Akse Gişeleri, Sevindikli, Mermerciler Viyadüğü',
    trafficAnalysis: "Kuzey Marmara Otoyolu, yüksek seyir hızına (140 km/s) sahip, geniş şeritli ancak viyadük ve rüzgarlı açık alan geçişleri bol olan modern bir otoyoldur. Özellikle ağır tonajlı tır ve kamyon trafiği ile lüks binek otomobillerin aynı anda aktığı güzergahta, emniyet şeridinde durmak dahi ciddi can güvenliği riski taşır. Tünel içleri ve viyadük geçişleri görüş mesafesinin daraldığı ve rüzgar savurmalarının yaşandığı kritik noktalardır.",
    scenarios: "Kuzey Marmara Otoyolu'nda en sık yaşanan durumlar; yüksek hızda lastik yarılması, aşırı ısınma kaynaklı motor durması, yakıt veya şarj tükenmesi ve bariyer temaslı kazalardır. Yüksek hız limitleri sebebiyle yolda kalan araca arkadan gelen trafiğin çarpma riski çok yüksektir; bu nedenle otoyolda kurtarma hızı ve güvenlik ikaz ışıkları hayati önemdedir.",
    equipmentProtocol: "KMO otoyol kurtarıcılarımız, otoyol işletme kurallarına tam uyumlu, arkadan gelen trafiği 1 km önceden uyaran yüksek parlaklıklı LED flaşör kuleleri ve sesli ikaz tertibatına sahiptir. Ağır tonajlı kayar kasa hidrolik vinç sistemimiz, şarampole inen veya aksı kırılan araçları hızlıca güvenli platforma alır.",
    localAdvice: "KMO'da aracınız arızalanırsa derhal dörtlülerinizi yakın, aracı emniyet şeridine çekip yolcularla birlikte çelik bariyerlerin arkasına geçiniz. Karayolları kuralı gereği üçgen reflektörü 150 metre geriye yerleştiriniz ve 0533 265 70 89 numaramızı arayarak otoyol kilometre taşını veya WhatsApp konumunuzu iletiniz.",
    faqs: [
      { q: 'Kuzey Marmara Otoyolu gişelerine ne kadar sürede varırsınız?', a: 'Otoyol çıkış ve gişe noktalarında konuşlu nöbetçi ekiplerimizle ortalama 12-15 dakikada intikal ediyoruz.' },
      { q: 'Otoyol çekici fiyatı nasıl hesaplanır?', a: 'Şeffaf taban ücret ve gidilecek km tarifesiyle telefonda net fiyat verilir; sürpriz ücret talep edilmez.' },
      { q: 'Elektrikli ve spor araçlar için sıfır açılı rampa var mı?', a: 'Evet, basık ve bataryalı araçlara özel sıfır dereceli hidrolik platformlarımız mevcuttur.' },
      { q: 'Kaza durumunda vinçli kurtarma sevk edebilir misiniz?', a: 'Evet, şarampol veya bariyer sıkışması için ağır hizmet vinçli kurtarıcılarımız 7/24 hazırdır.' },
      { q: 'Taşıma kaskolu mu?', a: 'Evet, yükleme anından teslimata kadar tüm araçlar %100 emtia taşıma sigortası kapsamındadır.' }
    ]
  },
  {
    slug: 'tem-otoyolu-oto-cekici',
    name: 'TEM Otoyolu',
    category: 'otoyol-giseler',
    categoryLabel: 'TEM & Otoban',
    title: 'TEM Otoyolu Çekici 7/24 | Kurtköy - Gebze Hattı - 0533 265 70 89',
    metaDesc: 'TEM Otoyolu çekici, Kurtköy, Şekerpınar, Gebze, Pendik ve Tuzla dinlenme tesislerinde 7/24 acil oto kurtarıcı. 10-15 dakikada intikal: 0533 265 70 89.',
    keywords: 'tem otoyolu çekici, tem çekici, tem oto kurtarma, tem kurtköy çekici, tem gebze çekici, tem otoban yol yardım',
    eta: '10 - 15 Dk',
    caseTitle: 'TEM Şekerpınar Ayrımında Debriyaj Balatası Arızası',
    caseDesc: 'TEM Otoyolu Şekerpınar kavşağında debriyajı biterek hareketsiz kalan hafif ticari araca 10 dakikada ulaşılarak Gebze Sanayi Sitesi ustasına teslim edildi.',
    vehicleType: 'Hafif Ticari Kamyonet',
    deliveryPoint: 'Gebze Sanayi Sitesi',
    leadText: 'TEM Otoyolu Çamlıca gişelerinden başlayarak Sultanbeyli, Kurtköy, Tuzla, Şekerpınar ve Gebze çıkışlarına kadar uzanan hatta 7/24 hazır oto çekici ve yol yardım filosu. Ortalama 10-15 dakikada emniyetli intikal.',
    hotspots: 'Kurtköy TEM Çıkışı, Mehmetçik Vakfı Tesisleri, Şekerpınar Gişeleri, Gebze Doğu & Batı Gişeleri, Tuzla Yan Yol',
    trafficAnalysis: "TEM Otoyolu Anadolu geçişi, Türkiye'nin en yoğun ticari ve binek trafik koridorudur. Kurtköy, Orhanlı lojistik depoları ve Gebze OSB bağlantıları nedeniyle ağır vasıta yoğunluğu gün boyu sürer. Yağışlı havalarda ve mesai saatlerinde Mehmetçik Tesisleri ile Şekerpınar arasında ani yavaşlamalar ve arkadan çarpmalı kazalar yoğunlaşır.",
    scenarios: "TEM'de en sık yaşanan problemler; yoğun dur-kalk trafiğinde hararet yapıp su kaynatan araçlar, debriyaj balatası sıyıran ticari araçlar ve emniyet şeridinde kalan aküsü bitmiş otomobillerdir.",
    equipmentProtocol: "TEM koridoru için yüksek görüşlü tepe flaşörleri, güvenlik kukaları ve 5 tona kadar taşıma kapasiteli güçlü hidrolik kayar platformlar devrededir.",
    localAdvice: "TEM Otoyolu'nda yolda kaldığınızda aracınızı mümkün olduğunca emniyet şeridinin en sağına yanaştırınız. Güvenliğiniz için aracın içinde beklemeyip bariyer arkasına geçiniz ve konumunuzu bildiriniz.",
    faqs: [
      { q: 'TEM Otoyolu çekicisi kaç dakikada gelir?', a: 'TEM Kurtköy ve Şekerpınar nöbet noktalarımızdan ortalama 10-15 dakikada intikal sağlanır.' },
      { q: 'Mehmetçik Vakfı tesislerine çekici gelir mi?', a: 'Evet, TEM üzerindeki tüm dinlenme tesislerine dakikalar içinde ulaşıyoruz.' },
      { q: 'Ödeme kredi kartıyla yapılabilir mi?', a: 'Evet, araç başında mobil POS ile kredi kartı veya havale/FAST kabul edilmektedir.' },
      { q: 'Minibüs ve kamyonet çekiyor musunuz?', a: 'Evet, geniş tablalı çekicilerimiz hafif ticari ve minibüsleri rahatlıkla taşır.' },
      { q: 'Gece nöbetçi çekiciniz var mı?', a: '7 gün 24 saat kesintisiz nöbetçi filomuz sahadadır.' }
    ]
  },
  {
    slug: 'gebze-oto-cekici',
    name: 'Gebze',
    category: 'kocaeli-sanayi',
    categoryLabel: 'Gebze & Sanayi',
    title: 'Gebze Oto Çekici 7/24 | En Yakın Gebze Çekici - 0533 265 70 89',
    metaDesc: 'Gebze çekici, Gebze oto çekici, Gebze OSB, Barış Mahallesi, Eskihisar ve sanayi sitelerinde 7/24 acil oto kurtarma ve yol yardım. 10 Dk intikal: 0533 265 70 89.',
    keywords: 'gebze çekici, gebze oto çekici, gebze oto kurtarma, gebze osb çekici, gebze acil çekici, gebze yol yardım, gebze oto kurtarıcı',
    eta: '10 Dk',
    caseTitle: 'Gebze OSB Girişinde Elektrik Arızası Kurtarması',
    caseDesc: 'Gebze Organize Sanayi Bölgesi kavşağında elektrik arızası sebebiyle stop eden araca 9 dakikada ulaşılarak Gebze Küçük Sanayi Sitesi yetkili servisine teslim edildi.',
    vehicleType: 'Sedan Otomobil',
    deliveryPoint: 'Gebze Küçük Sanayi',
    leadText: 'Gebze Merkez, Gebze OSB, Barış Mahallesi, Tatlıkuyu, Arapçeşme, Eskihisar feribot yolu ve D-100 bağlantılarında 7/24 hazır nöbetçi çekici araçlarımızla 10 dakikada yanınızdayız.',
    hotspots: 'Gebze OSB, GOSB Meydanı, Barış Mahallesi, Tatlıkuyu Köprüsü, Eskihisar Feribot Yolu, D-100 Gebze Geçişi',
    trafficAnalysis: "Gebze, devasa organize sanayi bölgeleri, lojistik depoları ve Eskihisar feribot iskelesiyle sanayinin ve ulaşımın kalbidir. D-100 kara yolu ile TEM bağlantı köprülü kavşaklarında sabah ve akşam saatlerinde yoğun fabrika servisleri ve tır kuyrukları oluşur.",
    scenarios: "Gebze bölgesinde sanayi yollarındaki ağır zemin ve çukurlar sebebiyle lastik yarılması, rot/aks kırılması ve fabrika çıkışlarında akü bitmesi en çok karşılaşılan arıza türleridir.",
    equipmentProtocol: "Gebze sanayi bölgesine uygun ağır hizmet kayar kasa, tekerlek korumalı dolly aparatları ve profesyonel çelik vinç tertibatlı araçlarımız hizmet vermektedir.",
    localAdvice: "Gebze merkez ve sanayi sitelerine ortalama 8 ila 12 dakikada ulaşıyoruz. Aracınızı Gebze Küçük Sanayi Sitesi veya Tuzla yetkili servislerine güvenle teslim ediyoruz.",
    faqs: [
      { q: 'Gebze içine çekici ne kadar sürede gelir?', a: 'Gebze merkezdeki nöbetçi ekibimiz ortalama 8-10 dakika içinde yanınızdadır.' },
      { q: 'Eskihisar feribot yolunda çekici hizmetiniz var mı?', a: 'Evet, Eskihisar iskelesi ve feribot bekleme alanında 7/24 aktif aracımız vardır.' },
      { q: 'Gebze Sanayi Sitesine araç çeker misiniz?', a: 'Evet, talep ettiğiniz her sanayi ustasına veya yetkili servise teslimat yapıyoruz.' },
      { q: 'Akü takviyesi yapıyor musunuz?', a: 'Evet, yerinde 12V/24V taşınabilir booster ile hızlı çalıştırma sağlıyoruz.' },
      { q: 'Fiyatlar sabit mi?', a: 'Telefonda teyit edilen fiyat sabittir, sürpriz ücret çıkmaz.' }
    ]
  },
  {
    slug: 'pendik-oto-cekici',
    name: 'Pendik',
    category: 'anadolu-merkez',
    categoryLabel: 'Pendik & Sahil',
    title: 'Pendik Oto Çekici 7/24 | En Yakın Pendik Çekici - 0533 265 70 89',
    metaDesc: 'Pendik çekici, Pendik oto çekici, Kaynarca, Velibaba, Kurtköy yolu, E-5 ve Pendik Marina mevkiinde 7/24 kaskolu acil oto kurtarma: 0533 265 70 89.',
    keywords: 'pendik çekici, pendik oto çekici, kaynarca çekici, velibaba çekici, pendik oto kurtarma, pendik yol yardım, pendik acil çekici',
    eta: '10 Dk',
    caseTitle: 'Pendik Kaynarca D-100 Katılımında Mekanik Arıza',
    caseDesc: 'Kaynarca E-5 katılımında şanzıman arızası yaşayan araca 10 dakikada ulaşılarak Pendik Oto Sanayi Sitesine güvenle nakledildi.',
    vehicleType: 'Hatchback Araç',
    deliveryPoint: 'Pendik Oto Sanayi',
    leadText: 'Pendik Merkez, Kaynarca, Velibaba, Güzelyalı, Pendik Sahil, Marina, E-5 ve Kurtköy bağlantı aksında 7/24 nöbetçi oto çekici ve yol yardım hizmeti. 10 dakikada adrese varış.',
    hotspots: 'Pendik Köprüsü, Kaynarca Kavşağı, Pendik Marina, Velibaba Sanayi Caddesi, Kurtköy Bağlantı Yolu',
    trafficAnalysis: "Pendik, sahil yolu, D-100 (E-5) kara yolu ve Kurtköy üzerinden otoyollara bağlanan çok katmanlı bir ulaşım ağına sahiptir. Pendik Köprüsü ve Kaynarca kavşağı gün boyu yoğun akar.",
    scenarios: "Pendik'te en çok sahil trafiğinde dur-kalk kaynaklı hararet, D-100 yan yollarında kaza hasarlı kurtarma ve dik mahalle yokuşlarında debriyaj arızalarıyla karşılaşılmaktadır.",
    equipmentProtocol: "Dar sokaklar ve sahil koridoru için kıvrak manevralı kayar kasa araçlarımız ve kilitli araçlar için tekerlek kaldırma aparatlarımız hazırdır.",
    localAdvice: "Pendik nöbet noktamızdan Kaynarca, Sahil ve Velibaba'ya 8-10 dakikada varıyoruz. Pendik Oto Sanayi Sitesi veya Kartal yetkili servislerine hızlı teslimat sağlıyoruz.",
    faqs: [
      { q: 'Pendik oto çekici kaç dakikada gelir?', a: 'Konumunuza göre ortalama 8 ila 12 dakika içinde yanınızdayız.' },
      { q: 'Pendik Oto Sanayi Sitesine çekim yapıyor musunuz?', a: 'Evet, sanayi sitelerine ve özel/yetkili servislere öncelikli teslimat yapıyoruz.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile tüm kartlar geçerlidir.' },
      { q: 'Motosiklet çekiyor musunuz?', a: 'Özel ön teker sabitleme sehpamızla motosikletleri dik ve hasarsız taşıyoruz.' },
      { q: 'Fiyat ne kadar?', a: 'Kısa mesafe taban ücretimiz ve şeffaf km tarifemiz uygulanır.' }
    ]
  },
  {
    slug: 'cayirova-oto-cekici',
    name: 'Çayırova',
    category: 'kocaeli-sanayi',
    categoryLabel: 'Çayırova & Şekerpınar',
    title: 'Çayırova Oto Çekici 7/24 | En Yakın Çayırova Çekici - 0533 265 70 89',
    metaDesc: 'Çayırova çekici, Çayırova oto çekici, Akse Mahallesi, Yenimahalle, Şekerpınar otoban bağlantısında 7/24 oto kurtarma ve yol yardım: 0533 265 70 89.',
    keywords: 'çayırova çekici, çayırova oto çekici, akse mahallesi çekici, çayırova oto kurtarma, çayırova yol yardım, çayırova acil çekici',
    eta: '10 Dk',
    caseTitle: 'Çayırova Akse Mahallesinde Akü Boşalması',
    caseDesc: 'Akse Mahallesinde sabah marş basmayan ticari araca 8 dakikada seyyar booster takviyesi yapılarak araç çalıştırıldı.',
    vehicleType: 'Panelvan Kamyonet',
    deliveryPoint: 'Yerinde Akü Desteği',
    leadText: 'Çayırova Merkez, Akse Mahallesi, Özgürlük Mahallesi, Yenimahalle ve Şekerpınar sanayi aksında 7/24 nöbetçi çekici desteği. Hızlı intikal ve garantili taşıma.',
    hotspots: 'Akse Mahallesi, Çayırova Köprüsü, D-100 Kocaeli Sınırı, Şekerpınar Bağlantısı',
    trafficAnalysis: "İstanbul ile Kocaeli sınırında yer alan Çayırova, D-100 geçişi ve lojistik depolarla çevrilidir. Sanayi tırları ve servis otobüsleri trafiğin ana unsurudur.",
    scenarios: "Çayırova'da ağır tonaj kaynaklı zemin bozukluklarında lastik hasarı ve sabah saatlerinde akü boşalması en yaygın çağrı nedenleridir.",
    equipmentProtocol: "Hafif ticari araçlar ve binekler için hidrolik kayar platform ve yerinde yol yardım ekipmanları sevk edilir.",
    localAdvice: "Çayırova Akse ve köprü kavşağına ortalama 10 dakikada intikal sağlıyoruz. Aracınızı Gebze veya Pendik servislerine aktarıyoruz.",
    faqs: [
      { q: 'Çayırova çekici kaç dakikada gelir?', a: 'Ortalama 10 dakika içinde adresinizdeyiz.' },
      { q: 'Kocaeli sınırında hizmet veriyor musunuz?', a: 'Evet, Çayırova ve tüm Kocaeli giriş aksında aktifiz.' },
      { q: 'Lastik değişimi yapıyor musunuz?', a: 'Evet, yerinde stepne montajı ve hava desteği sağlıyoruz.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile araç başında ödeme yapabilirsiniz.' },
      { q: 'Fiyat tarifesi nasıl?', a: 'Net ve şeffaf km bazlı sabit fiyat veriyoruz.' }
    ]
  },
  {
    slug: 'sabiha-gokcen-oto-cekici',
    name: 'Sabiha Gökçen Havalimanı',
    category: 'anadolu-merkez',
    categoryLabel: 'Havalimanı & Yolcu',
    title: 'Sabiha Gökçen Havalimanı Çekici 7/24 | 10 Dk - 0533 265 70 89',
    metaDesc: 'Sabiha Gökçen oto çekici, havalimanı otoparkı, gelen-giden yolcu katı, kargo alanı ve bağlantı yolunda 7/24 acil çekici ve akü takviye: 0533 265 70 89.',
    keywords: 'sabiha gökçen çekici, sabiha gökçen oto çekici, havalimanı çekici kurtköy, sabiha gökçen otopark çekici, sabiha gökçen yol yardım',
    eta: '10 Dk',
    caseTitle: 'Havalimanı Katlı Otoparkında Akü Bitmesi',
    caseDesc: 'Yurt dışı seyahatinden dönen yolcunun katlı otoparkta aküsü tükenen lüks aracına 7 dakikada ulaşılarak booster takviyesiyle marş basıldı.',
    vehicleType: 'Lüks Sedan',
    deliveryPoint: 'Havalimanı Otopark İçi',
    leadText: 'Sabiha Gökçen Uluslararası Havalimanı (SAW) açık ve katlı otoparkları, gelen/giden yolcu viyadükleri, kargo sahası ve havalimanı bulvarında 7/24 acil çekici ve yol yardım.',
    hotspots: 'Havalimanı Katlı Otoparkı, İç/Dış Hatlar Girişi, Kargo Terminali, Havalimanı Bağlantı Viyadüğü',
    trafficAnalysis: "Havalimanı çevresinde 24 saat kesintisiz taksi, VIP transfer ve yolcu trafiği akar. Katlı otoparklarda uzun süre park halinde kalan araçlar ve uçuşa yetişme aciliyeti belirleyicidir.",
    scenarios: "Uzun süreli park sonrası boşalan aküler, otopark bariyerinde kilitlenen el frenleri ve havalimanı yolunda uçuşa yetişirken patlayan lastikler en kritik vakalardır.",
    equipmentProtocol: "Havalimanı katlı otopark tavan yüksekliğine uygun kompakt alçak şaseli kurtarıcılar ve seyyar dijital akü çalıştırma cihazları.",
    localAdvice: "Havalimanı nizamiyesinde bekleyen ekibimizle otopark içine veya viyadüklere 8 dakikada varıyoruz. Uçuşunuz varsa hızlı koordinasyon sağlıyoruz.",
    faqs: [
      { q: 'Havalimanı katlı otoparkına çekici girer mi?', a: 'Evet, alçak tavan kurtarıcımızla otopark katlarından hasarsız tahliye yapıyoruz.' },
      { q: 'Akü takviyesi ne kadar sürer?', a: 'Otoparka girişimizle birlikte 5 dakika içinde aracınızı çalıştırıyoruz.' },
      { q: 'Uçuş saatinde acil yetişme desteği var mı?', a: 'Evet, aracı güvenle teslim alıp sizi terminale yönlendiriyoruz.' },
      { q: 'Ödeme nasıl yapılır?', a: 'Kredi kartı, nakit veya FAST geçerlidir.' },
      { q: 'Gece çekici var mı?', a: 'Havalimanı aksında 7/24 kesintisiz nöbetçiyiz.' }
    ]
  },
  {
    slug: 'tuzla-oto-cekici',
    name: 'Tuzla',
    category: 'anadolu-merkez',
    categoryLabel: 'Tuzla & İçmeler',
    title: 'Tuzla Oto Çekici 7/24 | En Yakın Tuzla Çekici - 0533 265 70 89',
    metaDesc: 'Tuzla çekici, Tuzla oto çekici, İçmeler, Aydınlı, Tepeören, Deri OSB, Formula 1 yolu ve D-100 Tuzla geçişinde 7/24 oto kurtarma: 0533 265 70 89.',
    keywords: 'tuzla çekici, tuzla oto çekici, içmeler çekici, aydınlı çekici, tepeören çekici, deri osb çekici, tuzla oto kurtarma, tuzla yol yardım',
    eta: '12 Dk',
    caseTitle: 'Tuzla Deri OSB Yolunda Şanzıman Arızası',
    caseDesc: 'Deri Organize Sanayi yolunda şanzıman yağı boşalan araca 11 dakikada ulaşılarak kaskolu kayar kasayla İçmeler oto sanayisine nakledildi.',
    vehicleType: 'SUV Araç',
    deliveryPoint: 'Tuzla İçmeler Sanayi',
    leadText: 'Tuzla Merkez, İçmeler, Aydınlı, Yayla, Tepeören, Deri OSB, Akfırat (Formula 1) ve D-100 Tuzla köprülü kavşaklarında 7/24 profesyonel oto çekici ve kurtarma desteği.',
    hotspots: 'İçmeler Kavşağı, Aydınlı Yolu, Deri OSB, Akfırat / Tepeören, Tuzla Piyade Okulu Çevresi',
    trafficAnalysis: "Tuzla; tersaneler, sanayi siteleri ve Formula 1 Tepeören bölgesini kapsayan geniş bir alandır. D-100 ile sahil yolu arasında yoğun tır ve lojistik trafiği hakimdir.",
    scenarios: "Tuzla'da sanayi ve tersane yollarında keskin metal parçalarıyla lastik yarılması ve otoyol Tepeören rampalarında debriyaj yanması sıkça görülür.",
    equipmentProtocol: "Hem spor araçlara uygun sıfır açılı rampalar hem de ağır ticari taşıma kapasiteli hidrolik kayar kasalar.",
    localAdvice: "İçmeler ve Aydınlı nöbet ekiplerimizle ortalama 10-12 dakikada yanınızdayız. Tuzla İçmeler Sanayi ve Kartal servislerine teslimat yapıyoruz.",
    faqs: [
      { q: 'Tuzla İçmeler sanayiye araç çeker misiniz?', a: 'Evet, İçmeler ve Kartal sanayi sitelerine direkt teslimat yapıyoruz.' },
      { q: 'Tepeören ve Akfırat bölgesine servisiniz var mı?', a: 'Evet, Formula 1 ve Tepeören villalar bölgesine 12 dakikada ulaşıyoruz.' },
      { q: 'Taşıma kaskolu mu?', a: 'Tüm araçlarımız %100 emtia sigortasıyla taşınır.' },
      { q: 'Akü takviyesi var mı?', a: 'Evet, taşınabilir dijital cihazla yerinde takviye sağlıyoruz.' },
      { q: 'Ödeme kredi kartıyla olur mu?', a: 'Evet, mobil POS ile tüm kartlar kabul edilir.' }
    ]
  },
  {
    slug: 'sekerpinar-oto-cekici',
    name: 'Şekerpınar',
    category: 'otoyol-giseler',
    categoryLabel: 'Şekerpınar & Gişeler',
    title: 'Şekerpınar Oto Çekici 7/24 | TEM & KMO Kavşağı - 0533 265 70 89',
    metaDesc: 'Şekerpınar çekici, Şekerpınar oto çekici, TEM gişeleri, KMO bağlantısı, lojistik depolar ve sanayi bölgesinde 7/24 oto kurtarma: 0533 265 70 89.',
    keywords: 'şekerpınar çekici, şekerpınar oto çekici, şekerpınar gişeler çekici, şekerpınar oto kurtarma, şekerpınar yol yardım, şekerpınar otoban çekici',
    eta: '10 Dk',
    caseTitle: 'Şekerpınar Gişelerinde Hararet Yapan Araç Tahliyesi',
    caseDesc: 'Şekerpınar TEM gişeleri çıkışında su hortumu patlayan otomobile 8 dakikada ulaşılarak güvenli alana ve ardından tamirhaneye nakledildi.',
    vehicleType: 'Sedan Otomobil',
    deliveryPoint: 'Çayırova Sanayi',
    leadText: 'Şekerpınar TEM Gişeleri, Kuzey Marmara Otoyolu Akse ayrımı, TAYSAD OSB ve dev lojistik depolar bölgesinde 7/24 hazır oto çekici ve vinçli kurtarma hizmeti.',
    hotspots: 'Şekerpınar TEM Gişeleri, TAYSAD OSB, Lojistik Depolar Aksı, KMO Akse Çıkışı',
    trafficAnalysis: "Şekerpınar; TEM Otoyolu'nun en yoğun kamyon/tır giriş kapısı ve otomotiv yan sanayisinin (TAYSAD) merkezidir. Gişelerde gün boyu yüksek tonajlı araç trafiği mevcuttur.",
    scenarios: "Ağır vasıtalarla binek araçların kesiştiği kavşaklarda sürtünmeli kazalar, otoban çıkışında hararet yapma ve fren kilitlenmesi sık görülür.",
    equipmentProtocol: "Geniş tablalı kayar kasa, çelik vinç tertibatı ve ağır yük sabitleme kemerleri.",
    localAdvice: "Gişeler çıkışındaki nöbet noktamızdan 8-10 dakikada yanınızdayız. Konumunuzu gişe numarası veya en yakın depo adı olarak iletiniz.",
    faqs: [
      { q: 'Şekerpınar gişelerine kaç dakikada gelirsiniz?', a: 'Ortalama 8-10 dakika içinde gişelerdeyiz.' },
      { q: 'Kamyon ve minibüs çekiyor musunuz?', a: 'Evet, ağır vasıta ve hafif ticari kurtarıcılarımız mevcuttur.' },
      { q: 'Fiyatlar sabit mi?', a: 'Telefonda teyit edilen fiyat sabittir.' },
      { q: 'Gece çekici var mı?', a: '7/24 nöbetçi ekibimiz hazır beklemektedir.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile kart geçerlidir.' }
    ]
  },
  {
    slug: 'dilovasi-oto-cekici',
    name: 'Dilovası',
    category: 'kocaeli-sanayi',
    categoryLabel: 'Dilovası & Viyadük',
    title: 'Dilovası Oto Çekici 7/24 | Viyadük & Osmangazi - 0533 265 70 89',
    metaDesc: 'Dilovası çekici, Dilovası oto çekici, D-100 rampaları, Mermerciler OSB, KMO Dilovası viyadüğü ve Osmangazi Köprüsü çıkışında 7/24 acil kurtarma: 0533 265 70 89.',
    keywords: 'dilovası çekici, dilovası oto çekici, dilovası viyadük çekici, mermerciler çekici, osmangazi köprüsü çekici, dilovası oto kurtarma',
    eta: '15 Dk',
    caseTitle: 'Dilovası Rampasında Fren Balatası Kilitlenmesi',
    caseDesc: 'Dilovası dik iniş rampasında frenleri kilitlenen araca 12 dakikada ulaşılarak tekerlek aparatı ile hasarsız platforma çekildi.',
    vehicleType: 'Ticari Minibüs',
    deliveryPoint: 'Gebze Sanayi',
    leadText: 'Dilovası Rampaları, D-100 geçişi, Mermerciler OSB, KMO viyadüğü ve Osmangazi Köprüsü bağlantı aksında 7/24 vinçli ve kayar kasalı oto kurtarıcı desteği.',
    hotspots: 'Dilovası Rampası, Mermerciler OSB, Osmangazi Köprü Bağlantısı, Diliskelesi',
    trafficAnalysis: "Dilovası rampaları, dik eğimi ve ağır tır trafiği ile Türkiye'nin en zorlu yol bölümlerindendir. Aşırı fren kullanımı balata yanmalarına yol açar.",
    scenarios: "Rampada balata yanması, motor çekiş düşüklüğü sebebiyle yol ortasında kalma ve viyadüklerde savrulma kazaları.",
    equipmentProtocol: "Çift çeker güçlü kurtarıcılar, ağır yük vinçleri ve yüksek güvenlikli yol ikaz panoları.",
    localAdvice: "Rampada kalırsanız vitesi boşa almayınız, el frenini çekip reflektörü yerleştirerek hemen bizi arayınız.",
    faqs: [
      { q: 'Dilovası rampasında çekici ne kadar sürede ulaşır?', a: '12-15 dakika içinde olay yerindeyiz.' },
      { q: 'Osmangazi Köprüsü çıkışına çekici gelir mi?', a: 'Evet, köprü çıkışı ve gişelerine acil intikal sağlıyoruz.' },
      { q: 'Vinçli kurtarma var mı?', a: 'Şarampol ve bariyer durumları için vinçli araçlarımız hazırdır.' },
      { q: 'Ödeme nasıl yapılır?', a: 'Kredi kartı, nakit veya FAST geçerlidir.' },
      { q: 'Taşıma sigortalı mı?', a: '%100 emtia taşıma sigortalıdır.' }
    ]
  },
  {
    slug: 'sultanbeyli-oto-cekici',
    name: 'Sultanbeyli',
    category: 'anadolu-merkez',
    categoryLabel: 'Sultanbeyli & TEM',
    title: 'Sultanbeyli Oto Çekici 7/24 | En Yakın Çekici - 0533 265 70 89',
    metaDesc: 'Sultanbeyli çekici, Sultanbeyli oto çekici, TEM Sultanbeyli gişeleri, Fatih Bulvarı, Hasanpaşa ve KMO Paşaköy bağlantısında 7/24 acil kurtarma: 0533 265 70 89.',
    keywords: 'sultanbeyli çekici, sultanbeyli oto çekici, sultanbeyli oto kurtarma, sultanbeyli yol yardım, fatih bulvarı çekici, sultanbeyli acil çekici',
    eta: '10 Dk',
    caseTitle: 'Fatih Bulvarında Akü Takviye Operasyonu',
    caseDesc: 'Sultanbeyli Fatih Bulvarında marş basmayan binek araca 7 dakikada ulaşılarak dijital booster ile yerinde çalıştırıldı.',
    vehicleType: 'Sedan Araç',
    deliveryPoint: 'Yerinde Akü Servisi',
    leadText: 'Sultanbeyli Merkez, Fatih Bulvarı, Hasanpaşa, Battalgazi, TEM Sultanbeyli Gişeleri ve Paşaköy bağlantı koridorunda 7/24 nöbetçi çekici filosu.',
    hotspots: 'TEM Sultanbeyli Gişeleri, Fatih Bulvarı, Gölet Parkı Çevresi, Paşaköy Ayrımı',
    trafficAnalysis: "Sultanbeyli, TEM Otoyolu üzerindeki en yoğun gişe noktalarından birine ve yoğun iç ilçe trafiğine sahiptir. Fatih Bulvarı ana ticaret ve ulaşım aksıdır.",
    scenarios: "Dur-kalk trafiğinde debriyaj arızası, sabah akü boşalması ve gişe bağlantılarında kaza vakaları.",
    equipmentProtocol: "Kıvrak manevralı hidrolik kayar kasalar ve yerinde takviye/lastik destek araçları.",
    localAdvice: "Sultanbeyli gişeler ve merkez nöbet noktamızdan 8-10 dakikada yanınızdayız. Kurtköy ve Pendik sanayilerine hızlı teslimat yapılır.",
    faqs: [
      { q: 'Sultanbeyli çekici kaç dakikada gelir?', a: 'Ortalama 8-10 dakika içinde yanınızdayız.' },
      { q: 'TEM gişelerine çekici sevk edilir mi?', a: 'Evet, gişelere dakikalar içinde ulaşıyoruz.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Mobil POS ile tüm kredi kartları geçerlidir.' },
      { q: 'Lastik tamiri yapıyor musunuz?', a: 'Yerinde stepne değişimi ve hava desteği veriyoruz.' },
      { q: 'Fiyat tarifesi nedir?', a: 'Sabit taban ücret ve şeffaf km tarifesi uygulanır.' }
    ]
  },
  {
    slug: 'sancaktepe-oto-cekici',
    name: 'Sancaktepe',
    category: 'anadolu-merkez',
    categoryLabel: 'Sancaktepe & Samandıra',
    title: 'Sancaktepe Oto Çekici 7/24 | Samandıra & Paşaköy - 0533 265 70 89',
    metaDesc: 'Sancaktepe çekici, Sancaktepe oto çekici, Samandıra gişeleri, Paşaköy KMO ayrımı, Sarıgazi ve Yenidoğan mevkiinde 7/24 acil kurtarma: 0533 265 70 89.',
    keywords: 'sancaktepe çekici, sancaktepe oto çekici, samandıra çekici, paşaköy çekici, sarıgazi çekici, sancaktepe oto kurtarma, sancaktepe yol yardım',
    eta: '10 Dk',
    caseTitle: 'Samandıra Gişelerinde Lastik Patlaması',
    caseDesc: 'Samandıra TEM gişelerinde lastiği patlayan hafif ticari araca 9 dakikada ulaşılarak stepne montajı yapıldı ve yola devam etmesi sağlandı.',
    vehicleType: 'Ticari Minibüs',
    deliveryPoint: 'Yerinde Stepne Değişimi',
    leadText: 'Sancaktepe Merkez, Samandıra Gişeleri, Sarıgazi, Yenidoğan ve Paşaköy Kuzey Marmara Otoyolu bağlantı noktasında 7/24 hazır kurtarıcı filosu.',
    hotspots: 'Samandıra Gişeleri, Paşaköy KMO Katılımı, Sarıgazi Meydanı, Rings AVM Çevresi',
    trafficAnalysis: "Sancaktepe, TEM Samandıra gişeleri ile KMO Paşaköy gişelerinin birleştiği stratejik bir köprü konumundadır. Tır garajları ve çevre sanayi yoğun araç hareketi yaratır.",
    scenarios: "Otoban katılımlarında motor arızası, tır manevralarında sürtünmeli kazalar ve otopark içi akü bitmesi.",
    equipmentProtocol: "Geniş platformlu hidrolik kayar kasa ve 12V/24V takviye üniteleri.",
    localAdvice: "Samandıra gişelerindeki nöbet ekibimizle 8-10 dakikada yanınızdayız. Dudullu veya Kurtköy sanayilerine kolay teslimat yapıyoruz.",
    faqs: [
      { q: 'Samandıra gişelerine ne kadar sürede varırsınız?', a: 'Ortalama 8-10 dakika içinde gişelerdeyiz.' },
      { q: 'Paşaköy KMO bağlantısında çekici var mı?', a: 'Evet, Paşaköy ayrımında nöbetçi aracımız bulunmaktadır.' },
      { q: 'Fiyatlar sabit mi?', a: 'Telefonda teyit edilen fiyat sabittir.' },
      { q: 'Kartla ödeme var mı?', a: 'Evet, mobil POS geçerlidir.' },
      { q: 'Akü takviyesi yapılır mı?', a: 'Yerinde dijital booster ile marş basılır.' }
    ]
  },
  {
    slug: 'kurnakoy-mecidiye-oto-cekici',
    name: 'Kurnaköy & Mecidiye',
    category: 'otoyol-giseler',
    categoryLabel: 'Kurnaköy Gişeleri',
    title: 'Kurnaköy & Mecidiye Çekici 7/24 | KMO Gişeler - 0533 265 70 89',
    metaDesc: 'Kurnaköy çekici, Mecidiye dinlenme tesisi çekici, KMO Kurnaköy gişeleri ve Akfırat bağlantısında 7/24 acil otoyol kurtarıcı: 0533 265 70 89.',
    keywords: 'kurnaköy çekici, kurnaköy gişeler çekici, mecidiye çekici, kmo mecidiye dinlenme tesisi çekici, kurnaköy oto kurtarma',
    eta: '12 Dk',
    caseTitle: 'Mecidiye Dinlenme Tesisinde Yakıt Bitmesi & Kurtarma',
    caseDesc: 'Kuzey Marmara Otoyolu Mecidiye tesisi girişinde yakıtı biterek duran araca 10 dakikada ulaşılarak güvenli yakıt ikmali sağlandı.',
    vehicleType: 'Binek Araç',
    deliveryPoint: 'Mecidiye Tesisleri',
    leadText: 'Kuzey Marmara Otoyolu Kurnaköy Gişeleri, Mecidiye Dinlenme Tesisleri, Akfırat ve Formula 1 otoyol çıkışında 7/24 nöbetçi otoyol kurtarma ekibi.',
    hotspots: 'Kurnaköy Gişeleri, Mecidiye Tesisleri, KMO km 120-140 Arası, Akfırat Ayrımı',
    trafficAnalysis: "KMO'nun Anadolu yakasındaki en kritik ana gişe ve dinlenme tesisidir. Yüksek hızla seyreden araçların mola verdiği ve otobandan ilçelere dağıldığı kavşaktır.",
    scenarios: "Yüksek hızda lastik yarılması, dinlenme tesisinde marş basmama ve gişe öncesi ani şerit değiştirme kazaları.",
    equipmentProtocol: "Otoyol ikaz tepe lambalı kayar kasa kurtarıcılar ve yüksek teminatlı emtia kaskosu.",
    localAdvice: "Gişelerde veya dinlenme tesisinde yolda kalırsanız peron veya pompa numarasını bize iletiniz; 10 dakikada yanınızdayız.",
    faqs: [
      { q: 'Kurnaköy gişelerine çekici kaç dakikada gelir?', a: 'Ortalama 10-12 dakika içinde yanınızdayız.' },
      { q: 'Mecidiye tesislerine servisiniz var mı?', a: 'Evet, dinlenme tesisine dakikalar içinde giriyoruz.' },
      { q: 'Otoyol çekici ücreti nedir?', a: 'Şeffaf ve sabit km tarifesi geçerlidir.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile araç başında ödeyebilirsiniz.' },
      { q: 'Elektrikli araç çekiyor musunuz?', a: 'Özel rampa aparatıyla bataryayı koruyarak çekiyoruz.' }
    ]
  },
  {
    slug: 'darica-oto-cekici',
    name: 'Darıca',
    category: 'kocaeli-sanayi',
    categoryLabel: 'Darıca & Eskihisar',
    title: 'Darıca Oto Çekici 7/24 | Bayramoğlu & Sahil - 0533 265 70 89',
    metaDesc: 'Darıca çekici, Darıca oto çekici, Bayramoğlu, Kazım Karabekir, Nenehatun, Darıca sahil ve Eskihisar aksında 7/24 oto kurtarma: 0533 265 70 89.',
    keywords: 'darıca çekici, darıca oto çekici, bayramoğlu çekici, darıca oto kurtarma, darıca yol yardım, darıca acil çekici',
    eta: '12 Dk',
    caseTitle: 'Bayramoğlu Sahil Yolunda Fren Arızası',
    caseDesc: 'Bayramoğlu sahilinde fren hidroliği kaçıran araca 11 dakikada ulaşılarak kaskolu kayar kasaya alınıp Gebze servisine götürüldü.',
    vehicleType: 'Sedan Araç',
    deliveryPoint: 'Gebze Özel Servis',
    leadText: 'Darıca Merkez, Bayramoğlu Yarımadası, Darıca Sahili, Faruk Yalçın Hayvanat Bahçesi çevresi ve Eskihisar feribot bağlantısında 7/24 oto çekici.',
    hotspots: 'Bayramoğlu Sahili, Darıca Millet Bahçesi, Eskihisar İskele Yolu, Cami Mahallesi',
    trafficAnalysis: "Darıca sahil şeridi ve Bayramoğlu villalar bölgesi hafta sonları yoğun gezi trafiğine sahne olur. Dar ve dik sokaklar manevra kabiliyeti gerektirir.",
    scenarios: "Sahil sokaklarında dar alan sürtmeleri, yokuş kalkışında debriyaj yanması ve otopark içi akü bitmesi.",
    equipmentProtocol: "Kompakt boyutlu hidrolik kayar kasa ve jant koruyucu sabitleme kayışları.",
    localAdvice: "Darıca merkez ve sahil noktalarına 10-12 dakikada intikal sağlıyoruz. Gebze veya Tuzla servislerine teslimat yapıyoruz.",
    faqs: [
      { q: 'Darıca çekici ne kadar sürede gelir?', a: 'Ortalama 10-12 dakika içinde adresinizdeyiz.' },
      { q: 'Bayramoğlu yarımadasına araç girer mi?', a: 'Evet, ada içine özel uygun boyutlu kurtarıcımız sevk edilir.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile tüm kartlar kabul edilir.' },
      { q: 'Fiyat tarifesi nasıl?', a: 'Mesafe bazlı net sabit fiyat verilir.' },
      { q: 'Lastik yardımı var mı?', a: 'Yerinde stepne değişimi ve hava desteği sağlanır.' }
    ]
  },
  {
    slug: 'omerli-resadiye-oto-cekici',
    name: 'Ömerli & Reşadiye',
    category: 'otoyol-giseler',
    categoryLabel: 'Ömerli & KMO',
    title: 'Ömerli & Reşadiye Çekici 7/24 | KMO & Orman Yolu - 0533 265 70 89',
    metaDesc: 'Ömerli çekici, Reşadiye çekici, Kuzey Marmara Otoyolu Reşadiye gişeleri, Şile yolu bağlantısı ve orman bölgesinde 7/24 acil kurtarma: 0533 265 70 89.',
    keywords: 'ömerli çekici, reşadiye çekici, reşadiye gişeler çekici, kmo reşadiye çekici, ömerli oto kurtarma, şile yolu çekici',
    eta: '15 Dk',
    caseTitle: 'Reşadiye Gişeleri Çıkışında Elektrikli Araç Şarj Bitmesi',
    caseDesc: 'Reşadiye KMO çıkışında bataryası tükenen elektrikli crossover araca 12 dakikada ulaşılarak sıfır açılı rampa ile en yakın şarj istasyonuna nakledildi.',
    vehicleType: 'Elektrikli Crossover',
    deliveryPoint: 'Kurtköy Şarj İstasyonu',
    leadText: 'Kuzey Marmara Otoyolu Reşadiye Gişeleri, Ömerli Barajı havzası, Çekmeköy/Şile orman yolu bağlantısı ve Alemdağ hattında 7/24 nöbetçi otoyol kurtarıcısı.',
    hotspots: 'KMO Reşadiye Gişeleri, Ömerli Baraj Yolu, Hüseyinli Kavşağı, Şile Yolu Ayrımı',
    trafficAnalysis: "KMO'nun doğa ile iç içe olan bu kesimi, virajlı orman bağlantı yolları ve kışın sis/buzlanma riskiyle öne çıkar. Hızlı otoyol trafiği ile orman tali yolları kesişir.",
    scenarios: "Sisli havalarda yoldan çıkma, kışın buzlanmada kayarak bariyer teması ve elektrikli araçlarda menzil tükenmesi.",
    equipmentProtocol: "4x4 vinç donanımlı kurtarıcılar, sis aydınlatma kuleleri ve sıfır açılı kayar platformlar.",
    localAdvice: "Orman ve baraj yolunda kalırsanız en yakın gişe veya tabela numarasını ileterek araç içinde beklemeyiniz.",
    faqs: [
      { q: 'Reşadiye gişelerine kaç dakikada gelirsiniz?', a: '12-15 dakika içinde yanınızdayız.' },
      { q: 'Elektrikli araç çekiyor musunuz?', a: 'Evet, bataryaya zarar vermeyen çekici modu protokolüyle taşıyoruz.' },
      { q: 'Şile yolu bağlantısına çekici gelir mi?', a: 'Evet, Ömerli ve Şile yolu kavşaklarına hızlı servisimiz vardır.' },
      { q: 'Ödeme nasıl yapılır?', a: 'Kredi kartı, FAST veya nakit geçerlidir.' },
      { q: 'Taşıma kaskolu mu?', a: 'Tüm operasyonlarımız nakliyat sigortası güvencesindedir.' }
    ]
  }
];

function generateRegionHtml(reg) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": reg.faqs.map(f => ({
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
      { "@type": "ListItem", "position": 2, "name": "Bölgelerimiz", "item": `${DOMAIN}/bolgeler/index.html` },
      { "@type": "ListItem", "position": 3, "name": `${reg.name} Çekici`, "item": `${DOMAIN}/bolgeler/${reg.slug}.html` }
    ]
  };

  const autoRepairSchema = {
    "@context": "https://schema.org",
    "@type": ["EmergencyService", "AutoRepair", "TowingService"],
    "name": `Kuzey Marmara Çekici - ${reg.name} Oto Çekici & Kurtarma`,
    "telephone": `+${PHONE_RAW}`,
    "url": `${DOMAIN}/bolgeler/${reg.slug}.html`,
    "image": `${DOMAIN}/images/otomobil_cekici-1.webp`,
    "priceRange": "₺₺",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": `${reg.name}`,
      "addressRegion": "İstanbul / Kocaeli",
      "addressCountry": "TR"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${reg.name}`
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "128"
    }
  };

  const otherRegionsList = regions
    .filter(r => r.slug !== reg.slug)
    .slice(0, 8)
    .map(r => `<li><a href="${r.slug}.html" style="color:#0f172a; text-decoration:none; display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f5f9;"><span>📍 ${r.name} Çekici</span> <strong style="color:#ff5500;">${r.eta}</strong></a></li>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${reg.title}</title>
  <meta name="description" content="${reg.metaDesc}">
  <meta name="keywords" content="${reg.keywords}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${DOMAIN}/bolgeler/${reg.slug}.html">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="../images/logo.svg">
  <link rel="icon" type="image/webp" href="../images/logo.webp">
  <link rel="apple-touch-icon" href="../images/apple-touch-icon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${reg.title}">
  <meta property="og:description" content="${reg.metaDesc}">
  <meta property="og:url" content="${DOMAIN}/bolgeler/${reg.slug}.html">
  <meta property="og:image" content="${DOMAIN}/images/otomobil_cekici-1.webp">
  <meta property="og:locale" content="tr_TR">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${reg.title}">
  <meta name="twitter:description" content="${reg.metaDesc}">
  <meta name="twitter:image" content="${DOMAIN}/images/otomobil_cekici-1.webp">

  <!-- Google Fonts & CSS -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org Verileri -->
  <script type="application/ld+json">
  ${JSON.stringify(autoRepairSchema, null, 2)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(breadcrumbSchema, null, 2)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(faqSchema, null, 2)}
  </script>
</head>
<body>

  <!-- Üst Acil Durum Bilgi Şeridi -->
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-inner">
        <div class="top-bar-left">
          <span class="live-badge"><span class="pulse-dot"></span> 7/24 Canlı Nöbetçi Çekici</span>
          <span>${reg.name} & Kuzey Marmara Otoyolunda 10-15 Dk Varış</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="../index.html" class="brand-logo" aria-label="Kuzey Marmara Çekici Ana Sayfa">
          <img src="../images/logo.svg" alt="Kuzey Marmara Çekici Logo" class="brand-logo-img" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">KUZEY MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım & Kurtarma</span>
          </div>
        </a>

        <nav class="main-nav" aria-label="Ana Menü">
          <ul class="nav-list">
            <li><a href="../index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="../hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="index.html" class="nav-link active">Bölgelerimiz</a></li>
            <li><a href="../galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="../blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="../hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="../iletisim.html" class="nav-link">İletişim</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <button type="button" class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat" aria-expanded="false">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Breadcrumb & Hero -->
  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 45px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="../index.html" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <a href="index.html" style="color: #cbd5e1; text-decoration: none;">Bölgelerimiz</a> /
        <span style="color: #ff5500; font-weight: 600;">${reg.name} Oto Çekici</span>
      </nav>
      <div style="max-width: 820px;">
        <span class="badge" style="background: rgba(255,85,0,0.15); color: #ff5500; border: 1px solid rgba(255,85,0,0.3); padding: 5px 12px; border-radius: 999px; font-weight: 700; font-size: 0.8125rem; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 12px;">
          <span class="pulse-dot"></span> 7/24 Canlı Nöbetçi Ekip • ${reg.eta} Varış
        </span>
        <h1 style="font-size: clamp(1.8rem, 4vw, 2.75rem); font-weight: 900; line-height: 1.2; margin-bottom: 15px; letter-spacing: -0.02em;">
          ${reg.name} Oto Çekici & <span style="color: #ff5500;">7/24 Oto Kurtarma</span>
        </h1>
        <p style="font-size: 1.05rem; line-height: 1.6; color: #cbd5e1; margin-bottom: 25px;">
          ${reg.leadText}
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
            <span>Hemen Ara: ${PHONE}</span>
          </a>
          <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
            <span>WhatsApp ile Konum Gönder</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Ana İçerik Alanı -->
  <main class="section">
    <div class="container">
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px;" class="region-page-grid">
        <div class="region-content-col">
          
          <!-- Makale Bloğu -->
          <article class="content-block" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <div style="margin-bottom: 24px;">
              <h2 style="font-size: 1.45rem; font-weight: 800; color: #0f172a; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span style="color: #ff5500;">🚗</span> ${reg.name} Trafik Analizi &amp; Yol Özellikleri
              </h2>
              <p style="font-size: 1rem; line-height: 1.75; color: #334155; margin: 0; text-align: justify;">
                ${reg.trafficAnalysis}
              </p>
            </div>

            <div style="margin-bottom: 24px;">
              <h3 style="font-size: 1.22rem; font-weight: 800; color: #0f172a; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
                <span style="color: #f59e0b;">⚠️</span> ${reg.name} Çevresinde En Sık Yaşanan Arızalar ve Kurtarma Senaryoları
              </h3>
              <p style="font-size: 0.98rem; line-height: 1.75; color: #334155; margin: 0; text-align: justify;">
                ${reg.scenarios}
              </p>
            </div>

            <div style="margin-bottom: 24px;">
              <h3 style="font-size: 1.18rem; font-weight: 800; color: #0f172a; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
                <span style="color: #10b981;">🛡️</span> ${reg.name} Çekici Donanımımız ve Sıfır Hasar Protokolü
              </h3>
              <p style="font-size: 0.98rem; line-height: 1.75; color: #334155; margin: 0; text-align: justify;">
                ${reg.equipmentProtocol}
              </p>
            </div>

            <div style="background: #f8fafc; border-left: 4px solid #ff5500; padding: 20px; border-radius: 8px;">
              <h3 style="font-size: 1.12rem; font-weight: 800; color: #0f172a; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                <span style="color: #ff5500;">💡</span> ${reg.name} Sürücülerine Özel Tavsiyeler &amp; Yetkili Servis Aktarımı
              </h3>
              <p style="font-size: 0.95rem; line-height: 1.7; color: #475569; margin: 0; text-align: justify;">
                ${reg.localAdvice}
              </p>
            </div>
          </article>

          <!-- Gerçek Kurtarma Vakası -->
          <article class="content-block" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span style="background: #0f172a; color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase;">Saha Operasyonu</span>
              <span style="color: #64748b; font-size: 0.875rem;">${reg.name} Bölgesi</span>
            </div>
            <h3 style="font-size: 1.35rem; font-weight: 800; color: #0f172a; margin-bottom: 12px;">
              ${reg.caseTitle}
            </h3>
            <p style="font-size: 1rem; line-height: 1.6; color: #475569; margin-bottom: 18px;">
              ${reg.caseDesc}
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 20px; font-size: 0.875rem; color: #334155; border-top: 1px solid #f1f5f9; padding-top: 15px;">
              <div><strong>Araç:</strong> ${reg.vehicleType}</div>
              <div><strong>Teslim Noktası:</strong> ${reg.deliveryPoint}</div>
              <div><strong>Güvence:</strong> %100 Taşıma Kaskolu Transfer</div>
            </div>
          </article>

          <!-- Sıkça Sorulan Sorular -->
          <article class="content-block" style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 20px;">
              ${reg.name} Çekici Hakkında Sıkça Sorulan Sorular
            </h2>
            <div class="faq-list">
              ${reg.faqs.map((f, idx) => `
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
          </article>

        </div>

        <!-- Sağ Kenar Çubuğu (Sidebar) -->
        <aside class="region-sidebar-col">
          <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 25px; margin-bottom: 25px; position: sticky; top: 90px; box-shadow: 0 10px 25px rgba(0,0,0,0.04);">
            <span style="background: rgba(255,85,0,0.1); color: #ff5500; font-weight: 700; font-size: 0.8rem; padding: 4px 10px; border-radius: 999px; display: inline-block; margin-bottom: 12px;">
              ${reg.name} Nöbetçi Çekici
            </span>
            <h3 style="font-size: 1.3rem; font-weight: 800; color: #0f172a; margin-bottom: 10px;">
              10-15 Dk İntikal Garantisi
            </h3>
            <p style="font-size: 0.9rem; color: #64748b; line-height: 1.5; margin-bottom: 20px;">
              Konumunuzu bildirin, ${reg.name} bölgesindeki en yakın çekicimiz anında hareket etsin.
            </p>
            <a href="tel:${PHONE_RAW}" class="btn btn-call btn-block btn-lg" style="margin-bottom: 10px; text-decoration: none;">
              📞 Hemen Ara: ${PHONE}
            </a>
            <button type="button" class="btn btn-whatsapp btn-block btn-lg btn-send-location">
              💬 WhatsApp ile Konum Gönder
            </button>

            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 20px 0;">

            <h4 style="font-size: 1rem; font-weight: 800; color: #0f172a; margin-bottom: 12px;">
              Hizmet Avantajlarımız
            </h4>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.875rem; color: #334155; line-height: 1.8;">
              <li>✓ %100 Emtia Taşıma Kaskosu</li>
              <li>✓ Şeffaf & Sabit Fiyat Sözü</li>
              <li>✓ Kapıda Kredi Kartı / Mobil POS</li>
              <li>✓ Sıfır Dereceli Rampa (Lüks & Elektrikli)</li>
              <li>✓ 7/24 Kesintisiz Otoyol Nöbeti</li>
            </ul>

            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 20px 0;">

            <h4 style="font-size: 1rem; font-weight: 800; color: #0f172a; margin-bottom: 12px;">
              Komşu Hizmet Bölgelerimiz
            </h4>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem;">
              ${otherRegionsList}
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
            Acil Çağrı: <a href="tel:${PHONE_RAW}" style="color: #ff5500; text-decoration: none;">${PHONE}</a>
          </p>
        </div>

        <div class="footer-links-col">
          <h4 style="color: #fff; font-weight: 800; margin-bottom: 15px;">Hızlı Menü</h4>
          <ul style="list-style: none; padding: 0; line-height: 2; font-size: 0.9rem;">
            <li><a href="../index.html" style="color: #94a3b8; text-decoration: none;">Ana Sayfa</a></li>
            <li><a href="../hizmetler/index.html" style="color: #94a3b8; text-decoration: none;">Hizmetlerimiz</a></li>
            <li><a href="index.html" style="color: #94a3b8; text-decoration: none;">Bölgelerimiz</a></li>
            <li><a href="../galeri.html" style="color: #94a3b8; text-decoration: none;">Galeri</a></li>
            <li><a href="../blog/index.html" style="color: #94a3b8; text-decoration: none;">Blog</a></li>
            <li><a href="../iletisim.html" style="color: #94a3b8; text-decoration: none;">İletişim</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h4 style="color: #fff; font-weight: 800; margin-bottom: 15px;">Öne Çıkan Bölgeler</h4>
          <ul style="list-style: none; padding: 0; line-height: 2; font-size: 0.9rem;">
            <li><a href="kurtkoy-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Kurtköy Çekici</a></li>
            <li><a href="kuzey-marmara-otoyolu-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Kuzey Marmara Otoyolu Çekici</a></li>
            <li><a href="gebze-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Gebze Çekici</a></li>
            <li><a href="pendik-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Pendik Çekici</a></li>
            <li><a href="tem-otoyolu-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">TEM Otoyolu Çekici</a></li>
            <li><a href="cayirova-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Çayırova Çekici</a></li>
          </ul>
        </div>
      </div>

      <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 25px; margin-top: 30px; text-align: center; color: #64748b; font-size: 0.85rem;">
        © 2026 Kuzey Marmara Çekici - Tüm Hakları Saklıdır. 7/24 Acil Oto Kurtarma &amp; Yol Yardım.
      </div>
    </div>
  </footer>

  <!-- Mobil Sabit Alt Bar (Mobile Sticky Dock) -->
  <div class="mobile-sticky-dock">
    <a href="tel:${PHONE_RAW}" class="sticky-dock-btn sticky-call-btn" aria-label="Hemen Ara">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/></svg>
      <span>HEMEN ARA</span>
    </a>
    <button type="button" class="sticky-dock-btn sticky-whatsapp-btn btn-send-location" aria-label="WhatsApp Konum Gönder">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>
      <span>KONUM AT</span>
    </button>
  </div>

  <script src="../js/main.js"></script>
</body>
</html>`;
}

function generateIndexHtml() {
  const cardsHtml = regions.map(r => `
    <div class="region-square-card" data-category="${r.category}">
      <div class="region-square-top">
        <span class="region-square-badge">⏱️ ${r.eta} Varış</span>
        <span class="region-square-icon">📍</span>
      </div>
      <h3 class="region-square-title">${r.name}</h3>
      <p class="region-square-sub">${r.hotspots}</p>
      <div class="region-square-badges">
        <span>7/24 Nöbetçi</span>
        <span>Kaskolu</span>
      </div>
      <div class="region-square-actions">
        <a href="${r.slug}.html" class="btn btn-outline btn-sm">Bölge İncele</a>
        <a href="tel:${PHONE_RAW}" class="btn btn-call btn-sm">Ara</a>
      </div>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hizmet Bölgelerimiz | Kuzey Marmara Çekici - 0533 265 70 89</title>
  <meta name="description" content="Kuzey Marmara Otoyolu, TEM Otoyolu, Kurtköy, Gebze, Pendik, Çayırova ve tüm çevre ilçelerde 7/24 en yakın nöbetçi oto çekici ve kurtarıcı bölgelerimiz.">
  <link rel="canonical" href="${DOMAIN}/bolgeler/index.html">
  <link rel="icon" type="image/svg+xml" href="../images/logo.svg">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap">
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-inner">
        <div class="top-bar-left">
          <span class="live-badge"><span class="pulse-dot"></span> 7/24 Canlı Nöbetçi Çekici</span>
          <span>15 Stratejik Bölgede 10-15 Dk İntikal</span>
        </div>
      </div>
    </div>
  </div>

  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="../index.html" class="brand-logo">
          <img src="../images/logo.svg" alt="Kuzey Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">KUZEY MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım & Kurtarma</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="../index.html" class="nav-link">Ana Sayfa</a></li>
            <li><a href="../hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="index.html" class="nav-link active">Bölgelerimiz</a></li>
            <li><a href="../galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="../blog/index.html" class="nav-link">Blog</a></li>
            <li><a href="../hakkimizda.html" class="nav-link">Hakkımızda</a></li>
            <li><a href="../iletisim.html" class="nav-link">İletişim</a></li>
          </ul>
        </nav>
        <div class="header-actions">
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
        <span style="color: #ff5500; font-weight: 600;">Bölgelerimiz</span>
      </nav>
      <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 900; margin-bottom: 15px;">
        Kuzey Marmara &amp; TEM <span style="color: #ff5500;">Hizmet Bölgelerimiz</span>
      </h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 780px;">
        Kuzey Marmara Otoyolu, TEM Otoyolu gişeleri, Kurtköy, Gebze, Pendik, Çayırova ve çevre sanayi arterlerinde 7/24 konuşlu filomuzla en yakın oto kurtarıcı desteği.
      </p>
    </div>
  </section>

  <main class="section">
    <div class="container">
      
      <!-- Arama ve Filtreleme -->
      <div class="search-first-box" style="margin-bottom: 30px;">
        <input type="text" id="region-search-input" placeholder="Hangi bölgede yolda kaldınız? (Örn: Kurtköy, Gebze, KMO, Pendik...)" aria-label="Bölge Arama">
        <button type="button" id="region-search-clear" class="search-clear-btn" aria-label="Temizle">✕</button>
      </div>

      <div class="region-filter-tabs" style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom: 30px;">
        <button type="button" class="filter-tab-btn active" data-filter="all">Tüm Bölgeler (${regions.length})</button>
        <button type="button" class="filter-tab-btn" data-filter="otoyol-giseler">Otoyol &amp; Gişeler</button>
        <button type="button" class="filter-tab-btn" data-filter="anadolu-merkez">Anadolu Yakası</button>
        <button type="button" class="filter-tab-btn" data-filter="kocaeli-sanayi">Kocaeli &amp; Gebze OSB</button>
      </div>

      <div class="regions-square-grid" id="regions-container">
        ${cardsHtml}
      </div>

      <div id="no-search-results" style="display: none; text-align: center; padding: 40px; background: #fff; border-radius: 16px; border: 1px solid #e2e8f0; margin-top: 20px;">
        <h3 style="color: #0f172a; margin-bottom: 10px;">Aradığınız bölge listede bulunamadı mı?</h3>
        <p style="color: #64748b; margin-bottom: 20px;">Tüm hat boyunca mobil araçlarımız dolaşmaktadır. Hemen arayarak konum bildirebilirsiniz.</p>
        <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">📞 Hemen Bizi Arayın: ${PHONE}</a>
      </div>

    </div>
  </main>

  <!-- Mobil Sabit Bar -->
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

  <script src="../js/main.js"></script>
</body>
</html>`;
}

// Üretim Başlat
const outDir = path.join(__dirname, '..', 'bolgeler');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('🚀 Kuzey Marmara Çekici Bölge Sayfaları Üretiliyor...');

regions.forEach(reg => {
  const filePath = path.join(outDir, `${reg.slug}.html`);
  fs.writeFileSync(filePath, generateRegionHtml(reg), 'utf8');
  console.log(`✓ Üretildi: bolgeler/${reg.slug}.html`);
});

fs.writeFileSync(path.join(outDir, 'index.html'), generateIndexHtml(), 'utf8');
console.log('✓ Üretildi: bolgeler/index.html (Dizin)');

console.log('🎉 Toplam ' + (regions.length + 1) + ' bölge sayfası başarıyla tamamlandı!');
