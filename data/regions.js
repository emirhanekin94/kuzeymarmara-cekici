'use strict';

// Her bölge sayfası benzersiz içerik üretmek için kullanılır.
// isAds: true olan sayfalar Google Ads iniş sayfası protokolüne göre üst bölümde
// ekstra güven rozetleri ve mesafe/fiyat tablosu ile render edilir.

const REGIONS = [
  {
    slug: 'kuzey-marmara-otoyolu-oto-cekici',
    name: 'Kuzey Marmara Otoyolu',
    shortName: 'Kuzey Marmara Otoyolu (KMO)',
    isAds: false,
    coords: { lat: 41.0550, lng: 29.1500 },
    metaTitle: 'Kuzey Marmara Otoyolu Oto Çekici | 7/24 KMO Acil Kurtarıcı',
    metaDescription: 'Kuzey Marmara Otoyolu\'nun tüm viyadük, tünel ve gişe hattında 7/24 acil oto çekici ve kurtarma hizmeti. 10-15 dakikada yanınızdayız, kaskolu taşıma garantisi.',
    h1: 'Kuzey Marmara Otoyolu Oto Çekici | 7/24 Acil Kurtarma Hattı',
    intro: 'Kuzey Marmara Otoyolu\'nun Ömerli\'den Dilovası\'na uzanan tüm viyadük, tünel ve gişe hattında nöbetçi kurtarıcı filomuzla 7/24 hizmet veriyoruz. Yüksek hızlı otoyol trafiğinde geçirdiğiniz her dakika risk taşır; biz 10-15 dakika içinde olay yerine ulaşıyoruz.',
    trafficAnalysis: 'Kuzey Marmara Otoyolu, İstanbul\'un kuzeyinden geçen, çok sayıda uzun viyadük, tünel ve yüksek gişe kompleksi barındıran bir "mega otoyol" projesidir. Ömerli Barajı çevresindeki orman yolu kesimlerinden Reşadiye ve Kurnaköy gişelerine, oradan Paşaköy ve Şekerpınar bağlantı noktalarına kadar uzanan hat boyunca araç yoğunluğu gün içinde ciddi dalgalanmalar gösterir. Viyadüklerde özellikle kış aylarında yan rüzgar etkisi, savrulma ve denge kaybına bağlı kazalara yol açabilmektedir. Tünel geçişlerinde ise ani ışık değişimi ve kapalı alan havalandırma koşulları sürücü reflekslerini zorlayan unsurlar arasındadır. Gişe öncesi ve sonrası hız değişim bölgeleri, zincirleme kazaların en sık görüldüğü noktalardır.',
    scenarios: [
      { title: 'Viyadükte Rüzgar Nedenli Savrulma', desc: 'Yüksek viyadük geçişlerinde ani yan rüzgar, özellikle yüksek gövdeli SUV ve ticari araçlarda denge kaybına ve bariyer sürtmesine neden olabilir.' },
      { title: 'Tünel İçi Ani Arıza', desc: 'Tünel içinde meydana gelen motor arızası veya lastik patlaması, trafiği tek şeride düşürür; hızlı ve güvenli tahliye kritik önem taşır.' },
      { title: 'Gişe Öncesi Ani Fren Zincirleme Kazaları', desc: 'HGS/OGS şerit geçişlerinde ani hız kesme refleksi, art arda gelen araçlarda çarpışma riskini yükseltir.' },
      { title: 'Uzun Yokuş İnişlerinde Fren Isınması (Hararet)', desc: 'Özellikle ağır vasıtalarda sürekli fren kullanımı fren disklerinin aşırı ısınmasına ve performans kaybına yol açabilir.' }
    ],
    equipment: 'KMO hattındaki operasyonlarımızda hidrolik kayar platform araçlar, gece görüş destekli LED ikaz kuleleri ve viyadük/tünel geçişlerine özel reflektif koni seti kullanılır. Basık gövdeli araçlar için sıfır dereceli rampa aparatı, ağır hizmet araçları için çift çeker vinç tertibatı daima nöbetçi ekiplerimizde hazır bulunur. Her araç GPS takip sistemiyle konumlandırılır, böylece en yakın ekip saniyeler içinde yönlendirilir.',
    safety: 'Otoyolda arıza yapan bir sürücünün ilk yapması gereken şey, aracı mümkünse emniyet şeridine almak ve dört yönlü sinyalleri açmaktır. Karayolları mevzuatına göre reflektör üçgeni araçtan 150 metre geriye konulmalı, araçtaki kişiler mümkünse çelik bariyerin dışına, güvenli alana geçmelidir. KMO hattında arızalanan araçlar; bölgeye göre Kurtköy, Gebze veya Dilovası\'ndaki yetkili servislere kaskolu taşıma ile sorunsuz şekilde aktarılabilir.',
    fieldCase: {
      title: 'Reşadiye Gişeleri Yakınında Gece Yarısı Lastik Patlaması Vakası',
      body: 'Gece saat 02:00 sıralarında Reşadiye gişeleri çıkışında arka lastiği patlayan bir aile aracı için ekibimiz 12 dakikada olay yerine ulaştı. Araç güvenli şekilde emniyet şeridinden alınarak kayar platforma yüklendi ve yolcular güvenli bir şekilde en yakın dinlenme tesisine transfer edildi; sabah ilk iş yetkili servise şasi hasarsız teslim edildi.'
    },
    faqs: [
      { q: 'Kuzey Marmara Otoyolu\'nda çekici ücreti nasıl hesaplanır?', a: 'Taban ücret + kilometre bazlı ek ücretten oluşan şeffaf bir tarife uygularız; telefonda konumunuzu aldığımız anda size net ve sabit fiyat teyidi veririz, sürpriz ek ücret talep edilmez.' },
      { q: 'KMO hattına intikal süreniz ne kadar?', a: 'Hat boyunca konuşlu nöbetçi araçlarımız sayesinde ortalama intikal süremiz 10-15 dakikadır; tam konum paylaşıldığında bu süre daha da kısalabilir.' },
      { q: 'Otoyolda kredi kartı ile ödeme yapabilir miyim?', a: 'Evet, mobil POS cihazlarımızla yerinde kredi kartı ödemesi ve taksit imkanı sunuyoruz, ayrıca FAST ile anlık havale de kabul ediyoruz.' },
      { q: 'Viyadük veya tünel içinde kaldıysam ne yapmalıyım?', a: 'Dört yönlü sinyalleri açıp mümkünse bariyer dışına geçin, bizi arayın; ekibimiz trafik akışını bozmadan güvenli müdahale protokolüyle size ulaşır.' },
      { q: 'Ağır vasıta veya tır için de hizmet veriyor musunuz?', a: 'Evet, çift çeker gözlüklü ağır hizmet vinç sistemlerimizle kamyon, tır ve otobüs kurtarma hizmeti de sunuyoruz.' }
    ],
    neighbors: ['kurnakoy-mecidiye-oto-cekici', 'omerli-resadiye-oto-cekici', 'dilovasi-oto-cekici', 'tem-otoyolu-oto-cekici'],
    distanceTable: null
  },
  {
    slug: 'kurtkoy-oto-cekici',
    name: 'Kurtköy',
    shortName: 'Kurtköy',
    isAds: true,
    coords: { lat: 40.9036, lng: 29.3278 },
    metaTitle: 'Kurtköy Oto Çekici | 7/24 Kurtköy Acil Çekici & Kurtarma',
    metaDescription: 'Kurtköy, Viaport, Yenişehir ve Çamlık bölgesinde 7/24 acil oto çekici. 10-15 dakikada yanınızda, %100 kaskolu taşıma, sabit fiyat garantisi. Hemen Ara: 0536 769 43 24.',
    h1: 'Kurtköy Oto Çekici | 7/24 Kurtköy Acil Çekici & Kurtarma',
    intro: '15 Dakikada Yanınızda • Kaskolu Taşıma • Kredi Kartı Geçerli • Sabit Fiyat Garantisi. Kurtköy, Viaport, Yenişehir ve Çamlık bölgesinde nöbetçi ekiplerimiz hazır bekliyor; tek yapmanız gereken hemen aramak ya da WhatsApp\'tan konumunuzu atmak.',
    trafficAnalysis: 'Kurtköy, Sabiha Gökçen Havalimanı\'na yakınlığı, Viaport alışveriş ve yaşam merkezi, Yenişehir\'in yoğun konut dokusu ve Kuzey Marmara Otoyolu ile TEM bağlantı kavşaklarının kesişim noktasında bulunması nedeniyle İstanbul\'un en yoğun trafik koridorlarından biridir. Havalimanı giriş-çıkış trafiği gün içinde sürekli hareketlilik yaratırken, Viaport çevresindeki alışveriş trafiği özellikle hafta sonları yoğunluğu artırır. Çamlık mahallesindeki dar sokaklar ve E-5/TEM bağlantı rampaları ise ani şerit değiştirme kaynaklı küçük çaplı kazaların sık görüldüğü noktalardır.',
    scenarios: [
      { title: 'Havalimanı Trafiğinde Akü Bitmesi', desc: 'Havalimanı otoparklarında uzun süre bekleyen araçlarda akü boşalması sık yaşanan bir durumdur; yolcu uçuşunu kaçırmamak için hızlı takviye kritik önem taşır.' },
      { title: 'Viaport Çevresinde Hafif Çarpışma', desc: 'Yoğun alışveriş merkezi trafiğinde park manevraları sırasında yaşanan hafif çarpışmalarda araç güvenli bir noktaya nakledilir.' },
      { title: 'Elektrikli Araçlarda Yolda Şarj Bitmesi', desc: 'Tesla ve benzeri elektrikli araçlarda şarj seviyesinin tükenmesi durumunda özel "Transport Mode" protokolüyle hasarsız taşıma uyguluyoruz.' },
      { title: 'TEM Bağlantı Rampalarında Lastik Yarılması', desc: 'Yüksek hızdan ani rampa girişlerinde oluşan lastik yarılmaları, yerinde stepne değişimi veya çekici ile çözülür.' }
    ],
    equipment: 'Kurtköy ekibimiz, havalimanı çevresi ve Viaport gibi hassas bölgelerde hızlı ve sessiz operasyon için kompakt kayar platform araçlar kullanır. Basık gövdeli lüks araçlar için sıfır dereceli rampa, elektrikli araçlar için yalıtımlı çekme ekipmanı ve gece operasyonları için LED ikaz sistemleri her an hazırdır.',
    safety: 'Kurtköy çevresinde arıza yapan sürücülere önerimiz, mümkünse Viaport veya havalimanı otoparkı gibi güvenli bir alana ilerlemeleridir. Otoyol üzerinde kalındıysa emniyet şeridine geçilmeli, reflektör 150 metre arkaya konulmalıdır. Taşıma sonrası araçlar talebe göre Pendik Sanayi Sitesi veya Kurtköy çevresindeki yetkili servislere şasi hasarsız teslim edilir.',
    fieldCase: {
      title: 'Kurtköy Gişelerinde Elektrikli SUV Şasi Hasarsız Kurtarma',
      body: 'Kuzey Marmara Otoyolu Kurtköy gişeleri çıkışında bataryası tükenen bir elektrikli SUV için ekibimiz "Transport Mode" protokolünü devreye aldı; aracın elektronik park frenini devre dışı bırakarak kayar platforma şasi temas etmeden yükledi ve 20 dakika içinde yetkili servise teslim etti.'
    },
    faqs: [
      { q: 'Kurtköy\'de çekici fiyatı ne kadar?', a: 'Fiyatımız başlangıç noktanız ve gideceğiniz mesafeye göre değişir; telefonda konumunuzu aldığımız anda size sabit ve net bir fiyat teyidi veririz, ek ücret yoktur.' },
      { q: 'Kurtköy\'e intikal süreniz ne kadar?', a: 'Bölgede sürekli nöbetçi aracımız bulunduğu için ortalama 10-15 dakika içinde yanınızda oluyoruz.' },
      { q: 'Kredi kartıyla ödeme yapabilir miyim?', a: 'Evet, mobil POS ile yerinde kredi kartı ve taksitli ödeme kabul ediyoruz.' },
      { q: 'Havalimanı otoparkında aracım arızalandı, geliyor musunuz?', a: 'Evet, Sabiha Gökçen Havalimanı iç ve dış otopark alanlarına da hizmet veriyoruz; konumunuzu WhatsApp\'tan paylaşmanız yeterli.' },
      { q: 'Basık spor araç veya SUV için vinç gerekir mi?', a: 'Hayır, basık araçlar için sıfır dereceli rampa aparatımız sayesinde vinç kullanmadan güvenli taşıma yapıyoruz.' }
    ],
    neighbors: ['pendik-oto-cekici', 'sabiha-gokcen-oto-cekici', 'tem-otoyolu-oto-cekici', 'sancaktepe-oto-cekici'],
    distanceTable: [
      { place: 'Pendik Merkez', km: 8, minPrice: 650, maxPrice: 900, time: '12 Dk' },
      { place: 'Sabiha Gökçen Havalimanı', km: 4, minPrice: 500, maxPrice: 750, time: '8 Dk' },
      { place: 'Gebze OSB', km: 22, minPrice: 1100, maxPrice: 1500, time: '22 Dk' },
      { place: 'Tuzla Deri OSB', km: 14, minPrice: 800, maxPrice: 1100, time: '16 Dk' },
      { place: 'Sancaktepe Samandıra', km: 11, minPrice: 750, maxPrice: 1000, time: '14 Dk' }
    ]
  },
  {
    slug: 'pendik-oto-cekici',
    name: 'Pendik',
    shortName: 'Pendik',
    isAds: true,
    coords: { lat: 40.8773, lng: 29.2334 },
    metaTitle: 'Pendik Oto Çekici | 7/24 Pendik Acil Çekici & Yol Yardım',
    metaDescription: 'Pendik Merkez, Kaynarca, Velibaba ve E-5 hattında 7/24 oto çekici hizmeti. 10-15 dakikada yanınızda, sabit fiyat ve kaskolu taşıma garantisi.',
    h1: 'Pendik Oto Çekici | 7/24 Acil Çekici & Yol Yardım Hattı',
    intro: 'Pendik Merkez, Kaynarca, Velibaba ve sahil hattından E-5\'e kadar tüm bölgede 7/24 hizmet veren nöbetçi çekici filomuz, aracınızın bulunduğu yere en kısa sürede ulaşır.',
    trafficAnalysis: 'Pendik, sahil şeridi, Marmaray/E-5 ana arter bağlantısı ve Kurtköy\'e açılan yoğun koridoru ile İstanbul\'un en işlek ilçelerinden biridir. Kaynarca ve Velibaba\'daki yoğun konut yapılaşması sabah-akşam trafiğini artırırken, sahil yolu özellikle yaz aylarında rekreasyon trafiğiyle dolar. E-5 üzerindeki sürekli şerit değiştirme hareketi, küçük çaplı arka çarpma kazalarının ve ani fren kaynaklı zincirlemelerin en sık görüldüğü bölgedir.',
    scenarios: [
      { title: 'E-5 Üzerinde Ani Şerit Değiştirme Kazaları', desc: 'Yoğun şerit değiştirme trafiğinde oluşan çarpışmalarda araçların güvenli alana çekilmesi gerekir.' },
      { title: 'Sahil Yolunda Rutubet Kaynaklı Elektrik Arızaları', desc: 'Deniz kenarı nem oranı yüksek bölgelerde elektrik kontak sorunları ve marş vermeme arızaları sık görülür.' },
      { title: 'Kaynarca Yokuşlarında Debriyaj/Vites Arızaları', desc: 'Dik yokuş ve sık trafik ışığı olan bölgelerde manuel vitesli araçlarda debriyaj yanması riski artar.' },
      { title: 'Marmaray Bağlantı Noktalarında Park Hasarları', desc: 'Yoğun toplu taşıma transfer noktalarında dar park alanlarında oluşan hasarlarda yerinde müdahale sağlanır.' }
    ],
    equipment: 'Pendik ekibimiz sahil yolu ve dar sokak geçişlerine uygun kompakt kayar platform araçlar, nem/rutubet kaynaklı elektrik arızalarına yönelik taşınabilir dijital akü test cihazları ve her koşulda hızlı müdahale için GPS yönlendirmeli nöbetçi araç ağı kullanır.',
    safety: 'Pendik E-5 üzerinde arızalanan sürücülerin öncelikle sağ şeride geçip dört yönlü flaşörleri açması, ardından güvenli ise bariyer dışına çıkması önerilir. Taşınan araçlar talep üzerine Pendik Sanayi Sitesi, Kartal veya Kurtköy çevresindeki yetkili servislere şasi hasarsız teslim edilir.',
    fieldCase: {
      title: 'Pendik Sahil Yolunda Rutubet Kaynaklı Marş Arızası',
      body: 'Sahil yolunda gece aniden marş vermeyen bir aracın elektrik kontaklarında rutubet tespit edildi; ekibimiz yerinde kontak temizliği ve dijital akü takviyesiyle aracı 15 dakika içinde yeniden çalışır hale getirdi, ek çekiciye gerek kalmadı.'
    },
    faqs: [
      { q: 'Pendik\'te çekici çağırmak ne kadar sürer?', a: 'Bölgede sabit nöbetçi aracımız olduğu için ortalama 10-15 dakikada olay yerine ulaşıyoruz.' },
      { q: 'Sahil yolunda gece de hizmet veriyor musunuz?', a: 'Evet, 7/24 kesintisiz hizmet veriyoruz, gece-gündüz farkı olmadan aynı hızda müdahale ediyoruz.' },
      { q: 'Fiyatlandırma nasıl yapılıyor?', a: 'Konumunuz ve varış noktanıza göre telefonda net ve sabit bir fiyat teyidi veririz, sürpriz ücret talep edilmez.' },
      { q: 'Kredi kartı ile ödeme alıyor musunuz?', a: 'Evet, mobil POS cihazımızla yerinde kredi kartı ve taksit ödemesi kabul ediyoruz.' },
      { q: 'Aracımı kendi anlaştığım servise götürebilir misiniz?', a: 'Evet, aracınızı belirttiğiniz herhangi bir yetkili veya özel servise şasi hasarsız teslim ediyoruz.' }
    ],
    neighbors: ['kurtkoy-oto-cekici', 'tuzla-oto-cekici', 'sabiha-gokcen-oto-cekici', 'sancaktepe-oto-cekici'],
    distanceTable: [
      { place: 'Kurtköy', km: 8, minPrice: 650, maxPrice: 900, time: '12 Dk' },
      { place: 'Tuzla Merkez', km: 9, minPrice: 700, maxPrice: 950, time: '13 Dk' },
      { place: 'Kartal', km: 6, minPrice: 550, maxPrice: 800, time: '10 Dk' },
      { place: 'Sabiha Gökçen Havalimanı', km: 11, minPrice: 750, maxPrice: 1000, time: '15 Dk' }
    ]
  },
  {
    slug: 'cayirova-oto-cekici',
    name: 'Çayırova',
    shortName: 'Çayırova',
    isAds: true,
    coords: { lat: 40.8225, lng: 29.3783 },
    metaTitle: 'Çayırova Oto Çekici | 7/24 Çayırova Acil Çekici & Kurtarma',
    metaDescription: 'Çayırova, Şekerpınar otoban girişi ve Akse Mahallesi\'nde 7/24 oto çekici ve yol yardım hizmeti. 10-15 dakika intikal, sabit fiyat garantisi.',
    h1: 'Çayırova Oto Çekici | 7/24 Acil Çekici & Yol Yardım',
    intro: 'Çayırova, Şekerpınar otoban girişi ve Akse Mahallesi\'nde İstanbul-Kocaeli aksının tam kalbindeyiz; nöbetçi ekiplerimiz 10-15 dakikada yanınızda.',
    trafficAnalysis: 'Çayırova, İstanbul ile Kocaeli arasındaki geçiş koridorunun merkezinde yer alır ve Şekerpınar otoban girişiyle doğrudan bağlantılıdır. Akse Mahallesi çevresindeki sanayi tesisleri gündüz saatlerinde ağır vasıta trafiğini yoğunlaştırırken, otoban giriş rampalarında hız uyumsuzluğuna bağlı kazalar sık yaşanır. Kocaeli aksına geçiş yapan uzun yol araçlarının yorgunluk kaynaklı dikkat dağınıklığı da bölgede dikkat edilmesi gereken bir diğer risk faktörüdür.',
    scenarios: [
      { title: 'Otoban Giriş Rampasında Hız Uyumsuzluğu Kazaları', desc: 'Ana yoldan otobana hızlanarak giren araçlarla mevcut trafik arasında hız farkı kaynaklı çarpışmalar yaşanabilir.' },
      { title: 'Sanayi Bölgesinde Ağır Vasıta Arızaları', desc: 'Akse Mahallesi çevresindeki OSB\'lerde kamyon ve iş makinelerinde sık görülen hidrolik ve fren sistemi arızaları.' },
      { title: 'Uzun Yolda Yorgunluk Kaynaklı Şerit İhlali Kazaları', desc: 'Kocaeli aksından gelen uzun yol sürücülerinde yorgunluk kaynaklı küçük çaplı kazalar.' },
      { title: 'Aşırı Isınma (Hararet) Arızaları', desc: 'Yaz aylarında uzun süreli otoban sürüşü sonrası motor soğutma sistemi arızaları.' }
    ],
    equipment: 'Çayırova ekibimiz, sanayi bölgesindeki ağır vasıtalara müdahale için güçlendirilmiş çekme halatları ve çift çeker gözlüklü vinç sistemleri, otoban giriş noktalarında güvenli operasyon için reflektif ikaz kuleleri kullanır.',
    safety: 'Şekerpınar otoban girişine yakın bölgede arızalanan araçların, mümkünse rampa öncesi geniş banket alanına çekilmesi, dört yönlü sinyallerin açılması önerilir. Taşıma sonrası araçlar Gebze OSB veya Çayırova çevresindeki yetkili servislere teslim edilir.',
    fieldCase: {
      title: 'Şekerpınar Otoban Girişinde Kamyon Fren Arızası Kurtarma',
      body: 'Akse Mahallesi\'nden otobana giriş yapan bir kamyonda fren hidrolik kaybı tespit edildi; ağır hizmet vinç ekibimiz aracı güvenli şekilde banket alanına çekerek trafiği normale döndürdü ve kamyonu Gebze OSB\'deki yetkili servise nakletti.'
    },
    faqs: [
      { q: 'Çayırova\'da hangi bölgelere hizmet veriyorsunuz?', a: 'Çayırova merkez, Şekerpınar otoban girişi ve Akse Mahallesi dahil tüm çevreye 7/24 hizmet veriyoruz.' },
      { q: 'Ağır vasıta (kamyon/iş makinesi) çekiyor musunuz?', a: 'Evet, çift çeker gözlüklü ağır hizmet vinç sistemlerimizle kamyon ve iş makinesi kurtarma hizmeti sunuyoruz.' },
      { q: 'İntikal süreniz ne kadar?', a: 'Bölgede 10-15 dakika içinde olay yerine ulaşıyoruz.' },
      { q: 'Fiyat sabit mi, ek ücret çıkıyor mu?', a: 'Telefonda konumunuza göre verdiğimiz fiyat sabittir, sürpriz ek ücret talep etmiyoruz.' },
      { q: 'Gebze OSB\'ye araç teslimi yapıyor musunuz?', a: 'Evet, aracınızı talep ettiğiniz Gebze OSB içindeki yetkili servise şasi hasarsız teslim ediyoruz.' }
    ],
    neighbors: ['gebze-oto-cekici', 'sekerpinar-oto-cekici', 'dilovasi-oto-cekici', 'tem-otoyolu-oto-cekici'],
    distanceTable: [
      { place: 'Gebze Merkez', km: 10, minPrice: 700, maxPrice: 950, time: '14 Dk' },
      { place: 'Şekerpınar Gişeleri', km: 3, minPrice: 450, maxPrice: 650, time: '7 Dk' },
      { place: 'Dilovası', km: 13, minPrice: 800, maxPrice: 1100, time: '16 Dk' }
    ]
  },
  {
    slug: 'gebze-oto-cekici',
    name: 'Gebze',
    shortName: 'Gebze',
    isAds: true,
    coords: { lat: 40.8020, lng: 29.4310 },
    metaTitle: 'Gebze Oto Çekici | 7/24 Gebze Acil Çekici & Kurtarma',
    metaDescription: 'Gebze Merkez, Gebze OSB, Barış Mah ve Eskihisar yolunda 7/24 oto çekici ve yol yardım. 10-15 dakika intikal, kaskolu taşıma garantisi.',
    h1: 'Gebze Oto Çekici | 7/24 Acil Çekici & Yol Yardım Hattı',
    intro: 'Gebze Merkez, Gebze OSB, Barış Mahallesi ve Eskihisar yolu çevresinde nöbetçi ekiplerimiz 7/24 hazır; sanayi bölgesi içi ve otoyol üzeri tüm arızalarınızda yanınızdayız.',
    trafficAnalysis: 'Gebze, Türkiye\'nin en büyük organize sanayi bölgelerinden birine ev sahipliği yapar ve bu durum gündüz saatlerinde yoğun ağır vasıta trafiği yaratır. Barış Mahallesi çevresindeki dar sanayi sokakları, forklift ve kamyon trafiğinin kesiştiği noktalarda manevra kazalarına sahne olur. Eskihisar yolu ise Gebze\'yi Darıca ve feribot iskelesine bağlayan, özellikle tatil dönemlerinde yoğunlaşan bir aks olarak dikkat çeker.',
    scenarios: [
      { title: 'OSB İçinde Forklift/Kamyon Manevra Kazaları', desc: 'Sanayi sitesi içi dar alanlarda yük araçlarının manevra sırasında çarpışmaları.' },
      { title: 'Ağır Yük Taşıyan Tırlarda Lastik Patlaması', desc: 'Aşırı yüklü tırlarda sık görülen lastik patlamaları, trafik akışını tehlikeye atabilir.' },
      { title: 'Eskihisar Yolunda Feribot Kuyruğu Kaynaklı Ani Fren', desc: 'Feribot iskelesine yaklaşan araçlarda ani yavaşlama kaynaklı arkadan çarpma riski.' },
      { title: 'Sanayi Bölgesinde Akü ve Marş Arızaları', desc: 'Uzun süre çalışmayan filo araçlarında sık görülen akü boşalması sorunları.' }
    ],
    equipment: 'Gebze OSB operasyonlarımızda ağır hizmet vinç tertibatı, çift çeker gözlüklü kurtarıcılar ve dar sanayi sokaklarında manevra kolaylığı sağlayan kompakt kayar platform araçlar kullanılır. Endüstriyel dijital akü takviye cihazlarımız 12V/24V sistemlere uyumludur.',
    safety: 'Gebze OSB içinde arızalanan araçların mümkünse ana yoldan uzaklaştırılıp kenar şeride çekilmesi, forklift trafiğine dikkat edilmesi önerilir. Taşınan araçlar Gebze Küçük Sanayi Sitesi veya talep edilen başka bir yetkili servise şasi hasarsız teslim edilir.',
    fieldCase: {
      title: 'Gebze OSB\'de Ağır Yüklü Tırda Lastik Patlaması Müdahalesi',
      body: 'Gebze OSB ana yolunda aşırı yüklü bir tırın arka lastiği patladı; ağır hizmet ekibimiz aracı güvenli şekilde kenara alarak yerinde stepne montajı yaptı, operasyon 30 dakika içinde tamamlandı ve trafik akışı yeniden sağlandı.'
    },
    faqs: [
      { q: 'Gebze OSB içine hizmet veriyor musunuz?', a: 'Evet, Gebze OSB\'nin tüm cadde ve sokaklarına 7/24 hizmet veriyoruz.' },
      { q: 'Tır ve kamyon için özel ekipmanınız var mı?', a: 'Evet, çift çeker gözlüklü ağır hizmet vinç sistemlerimizle her boyutta ağır vasıtaya müdahale edebiliyoruz.' },
      { q: 'Gebze\'de intikal süreniz nedir?', a: 'Ortalama 10-15 dakika içinde olay yerine ulaşıyoruz.' },
      { q: 'Kredi kartı ile ödeme kabul ediyor musunuz?', a: 'Evet, mobil POS ile yerinde kredi kartı ve taksit ödemesi alıyoruz.' },
      { q: 'Eskihisar feribot iskelesine de geliyor musunuz?', a: 'Evet, Eskihisar yolu ve iskele çevresine de hizmet veriyoruz.' }
    ],
    neighbors: ['cayirova-oto-cekici', 'dilovasi-oto-cekici', 'darica-oto-cekici', 'sekerpinar-oto-cekici'],
    distanceTable: [
      { place: 'Çayırova', km: 10, minPrice: 700, maxPrice: 950, time: '14 Dk' },
      { place: 'Dilovası', km: 9, minPrice: 650, maxPrice: 900, time: '12 Dk' },
      { place: 'Darıca', km: 7, minPrice: 600, maxPrice: 850, time: '10 Dk' },
      { place: 'Eskihisar İskelesi', km: 6, minPrice: 550, maxPrice: 800, time: '9 Dk' }
    ]
  },
  {
    slug: 'sabiha-gokcen-oto-cekici',
    name: 'Sabiha Gökçen',
    shortName: 'Sabiha Gökçen Havalimanı',
    isAds: true,
    coords: { lat: 40.8983, lng: 29.3092 },
    metaTitle: 'Sabiha Gökçen Oto Çekici | 7/24 Havalimanı Acil Çekici',
    metaDescription: 'Sabiha Gökçen Havalimanı giriş-çıkış, kargo alanı ve çevresinde 7/24 oto çekici ve yol yardım. Uçuşunuzu kaçırmayın, 10-15 dakikada yanınızdayız.',
    h1: 'Sabiha Gökçen Havalimanı Oto Çekici | 7/24 Acil Yol Yardım',
    intro: 'Sabiha Gökçen Havalimanı giriş-çıkış yolları, kargo alanı ve çevresinde uçuşunuzu kaçırmamanız için hızlı ve güvenilir çekici hizmeti veriyoruz.',
    trafficAnalysis: 'Sabiha Gökçen Havalimanı çevresi, yolcu bırakma-alma trafiği, kargo taşımacılığı ve otopark giriş-çıkışlarının kesiştiği yüksek yoğunluklu bir bölgedir. Terminal önü kısa süreli duraklama alanlarında oluşan ani fren kaynaklı küçük çarpmalar, uzun süreli otopark bekleyişlerinde ise akü boşalmaları en sık karşılaşılan durumlardır. Kargo alanı çevresindeki ağır vasıta trafiği de ayrı bir risk unsuru oluşturur.',
    scenarios: [
      { title: 'Terminal Önünde Ani Fren Kaynaklı Çarpmalar', desc: 'Yolcu indirme-bindirme bölgesindeki yoğun trafikte oluşan küçük çaplı kazalar.' },
      { title: 'Uzun Süreli Otoparkta Akü Boşalması', desc: 'Günler süren seyahatlerde araç aküsünün tükenmesi sonucu marş vermeme sorunu.' },
      { title: 'Kargo Alanı Çevresinde Ağır Vasıta Arızaları', desc: 'Kargo taşıma araçlarında sık görülen fren ve hidrolik sistem arızaları.' },
      { title: 'Uçuş Kaçırma Riskiyle Acil Transfer İhtiyacı', desc: 'Aracı arızalanan yolcuların terminale ulaşımını sağlamak için hızlı müdahale ve yönlendirme.' }
    ],
    equipment: 'Havalimanı çevresi operasyonlarımızda hızlı manevra kabiliyetine sahip kompakt kayar platform araçlar ve 12V/24V dijital akü takviye cihazları kullanılır; terminal güvenlik protokollerine uygun hızlı giriş-çıkış prosedürlerine hakim ekiplerimiz bulunur.',
    safety: 'Terminal önünde arızalanan araçların trafik görevlilerinin yönlendirmesine uyarak güvenli bir noktaya çekilmesi, otoparkta akü biten araçların ise bulunduğu kat ve blok bilgisini WhatsApp üzerinden net şekilde iletmesi işlemleri hızlandırır.',
    fieldCase: {
      title: 'Havalimanı Dış Otoparkında Akü Takviyesi ile Uçuş Kurtarma',
      body: 'Bir yolcu, 10 günlük seyahat sonrası otoparkta aracının akümünün tamamen boşaldığını fark etti; ekibimiz 8 dakika içinde dijital akü takviye cihazıyla aracı çalıştırarak yolcunun check-in\'e zamanında ulaşmasını sağladı.'
    },
    faqs: [
      { q: 'Havalimanı otoparkına giriş yapabiliyor musunuz?', a: 'Evet, terminal protokollerine uygun şekilde iç ve dış otopark alanlarına giriş yapabiliyoruz.' },
      { q: 'Uçağımı kaçırmak üzereyim, ne kadar hızlı gelirsiniz?', a: 'Havalimanı çevresinde sürekli nöbetçi aracımız bulunur, ortalama 8-12 dakikada yanınızda oluyoruz.' },
      { q: 'Sadece akü takviyesi için de çağırabilir miyim?', a: 'Evet, çekici göndermeden sadece mobil akü takviye hizmeti de sunuyoruz.' },
      { q: 'Kargo alanı için ağır vasıta desteğiniz var mı?', a: 'Evet, kargo alanı çevresindeki ağır vasıtalara da hizmet veriyoruz.' },
      { q: 'Ödeme seçenekleriniz nelerdir?', a: 'Nakit, kredi kartı (taksitli) ve FAST havale ile yerinde ödeme kabul ediyoruz.' }
    ],
    neighbors: ['kurtkoy-oto-cekici', 'pendik-oto-cekici', 'sancaktepe-oto-cekici', 'tem-otoyolu-oto-cekici'],
    distanceTable: [
      { place: 'Kurtköy Merkez', km: 4, minPrice: 500, maxPrice: 750, time: '8 Dk' },
      { place: 'Pendik Merkez', km: 11, minPrice: 750, maxPrice: 1000, time: '15 Dk' },
      { place: 'Sancaktepe', km: 13, minPrice: 800, maxPrice: 1050, time: '16 Dk' }
    ]
  },
  {
    slug: 'tem-otoyolu-oto-cekici',
    name: 'TEM Otoyolu',
    shortName: 'TEM Otoyolu',
    isAds: true,
    coords: { lat: 40.8500, lng: 29.3800 },
    metaTitle: 'TEM Otoyolu Oto Çekici | Kurtköy-Gebze Hattı 7/24 Kurtarıcı',
    metaDescription: 'TEM Otoyolu Kurtköy-Gebze koridorunda 7/24 acil oto çekici ve kurtarma hizmeti. Dinlenme tesisleri ve gişe çevresinde 10-15 dakika intikal.',
    h1: 'TEM Otoyolu Oto Çekici | Kurtköy-Gebze Hattı 7/24 Kurtarıcı',
    intro: 'TEM Otoyolu\'nun Kurtköy-Gebze koridorunda, dinlenme tesisleri ve gişe çevresinde nöbetçi kurtarıcı filomuz 7/24 hazır bekliyor.',
    trafficAnalysis: 'TEM Otoyolu\'nun Kurtköy-Gebze arası kesimi, Anadolu yakasının en yoğun transit koridorlarından biridir. Dinlenme tesisleri çevresinde araç giriş-çıkış manevraları, gişe öncesi şerit daralmaları ve sürekli akan ağır vasıta trafiği, bu hattı dikkat gerektiren bir güzergah haline getirir. Yüksek hızda seyreden araçlarda ani arıza durumunda emniyet şeridine geçiş süresi hayati önem taşır.',
    scenarios: [
      { title: 'Dinlenme Tesisi Giriş-Çıkışında Manevra Kazaları', desc: 'Yoğun giriş-çıkış trafiğinde oluşan çarpışmalar ve sıkışmalar.' },
      { title: 'Gişe Öncesi Şerit Daralmasında Zincirleme Kazalar', desc: 'HGS/OGS şeritlerine yönelirken oluşan ani şerit değiştirmeler kaynaklı kazalar.' },
      { title: 'Yüksek Hızda Lastik Patlaması', desc: 'Uzun mesafe sürüşlerde lastik ısınması sonucu meydana gelen ani patlamalar.' },
      { title: 'Ağır Vasıtalarda Hararet ve Motor Arızaları', desc: 'Sürekli yüksek hızda seyreden kamyon ve tırlarda motor soğutma sistemi arızaları.' }
    ],
    equipment: 'TEM hattı operasyonlarımızda yüksek hızlı otoyol koşullarına uygun LED ikaz kuleleri, reflektif güvenlik ekipmanları ve hızlı müdahale için GPS yönlendirmeli nöbetçi araç ağı kullanılır.',
    safety: 'TEM üzerinde arızalanan araçların mutlaka dört yönlü sinyalleri açması, mümkünse aracı emniyet şeridine alıp bariyer dışına geçmesi önerilir. Reflektör üçgeni 150 metre arkaya konulmalıdır.',
    fieldCase: {
      title: 'TEM Gebze Çıkışında Çoklu Araç Zincirleme Kaza Kurtarma',
      body: 'Gişe öncesi şerit daralmasında meydana gelen 3 araçlı zincirleme kazada, ekibimiz art arda 2 kayar platform aracı sahaya yönlendirerek hasarlı araçları güvenli şekilde tahliye etti ve trafiğin yeniden akmasına yardımcı oldu.'
    },
    faqs: [
      { q: 'TEM Otoyolu\'nda hangi kesime hizmet veriyorsunuz?', a: 'Kurtköy-Gebze koridoru ve bağlantılı dinlenme tesisi/gişe bölgelerine 7/24 hizmet veriyoruz.' },
      { q: 'İntikal süreniz ne kadar?', a: 'Hat üzerinde konuşlu araçlarımızla ortalama 10-15 dakikada yanınızda oluyoruz.' },
      { q: 'Zincirleme kazalarda birden fazla araca hizmet verebiliyor musunuz?', a: 'Evet, gerektiğinde birden fazla kayar platform aracımızı aynı anda sahaya yönlendirebiliyoruz.' },
      { q: 'Fiyat politikanız nedir?', a: 'Telefonda konumunuza göre sabit fiyat teyidi veriyoruz, sürpriz ek ücret yoktur.' },
      { q: 'Ağır vasıta kurtarma hizmeti veriyor musunuz?', a: 'Evet, çift çeker gözlüklü ağır hizmet vinç sistemlerimizle kamyon ve tır kurtarma hizmeti sunuyoruz.' }
    ],
    neighbors: ['kurtkoy-oto-cekici', 'cayirova-oto-cekici', 'gebze-oto-cekici', 'sekerpinar-oto-cekici'],
    distanceTable: [
      { place: 'Kurtköy Gişeleri', km: 0, minPrice: 500, maxPrice: 700, time: '10 Dk' },
      { place: 'Şekerpınar Gişeleri', km: 15, minPrice: 850, maxPrice: 1150, time: '18 Dk' },
      { place: 'Gebze Çıkışı', km: 20, minPrice: 1000, maxPrice: 1350, time: '20 Dk' }
    ]
  },
  {
    slug: 'tuzla-oto-cekici',
    name: 'Tuzla',
    shortName: 'Tuzla',
    isAds: true,
    coords: { lat: 40.8156, lng: 29.3028 },
    metaTitle: 'Tuzla Oto Çekici | 7/24 Tuzla Acil Çekici & Kurtarma',
    metaDescription: 'Tuzla İçmeler, Aydınlı, Tepeören, Deri OSB ve Formula 1 yolunda 7/24 oto çekici hizmeti. 10-15 dakika intikal, sabit fiyat garantisi.',
    h1: 'Tuzla Oto Çekici | 7/24 Acil Çekici & Yol Yardım',
    intro: 'Tuzla İçmeler, Aydınlı, Tepeören, Deri OSB ve Formula 1 pisti çevresinde nöbetçi ekiplerimiz 7/24 hazır bekliyor.',
    trafficAnalysis: 'Tuzla, hem sahil şeridindeki İçmeler bölgesi hem de Deri OSB ve Aydınlı\'daki yoğun sanayi dokusuyla karma bir trafik profiline sahiptir. Tepeören çevresindeki Formula 1 pisti yakınında etkinlik dönemlerinde araç yoğunluğu ciddi şekilde artar. Deri OSB\'deki kamyon ve tır trafiği, dar sokaklarda manevra kazalarına zemin hazırlar.',
    scenarios: [
      { title: 'Deri OSB\'de Ağır Vasıta Manevra Kazaları', desc: 'Sanayi bölgesi içi dar yollarda kamyon manevraları sırasında oluşan çarpışmalar.' },
      { title: 'Formula 1 Etkinlik Dönemlerinde Yoğun Trafik Kazaları', desc: 'Pist etkinliklerinde artan araç yoğunluğu kaynaklı küçük çaplı kazalar.' },
      { title: 'İçmeler Sahil Yolunda Nem Kaynaklı Elektrik Arızaları', desc: 'Deniz kenarı rutubetin elektrik sistemlerinde yarattığı kontak sorunları.' },
      { title: 'Aydınlı Bölgesinde Akü ve Marş Sorunları', desc: 'Sanayi bölgesinde uzun süre bekleyen filo araçlarında akü boşalması.' }
    ],
    equipment: 'Tuzla ekibimiz, Deri OSB\'nin ağır vasıta trafiğine uygun çift çeker gözlüklü vinç sistemleri ve sahil bölgesi için kompakt kayar platform araçlar kullanır.',
    safety: 'Deri OSB içinde arızalanan araçların ana yoldan uzaklaştırılması, Formula 1 etkinlik dönemlerinde ise trafik yönlendirme ekiplerinin talimatlarına uyulması önerilir. Taşınan araçlar Tuzla veya Kartal çevresindeki yetkili servislere teslim edilir.',
    fieldCase: {
      title: 'Deri OSB\'de Kamyon Manevra Kazası Kurtarma',
      body: 'Deri OSB\'de dar bir sokakta manevra yaparken sıkışan bir kamyon için ekibimiz özel çekme ekipmanıyla aracı güvenli şekilde kurtardı ve trafiği normale döndürdü, operasyon 25 dakika sürdü.'
    },
    faqs: [
      { q: 'Tuzla\'da hangi mahallelere hizmet veriyorsunuz?', a: 'İçmeler, Aydınlı, Tepeören ve Deri OSB dahil Tuzla\'nın tüm bölgelerine 7/24 hizmet veriyoruz.' },
      { q: 'Formula 1 pisti etkinliklerinde hizmet veriyor musunuz?', a: 'Evet, etkinlik dönemlerinde de nöbetçi ekiplerimiz bölgede hazır bulunur.' },
      { q: 'Deri OSB\'ye ağır vasıta için geliyor musunuz?', a: 'Evet, çift çeker gözlüklü ağır hizmet vinç sistemlerimizle kamyon ve tır kurtarma yapıyoruz.' },
      { q: 'İntikal süreniz nedir?', a: 'Ortalama 10-15 dakika içinde olay yerine ulaşıyoruz.' },
      { q: 'Kredi kartı ile ödeme alıyor musunuz?', a: 'Evet, mobil POS ile yerinde kredi kartı ve taksit ödemesi kabul ediyoruz.' }
    ],
    neighbors: ['pendik-oto-cekici', 'kurtkoy-oto-cekici', 'sekerpinar-oto-cekici', 'cayirova-oto-cekici'],
    distanceTable: [
      { place: 'Pendik Merkez', km: 9, minPrice: 700, maxPrice: 950, time: '13 Dk' },
      { place: 'Deri OSB', km: 3, minPrice: 450, maxPrice: 650, time: '7 Dk' },
      { place: 'Formula 1 Pisti', km: 6, minPrice: 550, maxPrice: 800, time: '10 Dk' }
    ]
  },
  {
    slug: 'sekerpinar-oto-cekici',
    name: 'Şekerpınar',
    shortName: 'Şekerpınar',
    isAds: false,
    coords: { lat: 40.8130, lng: 29.3700 },
    metaTitle: 'Şekerpınar Oto Çekici | 7/24 Acil Çekici & Kurtarma',
    metaDescription: 'Şekerpınar gişeleri, lojistik depolar ve KMO-TEM kesişim noktasında 7/24 oto çekici hizmeti. 10-15 dakika intikal, sabit fiyat garantisi.',
    h1: 'Şekerpınar Oto Çekici | 7/24 Acil Çekici & Yol Yardım',
    intro: 'Şekerpınar gişeleri, lojistik depo bölgesi ve Kuzey Marmara Otoyolu ile TEM\'in kesişim noktasında nöbetçi ekiplerimiz 7/24 hazır.',
    trafficAnalysis: 'Şekerpınar, Kuzey Marmara Otoyolu ile TEM Otoyolu\'nun kesiştiği stratejik bir kavşak bölgesidir ve çevresinde yoğunlaşan lojistik depo kompleksleri sürekli kamyon trafiği yaratır. Gişe bölgesinde iki otoyolun birleşmesi, araçların ani şerit değiştirmesine ve hız düşürmesine neden olarak kaza riskini artırır.',
    scenarios: [
      { title: 'İki Otoyol Kesişiminde Şerit Değiştirme Kazaları', desc: 'KMO ve TEM\'in birleştiği noktada ani şerit değişimlerinden kaynaklanan çarpışmalar.' },
      { title: 'Lojistik Depo Bölgesinde Kamyon Arızaları', desc: 'Yük indirme-bindirme sonrası kamyonlarda görülen fren ve süspansiyon arızaları.' },
      { title: 'Gişe Bölgesinde Hız Düşürme Kaynaklı Çarpmalar', desc: 'Gişeye yaklaşırken ani yavaşlama sonucu arkadan çarpma riski.' },
      { title: 'Uzun Yolda Lastik ve Hararet Arızaları', desc: 'Sürekli yük taşıyan araçlarda lastik ve motor soğutma sorunları.' }
    ],
    equipment: 'Şekerpınar ekibimiz, iki otoyolun kesiştiği bölgede hızlı müdahale için reflektif ikaz kuleleri ve lojistik bölgesindeki ağır vasıtalara yönelik çift çeker gözlüklü vinç sistemleri kullanır.',
    safety: 'Kesişim bölgesinde arızalanan araçların mümkünse en yakın gişe banketine ilerlemesi, dört yönlü sinyallerin açılması önerilir. Taşınan araçlar Gebze veya Çayırova çevresindeki yetkili servislere teslim edilir.',
    fieldCase: {
      title: 'Şekerpınar Kesişim Noktasında Lojistik Kamyonu Kurtarma',
      body: 'KMO-TEM kesişiminde fren arızası yapan bir lojistik kamyonu için ekibimiz 13 dakikada sahaya ulaştı, aracı güvenli şekilde banket alanına çekerek trafiği normale döndürdü.'
    },
    faqs: [
      { q: 'Şekerpınar gişelerine ne kadar sürede gelirsiniz?', a: 'Ortalama 10-15 dakika içinde olay yerine ulaşıyoruz.' },
      { q: 'Lojistik depo bölgesine hizmet veriyor musunuz?', a: 'Evet, çevredeki tüm lojistik depo ve dağıtım merkezlerine hizmet veriyoruz.' },
      { q: 'KMO-TEM kesişiminde çalışıyor musunuz?', a: 'Evet, iki otoyolun kesiştiği bölgede de 7/24 nöbetçi ekibimiz bulunur.' },
      { q: 'Fiyat politikanız nedir?', a: 'Telefonda konumunuza göre sabit fiyat teyidi veriyoruz.' },
      { q: 'Ağır vasıta için özel ekipmanınız var mı?', a: 'Evet, çift çeker gözlüklü ağır hizmet vinç sistemlerimizle kamyon kurtarma yapıyoruz.' }
    ],
    neighbors: ['cayirova-oto-cekici', 'gebze-oto-cekici', 'tem-otoyolu-oto-cekici', 'tuzla-oto-cekici'],
    distanceTable: null
  },
  {
    slug: 'dilovasi-oto-cekici',
    name: 'Dilovası',
    shortName: 'Dilovası',
    isAds: false,
    coords: { lat: 40.7800, lng: 29.5370 },
    metaTitle: 'Dilovası Oto Çekici | 7/24 Acil Çekici & Kurtarma',
    metaDescription: 'Dilovası viyadüğü, Mermerciler OSB ve Osmangazi Köprüsü çıkışında 7/24 oto çekici hizmeti. 10-15 dakika intikal, kaskolu taşıma garantisi.',
    h1: 'Dilovası Oto Çekici | 7/24 Acil Çekici & Yol Yardım',
    intro: 'Dilovası viyadüğü, Mermerciler OSB ve Osmangazi Köprüsü çıkışı çevresinde nöbetçi ekiplerimiz 7/24 hizmet veriyor.',
    trafficAnalysis: 'Dilovası, Osmangazi Köprüsü\'nden gelen yoğun transit trafiğin Kocaeli\'ye giriş noktasıdır ve uzun viyadük geçişi bölgeye özgü risk faktörleri taşır. Mermerciler OSB çevresindeki ağır sanayi tesisleri, gündüz saatlerinde yoğun tır ve kamyon trafiği oluşturur. Köprü çıkışındaki hız değişimleri de kaza riskini artıran bir diğer unsurdur.',
    scenarios: [
      { title: 'Viyadükte Yüksek Hızdan Kaynaklı Kazalar', desc: 'Uzun viyadük geçişinde hız kontrolü kaybı sonucu oluşan çarpışmalar.' },
      { title: 'Osmangazi Köprüsü Çıkışında Ani Yavaşlama Kazaları', desc: 'Köprüden çıkışta hız değişimi kaynaklı arkadan çarpmalar.' },
      { title: 'Mermerciler OSB\'de Ağır Vasıta Arızaları', desc: 'Mermer ve taş taşıyan ağır yüklü araçlarda sık görülen süspansiyon arızaları.' },
      { title: 'Transit Yolda Lastik ve Hararet Sorunları', desc: 'Uzun mesafe transit geçişlerde motor ve lastik kaynaklı arızalar.' }
    ],
    equipment: 'Dilovası ekibimiz, viyadük geçişlerinde güvenli operasyon için reflektif ikaz ekipmanları ve Mermerciler OSB\'deki ağır yüklü araçlar için güçlendirilmiş çift çeker gözlüklü vinç sistemleri kullanır.',
    safety: 'Viyadük üzerinde arızalanan araçların dört yönlü sinyalleri açması, mümkünse viyadük sonu banket alanına ilerlemesi önerilir. Taşınan araçlar Gebze veya Dilovası çevresindeki yetkili servislere teslim edilir.',
    fieldCase: {
      title: 'Osmangazi Köprüsü Çıkışında Çoklu Araç Kazası Kurtarma',
      body: 'Köprü çıkışında ani yavaşlama sonucu oluşan 2 araçlı kazada ekibimiz hızlı müdahaleyle araçları güvenli alana çekti ve trafiğin yeniden akışını sağladı.'
    },
    faqs: [
      { q: 'Dilovası\'nda hangi bölgelere hizmet veriyorsunuz?', a: 'Dilovası viyadüğü, Mermerciler OSB ve Osmangazi Köprüsü çıkışı dahil tüm bölgeye hizmet veriyoruz.' },
      { q: 'Osmangazi Köprüsü\'ne de geliyor musunuz?', a: 'Evet, köprü çıkışı ve çevresindeki tüm güzergaha hizmet veriyoruz.' },
      { q: 'Ağır yüklü mermer taşıyan araçlara müdahale ediyor musunuz?', a: 'Evet, güçlendirilmiş vinç sistemlerimizle ağır yüklü araçlara da müdahale ediyoruz.' },
      { q: 'İntikal süreniz nedir?', a: 'Ortalama 10-15 dakika içinde olay yerine ulaşıyoruz.' },
      { q: 'Ödeme seçenekleriniz nelerdir?', a: 'Nakit, kredi kartı (taksitli) ve FAST havale kabul ediyoruz.' }
    ],
    neighbors: ['gebze-oto-cekici', 'cayirova-oto-cekici', 'darica-oto-cekici', 'kuzey-marmara-otoyolu-oto-cekici'],
    distanceTable: null
  },
  {
    slug: 'sultanbeyli-oto-cekici',
    name: 'Sultanbeyli',
    shortName: 'Sultanbeyli',
    isAds: false,
    coords: { lat: 40.9583, lng: 29.2650 },
    metaTitle: 'Sultanbeyli Oto Çekici | 7/24 Acil Çekici & Kurtarma',
    metaDescription: 'Sultanbeyli TEM ve KMO Paşaköy bağlantı koridorunda 7/24 oto çekici hizmeti. 10-15 dakika intikal, sabit fiyat garantisi.',
    h1: 'Sultanbeyli Oto Çekici | 7/24 Acil Çekici & Yol Yardım',
    intro: 'Sultanbeyli, TEM ve Kuzey Marmara Otoyolu\'nun Paşaköy bağlantı koridorunda nöbetçi ekiplerimiz 7/24 hazır bekliyor.',
    trafficAnalysis: 'Sultanbeyli, TEM Otoyolu ile Kuzey Marmara Otoyolu\'nun Paşaköy üzerinden bağlandığı stratejik bir koridor üzerindedir. Yoğun konut nüfusu ve sanayi dokusu nedeniyle hem şehir içi hem otoyol trafiği iç içe geçer. Paşaköy bağlantı rampalarında araçların hız ayarlaması yapması gerektiği noktalarda kaza riski artar.',
    scenarios: [
      { title: 'Paşaköy Bağlantı Rampasında Hız Ayarlama Kazaları', desc: 'İki otoyol arası bağlantı noktasında hız uyumsuzluğu kaynaklı çarpışmalar.' },
      { title: 'Şehir İçi-Otoyol Geçişinde Ani Fren Kazaları', desc: 'Şehir içi trafikten otoyola geçişte ani yavaşlama kaynaklı arkadan çarpmalar.' },
      { title: 'Yoğun Konut Bölgesinde Park Hasarları', desc: 'Dar sokaklarda park manevraları sırasında oluşan hasarlar.' },
      { title: 'Akü ve Marş Arızaları', desc: 'Günlük şehir içi kullanımda sık görülen akü boşalması sorunları.' }
    ],
    equipment: 'Sultanbeyli ekibimiz, hem şehir içi dar sokaklara hem otoyol bağlantı noktalarına hızlı erişim sağlayan kompakt kayar platform araçlar ve mobil akü takviye cihazları kullanır.',
    safety: 'Paşaköy bağlantı noktasında arızalanan araçların dört yönlü sinyalleri açması, mümkünse banket alanına ilerlemesi önerilir. Taşınan araçlar Sultanbeyli veya Sancaktepe çevresindeki yetkili servislere teslim edilir.',
    fieldCase: {
      title: 'Paşaköy Bağlantısında Hız Uyumsuzluğu Kazası Kurtarma',
      body: 'Paşaköy bağlantı rampasında iki araç arasında meydana gelen çarpışmada ekibimiz hızlı müdahaleyle araçları güvenli alana çekti ve sürücülere yönlendirme desteği sağladı.'
    },
    faqs: [
      { q: 'Sultanbeyli\'de hangi bölgelere hizmet veriyorsunuz?', a: 'Sultanbeyli merkez ve Paşaköy bağlantı koridoru dahil tüm bölgeye hizmet veriyoruz.' },
      { q: 'İntikal süreniz nedir?', a: 'Ortalama 10-15 dakika içinde olay yerine ulaşıyoruz.' },
      { q: 'Şehir içi mahallelere de geliyor musunuz?', a: 'Evet, Sultanbeyli\'nin tüm mahallelerine hizmet veriyoruz.' },
      { q: 'Fiyat politikanız nedir?', a: 'Telefonda konumunuza göre sabit fiyat teyidi veriyoruz.' },
      { q: 'Kredi kartı kabul ediyor musunuz?', a: 'Evet, mobil POS ile yerinde kredi kartı ödemesi alıyoruz.' }
    ],
    neighbors: ['sancaktepe-oto-cekici', 'kurnakoy-mecidiye-oto-cekici', 'omerli-resadiye-oto-cekici', 'kurtkoy-oto-cekici'],
    distanceTable: null
  },
  {
    slug: 'sancaktepe-oto-cekici',
    name: 'Sancaktepe',
    shortName: 'Sancaktepe',
    isAds: false,
    coords: { lat: 41.0050, lng: 29.2300 },
    metaTitle: 'Sancaktepe Oto Çekici | 7/24 Acil Çekici & Kurtarma',
    metaDescription: 'Sancaktepe, Samandıra gişeleri ve Paşaköy ayrımında 7/24 oto çekici hizmeti. 10-15 dakika intikal, kaskolu taşıma garantisi.',
    h1: 'Sancaktepe Oto Çekici | 7/24 Acil Çekici & Yol Yardım',
    intro: 'Sancaktepe, Samandıra gişeleri ve Paşaköy ayrımı çevresinde nöbetçi ekiplerimiz 7/24 hazır bekliyor.',
    trafficAnalysis: 'Sancaktepe, Samandıra gişeleri üzerinden Kuzey Marmara Otoyolu\'na bağlanan ve şehir içi trafiğin otoyola yoğun şekilde aktığı bir geçiş bölgesidir. Paşaköy ayrımındaki yön değiştirme hareketleri ve gişe öncesi yoğunluk, bölgede en sık görülen kaza nedenleri arasındadır.',
    scenarios: [
      { title: 'Samandıra Gişelerinde Yoğunluk Kaynaklı Kazalar', desc: 'Gişe öncesi yoğun trafikte ani fren ve şerit değiştirme kazaları.' },
      { title: 'Paşaköy Ayrımında Yön Değiştirme Kazaları', desc: 'Ayrım noktasında yanlış şeritten dönüş kaynaklı çarpışmalar.' },
      { title: 'Şehir İçi-Otoyol Geçiş Noktasında Arızalar', desc: 'Geçiş bölgesinde sık görülen akü ve lastik arızaları.' },
      { title: 'Uzun Bekleme Sonrası Akü Boşalması', desc: 'Trafik sıkışıklığında uzun süre çalışan araçlarda akü tükenmesi.' }
    ],
    equipment: 'Sancaktepe ekibimiz, gişe çevresi ve ayrım noktalarında hızlı müdahale için kompakt kayar platform araçlar ve mobil akü takviye cihazları kullanır.',
    safety: 'Samandıra gişeleri çevresinde arızalanan araçların banket alanına çekilmesi, dört yönlü sinyallerin açılması önerilir. Taşınan araçlar Sancaktepe veya Kurtköy çevresindeki yetkili servislere teslim edilir.',
    fieldCase: {
      title: 'Samandıra Gişeleri Önünde Akü Takviyesi Operasyonu',
      body: 'Gişe öncesi yoğun trafikte akümü tüketen bir sürücü için ekibimiz 10 dakikada sahaya ulaştı ve dijital akü takviye cihazıyla aracı yeniden çalışır hale getirdi.'
    },
    faqs: [
      { q: 'Sancaktepe\'de hangi bölgelere hizmet veriyorsunuz?', a: 'Sancaktepe merkez, Samandıra gişeleri ve Paşaköy ayrımı dahil tüm bölgeye hizmet veriyoruz.' },
      { q: 'İntikal süreniz nedir?', a: 'Ortalama 10-15 dakika içinde olay yerine ulaşıyoruz.' },
      { q: 'Sadece akü takviyesi için çağırabilir miyim?', a: 'Evet, çekici göndermeden sadece mobil akü takviye hizmeti de sunuyoruz.' },
      { q: 'Fiyat politikanız nedir?', a: 'Telefonda konumunuza göre sabit fiyat teyidi veriyoruz.' },
      { q: 'Kredi kartı kabul ediyor musunuz?', a: 'Evet, mobil POS ile yerinde kredi kartı ödemesi alıyoruz.' }
    ],
    neighbors: ['sultanbeyli-oto-cekici', 'kurtkoy-oto-cekici', 'sabiha-gokcen-oto-cekici', 'kurnakoy-mecidiye-oto-cekici'],
    distanceTable: null
  },
  {
    slug: 'kurnakoy-mecidiye-oto-cekici',
    name: 'Kurnaköy-Mecidiye',
    shortName: 'Kurnaköy-Mecidiye',
    isAds: false,
    coords: { lat: 41.0400, lng: 29.3500 },
    metaTitle: 'Kurnaköy-Mecidiye Oto Çekici | 7/24 Acil Çekici',
    metaDescription: 'KMO Kurnaköy gişeleri ve Mecidiye dinlenme tesisi çevresinde 7/24 oto çekici hizmeti. 10-15 dakika intikal, sabit fiyat garantisi.',
    h1: 'Kurnaköy-Mecidiye Oto Çekici | 7/24 Acil Çekici & Yol Yardım',
    intro: 'KMO Kurnaköy gişeleri ve Mecidiye dinlenme tesisi çevresinde nöbetçi ekiplerimiz 7/24 hazır bekliyor.',
    trafficAnalysis: 'Kurnaköy-Mecidiye hattı, Kuzey Marmara Otoyolu\'nun orta kesiminde, Mecidiye dinlenme tesisinin yoğun giriş-çıkış trafiğiyle karakterizedir. Uzun yol sürücülerinin dinlenme amaçlı tesise yönelmesi, ani şerit değiştirme ve hız kesme hareketlerini artırır. Kurnaköy gişeleri çevresindeki orman arazisi, gece görüş mesafesini kısıtlayan bir diğer faktördür.',
    scenarios: [
      { title: 'Dinlenme Tesisi Giriş-Çıkışında Ani Şerit Değişimi', desc: 'Tesise yönelen araçların ani manevraları kaynaklı çarpışmalar.' },
      { title: 'Gece Görüş Mesafesi Kısıtlı Bölgede Kazalar', desc: 'Orman arazisi çevresinde gece görüş mesafesinin azalması kaynaklı riskler.' },
      { title: 'Uzun Yolda Yorgunluk Kaynaklı Arızalar', desc: 'Dinlenmeden uzun süre seyreden sürücülerde dikkat dağınıklığı kazaları.' },
      { title: 'Gişe Çevresinde Lastik ve Akü Arızaları', desc: 'Gişe bekleme sürecinde ortaya çıkan araç arızaları.' }
    ],
    equipment: 'Kurnaköy-Mecidiye ekibimiz, orman arazisi çevresinde gece görüş destekli LED ikaz sistemleri ve dinlenme tesisi giriş-çıkışlarında hızlı müdahale için kompakt kayar platform araçlar kullanır.',
    safety: 'Mecidiye dinlenme tesisi çevresinde arızalanan araçların tesis içine yönlendirilmesi, mümkün değilse banket alanına çekilip dört yönlü sinyallerin açılması önerilir.',
    fieldCase: {
      title: 'Mecidiye Dinlenme Tesisi Çevresinde Gece Lastik Değişimi',
      body: 'Gece saatlerinde Mecidiye dinlenme tesisi çıkışında lastiği patlayan bir araç için ekibimiz yerinde stepne montajı yaparak sürücünün yoluna güvenle devam etmesini sağladı.'
    },
    faqs: [
      { q: 'Mecidiye dinlenme tesisine hizmet veriyor musunuz?', a: 'Evet, dinlenme tesisi ve çevresindeki tüm güzergaha 7/24 hizmet veriyoruz.' },
      { q: 'Gece de hizmet alabilir miyim?', a: 'Evet, 7/24 kesintisiz hizmet veriyoruz.' },
      { q: 'İntikal süreniz nedir?', a: 'Ortalama 10-15 dakika içinde olay yerine ulaşıyoruz.' },
      { q: 'Sadece lastik değişimi için çağırabilir miyim?', a: 'Evet, yerinde mobil lastik tamiri ve stepne değişimi hizmeti sunuyoruz.' },
      { q: 'Fiyat politikanız nedir?', a: 'Telefonda konumunuza göre sabit fiyat teyidi veriyoruz.' }
    ],
    neighbors: ['kuzey-marmara-otoyolu-oto-cekici', 'omerli-resadiye-oto-cekici', 'sultanbeyli-oto-cekici', 'sancaktepe-oto-cekici'],
    distanceTable: null
  },
  {
    slug: 'omerli-resadiye-oto-cekici',
    name: 'Ömerli-Reşadiye',
    shortName: 'Ömerli-Reşadiye',
    isAds: false,
    coords: { lat: 41.0500, lng: 29.2000 },
    metaTitle: 'Ömerli-Reşadiye Oto Çekici | 7/24 Acil Çekici',
    metaDescription: 'KMO Ömerli Barajı çevresi ve Reşadiye gişeleri bölgesinde 7/24 oto çekici hizmeti. Orman yolu dahil 10-15 dakika intikal.',
    h1: 'Ömerli-Reşadiye Oto Çekici | 7/24 Acil Çekici & Yol Yardım',
    intro: 'KMO Ömerli Barajı çevresi, Reşadiye gişeleri ve orman yolu kesiminde nöbetçi ekiplerimiz 7/24 hazır bekliyor.',
    trafficAnalysis: 'Ömerli-Reşadiye hattı, Kuzey Marmara Otoyolu\'nun baraj ve orman arazisi çevresinden geçen en izole kesimlerinden biridir. Bu bölgede çekim mesafesi şehir merkezine göre daha uzun olabileceğinden, bulunduğumuz nöbetçi noktalar stratejik olarak konumlandırılmıştır. Orman yolu kesiminde yabani hayvan geçişleri ve sis/nem kaynaklı görüş azalması dikkat edilmesi gereken risk faktörleridir.',
    scenarios: [
      { title: 'Orman Yolunda Yabani Hayvan Geçişi Kazaları', desc: 'Baraj çevresindeki orman arazisinde ani hayvan geçişi kaynaklı kazalar.' },
      { title: 'Sis ve Nem Kaynaklı Görüş Azalması Kazaları', desc: 'Baraj çevresindeki nem oranının yarattığı sis kaynaklı görüş kısıtlanması.' },
      { title: 'Reşadiye Gişeleri Öncesi Ani Fren Kazaları', desc: 'Gişe yaklaşımında hız kesme kaynaklı arkadan çarpmalar.' },
      { title: 'İzole Bölgede Uzun Süreli Arıza Bekleme Riski', desc: 'Şehir merkezine uzak olması nedeniyle yardım bekleme süresinin önemi.' }
    ],
    equipment: 'Ömerli-Reşadiye ekibimiz, izole orman yolu koşullarına uygun 4x4 destekli kurtarma araçları ve sis/nem koşullarında görünürlüğü artıran yüksek yoğunluklu LED ikaz sistemleri kullanır.',
    safety: 'Orman yolu kesiminde arızalanan sürücülerin aracın içinde beklemesi, dört yönlü sinyalleri açması ve mümkünse konum bilgisini WhatsApp üzerinden net paylaşması önerilir; bu bölgede GPS konum paylaşımı müdahale süresini kısaltan en önemli etkendir.',
    fieldCase: {
      title: 'Ömerli Barajı Orman Yolunda Sis Kaynaklı Kaza Sonrası Kurtarma',
      body: 'Yoğun sis nedeniyle görüş mesafesinin azaldığı bir sabah, orman yolunda hafif bir kaza geçiren araç için ekibimiz WhatsApp konum paylaşımıyla hızlıca yönlendirildi ve aracı güvenli şekilde kurtararak Sultanbeyli çevresindeki servise nakletti.'
    },
    faqs: [
      { q: 'Ömerli Barajı çevresine ne kadar sürede gelirsiniz?', a: 'Bölgenin izole yapısı nedeniyle süre biraz daha uzun olabilir, ancak stratejik nöbetçi noktalarımızla ortalama 15-20 dakikada ulaşıyoruz.' },
      { q: 'Orman yolunda GPS sinyali zayıfsa ne yapmalıyım?', a: 'En yakın gişe veya kilometre tabelası bilgisini bize iletmeniz yönlendirmeyi hızlandırır.' },
      { q: 'Gece de hizmet veriyor musunuz?', a: 'Evet, 7/24 kesintisiz hizmet veriyoruz.' },
      { q: 'Fiyat politikanız nedir?', a: 'Telefonda konumunuza göre sabit fiyat teyidi veriyoruz.' },
      { q: 'Kredi kartı kabul ediyor musunuz?', a: 'Evet, mobil POS ile yerinde kredi kartı ödemesi alıyoruz.' }
    ],
    neighbors: ['kurnakoy-mecidiye-oto-cekici', 'kuzey-marmara-otoyolu-oto-cekici', 'sultanbeyli-oto-cekici'],
    distanceTable: null
  },
  {
    slug: 'darica-oto-cekici',
    name: 'Darıca',
    shortName: 'Darıca',
    isAds: false,
    coords: { lat: 40.7650, lng: 29.3700 },
    metaTitle: 'Darıca Oto Çekici | 7/24 Acil Çekici & Kurtarma',
    metaDescription: 'Darıca sahil, Bayramoğlu ve Gebze-Eskihisar bağlantısında 7/24 oto çekici hizmeti. 10-15 dakika intikal, sabit fiyat garantisi.',
    h1: 'Darıca Oto Çekici | 7/24 Acil Çekici & Yol Yardım',
    intro: 'Darıca sahil, Bayramoğlu ve Gebze-Eskihisar bağlantısı çevresinde nöbetçi ekiplerimiz 7/24 hazır bekliyor.',
    trafficAnalysis: 'Darıca, sahil şeridi boyunca uzanan yoğun konut dokusu ve Bayramoğlu\'nun Gebze-Eskihisar bağlantı yoluna açılan trafiğiyle karma bir yapı sergiler. Sahil yolundaki rutubet kaynaklı arızalar ve Eskihisar\'a yönelen feribot trafiğinin yarattığı yoğunluk, bölgenin öne çıkan özellikleridir.',
    scenarios: [
      { title: 'Sahil Yolunda Nem Kaynaklı Elektrik Arızaları', desc: 'Deniz kenarı rutubetin elektrik sistemlerinde yarattığı kontak sorunları.' },
      { title: 'Bayramoğlu Bağlantısında Yoğunluk Kaynaklı Kazalar', desc: 'Eskihisar\'a yönelen feribot trafiğinin yarattığı yoğunlukta oluşan çarpışmalar.' },
      { title: 'Dar Sahil Sokaklarında Park Hasarları', desc: 'Yoğun konut bölgesindeki dar sokaklarda park manevra hasarları.' },
      { title: 'Akü ve Marş Arızaları', desc: 'Günlük şehir içi kullanımda sık görülen akü boşalması sorunları.' }
    ],
    equipment: 'Darıca ekibimiz, sahil yolu ve dar sokak geçişlerine uygun kompakt kayar platform araçlar ve nem kaynaklı elektrik arızalarına yönelik dijital test cihazları kullanır.',
    safety: 'Sahil yolunda arızalanan araçların güvenli bir park alanına çekilmesi önerilir. Taşınan araçlar Gebze veya Darıca çevresindeki yetkili servislere teslim edilir.',
    fieldCase: {
      title: 'Darıca Sahilinde Nem Kaynaklı Elektrik Arızası Müdahalesi',
      body: 'Sahil yolunda aniden çalışmayı kesen bir araçta elektrik kontaklarında rutubet tespit edildi; ekibimiz yerinde müdahaleyle aracı 15 dakika içinde yeniden çalışır hale getirdi.'
    },
    faqs: [
      { q: 'Darıca\'da hangi bölgelere hizmet veriyorsunuz?', a: 'Darıca sahil, Bayramoğlu ve Gebze-Eskihisar bağlantısı dahil tüm bölgeye hizmet veriyoruz.' },
      { q: 'İntikal süreniz nedir?', a: 'Ortalama 10-15 dakika içinde olay yerine ulaşıyoruz.' },
      { q: 'Eskihisar feribot iskelesine de geliyor musunuz?', a: 'Evet, Eskihisar yolu ve iskele çevresine de hizmet veriyoruz.' },
      { q: 'Fiyat politikanız nedir?', a: 'Telefonda konumunuza göre sabit fiyat teyidi veriyoruz.' },
      { q: 'Kredi kartı kabul ediyor musunuz?', a: 'Evet, mobil POS ile yerinde kredi kartı ödemesi alıyoruz.' }
    ],
    neighbors: ['gebze-oto-cekici', 'dilovasi-oto-cekici', 'cayirova-oto-cekici'],
    distanceTable: null
  },
  {
    slug: 'kartal-oto-cekici',
    name: 'Kartal',
    shortName: 'Kartal',
    isAds: false,
    coords: { lat: 40.8886, lng: 29.1855 },
    metaTitle: 'Kartal Oto Çekici | 7/24 Kartal, Yakacık & Samandıra Çekici',
    metaDescription: 'Kartal, Samandıra KMO bağlantısı, Yakacık, Soğanlık ve E-5 hattında 7/24 oto çekici ve kurtarma hizmeti. 10-15 dakika intikal, kaskolu taşıma garantisi.',
    h1: 'Kartal Oto Çekici | 7/24 Acil Kurtarma & Yol Yardım',
    intro: 'Kartal merkez, Samandıra KMO bağlantı yolu, Yakacık rampaları ve E-5 koridorunda konuşlu nöbetçi ekiplerimizle 10-15 dakikada yanınızdayız.',
    trafficAnalysis: 'Kartal, Anadolu Yakası\'nın en kritik kavşaklarından biri olup Samandıra üzerinden Kuzey Marmara Otoyolu\'na, Yakacık üzerinden TEM otoyoluna ve güneyden D-100 (E-5) karayoluna bağlanan yoğun bir transit artere sahiptir. Yakacık yokuşlarında hararet ve debriyaj balatası arızaları, Samandıra gişe bağlantısında ise sabah ve akşam zirve saatlerinde ani dur-kalk trafiğine bağlı tampon sürtmeleri sıkça yaşanır.',
    scenarios: [
      { title: 'Yakacık Yokuşlarında Hararet ve Debriyaj Yanması', desc: 'Dik Yakacık rampalarında dur-kalk trafiğinde aşırı ısınan debriyaj ve radyatör kaynaması vakaları.' },
      { title: 'Samandıra KMO Gişe Çıkışında Mekanik Kilitlenme', desc: 'Otoyol hızından şehir içi bağlantısına geçişte şanzıman ve aks kırılması problemleri.' },
      { title: 'Soğanlık & E-5 Bağlantısında Zincirleme Kaza', desc: 'Yoğun yan yol bağlantılarında ani fren kaynaklı hafif hasarlı çarpışmalar.' },
      { title: 'Oto Sanayi ve Plaza Otoparklarında Akü Boşalması', desc: 'Kartal Oto Sanayi Sitesi ve sahil plazalarında uzun süre park halinde kalan araçlarda akü tükenmesi.' }
    ],
    equipment: 'Kartal filomuzda dar sokaklar için hidrolik kayar kasa platformlar, Samandıra otoyol bağlantısı için yüksek tonajlı kurtarıcılar ve 12V/24V dijital akü şarj destek üniteleri bulunmaktadır.',
    safety: 'Kartal E-5 veya Samandıra bağlantısında arızalanan sürücülerin dörtlülerini yakıp güvenlik şeridine yanaşmaları ve bariyer arkasında beklemeleri önemle tavsiye edilir.',
    fieldCase: {
      title: 'Samandıra KMO Bağlantısında Şanzıman Kilitlenmesi Vakası',
      body: 'Akşam saat 19:30 sularında Samandıra viyadük ayrımında şanzımanı kilitlenen binek araç için ekibimiz 11 dakikada intikal ederek hidrolik kayar platforma hasarsız yükleme yapmış ve Kartal Oto Sanayi Sitesi\'ne güvenle ulaştırmıştır.'
    },
    faqs: [
      { q: 'Kartal\'da ne kadar sürede yanıma ulaşırsınız?', a: 'Samandıra ve Yakacık nöbetçi araçlarımızla ortalama 10-15 dakikada olay yerindeyiz.' },
      { q: 'Kartal Oto Sanayi Sitesi\'ndeki servislere çekiyor musunuz?', a: 'Evet, Kartal Sanayi, Maltepe veya Pendik yetkili servislerine kaskolu teslimat yapıyoruz.' },
      { q: 'Samandıra KMO gişelerinde kaldım, gelebilir misiniz?', a: 'Kuzey Marmara Otoyolu Samandıra gişe hattında 7/24 devriye aracımız hazırdır.' },
      { q: 'Ödemeyi kartla alıyor musunuz?', a: 'Evet, araç başında mobil POS ile taksitli veya tek çekim kredi kartı ödemesi alıyoruz.' },
      { q: 'Fiyat tarifesi nasıl belirlenir?', a: 'Taban ücret + km tarifesiyle telefonda sabit fiyat verilir, sonradan ek ücret çıkarılmaz.' }
    ],
    neighbors: ['pendik-oto-cekici', 'sultanbeyli-oto-cekici', 'sancaktepe-oto-cekici'],
    distanceTable: null
  },
  {
    slug: 'maltepe-oto-cekici',
    name: 'Maltepe',
    shortName: 'Maltepe',
    isAds: false,
    coords: { lat: 40.9250, lng: 29.1350 },
    metaTitle: 'Maltepe Oto Çekici | 7/24 Başıbüyük KMO & E-5 Çekici',
    metaDescription: 'Maltepe, Başıbüyük Kuzey Marmara bağlantısı, Küçükyalı, Zümrütevler ve Sahil Yolu çevresinde 7/24 oto çekici. 10-15 dk varış, %100 kaskolu taşıma.',
    h1: 'Maltepe Oto Çekici | 7/24 Acil Kurtarma & Yol Yardım',
    intro: 'Maltepe merkez, Başıbüyük KMO bağlantı yolu, Küçükyalı E-5 ve sahil hattında nöbetçi çekicilerimizle 10-15 dakikada hızlı müdahale.',
    trafficAnalysis: 'Maltepe ilçesi, sahil yolu, D-100 karayolu ve Başıbüyük üzerinden Kuzey Marmara Otoyolu\'na bağlanan çok katmanlı bir ulaşım ağına sahiptir. Başıbüyük Orman Yolu ve Süreyyapaşa rampalarındaki virajlı yokuşlar, fren balatası aşınması ve mekanik arızaların sık görüldüğü güzergahlardır. E-5 Küçükyalı geçişinde ise yoğun kavşak trafiği küçük çaplı çarpışmalara zemin hazırlar.',
    scenarios: [
      { title: 'Başıbüyük KMO Bağlantısında Lastik Yarılması', desc: 'Orman yolu virajlarında keskin mucur ve çukurlara bağlı lastik yarılması vakaları.' },
      { title: 'Süreyyapaşa Rampalarında Hararet Yapma', desc: 'Dik tırmanışlarda soğutma sistemi arızaları ve su kaynatma problemleri.' },
      { title: 'Küçükyalı E-5 Kavşağında Kaza Sonrası Kurtarma', desc: 'Yoğun akşam trafiğinde tampon hasarlı araçların ana yoldan tahliyesi.' },
      { title: 'Sahil Yolu Otoparklarında Akü Boşalması', desc: 'Maltepe sahil etkinlik alanlarında uzun süre bekleyen araçlarda akü takviyesi.' }
    ],
    equipment: 'Maltepe bölgemizde basık araçlar için sıfır açılı rampa sistemleri, sahil ve otoyol güvenliği için flaşörlü LED ışık kuleleri ve takviye ekipmanları hazır bekletilir.',
    safety: 'Maltepe E-5 veya KMO bağlantısında kalan araçların reflektörlerini kuralına uygun yerleştirmesi ve yolcuların kaldırım veya bariyer arkasına geçmesi esastır.',
    fieldCase: {
      title: 'Başıbüyük KMO Bağlantısında Gece Lastik Patlaması',
      body: 'Gece 01:15\'te Başıbüyük viyadük ayağında lastiği yarılan SUV tipi araç için ekibimiz 12 dakikada olay yerine varmış, emniyet tedbirleri altında aracı kayar kasaya alarak yetkili servise ulaştırmıştır.'
    },
    faqs: [
      { q: 'Maltepe\'de ne kadar sürede yanımda olursunuz?', a: 'Küçükyalı ve Başıbüyük nöbetçi araçlarımızla 10-15 dakika içinde ulaşıyoruz.' },
      { q: 'Başıbüyük Kuzey Marmara çıkışına da hizmetiniz var mı?', a: 'Evet, KMO Başıbüyük kavşağı ve bağlantı viyadüklerinde 7/24 nöbetçiyiz.' },
      { q: 'Aracım taşınırken kasko kapsamında mı?', a: 'Evet, yükleme anından itibaren %100 Emtia Nakliyat Taşıma Kaskomuz devrededir.' },
      { q: 'Kredi kartıyla ödeme yapabilir miyim?', a: 'Mobil POS cihazlarımızla tüm kredi kartlarına taksit veya tek çekim geçerlidir.' },
      { q: 'Motosiklet çekici hizmetiniz var mı?', a: 'Evet, özel teker sabitleme aparatlı motosiklet çekicilerimiz mevcuttur.' }
    ],
    neighbors: ['kartal-oto-cekici', 'sancaktepe-oto-cekici', 'kuzey-marmara-otoyolu-oto-cekici'],
    distanceTable: null
  },
  {
    slug: 'korfez-hereke-oto-cekici',
    name: 'Körfez & Hereke',
    shortName: 'Körfez & Hereke',
    isAds: false,
    coords: { lat: 40.7850, lng: 29.6200 },
    metaTitle: 'Körfez & Hereke Oto Çekici | 7/24 KMO & TEM Kurtarma',
    metaDescription: 'Körfez, Hereke Tünelleri, KMO Doğu Gişeleri ve TEM otoyolu geçişinde 7/24 acil oto çekici, ağır vasıta ve yol yardım hizmeti. 10-15 dk varış: 0536 769 43 24.',
    h1: 'Körfez & Hereke Oto Çekici | 7/24 Otoyol Kurtarma',
    intro: 'Kuzey Marmara Otoyolu Doğu Gişeleri, Hereke tünelleri ve Körfez TEM geçişinde 7/24 hazır bekleyen kurtarıcı filomuzla 10-15 dakikada intikal.',
    trafficAnalysis: 'Körfez ve Hereke hattı, Kocaeli sanayi koridoru ile İstanbul bağlantısının en kritik boğazıdır. Hereke viyadükleri, KMO Dilovası-Körfez geçişi ve TEM Hereke Tünelleri boyunca ağır vasıta ve tır trafiği son derece yoğundur. Tünel girişlerindeki ani frenler, viyadüklerdeki yan rüzgarlar ve dik rampa inişlerinde fren şişmesi otoyol kurtarma operasyonlarının temel nedenleridir.',
    scenarios: [
      { title: 'Hereke Tüneli İçi Ani Arıza ve Tahliye', desc: 'Tünel içinde stop eden araçların trafiği aksatmadan hızla emniyetli alana çıkarılması.' },
      { title: 'KMO Doğu Gişeleri Bağlantısında Tır ve Kamyon Arızaları', desc: 'Ağır vasıtalarda görülen körük patlaması ve diferansiyel kilitlenmesi müdahaleleri.' },
      { title: 'Hereke Viyadüğünde Yağış Kaynaklı Kayma', desc: 'Islak zemin ve rüzgar etkisiyle bariyere çarpan araçların vinçli kurtarılması.' },
      { title: 'Körfez Sanayi Girişinde Mekanik Arıza', desc: 'Liman ve sanayi tesislerine giden ticari araçların yerinde yol yardımı.' }
    ],
    equipment: 'Hereke ve Körfez hattında çift kırmalı ağır hizmet kurtarma vinçleri, kayar kasa platformlar, otoyol LED uyarı panoları ve tünel tahliye ekipmanları görev yapar.',
    safety: 'Hereke tünelleri veya KMO viyadüklerinde arızalanan sürücülerin araç içinde beklememesi, derhal tünel içi acil sığınma cebine veya bariyer dışına geçmesi hayati önem taşır.',
    fieldCase: {
      title: 'Hereke Tüneli Çıkışında Hararet Yapan Aracın Tahliyesi',
      body: 'Gündüz saatlerinde Hereke tünel çıkışında radyatör hortumu patlayan binek araç için ekibimiz 13 dakikada ulaşmış, trafiği tehlikeye atmadan aracı kayar platforma yükleyerek Körfez Sanayi Sitesi\'ne güvenle aktarmıştır.'
    },
    faqs: [
      { q: 'Hereke tünellerine çekici ne kadar sürede varır?', a: 'Tünel çıkışında konuşlu nöbetçi ekiplerimiz ortalama 10-12 dakikada yanınızdadır.' },
      { q: 'Ağır vasıta, kamyon ve tır çekiyor musunuz?', a: 'Evet, çift çeker gözlüklü vinç sistemlerimizle 40 tona kadar ağır vasıta çekiyoruz.' },
      { q: 'KMO Körfez gişelerinde kaldım, ücret nasıl hesaplanır?', a: 'Taban ücret + km tarifesiyle telefonda sabit fiyat verilir, ek ücret talep edilmez.' },
      { q: 'Kredi kartı geçerli mi?', a: 'Evet, mobil POS ile yerinde kredi kartı ödemesi kabul edilir.' },
      { q: 'Aracımı Kocaeli veya İstanbul\'daki servise götürebilir misiniz?', a: 'Evet, isteğinize bağlı olarak Gebze, Körfez, İzmit veya İstanbul servislerine teslim ediyoruz.' }
    ],
    neighbors: ['dilovasi-oto-cekici', 'gebze-oto-cekici', 'kuzey-marmara-otoyolu-oto-cekici'],
    distanceTable: null
  }
];

module.exports = { REGIONS };
