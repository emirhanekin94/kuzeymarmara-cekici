const fs = require('fs');
const path = require('path');
const { BLOG_ENRICHMENTS } = require('../data/blog_rich_content.js');

const TOP_UP = {
  'aku-neden-aniden-biter-takviye-nasil-yapilir': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Otomobillerde Akü Ömrünü İki Katına Çıkaran 3 Pratik Tavsiye</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Aracınızın aküsünü uzun yıllar sorunsuz kullanabilmek için periyodik sürüş alışkanlıklarına dikkat etmek gerekir. Haftada en az bir defa motoru yüksek devirde yirmi dakika kesintisiz çalıştırmak alternatörün aküyü tam doluluğa ulaştırmasını sağlar.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Ayrıca motoru stop etmeden önce klima kompresörünü, koltuk ısıtmalarını ve farları kapatmak, bir sonraki ilk marşta marş motorunun ihtiyaç duyduğu yüksek elektrik gücünün tamamını doğrudan aküden eksiksiz almasına yardımcı olur. Bu küçük ama etkili tedbirler batarya hücrelerinin yıpranmasını büyük ölçüde geciktirir.
    </p>
  `,

  'kurtkoy-ve-gebze-en-yakin-oto-cekici-rehberi': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kurtköy Çamlık ve Yenişehir Konut Projelerinde Yeraltı Otopark Müdahaleleri</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Bölgedeki lüks sitelerin çok katlı kapalı otoparklarında elektronik park freni kilitlenen veya anahtarı kaybolan araçlar için özel makaralı sistemlerimiz hazırdır. Kolonlara veya komşu araçlara en ufak bir temas yaşanmadan, yer altı tavan gabarisine uygun kompakt kurtarıcılarımızla aracınızı güvenle gün ışığına çıkarıyoruz.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Gebze ve Kurtköy sakinlerine yedi gün yirmi dört saat sunduğumuz bu VIP hizmet, hem zamandan tasarruf etmenizi sağlar hem de aracınızın kaporta ve mekanik sağlığını yüzde yüz koruma altına alır.
    </p>
  `,

  'sehir-ici-ve-otoyol-cekici-farklari-fiyat-ve-guvenlik': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Şehir İçi Dar Dönüşlerde ve Yokuşlarda Çekici Güvenlik Tedbirleri</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      İstanbul Anadolu Yakası'nın dik yokuşlu sokaklarında arıza yapan araçlar yüklenirken kayma tehlikesine karşı çift hidrolik kilitli fren mekanizması işletilir. Kurtarıcımızın arka tekerlekleri hidrolik ayaklarla yere basarak aracı sabitler.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Bu sayede kırk beş derecelik dik yokuşlarda dahi aracınız hidrolik platforma milim kaymadan, tamamen stabil bir düzlemde alınır. Şehir içi operasyonlarımızda gösterdiğimiz bu üstün mühendislik titizliği müşterilerimizin bize olan güveninin temel taşıdır.
    </p>
  `,

  'pendik-kartal-maltepe-e5-yol-yardim-ve-cekici-rehberi': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">E-5 Karayolunda Kaza Sonrası Şerit Açma ve Trafik Emniyeti</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      D-100 karayolunda meydana gelen kaza ve arızalarda en kritik an, olayın gerçekleştiği ilk beş dakikadır. Bu sürede emniyet şeridine çekilemeyen araçlar arkadan gelen süratli araçlar için zincirleme kaza tehlikesi yaratır.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Maltepe, Kartal ve Pendik E-5 hattında bekleyen nöbetçi çekicilerimiz kaza yerine ulaşır ulaşmaz arka projektörlerini devreye sokarak emniyet şeridini güvenli koridora dönüştürür. Aracın süratle kasaya yüklenmesiyle birlikte D-100 trafiği normal seyrine döner ve sürücülerimiz huzurla yetkili servise ulaştırılır.
    </p>
  `,

  'cayirova-gebze-sanayi-bolgesi-arac-kurtarma-ve-cekici': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Çayırova ve Gebze Sanayisinde 7/24 Kurumsal Acil Destek Hattı</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      GOSB, TOSB ve Plastikçiler OSB bölgesindeki fabrikalara özel oluşturduğumuz kurumsal acil destek hattımız sayesinde vardiya amirleri ve lojistik müdürleri tek tuşla anında nöbetçi çekici çağırabilmektedir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      İster binek yönetici otomobili ister tonajlı sevkiyat kamyonu olsun, filomuzdaki her araca uygun hidrolik çözümlerle fabrikaların çalışma temposu kesintiye uğramaz. Kocaeli ve Çayırova sanayisinin güvenilir yol dostu olmaya devam ediyoruz.
    </p>
  `,

  'kaza-ve-ariza-aninda-kasko-anlasmali-cekici-sureci': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Kasko Poliçesinde Muafiyetsiz Çekici Teminatının İncelenmesi</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Araç sahiplerinin kasko yaptırırken poliçe genel şartlarındaki "yol yardım asistans limitleri" maddesini kontrol etmeleri büyük önem taşır. Genişletilmiş kasko paketlerinde genellikle çekici hizmeti için herhangi bir kilometre veya tutar muafiyeti bulunmaz.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Özel çekici çağırdığınızda kesilen e-faturamız doğrudan poliçe limitiniz kapsamında sigorta şirketince yüzde yüz karşılanır. Sigorta şirketinin saatlerce süren asistans gecikmelerine katlanmak zorunda kalmadan, dakikalar içinde kaliteli ve profesyonel çekici hizmeti alabilirsiniz.
    </p>
  `,

  'gece-nobetci-oto-cekici-cagirirken-bilinmesi-gerekenler': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Gece Nöbetçi Çekici Operasyonlarında Müşteri Memnuniyeti Güvencesi</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Gece yolculuklarında yaşanan talihsizliklerin çözümü güven ve empatiye dayanır. Marmara Çekici santralimiz çağrınızı karşıladığı andan itibaren sizi yalnız bırakmaz; kurtarıcımız yanınıza ulaşana kadar düzenli telefon irtibatıyla güvende kalmanızı sağlar.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Güler yüzlü, sabırlı ve yüksek mesleki ahlaka sahip personelimizle gece yarısı dahi olsanız kendinizi evinizdeymiş gibi emniyette hissedeceksiniz. Aracınız istediğiniz noktaya kaskolu olarak teslim edilir ve resmi faturanız anında elinize ulaşır.
    </p>
  `
};

let combined = {};
for (const [slug, content] of Object.entries(BLOG_ENRICHMENTS)) {
  const top = TOP_UP[slug] || '';
  combined[slug] = content + '\n' + top;
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
console.log('✓ blog_rich_content.js başarıyla son aşamada güncellendi!');
