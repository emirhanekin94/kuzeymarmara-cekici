/**
 * KUZEY MARMARA OTO ÇEKİCİ - 7/24 BÖLGE SAYFALARI ÜRETİM MOTORU
 * Tel & WhatsApp: 0536 769 43 24
 */

const fs = require('fs');
const path = require('path');
const { REGION_EXTENSIONS } = require('../data/region_extensions.js');

const PHONE = '0536 769 43 24';
const PHONE_RAW = '905367694324';
const DOMAIN = 'https://marmaracekici.com';

const waSvg = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: middle; margin-right: 6px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>`;

const regions = [
  {
    slug: 'kurtkoy-oto-cekici',
    name: 'Kurtköy',
    category: 'anadolu-merkez',
    categoryLabel: 'Kurtköy & Viaport',
    image: 'kapak-fotografi.webp',
    title: 'Kurtköy Çekici 7/24 | 10 Dk En Yakın Çekici - 0536 769 43 24',
    metaDesc: 'Kurtköy çekici, Kurtköy oto çekici ve 7/24 acil oto kurtarma. Viaport, Yenişehir, Çamlık, TEM ve KMO gişelerinde 10-15 dakikada intikal: 0536 769 43 24.',
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
    localAdvice: "Kurtköy gişeleri ve Ankara Caddesi üzerindeki nöbet noktalarımız sayesinde çağrınızdan sonra ortalama 8-12 dakika içinde yanınızda oluyoruz. Aracınızı Pendik Oto Sanayi, Kartal Oto Sanayi veya Sabiha Gökçen çevresindeki dilediğiniz yetkili servise güvenle ulaştırıyoruz. Yolda kaldıysanız güvenli bir alana geçip 0536 769 43 24 numaramızdan canlı konum paylaşınız.",
    distanceTable: [
      { place: 'Viaport AVM Çevresi', km: 3, time: '6-8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Sabiha Gökçen Havalimanı', km: 4, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Pendik Oto Sanayi', km: 8, time: '12 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Tuzla Deri OSB', km: 14, time: '16 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Gebze OSB (GOSB)', km: 22, time: '20 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Kurtköy oto çekici kaç dakikada yanıma gelir?', a: 'Kurtköy merkez ve Viaport çevresinde hazır bekleyen nöbetçi ekiplerimizle ortalama 10 ila 15 dakika içinde adresinizdeyiz.' },
      { q: 'Viaport kapalı otoparkından araç çekebiliyor musunuz?', a: 'Evet, alçak tavanlı kapalı otopark kurtarıcılarımızla yer altı katlarından hasarsız araç tahliyesi yapıyoruz.' },
      { q: 'Kurtköy çekici fiyatı ne kadar?', a: 'Mesafe, araç türü ve varış noktasına göre şeffaf sabit fiyat tarifemiz geçerlidir. Telefonda belirtilen fiyat harici asla sürpriz ücret çıkmaz.' },
      { q: 'Akü takviyesi ve yerinde lastik tamiri var mı?', a: 'Evet, 12V/24V taşınabilir dijital booster ile akü takviyesi ve yerinde stepne değişimi desteğimiz 7/24 aktiftir.' },
      { q: 'Taşıma esnasında ödeme kredi kartıyla yapılabilir mi?', a: 'Evet, kurtarıcı araçlarımızda mobil POS cihazı bulunmakta olup tüm kredi kartlarına tek çekim ve taksit imkanı mevcuttur.' },
      { q: 'Aracımı dilediğim servise götürebilir miyim?', a: 'Evet, aracınızı Pendik, Kartal veya Gebze\'deki dilediğiniz yetkili ya da özel servise güvenle teslim ediyoruz.' }
    ]
  },
  {
    slug: 'kuzey-marmara-otoyolu-oto-cekici',
    name: 'Kuzey Marmara',
    category: 'otoyol-giseler',
    categoryLabel: 'KMO & Gişeler',
    image: 'otoyol-cekici.webp',
    title: 'Kuzey Marmara Çekici 7/24 | 15 Dk Kurtarma - 0536 769 43 24',
    metaDesc: 'Kuzey Marmara çekici, KMO gişeleri, tüneller, viyadükler ve dinlenme tesislerinde 7/24 acil oto kurtarıcı. 15 dakikada intikal: 0536 769 43 24.',
    keywords: 'kuzey marmara çekici, marmara çekici, kmo çekici, kmo oto kurtarma, kuzey marmara oto kurtarıcı, otoban çekici kuzey marmara',
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
    localAdvice: "KMO'da aracınız arızalanırsa derhal dörtlülerinizi yakın, aracı emniyet şeridine çekip yolcularla birlikte çelik bariyerlerin arkasına geçiniz. Karayolları kuralı gereği üçgen reflektörü 150 metre geriye yerleştiriniz ve 0536 769 43 24 numaramızı arayarak otoyol kilometre taşını veya WhatsApp konumunuzu iletiniz.",
    distanceTable: [
      { place: 'Kurnaköy Gişeleri', km: 6, time: '10 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Mecidiye Dinlenme Tesisi', km: 12, time: '12 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Reşadiye Gişeleri', km: 18, time: '15 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Akse Gişeleri (Şekerpınar)', km: 24, time: '18 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Dilovası Viyadüğü', km: 32, time: '22 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Kuzey Marmara Otoyolu gişelerine ne kadar sürede varırsınız?', a: 'Otoyol çıkış ve gişe noktalarında konuşlu nöbetçi ekiplerimizle ortalama 12-15 dakikada intikal ediyoruz.' },
      { q: 'Otoyol çekici fiyatı nasıl hesaplanır?', a: 'Şeffaf taban ücret ve gidilecek km tarifesiyle telefonda net fiyat verilir; sürpriz ek ücret asla talep edilmez.' },
      { q: 'Elektrikli ve spor araçlar için sıfır açılı rampa var mı?', a: 'Evet, basık şaseli ve bataryalı araçlara özel sıfır dereceli hidrolik kayar platformlarımız mevcuttur.' },
      { q: 'Kaza durumunda vinçli kurtarma sevk edebilir misiniz?', a: 'Evet, şarampol veya bariyer sıkışması için ağır hizmet vinçli kurtarıcılarımız 7/24 hazırdır.' },
      { q: 'Taşıma kaskolu mu?', a: 'Evet, yükleme anından teslimata kadar tüm araçlar %100 nakliyat emtia sigortası kapsamındadır.' },
      { q: 'Otoyolda kredi kartı ile ödeme yapabilir miyim?', a: 'Evet, kurtarıcılarımızda bulunan mobil POS ile araç başında güvenle kredi kartı ile ödeme yapabilirsiniz.' }
    ]
  },
  {
    slug: 'tem-otoyolu-oto-cekici',
    name: 'TEM Otoyolu',
    category: 'otoyol-giseler',
    categoryLabel: 'TEM & Otoban',
    image: 'otoyol-yardim-cekici.webp',
    title: 'TEM Otoyolu Çekici 7/24 | Kurtköy - Gebze Hattı - 0536 769 43 24',
    metaDesc: 'TEM Otoyolu çekici, Kurtköy, Şekerpınar, Gebze, Pendik ve Tuzla dinlenme tesislerinde 7/24 acil oto kurtarıcı. 10-15 dakikada intikal: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Kurtköy TEM Çıkışı', km: 5, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Mehmetçik Vakfı Tesisleri', km: 8, time: '10 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Şekerpınar Gişeleri', km: 14, time: '12 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Gebze Doğu / Batı Gişeler', km: 20, time: '16 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Çamlıca Gişeler Hattı', km: 25, time: '20 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'TEM Otoyolu çekicisi kaç dakikada gelir?', a: 'TEM Kurtköy ve Şekerpınar nöbet noktalarımızdan ortalama 10-15 dakikada intikal sağlanır.' },
      { q: 'Mehmetçik Vakfı tesislerine çekici gelir mi?', a: 'Evet, TEM üzerindeki tüm dinlenme tesislerine dakikalar içinde ulaşıyoruz.' },
      { q: 'Ödeme kredi kartıyla yapılabilir mi?', a: 'Evet, araç başında mobil POS ile kredi kartı veya havale/FAST kabul edilmektedir.' },
      { q: 'Minibüs ve kamyonet çekiyor musunuz?', a: 'Evet, geniş tablalı çekicilerimiz hafif ticari ve minibüsleri rahatlıkla taşır.' },
      { q: 'Gece nöbetçi çekiciniz var mı?', a: '7 gün 24 saat kesintisiz nöbetçi filomuz sahadadır.' },
      { q: 'Telefonda verilen fiyat değişir mi?', a: 'Hayır, konumunuza göre teyit edilen fiyat sabittir, kapıda sürprizle karşılaşmazsınız.' }
    ]
  },
  {
    slug: 'gebze-oto-cekici',
    name: 'Gebze',
    category: 'kocaeli-sanayi',
    categoryLabel: 'Gebze & Sanayi',
    image: 'ticari-cekici-1.webp',
    title: 'Gebze Çekici 7/24 | En Yakın Gebze Çekici - 0536 769 43 24',
    metaDesc: 'Gebze çekici, Gebze oto çekici, Gebze OSB, Barış Mahallesi, Eskihisar ve sanayi sitelerinde 7/24 acil oto kurtarma ve yol yardım. 10 Dk intikal: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Gebze OSB (GOSB)', km: 6, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Gebze Küçük Sanayi Sitesi', km: 4, time: '7 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Eskihisar Feribot İskelesi', km: 7, time: '10 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Çayırova Akse Mahallesi', km: 9, time: '12 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Dilovası Mermerciler OSB', km: 12, time: '14 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Gebze içine çekici ne kadar sürede gelir?', a: 'Gebze merkezdeki nöbetçi ekibimiz ortalama 8-10 dakika içinde yanınızdadır.' },
      { q: 'Eskihisar feribot yolunda çekici hizmetiniz var mı?', a: 'Evet, Eskihisar iskelesi ve feribot bekleme alanında 7/24 aktif aracımız vardır.' },
      { q: 'Gebze Sanayi Sitesine araç çeker misiniz?', a: 'Evet, talep ettiğiniz her sanayi ustasına veya yetkili servise teslimat yapıyoruz.' },
      { q: 'Akü takviyesi yapıyor musunuz?', a: 'Evet, yerinde 12V/24V taşınabilir booster ile hızlı çalıştırma sağlıyoruz.' },
      { q: 'Fiyatlar sabit mi?', a: 'Telefonda teyit edilen fiyat sabittir, sonradan ek sürpriz ücret talep edilmez.' },
      { q: 'Ağır vasıta veya kamyonet çekiyor musunuz?', a: 'Evet, çift çeker vinçli ağır vasıta kurtarıcılarımızla ticari araçları da taşıyoruz.' }
    ]
  },
  {
    slug: 'pendik-oto-cekici',
    name: 'Pendik',
    category: 'anadolu-merkez',
    categoryLabel: 'Pendik & Sahil',
    image: 'otomobil-cekici-1.webp',
    title: 'Pendik Çekici 7/24 | En Yakın Pendik Çekici - 0536 769 43 24',
    metaDesc: 'Pendik çekici, Pendik oto çekici, Kaynarca, Velibaba, Kurtköy yolu, E-5 ve Pendik Marina mevkiinde 7/24 kaskolu acil oto kurtarma: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Pendik Sahil & Marina', km: 3, time: '7 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Kaynarca D-100 Yan Yol', km: 4, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Pendik Oto Sanayi Sitesi', km: 5, time: '9 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Kurtköy Viaport AVM', km: 9, time: '12 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Tuzla İçmeler Köprüsü', km: 10, time: '13 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Pendik oto çekici kaç dakikada gelir?', a: 'Konumunuza göre ortalama 8 ila 12 dakika içinde yanınızdayız.' },
      { q: 'Pendik Oto Sanayi Sitesine çekim yapıyor musunuz?', a: 'Evet, sanayi sitelerine ve özel/yetkili servislere öncelikli teslimat yapıyoruz.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, seyyar mobil POS cihazlarımızla tüm banka kartları geçerlidir.' },
      { q: 'Motosiklet çekiyor musunuz?', a: 'Özel ön teker sabitleme sehpamızla motosikletleri dik ve hasarsız taşıyoruz.' },
      { q: 'Fiyat ne kadar?', a: 'Kısa mesafe taban ücretimiz ve şeffaf km tarifemiz uygulanır; telefonda teyit edilen fiyat sabittir.' },
      { q: 'Sahil yolunda gece hizmetiniz var mı?', a: 'Evet, gece-gündüz farkı olmadan 7/24 kesintisiz nöbetçiyiz.' }
    ]
  },
  {
    slug: 'cayirova-oto-cekici',
    name: 'Çayırova',
    category: 'kocaeli-sanayi',
    categoryLabel: 'Çayırova & Şekerpınar',
    image: 'ticari-arac-cekici.webp',
    title: 'Çayırova Çekici 7/24 | En Yakın Çayırova Çekici - 0536 769 43 24',
    metaDesc: 'Çayırova çekici, Çayırova oto çekici, Akse Mahallesi, Yenimahalle, Şekerpınar otoban bağlantısında 7/24 oto kurtarma ve yol yardım: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Akse Mahallesi Merkez', km: 3, time: '6 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Şekerpınar TEM Gişeleri', km: 4, time: '7 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Gebze Küçük Sanayi', km: 8, time: '11 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Tuzla Deri OSB', km: 9, time: '12 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Dilovası Rampaları', km: 14, time: '16 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Çayırova çekici kaç dakikada gelir?', a: 'Ortalama 10 dakika içinde adresinizdeyiz.' },
      { q: 'Kocaeli sınırında hizmet veriyor musunuz?', a: 'Evet, Çayırova ve tüm Kocaeli giriş aksında aktifiz.' },
      { q: 'Lastik değişimi yapıyor musunuz?', a: 'Evet, yerinde stepne montajı ve hava desteği sağlıyoruz.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile araç başında ödeme yapabilirsiniz.' },
      { q: 'Fiyat tarifesi nasıl?', a: 'Net ve şeffaf km bazlı sabit fiyat veriyoruz.' },
      { q: 'Ağır vasıta desteği var mı?', a: 'Evet, kamyonet ve hafif ticari araçlar için özel donanımlı araçlarımız mevcuttur.' }
    ]
  },
  {
    slug: 'sabiha-gokcen-oto-cekici',
    name: 'Sabiha Gökçen Havalimanı',
    category: 'anadolu-merkez',
    categoryLabel: 'Havalimanı & Yolcu',
    image: 'havalimani-cekici.webp',
    title: 'Sabiha Gökçen Havalimanı Çekici 7/24 | 10 Dk - 0536 769 43 24',
    metaDesc: 'Sabiha Gökçen oto çekici, havalimanı otoparkı, gelen-giden yolcu katı, kargo alanı ve bağlantı yolunda 7/24 acil çekici ve akü takviye: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Havalimanı Katlı Otoparkları', km: 1, time: '5 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Kurtköy Merkez', km: 4, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Viaport AVM', km: 5, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Pendik Merkez', km: 11, time: '14 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Tuzla İçmeler Sanayi', km: 13, time: '15 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Havalimanı katlı otoparkına çekici girer mi?', a: 'Evet, alçak tavan kurtarıcımızla otopark katlarından hasarsız tahliye yapıyoruz.' },
      { q: 'Akü takviyesi ne kadar sürer?', a: 'Otoparka girişimizle birlikte 5 dakika içinde aracınızı çalıştırıyoruz.' },
      { q: 'Uçuş saatinde acil yetişme desteği var mı?', a: 'Evet, aracı güvenle teslim alıp sizi terminale yönlendiriyoruz.' },
      { q: 'Ödeme nasıl yapılır?', a: 'İster kredi kartı, ister nakit veya FAST ile kolayca ödeme yapabilirsiniz.' },
      { q: 'Gece çekici var mı?', a: 'Havalimanı aksında 7/24 kesintisiz nöbetçiyiz.' },
      { q: 'Kargo sahasına araç gönderebiliyor musunuz?', a: 'Evet, kargo sahası ve havalimanı gümrük bölgesine giriş iznine sahip araçlarımızla hizmet veriyoruz.' }
    ]
  },
  {
    slug: 'tuzla-oto-cekici',
    name: 'Tuzla',
    category: 'anadolu-merkez',
    categoryLabel: 'Tuzla & İçmeler',
    image: 'otomobil-cekici-2.webp',
    title: 'Tuzla Oto Çekici 7/24 | En Yakın Tuzla Çekici - 0536 769 43 24',
    metaDesc: 'Tuzla çekici, Tuzla oto çekici, İçmeler, Aydınlı, Tepeören, Deri OSB, Formula 1 yolu ve D-100 Tuzla geçişinde 7/24 oto kurtarma: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Tuzla İçmeler Sanayi', km: 3, time: '7 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Tuzla Marina & Sahil', km: 5, time: '9 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Tuzla Deri OSB', km: 8, time: '11 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Tepeören / Formula 1 Yolu', km: 12, time: '14 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Pendik Sanayi Sitesi', km: 9, time: '12 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Tuzla İçmeler sanayiye araç çeker misiniz?', a: 'Evet, İçmeler ve Kartal sanayi sitelerine direkt teslimat yapıyoruz.' },
      { q: 'Tepeören ve Akfırat bölgesine servisiniz var mı?', a: 'Evet, Formula 1 ve Tepeören villalar bölgesine 12 dakikada ulaşıyoruz.' },
      { q: 'Taşıma kaskolu mu?', a: 'Tüm araçlarımız %100 emtia sigortasıyla taşınır.' },
      { q: 'Akü takviyesi var mı?', a: 'Evet, taşınabilir dijital cihazla yerinde takviye sağlıyoruz.' },
      { q: 'Ödeme kredi kartıyla olur mu?', a: 'Evet, bölgedeki nöbetçi araçlarımızda mobil POS ile tüm kartlar kabul edilir.' },
      { q: 'Tersane bölgesine araç girebiliyor mu?', a: 'Evet, Tuzla Tersaneler bölgesine uygun izinli araçlarımız mevcuttur.' }
    ]
  },
  {
    slug: 'sekerpinar-oto-cekici',
    name: 'Şekerpınar',
    category: 'otoyol-giseler',
    categoryLabel: 'Şekerpınar & Gişeler',
    image: 'ticari-cekici-2.webp',
    title: 'Şekerpınar Oto Çekici 7/24 | TEM & KMO Kavşağı - 0536 769 43 24',
    metaDesc: 'Şekerpınar çekici, Şekerpınar oto çekici, TEM gişeleri, KMO bağlantısı, lojistik depolar ve sanayi bölgesinde 7/24 oto kurtarma: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Şekerpınar TEM Gişeleri', km: 2, time: '5 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'TAYSAD OSB Sanayi', km: 4, time: '7 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Çayırova Akse Mahallesi', km: 5, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Gebze Organize Sanayi', km: 8, time: '11 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'KMO Akse Gişe Bağlantısı', km: 5, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Şekerpınar gişelerine kaç dakikada gelirsiniz?', a: 'Trafik durumuna göre ortalama 8 ila 10 dakika içinde ilgili gişelerdeyiz.' },
      { q: 'Kamyon ve minibüs çekiyor musunuz?', a: 'Evet, ağır vasıta ve hafif ticari kurtarıcılarımız mevcuttur.' },
      { q: 'Fiyatlar sabit mi?', a: 'Telefonda teyit edilen fiyat sabittir; sürpriz ek ücret çıkmaz.' },
      { q: 'Gece çekici var mı?', a: '7/24 nöbetçi ekibimiz hazır beklemektedir.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile tüm kartlar geçerlidir.' },
      { q: 'Lojistik depolar bölgesine geliyor musunuz?', a: 'Evet, Şekerpınar\'daki tüm antrepo ve lojistik depolara anında servisimiz vardır.' }
    ]
  },
  {
    slug: 'dilovasi-oto-cekici',
    name: 'Dilovası',
    category: 'kocaeli-sanayi',
    categoryLabel: 'Dilovası & Viyadük',
    image: 'kurtarma-vinc.webp',
    title: 'Dilovası Oto Çekici 7/24 | Viyadük & Osmangazi - 0536 769 43 24',
    metaDesc: 'Dilovası çekici, Dilovası oto çekici, D-100 rampaları, Mermerciler OSB, KMO Dilovası viyadüğü ve Osmangazi Köprüsü çıkışında 7/24 acil kurtarma: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Dilovası Dik Rampası', km: 3, time: '7 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Mermerciler OSB', km: 5, time: '9 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Osmangazi Köprü Çıkışı', km: 6, time: '10 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Gebze Küçük Sanayi', km: 11, time: '14 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Körfez Gişeler Hattı', km: 16, time: '17 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Dilovası rampasında çekici ne kadar sürede ulaşır?', a: '12-15 dakika içinde olay yerindeyiz.' },
      { q: 'Osmangazi Köprüsü çıkışına çekici gelir mi?', a: 'Evet, köprü çıkışı ve gişelerine acil intikal sağlıyoruz.' },
      { q: 'Vinçli kurtarma var mı?', a: 'Şarampol ve bariyer durumları için vinçli araçlarımız hazırdır.' },
      { q: 'Ödeme nasıl yapılır?', a: 'Kredi kartı, nakit veya FAST geçerlidir.' },
      { q: 'Taşıma sigortalı mı?', a: '%100 emtia taşıma sigortalıdır.' },
      { q: 'Tır ve kamyon kurtarma yapıyor musunuz?', a: 'Evet, ağır hizmet vinç tertibatımızla yüklü tır ve kamyonları da emniyetle çekiyoruz.' }
    ]
  },
  {
    slug: 'sultanbeyli-oto-cekici',
    name: 'Sultanbeyli',
    category: 'anadolu-merkez',
    categoryLabel: 'Sultanbeyli & TEM',
    image: 'otomobil-cekici-4.webp',
    title: 'Sultanbeyli Oto Çekici 7/24 | En Yakın Çekici - 0536 769 43 24',
    metaDesc: 'Sultanbeyli çekici, Sultanbeyli oto çekici, TEM Sultanbeyli gişeleri, Fatih Bulvarı, Hasanpaşa ve KMO Paşaköy bağlantısında 7/24 acil kurtarma: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Sultanbeyli TEM Gişeleri', km: 3, time: '6 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Fatih Bulvarı Merkez', km: 4, time: '7 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Paşaköy KMO Katılımı', km: 7, time: '10 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Kurtköy Viaport AVM', km: 10, time: '13 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Samandıra Sanayi Bölgesi', km: 8, time: '11 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Sultanbeyli çekici kaç dakikada gelir?', a: 'Ortalama 8-10 dakika içinde yanınızdayız.' },
      { q: 'TEM gişelerine çekici sevk edilir mi?', a: 'Evet, gişelere dakikalar içinde ulaşıyoruz.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Mobil POS ile tüm kredi kartları geçerlidir.' },
      { q: 'Lastik tamiri yapıyor musunuz?', a: 'Yerinde stepne değişimi ve hava desteği veriyoruz.' },
      { q: 'Fiyat tarifesi nedir?', a: 'Sabit taban ücret ve şeffaf km tarifesi uygulanır; telefonda teyit edilen fiyat sabittir.' },
      { q: 'Motosiklet çekiyor musunuz?', a: 'Evet, özel sabitleme sehpalı araçlarımızla motosiklet taşıyoruz.' }
    ]
  },
  {
    slug: 'sancaktepe-oto-cekici',
    name: 'Sancaktepe',
    category: 'anadolu-merkez',
    categoryLabel: 'Sancaktepe & Samandıra',
    image: 'suv-cekici.webp',
    title: 'Sancaktepe Oto Çekici 7/24 | Samandıra & Paşaköy - 0536 769 43 24',
    metaDesc: 'Sancaktepe çekici, Sancaktepe oto çekici, Samandıra gişeleri, Paşaköy KMO ayrımı, Sarıgazi ve Yenidoğan mevkiinde 7/24 acil kurtarma: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Samandıra TEM Gişeleri', km: 3, time: '6 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Paşaköy KMO Gişeleri', km: 6, time: '9 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Sarıgazi Meydan', km: 5, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Sultanbeyli Merkez', km: 8, time: '11 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Kurtköy Viaport', km: 12, time: '14 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Samandıra gişelerine ne kadar sürede varırsınız?', a: 'Ortalama 8-10 dakika içinde gişelerdeyiz.' },
      { q: 'Paşaköy KMO bağlantısında çekici var mı?', a: 'Evet, Paşaköy ayrımında nöbetçi aracımız bulunmaktadır.' },
      { q: 'Fiyatlar sabit mi?', a: 'Telefonda teyit edilen fiyat sabittir.' },
      { q: 'Kartla ödeme var mı?', a: 'Evet, mobil POS geçerlidir.' },
      { q: 'Akü takviyesi yapılır mı?', a: 'Yerinde dijital booster ile marş basılır.' },
      { q: 'Dudullu Sanayi Sitesine araç çeker misiniz?', a: 'Evet, Dudullu OSB veya Kartal sanayilerine kaskolu teslimat yapıyoruz.' }
    ]
  },
  {
    slug: 'kurnakoy-mecidiye-oto-cekici',
    name: 'Kurnaköy & Mecidiye',
    category: 'otoyol-giseler',
    categoryLabel: 'Kurnaköy Gişeleri',
    image: 'oto-kurtarici.webp',
    title: 'Kurnaköy & Mecidiye Çekici 7/24 | KMO Gişeler - 0536 769 43 24',
    metaDesc: 'Kurnaköy çekici, Mecidiye dinlenme tesisi çekici, KMO Kurnaköy gişeleri ve Akfırat bağlantısında 7/24 acil otoyol kurtarıcı: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Kurnaköy Gişeleri', km: 2, time: '5 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Mecidiye Dinlenme Tesisleri', km: 5, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Kurtköy Gişeleri', km: 8, time: '11 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Akfırat / Tepeören', km: 10, time: '13 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Reşadiye Gişeleri', km: 16, time: '16 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Kurnaköy gişelerine çekici kaç dakikada gelir?', a: 'Ortalama 10-12 dakika içinde yanınızdayız.' },
      { q: 'Mecidiye tesislerine servisiniz var mı?', a: 'Evet, dinlenme tesisine dakikalar içinde giriyoruz.' },
      { q: 'Otoyol çekici ücreti nedir?', a: 'Şeffaf ve sabit km tarifesi geçerlidir.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile araç başında ödeyebilirsiniz.' },
      { q: 'Bölgenizde elektrikli araç çekiyor musunuz?', a: 'Özel rampa aparatıyla bataryayı koruyarak çekiyoruz.' },
      { q: 'Gişede yakıt bittiğinde takviye yapıyor musunuz?', a: 'Evet, acil yakıt ikmali desteğimiz bulunmaktadır.' }
    ]
  },
  {
    slug: 'darica-oto-cekici',
    name: 'Darıca',
    category: 'kocaeli-sanayi',
    categoryLabel: 'Darıca & Eskihisar',
    image: 'otomobil-cekici-5.webp',
    title: 'Darıca Oto Çekici 7/24 | Bayramoğlu & Sahil - 0536 769 43 24',
    metaDesc: 'Darıca çekici, Darıca oto çekici, Bayramoğlu, Kazım Karabekir, Nenehatun, Darıca sahil ve Eskihisar aksında 7/24 oto kurtarma: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Bayramoğlu Sahil Yolu', km: 3, time: '7 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Darıca Millet Bahçesi', km: 4, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Eskihisar Feribot İskelesi', km: 5, time: '9 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Gebze Küçük Sanayi', km: 8, time: '12 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Çayırova Köprüsü', km: 9, time: '13 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Darıca çekici ne kadar sürede gelir?', a: 'Ortalama 10-12 dakika içinde adresinizdeyiz.' },
      { q: 'Bayramoğlu yarımadasına araç girer mi?', a: 'Evet, ada içine özel uygun boyutlu kurtarıcımız sevk edilir.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile tüm kartlar kabul edilir.' },
      { q: 'Fiyat tarifesi nasıl?', a: 'Mesafe bazlı net sabit fiyat verilir.' },
      { q: 'Lastik yardımı var mı?', a: 'Yerinde stepne değişimi ve hava desteği sağlanır.' },
      { q: 'Eskihisar feribot kuyruğunda kaldım, gelir misiniz?', a: 'Evet, feribot bekleme hattında dakikalar içinde müdahale ediyoruz.' }
    ]
  },
  {
    slug: 'omerli-resadiye-oto-cekici',
    name: 'Ömerli & Reşadiye',
    category: 'otoyol-giseler',
    categoryLabel: 'Ömerli & KMO',
    image: 'suv-cekici-1.webp',
    title: 'Ömerli & Reşadiye Çekici 7/24 | KMO & Orman Yolu - 0536 769 43 24',
    metaDesc: 'Ömerli çekici, Reşadiye çekici, Kuzey Marmara Otoyolu Reşadiye gişeleri, Şile yolu bağlantısı ve orman bölgesinde 7/24 acil kurtarma: 0536 769 43 24.',
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
    distanceTable: [
      { place: 'Reşadiye KMO Gişeleri', km: 3, time: '7 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Ömerli Baraj Yolu', km: 5, time: '9 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Hüseyinli Kavşağı', km: 8, time: '11 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Paşaköy Gişeleri', km: 14, time: '15 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Kurtköy Merkez', km: 18, time: '18 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Reşadiye gişelerine kaç dakikada gelirsiniz?', a: '12-15 dakika içinde yanınızdayız.' },
      { q: 'Elektrikli araç çekiyor musunuz?', a: 'Evet, bataryaya zarar vermeyen çekici modu protokolüyle taşıyoruz.' },
      { q: 'Şile yolu bağlantısına çekici gelir mi?', a: 'Evet, Ömerli ve Şile yolu kavşaklarına hızlı servisimiz vardır.' },
      { q: 'Ödeme nasıl yapılır?', a: 'Kredi kartı, FAST veya nakit geçerlidir.' },
      { q: 'Taşıma kaskolu mu?', a: 'Tüm operasyonlarımız nakliyat sigortası güvencesindedir.' },
      { q: 'Gece orman yolunda mahsur kalan araca gelir misiniz?', a: 'Evet, 4x4 kurtarıcılarımızla zorlu arazi ve orman yollarına 7/24 müdahale ediyoruz.' }
    ]
  },
  {
    slug: 'kartal-oto-cekici',
    name: 'Kartal',
    category: 'anadolu-merkez',
    categoryLabel: 'Kartal & Yakacık',
    image: 'oto-kurtarma.webp',
    title: 'Kartal Oto Çekici 7/24 | 10 Dk En Yakın Çekici - 0536 769 43 24',
    metaDesc: 'Kartal çekici, Samandıra KMO bağlantısı, Yakacık, Soğanlık ve E-5 hattında 7/24 acil oto kurtarıcı. 10-15 dakikada intikal: 0536 769 43 24.',
    keywords: 'kartal çekici, kartal oto çekici, yakacık çekici, samandıra kmo çekici, soğanlık çekici, kartal acil çekici, kartal oto kurtarma',
    eta: '10 - 15 Dk',
    caseTitle: 'Samandıra KMO Bağlantısında Şanzıman Kilitlenmesi',
    caseDesc: 'Samandıra viyadük ayrımında şanzımanı kilitlenen binek araç için ekibimiz 11 dakikada intikal ederek hidrolik kayar platforma hasarsız yükleme yapmış ve Kartal Sanayi Sitesi\'ne güvenle ulaştırmıştır.',
    vehicleType: 'B-Segment Hatchback',
    deliveryPoint: 'Kartal Oto Sanayi Sitesi',
    leadText: 'Kartal merkez, Samandıra KMO bağlantı yolu, Yakacık yokuşları, Soğanlık ve E-5 koridorunda konuşlu nöbetçi ekiplerimizle 10-15 dakikada yanınızdayız.',
    hotspots: 'Samandıra KMO Bağlantısı, Yakacık Rampaları, Kartal Köprüsü, Soğanlık E-5, Kartal Sahil Yolu',
    trafficAnalysis: "Kartal, Anadolu Yakası'nın en kritik kavşaklarından biri olup Samandıra üzerinden Kuzey Marmara Otoyolu'na, Yakacık üzerinden TEM otoyoluna ve güneyden D-100 (E-5) karayoluna bağlanan yoğun bir transit artere sahiptir. Yakacık yokuşlarında hararet ve debriyaj balatası arızaları, Samandıra gişe bağlantısında ise ani dur-kalk trafiğine bağlı tampon sürtmeleri sıkça yaşanır.",
    scenarios: "Yakacık rampalarında hararet ve debriyaj yanması, Samandıra KMO gişe çıkışında şanzıman ve aks kilitlenmesi, Soğanlık yan yol bağlantılarında küçük hasarlı çarpışmalar.",
    equipmentProtocol: "Dar sokaklar için hidrolik kayar platformlar, Samandıra otoyol bağlantısı için yüksek tonajlı kurtarıcılar ve dijital akü şarj destek üniteleri.",
    localAdvice: "Kartal E-5 veya Samandıra bağlantısında arızalanan sürücülerin dörtlülerini yakıp güvenlik şeridine yanaşmaları ve bariyer arkasında beklemeleri hayati önem taşır.",
    distanceTable: [
      { place: 'Kartal Oto Sanayi Sitesi', km: 3, time: '6 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Yakacık Rampaları', km: 4, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Samandıra KMO Bağlantısı', km: 7, time: '10 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Soğanlık E-5 Yan Yol', km: 5, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Pendik Köprüsü', km: 6, time: '9 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Kartal oto çekici kaç dakikada gelir?', a: 'Samandıra ve Yakacık nöbetçi araçlarımızla ortalama 10-15 dakikada yanınızdayız.' },
      { q: 'Kartal Sanayi Sitesi\'ne çekim yapıyor musunuz?', a: 'Evet, Kartal Sanayi, Maltepe veya Pendik yetkili servislerine kaskolu teslimat yapıyoruz.' },
      { q: 'Samandıra KMO gişelerinde kaldım, gelir misiniz?', a: 'Kuzey Marmara Otoyolu Samandıra gişe hattında 7/24 devriye aracımız hazırdır.' },
      { q: 'Kredi kartıyla ödeme yapabilir miyim?', a: 'Evet, mobil POS ile tek çekim veya taksitli ödeme yapabilirsiniz.' },
      { q: 'Gece çekici desteğiniz var mı?', a: '7 gün 24 saat kesintisiz gece nöbetçi kurtarıcılarımız görev başındadır.' },
      { q: 'Basık araç veya spor otomobil için uygun musunuz?', a: 'Evet, sıfır dereceli hidrolik kayar kasalarımızla tampon sürtmeden yüklüyoruz.' }
    ]
  },
  {
    slug: 'maltepe-oto-cekici',
    name: 'Maltepe',
    category: 'anadolu-merkez',
    categoryLabel: 'Maltepe & Başıbüyük',
    image: 'luks-arac-cekici.webp',
    title: 'Maltepe Oto Çekici 7/24 | Başıbüyük KMO & E-5 Çekici - 0536 769 43 24',
    metaDesc: 'Maltepe çekici, Başıbüyük Kuzey Marmara bağlantısı, Küçükyalı, Zümrütevler ve Sahil Yolu çevresinde 7/24 oto kurtarıcı. 10-15 dk varış: 0536 769 43 24.',
    keywords: 'maltepe çekici, maltepe oto çekici, başıbüyük çekici, küçükyalı çekici, zümrütevler çekici, maltepe oto kurtarma',
    eta: '10 - 15 Dk',
    caseTitle: 'Başıbüyük KMO Bağlantısında Gece Lastik Patlaması',
    caseDesc: 'Gece 01:15\'te Başıbüyük viyadük ayağında lastiği yarılan SUV tipi araç için ekibimiz 12 dakikada olay yerine varmış, emniyet tedbirleri altında aracı kayar kasaya alarak yetkili servise ulaştırmıştır.',
    vehicleType: 'C-SUV',
    deliveryPoint: 'Küçükyalı Yetkili Servis',
    leadText: 'Maltepe merkez, Başıbüyük KMO bağlantı yolu, Küçükyalı E-5 ve sahil hattında nöbetçi çekicilerimizle 10-15 dakikada hızlı ve emniyetli müdahale.',
    hotspots: 'Başıbüyük KMO Çıkışı, Küçükyalı Kavşağı, Zümrütevler, Süreyyapaşa Rampası, Maltepe Sahil Yolu',
    trafficAnalysis: "Maltepe ilçesi, sahil yolu, D-100 karayolu ve Başıbüyük üzerinden Kuzey Marmara Otoyolu'na bağlanan çok katmanlı bir ulaşım ağına sahiptir. Başıbüyük Orman Yolu ve Süreyyapaşa rampalarındaki virajlı yokuşlar, fren balatası aşınması ve mekanik arızaların sık görüldüğü güzergahlardır.",
    scenarios: "Başıbüyük KMO bağlantısında keskin virajlarda lastik yarılması, Süreyyapaşa rampalarında dik tırmanışta hararet, Küçükyalı E-5 kavşağında zincirleme kazalar.",
    equipmentProtocol: "Basık araçlar için sıfır açılı hidrolik rampa sistemleri, LED flaşör kuleleri ve profesyonel akü takviye üniteleri.",
    localAdvice: "E-5 veya KMO bağlantısında kalan araçların reflektörlerini kuralına uygun yerleştirmesi ve yolcuların kaldırım veya bariyer arkasına geçmesi esastır.",
    distanceTable: [
      { place: 'Başıbüyük KMO Çıkışı', km: 4, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Küçükyalı E-5 Kavşağı', km: 5, time: '9 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Zümrütevler / Süreyyapaşa', km: 4, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Kartal Oto Sanayi', km: 7, time: '11 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Bostancı Köprüsü', km: 8, time: '12 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Maltepe oto çekici ne kadar sürede gelir?', a: 'Küçükyalı ve Başıbüyük nöbetçi araçlarımızla 10-15 dakika içinde ulaşıyoruz.' },
      { q: 'Başıbüyük Kuzey Marmara çıkışına geliyor musunuz?', a: 'Evet, KMO Başıbüyük kavşağı ve bağlantı viyadüklerinde 7/24 nöbetçiyiz.' },
      { q: 'Taşıma kaskolu mu?', a: 'Evet, yükleme anından itibaren %100 nakliyat sigortası güvencesi sunuyoruz.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile tüm kartlar kabul edilir.' },
      { q: 'Motosiklet çekiyor musunuz?', a: 'Özel ön teker sabitleme aparatlı motosiklet çekicilerimiz mevcuttur.' },
      { q: 'Küçükyalı yetkili servislerine araç teslimatı yapıyor musunuz?', a: 'Evet, talep ettiğiniz yetkili servise hasarsız teslimat sağlıyoruz.' }
    ]
  },
  {
    slug: 'korfez-hereke-oto-cekici',
    name: 'Körfez & Hereke',
    category: 'kocaeli-sanayi',
    categoryLabel: 'Körfez & Hereke',
    image: 'kazali-arac-cekici.webp',
    title: 'Körfez & Hereke Oto Çekici 7/24 | KMO & Tüneller - 0536 769 43 24',
    metaDesc: 'Körfez çekici, Hereke tünelleri çekici, KMO Doğu Gişeleri ve TEM otoyolu geçişinde 7/24 acil oto çekici ve kurtarma. 10-15 dk varış: 0536 769 43 24.',
    keywords: 'körfez çekici, hereke çekici, hereke tüneli çekici, kmo körfez çekici, körfez oto kurtarma, hereke oto çekici',
    eta: '10 - 15 Dk',
    caseTitle: 'Hereke Tüneli Çıkışında Hararet Yapan Aracın Tahliyesi',
    caseDesc: 'Hereke tünel çıkışında radyatör hortumu patlayan binek araç için ekibimiz 13 dakikada ulaşmış, trafiği tehlikeye atmadan aracı kayar platforma yükleyerek Körfez Sanayi Sitesi\'ne güvenle aktarmıştır.',
    vehicleType: 'Sedan Otomobil',
    deliveryPoint: 'Körfez Sanayi Sitesi',
    leadText: 'Kuzey Marmara Otoyolu Doğu Gişeleri, Hereke tünelleri, viyadükler ve Körfez TEM geçişinde 7/24 hazır bekleyen kurtarıcı filomuzla 10-15 dakikada intikal.',
    hotspots: 'Hereke Tünelleri, KMO Doğu Gişeleri, Körfez Gişeleri, Hereke Viyadüğü, Yarımca Sanayi Liman Yolu',
    trafficAnalysis: "Körfez ve Hereke hattı, Kocaeli sanayi koridoru ile İstanbul bağlantısının en kritik boğazıdır. Hereke viyadükleri, KMO Dilovası-Körfez geçişi ve TEM Hereke Tünelleri boyunca ağır vasıta ve tır trafiği son derece yoğundur. Tünel girişlerindeki ani frenler ve rüzgarlı viyadük geçişleri risk noktalarıdır.",
    scenarios: "Hereke tüneli içinde ani motor arızası ve tahliyesi, KMO Doğu gişelerinde ağır vasıta lastik patlaması, viyadüklerde kayma ve bariyer teması.",
    equipmentProtocol: "Çift kırmalı ağır hizmet kurtarma vinçleri, kayar kasa platformlar, otoyol LED uyarı panoları ve tünel tahliye ekipmanları.",
    localAdvice: "Hereke tünelleri veya KMO viyadüklerinde arızalanan sürücülerin araç içinde beklememesi, derhal tünel acil cebine veya bariyer dışına geçmesi gerekir.",
    distanceTable: [
      { place: 'Hereke Tünelleri Geçişi', km: 4, time: '8 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'KMO Doğu Gişeleri', km: 6, time: '10 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Körfez TEM Gişeleri', km: 7, time: '11 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Dilovası Viyadüğü', km: 12, time: '14 Dk', price: 'Telefonda Sabit Fiyat Sözü' },
      { place: 'Körfez Sanayi Sitesi', km: 8, time: '12 Dk', price: 'Telefonda Sabit Fiyat Sözü' }
    ],
    faqs: [
      { q: 'Hereke tünellerine çekici ne kadar sürede varır?', a: 'Tünel çıkışında konuşlu nöbetçi ekiplerimiz ortalama 10-12 dakikada yanınızdadır.' },
      { q: 'Ağır vasıta ve kamyon çekiyor musunuz?', a: 'Evet, çift çeker vinçlerimizle 40 tona kadar ağır vasıta çekiyoruz.' },
      { q: 'Otoyol çekici fiyatı nedir?', a: 'Şeffaf taban ücret + km tarifesiyle telefonda sabit fiyat teyidi verilir.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile yerinde kredi kartı ödemesi kabul edilir.' },
      { q: 'Aracımı İstanbul veya İzmit\'e götürebilir misiniz?', a: 'Evet, talebinize göre Kocaeli veya İstanbul servislerine teslim ediyoruz.' },
      { q: 'Liman yolunda kaza kurtarma desteği var mı?', a: 'Evet, Yarımca ve Körfez liman aksında vinçli kaza kurtarma ekibimiz 7/24 aktiftir.' }
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
    "name": `Marmara Çekici - ${reg.name} Oto Çekici & Kurtarma`,
    "telephone": `+${PHONE_RAW}`,
    "url": `${DOMAIN}/bolgeler/${reg.slug}.html`,
    "image": `${DOMAIN}/images/${reg.image}`,
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

  const neighborCardsHtml = regions
    .filter(r => r.slug !== reg.slug)
    .slice(0, 4)
    .map(r => `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:14px; overflow:hidden; display:flex; flex-direction:column; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
        <div style="height:120px; overflow:hidden; position:relative;">
          <img src="/images/${r.image}" alt="${r.name} Oto Çekici" width="400" height="200" loading="lazy" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div style="padding:14px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <h4 style="font-size:1.05rem; font-weight:800; color:#0f172a; margin:0;">${r.name} Çekici</h4>
            <span style="background:rgba(234,88,12,0.08); color:#ea580c; font-size:0.75rem; font-weight:800; padding:2px 7px; border-radius:999px;">⏱️ ${r.eta}</span>
          </div>
          <p style="font-size:0.8rem; color:#64748b; margin-bottom:12px; line-height:1.4;">${r.hotspots.slice(0, 50)}...</p>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <a href="/bolgeler/${r.slug}.html" style="color:#ea580c; font-weight:700; font-size:0.82rem; text-decoration:none;">İncele →</a>
            <a href="tel:${PHONE_RAW}" style="background:#ea580c; color:#fff; font-size:0.78rem; font-weight:700; padding:4px 10px; border-radius:6px; text-decoration:none;">Ara</a>
          </div>
        </div>
      </div>
    `).join('\n');

  const otherRegionsList = regions
    .filter(r => r.slug !== reg.slug)
    .slice(0, 8)
    .map(r => `<a href="/bolgeler/${r.slug}.html" class="sidebar-link-item"><span>📍 ${r.name} Çekici</span> <strong style="color:#ea580c;">${r.eta}</strong></a>`)
    .join('\n');

  const distanceRows = reg.distanceTable.map((d, idx) => `
    <tr style="border-bottom: 1px solid #f1f5f9; ${idx % 2 === 1 ? 'background: #fafafa;' : ''}">
      <td style="padding: 12px 16px; font-weight: 700; color: #0f172a;">${d.place}</td>
      <td style="padding: 12px 16px; color: #64748b;">${d.km} km</td>
      <td style="padding: 12px 16px; color: #ea580c; font-weight: 800;">⏱️ ${d.time}</td>
      <td style="padding: 12px 16px; color: #059669; font-weight: 800;">Telefonda Sabit Fiyat Sözü</td>
    </tr>
  `).join('\n');

  const mobileImage = reg.image === 'kapak-fotografi.webp' ? 'kapak-fotografi-mobile.webp' : reg.image;

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Google tag (gtag.js) -->
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-7MT29LQ70Q');
    (function () {
      var loaded = false;
      function loadGA() {
        if (loaded) return;
        loaded = true;
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=G-7MT29LQ70Q';
        document.head.appendChild(s);
      }
      ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(function (ev) {
        window.addEventListener(ev, loadGA, { once: true, passive: true });
      });
      window.addEventListener('load', function () { setTimeout(loadGA, 8000); });
    })();
  </script>
  <title>${reg.title}</title>
  <meta name="description" content="${reg.metaDesc}">
  <meta name="keywords" content="${reg.keywords}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${DOMAIN}/bolgeler/${reg.slug}.html">
  <link rel="alternate" type="text/plain" href="${DOMAIN}/llms.txt" title="LLM Knowledge Base">
  <link rel="preload" as="image" href="/images/${mobileImage}" media="(max-width: 768px)" type="image/webp" fetchpriority="high">
  <link rel="preload" as="image" href="/images/${reg.image}" media="(min-width: 769px)" type="image/webp" fetchpriority="high">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/images/logo.svg">
  <link rel="icon" type="image/webp" href="/images/logo.webp">
  <link rel="apple-touch-icon" href="/images/apple-touch-icon.png">

  <!-- iOS Safari Reader Mode & Phone Heuristics Suppression -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="format-detection" content="telephone=no">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${reg.title}">
  <meta property="og:description" content="${reg.metaDesc}">
  <meta property="og:url" content="${DOMAIN}/bolgeler/${reg.slug}.html">
  <meta property="og:image" content="${DOMAIN}/images/${reg.image}">
  <meta property="og:locale" content="tr_TR">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${reg.title}">
  <meta name="twitter:description" content="${reg.metaDesc}">
  <meta name="twitter:image" content="${DOMAIN}/images/${reg.image}">

  <!-- Google Fonts & CSS -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="/css/style.css?v=3.7">

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

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="/" class="brand-logo" aria-label="Marmara Çekici Ana Sayfa">
          <img src="/images/logo.svg" alt="Marmara Çekici Logo" class="brand-logo-img" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Anadolu Yakası, Kocaeli &amp; Otoyol Kurtarma</span>
          </div>
        </a>

        <nav class="main-nav" aria-label="Ana Menü">
          <ul class="nav-list">
            <li><a href="/" class="nav-link">Ana Sayfa</a></li>
            <li><a href="/hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="index.html" class="nav-link active">Bölgelerimiz</a></li>
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
          <button type="button" class="menu-toggle-btn" aria-label="Menüyü Aç/Kapat" aria-expanded="false">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Lüks İç Sayfa Hero Bölümü (Referans Tasarıma Birebir Uygun) -->
  <section class="inner-hero-lux" style="position: relative; overflow: hidden; background: #070b14; padding: 40px 0 55px;">
    <picture class="inner-hero-bg-picture" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none;">
      <source srcset="/images/${mobileImage}" media="(max-width: 768px)" type="image/webp">
      <source srcset="/images/${reg.image}" media="(min-width: 769px)" type="image/webp">
      <img src="/images/${reg.image}" alt="${reg.name} Çekici Filosu" class="inner-hero-bg" width="1920" height="1080" style="width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; opacity: 0.90; filter: brightness(1.02);" fetchpriority="high">
    </picture>
    <div class="inner-hero-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; background: linear-gradient(180deg, rgba(7, 11, 20, 0.45) 0%, rgba(7, 11, 20, 0.20) 40%, rgba(7, 11, 20, 0.75) 100%);"></div>
    
    <div class="container" style="position: relative; z-index: 2; max-width: 680px; text-align: center;">
      <nav class="inner-breadcrumb-nav" aria-label="Breadcrumb" style="justify-content: center; margin-bottom: 14px;">
        <a href="/">Ana Sayfa</a> <span>/</span>
        <a href="/bolgeler/index.html">Bölgelerimiz</a> <span>/</span>
        <span class="current">${reg.name} Çekici</span>
      </nav>

      <!-- Yolda mı kaldınız badge -->
      <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(30, 20, 10, 0.75); border: 1px solid rgba(234, 88, 12, 0.45); border-radius: 999px; padding: 7px 18px; margin-bottom: 16px;">
        <span style="width: 8px; height: 8px; background: #ea580c; border-radius: 50%; box-shadow: 0 0 8px #ea580c;"></span>
        <span style="color: #ffedd5; font-size: 0.85rem; font-weight: 700;">Yolda mı kaldınız? Ortalama varış süremiz ${reg.eta ? (reg.eta.replace(/dakika|dk/gi, '').trim() + ' dakika') : '10-15 dakika'}!</span>
      </div>

      <!-- Başlık (Referanstaki Birebir Renk & Boyut) -->
      <h1 style="font-size: clamp(1.85rem, 4.5vw, 2.7rem); font-weight: 900; color: #ffffff; line-height: 1.25; margin: 0 0 20px; text-shadow: 0 2px 10px rgba(0,0,0,0.9);">
        ${reg.name} Çekici &amp; 7/24<br>
        <span style="color: #ff5500;">${reg.name} Oto Kurtarma</span> | <span style="color: #ff5500;">En Yakın Oto Çekici</span>
      </h1>

      <!-- Açıklama Kartı (Transparan Cam Efekti) -->
      <div style="background: rgba(15, 23, 42, 0.82); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 20px; margin-bottom: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); text-align: left;">
        <p style="color: #f1f5f9; font-size: 0.95rem; line-height: 1.65; margin: 0;">
          ${reg.leadText}
        </p>
      </div>

      <!-- 2x2 İstatistik Kartı -->
      <div style="background: rgba(15, 23, 42, 0.82); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 20px; margin-bottom: 18px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); text-align: left;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px 20px;">
          <div>
            <div style="font-size: 1.4rem; font-weight: 900; color: #ffffff; margin-bottom: 2px;">${reg.eta || '10 - 15 Dk'}</div>
            <div style="font-size: 0.80rem; color: #94a3b8; font-weight: 600;">Ortalama Ulaşım</div>
          </div>
          <div>
            <div style="font-size: 1.4rem; font-weight: 900; color: #ff6b00; margin-bottom: 2px;">7/24 Saat</div>
            <div style="font-size: 0.80rem; color: #94a3b8; font-weight: 600;">Nöbetçi Çekici</div>
          </div>
          <div>
            <div style="font-size: 1.4rem; font-weight: 900; color: #ffffff; margin-bottom: 2px;">%100 Güven</div>
            <div style="font-size: 0.80rem; color: #94a3b8; font-weight: 600;">Kaskolu Taşıma</div>
          </div>
          <div>
            <div style="font-size: 1.4rem; font-weight: 900; color: #ff6b00; margin-bottom: 2px;">5.0 ⭐</div>
            <div style="font-size: 0.80rem; color: #94a3b8; font-weight: 600;">Google Müşteri Puanı</div>
          </div>
        </div>
      </div>

      <!-- Hızlı Fiyat Teklifi Al Şeridi -->
      <div style="background: rgba(15, 23, 42, 0.88); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 14px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.35); text-align: left;">
        <div>
          <strong style="color: #fff; font-size: 0.95rem; display: block; margin-bottom: 2px;">Hızlı Fiyat Teklifi Al</strong>
          <span style="color: #94a3b8; font-size: 0.78rem;">Konum atın, telefonda net sabit fiyat verelim</span>
        </div>
        <a href="tel:${PHONE_RAW}" class="btn btn-call" style="padding: 10px 18px; border-radius: 10px; font-weight: 800; font-size: 0.88rem; text-decoration: none; white-space: nowrap;">Hemen Ara →</a>
      </div>

    </div>
  </section>

  <!-- ANA İÇERİK ALANI & BÖLGESEL SEO REHBERİ -->
  <main class="section" style="padding: 50px 0 80px; background: #f8fafc;">
    <div class="container">
      <div class="inner-page-layout">
        
        <!-- Sol İçerik Kolonu -->
        <div class="inner-content-col">
          
          <!-- Kart 1: Bölgeye Özel Saha Filosu & Yol Analizi -->
          <div class="inner-card-box">
            <div class="inner-media-showcase">
              <img src="/images/${reg.image}" alt="${reg.name} Oto Çekici ve Kurtarıcı Filosu" width="800" height="420" loading="eager" fetchpriority="high">
              <div class="inner-media-meta-bar">
                <span>📍 Lokasyon: ${reg.name} &amp; Çevre Bağlantı Kolları</span>
                <span>⚡ Nöbet: 7/24 Hazır Kayar Kasa &amp; Vinç Ekibi</span>
              </div>
            </div>

            <h2 class="inner-card-title">
              🚗 ${reg.name} Trafik Analizi, Otoyol Gişeleri &amp; Yol Dinamikleri
            </h2>
            <p class="inner-card-text">
              ${reg.trafficAnalysis}
            </p>

            <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin: 24px 0 12px; display: flex; align-items: center; gap: 8px;">
              <span>⚠️</span> ${reg.name} Çevresinde En Sık Karşılaşılan Arızalar &amp; Çekici Senaryoları
            </h3>
            <p class="inner-card-text">
              ${reg.scenarios}
            </p>

            <h3 style="font-size: 1.22rem; font-weight: 800; color: #0f172a; margin: 24px 0 12px; display: flex; align-items: center; gap: 8px;">
              <span>🛡️</span> ${reg.name} Donanımımız: Sıfır Açılı Rampa, Dolly &amp; Sıfır Hasar Protokolü
            </h3>
            <p class="inner-card-text">
              ${reg.equipmentProtocol}
            </p>

            <div class="operator-callout-box">
              <h4>💡 ${reg.name} Sürücülerine Hayati Tavsiyeler &amp; Yetkili Servis Aktarımı</h4>
              <p>
                ${reg.localAdvice}
              </p>
            </div>

            <!-- Kart 1.1: 2000+ Karakter Zengin İlçe & Güzergah Kılavuzu -->
            <div style="margin-top: 28px; border-top: 1px solid #e2e8f0; padding-top: 24px;">
              <h3 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin: 0 0 14px; display: flex; align-items: center; gap: 8px;">
                <span>🗺️</span> ${reg.name} İlçe, Mahalle &amp; Otoyol Ulaşım Rehberi
              </h3>
              <p class="inner-card-text" style="line-height: 1.85;">
                ${(REGION_EXTENSIONS[reg.slug] || {}).districtCorridorGuide || ''}
              </p>
            </div>

            <!-- Kart 1.2: Şehir İçi Sabit Fiyat, Yetkili Servis Ağı & Kasko Standartları -->
            <div style="margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 24px;">
              <h3 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin: 0 0 14px; display: flex; align-items: center; gap: 8px;">
                <span>💳</span> ${reg.name} Şehir İçi Sabit Fiyat, Yetkili Servis Ağı &amp; Kasko Standartları
              </h3>
              <p class="inner-card-text" style="line-height: 1.85;">
                ${(REGION_EXTENSIONS[reg.slug] || {}).serviceAndPricingNetwork || ''}
              </p>
            </div>

            <!-- Kart 1.3: Bölgeye Özel Acil Eylem ve Yol Güvenliği Planı -->
            <div style="margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 24px;">
              <h3 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin: 0 0 14px; display: flex; align-items: center; gap: 8px;">
                <span>🚨</span> ${reg.name} Acil Durum &amp; Güvenli Tahliye Protokolü
              </h3>
              <p class="inner-card-text" style="line-height: 1.85;">
                ${(REGION_EXTENSIONS[reg.slug] || {}).emergencyActionPlan || ''}
              </p>
            </div>

            <!-- Kart 1.4: Mahalle Sokakları, Sanayi Bağlantıları & Kritik Arterler -->
            <div style="margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 24px;">
              <h3 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin: 0 0 14px; display: flex; align-items: center; gap: 8px;">
                <span>🏙️</span> ${reg.name} Mahalle Sokakları, Sanayi Bağlantıları &amp; Kritik Arterler
              </h3>
              <p class="inner-card-text" style="line-height: 1.85;">
                ${(REGION_EXTENSIONS[reg.slug] || {}).neighborhoodStreetGuide || ''}
              </p>
            </div>

            <!-- Kart 1.5: 7/24 Gece Nöbeti, Mevsimsel Riskler & Bölgesel Kurtarma Stratejisi -->
            <div style="margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 24px;">
              <h3 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin: 0 0 14px; display: flex; align-items: center; gap: 8px;">
                <span>🌙</span> ${reg.name} 7/24 Gece Nöbeti, Mevsimsel Riskler &amp; Bölgesel Kurtarma Stratejisi
              </h3>
              <p class="inner-card-text" style="line-height: 1.85;">
                ${(REGION_EXTENSIONS[reg.slug] || {}).seasonalAndNightRescueProtocol || ''}
              </p>
            </div>
          </div>

          <!-- Kart 2: Bölgesel Mesafe & İntikal Süreleri Tablosu -->
          <section class="inner-card-box">
            <h3 class="inner-card-title">
              📊 ${reg.name} Çıkışlı Tahmini Mesafe ve İntikal Süreleri
            </h3>
            <p class="inner-card-text">
              Başlangıç noktanızdan popüler transfer lokasyonlarına ortalama intikal süresi ve güzergah bilgileri:
            </p>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; text-align: left;">
                <thead>
                  <tr style="background: #f1f5f9; border-bottom: 2px solid #e2e8f0;">
                    <th style="padding: 12px 16px; color: #0f172a; font-weight: 800;">Hedef Lokasyon / Servis</th>
                    <th style="padding: 12px 16px; color: #0f172a; font-weight: 800;">Mesafe</th>
                    <th style="padding: 12px 16px; color: #0f172a; font-weight: 800;">Ortalama Süre</th>
                    <th style="padding: 12px 16px; color: #0f172a; font-weight: 800;">Fiyat Politikası</th>
                  </tr>
                </thead>
                <tbody>
                  ${distanceRows}
                </tbody>
              </table>
            </div>
            <div style="padding: 12px 0 0 0; font-size: 0.8rem; color: #64748b; text-align: right;">
              * Mesafe, araç cinsi ve varış noktasına göre telefonda net ve sabit fiyat teyidi verilir; sonradan sürpriz ek masraf çıkarılmaz.
            </div>
          </section>

          <!-- Kart 3: Gerçek Saha Kurtarma Vakası -->
          <section class="inner-card-box">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span style="background: #0f172a; color: #fff; padding: 4px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase;">Gerçek Saha Vakası</span>
              <span style="color: #64748b; font-size: 0.875rem;">${reg.name} Operasyon Kaydı</span>
            </div>
            <h3 class="inner-card-title" style="font-size: 1.35rem; margin-bottom: 12px;">
              ${reg.caseTitle}
            </h3>
            <p class="inner-card-text">
              ${reg.caseDesc}
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 20px; font-size: 0.875rem; color: #334155; border-top: 1px solid #f1f5f9; padding-top: 15px;">
              <div><strong>Araç Türü:</strong> ${reg.vehicleType}</div>
              <div><strong>Varış / Teslim Noktası:</strong> ${reg.deliveryPoint}</div>
              <div><strong>Taşıma Statüsü:</strong> <span style="color: #10b981; font-weight: 700;">%100 Emtia Kaskolu Nakil</span></div>
            </div>
          </section>

          <!-- Kart 4: Kapsamlı SSS -->
          <div class="inner-card-box">
            <h3 class="inner-card-title">
              ${reg.name} Çekici Hakkında Sıkça Sorulan Sorular
            </h3>
            <p class="inner-card-text">
              ${reg.name} ve çevre otoyol güzergahındaki sürücülerimizin en çok merak ettiği sorular:
            </p>
            <div class="faq-accordion-list">
              ${reg.faqs.map((f, idx) => `
                <details class="faq-accordion-item" ${idx === 0 ? 'open' : ''} style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 12px; padding: 14px 18px;">
                  <summary style="font-weight: 800; color: #0f172a; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 0.98rem;">${idx + 1}. ${f.q}</span>
                    <span style="color: #ea580c; font-size: 1.1rem;">▾</span>
                  </summary>
                  <div style="margin-top: 10px; color: #475569; font-size: 0.92rem; line-height: 1.7; border-top: 1px solid #e2e8f0; padding-top: 10px;">
                    ${f.a}
                  </div>
                </details>
              `).join('')}
            </div>
          </div>

          <!-- Kart 5: Komşu Bölgelerimiz Fotoğraflı Kartlar -->
          <section class="inner-card-box">
            <h3 class="inner-card-title">
              📍 Komşu Hizmet Bölgelerimiz (10-15 Dk İntikal)
            </h3>
            <p class="inner-card-text">
              ${reg.name} çevresindeki diğer nöbet noktalarımız ve bağlantı arterleri:
            </p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px;" class="neighbor-grid">
              ${neighborCardsHtml}
            </div>
          </section>

        </div>

        <!-- Sağ Kenar Çubuğu (Sidebar) -->
        <aside class="inner-sidebar-col">
          
          <!-- Hızlı Çağrı Kartı -->
          <div class="sidebar-call-card-lux">
            <span style="background: rgba(234,88,12,0.25); color: #ff7a33; font-weight: 800; font-size: 0.78rem; padding: 4px 12px; border-radius: 999px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(234,88,12,0.5);">
              ${reg.name} Nöbetçi Çekici
            </span>
            <h3>${reg.eta} İntikal Garantisi</h3>
            <p>
              Konumunuzu iletin, ${reg.name} bölgesindeki en yakın nöbetçi kurtarıcımız derhal çıkış yapsın.
            </p>
            <a href="tel:${PHONE_RAW}" class="btn btn-call btn-block btn-lg" style="margin-bottom: 12px;">
              📞 Hemen Ara: ${PHONE}
            </a>
            <button type="button" class="btn btn-whatsapp btn-block btn-lg btn-send-location">
              ${waSvg} WhatsApp Canlı Konum
            </button>
            <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.8rem; color: #94a3b8; display: flex; justify-content: space-between;">
              <span>⏱️ Yanıt: 30 Saniye</span>
              <span>💳 Mobil POS / Kredi Kartı</span>
            </div>
          </div>

          <!-- Müşteri Güven Rozeti -->
          <div class="sidebar-list-card">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
              <span style="font-size: 1.8rem;">⭐⭐⭐⭐⭐</span>
              <div>
                <strong style="display: block; font-size: 0.95rem; color: #0f172a;">5.0 / 5.0 Memnuniyet</strong>
                <span style="font-size: 0.78rem; color: #64748b;">128+ Doğrulanmış Müşteri Yorumu</span>
              </div>
            </div>
            <p style="font-size: 0.86rem; color: #475569; line-height: 1.6; margin: 0;">
              %100 Emtia Taşıma Kaskosu ve resmi taşıma irsaliyesi ile sıfır hasar güvencesi sunuyoruz.
            </p>
          </div>

          <!-- Diğer Hizmet Bölgelerimiz Menüsü -->
          <div class="sidebar-list-card">
            <h4>Diğer Hizmet Bölgelerimiz</h4>
            <div style="display: flex; flex-direction: column;">
              ${otherRegionsList}
            </div>
          </div>

        </aside>

      </div>
    </div>
  </main>

  <!-- KURUMSAL STANDARTLARIMIZ / NEDEN KUZEY MARMARA ÇEKİCİ? (İÇERİKTEN SONRA) -->
  <section class="section section-dark" style="padding: 70px 0; background: #090d16; color: #fff;">
    <div class="container">
      <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 30px;">
        <span class="section-badge" style="background: rgba(234,88,12,0.15); color: #ea580c; border: 1px solid rgba(234,88,12,0.3); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
          Kurumsal Standartlarımız
        </span>
        <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 900; color: #fff; margin: 12px 0 10px;">
          Neden Marmara Çekici?
        </h2>
        <p style="color: #94a3b8; font-size: 1rem; line-height: 1.6;">
          ${reg.name} ve otoyol koridorunda binlerce sürücünün 1 numaralı tercihi olmamızı sağlayan kurumsal güvencelerimiz.
        </p>
      </div>

      <div class="why-us-luxury-grid">
        <div class="why-card-luxury">
          <div class="why-icon-box">⏱️</div>
          <h3>10-15 Dakikada Hızlı İntikal</h3>
          <p>${reg.name} arterlerinde ve otoyol gişelerinde sürekli konuşlu nöbetçi filomuz sayesinde çağrınızla birlikte derhal harekete geçeriz.</p>
        </div>

        <div class="why-card-luxury">
          <div class="why-icon-box">🛡️</div>
          <h3>%100 Nakliyat Emtia Kaskosu</h3>
          <p>Yükleme anından teslimata kadar tüm araçlar tam kapsamlı taşıyıcı sorumluluk sigortası güvencesindedir; risk sıfırdır.</p>
        </div>

        <div class="why-card-luxury">
          <div class="why-icon-box">🏷️</div>
          <h3>Şeffaf &amp; Sabit Fiyat Sözü</h3>
          <p>Telefonda onaylanan ücret dışında asla sürpriz ek masraf çıkarılmaz. Otoyol ücretleri ve km baştan net olarak bildirilir.</p>
        </div>

        <div class="why-card-luxury">
          <div class="why-icon-box">🏎️</div>
          <h3>Sıfır Açılı Lüks &amp; Elektrikli Rampa</h3>
          <p>Basık spor araçlar, lüks coupe'lar ve Tesla gibi elektrikli araçlar için sürtünmeyi önleyen özel rampa uzantıları ve tekerlek dolly'si kullanılır.</p>
        </div>

        <div class="why-card-luxury">
          <div class="why-icon-box">💳</div>
          <h3>Mobil POS ile Kredi Kartı / Taksit</h3>
          <p>Nakit arama derdine son. Kurtarıcı araçlarımızdaki mobil POS ile tüm kredi kartlarıyla tek çekim veya taksitle ödeme imkanı.</p>
        </div>

        <div class="why-card-luxury">
          <div class="why-icon-box">⭐</div>
          <h3>15+ Yıllık Otoyol Saha Deneyimi</h3>
          <p>Zorlu otoyol viyadükleri, tüneller, bariyer sıkışması ve kaza durumlarında profesyonel vinç ve kurtarma operatörlüğü güvencesi.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ÇEKİCİ SÜRECİMİZ NASIL İŞLER? (4 ADIM) -->
  <section class="process-section" style="padding: 70px 0; background: #ffffff;">
    <div class="container">
      <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 30px;">
        <span class="section-badge" style="background: rgba(234,88,12,0.1); color: #ea580c; border: 1px solid rgba(234,88,12,0.25); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
          Şeffaf &amp; Güvenli Operasyon
        </span>
        <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 900; color: #0f172a; margin: 12px 0 10px;">
          ${reg.name} Çekici Sürecimiz Nasıl İşler?
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
          <p>${reg.name} bölgesinde hazır bekleyen nöbetçi hidrolik kayar kasa çekicimiz GPS yönlendirmesiyle rekor sürede yanınıza ulaşır.</p>
          <span class="process-tag">${reg.eta} Varış</span>
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
          <li><a href="kurtkoy-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Kurtköy Çekici</a></li>
          <li><a href="kuzey-marmara-otoyolu-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">KMO Otoyol Çekici</a></li>
          <li><a href="tem-otoyolu-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">TEM Otoyolu Çekici</a></li>
          <li><a href="gebze-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Gebze Çekici</a></li>
          <li><a href="pendik-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Pendik Çekici</a></li>
          <li><a href="sabiha-gokcen-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Sabiha Gökçen Çekici</a></li>
          <li><a href="index.html" style="color: #ea580c; text-decoration: none; font-weight: 700;">Tüm Bölgelerimiz →</a></li>
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
      <p>&copy; 2026 Marmara Çekici. Tüm hakları saklıdır. 7/24 Kesintisiz Anadolu Yakası, Kocaeli &amp; Otoyol Oto Kurtarma.</p>
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

  <script src="/js/main.js?v=3.7" defer></script>
</body>
</html>`;
}

function generateIndexHtml() {
  const cardsHtml = regions.map(r => `
    <div class="region-photo-card" data-category="${r.category}">
      <div class="region-photo-img-wrap">
        <img src="/images/${r.image}" alt="${r.name} Çekici" loading="lazy" width="400" height="200">
      </div>
      <div class="region-photo-body">
        <div class="region-photo-meta-row">
          <span class="region-meta-tag">⏱️ ${r.eta} Varış</span>
          <span class="region-meta-tag" style="background: rgba(15, 23, 42, 0.06); color: #334155; border-color: #cbd5e1;">${r.categoryLabel}</span>
        </div>
        <h3 class="region-photo-title">
          <a href="/bolgeler/${r.slug}.html">${r.name} Çekici</a>
        </h3>
        <p class="region-photo-hotspots">📍 ${r.hotspots}</p>
        <div class="region-photo-features">
          <span>✓ 7/24 Nöbetçi Filo</span>
          <span>✓ %100 Kaskolu</span>
          <span>✓ Mobil POS</span>
        </div>
        <div class="region-photo-actions">
          <a href="tel:${PHONE_RAW}" class="btn btn-call btn-sm">📞 Hemen Ara</a>
          <a href="/bolgeler/${r.slug}.html" class="btn btn-outline btn-sm">Bölge İncele →</a>
        </div>
      </div>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Google tag (gtag.js) -->
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-7MT29LQ70Q');
    (function () {
      var loaded = false;
      function loadGA() {
        if (loaded) return;
        loaded = true;
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=G-7MT29LQ70Q';
        document.head.appendChild(s);
      }
      ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(function (ev) {
        window.addEventListener(ev, loadGA, { once: true, passive: true });
      });
      window.addEventListener('load', function () { setTimeout(loadGA, 8000); });
    })();
  </script>
  <title>Hizmet Bölgelerimiz | Marmara Çekici - 0536 769 43 24</title>
  <meta name="description" content="Kuzey Marmara Otoyolu, TEM Otoyolu, Kurtköy, Gebze, Pendik, Çayırova ve tüm çevre ilçelerde 7/24 en yakın nöbetçi oto çekici ve kurtarıcı bölgelerimiz.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${DOMAIN}/bolgeler/index.html">
  <link rel="alternate" type="text/plain" href="${DOMAIN}/llms.txt" title="LLM Knowledge Base">
  <link rel="icon" type="image/svg+xml" href="/images/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="/css/style.css?v=3.7">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Marmara Çekici Hizmet Bölgelerimiz",
    "description": "Kuzey Marmara Otoyolu, TEM Otoyolu, Kurtköy, Gebze, Pendik ve tüm çevre ilçelerde 7/24 oto çekici bölgelerimiz.",
    "url": "${DOMAIN}/bolgeler/index.html",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "${DOMAIN}/" },
        { "@type": "ListItem", "position": 2, "name": "Bölgelerimiz", "item": "${DOMAIN}/bolgeler/index.html" }
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
          <img src="/images/logo.svg" alt="Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Acil Yol Yardım &amp; Kurtarma</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="/" class="nav-link">Ana Sayfa</a></li>
            <li><a href="/hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="index.html" class="nav-link active">Bölgelerimiz</a></li>
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
        <span style="color: #ea580c; font-weight: 600;">Bölgelerimiz</span>
      </nav>
      <h1 style="font-size: clamp(2rem, 4vw, 2.85rem); font-weight: 900; margin-bottom: 15px;">
        Kuzey Marmara &amp; TEM <span style="color: #ea580c;">Hizmet Bölgelerimiz</span>
      </h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 800px; line-height: 1.6;">
        Kuzey Marmara Otoyolu, TEM Otoyolu gişeleri, Kurtköy, Gebze, Pendik, Çayırova ve çevre sanayi arterlerinde 7/24 konuşlu filomuzla 10-15 dakikada en yakın oto kurtarıcı desteği.
      </p>
    </div>
  </section>

  <!-- FOTOĞRAFLI BÖLGELER LİSTESİ (ÖNCE BÖLGELER) -->
  <main class="section" style="padding: 50px 0 70px; background: #f8fafc;">
    <div class="container">
      
      <div style="text-align: center; max-width: 760px; margin: 0 auto 30px;">
        <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 900; color: #0f172a; margin-bottom: 10px;">
          Hizmet Bölgelerimiz
        </h2>
        <p style="color: #64748b; font-size: 1rem; line-height: 1.6;">
          Yolda kaldığınız bölgeyi seçerek ortalama intikal süresi, yol ve kavşak analizi ile tek tıkla arama butonlarına ulaşabilirsiniz.
        </p>
      </div>

      <!-- Kategori Filtreleme Sekmeleri (Arama Kutusu Kaldırıldı) -->
      <div class="region-filter-tabs" style="display:flex; justify-content:center; flex-wrap:wrap; gap:10px; margin-bottom: 30px;">
        <button type="button" class="filter-tab-btn active" data-filter="all">Tüm Bölgeler</button>
        <button type="button" class="filter-tab-btn" data-filter="otoyol-giseler">Otoyol &amp; Gişeler</button>
        <button type="button" class="filter-tab-btn" data-filter="anadolu-merkez">Anadolu Yakası</button>
        <button type="button" class="filter-tab-btn" data-filter="kocaeli-sanayi">Kocaeli &amp; Gebze OSB</button>
      </div>

      <!-- Fotoğraflı Bölge Kartları Grid -->
      <div class="region-photo-grid" id="regions-container">
        ${cardsHtml}
      </div>

      <div id="no-search-results" style="display: none; text-align: center; padding: 40px; background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; margin-top: 20px;">
        <h3 style="color: #0f172a; margin-bottom: 10px;">Aradığınız bölge listede bulunamadı mı?</h3>
        <p style="color: #64748b; margin-bottom: 20px;">Tüm hat boyunca nöbetçi araçlarımız devriye gezmektedir. Hemen bizi arayarak konum bildirebilirsiniz.</p>
        <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">📞 Hemen Bizi Arayın: ${PHONE}</a>
      </div>

    </div>
  </main>

  <!-- 1. KURUMSAL STANDARTLARIMIZ / NEDEN BİZ? -->
  <section class="section section-dark" style="padding: 70px 0; background: #090d16; color: #fff;">
    <div class="container">
      <div class="section-header text-center" style="text-align: center; max-width: 760px; margin: 0 auto 30px;">
        <span class="section-badge" style="background: rgba(234,88,12,0.15); color: #ea580c; border: 1px solid rgba(234,88,12,0.3); padding: 5px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">
          Kurumsal Standartlarımız
        </span>
        <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 900; color: #fff; margin: 12px 0 10px;">
          Neden Marmara Çekici?
        </h2>
        <p style="color: #94a3b8; font-size: 1rem; line-height: 1.6;">
          Kuzey Marmara ve TEM arterlerinde 7/24 kesintisiz nöbetçi filomuzla sunduğumuz kurumsal ayrıcalıklar.
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

  <!-- 2. ÇEKİCİ SÜRECİMİZ NASIL İŞLER? (4 ADIM) -->
  <section class="process-section" style="padding: 70px 0; background: #ffffff;">
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
          <p><strong>0536 769 43 24</strong> numaramızı tek tıkla arayın veya WhatsApp üzerinden canlı konumunuzu gönderin. Çağrı merkezimiz 30 saniye içinde yanıt verir.</p>
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

  <!-- 3. SSS BÖLÜMÜ -->
  <section class="section" style="padding: 50px 0 70px; background: #f8fafc; border-top: 1px solid #e2e8f0;">
    <div class="container">

      <!-- SSS Bölümü -->
      <div style="margin-top: 60px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 35px 30px;">
        <h3 style="font-size: 1.5rem; font-weight: 900; color: #0f172a; margin-bottom: 20px;">
          Hizmet Bölgelerimiz Hakkında Sıkça Sorulan Sorular
        </h3>
        <div class="faq-accordion-list">
          <details class="faq-accordion-item" open>
            <summary class="faq-summary">
              <div class="faq-summary-left">
                <span class="faq-num">01</span>
                <span class="faq-q-text">Bölgenize en yakın oto çekici ne kadar sürede ulaşır?</span>
              </div>
              <span class="faq-chevron">▾</span>
            </summary>
            <div class="faq-content">
              <p style="margin:0; line-height:1.75;">Kuzey Marmara Otoyolu, TEM, Kurtköy, Gebze, Pendik ve Çayırova nöbetçi filomuzla ortalama 10-15 dakikada yanınızdayız.</p>
            </div>
          </details>
          <details class="faq-accordion-item">
            <summary class="faq-summary">
              <div class="faq-summary-left">
                <span class="faq-num">02</span>
                <span class="faq-q-text">Hizmet bölgeleriniz arasında fiyat tarifesi nasıl hesaplanır?</span>
              </div>
              <span class="faq-chevron">▾</span>
            </summary>
            <div class="faq-content">
              <p style="margin:0; line-height:1.75;">Alınış noktası ile varış adresi arasındaki net mesafe ve araç sınıfına göre telefonda net sabit fiyat bildirilir.</p>
            </div>
          </details>
          <details class="faq-accordion-item">
            <summary class="faq-summary">
              <div class="faq-summary-left">
                <span class="faq-num">03</span>
                <span class="faq-q-text">Tüm bölgelerde araç başında kredi kartı kabul ediliyor mu?</span>
              </div>
              <span class="faq-chevron">▾</span>
            </summary>
            <div class="faq-content">
              <p style="margin:0; line-height:1.75;">Evet, tüm kurtarıcı araçlarımızda taşınabilir mobil POS cihazı bulunmakta olup kredi kartlarına tek çekim ve taksit uygulanır.</p>
            </div>
          </details>
          <details class="faq-accordion-item">
            <summary class="faq-summary">
              <div class="faq-summary-left">
                <span class="faq-num">04</span>
                <span class="faq-q-text">Tüm bölgelerdeki çekimler kasko kapsamında mıdır?</span>
              </div>
              <span class="faq-chevron">▾</span>
            </summary>
            <div class="faq-content">
              <p style="margin:0; line-height:1.75;">Evet, Marmara Çekici filosuyla taşınan her araç 1.000.000 TL teminatlı Taşıyıcı Sorumluluk Emtia Sigortası altındadır.</p>
            </div>
          </details>
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
        <p style="color: #94a3b8; font-size: 0.9rem; line-height: 1.6; margin: 12px 0 16px;">
          Kuzey Marmara Otoyolu, TEM Otoyolu, Kurtköy, Pendik, Gebze, Çayırova ve çevre ilçelerde 7/24 güvenilir, kaskolu ve sabit fiyatlı oto kurtarıcı hizmeti.
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
          <li><a href="kurtkoy-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Kurtköy Çekici</a></li>
          <li><a href="kuzey-marmara-otoyolu-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">KMO Otoyol Çekici</a></li>
          <li><a href="tem-otoyolu-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">TEM Otoyolu Çekici</a></li>
          <li><a href="gebze-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Gebze Çekici</a></li>
          <li><a href="pendik-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Pendik Çekici</a></li>
          <li><a href="sabiha-gokcen-oto-cekici.html" style="color: #94a3b8; text-decoration: none;">Sabiha Gökçen Çekici</a></li>
          <li><a href="index.html" style="color: #ea580c; text-decoration: none; font-weight: 700;">Tüm Bölgelerimiz →</a></li>
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
  </footer>

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

  <script src="/js/main.js?v=3.7" defer></script>
</body>
</html>`;
}

// Üretim Başlat
const outDir = path.join(__dirname, '..', 'bolgeler');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('🚀 Marmara Çekici Bölge Sayfaları Üretiliyor...');

regions.forEach(reg => {
  const filePath = path.join(outDir, `${reg.slug}.html`);
  fs.writeFileSync(filePath, generateRegionHtml(reg), 'utf8');
  console.log(`✓ Üretildi: bolgeler/${reg.slug}.html`);
});

fs.writeFileSync(path.join(outDir, 'index.html'), generateIndexHtml(), 'utf8');
console.log('✓ Üretildi: bolgeler/index.html (Dizin)');

console.log('🎉 Toplam ' + (regions.length + 1) + ' bölge sayfası başarıyla tamamlandı!');

module.exports = { regions };
