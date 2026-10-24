const fs = require('fs');
const path = require('path');
const { BLOG_ENRICHMENTS } = require('../data/blog_rich_content.js');

const FINAL_ADDITIONS = {
  'kuzey-marmara-otoyolu-cekici-fiyatlari-nasil-hesaplanir': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Ağır Ticari Araç ve Kamyonetlerde Dingil Ağırlığı Katsayısı</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Standart binek otomobiller yaklaşık bin iki yüz ile bin altı yüz kilogram ağırlığa sahipken; şasisi uzatılmış ticari minibüsler, panelvanlar ve zırhlı cipler üç buçuk tona kadar ulaşabilir. Taşınacak aracın kütlesi arttıkça kurtarıcının hidrolik kaldırma pompasına, çelik halat tamburuna ve taşıyıcı şasiye binen yük katlanarak artar. Bu sebeple ağır tonajlı araç transferlerinde donanım sınıfına göre özel taban fiyat katsayısı uygulanır.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Marmara Çekici santralimiz aracınızın marka, model ve kasa tipini (örneğin kamyonet, karavan, uzun şasi panelvan) telefon görüşmesinde sorarak en uygun kapasitedeki kurtarıcıyı görevlendirir. Telefonda belirlenen bu şeffaf rakam haricinde olay yerine varıldığında "arabanız çok ağırmış, ek fark ödemelisiniz" gibi bahaneler kesinlikle öne sürülmez.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Sabit Fiyat Taahhütnamesi ve Dijital Fiyat Onayı</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Müşterilerimizin mağduriyet yaşamaması adına telefon görüşmesinin hemen ardından belirlenen net sabit fiyat, teslimat rotası ve görevlendirilen çekicinin plaka bilgisi WhatsApp üzerinden yazılı onay mesajı olarak iletilir. Bu dijital taahhütname sayesinde iş bitiminde taraflar arasında herhangi bir anlaşmazlık yaşanması tamamen engellenmiş olur.
    </p>
  `,

  'otomatik-vitesli-ve-elektrikli-araclar-nasil-cekilir': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Mekatronik Valf Gövdesi Basınç Kayıpları ve Soğuma Süresi</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Çift kavramalı modern şanzımanlarda mekatronik kontrol ünitesi yaklaşık elli ila altmış bar gibi son derece yüksek bir hidrolik yağ basıncı altında çalışır. Şanzıman arızası sebebiyle yolda kalan bir araçta sistem basıncı aniden düşebilir veya elektro-valfler belirli dişlilerde kilitli kalabilir. Böyle bir durumda aracı viteste zorlamak mekatronik gövde contalarının yırtılmasına ve hidrolik sıvının dışarı boşalmasına sebep olur.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Teknik ekiplerimiz araca müdahale etmeden önce şanzıman ısısını kontrol eder, gerekiyorsa mekatronik ünitenin soğuması için birkaç dakika bekler ve tekerlek arabacıklarını yerleştirerek şanzımana zerre yük bindirmeden aracı platforma alır.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Lityum-İyon Batarya Alt Tabla Darbe Koruma Standartları</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Elektrikli araçların tabanında yer alan devasa lityum-iyon batarya paketleri özel kompozit veya alüminyum koruma zırhı ile kaplıdır. Ancak çekici platformunun sivri çelik köşelerine veya sert çelik kancalara temas etmesi halinde batarya hücrelerinin delinmesi ve termal kaçak (yangın) riski ortaya çıkabilir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Firmamız elektrikli araç yüklemelerinde yumuşak poliüretan rampa takozları ve temas önleyici koruyucu kılavuzlar kullanır. Aracın batarya tablasına tek bir milimetrelik darbe dahi gelmeden yükleme gerçekleştirilir ve fabrika batarya garantisi eksiksiz korunur.
    </p>
  `,

  'aku-neden-aniden-biter-takviye-nasil-yapilir': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kaçak Akım (Parasitic Drain) Tespiti ve Multimetre Testi</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Yeni takılan bir akünün dahi birkaç gün içinde aniden boşalmasının en yaygın sebebi araçtaki gizli elektrik kaçaklarıdır. Bagaj aydınlatma lambasının kilit kapalıyken sönmemesi, sonradan takılan kalitesiz multimedya teyplerin uyku moduna geçmemesi veya alarm modülünün kısa devre yapması akünün enerjisini sessizce tüketir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Yol yardım teknisyenlerimiz akü takviyesinin ardından hassas dijital multimetre ile parazit akım çekiş testi (Parasitic Draw) uygular. Kontak kapalıyken elli miliamperin üzerinde akım çeken bir devre tespit edilirse, sürücüye kaçak yapan sigorta hattı gösterilir ve akünün tekrar tükenmemesi için anında teknik tavsiye verilir.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Jel ve AGM Akülerde Sülfatlaşmayı Önleyen Darbe Şarjı</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Uzun süre şarjsız kalan akü plakalarında oluşan kurşun sülfat kristalleri akünün şarj tutma kapasitesini öldürür. Klasik şarj cihazları bu kristalleri eritemezken, mobil servis araçlarımızda bulunan yüksek frekanslı darbe desülfatörleri plakaları temizleyerek akünün marş gücünü yeniden canlandırır. Bu profesyonel bakım sayesinde sürücülerimiz sıfır akü masrafından kurtulur.
    </p>
  `,

  'kurtkoy-ve-gebze-en-yakin-oto-cekici-rehberi': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Teknopark İstanbul ve Sabiha Gökçen Kargo Girişinde Acil Lojistik Çekici</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Teknopark İstanbul ar-ge yerleşkesi ile havalimanı kargo gümrük antrepoları koridorunda yüzlerce şirket aracı, ar-ge test otomobili ve kargo dağıtım filosu görev yapar. Sabah erken saatte teslim edilmesi gereken gümrüklü kargoları taşıyan bir panelvanın arızalanması lojistik zincirini tamamen sekteye uğratır.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Bu kritik lokasyonda nöbet tutan çekicimiz, kargo sahası ve Teknopark ana nizamiyesine beş ila sekiz dakikada intikal ederek aracı hızla yükler ve anlaşmalı yetkili servise teslim eder. Ticari operasyonların kesintiye uğramaması adına dakiklik ve sürat en temel çalışma prensibimizdir.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Dilovası ve Hereke Viyadükleri Geçişinde Şanzıman ve Fren Güvenliği</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Gebze'nin doğusunda yer alan Dilovası rampaları ve Hereke tünel geçişleri, TEM ve D-100 karayolunun en dik eğimli ve rüzgarlı kesimlerindendir. Yüklü araçların motor ve fren sistemleri bu rampalarda aşırı zorlanır; hararet yapma ve fren boşalması vakaları sıkça yaşanır.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Dilovası ve Hereke viyadüklerinde tepe flaşörlerimizle emniyet koridoru oluşturarak arızalı aracı rampadan güvenle tahliye ediyoruz. Kocaeli Körfez veya Gebze sanayisine kaskolu ve garantili nakil sağlıyoruz.
    </p>
  `,

  'sehir-ici-ve-otoyol-cekici-farklari-fiyat-ve-guvenlik': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Şehir İçi Katlı Otoparklarda Dönüş Açısı ve Tavan Gabarisi Yönetimi</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Modern rezidansların ve AVM'lerin eksi katlarında yer alan spiral rampalı otoparklar, iki metreden alçak tavan gabarileri ve keskin dönüş açılarıyla standart çekiciler için tam bir tuzaktır. Acemi müdahaleler otoparkın yangın sprinkler borularına veya beton kolonlarına çarparak yüz binlerce liralık yapısal hasarlara yol açabilir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kapalı otopark kurtarma araçlarımız özel alçak tavan kabinine ve hidrolik ahtapot vinç tertibatına sahiptir. Aracı tekerleklerinden kavrayarak spiral rampalardan sıfır sürtünmeyle yer üstüne çıkarır; ne binaya ne de aracınıza en ufak zarar gelmeden operasyon tamamlanır.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Dar Sokaklarda Hidrolik Arka Gözlük Sistemiyle Hızlı Kurtarma</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Pendik ve Maltepe'nin çıkmaz sokaklarında kayar kasayı açacak yeterli mesafe bulunmadığında kurtarıcımızın arkasında yer alan hidrolik gözlük (wheel-lift) mekanizması devreye girer. Arızalı aracın tahrik tekerlekleri hidrolik çatala alınarak yerden kesilir ve geri manevrayla araç dar sokaktan kolaylıkla çıkarılır.
    </p>
  `,

  'pendik-kartal-maltepe-e5-yol-yardim-ve-cekici-rehberi': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Pendik Sahil İDO Feribot İskelesi ve Marina Çevresi Acil Yol Yardımı</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Pendik İDO Hızlı Feribot İskelesi ve Viaport Marina sahil yolu, özellikle tatil günlerinde ve hafta sonlarında binlerce ailenin seyahat ettiği hareketli bir merkezdir. Feribota yetişmek üzereyken lastiği yarılan veya aküsü sıfırlanan sürücüler için zaman adeta saniyelerle yarış anlamına gelir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Pendik sahil bulvarında konuşlu gezici ekibimiz iskele bekleme alanına beş dakika içinde ulaşır. Stepne değişimi, akü takviyesi veya talep edilirse aracın çekici kasasına alınması işlemini jet hızıyla tamamlayarak feribot biletinizin yanmasını engelleriz.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kartal Köprüsü ve Yakacık Bağlantısında Zirve Saat Trafik Akışı</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kartal Köprüsü yonca kavşağı E-5 Karayolu'nu TEM Yakacık ve Samandıra bağlantısına bağlayan en yoğun trafik düğümlerinden biridir. Burada arızalanan araçlar trafiğin felç olmasına yol açar.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Nöbetçi devriye kurtarıcımız kavşağın geometrisine uygun olarak arkadan gelen akışı emniyet ikaz lambalarıyla yavaşlatır ve aracı dakikalar içerisinde yükleyerek Kartal Sanayi Sitesi'ne nakleder. Hızlı ve profesyonel müdahalemiz ile hem siz hem de binlerce sürücü rahat bir nefes alır.
    </p>
  `,

  'cayirova-gebze-sanayi-bolgesi-arac-kurtarma-ve-cekici': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Çayırova TOSB Otomotiv Yan Sanayi Vadisinde Filo Taşımacılığı</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      TOSB Otomotiv Tedarik Sanayi İhtisas Organize Sanayi Bölgesi, dünya devi otomotiv markalarına yedek parça üreten fabrikaları barındırır. Bu vadide üretilen kritik parçaların ana montaj fabrikalarına tam vaktinde (Just-in-Time) ulaşması gerekir; sevkiyat kamyonetinin yolda kalması uluslararası tedarik zincirini dahi etkileyebilir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      TOSB nizamiyesinde bekleyen acil oto kurtarıcımız arızalanan ticari panelvan veya kamyoneti dakikalar içinde kaskolu olarak yükler ve gerekirse yükün aktarılmasına yardımcı olur. Endüstriyel firmalarımızın her zaman güvenilir bir lojistik ortağı olmaktan gurur duyuyoruz.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">GOSB Meydanı ve İhsan Dede Caddesi Ağır Hizmet Devriyeleri</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Gebze OSB'nin ana arteri olan İhsan Dede Caddesi ve GOSB Meydanı, gün boyu tırların ve ağır iş makinelerinin geçiş güzergahıdır. Bu caddede şanzıman kilitleyen veya diferansiyeli dağılan ağır vasıtalar için çift tamburlu ağır kurtarıcılarımız görev başındadır.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Ağır tonajlı araçları yol dışına alarak fabrika giriş çıkışlarının kapanmasını engelliyor, bölgenin sanayi çarklarının aralıksız dönmesine katkı sunuyoruz.
    </p>
  `,

  'kaza-ve-ariza-aninda-kasko-anlasmali-cekici-sureci': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kasko Şirketinin Atadığı Çekici Gelmediğinde İtiraz Dilekçesi ve Rücu Dosyası</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Sigorta şirketinizin asistans merkezini arayıp çekici talep ettiğinizde, çağrı merkezi yetkilisi size belirli bir süre (örneğin kırk beş dakika) taahhüt eder. Ancak bu süre bir iki saati aştığında ve çekici hala gelmediğinde sürücünün can güvenliği tehlikeye girer. Bu durumda telefonunuzun arama kaydının ekran görüntüsünü alarak özel çekici çağırabilirsiniz.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kestiğimiz kurumsal e-Arşiv faturanın üzerine "Sigorta asistansının makul sürede intikal etmemesi sebebiyle zorunlu özel çekici hizmeti" ibaresi yazılır. Bu resmi şerh ile sigorta şirketine sunulan faturalar Sigortacılık Kanunu gereği eksiksiz ve koşulsuz olarak sigortalıya tazmin edilir.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Çekici Taşıma İrsaliyesi ve Araç Alt Taban Ekspertiz Fotoğrafları</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kaza yapmış araçların çekiciye yüklenmesi öncesinde operatörümüz aracın mevcut hasar durumunu, kaporta çiziklerini ve alt tabanını fotoğraflayarak dijital taşıma irsaliyesi düzenler. Bu önleyici tutanak sayesinde servis tesliminde oluşabilecek "bu hasar çekicide mi oldu?" tartışmaları tamamen engellenir ve sigorta ekspertiz süreci hızlanır.
    </p>
  `,

  'gece-nobetci-oto-cekici-cagirirken-bilinmesi-gerekenler': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Gece Karanlığında Reflektif Yelek ve Güvenlik Feneri Kullanımı</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Karanlık bir yolda beklerken yayaların görünürlüğü normal kıyafetlerle yalnızca yirmi ila otuz metre kadardır. Ancak üzerinizde fosforlu reflektif bir güvenlik yeleği bulunduğunda yaklaşan bir aracın far ışığı sizi üç yüz metre mesafeden net olarak aydınlatır.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Aracınızın torpido gözünde veya bagajında mutlaka en az iki adet reflektif yelek ve pilli el feneri bulundurunuz. Çekici beklerken bu yeleği giyerek bariyer arkasında durmak hayatınızı kurtaran en basit ve en etkili önlemdir.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Gece Açık Nöbetçi Oto Tamirhaneleri ve Güvenli Otopark Alanları</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Gece yarısı saat üçte çekilen bir aracın yetkili servis kapalı olduğu için nereye bırakılacağı sürücüler için ciddi bir soru işaretidir. Marmara Çekici olarak anlaşmalı kamera gözetimli, kapalı ve sigortalı nöbetçi otopark alanlarımız bulunmaktadır.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Aracınız gece güvenli otoparkımızda muhafaza edilir ve sabah mesai saati başladığında yetkili servise teslim edilerek teslimat formu tarafınıza iletilir. Siz gece rahat uykunuzu alırken aracınız emin ellerde koruma altında bekler.
    </p>
  `
};

let combined = {};
for (const [slug, content] of Object.entries(BLOG_ENRICHMENTS)) {
  const finalAdd = FINAL_ADDITIONS[slug] || '';
  combined[slug] = content + '\n' + finalAdd;
}

const fileContent = `'use strict';

/**
 * 10 BLOG MAKALESİ İÇİN TAMAMEN ÖZGÜN, SIFIR DUPLICATE (0 KOPYA CÜMLE)
 * HER BİRİ EN AZ 1000 KELİMELİK ZENGİNLEŞTİRME VERİSİ
 */

const BLOG_ENRICHMENTS = ${JSON.stringify(combined, null, 2)};

module.exports = { BLOG_ENRICHMENTS };
`;

fs.writeFileSync(path.join(__dirname, '..', 'data', 'blog_rich_content.js'), fileContent, 'utf8');
console.log('✓ blog_rich_content.js başarıyla güncellendi (2. Aşama Tamamlandı)!');
