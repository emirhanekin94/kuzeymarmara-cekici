'use strict';

const SITE_URL = 'https://www.kuzeymarmaracekici.com';

const BUSINESS = {
  name: 'Kuzey Marmara Çekici',
  legalName: 'Kuzey Marmara Oto Kurtarma & Yol Yardım',
  slogan: '7/24 En Yakın Acil Oto Çekici',
  phoneDisplay: '0533 265 70 89',
  phoneTel: '+905332657089',
  phoneHuman: '0533 265 70 89',
  whatsappNumber: '905332657089',
  whatsappMessage: 'Merhaba, Kuzey Marmara / TEM bölgesinde yolda kaldım. Acil çekici ve yol yardım istiyorum. Konumum:',
  email: 'info@kuzeymarmaracekici.com',
  hours: '7 Gün 24 Saat Kesintisiz',
  etaMinutes: '10 - 15 Dakika',
  rating: { value: '5.0', count: '128' },
  address: {
    streetAddress: 'Kurtköy Mahallesi, Kuzey Marmara Otoyolu Bağlantı Yolu No:1',
    locality: 'Pendik',
    region: 'İstanbul',
    postalCode: '34912',
    country: 'TR'
  },
  geo: { latitude: 40.9036, longitude: 29.3278 },
  areaServed: [
    'Kuzey Marmara Otoyolu', 'TEM Otoyolu', 'Kurtköy', 'Pendik', 'Çayırova', 'Gebze',
    'Sabiha Gökçen Havalimanı', 'Tuzla', 'Şekerpınar', 'Dilovası', 'Sultanbeyli',
    'Sancaktepe', 'Kurnaköy', 'Mecidiye', 'Ömerli', 'Reşadiye', 'Darıca'
  ],
  sameAs: [],
  foundingYear: '2014'
};

function whatsappLink(prefill) {
  const text = encodeURIComponent(prefill || BUSINESS.whatsappMessage);
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${text}`;
}

function telLink() {
  return `tel:${BUSINESS.phoneTel}`;
}

module.exports = { SITE_URL, BUSINESS, whatsappLink, telLink };
