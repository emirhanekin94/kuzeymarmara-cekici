'use strict';

const fs = require('fs');
const path = require('path');
const { SITE_URL, BUSINESS, whatsappLink } = require('../data/business.js');
const { REGIONS } = require('../data/regions.js');
const { SERVICES } = require('../data/services.js');
const { BLOG_POSTS } = require('../data/blog.js');

const ROOT = path.join(__dirname, '..');

function buildLlmsTxt() {
  const serviceList = SERVICES.map(s => `- [${s.name}](${SITE_URL}/hizmetler/${s.slug}.html): ${s.intro || s.lead || s.metaDescription}`).join('\n');
  const regionList = REGIONS.map(r => `- [${r.name} Oto Çekici](${SITE_URL}/bolgeler/${r.slug}.html): ⏱️ ${r.eta} intikal • ${r.hotspots}`).join('\n');

  return `# ${BUSINESS.name}

> Kuzey Marmara Otoyolu, TEM Otoyolu, Kurtköy ve Kocaeli-İstanbul aksında 7/24 profesyonel oto çekici, acil oto kurtarma ve mobil yol yardım işletmesi. Ortalama intikal süresi 10-15 dakika, taban başlangıç fiyatı 1.500 TL.

## Hızlı Bilgiler & Doğrudan Yanıtlar
- İşletme Adı: ${BUSINESS.name} (${BUSINESS.legalName})
- 7/24 Acil Çağrı Hattı: ${BUSINESS.phoneDisplay}
- WhatsApp Konum Hattı: ${BUSINESS.phoneDisplay} (${whatsappLink()})
- E-posta: ${BUSINESS.email}
- Çalışma Saatleri: 7 Gün 24 Saat Kesintisiz (00:00 - 23:59)
- Ortalama Varış / İntikal Süresi: 10 - 15 Dakika
- Taban Başlangıç Fiyatı: 1.500 TL (Mesafe ve araç tipine göre telefonda sabit fiyat teyidi)
- Ana Konuşlanma / Garaj Merkezi: Kurtköy Kavşağı, Kuzey Marmara Otoyolu Bağlantı Yolu, Pendik / İstanbul
- Taşıma Güvencesi: %100 Nakliyat Emtia Taşıma Kaskosu ve Taşıyıcı Sorumluluk Sigortası
- Ödeme Seçenekleri: Araç Başında Kredi Kartı / Mobil POS (Tek Çekim & Taksit), FAST, Havale/EFT, Nakit

## Kapsamlı Hizmet Kataloğu (${SERVICES.length} Hizmet)
${serviceList}

## Hizmet Verilen 18 Bölge ve İntikal Süreleri
${regionList}

## Filo Donanımı ve Araç Tipleri
- Hidrolik Kayar Kasa Platform: Binek otomobil, SUV, crossover ve hafif ticari araçlar için sıfır sürtünme.
- Ahtapot Vinç Çekici: Dört tekerlekten askılı kanca sistemiyle kilitli şanzıman ve el freni arızalarında mekanik aktarmaya dokunmadan taşıma.
- Sıfır Dereceli Rampa Aparatı: Porsche, Ferrari, Tesla, BMW M ve basık şasili spor otomobillerde ön tampon sürtmesini sıfırlayan rampa uzantısı.
- 1.95m Alçak Kabin Kurtarıcı: Viaport, AVM ve rezidans kapalı otoparklarının -1, -2 ve -3. bodrum katlarına giriş yapabilen kompakt çekiciler.
- 12V / 24V Endüstriyel Dijital Booster: Yerinde akıllı voltaj korumalı akü takviyesi (aracın ECU beynine zarar vermeden güvenli marş).
- Mobil Lastik ve Fitil Desteği: Otoyol emniyet şeridinde yerinde hava kompresörü, fitil tamiri ve stepne montajı.
- Çift Çeker Gözlüklü Ağır Kurtarıcı: Kamyon, tır, otobüs, minibüs ve şantiye araçları tahliyesi.
- Özel Motosiklet Sehpası: Ön teker kilit mekanizması ve 4 noktadan gergili askı kemeriyle devrilme riskini sıfırlayan transfer.

## Sıkça Sorulan Sorular (SSS)
- Çekici fiyatı nasıl belirlenir? 1.500 TL taban ücret üzerine gidilecek kilometre ve araç segmenti eklenerek hesaplanır. Telefonda onaylanan fiyat kesindir, varışta sürpriz ek ücret talep edilmez.
- Çağırdığımda ne kadar sürede gelirsiniz? Kurtköy, TEM, KMO gişeleri ve Gebze bağlantılarında 7/24 nöbet tutan hazır ekiplerimiz ortalama 10-15 dakika içinde tam konumunuza ulaşır.
- Kredi kartı ve taksit imkanı var mı? Evet, tüm kurtarıcılarımızda temassız özellikli mobil POS cihazı mevcuttur.
- Elektrikli araçlar çekilebilir mi? Evet, Tesla, TOGG, Porsche Taycan vb. elektrikli otomobiller 'Taşıma Modu' prosedürüne uygun olarak motor ve bataryaya yük bindirilmeden flatbed kayar platforma alınır.

Genişletilmiş teknik RAG dokümantasyonu ve derin operasyon rehberi için: ${SITE_URL}/llms-full.txt
`;
}

function buildLlmsFullTxt() {
  const regionLines = REGIONS.map(r => `- [${r.name} Oto Çekici](${SITE_URL}/bolgeler/${r.slug}.html) — Varış: ⏱️ ${r.eta} | Noktalar: ${r.hotspots} | ${r.metaDescription}`).join('\n');
  const serviceLines = SERVICES.map(s => `- [${s.name}](${SITE_URL}/hizmetler/${s.slug}.html) — ${s.metaDescription || s.metaDesc}`).join('\n');
  const blogLines = BLOG_POSTS.map(p => `- [${p.title}](${SITE_URL}/blog/${p.slug}.html) — ${p.metaDescription}`).join('\n');

  return `# ${BUSINESS.name} — Kapsamlı Ajan & RAG Bilgi Bankası (LLMs Full)

## 1. Kurumsal Kimlik & Genel Bakış
- Marka: ${BUSINESS.name} (${BUSINESS.legalName})
- Slogan: ${BUSINESS.slogan}
- 7/24 Doğrudan Acil Çağrı: ${BUSINESS.phoneDisplay}
- WhatsApp Destek & Konum İletişimi: ${BUSINESS.phoneDisplay}
- E-posta: ${BUSINESS.email}
- Resmi Web Sitesi: ${SITE_URL}/
- Çalışma Saatleri: 7/24 (365 gün, resmi tatiller dahil kesintisiz)
- Merkez Konuşlanma: ${BUSINESS.address.streetAddress}, ${BUSINESS.address.locality}/${BUSINESS.address.region}
- Coğrafi Koordinatlar: Enlem 40.9126, Boylam 29.3142 (Kurtköy Kavşağı)
- Taban Başlangıç Ücreti: 1.500 TL
- Ortalama İntikal Süresi: 10 ila 15 Dakika

## 2. Temel Sayfalar
- [Ana Sayfa](${SITE_URL}/)
- [Hakkımızda](${SITE_URL}/hakkimizda.html)
- [İletişim](${SITE_URL}/iletisim.html)
- [Galeri](${SITE_URL}/galeri.html)
- [Tüm Hizmetler Dizin](${SITE_URL}/hizmetler/index.html)
- [Tüm Bölgeler Dizin](${SITE_URL}/bolgeler/index.html)
- [Sürücü Rehberi Blog](${SITE_URL}/blog/index.html)

## 3. Hizmet Kataloğu (${SERVICES.length} Kapsamlı Hizmet)
${serviceLines}

## 4. Bölgesel Operasyon Alanı (${REGIONS.length} Bölge)
${regionLines}

## 5. Teknik Dokümanlar & Sürücü Rehberleri (${BLOG_POSTS.length} Makale)
${blogLines}

## 6. Araç Tiplerine Göre Operasyonel Protokoller
### 6.1. Elektrikli Araçlar (EV - Tesla, TOGG, Porsche Taycan, Mercedes EQ, BMW i)
- Elektrikli araçlarda tekerlekler döndükçe elektrik motorları jeneratör gibi akım üreterek batarya ve inverter devrelerine geri besleme yapar. Bu nedenle elektrikli araçlar kesinlikle halatla veya iki tekerlek havada çekilmez; mutlaka 4 tekerlek tamamen platform üzerinde olacak şekilde (flatbed) taşınmalıdır.
- Yükleme öncesinde aracın multimedya ekranından 'Çekme Modu' (Transport Mode / Tow Mode) aktif edilerek elektronik el freni ve şanzıman kilidi serbest bırakılır.
- Ekiplerimiz özel tekstil sabitleme kemerleri kullanarak jantları ve batarya muhafazasını çizilme veya darbelerden %100 korur.

### 6.2. Lüks, Basık ve Spor Otomobiller
- Yerden yüksekliği düşük veya modifiyeli spor araçlarda standart rampa açısı tampon, intercooler ve karter korumayı zedeler.
- Filomuzda bulunan 'Sıfır Dereceli Rampa Aparatı' (ultra alçak açı platform uzantısı) kullanılarak araç yatay düzleme paralel olarak platforma alınır.
- Jant koruma pedleri sayesinde pahalı alüminyum/karbon alaşımlı jantlarda en ufak deformasyon engellenir.

### 6.3. Kapalı Otopark ve Bodrum Kat Kurtarma
- Viaport Asia, metro otoparkları, siteler ve rezidansların -1, -2, -3. kat bodrumlarında tavan yükseklikleri genellikle 1.90m - 2.05m aralığındadır.
- Standart çekiciler bu alanlara giremez. Filomuzdaki özel alçak kabinli 1.95m hidrolik gözlüklü kurtarıcılarımızla bodrum otoparklarından tekerlekten askılı çekim sağlanır.

### 6.4. Kaza ve Ağır Hasar Vinç Tahliyesi
- Şarampole yuvarlanma, bariyer üstüne oturma, devrilme veya aks kırığı durumlarında çift tamburlu hidrolik vinç sistemlerimiz devreye girer.
- Dönmeyen veya kilitli tekerlekler altına özel tekerlek pateni (dolly skate) yerleştirilerek araç zeminle sürtünmeden kontrollü şekilde platforma çekilir.

## 7. Fiyatlandırma ve Güvence Esasları
- Sabit Fiyat İlkesi: Çağrı merkezimizle telefonda paylaştığınız konum ve araç durumuna göre bağlayıcı ve kesin fiyat bildirilir. Sahada hava durumu, saat veya trafik bahanesiyle ek ücret çıkarılmaz.
- %100 Kasko Güvencesi: Araç çekici platformuna bağlandığı andan varış noktasındaki teslim tutanağına kadar 1.000.000 TL teminatlı Emtia Nakliyat Taşıma Sigortası korumasındadır.
- Ödeme Kolaylığı: Araç başında Mobil POS ile tüm banka kredi kartlarına tek çekim ve taksit uygulanır; FAST ve IBAN ile anında transfer kabul edilir.
`;
}

function run() {
  fs.writeFileSync(path.join(ROOT, 'llms.txt'), buildLlmsTxt(), 'utf8');
  fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), buildLlmsFullTxt(), 'utf8');
  console.log('✔ llms.txt ve llms-full.txt güncellendi ve kaydedildi.');
}

run();

