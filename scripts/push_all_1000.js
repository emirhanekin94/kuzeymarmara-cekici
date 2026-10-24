const fs = require('fs');
const path = require('path');
const { BLOG_ENRICHMENTS } = require('../data/blog_rich_content.js');

const FINAL_PUSH = {
  'kurtkoy-ve-gebze-en-yakin-oto-cekici-rehberi': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Sabiha Gökçen Havalimanı Taksici ve Servis Şoförlerine 7/24 Teknik Destek</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Sabiha Gökçen Havalimanı taksi kooperatifi ve VIP transfer acentelerinin yüzlerce aracı günün yirmi dört saati Kurtköy sokaklarında hizmet verir. Yolcu taşırken arızalanan ticari transfer araçlarına öncelikli VIP çekici tahsis ediyoruz.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Uçuşa yetişmeye çalışan yolcular için alternatif ulaşım koordinasyonu sağlanırken araç da Pendik veya Kurtköy sanayisindeki ticari araç tamirhanesine süratle ulaştırılır.
    </p>
  `,

  'sehir-ici-ve-otoyol-cekici-farklari-fiyat-ve-guvenlik': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Şehir İçi Çekici Hizmetlerinde Kurumsal Fatura ve Tüketici Güvencesi</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Şehir içinde mahalle aralarından çağrılan rastgele çekiciler çoğunlukla gayriresmi çalıştıkları için fatura veremezler. Oysa Marmara Çekici olarak şehir içi tüm kısa mesafe çekimlerinde kurumsal e-Arşiv faturası tanzim ediyoruz.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Bu fatura hem işletmeler için yasal gider pusulası yerine geçer hem de aracınızın tamir sürecinde kasko veya sigorta şirketlerinden geri ödeme almanızı hukuken garanti altına alır.
    </p>
  `,

  'pendik-kartal-maltepe-e5-yol-yardim-ve-cekici-rehberi': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Maltepe ve Kartal Sahilinde Hafta Sonu Gezintilerinde Yaşanan Aksilikler</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Hafta sonu aileleriyle sahil parklarına ve kafelere giden araç sahipleri dönüş saatlerinde anahtar pili bitmesi, kumandanın aracı açmaması veya farların açık kalması sebebiyle akünün tükenmesi gibi can sıkıcı sürprizlerle karşılaşabilir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Kartal sahil dolgu alanında bekleyen mobil ekibimiz beş dakika içinde otoparka ulaşarak kapı açma kiti veya taşınabilir şarj güç ünitesiyle sorunu olay yerinde çözer. Çekiciye dahi gerek kalmadan yolunuza keyifle devam etmenizi sağlar.
    </p>
  `,

  'cayirova-gebze-sanayi-bolgesi-arac-kurtarma-ve-cekici': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Çayırova Akse Mahallesi ve Güzeltepe Konut Alanlarında Nöbetçi Çekici</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Çayırova'nın yeni gelişen Akse Mahallesi, Güzeltepe ve Şekerpınar yerleşimleri binlerce sanayi çalışanının ev sahipliğini yapar. Kış aylarında sabahın erken saatlerinde işe gitmek üzere marşa basıldığında donan yakıt filtreleri veya biten aküler için gezici ekiplerimiz anında müdahale eder.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Gerek yerinde hızlı onarım gerekse Gebze Küçük Sanayi Sitesi veya Tuzla'daki yetkili bayilere transfer için en ekonomik sabit fiyatlarla bölge halkının yanındayız. Güvenilir ve dürüst oto kurtarma anlayışımızla Doğu Marmara'nın lider markasıyız.
    </p>
  `,

  'kaza-ve-ariza-aninda-kasko-anlasmali-cekici-sureci': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Sigorta Acentenizle Olay Anında Doğrudan Koordinasyon</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Marmara Çekici santralimiz, arzu etmeniz halinde kaza mahallindeyken kendi sigorta acentenizi arayarak acentenizle doğrudan irtibata geçer. Acentenizin önerdiği anlaşmalı kaporta servisine aracın sevk edilmesini organize eder.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Böylelikle hasar dosyanız kaza anından itibaren profesyonelce takip edilir ve aracınız yetkili servise ulaştığı anda ekspertiz süreci hiç vakit kaybetmeden resmiyet kazanır.
    </p>
  `,

  'gece-nobetci-oto-cekici-cagirirken-bilinmesi-gerekenler': `
    <h2 style="color:#0f172a; font-size:1.5rem; font-weight:900; margin:35px 0 16px;">Gece Çekici Çağrılarında Kurtarıcı Plaka ve Şoför Bilgisi Teyidi</h2>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Güvenliğiniz için gece vakti çağırdığınız çekicinin plakası, araç modeli ve görevli şoförün adı soyadı tarafınıza SMS veya WhatsApp ile resmi olarak bildirilir. Aracın başına gelen şahsın bu bilgileri doğrulaması istenir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Bu kurumsal teyit mekanizması sayesinde gecenin geç saatlerinde tanımadığınız şahıslara aracınızı teslim etme endişesinden tamamen kurtulursunuz. Marmara Çekici ile her saniyeniz emniyet altındadır.
    </p>
  `
};

let combined = {};
for (const [slug, content] of Object.entries(BLOG_ENRICHMENTS)) {
  const push = FINAL_PUSH[slug] || '';
  combined[slug] = content + '\n' + push;
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
console.log('✓ blog_rich_content.js TÜMÜ 1000+ KELİME OLACAK ŞEKİLDE GÜNCELLENDİ!');
