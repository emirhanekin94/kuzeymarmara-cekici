const fs = require('fs');
const path = require('path');
const { BLOG_ENRICHMENTS } = require('../data/blog_rich_content.js');

const EXTRA_SECTIONS = {
  'otoyolda-arac-arizalandiginda-yapilmasi-gerekenler': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Otoyol Gişe Çıkışlarında ve Kavşak Kollarında Acil Güvenlik Stratejisi</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kuzey Marmara Otoyolu ve TEM bağlantılarında gişe yaklaşım şeritleri ve yonca yaprağı kavşak kolları, araçların hız düşürdüğü ancak şerit değiştirme hareketlerinin en çok karmaşa yarattığı bölgelerdir. Bu kavşak kollarında arıza yaşandığında aracınızı virajın kör noktasına bırakmamak hayati önem taşır. Mümkünse kavşağın genişleyen emniyet cebine kadar aracın ivmesiyle ilerleyiniz.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Otoyol işletme kameraları gişe ve kavşak kollarını saniye saniye izlemektedir. Arıza durumunda dörtlülerinizi yakıp araçtan indikten sonra otoyol devriye ekibimizin tepe flaşörleri eşliğinde gelmesini bekleyiniz. Profesyonel kurtarıcımız kavşak girişine koniler dizerek yaklaşan araçları güvenle diğer şeride yönlendirir.
    </p>
  `,

  'kuzey-marmara-otoyolu-cekici-fiyatlari-nasil-hesaplanir': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Çekici Fiyatında Şeffaf Kilometre Cetveli ve Yakıt Amortismanı</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kurumsal oto kurtarıcı araçlarının yakıt tüketimi standart binek araçların yaklaşık üç katıdır. Ağır hidrolik sistemler, çelik vinç tamburları ve platform donanımları kurtarıcının boş ağırlığını yedi ila on tona kadar çıkarır. Dolayısıyla hesaplanan kilometre ücreti yalnızca yakıtı değil, bu devasa makinelerin düzenli hidrolik bakımlarını, ağır ticari lastik aşınma paylarını ve operatör uzmanlığını da kapsar.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Marmara Çekici olarak geliştirdiğimiz şeffaf fiyatlandırma politikası sayesinde müşterilerimize hangi hizmet için ne kadar ödediklerini kalem kalem izah ediyoruz. Taban kalkış ücreti, gidilecek net kilometre ve varsa gişe masrafları toplamından oluşan nihai fiyat teklifi telefon görüşmesinde onayınıza sunulur. Onayladığınız rakam iş bitiminde faturanıza aynen yansıtılır ve tek bir kuruş ek ücret talep edilmez.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Sigortacılık Tahkim Komisyonu ve Çekici Faturası İnceleme Kriterleri</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kaskodan çekici bedelini geri alırken sigorta şirketlerinin inceleme birimleri faturanın piyasa rayiç bedellerine uygun olup olmadığını kontrol eder. Fahiş fiyat yazan korsan çekici makbuzları eksperler tarafından doğrudan iptal edilir ve sürücüye geri ödeme yapılmaz. Firmamızın uyguladığı tarife Sigortacılık Tahkim Komisyonu ve Türkiye Sigortalar Birliği (TSB) rayiç standartlarına tam uyumludur. Bu nedenle kestiğimiz tüm kurumsal e-Arşiv faturalar sigorta şirketlerince hiçbir kesintiye uğramadan onaylanarak müşterimizin banka hesabına ödenir.
    </p>
  `,

  'otomatik-vitesli-ve-elektrikli-araclar-nasil-cekilir': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Hibrit ve Plug-in Hibrit (PHEV) Araçlarda Yüksek Voltaj Güvenliği</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Hem içten yanmalı motoru hem de elektrik bataryasını bir arada barındıran hibrit otomobillerde (Toyota Hybrid, Honda e:HEV, Hyundai Ioniq Hybrid vb.) yüksek voltaj turuncu kablolarla şasi altında dağıtılır. Çekici operatörünün çekme halatı kancasını yanlışlıkla bu turuncu yüksek voltaj kablolarının geçtiği şasi boşluklarına takması ölümcül elektrik çarpması ve yangın riski doğurur.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Operatörlerimiz hibrit ve elektrikli araç şasi anatomisi konusunda özel eğitimlidir. Çeki demiri montaj noktaları aracın orijinal şasi kovanına vidalanır ve yüksek voltaj izolatör eldivenleri eşliğinde bağlantı sağlanır. Aracınız hidrolik platforma alınırken batarya muhafaza sacına en ufak bir baskı uygulanmaz.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Elektronik Süspansiyon (Airmatic / DDC) İndiğinde Sıfır Eğimli Rampa Çözümü</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Mercedes Airmatic, BMW Adaptive M veya Range Rover havalı süspansiyon sistemleri arıza yaptığında veya hava körükleri patladığında araç tamamen yere yapışır. Yerden yüksekliği iki üç santimetreye kadar düşen bu lüks otomobilleri standart çekicilere yüklemeye çalışmak tamponların, egzoz borularının ve karter muhafazasının parçalanmasıyla sonuçlanır.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Marmara Çekici filomuzdaki basık araç kurtarıcıları zemine sıfır derece paralel açıyla inebilen özel teleskobik kızak sistemine sahiptir. Körükleri inmiş en alçak araç dahi özel kauçuk rampa uzatmalarıyla milimetrik hassasiyetle tablaya alınır ve süspansiyon geometrisi korunarak yetkili servise sevk edilir.
    </p>
  `,

  'aku-neden-aniden-biter-takviye-nasil-yapilir': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">OBD-II Bellek Koruyucu ile Araç Hafızasını Silmeden Akü Değişimi</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Yeni nesil otomobillerde akü kutup başı söküldüğü anda aracın radyo güvenlik kodu, direksiyon açı sensörü kalibrasyonu, elektrikli cam sıkışma hafızası, boğaz kelebeği adaptasyonu ve otomatik şanzıman sürüş haritaları sıfırlanabilir. Hatta bazı lüks modellerde araç hırsızlık moduna geçerek motoru tamamen kilitleyebilir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Yerinde akü değişim ekiplerimiz akü kutup başlarını sökmeden önce aracın OBD-II teşhis soketine harici bir bellek koruma güç kaynağı bağlar. Böylece araç elektrik şebekesi kesintiye uğramaz, tüm elektronik hafıza ve radyo ayarları eksiksiz korunur. Yeni akü takıldıktan sonra akü yönetim sistemine (BMS) yeni akünün amperajı ve seri numarası kodlanarak fabrika standartlarında teslimat yapılır.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kış Mevsiminde Donmuş Elektrolit Tehlikesi ve Güvenlik Uyarıları</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Tam şarjlı bir akünün içindeki asitli su çözeltisi eksi yetmiş dereceye kadar donmazken, tamamen boşalmış bir aküdeki sıvı neredeyse saf suya dönüştüğü için sıfır derecede dahi donabilir. Donmuş bir akünün dış plastik gövdesinde şişme veya çatlak gözlenir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      İçinde buz kütlesi bulunan donmuş bir aküye harici takviye kablosuyla elektrik vermek içerideki hidrojen gazını patlatabilir ve asidin çevreye fışkırmasına yol açabilir. Ekiplerimiz takviye öncesinde akü gövdesini fiziksel olarak muayene eder; şişmiş ve donmuş aküler kesinlikle takviye edilmez, güvenli biçimde sökülerek yenisiyle değiştirilir.
    </p>
  `,

  'kurtkoy-ve-gebze-en-yakin-oto-cekici-rehberi': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kurtköy Çamlık, Yenişehir ve Harmandere Mahallelerinde Acil Müdahale</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kurtköy'ün modern konut projelerine ev sahipliği yapan Yenişehir, Çamlık ve Harmandere bölgelerinde geniş site yerleşkeleri ve yer altı otoparkları bulunur. Sabah işe gitmek üzere sitenin garajına inen bir araç sahibinin akü bitmesi veya elektronik el freni takılmasıyla karşılaşması güne büyük bir stresle başlamasına neden olur.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kurtköy merkezdeki devriye kurtarıcımız bu mahallelere yedi ila dokuz dakika gibi çok kısa bir sürede ulaşır. Gerek otopark içinden araç tahliyesi gerekse yerinde akü takviyesiyle sorunu dakikalar içinde çözerek günlük programınızın aksamasını önleriz.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Gebze Arapçeşme, Gaziler ve Kirazpınar Lojistik Hatlarında Kurtarma</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Gebze'nin yoğun yerleşim mahalleleri olan Arapçeşme, Gaziler ve Kirazpınar, sanayi tesislerine giden ağır vasıtaların da sıkça kullandığı dik cadde ve sokaklara sahiptir. Yağışlı havalarda zemin kayganlaşır ve fren arızaları, aks kırılmaları meydana gelebilir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Bölgedeki yol yapısını avucunun içi gibi bilen tecrübeli şoförlerimiz, dik sokaklarda aracınızı çelik takozlarla emniyete alarak hidrolik kayar kasaya çeker. Güvenilir ve garantili oto kurtarma anlayışımızla Doğu Marmara sürücülerinin her zaman yanındayız.
    </p>
  `,

  'sehir-ici-ve-otoyol-cekici-farklari-fiyat-ve-guvenlik': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Şehir İçi Kurtarma Operasyonlarında Park Eden Komşu Araçların Güvenliği</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Şehir içinde mahalle aralarında çekici operasyonu yürütürken karşılaşılan en hassas konulardan biri, arızalı aracın sağında ve solunda park etmiş komşu otomobillerin bulunmasıdır. Acemi çekici operatörleri vincin halat açısını doğru ayarlayamadığında çekilen araç yana doğru savrulup park halindeki sıfır araçların kapılarını veya çamurluklarını ezebilir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Marmara Çekici şoförlerimiz dar sokaklarda lazer hizalama ve tekerlek kılavuz makaraları kullanır. Halat doğrudan aracın çekme doğrultusuna hizalanarak sıfır milim sapmayla araba platforma çekilir. Komşu araçlara hiçbir risk oluşturmadan, nezaket ve profesyonellik çerçevesinde operasyon neticelendirilir.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kentsel Dönüşüm Şantiyelerinde ve Dar Sokak Kısıtlamalarında Çekici Çözümleri</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Anadolu Yakası ilçelerinde süren yoğun kentsel dönüşüm faaliyetleri sokaklarda inşaat iskeleleri, moloz konteynerleri ve hafriyat kamyonları sebebiyle geçiş koridorlarını daraltmıştır. Bu gibi engebeli ve dar sokaklarda standart kurtarıcıların kasasını açması çevre binaların balkonlarına veya ağaç dallarına çarpma tehlikesi yaratır.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Şehir içi filomuzda yer alan düşük açılı alçak platformlu kurtarıcılar, tavan engeli olan sokaklarda bile kasasını minimum yükseklikle uzatarak aracınızı yükleyebilir. Zorlu şehir koşullarında dahi sorunsuz tahliye temin etmek firmamızın teknik gücünün kanıtıdır.
    </p>
  `,

  'pendik-kartal-maltepe-e5-yol-yardim-ve-cekici-rehberi': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kartal Soğanlık, Cevizli ve Atalar Mahallelerinde Sokak İçi Acil Çekici</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kartal ilçesinin sahil ve E-5 arasında kalan Cevizli, Atalar ve Soğanlık mahalleleri hem yoğun nüfus barındırır hem de oto sanayi sitesine komşu konumdadır. Bu mahallelerde sabah saatlerinde işe yetişmek isterken marş basmayan, lastiği inen veya fren hortumu patlayan sürücüler için nöbetçi kurtarıcılarımız hızır gibi yetişir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kartal Oto Sanayi Sitesi'ndeki tanıdık ustanıza ya da Cevizli üzerindeki yetkili bayilere aracınızı birkaç dakika içinde ulaştırıyoruz. Taşıma sırasında düzenlenen kurumsal evraklar sayesinde ustanız teslimat tutanağını imzalayarak aracınızı anında tamir sırasına alır.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Pendik Güzelyalı ve Tersane Kavşağı Ağır Sanayi Hattı</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Pendik Tersaneler bölgesi, Güzelyalı ve Esenyalı mevkileri ağır sanayi tırlarının, liman konteyner taşıyıcılarının ve işçi servislerinin aralıksız cirit attığı güzergahlardır. Bu hatta arızalanan binek veya hafif ticari araçların yol ortasında kalması büyük tonajlı tırlar karşısında ölümcül tehlike oluşturur.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Güzelyalı köprülü kavşağında devriye gezen çekicimiz çağrınızı aldığı anda tersaneler bölgesine hızla intikal eder. Yüksek güçlü vinç donanımımız ve tepe aydınlatma kulemizle tehlikeli kavşakta güvenliği tesis ederek aracınızı Pendik sanayisine güvenle tahliye ederiz.
    </p>
  `,

  'cayirova-gebze-sanayi-bolgesi-arac-kurtarma-ve-cekici': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Gebze Plastikçiler OSB (GEPOSB) ve İMES Sanayi Sitelerinde Kurtarma</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      GEPOSB ve İMES sanayi siteleri enjeksiyon makineleri, hammadde siloları ve metal işleme fabrikalarıyla dolu ağır sanayi merkezleridir. Bu sitelerin fabrika sahalarında ve dar yükleme rampalarında arızalanan forkliftler, bobin taşıyıcı kamyonetler veya dağıtım araçları üretimin durmasına neden olabilir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Marmara Çekici olarak sanayi siteleri içine özel vinçli ve alçak rampalı kurtarıcılarımızla giriyoruz. Fabrika kapalı sahasından forklift çekimi veya rampa önünde kalan panelvanın kaskolu taşınması gibi endüstriyel operasyonları titizlikle gerçekleştiriyoruz.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Çayırova Fatih ve Özgürlük Mahallelerinde 7/24 Kesintisiz Hizmet</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Çayırova merkez mahalleleri olan Fatih, Özgürlük ve Yenimahalle lokasyonlarında ikamet eden vatandaşlarımız için de günün her saati hazır nöbetçi ekibimiz vardır. Gece vardiyasından dönen veya sabah erken saatte yola çıkacak olan araç sahipleri bir telefonla dakikalar içinde çekici ve yol yardım desteği alabilir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Çayırova'dan Gebze Fatih Devlet Hastanesi'ne, sanayi sitelerine veya Anadolu Yakası'ndaki tamirhanelere sabit fiyat sözüyle nakil sağlıyoruz. Güler yüzlü ve dürüst esnaf anlayışımızla bölge halkının ilk tercihiyiz.
    </p>
  `,

  'kaza-ve-ariza-aninda-kasko-anlasmali-cekici-sureci': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kaza Anında e-Devlet Mobil Kaza Tutanağı Kullanımı ve Çekici Entegrasyonu</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Teknolojinin gelişmesiyle birlikte artık kağıt tutanak doldurma zorunluluğu ortadan kalkmış, Sigorta Bilgi ve Gözetim Merkezi (SBM) tarafından geliştirilen e-Devlet Mobil Kaza Tutanağı uygulaması yaygınlaşmıştır. Kaza yerinde akıllı telefon üzerinden tarafların kimlik ve plaka bilgileri girilerek fotoğraflar sisteme yüklenir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      SBM sisteminde oluşan barkod numarası doğrudan kasko hasar dosyanıza işlenir. Marmara Çekici olarak kestiğimiz e-Arşiv faturaya bu SBM kaza dosya numarasını ekliyoruz. Böylece sigorta şirketi eksper atamasını beklemeden çekici faturasını doğrudan kaza dosyasıyla eşleştirir ve geri ödeme onayını en hızlı şekilde verir.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Yetkili Servis ile Özel Sanayi Servisleri Arasında Çekici Tercihi</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kasko poliçelerinde genellikle sigortalının aracı dilediği anlaşmalı servise çektirme hakkı saklıdır. Ancak bazı kasko türlerinde (dar kasko veya anlaşmalı özel servis kaskosu) yetkili servise çekildiğinde muafiyet uygulanabilir. Operatörlerimiz poliçenizin şartlarını öğrenerek sizi doğru servise yönlendirir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Doğuş Oto Kartal, Kosifler Oto Bostancı, Arkas Otomotiv veya Gebze Küçük Sanayi Sitesi gibi noktaların hangisi poliçeniz açısından daha avantajlıysa aracınız o noktaya taşınır. Doğru bilgilendirme ile gereksiz muafiyet masrafları ödemenizi engelliyoruz.
    </p>
  `,

  'gece-nobetci-oto-cekici-cagirirken-bilinmesi-gerekenler': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Gece Çekici Beklerken Şüpheli Kişilere Karşı Asayiş Tedbirleri</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Gecenin ilerleyen saatlerinde ıssız yol kenarlarında duraklayan araçlar kötü niyetli kişilerin dikkatini çekebilir. Çekici beklerken aracınızın kapılarını içeriden kilitleyiniz ve pencereleri tam kapalı tutunuz. Yaklaşan şüpheli şahıslarla asla münakaşaya girmeyiniz ve gerekirse hemen 112 Acil Çağrı Merkezini arayarak konum bildiriniz.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Marmara Çekici çağrı merkezimizle irtibatta kalarak kurtarıcımızın gelişini telefonda operatörümüzle takip edebilirsiniz. Tepe lambalı resmi logolu kurtarıcımız olay yerine vardığı anda güvenliğiniz tam anlamıyla tesis edilmiş olur.
    </p>
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Gece Yarısı Yağışlı ve Karlı Havalarda Güvenli Sürüş Tavsiyeleri</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kış gecelerinde sıcaklıkların sıfırın altına inmesiyle birlikte Kuzey Marmara ve TEM viyadüklerinde gizli buzlanma meydana gelir. Yolda kalan aracın arkasından gelen sürücüler frene bastığında kayarak arızalı araca çarpabilir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Bu sebeple karlı ve buzlu kış gecelerinde araç içinde kesinlikle oturmayınız; yol kenarındaki karlı tepelere veya çelik bariyerlerin ardındaki güvenli zemine geçiniz. Kurtarıcı ekiplerimiz kar zincirleri ve tuzlama aparatlarıyla donatılmış devriye araçlarıyla gelerek aracı emniyetle yükler ve yolculuğunuzu huzurla tamamlamanızı sağlar.
    </p>
  `
};

let combined = {};
for (const [slug, content] of Object.entries(BLOG_ENRICHMENTS)) {
  const extra = EXTRA_SECTIONS[slug] || '';
  combined[slug] = content + '\n' + extra;
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
console.log('✓ blog_rich_content.js başarıyla güncellendi!');
