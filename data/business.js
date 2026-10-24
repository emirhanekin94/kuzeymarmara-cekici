'use strict';

const SITE_URL = 'https://www.kuzeymarmaracekici.com';

const BUSINESS = {
  name: 'Marmara Çekici',
  legalName: 'Marmara Oto Kurtarma & Yol Yardım Hizmetleri',
  slogan: '7/24 Anadolu Yakası, Kocaeli & Otoyol Acil Oto Çekici',
  phoneDisplay: '0536 769 43 24',
  phoneTel: '+905367694324',
  phoneHuman: '0536 769 43 24',
  whatsappNumber: '905367694324',
  whatsappMessage: 'Merhaba, Marmara Çekici ekibi; yolda kaldım, acil çekici ve yol yardım istiyorum. Konumum:',
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
    'Sancaktepe', 'Kurnaköy', 'Mecidiye', 'Ömerli', 'Reşadiye', 'Darıca', 'Kartal', 'Maltepe'
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
