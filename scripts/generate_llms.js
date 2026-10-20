'use strict';

const fs = require('fs');
const path = require('path');
const { SITE_URL, BUSINESS, whatsappLink } = require('../data/business.js');
const { REGIONS } = require('../data/regions.js');
const { SERVICES } = require('../data/services.js');
const { BLOG_POSTS } = require('../data/blog.js');

const ROOT = path.join(__dirname, '..');

function buildLlmsTxt() {
  return `# ${BUSINESS.name}

> ${BUSINESS.slogan}. Kuzey Marmara Otoyolu, TEM Otoyolu ve Kurtköy, Pendik, Çayırova, Gebze, Tuzla, Sabiha Gökçen Havalimanı çevresinde 7/24 oto çekici, kurtarma ve yol yardım hizmeti veren bir işletmedir.

## İletişim
- Telefon / Acil Çağrı: ${BUSINESS.phoneDisplay}
- WhatsApp: ${BUSINESS.phoneDisplay} (${whatsappLink()})
- E-posta: ${BUSINESS.email}
- Çalışma Saatleri: ${BUSINESS.hours}
- Ortalama İntikal Süresi: ${BUSINESS.etaMinutes}

## Hizmet Bölgesi
${BUSINESS.areaServed.join(', ')}

## Fiyat Politikası
Şeffaf km tarifesi, telefonda teyit edilen sabit fiyat garantisi, sürpriz ek ücret yok. Kredi Kartı / Mobil POS ve FAST geçerli. %100 Emtia Nakliyat Taşıma Kaskosu, KTK Yetki Belgeli Uzman Operatörler, Sıfır Hasar Garantisi.

## Hizmetler
${SERVICES.map(s => `- [${s.name}](${SITE_URL}/hizmetler/${s.slug}): ${s.intro}`).join('\n')}

## Öne Çıkan Hizmet Bölgeleri
${REGIONS.filter(r => r.isAds).map(r => `- [${r.shortName} Oto Çekici](${SITE_URL}/bolgeler/${r.slug})`).join('\n')}

## Sıkça Sorulan Sorular
- Çekici fiyatı nasıl hesaplanır? Taban ücret + kilometre bazlı ücretten oluşur, telefonda sabit fiyat teyidi verilir.
- İntikal süresi ne kadar? Ortalama 10-15 dakika.
- Kredi kartı kabul ediliyor mu? Evet, mobil POS ile yerinde kredi kartı ve taksit ödemesi kabul edilir.

Daha fazla detay için: ${SITE_URL}/llms-full.txt
`;
}

function buildLlmsFullTxt() {
  const regionLines = REGIONS.map(r => `- [${r.shortName} Oto Çekici](${SITE_URL}/bolgeler/${r.slug}) — ${r.metaDescription}`).join('\n');
  const serviceLines = SERVICES.map(s => `- [${s.name}](${SITE_URL}/hizmetler/${s.slug}) — ${s.metaDescription}`).join('\n');
  const blogLines = BLOG_POSTS.map(p => `- [${p.title}](${SITE_URL}/blog/${p.slug}) — ${p.metaDescription}`).join('\n');

  return `# ${BUSINESS.name} — Tam İçerik Haritası

## İşletme Bilgileri
- Marka: ${BUSINESS.name} (${BUSINESS.legalName})
- Slogan: ${BUSINESS.slogan}
- Telefon: ${BUSINESS.phoneDisplay}
- WhatsApp: ${BUSINESS.phoneDisplay}
- E-posta: ${BUSINESS.email}
- Çalışma Saatleri: ${BUSINESS.hours}
- Ortalama İntikal Süresi: ${BUSINESS.etaMinutes}
- Adres: ${BUSINESS.address.streetAddress}, ${BUSINESS.address.locality}/${BUSINESS.address.region}
- Hizmet Bölgesi: ${BUSINESS.areaServed.join(', ')}

## Ana Sayfalar
- [Ana Sayfa](${SITE_URL}/)
- [Hakkımızda](${SITE_URL}/hakkimizda)
- [İletişim](${SITE_URL}/iletisim)
- [Galeri](${SITE_URL}/galeri)
- [Tüm Bölgeler](${SITE_URL}/bolgeler/)
- [Tüm Hizmetler](${SITE_URL}/hizmetler/)
- [Blog](${SITE_URL}/blog/)

## Hizmet Bölgeleri (${REGIONS.length})
${regionLines}

## Hizmetler (${SERVICES.length})
${serviceLines}

## Blog Yazıları (${BLOG_POSTS.length})
${blogLines}

## Fiyat Politikası
Şeffaf km tarifesi, telefonda teyit edilen sabit fiyat garantisi, sürpriz ek ücret yok. Kredi Kartı / Mobil POS ve FAST geçerli. %100 Emtia Nakliyat Taşıma Kaskosu, KTK Yetki Belgeli Uzman Operatörler, Sıfır Hasar Garantisi.
`;
}

function run() {
  fs.writeFileSync(path.join(ROOT, 'llms.txt'), buildLlmsTxt(), 'utf8');
  fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), buildLlmsFullTxt(), 'utf8');
  console.log('✔ llms.txt ve llms-full.txt oluşturuldu.');
}

run();
