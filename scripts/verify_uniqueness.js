'use strict';

const fs = require('fs');
const path = require('path');
const { REGION_EXTENSIONS } = require('../data/region_extensions.js');

console.log('🔍 18 BÖLGE İÇERİK BENZERSİZLİK (DUPLICATE) VE KARAKTER ANALİZİ');

const regions = Object.keys(REGION_EXTENSIONS);
let duplicateFound = false;

// 1. Eklenen bölümlerin (neighborhoodStreetGuide & seasonalAndNightRescueProtocol) karakter boyutu
console.log('\n--- 1. Eklenen 1500+ Karakter Kontrolü ---');
for (const reg of regions) {
  const data = REGION_EXTENSIONS[reg];
  const g1 = data.neighborhoodStreetGuide || '';
  const g2 = data.seasonalAndNightRescueProtocol || '';
  const addedChars = g1.length + g2.length;
  console.log(`${reg}: Mahalle=${g1.length} | Gece/Mevsim=${g2.length} | YENİ EKLENEN TOPLAM=${addedChars} karakter`);
  if (addedChars < 1500) {
    console.error(`❌ HATA: ${reg} 1500 karakter sınırının altında kaldı (${addedChars} < 1500)`);
    duplicateFound = true;
  }
}

// 2. Paragraflar ve Cümleler Arası Çapraz Duplicate Kontrolü
console.log('\n--- 2. Çapraz Duplicate (Tekrar) Kontrolü ---');
const sentenceMap = new Map();

for (const reg of regions) {
  const data = REGION_EXTENSIONS[reg];
  const fullText = [
    data.districtCorridorGuide || '',
    data.serviceAndPricingNetwork || '',
    data.emergencyActionPlan || '',
    data.neighborhoodStreetGuide || '',
    data.seasonalAndNightRescueProtocol || ''
  ].join(' ');

  // Cümlelere böl (en az 40 karakterlik anlamlı cümleler)
  const sentences = fullText
    .split(/[.!?]+/)
    .map(s => s.trim().toLowerCase())
    .filter(s => s.length >= 40);

  for (const s of sentences) {
    if (sentenceMap.has(s)) {
      const prevReg = sentenceMap.get(s);
      if (prevReg !== reg) {
        console.error(`❌ DUPLICATE CÜMLE TESPİT EDİLDİ:`);
        console.error(`   Bölge 1: ${prevReg}`);
        console.error(`   Bölge 2: ${reg}`);
        console.error(`   Cümle: "${s}"`);
        duplicateFound = true;
      }
    } else {
      sentenceMap.set(s, reg);
    }
  }
}

if (!duplicateFound) {
  console.log('✅ MÜKEMMEL! 18 bölge arasında hiçbir aynı/kopya cümle veya duplicate paragraf bulunamadı.');
  console.log('✅ Tüm 18 bölgeye 1.500+ karakterlik tamamen özgün ve benzersiz içerik eklendi.');
} else {
  console.error('❌ Duplicate tespit edildi!');
  process.exit(1);
}
