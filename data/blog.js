'use strict';

const BLOG_POSTS = [
  {
    slug: 'otoyolda-arac-arizalandiginda-yapilmasi-gerekenler',
    tag: 'Güvenlik Rehberi',
    title: 'Otoyolda Araç Arızalandığında Yapılması Gerekenler',
    metaTitle: 'Otoyolda Araç Arızalandığında Yapılması Gerekenler | Rehber',
    metaDescription: 'Otoyolda arıza yaptığınızda reflektör kaç metreye konur, emniyet şeridinde nasıl güvende kalınır ve çekici çağırırken konum nasıl paylaşılır? Adım adım rehber.',
    publishDate: '2026-01-12',
    sections: [
      {
        heading: 'Otoyolda Arıza Anında İlk 60 Saniye',
        html: `<p>Yüksek hızlı bir otoyolda aracınız aniden arızalandığında, ilk bir dakika içinde verdiğiniz kararlar hem sizin hem de etraftaki sürücülerin güvenliğini doğrudan etkiler. İlk yapmanız gereken, panik yapmadan dört yönlü sinyal ışıklarını (flaşörleri) açmak ve aracı mümkünse kademeli olarak sağ şeride, ardından emniyet şeridine yönlendirmektir. Ani fren yapmak yerine yavaşça hız kesip aracı sağa almak, arkadan gelen araçların tepki verebilmesi için kritik önem taşır.</p>
        <p>Araç emniyet şeridine alındıktan sonra, mümkünse direksiyonu sağa doğru kırarak park edin; bu, aracın olası bir çarpma anında yola doğru değil bariyere doğru hareket etmesini sağlar. Motoru durdurun ve aracın içinde kalmayın.</p>`
      },
      {
        heading: 'Reflektör Kaç Metreye Konur?',
        html: `<p>Karayolları Trafik Yönetmeliği'ne göre, arızalanan veya kaza yapan araçların arkasına konulan reflektör üçgeninin şehir içi yollarda en az 30 metre, şehirler arası yollarda ve otoyollarda ise <strong>150 metre</strong> geriye yerleştirilmesi gerekmektedir. Bu mesafe, yüksek hızda seyreden bir sürücünün reflektörü fark edip güvenli şekilde şerit değiştirebilmesi için gereken minimum reaksiyon mesafesini karşılar.</p>
        <table>
          <thead><tr><th>Yol Tipi</th><th>Minimum Reflektör Mesafesi</th></tr></thead>
          <tbody>
            <tr><td>Şehir İçi Yol</td><td>30 metre</td></tr>
            <tr><td>Şehirler Arası Yol</td><td>100 metre</td></tr>
            <tr><td>Otoyol / Ekspres Yol</td><td>150 metre</td></tr>
          </tbody>
        </table>
        <p>Reflektörü yerleştirirken emniyet şeridinde yürümeniz gerekiyorsa, mutlaka reflektif yelek giyin ve trafiğe sırtınızı dönmeyin.</p>`
      },
      {
        heading: 'Emniyet Şeridinde Hayatta Kalma Rehberi',
        html: `<ol>
          <li>Aracı mümkün olduğunca sağa, bariyere yakın park edin.</li>
          <li>Dört yönlü flaşörleri açın ve reflektif yelek giyin.</li>
          <li>Araçtaki tüm yolcuları, mümkünse çelik bariyerin dışına, güvenli alana yönlendirin.</li>
          <li>Reflektör üçgenini 150 metre arkaya, yol kenarından yürüyerek konumlandırın.</li>
          <li>Kesinlikle emniyet şeridinde arızalı aracın yanında veya trafiğe dönük şekilde beklemeyin.</li>
          <li>Çekici veya yetkili ekip gelene kadar bariyer arkasında, güvenli mesafede bekleyin.</li>
        </ol>
        <p>İstatistiklere göre otoyol kazalarının önemli bir kısmı, emniyet şeridinde bekleyen araçlara arkadan çarpma şeklinde gerçekleşmektedir. Bu nedenle "araçtan uzaklaşma" kuralı, reflektör koymaktan daha az bilinen ama hayati önemde bir güvenlik adımıdır.</p>`
      },
      {
        heading: 'Kuzey Marmara ve TEM Gişelerinde Çekici Çağırırken Konum Nasıl Paylaşılır?',
        html: `<p>Kuzey Marmara Otoyolu ve TEM Otoyolu gibi uzun ve viyadük/tünel yoğun güzergahlarda, konumunuzu doğru paylaşmak müdahale süresini doğrudan kısaltır. Önerilen yöntemler:</p>
        <ul>
          <li><strong>WhatsApp Canlı Konum:</strong> WhatsApp üzerinden "Konum Gönder" özelliğini kullanarak anlık GPS konumunuzu doğrudan paylaşabilirsiniz.</li>
          <li><strong>En Yakın Gişe/Kilometre Tabelası:</strong> Otoyol üzerindeki kilometre tabelaları veya bir önceki/sonraki gişe adını belirtmek, GPS sinyali zayıf olduğunda yönlendirmeyi hızlandırır.</li>
          <li><strong>Yön Bilgisi:</strong> Hangi istikamete gittiğinizi (örneğin "Gebze istikametine giderken" veya "Kurtköy istikametine giderken") belirtmek kritik önem taşır.</li>
        </ul>
        <p>Bizi aradığınızda veya WhatsApp'tan yazdığınızda konumunuzu aldığımız anda size tahmini varış süresi ve sabit fiyat teyidi veriyoruz.</p>`
      }
    ],
    faqs: [
      { q: 'Reflektör üçgenim yoksa ne yapmalıyım?', a: 'Dört yönlü flaşörleri açık tutun, aracın yanından uzaklaşın ve bariyer arkasına geçerek bizi arayın; ekibimiz ek güvenlik ekipmanıyla sahaya gelir.' },
      { q: 'Emniyet şeridinde ne kadar bekleyebilirim?', a: 'Mümkünse hiç beklemeyin; aracın yanından uzaklaşıp bariyer dışına geçin, çekici gelene kadar güvenli mesafede bekleyin.' },
      { q: 'Tünel içinde arızalanırsam ne yapmalıyım?', a: 'Dört yönlü sinyalleri açın, mümkünse aracı tünel kenarına çekin ve acil durum telefonlarını veya bizi arayarak durumu bildirin.' }
    ]
  },
  {
    slug: 'kuzey-marmara-otoyolu-cekici-fiyatlari-2026',
    tag: 'Fiyat Rehberi',
    title: 'Kuzey Marmara Otoyolu Çekici Fiyatları 2026',
    metaTitle: 'Kuzey Marmara Otoyolu Çekici Fiyatları 2026 | Şeffaf Tarife Rehberi',
    metaDescription: 'Kuzey Marmara Otoyolu çekici fiyatı nasıl hesaplanır? 2026 güncel taban fiyat, km başına ücret ve sabit fiyat garantisinin önemi.',
    publishDate: '2026-01-20',
    sections: [
      {
        heading: 'Çekici Fiyatı Nasıl Hesaplanır?',
        html: `<p>Oto çekici fiyatlandırması genellikle üç temel bileşenden oluşur: <strong>taban fiyat</strong> (ekibin sahaya çıkması için sabit bir ücret), <strong>kilometre başına ücret</strong> (alınan noktadan varış noktasına kadar olan mesafeye göre hesaplanan ek ücret) ve varsa <strong>köprü/otoyol geçiş ücretleri</strong>. 2026 yılı itibarıyla Kuzey Marmara ve TEM hattında ortalama bir binek araç çekimi için taban fiyat ve ilk kilometrelerin dahil olduğu paket fiyatlar uygulanmaktadır.</p>`
      },
      {
        heading: 'Örnek Fiyat Karşılaştırma Tablosu',
        html: `<table>
          <thead><tr><th>Mesafe Aralığı</th><th>Araç Tipi</th><th>Tahmini Fiyat Aralığı</th></tr></thead>
          <tbody>
            <tr><td>0-5 km</td><td>Binek / SUV</td><td>500₺ - 750₺</td></tr>
            <tr><td>5-15 km</td><td>Binek / SUV</td><td>750₺ - 1.100₺</td></tr>
            <tr><td>15-30 km</td><td>Binek / SUV</td><td>1.100₺ - 1.600₺</td></tr>
            <tr><td>0-15 km</td><td>Ağır Vasıta (Kamyon/Tır)</td><td>1.500₺ - 2.500₺</td></tr>
            <tr><td>Şehirler Arası</td><td>Tüm Araç Tipleri</td><td>Telefonda Özel Teklif</td></tr>
          </tbody>
        </table>
        <p><em>Not: Fiyatlar tahmini aralıklardır; kesin fiyat, konumunuz ve varış noktanız netleştiğinde telefonda sabitlenir.</em></p>`
      },
      {
        heading: 'Sabit Fiyat Garantisi Neden Hayatidir?',
        html: `<p>Yolda kalan ve zaten stresli bir anında olan bir sürücü için en büyük ikinci risk, çekici geldikten sonra sürpriz ek ücretlerle karşılaşmaktır. Bu nedenle biz, konumunuzu ve varış noktanızı aldığımız anda telefonda <strong>sabit ve net</strong> bir fiyat teyidi veriyoruz. Bu fiyata km ücreti, operatör işçiliği ve standart yükleme-boşaltma dahildir; gece, hafta sonu veya resmi tatil için ek "gizli" ücret talep edilmez.</p>`
      },
      {
        heading: 'Fiyatı Etkileyen Faktörler',
        html: `<ul>
          <li><strong>Mesafe:</strong> Alınan nokta ile teslim noktası arasındaki kilometre.</li>
          <li><strong>Araç Tipi:</strong> Binek, SUV, motosiklet veya ağır vasıta olması ekipman ihtiyacını değiştirir.</li>
          <li><strong>Operasyon Zorluğu:</strong> Şarampol kurtarma, vinçleme gibi ek ekipman gereken durumlar.</li>
          <li><strong>Erişim Koşulları:</strong> Dar sokak, otopark katı gibi özel erişim gerektiren konumlar.</li>
        </ul>`
      }
    ],
    faqs: [
      { q: 'Gece veya hafta sonu ek ücret var mı?', a: 'Hayır, 7/24 aynı şeffaf tarife üzerinden hizmet veriyoruz, gece/gündüz farkı uygulamıyoruz.' },
      { q: 'Fiyat ne zaman netleşiyor?', a: 'Konumunuzu ve varış noktanızı aldığımız anda telefonda size net ve sabit fiyat teyidi veriyoruz.' },
      { q: 'Kredi kartıyla ödeme yapabilir miyim?', a: 'Evet, mobil POS cihazlarımızla yerinde kredi kartı ve taksitli ödeme kabul ediyoruz.' }
    ]
  },
  {
    slug: 'otomatik-vites-ve-elektrikli-araclar-nasil-cekilir',
    tag: 'Teknik Rehber',
    title: 'Otomatik Vites ve Elektrikli Araçlar Nasıl Çekilir?',
    metaTitle: 'Otomatik Vites ve Elektrikli Araçlar Nasıl Çekilir? | Teknik Rehber',
    metaDescription: 'Otomatik şanzımanlı ve elektrikli araçlar neden halatla çekilmez? Tesla Transport Mode, batarya kilidi ve kayar kasa vinç farkı anlatıldı.',
    publishDate: '2026-02-02',
    sections: [
      {
        heading: 'Otomatik Şanzıman Neden Boşa Alınıp Halatla Çekilmez?',
        html: `<p>Manuel şanzımanlı araçlarda vites boşa alınıp kısa mesafeler için halatla çekme teorik olarak mümkün olsa da, otomatik şanzımanlı araçlarda bu kesinlikle önerilmez. Otomatik şanzımanlarda yağlama sistemi, motor çalışırken oluşan hidrolik basınçla çalışır. Motor kapalıyken araç halatla çekildiğinde, şanzıman içindeki dişliler ve yağlama pompası yeterli basınç oluşturamaz; bu da sürtünme ve aşırı ısınma sonucu <strong>şanzıman dişlisinin yanmasına</strong> ve ciddi, maliyetli bir arızaya yol açabilir.</p>
        <p>Bu nedenle otomatik vitesli araçların her zaman tekerlekleri yerden kesilerek (kayar kasa platform veya tekerlek arabası ile) taşınması gerekir.</p>`
      },
      {
        heading: 'Tesla ve Elektrikli Araçlarda Batarya Kilidi ve "Transport Mode"',
        html: `<p>Elektrikli araçlar, geleneksel araçlardan farklı bir çekme protokolü gerektirir. Çoğu elektrikli araçta, park halindeyken elektronik park freni otomatik olarak devreye girer ve tekerlekler kilitlenebilir. Tesla gibi üreticiler, araçların çekilmesi için özel bir <strong>"Transport Mode" (Taşıma Modu)</strong> sunar; bu mod aktifleştirildiğinde elektronik park freni devre dışı kalır ve araç, motor gücü olmadan güvenle tekerlekleri üzerinde hareket ettirilebilir hale gelir.</p>
        <p>Transport Mode aktifleştirilemiyorsa (örneğin aracın 12V yardımcı bataryası da bitmişse), aracın <strong>hiçbir tekerleği yere değmeyecek şekilde</strong> kayar kasa platforma yüklenmesi gerekir. Bu, yüksek voltajlı batarya paketine veya elektrik motoruna zarar verilmesini önler.</p>`
      },
      {
        heading: 'Ahtapot (Çapa Ayaklı Vinç) ve Kayar Kasa Vinç Farkı',
        html: `<table>
          <thead><tr><th>Özellik</th><th>Ahtapot (Çapa Ayaklı) Vinç</th><th>Kayar Kasa Platform</th></tr></thead>
          <tbody>
            <tr><td>Çalışma Prensibi</td><td>Aracın bir ucunu kaldırıp diğer tekerlekler yerde sürüklenerek taşır</td><td>Aracın tüm gövdesi platforma yüklenir, hiçbir tekerlek yere değmez</td></tr>
            <tr><td>Otomatik Vites Uyumu</td><td>Riskli, şanzıman hasarı ihtimali var</td><td>Tamamen güvenli</td></tr>
            <tr><td>Elektrikli Araç Uyumu</td><td>Önerilmez</td><td>Güvenli (Transport Mode ile birlikte)</td></tr>
            <tr><td>Kullanım Alanı</td><td>Dar alan kurtarma, kısa mesafe</td><td>Her türlü mesafe ve araç tipi</td></tr>
          </tbody>
        </table>
        <p>Bu nedenle modern oto çekici hizmetlerinde, özellikle otomatik vites ve elektrikli araçlar için kayar kasa platform sistemleri standart hale gelmiştir.</p>`
      }
    ],
    faqs: [
      { q: 'Elektrikli aracım Transport Mode\'a alınamıyorsa ne olur?', a: 'Bu durumda aracı hiçbir tekerleği yere değmeden kayar kasa platforma yükleyerek taşırız; bu yöntem her koşulda güvenlidir.' },
      { q: 'Otomatik vitesli aracımı kısa mesafe de olsa halatla çekebilir miyim?', a: 'Önermiyoruz; kısa mesafede bile şanzıman hasarı riski vardır, her zaman kayar kasa platform kullanılmalıdır.' },
      { q: 'Tesla dışındaki elektrikli araçlarda da taşıma modu var mı?', a: 'Çoğu modern elektrikli araç üreticisi benzer bir taşıma/çekme protokolü sunar; ekiplerimiz marka bazlı doğru prosedürü bilir.' }
    ]
  },
  {
    slug: 'aku-neden-aniden-biter-takviye-nasil-yapilir',
    tag: 'Teknik Rehber',
    title: 'Akü Neden Aniden Biter, Takviye Nasıl Yapılır?',
    metaTitle: 'Akü Neden Aniden Biter? Takviye Nasıl Yapılır? | Rehber',
    metaDescription: 'Kışın ve yazın akü ömrü, start-stop AGM/EFB akü tipleri, yanlış takviyede ECU yanma riski ve dijital booster avantajları.',
    publishDate: '2026-02-14',
    sections: [
      {
        heading: 'Kışın ve Yaz Sıcağında Akü Ömrü Neden Kısalır?',
        html: `<p>Akü performansı, sıcaklıkla ters orantılı bir ilişkiye sahiptir. Kış aylarında düşük sıcaklık, akü içindeki kimyasal reaksiyonların hızını yavaşlatır; bu da aküden çekilebilecek akım miktarını azaltır ve soğuk havada motor marş gücünün daha fazla olması gerektiği bir anda aküyü daha zayıf hale getirir. Yaz aylarında ise yüksek sıcaklık, akü içindeki suyun buharlaşmasını hızlandırarak akü plakalarının erken yaşlanmasına ve ömrünün kısalmasına neden olur. Bu nedenle akü arızaları genellikle kış başlangıcında ve yaz sonunda ani artış gösterir.</p>`
      },
      {
        heading: 'Start-Stop Sistemli Araçlarda AGM ve EFB Akü Tipleri',
        html: `<p>Modern start-stop sistemli araçlar, trafik ışığında veya kısa duraklamalarda motoru otomatik olarak durdurup yeniden çalıştırır. Bu sürekli açma-kapama döngüsü standart kurşun-asit akülerin ömrünü hızla tüketir. Bu nedenle start-stop araçlarda özel <strong>AGM (Absorbent Glass Mat)</strong> veya <strong>EFB (Enhanced Flooded Battery)</strong> akü teknolojileri kullanılır:</p>
        <ul>
          <li><strong>EFB Aküler:</strong> Standart akülere göre daha fazla döngü dayanımına sahiptir, orta seviye start-stop araçlar için uygundur.</li>
          <li><strong>AGM Aküler:</strong> En yüksek döngü dayanımı ve deşarj toleransına sahiptir, yüksek donanımlı start-stop ve enerji geri kazanım sistemli araçlarda kullanılır.</li>
        </ul>
        <p>Bu akülerin yanlış tip ile değiştirilmesi, start-stop sisteminin devre dışı kalmasına veya akünün beklenenden çok daha kısa ömürlü olmasına yol açabilir.</p>`
      },
      {
        heading: 'Yanlış Takviyede Beyin (ECU) Yanma Riski',
        html: `<p>Kablo ile yapılan geleneksel akü takviyesinde, kutup başlarının ters bağlanması veya ani yüksek voltaj dalgalanması, aracın elektronik kontrol ünitesine (ECU) ve diğer hassas elektronik modüllere kalıcı hasar verebilir. Özellikle modern araçlarda çok sayıda elektronik modül bulunduğundan, bu risk eskiye göre çok daha yüksektir.</p>
        <p><strong>Dijital booster cihazları</strong>, bu riski ortadan kaldıran akıllı voltaj koruma devreleri içerir. Bu cihazlar, bağlantı kutuplarını otomatik algılar, ters bağlantıyı engeller ve voltaj çıkışını araç elektroniğine zarar vermeyecek şekilde kademeli olarak kontrol eder. Bu nedenle profesyonel yol yardım hizmetlerinde artık standart hale gelmiştir.</p>`
      }
    ],
    faqs: [
      { q: 'Aküm her kış bitiyor, bu normal mi?', a: 'Kış aylarında akü performansı doğal olarak düşer; ancak akü 3 yaşından büyükse test ettirip gerekirse değiştirmeniz önerilir.' },
      { q: 'Dijital booster normal kablo takviyeden daha mı güvenli?', a: 'Evet, dijital boosterlar akıllı voltaj koruma sistemiyle ECU hasarı riskini ortadan kaldırır.' },
      { q: 'AGM akü yerine normal akü taksam ne olur?', a: 'Start-stop sistemi düzgün çalışmayabilir ve yeni akünün ömrü beklenenden çok daha kısa olabilir; doğru akü tipini kullanmanızı öneririz.' }
    ]
  },
  {
    slug: 'kurtkoy-ve-gebze-en-yakin-oto-cekici-secim-rehberi',
    tag: 'Rehber',
    title: 'Kurtköy ve Gebze\'de En Yakın Oto Çekici Seçim Rehberi',
    metaTitle: 'Kurtköy ve Gebze En Yakın Oto Çekici Seçim Rehberi',
    metaDescription: 'Kurtköy ve Gebze sanayi bölgelerinde korsan çekiciden korunma, taşıma kaskosu ve yetki belgesi sorgulama rehberi.',
    publishDate: '2026-02-25',
    sections: [
      {
        heading: 'Sanayi Bölgelerinde ve Otoban Bağlantılarında Korsan Çekici Riski',
        html: `<p>Kurtköy ve Gebze gibi yoğun sanayi ve otoban bağlantı noktalarında, özellikle kaza sonrası panik anında "tesadüfen oradan geçiyormuş gibi" görünen yetkisiz çekici operatörleri sürücülere yaklaşabilir. Bu kişiler genellikle önce düşük bir fiyat söyler, araç yüklendikten veya teslim noktasına varıldıktan sonra çok daha yüksek bir ücret talep eder. Bazı durumlarda ise araç, sürücünün onayı olmadan anlaşmalı olduğu bir servise değil, komisyon aldıkları bambaşka bir servise yönlendirilebilir.</p>
        <p>Bu riskten korunmanın en etkili yolu, aracınız arızalanmadan önce güvenilir ve kayıtlı bir çekici firmasının numarasını telefonunuza kaydetmiş olmaktır.</p>`
      },
      {
        heading: 'Taşıma Kaskosu ve Yetki Belgesi Sorgulama',
        html: `<p>Bir çekici firmasıyla çalışmadan önce veya olay yerinde kontrol edebileceğiniz temel güvence unsurları şunlardır:</p>
        <ul>
          <li><strong>KTK Yetki Belgesi:</strong> Karayolu Taşıma Kanunu kapsamında yetkilendirilmiş firmalar, bu belgeyi talep üzerine gösterebilmelidir.</li>
          <li><strong>Emtia Nakliyat Taşıma Kaskosu:</strong> Taşıma sırasında aracınızda oluşabilecek hasarları karşılayan bir sigorta poliçesinin bulunup bulunmadığını sorun.</li>
          <li><strong>Sabit Fiyat Teyidi:</strong> Araç yüklenmeden önce, telefonda veya yazılı olarak (WhatsApp mesajı) net bir fiyat teyidi alın.</li>
          <li><strong>Firma Kimliği:</strong> Operatörün üzerinde firma logosu/kimliği olup olmadığına, aracın üzerinde firma bilgisi bulunup bulunmadığına dikkat edin.</li>
        </ul>`
      },
      {
        heading: 'Kurtköy ve Gebze\'de Doğru Çekici Seçimi İçin Kontrol Listesi',
        html: `<ol>
          <li>Önceden kayıtlı, güvenilir bir numarayı arayın; yol kenarında teklif eden bilinmeyen araçlara güvenmeyin.</li>
          <li>Fiyatı yazılı olarak (SMS/WhatsApp) teyit edin.</li>
          <li>Aracınızın hangi servise götürüleceğini siz belirleyin, operatörün önerisine bağlı kalmayın.</li>
          <li>Taşıma kaskosu olup olmadığını sorun.</li>
          <li>İşlem sonunda fatura veya fiş talep edin.</li>
        </ol>
        <p>Bu basit kontrol listesini uygulamak, hem finansal hem de aracınızın güvenliği açısından sizi korur.</p>`
      }
    ],
    faqs: [
      { q: 'Yol kenarında teklif eden çekiciye güvenebilir miyim?', a: 'Genel olarak önerilmez; önceden kayıtlı ve kimliği doğrulanabilir bir firmayı aramanız daha güvenlidir.' },
      { q: 'Taşıma kaskonuz var mı?', a: 'Evet, tüm taşımalarımız %100 emtia nakliyat taşıma kaskosu kapsamındadır.' },
      { q: 'KTK yetki belgeniz var mı?', a: 'Evet, operatörlerimiz KTK yetki belgeli ve uzman kadromuzla hizmet veriyoruz.' }
    ]
  }
];

module.exports = { BLOG_POSTS };
