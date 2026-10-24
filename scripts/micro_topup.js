const fs = require('fs');
const path = require('path');
const { BLOG_ENRICHMENTS } = require('../data/blog_rich_content.js');

const MICRO_TOPUP = {
  'pendik-kartal-maltepe-e5-yol-yardim-ve-cekici-rehberi': `
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      İstanbul Anadolu Yakası'nın bu üç büyük ilçesinde sunduğumuz hızlı, kaskolu ve sabit fiyatlı çekici çözümlerimizle hem bireysel sürücülere hem de kurumsal ticari filolara güven vermeye devam ediyoruz.
    </p>
  `,

  'cayirova-gebze-sanayi-bolgesi-arac-kurtarma-ve-cekici': `
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Çayırova ve Gebze sanayisinin her köşesinde nöbet tutan çekici filomuz, fabrikaların vardiya ve sevkiyat planlarının aksamaması için 7 gün 24 saat aralıksız hizmet vermektedir.
    </p>
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Bölgedeki küçük sanayi siteleri ve yetkili servislerle tam entegre çalışarak aracınızı en güvenilir ellere teslim ediyoruz.
    </p>
  `,

  'gece-nobetci-oto-cekici-cagirirken-bilinmesi-gerekenler': `
    <p style="font-size:1rem; line-height:1.8; color:#334155; margin-bottom:18px;">
      Gece saatlerinde yolculuk yaparken karşılaştığınız tüm olumsuzluklarda tek yapmanız gereken 0533 265 70 89 numaralı nöbet hattımızı aramak veya WhatsApp üzerinden konumunuzu paylaşmaktır.
    </p>
  `
};

let combined = {};
for (const [slug, content] of Object.entries(BLOG_ENRICHMENTS)) {
  const top = MICRO_TOPUP[slug] || '';
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
console.log('✓ Mikro tamamlandı!');
