'use strict';

const SERVICES = [
  {
    slug: 'oto-cekici',
    name: 'Kayar Kasa Oto Çekici',
    icon: '🚗',
    metaTitle: 'Kayar Kasa Oto Çekici | Binek & SUV Hidrolik Platform Taşıma',
    metaDescription: 'Binek, SUV ve hafif ticari araçlar için hidrolik kayar platform ile sıfır hasar oto çekici hizmeti. 7/24, kaskolu taşıma, sabit fiyat.',
    h1: 'Kayar Kasa Oto Çekici',
    intro: 'Binek, SUV ve hafif ticari araçlarınız için hidrolik kayar platform sistemiyle sıfır hasar taşıma garantisi sunuyoruz. Araç zemine temas etmeden, şasi sabitleme aparatlarıyla güvenle yüklenir.',
    details: 'Kayar kasa sistemi, aracın kendi tekerlekleri üzerinde hiçbir sürtünme ve çekme kuvveti olmadan platforma kaymasını sağlar. Bu yöntem özellikle düşük zemin yüksekliğine sahip araçlarda, aks ve şanzıman grubuna zarar vermeden taşıma yapılmasına imkan tanır. Yükleme öncesi araç dört noktadan şasi kancalarıyla sabitlenir, taşıma sırasında oluşabilecek titreşim ve sarsıntı minimuma indirilir.',
    whenToUse: ['Motor veya şanzıman arızası nedeniyle aracın hareket edemediği durumlar', 'Kaza sonrası aracın kendi gücüyle hareket edememesi', 'Lastik patlaması veya jant hasarı sonrası güvenli taşıma ihtiyacı', 'Uzun mesafe nakliyat gerektiren durumlar'],
    faqs: [
      { q: 'Kayar kasa sistemi aracıma zarar verir mi?', a: 'Hayır, araç zemine hiç temas etmeden şasi sabitleme aparatlarıyla taşındığı için herhangi bir hasar oluşmaz.' },
      { q: 'Otomatik vitesli araçlar için uygun mu?', a: 'Evet, kayar kasa sistemi otomatik vitesli araçlar için en güvenli taşıma yöntemidir çünkü şanzımana hiçbir yük binmez.' },
      { q: 'Ücretlendirme nasıl yapılıyor?', a: 'Taban ücret + kilometre bazlı hesaplama ile telefonda net ve sabit fiyat teyidi veriyoruz.' },
      { q: 'Kaskolu taşıma garantisi var mı?', a: 'Evet, tüm taşımalarımız %100 emtia nakliyat taşıma kaskosu kapsamındadır.' }
    ]
  },
  {
    slug: 'otoyol-oto-kurtarma',
    name: 'Kuzey Marmara & TEM Otoyol Acil Kurtarıcı',
    icon: '🛣️',
    metaTitle: 'Otoyol Acil Oto Kurtarma | Kuzey Marmara & TEM 7/24',
    metaDescription: 'Kuzey Marmara ve TEM Otoyolu üzerinde acil oto kurtarma hizmeti. Otoban hız şeridi güvenlik önlemleri, bariyer ve tünel tahliyeleri.',
    h1: 'Kuzey Marmara & TEM Otoyol Acil Kurtarıcı',
    intro: 'Yüksek hızlı otoyol ortamında güvenlik protokollerine tam uyumlu, hızlı ve profesyonel otoyol kurtarma hizmeti sunuyoruz.',
    details: 'Otoyol kurtarma operasyonları, standart şehir içi müdahalelerden farklı bir güvenlik disiplini gerektirir. Ekiplerimiz; LED ikaz kuleleri, reflektif koni dizilimi ve trafik akışını bozmadan güvenli şerit değişimi protokolleriyle çalışır. Tünel içi arızalarda havalandırma ve görüş koşulları dikkate alınarak hızlı tahliye sağlanır, viyadük ve köprü geçişlerinde ise rüzgar ve denge faktörleri göz önünde bulundurularak ek güvenlik ekipmanı kullanılır.',
    whenToUse: ['Otoyol üzerinde ani arıza veya kaza durumu', 'Tünel içinde kalınan arızalar', 'Viyadük veya köprü üzerinde meydana gelen sorunlar', 'Gişe çevresinde oluşan zincirleme kazalar'],
    faqs: [
      { q: 'Otoyolda arabam bozulursa önce ne yapmalıyım?', a: 'Aracı mümkünse emniyet şeridine alın, dört yönlü sinyalleri açın, reflektörü 150 metre arkaya koyun ve bizi arayın.' },
      { q: 'Tünel içinde arıza yaparsam ne olur?', a: 'Ekiplerimiz tünel içi güvenlik protokolleriyle hızlı tahliye sağlar, trafik akışını en az etkileyecek şekilde müdahale eder.' },
      { q: 'Gece de otoyol kurtarma hizmeti veriyor musunuz?', a: 'Evet, 7/24 kesintisiz hizmet veriyoruz.' },
      { q: 'Zincirleme kazalarda birden fazla araca müdahale edebiliyor musunuz?', a: 'Evet, gerektiğinde birden fazla aracımızı aynı anda sahaya yönlendirebiliyoruz.' }
    ]
  },
  {
    slug: 'kaza-vinc-kurtarma',
    name: 'Kaza & Ağır Hizmet Vinç Kurtarma',
    icon: '🏗️',
    metaTitle: 'Kaza Vinç Kurtarma | Şarampol, Devrilme & Vinçleme Hizmeti',
    metaDescription: 'Şarampol, devrilme, aks kırığı ve kilitli araç vinçleme hizmeti. Ağır hizmet vinç ekipmanıyla 7/24 kaza kurtarma.',
    h1: 'Kaza & Ağır Hizmet Vinç Kurtarma',
    intro: 'Şarampole yuvarlanan, devrilen veya hareket kabiliyetini tamamen kaybeden araçlar için ağır hizmet vinç kurtarma hizmeti sunuyoruz.',
    details: 'Ağır hizmet vinç kurtarma, standart çekici operasyonlarının yetersiz kaldığı kritik durumlar için tasarlanmıştır. Şarampole yuvarlanan araçlarda çelik halat ve makara sistemleriyle kontrollü çıkarma yapılır, devrilen araçlarda ise özel dengeleme ekipmanıyla aracın güvenli şekilde ayağa kaldırılması sağlanır. Aks kırığı veya tekerlek kilitlenmesi gibi durumlarda tekerlek arabaları (dolly) kullanılarak araç hiçbir ek hasar almadan platforma yüklenir.',
    whenToUse: ['Şarampole yuvarlanan araçlar', 'Devrilen veya yan yatan araçlar', 'Aks kırığı nedeniyle tekerleği dönmeyen araçlar', 'Kilitli fren veya kilitlenmiş direksiyon durumları'],
    faqs: [
      { q: 'Şarampole yuvarlanan aracım nasıl çıkarılır?', a: 'Çelik halat ve makara sistemleriyle kontrollü bir şekilde, ek hasar oluşturmadan çıkarma işlemi yapılır.' },
      { q: 'Devrilen araçlar için özel ekipmanınız var mı?', a: 'Evet, dengeleme ve kaldırma ekipmanlarımızla devrilen araçları güvenli şekilde ayağa kaldırıyoruz.' },
      { q: 'Aks kırığı olan araç çekilebilir mi?', a: 'Evet, tekerlek arabaları (dolly) kullanarak dönmeyen tekerlekli araçları da güvenle taşıyoruz.' },
      { q: 'Bu hizmet için ek ücret var mı?', a: 'Operasyonun zorluğuna göre fiyat telefonda netleştirilir ve sabit olarak teyit edilir.' }
    ]
  },
  {
    slug: 'luks-spor-arac-cekici',
    name: 'Lüks & Basık Araç Taşıma',
    icon: '🏎️',
    metaTitle: 'Lüks & Basık Araç Çekici | Porsche, Ferrari, Tesla, BMW M Taşıma',
    metaDescription: 'Sıfır açılı rampa aparatı ile Porsche, Ferrari, Tesla, BMW M gibi basık araçlar için jant korumalı, hasarsız çekici hizmeti.',
    h1: 'Lüks & Basık Araç Taşıma',
    intro: 'Porsche, Ferrari, Tesla, BMW M gibi düşük yerden yüksekliğe sahip araçlarınız için sıfır açılı rampa aparatıyla jant ve ön tampon korumalı taşıma hizmeti sunuyoruz.',
    details: 'Basık gövdeli spor ve lüks araçlarda standart rampa açısı, ön tamponun veya alt kaportanın zarar görmesine neden olabilir. Sıfır dereceli rampa sistemimiz, aracın zeminle paralel şekilde platforma yönlendirilmesini sağlayarak bu riski tamamen ortadan kaldırır. Jant koruma pedleri ve yumuşak dokulu sabitleme kayışları, taşıma sırasında hassas jant ve lastik yüzeylerinin çizilmesini önler. Elektrikli araçlarda ise batarya kilidi ve "Transport Mode" protokolü uygulanarak elektronik park freninin güvenli şekilde devre dışı bırakılması sağlanır.',
    whenToUse: ['Düşük yerden yüksekliğe sahip spor otomobiller', 'Elektrikli araçlarda (Tesla vb.) batarya/park freni kilitlenmesi', 'Klasik ve koleksiyonluk araçların hassas taşınması', 'Yeni araç teslimat transferleri'],
    faqs: [
      { q: 'Aracımın alt kaportası zarar görür mü?', a: 'Hayır, sıfır dereceli rampa sistemimiz sayesinde alt kaporta veya ön tampon hiçbir şekilde zemine sürtmez.' },
      { q: 'Tesla gibi elektrikli araçlar nasıl çekilir?', a: '"Transport Mode" protokolüyle elektronik park freni devre dışı bırakılarak şasiye hiç temas etmeden kayar platforma yüklenir.' },
      { q: 'Jantlarım çizilir mi?', a: 'Hayır, jant koruma pedleri ve yumuşak sabitleme kayışları kullanılarak hassas yüzeyler korunur.' },
      { q: 'Uzun mesafe lüks araç taşıması yapıyor musunuz?', a: 'Evet, şehirler arası mesafelerde de aynı hassasiyetle kaskolu taşıma yapıyoruz.' }
    ]
  },
  {
    slug: 'agir-vasita-cekici',
    name: 'Kamyon, Tır, Otobüs & Minibüs Çekici',
    icon: '🚛',
    metaTitle: 'Ağır Vasıta Çekici | Kamyon, Tır, Otobüs Kurtarma Hizmeti',
    metaDescription: 'Kamyon, tır, otobüs ve minibüs için çift çeker gözlüklü ve körüklü ağır kurtarıcı sistemleriyle 7/24 ağır vasıta çekici hizmeti.',
    h1: 'Kamyon, Tır, Otobüs & Minibüs Çekici',
    intro: 'Ağır ticari araçlarınız için çift çeker gözlüklü ve körüklü süspansiyonlu ağır kurtarıcı sistemlerimizle güçlü ve güvenli çekim hizmeti sunuyoruz.',
    details: 'Ağır vasıta kurtarma operasyonları, binek araç taşımacılığından tamamen farklı mühendislik gerektirir. Çift çeker gözlüklü sistemlerimiz, aracın ön veya arka aksını kaldırarak yere paralel şekilde çekim yapılmasını sağlar; körüklü havalı süspansiyon sistemi ise taşıma sırasında oluşabilecek sarsıntıyı absorbe ederek yük ve şasiye binen stresi azaltır. Tır, otobüs ve kamyonlarda fren hidrolik arızaları, motor arızaları ve lastik patlamaları en sık karşılaşılan senaryolardır.',
    whenToUse: ['Tır ve kamyonlarda motor veya fren arızası', 'Otobüs ve minibüslerde yolcu güvenliğini etkileyen arızalar', 'Ağır yüklü araçlarda lastik patlaması', 'Sanayi bölgelerinde ağır vasıta manevra kazaları'],
    faqs: [
      { q: 'Tır ve kamyon çekebiliyor musunuz?', a: 'Evet, çift çeker gözlüklü ağır hizmet vinç sistemlerimizle her boyutta ağır vasıtaya müdahale edebiliyoruz.' },
      { q: 'Yüklü bir tırı taşıyabiliyor musunuz?', a: 'Evet, yük durumuna göre uygun ekipman ve prosedürle güvenli taşıma sağlıyoruz.' },
      { q: 'Otobüs arızalarında yolcular ne olacak?', a: 'Yolcu güvenliği önceliğimizdir; gerekirse yönlendirme ve transfer desteği de sağlıyoruz.' },
      { q: 'Fiyatlandırma nasıl yapılıyor?', a: 'Araç tipi, yük durumu ve mesafeye göre telefonda net ve sabit fiyat teyidi veriyoruz.' }
    ]
  },
  {
    slug: 'yol-yardim-aku-takviye',
    name: 'Mobil Akü Takviye & Yol Yardım',
    icon: '🔋',
    metaTitle: 'Mobil Akü Takviye | 12V/24V Yerinde Marş Basma Hizmeti',
    metaDescription: '12V/24V endüstriyel dijital booster ile yerinde mobil akü takviye ve yol yardım hizmeti. 7/24, hızlı ve güvenli marş basma.',
    h1: 'Mobil Akü Takviye & Yol Yardım',
    intro: 'Aracınızın aküsü bittiğinde çekiciye gerek kalmadan, 12V/24V endüstriyel dijital booster cihazlarımızla yerinde marş basma hizmeti sunuyoruz.',
    details: 'Akü arızaları, özellikle kış aylarında ve uzun süreli park sonrasında en sık karşılaşılan yol yardım senaryolarıdır. Standart kablo bağlantılı takviye yöntemlerinin aksine, dijital booster cihazlarımız aracın elektronik beynine (ECU) zarar verme riskini ortadan kaldıran akıllı voltaj koruma sistemine sahiptir. Start-stop sistemli araçlardaki AGM/EFB akülerde de güvenle kullanılabilir.',
    whenToUse: ['Aracın marş vermemesi (akü boşalması)', 'Uzun süreli park sonrası akü zayıflaması', 'Soğuk havada akü performansının düşmesi', 'Yanlış takviye sonucu oluşabilecek risklerden kaçınmak isteyenler'],
    faqs: [
      { q: 'Dijital booster normal takviyeden farkı nedir?', a: 'Dijital booster, voltaj dalgalanmalarını kontrol ederek aracın elektronik beynine (ECU) zarar verme riskini ortadan kaldırır.' },
      { q: 'Sadece akü takviyesi için çekici göndermeniz mümkün mü?', a: 'Evet, çoğu durumda çekiciye gerek kalmadan sadece mobil akü takviye ekibimizle sorunu çözebiliyoruz.' },
      { q: 'Start-stop sistemli araçlarda uygulanabilir mi?', a: 'Evet, AGM/EFB akü tipleri dahil tüm modern akü sistemlerine uygun cihazlarımız vardır.' },
      { q: 'Ne kadar sürede yanımda olursunuz?', a: 'Ortalama 10-15 dakika içinde olay yerine ulaşıyoruz.' }
    ]
  },
  {
    slug: 'yerinde-lastik-yol-yardim',
    name: 'Mobil Lastik Tamiri & Stepne Değişimi',
    icon: '🛞',
    metaTitle: 'Mobil Lastik Tamiri | Yerinde Stepne Değişimi & Yol Yardım',
    metaDescription: 'Otoyolda emniyetli lastik fitil, kompresör hava desteği ve stepne montajı. 7/24 mobil lastik tamiri ve yol yardım hizmeti.',
    h1: 'Mobil Lastik Tamiri & Stepne Değişimi',
    intro: 'Otoyolda veya şehir içinde lastiğiniz patladığında, emniyetli şekilde yerinde fitil tamiri, hava desteği veya stepne montajı yapıyoruz.',
    details: 'Lastik arızaları, özellikle yüksek hızlı otoyol ortamında güvenlik açısından acil müdahale gerektiren durumlardır. Ekiplerimiz, aracı güvenli bir noktaya yönlendirdikten sonra lastik tipine göre fitil tamiri, kompresörle hava takviyesi veya doğrudan stepne montajı uygular. Otoyol üzerindeki müdahalelerde reflektif güvenlik ekipmanları ve trafik yönlendirme konileri kullanılarak hem sürücü hem ekip güvenliği sağlanır.',
    whenToUse: ['Lastik patlaması veya yırtılması', 'Lastik basıncının aniden düşmesi', 'Jant hasarı sonrası stepne ihtiyacı', 'Küçük çaplı delinme ve fitil tamiri gerektiren durumlar'],
    faqs: [
      { q: 'Otoyolda lastik değişimi güvenli mi?', a: 'Evet, reflektif güvenlik ekipmanları ve trafik yönlendirme konileriyle güvenli bir müdahale protokolü uyguluyoruz.' },
      { q: 'Stepnem yoksa ne yapabilirim?', a: 'Lastik durumuna göre yerinde fitil tamiri veya en yakın lastikçiye güvenli taşıma seçeneklerini değerlendiriyoruz.' },
      { q: 'Hangi lastik tiplerine müdahale edebiliyorsunuz?', a: 'Binek, SUV ve hafif ticari araç lastiklerine yerinde müdahale edebiliyoruz.' },
      { q: 'Ne kadar sürede gelirsiniz?', a: 'Ortalama 10-15 dakika içinde olay yerine ulaşıyoruz.' }
    ]
  },
  {
    slug: 'motosiklet-cekici',
    name: 'Motosiklet Çekici & Transfer',
    icon: '🏍️',
    metaTitle: 'Motosiklet Çekici | Özel Sehpa & Gergili Askı Sistemiyle Transfer',
    metaDescription: 'Motosikletler için özel ön teker kilit sehpası ve 4 noktadan gergili askı sistemiyle sarsıntısız, hasarsız çekici hizmeti.',
    h1: 'Motosiklet Çekici & Transfer',
    intro: 'Motosikletiniz için özel ön teker kilit sehpası ve 4 noktadan gergili askı sistemiyle sarsıntısız, devrilme riski olmayan güvenli taşıma hizmeti sunuyoruz.',
    details: 'Motosikletler, iki tekerlekli dengesiz yapıları nedeniyle standart araç taşıma ekipmanlarıyla güvenle nakledilemez. Özel ön teker kilit sehpamız motosikleti dik pozisyonda sabitlerken, 4 noktadan uygulanan gergili askı sistemi taşıma sırasında oluşabilecek sarsıntı ve devrilme riskini ortadan kaldırır. Spor, naked, chopper ve scooter gibi farklı gövde tiplerine uygun ayarlanabilir sabitleme noktaları kullanılır.',
    whenToUse: ['Motor arızası veya kaza sonrası hareketsiz kalan motosikletler', 'Lastik patlaması nedeniyle güvenli sürüş yapılamayan durumlar', 'Şehirler arası motosiklet transferi', 'Servis veya bayiye nakliyat ihtiyacı'],
    faqs: [
      { q: 'Motosikletim taşıma sırasında devrilir mi?', a: 'Hayır, özel ön teker kilit sehpası ve 4 noktadan gergili askı sistemi devrilme riskini tamamen ortadan kaldırır.' },
      { q: 'Her motosiklet tipine uygun mu?', a: 'Evet, spor, naked, chopper ve scooter gibi farklı gövde tiplerine uyarlanabilir sabitleme sistemimiz vardır.' },
      { q: 'Şehirler arası motosiklet taşıması yapıyor musunuz?', a: 'Evet, uzun mesafe transferlerde de aynı güvenlik standartlarıyla hizmet veriyoruz.' },
      { q: 'Fiyatlandırma nasıl yapılıyor?', a: 'Mesafe ve motosiklet tipine göre telefonda net ve sabit fiyat teyidi veriyoruz.' }
    ]
  },
  {
    slug: 'sehirlerarasi-arac-tasima',
    name: 'Şehirler Arası Araç Taşıma & Nakliyat',
    icon: '🗺️',
    metaTitle: 'Şehirler Arası Araç Taşıma | Kocaeli-İstanbul-Ankara-Bursa Nakliyat',
    metaDescription: 'Kocaeli-İstanbul-Ankara-Bursa hattında çoklu ve tekli kaskolu araç transferi. Şehirler arası güvenli nakliyat hizmeti.',
    h1: 'Şehirler Arası Araç Taşıma & Nakliyat',
    intro: 'Kocaeli-İstanbul-Ankara-Bursa hattında tekli veya çoklu araç transferlerinde %100 kaskolu, güvenli nakliyat hizmeti sunuyoruz.',
    details: 'Şehirler arası araç nakliyatı; arızalı araç transferi, yeni araç teslimatı veya ikinci el alım-satım sonrası taşıma gibi farklı ihtiyaçlara yönelik planlanır. Uzun mesafe taşımalarda araç, kapalı veya açık platform seçeneğiyle hava koşullarından korunarak, güzergah boyunca düzenli kontrol noktalarıyla takip edilir. Çoklu araç transferlerinde özel çok katlı platform araçlarımızla maliyet avantajlı toplu nakliyat seçenekleri de sunulmaktadır.',
    whenToUse: ['Arızalı aracın başka bir şehirdeki yetkili servise nakli', 'Yeni veya ikinci el araç teslimat transferleri', 'Filo araçlarının toplu nakliyatı', 'Kaza sonrası hasarlı aracın eksperlik için taşınması'],
    faqs: [
      { q: 'Hangi şehirler arasında hizmet veriyorsunuz?', a: 'Kocaeli-İstanbul-Ankara-Bursa hattı başta olmak üzere talep edilen diğer güzergahlarda da hizmet veriyoruz.' },
      { q: 'Kapalı platform seçeneği var mı?', a: 'Evet, özellikle lüks ve hassas araçlar için kapalı platform taşıma seçeneği sunuyoruz.' },
      { q: 'Birden fazla araç aynı anda taşınabilir mi?', a: 'Evet, çok katlı platform araçlarımızla toplu araç nakliyatı yapabiliyoruz.' },
      { q: 'Taşıma süresince aracım sigortalı mı?', a: 'Evet, tüm şehirler arası nakliyatlarımız %100 emtia nakliyat taşıma kaskosu kapsamındadır.' }
    ]
  }
];

module.exports = { SERVICES };
