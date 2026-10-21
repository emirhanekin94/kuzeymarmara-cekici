/**
 * KUZEY MARMARA OTO ÇEKİCİ - 7/24 BLOG & KAPSAMLI REHBER ÜRETİM MOTORU
 * Tel & WhatsApp: 0533 265 70 89
 */

const fs = require('fs');
const path = require('path');
const { ADDITIONAL_BLOGS } = require('../data/blog_new.js');

const PHONE = '0533 265 70 89';
const PHONE_RAW = '905332657089';
const DOMAIN = 'https://kuzeymarmaracekici.com';

const richFooterHtml = `
  <!-- 4 Kolonlu Kurumsal Site Footer -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col footer-brand">
        <div class="footer-logo">
          <img src="/images/logo.svg" alt="Marmara Çekici Logo" width="44" height="44">
          <span style="color: #fff; font-size: 1.25rem; font-weight: 900; margin-left: 10px;">MARMARA <span style="color: #ea580c;">ÇEKİCİ</span></span>
        </div>
        <p style="color: #94a3b8; font-size: 0.9rem; line-height: 1.6; margin: 12px 0 16px;">
          Anadolu Yakası (Pendik, Kartal, Maltepe, Kurtköy, Tuzla), Gebze, Çayırova ve Kuzey Marmara Otoyolu ile TEM güzergahında 7/24 güvenilir, kaskolu ve sabit fiyatlı oto kurtarıcı hizmeti.
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
        <h4 style="color: #fff; font-weight: 800; font-size: 1.05rem; margin-bottom: 16px;">Kurumsal &amp; Hızlı Menü</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2.1; font-size: 0.9rem;">
          <li><a href="/" style="color: #94a3b8; text-decoration: none;">Ana Sayfa</a></li>
          <li><a href="/hakkimizda.html" style="color: #94a3b8; text-decoration: none;">Hakkımızda</a></li>
          <li><a href="/galeri.html" style="color: #94a3b8; text-decoration: none;">Foto Galeri</a></li>
          <li><a href="index.html" style="color: #94a3b8; text-decoration: none;">Blog &amp; Rehber</a></li>
          <li><a href="/iletisim.html" style="color: #94a3b8; text-decoration: none;">İletişim</a></li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom" style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 25px; margin-top: 25px; text-align: center; color: #64748b; font-size: 0.88rem;">
      <p>&copy; 2026 Marmara Çekici. Tüm hakları saklıdır. 7/24 Kesintisiz Otoyol &amp; Şehir İçi Oto Kurtarma.</p>
    </div>
  </footer>`;

const blogs = [
  {
    slug: 'otoyolda-arac-arizalandiginda-yapilmasi-gerekenler',
    title: 'Otoyolda Araç Arızalandığında Yapılması Gerekenler | Kuzey Marmara & TEM Rehberi',
    metaDesc: 'Kuzey Marmara Otoyolu (KMO) ve TEM Otoyolu üzerinde araç arızalandığında can güvenliğini koruma rehberi. 150 metre reflektör kuralı, emniyet şeridi tahliyesi ve acil çekici çağırma: 0533 265 70 89.',
    keywords: 'otoyolda yolda kalmak, kuzey marmara otoyolu çekici, otoban çekici, tem otoyolu çekici, kurtköy oto kurtarma, emniyet şeridi kuralları, reflektör kaç metreye konur, otoyol acil yol yardım',
    image: 'otoyol-cekici.webp',
    date: '2026-10-15',
    readTime: '8 Dakika Okuma',
    headline: 'Otoyolda Araç Arızalandığında Yapılması Gereken Hayati Adımlar & Otoyol Güvenlik Rehberi',
    lead: '120-140 km/s hızla akan transit otoyol trafiğinde aracınız aniden stop ettiğinde, hararet yaptığında veya lastiğiniz parçalandığında can güvenliğinizi korumak için uygulamanız gereken altın kurallar.',
    content: `
      <p style="font-size:1.05rem; line-height:1.85; color:#334155; margin-bottom:20px;">
        <strong>Kuzey Marmara Otoyolu (KMO)</strong> ve <strong>TEM Otoyolu</strong> gibi yüksek hız limitine (140 km/s) sahip çok şeritli transit arterlerde araç arızası yaşamak, sıradan bir şehir içi arızasından katbekat daha tehlikelidir. Arkadan gelen onlarca tonluk ağır vasıtalar ve yüksek hızdaki binek otomobillerin durma mesafesi onlarca metreyi bulur. Bu sebeple otoyolda emniyet şeridinde beklemek dahi büyük can riski taşır.
      </p>

      <div style="background:#fff7ed; border-left:4px solid #ea580c; padding:22px; border-radius:10px; margin:28px 0;">
        <h4 style="color:#c2410c; margin-bottom:8px; font-size:1.15rem; font-weight:800;">⚠️ Karayolları Trafik Kanunu Madde 135 Kuralı</h4>
        <p style="color:#7c2d12; margin:0; line-height:1.7; font-size:0.95rem;">
          Otoyollarda ve bölünmüş ekspres yollarda kırmızı üçgen reflektör, arızalı aracın arkasına <strong>en az 150 metre</strong> mesafeye yerleştirilmelidir. Şehir içi gibi 30 metreye koymak, 140 km/s hızla seyreden bir aracın durması veya şerit değiştirmesi için kesinlikle yeterli mesafe sağlamaz!
        </p>
      </div>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">1. Adım: Motor Durmadan Aracı Emniyet Şeridinin En Sağına Yanaştırın</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Gösterge panelinde akü, hararet veya motor arıza lambası yandığı anda panik yapmadan derhal dörtlü ikaz lambalarınızı yakın. Gaz pedalını bırakarak aracın ataletinden faydalanın ve sağ aynanızı kontrol ederek yumuşakça emniyet şeridine geçin.
      </p>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Aracınızı emniyet şeridinin en sağ çizgisine, hatta çelik bariyerlere 30-40 cm kalacak kadar yanaştırarak durdurun. Direksiyonu sağa (çelik bariyere doğru) tam tur çevirin ve el frenini çekin. Bu hayat kurtaran bir tedbirdir: Arkadan dikkatsiz bir araç çarparsa, aracınız yola doğru değil bariyer tarafına savrulur.
      </p>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">2. Adım: Aracın İçinde Kesinlikle Beklemeyin! Bariyerin Arkasına Geçin</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Otoyol kazalarında meydana gelen ölümlerin en büyük nedeni, çekici beklerken araç içinde oturmaktır. Emniyet şeridinde park halinde bekleyen bir otomobil, arkadan gelen tır veya uyuyan bir sürücü için adeta hedef tahtasıdır.
      </p>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Sürücü ve araçtaki tüm yolcular mutlaka <strong>sağ kapılardan</strong> (trafiğin akmadığı taraftan) inmeli ve hemen yol kenarındaki çelik bariyerlerin arkasına, toprak yamaca veya güvenli tepeye geçmelidir. Çocukları ve evcil hayvanları asla bariyerin yol tarafında tutmayınız.
      </p>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">3. Adım: Reflektörü Kurallara Uygun Yerleştirin</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Bariyerin arkasından yürüyerek aracınızın 150 metre gerisine doğru ilerleyin. Üçgen reflektörü emniyet şeridinin çizgisine görünür şekilde kurun. Eğer viraj veya tepe üstü çıkışındaysanız, reflektörü viraj girişinden önce koymalısınız ki arkadan gelen sürücüler tehlikeyi önceden fark etsin.
      </p>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">4. Adım: Kuzey Marmara Çekici Nöbet Merkezini Arayın (0533 265 70 89)</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Güvenli noktaya geçtikten sonra vakit kaybetmeden <strong>0533 265 70 89</strong> numaramızı arayın veya WhatsApp üzerinden canlı konum gönderin. Bulunduğunuz yerdeki otoyol kilometre taşını (Örn: KMO Km: 142+500), geçtiniz son gişeyi (Kurtköy, Kurnaköy, Mecidiye, Akse vb.) veya tünel adını operatörümüze iletiniz.
      </p>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Otoyol devriye filomuz tepe flaşör kuleleriyle donatılmıştır. Olay yerine intikal ettiğimizde ilk olarak arkadan gelen trafiği uyaran güvenlik koridoru oluşturulur, ardından aracınız hidrolik kayar kasaya sıfır riskle yüklenir.
      </p>

      <div style="background:#f0fdf4; border-left:4px solid #10b981; padding:22px; border-radius:10px; margin:28px 0;">
        <h4 style="color:#166534; margin-bottom:8px; font-size:1.15rem; font-weight:800;">💡 Otoyolda Lastik Patladığında Kendi Başınıza Değiştirmeyin!</h4>
        <p style="color:#14532d; margin:0; line-height:1.7; font-size:0.95rem;">
          Emniyet şeridinde sol tekerlek tarafında kriko ile eğilmek son derece ölümcül bir risktir. Yoldan geçen tırların yarattığı hava vakumu insanı yola doğru çekebilir. Bu sebeple tepe lambalı koruma aracı olmadan lastik değiştirmeye çalışmayınız; profesyonel yol yardım ekibimiz güvenliği alarak 5 dakikada stepnenizi takar.
        </p>
      </div>
    `,
    faqs: [
      { q: 'Otoyolda üçgen reflektör kaç metre geriye konulmalıdır?', a: 'Karayolları Trafik Kanunu Madde 135 gereğince otoyollarda reflektör aracın arkasına en az 150 metre mesafeye konulmalıdır.' },
      { q: 'Kuzey Marmara Otoyolu gişelerine çekici ne kadar sürede varır?', a: 'KMO Kurtköy, Kurnaköy ve Mecidiye gişelerinde bekleyen nöbetçi kurtarıcılarımız ortalama 10 ila 15 dakikada intikal eder.' },
      { q: 'Emniyet şeridinde araç içinde oturmak neden tehlikelidir?', a: 'Yüksek hızlı transit yollarda arkadan çarpma kazaları ölümcül sonuçlar doğurur. Tüm yolcular bariyer arkasına geçmelidir.' },
      { q: 'Otoyol çekici ücreti telefonda teyit edilir mi?', a: 'Evet, gidilecek nokta ve araç cinsine göre telefonda net sabit fiyat bildirilir; sürpriz masraf çıkarılmaz.' }
    ]
  },
  {
    slug: 'kuzey-marmara-otoyolu-cekici-fiyatlari-nasil-hesaplanir',
    title: 'Kuzey Marmara Otoyolu Çekici Fiyatları Nasıl Hesaplanır? | 2026 Ücret Rehberi',
    metaDesc: '2026 güncel otoyol oto çekici fiyat hesaplama rehberi. KMO açılış taban ücreti, km tarifesi, Kurtköy-Gebze fiyatları, kasko karşılar mı? Şeffaf tarife: 0533 265 70 89.',
    keywords: 'kuzey marmara otoyolu çekici fiyatları, çekici fiyat hesaplama 2026, kurtköy çekici ücreti, kmo çekici ne kadar, oto kurtarıcı km fiyatı, kaskolu çekici fiyatı, çekici sabit fiyat',
    image: 'otomobil_cekici-1.webp',
    date: '2026-10-18',
    readTime: '7 Dakika Okuma',
    headline: 'Kuzey Marmara Çekici Fiyatları Nasıl Hesaplanır? 2026 Şeffaf Ücret Standartları',
    lead: 'Yolda kaldığınızda fahiş fiyatlarla veya sonradan eklenen sürpriz masraflarla karşılaşmamak için oto çekici fiyatlarının nasıl hesaplandığını ve sabit fiyat garantisinin detaylarını öğrenin.',
    content: `
      <p style="font-size:1.05rem; line-height:1.85; color:#334155; margin-bottom:20px;">
        Oto çekici ve kurtarma sektöründe sürücülerin en çok çekindiği konu, iş bitiminde karşılaşılan sürpriz faturalardır. Özellikle otoyollarda çaresiz kalan sürücüler, mesafeyi netleştirmeden çekici çağırdıklarında "otoban farkı", "gece tarifesi", "yükleme parası" gibi bahanelerle fahiş rakamlarla karşılaşabilirler.
      </p>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Oto Çekici Fiyatını Belirleyen 4 Temel Kriter</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Kurumsal bir oto kurtarma firmasında fiyat rastgele belirlenmez; tamamen matematiksel ve şeffaf parametrelere dayanır:
      </p>

      <ul style="color:#334155; line-height:2.1; font-size:1rem; padding-left:22px; margin-bottom:25px;">
        <li><strong>1. Açılış Taban Ücreti:</strong> Kurtarıcı aracın adrese yönlendirilmesi, olay yeri güvenlik tertibatı, hidrolik platformun indirilmesi ve aracın kaskolu bağlanmasını içeren standart operasyon başlangıç bedelidir.</li>
        <li><strong>2. Kilometre (Mesafe) Tarifesi:</strong> Aracın yüklendiği noktadan teslim edileceği yetkili servis, sanayi sitesi veya adrese kadar olan net yol mesafesidir.</li>
        <li><strong>3. Araç Segmenti ve Ağırlığı:</strong> 1.200 kg binek bir sedan ile 3 tonluk zırhlı SUV, hafif ticari minibüs veya basık spor bir aracın rampa gereksinimleri farklıdır.</li>
        <li><strong>4. Operasyonel Zorluk:</strong> Şanzımanı kilitli, tekerleği kopuk veya şarampole inmiş araçlarda vinç ve dolly arabacığı kullanımı gerektiğinde bu durum telefonda baştan teyit edilir.</li>
      </ul>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kuzey Marmara &amp; Kurtköy Ortalama Çekici Fiyat Tarifesi</h2>
      <div style="overflow-x:auto; margin:25px 0;">
        <table style="width:100%; border-collapse:collapse; background:#fff; border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; font-size:0.95rem;">
          <thead style="background:#0f172a; color:#fff;">
            <tr>
              <th style="padding:14px; text-align:left;">Güzergah / İstikamet</th>
              <th style="padding:14px; text-align:left;">Mesafe (Ortalama)</th>
              <th style="padding:14px; text-align:left;">Tahmini Fiyat Bandı</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #f1f5f9;">
              <td style="padding:12px 14px; font-weight:700;">Kurtköy Viaport → Pendik Sanayi</td>
              <td style="padding:12px 14px;">8 - 10 km</td>
              <td style="padding:12px 14px; color:#ea580c; font-weight:800;">600 - 850 TL</td>
            </tr>
            <tr style="border-bottom:1px solid #f1f5f9; background:#f8fafc;">
              <td style="padding:12px 14px; font-weight:700;">KMO Gişeler → Tuzla Deri OSB</td>
              <td style="padding:12px 14px;">14 - 16 km</td>
              <td style="padding:12px 14px; color:#ea580c; font-weight:800;">800 - 1100 TL</td>
            </tr>
            <tr style="border-bottom:1px solid #f1f5f9;">
              <td style="padding:12px 14px; font-weight:700;">TEM Şekerpınar → Gebze Küçük Sanayi</td>
              <td style="padding:12px 14px;">10 - 12 km</td>
              <td style="padding:12px 14px; color:#ea580c; font-weight:800;">700 - 950 TL</td>
            </tr>
            <tr style="border-bottom:1px solid #f1f5f9; background:#f8fafc;">
              <td style="padding:12px 14px; font-weight:700;">Sabiha Gökçen → Kartal Yetkili Servis</td>
              <td style="padding:12px 14px;">18 - 20 km</td>
              <td style="padding:12px 14px; color:#ea580c; font-weight:800;">1000 - 1400 TL</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kuzey Marmara Çekici Sabit Fiyat Garantisi</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        <strong>0533 265 70 89</strong> numaramızı aradığınızda, çağrı merkezi yetkilimiz nereden nereye taşınacağını öğrenir ve size <strong>tek ve kesin bir fiyat</strong> söyler. İşlem bittiğinde bu fiyatın tek kuruş üzerine çıkılmaz. Kredi kartı ile mobil POS üzerinden tek çekim ya da taksitli ödeme yapabilir, anında resmi kurumsal e-arşiv faturanızı alabilirsiniz.
      </p>
    `,
    faqs: [
      { q: 'Telefonda verilen çekici fiyatı sonradan değişir mi?', a: 'Kesinlikle hayır. Belirttiğiniz güzergah için telefonda onaylanan sabit fiyat geçerlidir.' },
      { q: 'Kredi kartı veya taksitle ödeme yapılabilir mi?', a: 'Evet, tüm kurtarıcılarımızda mobil POS cihazı bulunmakta olup kredi kartı geçerlidir.' },
      { q: 'Kaskodan çekici ücretini geri alabilir miyim?', a: 'Evet, kasko poliçenize sunmanız için resmi e-fatura ve sevk irsaliyesi düzenlenmektedir.' }
    ]
  },
  {
    slug: 'otomatik-vitesli-ve-elektrikli-araclar-nasil-cekilir',
    title: 'Otomatik Vitesli ve Elektrikli Araçlar Nasıl Çekilir? | Şanzıman & Batarya Güvenliği',
    metaDesc: 'Otomatik şanzımanlı (DSG, ZF, EDC) ve elektrikli (Tesla, Togg) araçlar çekilirken yapılan ölümcül hatalar. Çekici modu, sıfır dereceli rampa ve tekerlek dolly sistemi.',
    keywords: 'otomatik vitesli araç çekme, elektrikli araba nasıl çekilir, tesla çekici modu, dsg şanzıman çekici, tekerlek kilidi çekici, basık spor araç rampa',
    image: 'luks-arac-cekici.webp',
    date: '2026-10-19',
    readTime: '7 Dakika Okuma',
    headline: 'Otomatik Vitesli ve Elektrikli Araçlar Otoyolda Nasıl Çekilir? Mekanik Hasarı Önleme Rehberi',
    lead: 'Modern otomatik vitesli ve elektrikli otomobilleri geleneksel yöntemlerle veya halatla çekmek, on binlerce liralık şanzıman ve batarya hasarına yol açabilir. İşte bilmeniz gereken kritik protokoller.',
    content: `
      <p style="font-size:1.05rem; line-height:1.85; color:#334155; margin-bottom:20px;">
        Eski model düz vitesli (manuel) araçlarda vitesi boşa alıp başka bir aracın arkasına halatla bağlayarak çekmek yaygın bir yöntemdi. Ancak günümüzün modern çift kavramalı otomatik şanzımanları (DSG, ZF, EDC, S-Tronic) ve elektrikli araçları (Tesla, Togg, Porsche Taycan, Mercedes EQ) için bu yöntem tam anlamıyla bir mekanik felakettir.
      </p>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">1. Otomatik Vitesli Araçlar Neden Halatla Çekilmez?</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Otomatik şanzımanlarda yağlama yapan hidrolik pompa, doğrudan motorun çalışmasına bağlıdır. Motor kapalıyken araç tekerlekleri döndürüldüğünde şanzıman içindeki dişliler ve kavramalar yağsız şekilde döner. Sadece 1-2 kilometre bile halatla çekilse aşırı sürtünmeden dolayı dişliler kaynar ve 150.000 TL'yi aşan şanzıman revizyon masrafı çıkar.
      </p>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Bu nedenle otomatik vitesli araçlar <strong>mutlaka 4 tekerleği de yerle teması kesilerek</strong> hidrolik kayar kasa çekici üzerinde taşınmalıdır.
      </p>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">2. Elektrikli Araçlarda "Çekici Modu" (Transport Mode)</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Elektrikli araçlarda tahrik aksı doğrudan elektrik motoruna bağlıdır. Tekerlek döndüğü anda elektrik motoru jeneratör gibi çalışarak yüksek voltaj üretir. Eğer araç ekrandan "Çekici Modu"na (Transport Mode / Serbest Dönüş) alınmazsa, üretilen aşırı voltaj batarya koruma sigortalarını patlatır veya invertör ünitesini yakar.
      </p>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">3. Tekerlekleri Kilitli Araçlar İçin "Dolly Arabacığı"</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Elektrikli park freni takılı kalan veya şanzımanı P modundan çıkmayan araçları vinçle asılarak çekmek lastikleri ve aksları parçalar. Kuzey Marmara Çekici filomuzda bu durumlar için özel tekerlek arabacıkları (dolly) kullanılır. Kilitli tekerleklerin altına yerleştirilen rulmanlı arabacıklar sayesinde araç sıfır sürtünmeyle platforma alınır.
      </p>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">4. Sıfır Açılı Rampa ile Tampon Hasarını Önleme</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Alçak karlık tampona sahip lüks ve spor otomobiller dik açılı rampalara çıkarken ön tampon ve alt marşpiyeller sürtünerek kırılır. Filomuzdaki basık araç platformları sıfır dereceye yakın bir eğimle yere iner ve tampona tek bir milimetre bile temas etmeden yükleme tamamlanır.
      </p>
    `,
    faqs: [
      { q: 'Otomatik vitesli araba N modunda çekilebilir mi?', a: 'Platforma yükleme amaçlı birkaç metrelik çekim haricinde otoyolda halatla çekilmesi şanzımanı yakar.' },
      { q: 'Elektrikli araç çekilirken akü biterse ne yapılır?', a: '12V aküye takviye verilerek ekran açılır ve çekici modu devreye alınarak kayar kasaya yüklenir.' },
      { q: 'Taşıma sırasında aracın kaskosu var mı?', a: 'Evet, Kuzey Marmara Çekici ile taşınan her araç %100 nakliyat emtia kaskosu altındadır.' }
    ]
  },
  {
    slug: 'aku-neden-aniden-biter-takviye-nasil-yapilir',
    title: 'Akü Neden Aniden Biter? | Otoyolda Yerinde Akü Takviye & Yol Yardım Rehberi',
    metaDesc: 'Araç aküsü neden aniden biter? Start-Stop ve AGM akü arızaları, yanlış takviyenin araç beynini (ECU) yakma tehlikesi ve 12V/24V dijital booster ile yerinde çözüm.',
    keywords: 'akü neden biter, otoyolda akü bitti, yerinde akü takviye kurtköy, dijital booster akü, start stop akü takviye, beyin korumalı akü takviyesi, akü yol yardım',
    image: 'aku-takviye.webp',
    date: '2026-10-17',
    readTime: '6 Dakika Okuma',
    headline: 'Akü Neden Aniden Biter? Otoyolda ve Şehirde Güvenli Akü Takviyesi Nasıl Yapılır?',
    lead: 'Marşa bastığınızda tık sesi gelip göstergeler sönüyorsa akünüz bitmiştir. Ancak rastgele kablolarla yapılan bilinçsiz takviye binlerce liralık beyin hasarına yol açabilir!',
    content: `
      <p style="font-size:1.05rem; line-height:1.85; color:#334155; margin-bottom:20px;">
        Otomobil aküleri genellikle hiçbir belirti vermeden aniden biter. Özellikle kış aylarında soğuk hava kimyasal reaksiyonu yavaşlatırken, yaz aylarında aşırı sıcaklar akü içerisindeki sıvının buharlaşmasına ve kurşun plakaların kısa devre yapmasına neden olur.
      </p>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Akünün Aniden Bitmesinin 5 Yaygın Nedeni</h2>
      <ul style="color:#334155; line-height:2.1; font-size:1rem; padding-left:22px; margin-bottom:25px;">
        <li><strong>1. Akü Ömrünün Dolması:</strong> Standart sulu akülerin ömrü 3-4 yıl, EFB/AGM start-stop akülerin ömrü ise 4-5 yıldır. Bu süreyi dolduran akü aniden marş basamaz hale gelir.</li>
        <li><strong>2. Kaçak Akım (Parazit Çekim):</strong> Sonradan takılan alarm, ses sistemi veya araç içi kameraların kontak kapalıyken aküyü emmesi.</li>
        <li><strong>3. Şarj Dinamosu (Alternatör) Arızası:</strong> Dinamo yeterli voltaj üretemediğinde araç elektrik ihtiyacını aküden çeker ve sürüş esnasında akü tamamen boşalır.</li>
        <li><strong>4. Kısa Mesafeli Şehir İçi Kullanım:</strong> Marş basarken harcanan yüksek enerjiyi alternatörün geri şarj edebilmesi için en az 20-30 dakika kesintisiz sürüş gerekir.</li>
        <li><strong>5. Aşırı Sıcak ve Soğuk Hava Şoku:</strong> Sıfırın altındaki derecelerde akü marş gücünün %40'ını kaybeder.</li>
      </ul>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Yanlış Takviye Neden Araç Beynini (ECU) Yakar?</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Geleneksel olarak başka bir araçtan takviye kablosuyla marş basılırken ani voltaj sıçramaları (peak) meydana gelir. Yeni nesil araçlarda düzinelerce mikroişlemci, ABS beyni, gösterge paneli ve motor kontrol ünitesi (ECU) bulunur. Ters kutup bağlamak veya voltaj şoku vermek bu beyinlerin anında yanmasına ve on binlerce liralık zarara neden olur.
      </p>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Profesyonel Dijital Booster ile Yerinde Çözüm</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Kuzey Marmara Çekici yol yardım araçlarımızda akım korumalı, ters kutup emniyetli endüstriyel 12V/24V dijital booster cihazları bulunmaktadır. Kurtköy, KMO gişeleri, TEM ve Pendik çevresinde aracınız çalışmadığında çekici masrafına gerek kalmadan 10-15 dakikada yerinde güvenli akü takviyesi ve şarj dinamosu testi yapıyoruz.
      </p>
    `,
    faqs: [
      { q: 'Akü takviyesi araç beynine zarar verir mi?', a: 'Korumasız rastgele kablolar zarar verebilir; profesyonel dijital booster ile sıfır riskle yapılır.' },
      { q: 'Akü takviyesi ne kadar sürede adrese gelir?', a: 'Kurtköy, KMO, TEM ve Gebze nöbet noktalarımızdan 10-15 dakika içinde ulaşım sağlanır.' },
      { q: 'Araç takviyeden sonra da çalışmazsa ne olur?', a: 'Marş motoru veya yakıt pompası arızası söz konusuysa kayar kasa çekicimiz hemen devreye girer.' }
    ]
  },
  {
    slug: 'kurtkoy-ve-gebze-en-yakin-oto-cekici-rehberi',
    title: 'Kurtköy ve Gebze Çevresinde En Yakın Oto Çekici Seçim Rehberi | 2026',
    metaDesc: 'Kurtköy, Gebze OSB, Pendik ve TEM hattında korsan çekicilere yakalanmadan kurumsal, kaskolu ve sabit fiyatlı çekici seçme rehberi: 0533 265 70 89.',
    keywords: 'kurtköy çekici, gebze en yakın çekici, pendik oto kurtarma, kurumsal çekici nasıl seçilir, kaskolu oto çekici, sabit fiyatlı çekici kurtköy',
    image: 'kazali-arac-cekici.webp',
    date: '2026-10-20',
    readTime: '6 Dakika Okuma',
    headline: 'Kurtköy ve Gebze Çevresinde En Yakın Oto Çekici Çağırırken Nelere Dikkat Edilmeli?',
    lead: 'İstanbul ve Kocaeli sınırındaki en yoğun transit ve sanayi arterlerinde yolda kaldığınızda doğru kurtarıcıyı seçmek hem bütçenizi hem de aracınızı korur.',
    content: `
      <p style="font-size:1.05rem; line-height:1.85; color:#334155; margin-bottom:20px;">
        Kurtköy, Sabiha Gökçen Havalimanı, Viaport AVM ve devasa Gebze Organize Sanayi Bölgeleri (GOSB); her gün yüz binlerce aracın aktığı, hem TEM hem de Kuzey Marmara Otoyolu'nun kesiştiği devasa bir kavşak noktasıdır. Bu hatta yolda kalan sürücüler telaşla internetten ilk buldukları numarayı arayarak korsan veya yetersiz donanımlı çekicilere denk gelebilmektedir.
      </p>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Güvenilir Bir Oto Çekicide Bulunması Gereken 4 Şart</h2>
      
      <h3 style="color:#0f172a; font-size:1.2rem; font-weight:800; margin:20px 0 10px;">1. Telefonda Sabit ve Net Fiyat Teyidi</h3>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:16px;">
        "Oraya bir varalım, hallederiz" diyen çekicilerden uzak durun. Kurumsal bir firma aracınızın markasını, arıza durumunu ve gidilecek servisi sorarak telefonda <strong>net bir fiyat</strong> verir ve teslimatta asla bu rakamın üzerine çıkmaz.
      </p>

      <h3 style="color:#0f172a; font-size:1.2rem; font-weight:800; margin:20px 0 10px;">2. %100 Emtia Taşıma Sigortası (Taşıyıcı Kaskosu)</h3>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:16px;">
        Aracınız çekiciye yüklendiği andan servise inene kadar yolda oluşabilecek herhangi bir kaza, devrilme veya taş sekmesine karşı firmanın emtia taşıma sigortası kapsamı altında olmalıdır.
      </p>

      <h3 style="color:#0f172a; font-size:1.2rem; font-weight:800; margin:20px 0 10px;">3. Resmi Kurumsal Kimlik &amp; Fatura</h3>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:16px;">
        Kasko firmanızdan çekici masrafını geri alabilmeniz için veya şirket araçlarında gider gösterebilmeniz için resmi e-arşiv fatura ve mobil POS ile ödeme belgesi düzenlenebilmelidir.
      </p>

      <h3 style="color:#0f172a; font-size:1.2rem; font-weight:800; margin:20px 0 10px;">4. Bölgede Gerçek Nöbetçi Filo</h3>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:16px;">
        İstanbul'un diğer ucundan geleceğini söyleyip sizi 1.5 saat soğukta veya tehlikeli otoyol emniyet şeridinde bekleten aracılar yerine; Kurtköy, KMO ve Gebze gişelerinde hazır bekleyen yerel filoları tercih edin.
      </p>

      <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kuzey Marmara Çekici ile 10-15 Dakikada Çözüm</h2>
      <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
        Kuzey Marmara Çekici olarak Kurtköy Viaport, KMO gişeleri, Sabiha Gökçen bağlantısı ve Gebze OSB'de 7/24 kesintisiz hazır nöbetçi araçlarımızla çağrınızdan sonra ortalama 10-15 dakika içinde yanınızdayız. Tek dokunuşla <strong>0533 265 70 89</strong> numaramızdan bizi arayabilir veya WhatsApp üzerinden konumunuzu gönderebilirsiniz.
      </p>
    `,
    faqs: [
      { q: 'Kurtköy ve Gebze\'de çekici ücreti ne kadardır?', a: 'Mesafe, aracın sınıfı ve teslim noktasına göre ortalama 600 - 950 TL bandında sabit fiyat geçerlidir.' },
      { q: 'Aracım taşınırken kaskolu mudur?', a: 'Evet, Kuzey Marmara Çekici ile yapılan her operasyon %100 nakliyat emtia sigortalıdır.' },
      { q: 'Fatura alabilir miyim?', a: 'Evet, kaskodan geri ödeme alabilmeniz için resmi kurumsal e-arşiv fatura düzenlenir.' }
    ]
  }
];

function generateArticleHtml(blog) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": blog.headline,
    "description": blog.metaDesc,
    "image": `${DOMAIN}/images/${blog.image}`,
    "datePublished": `${blog.date}T09:00:00+03:00`,
    "dateModified": "2026-10-21T18:00:00+03:00",
    "author": {
      "@type": "Organization",
      "name": "Marmara Çekici",
      "url": DOMAIN
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marmara Çekici",
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
  <meta name="robots" content="index, follow">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="format-detection" content="telephone=no">
  <meta property="og:type" content="website">
  <link rel="canonical" href="${DOMAIN}/blog/${blog.slug}.html">
  <link rel="alternate" type="text/plain" href="${DOMAIN}/llms.txt" title="LLM Knowledge Base">
  <link rel="preload" as="image" href="/images/${blog.image}" fetchpriority="high">
  <link rel="icon" type="image/svg+xml" href="../images/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="/css/style.css?v=3.2">

  <script type="application/ld+json">
  ${JSON.stringify(articleSchema, null, 2)}
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
        <a href="/" class="brand-logo">
          <img src="/images/logo.svg" alt="Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Anadolu Yakası, Kocaeli &amp; Otoyol</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="/" class="nav-link">Ana Sayfa</a></li>
            <li><a href="/hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="/bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="/galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="index.html" class="nav-link active">Blog</a></li>
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
  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 45px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="/" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <a href="index.html" style="color: #cbd5e1; text-decoration: none;">Blog</a> /
        <span style="color: #ea580c; font-weight: 600;">Rehber</span>
      </nav>
      <h1 style="font-size: clamp(1.85rem, 3.5vw, 2.6rem); font-weight: 900; line-height: 1.3; margin-bottom: 15px;">
        ${blog.headline}
      </h1>
      <div style="display: flex; flex-wrap: wrap; gap: 15px; color: #cbd5e1; font-size: 0.9rem;">
        <span>📅 ${blog.date}</span>
        <span>⏱️ ${blog.readTime}</span>
        <span>✍️ Marmara Çekici Saha Ekibi</span>
      </div>
    </div>
  </section>

  <!-- Makale Gövdesi -->
  <main class="section" style="padding: 50px 0 70px; background: #f8fafc;">
    <div class="container" style="max-width: 880px;">
      
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 35px 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
        
        <div style="border-radius: 14px; overflow: hidden; margin-bottom: 30px;">
          <img src="/images/${blog.image}" alt="${blog.headline}" width="800" height="450" style="width: 100%; height: auto; display: block;" fetchpriority="high">
        </div>

        <p style="font-size: 1.15rem; line-height: 1.85; color: #0f172a; font-weight: 600; margin-bottom: 25px; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px;">
          ${blog.lead}
        </p>

        <div class="blog-rich-content">
          ${blog.content}
        </div>

        <!-- SSS Akordiyonu -->
        <div style="margin-top: 45px; border-top: 2px solid #f1f5f9; padding-top: 30px;">
          <h3 style="font-size: 1.35rem; font-weight: 900; color: #0f172a; margin-bottom: 20px;">
            Konu Hakkında Sıkça Sorulan Sorular
          </h3>
          <div class="faq-accordion-list">
            ${blog.faqs.map((f, i) => `
              <details class="faq-accordion-item" ${i === 0 ? 'open' : ''}>
                <summary class="faq-summary">
                  <div class="faq-summary-left">
                    <span class="faq-num">0${i + 1}</span>
                    <span class="faq-q-text">${f.q}</span>
                  </div>
                  <span class="faq-chevron">▾</span>
                </summary>
                <div class="faq-content">
                  <p style="margin: 0; line-height: 1.75;">${f.a}</p>
                </div>
              </details>
            `).join('')}
          </div>
        </div>

        <!-- Makale İçi Acil Çekici Çağrı Kutusu -->
        <div style="background: #090d16; color: #fff; padding: 35px 30px; border-radius: 16px; text-align: center; margin-top: 40px;">
          <h3 style="font-size: 1.35rem; font-weight: 900; margin-bottom: 10px;">Otoyolda veya Şehir İçinde Acil Çekiciye mi İhtiyacınız Var?</h3>
          <p style="color: #cbd5e1; font-size: 0.95rem; margin-bottom: 22px; line-height: 1.6;">Kurtköy, KMO, TEM, Pendik ve Gebze nöbetçi araçlarımız ortalama 10-15 dakikada yanınızda.</p>
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px;">
            <a href="tel:${PHONE_RAW}" class="btn btn-call btn-lg">📞 Hemen Ara: ${PHONE}</a>
            <button type="button" class="btn btn-whatsapp btn-lg btn-send-location">📍 WhatsApp Canlı Konum At</button>
          </div>
        </div>

      </div>
    </div>
  </main>

  ${richFooterHtml}

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

function generateBlogIndexHtml(blogsList) {
  const cardsHtml = blogsList.map(b => `
    <div class="service-card" style="background:#fff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
      <div class="service-card-img-wrap" style="height: 220px; overflow: hidden;">
        <img src="/images/${b.image}" alt="${b.headline}" width="600" height="350" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="service-card-body" style="padding: 22px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
          <span style="color:#ea580c; font-size:0.82rem; font-weight:800;">📅 ${b.date}</span>
          <span style="background: rgba(15, 23, 42, 0.06); color: #475569; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">⏱️ ${b.readTime}</span>
        </div>
        <h3 class="service-title" style="margin: 8px 0 10px; font-size: 1.15rem; font-weight: 800; line-height: 1.4;">
          <a href="/blog/${b.slug}.html" style="color: #0f172a; text-decoration: none;">${b.headline}</a>
        </h3>
        <p class="service-text" style="color: #64748b; font-size: 0.9rem; line-height: 1.6; margin-bottom: 18px;">${b.lead}</p>
        <a href="/blog/${b.slug}.html" class="service-btn" style="text-decoration: none; font-weight: 700; color: #ea580c;">Yazıyı Oku →</a>
      </div>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sürücü Rehberi &amp; Otoyol ve Şehir İçi Güvenlik Blogu | Marmara Çekici - 0533 265 70 89</title>
  <meta name="description" content="Anadolu Yakası, Gebze, Pendik, KMO ve TEM güzergahında araç arızaları, otoyol güvenlik kuralları, çekici fiyatları ve kasko anlaşmalı kurtarma rehberleri.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${DOMAIN}/blog/index.html">
  <link rel="alternate" type="text/plain" href="${DOMAIN}/llms.txt" title="LLM Knowledge Base">
  <link rel="icon" type="image/svg+xml" href="../images/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"></noscript>
  <link rel="stylesheet" href="/css/style.css?v=3.2">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Marmara Çekici Sürücü Rehberi",
    "description": "Anadolu Yakası, Gebze, KMO ve TEM güzergahında otoyol güvenliği, çekici rehberleri ve teknik makaleler.",
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

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="/" class="brand-logo">
          <img src="/images/logo.svg" alt="Marmara Çekici Logo" width="46" height="46">
          <div class="brand-text">
            <span class="brand-name">MARMARA <span>ÇEKİCİ</span></span>
            <span class="brand-tagline">7/24 Anadolu Yakası, Kocaeli &amp; Otoyol</span>
          </div>
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="/" class="nav-link">Ana Sayfa</a></li>
            <li><a href="/hizmetler/index.html" class="nav-link">Hizmetlerimiz</a></li>
            <li><a href="/bolgeler/index.html" class="nav-link">Bölgelerimiz</a></li>
            <li><a href="/galeri.html" class="nav-link">Galeri</a></li>
            <li><a href="index.html" class="nav-link active">Blog</a></li>
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
  <section class="subpage-hero" style="background: linear-gradient(135deg, #070b14 0%, #0f172a 60%, #162032 100%); color: #fff; padding: 50px 0;">
    <div class="container">
      <nav class="breadcrumb-nav" style="font-size: 0.875rem; margin-bottom: 15px; color: #94a3b8;">
        <a href="/" style="color: #cbd5e1; text-decoration: none;">Ana Sayfa</a> /
        <span style="color: #ea580c; font-weight: 600;">Blog</span>
      </nav>
      <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 900; margin-bottom: 15px;">
        Sürücü Rehberi &amp; <span style="color: #ea580c;">Otoyol Güvenliği</span>
      </h1>
      <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 800px; line-height: 1.6;">
        Kuzey Marmara Otoyolu ve TEM güzergahında araç kullanan tüm sürücüler için hayat kurtaran teknik ipuçları, otoyol güvenlik kuralları ve çekici seçim rehberleri.
      </p>
    </div>
  </section>

  <!-- Blog Listesi -->
  <main class="section" style="padding: 60px 0 80px; background: #f8fafc;">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px;">
        ${cardsHtml}
      </div>
    </div>
  </main>

  ${richFooterHtml}

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
const outDir = path.join(__dirname, '..', 'blog');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const allBlogs = [...blogs, ...ADDITIONAL_BLOGS];

console.log('🚀 Marmara Çekici Blog Makaleleri Üretiliyor...');

allBlogs.forEach(b => {
  const filePath = path.join(outDir, `${b.slug}.html`);
  fs.writeFileSync(filePath, generateArticleHtml(b), 'utf8');
  console.log(`✓ Üretildi: blog/${b.slug}.html`);
});

fs.writeFileSync(path.join(outDir, 'index.html'), generateBlogIndexHtml(allBlogs), 'utf8');
console.log('✓ Üretildi: blog/index.html (Dizin)');

console.log('🎉 Toplam ' + (allBlogs.length + 1) + ' blog sayfası başarıyla tamamlandı!');
