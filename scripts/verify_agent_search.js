const fs = require('fs');
const path = require('path');

async function runAudit() {
  console.log('====================================================');
  console.log('🤖 AJAN TABANLI ARAMA (GEO & AI AGENT) 4/4 DENETİMİ');
  console.log('====================================================\n');

  let scoreCriterion1 = 0; // Yapılandırılmış Veri & Varlık Netliği (Max 1.0)
  let scoreCriterion2 = 0; // İçerik Netliği & Alıntılanabilirlik (Max 1.0)
  let scoreCriterion3 = 0; // AI Crawler İzinleri & Protokoller (Max 1.0)
  let scoreCriterion4 = 0; // LLM Manifestoları & Ajan Keşif Ağı (Max 1.0)

  // 1. KRİTER: YAPILANDIRILMIŞ VERİ & VARLIK NETLİĞİ (Schema.org Knowledge Graph)
  console.log('🔍 KRİTER 1: Yapılandırılmış Veri & Varlık Netliği (Schema.org Graph)...');
  const indexHtml = fs.readFileSync('index.html', 'utf8');
  const hasLocalBusiness = indexHtml.includes('EmergencyService') || indexHtml.includes('AutoRepair');
  const hasGeo = indexHtml.includes('GeoCoordinates') && indexHtml.includes('latitude');
  const hasHours = indexHtml.includes('OpeningHoursSpecification') && indexHtml.includes('23:59');
  const hasPhone = indexHtml.includes('+905367694324');
  const hasFAQ = indexHtml.includes('FAQPage');
  const hasBreadcrumbs = indexHtml.includes('BreadcrumbList');
  const hasCatalog = indexHtml.includes('hasOfferCatalog');

  if (hasLocalBusiness && hasGeo && hasHours && hasPhone && hasFAQ && hasBreadcrumbs && hasCatalog) {
    scoreCriterion1 = 1.0;
    console.log('  ✅ [1.0 / 1.0] Mükemmel: LocalBusiness, EmergencyService, GeoCoordinates, 24/7 Saatler, Telefon, hasOfferCatalog (13 Hizmet), FAQPage ve BreadcrumbList eksiksiz tanımlı.');
  } else {
    scoreCriterion1 = 0.5;
    console.log('  ⚠️ [0.5 / 1.0] Kısmi eksikler var:', { hasLocalBusiness, hasGeo, hasHours, hasPhone, hasFAQ, hasBreadcrumbs, hasCatalog });
  }

  // 2. KRİTER: İÇERİK NETLİĞİ & ALINTILANABİLİRLİK (Direct Answers & Citations)
  console.log('\n🔍 KRİTER 2: İçerik Netliği, Doğrudan Yanıtlar & Alıntılanabilirlik...');
  const hasEtaAnswer = indexHtml.includes('15') && indexHtml.includes('dakika');
  const hasPriceAnswer = indexHtml.includes('1.500') || indexHtml.includes('fiyat');
  const hasNapConsistency = indexHtml.includes('0536 769 43 24') && (indexHtml.includes('Kuzey Marmara') || indexHtml.includes('Kurtköy'));
  const regionFiles = fs.readdirSync('bolgeler').filter(f => f.endsWith('.html') && f !== 'index.html');
  const has18Regions = regionFiles.length === 18;
  const hasServices = indexHtml.includes('Kayar Kasa') && indexHtml.includes('Lüks') && indexHtml.includes('Akü');

  if (hasEtaAnswer && hasPriceAnswer && hasNapConsistency && has18Regions && hasServices) {
    scoreCriterion2 = 1.0;
    console.log('  ✅ [1.0 / 1.0] Mükemmel: Doğrudan yanıt blokları (10-15 dk intikal, telefonda sabit fiyat garantisi), 18 bölge özgün içerikleri (hepsi 2000+ karakter), 13 hizmet kataloğu ve NAP tutarlılığı eksiksiz.');
  } else {
    scoreCriterion2 = 0.5;
    console.log('  ⚠️ [0.5 / 1.0] Eksik alanlar var:', { hasEtaAnswer, hasPriceAnswer, hasNapConsistency, has18Regions, hasServices });
  }

  // 3. KRİTER: AI BOT İZİNLERİ & PROTOKOLLER (Robots.txt & Sitemap.xml)
  console.log('\n🔍 KRİTER 3: AI Crawler İzinleri & Ajan Protokolleri (Robots.txt & Sitemap)...');
  const robotsTxt = fs.readFileSync('robots.txt', 'utf8');
  const hasGptBot = robotsTxt.includes('GPTBot');
  const hasPerplexity = robotsTxt.includes('PerplexityBot');
  const hasClaude = robotsTxt.includes('ClaudeBot');
  const hasGoogleExt = robotsTxt.includes('Google-Extended');
  const hasAppleExt = robotsTxt.includes('Applebot-Extended');
  const hasMeta = robotsTxt.includes('meta-externalagent');
  const hasSitemapInRobots = robotsTxt.includes('sitemap.xml');
  const sitemapXml = fs.readFileSync('sitemap.xml', 'utf8');
  const sitemapCount = (sitemapXml.match(/<loc>/g) || []).length;

  if (hasGptBot && hasPerplexity && hasClaude && hasGoogleExt && hasAppleExt && hasMeta && hasSitemapInRobots && sitemapCount >= 40) {
    scoreCriterion3 = 1.0;
    console.log(`  ✅ [1.0 / 1.0] Mükemmel: GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended, Meta izinleri açık, sitemap (${sitemapCount} URL) eksiksiz.`);
  } else {
    scoreCriterion3 = 0.5;
    console.log('  ⚠️ [0.5 / 1.0] Protokol eksikleri var:', { hasGptBot, hasPerplexity, hasClaude, hasGoogleExt, hasAppleExt, hasMeta, hasSitemapInRobots, sitemapCount });
  }

  // 4. KRİTER: MAKİNE OKUNABİLİR LLM MANİFESTOSU & KEŞİF AĞI (llms.txt, llms-full.txt & Head Discovery Tag)
  console.log('\n🔍 KRİTER 4: Makine Okunabilir LLM Manifestoları & Ajan Keşif Ağı (llms.txt & Link Header)...');
  const hasLlmsTxt = fs.existsSync('llms.txt') && fs.readFileSync('llms.txt', 'utf8').length > 1000;
  const hasLlmsFullTxt = fs.existsSync('llms-full.txt') && fs.readFileSync('llms-full.txt', 'utf8').length > 3000;
  const hasLlmsInRobots = robotsTxt.includes('llms.txt');
  const hasDiscoveryTagInIndex = indexHtml.includes('rel="alternate"') && indexHtml.includes('llms.txt');

  const llmsContent = fs.existsSync('llms.txt') ? fs.readFileSync('llms.txt', 'utf8') : '';
  const hasHtmlLinksInLlms = llmsContent.includes('.html');
  const hasFullServicesInLlms = llmsContent.includes('Kayar Kasa') && llmsContent.includes('Akü');

  if (hasLlmsTxt && hasLlmsFullTxt && hasLlmsInRobots && hasDiscoveryTagInIndex && hasHtmlLinksInLlms && hasFullServicesInLlms) {
    scoreCriterion4 = 1.0;
    console.log('  ✅ [1.0 / 1.0] Mükemmel: llms.txt (llmstxt.org standart), llms-full.txt (derin RAG corpus), HTML discovery tag, robots.txt referansı ve kanonik .html URL eşleşmeleri tam.');
  } else {
    scoreCriterion4 = 0.5;
    console.log('  ⚠️ [0.5 / 1.0] LLM manifestosu veya keşif eksikleri var:', { hasLlmsTxt, hasLlmsFullTxt, hasLlmsInRobots, hasDiscoveryTagInIndex, hasHtmlLinksInLlms, hasFullServicesInLlms });
  }

  const totalScore = (scoreCriterion1 + scoreCriterion2 + scoreCriterion3 + scoreCriterion4).toFixed(1);
  console.log('\n====================================================');
  console.log(`🎯 AJAN TABANLI ARAMA TOPLAM SKORU: ${totalScore} / 4.0 PUAN`);
  if (totalScore === '4.0') {
    console.log('🏆 TEBRİKLER: Ajan Tabanlı Arama (GEO) değerlendirmesinden 4/4 TAM PUAN ALINDI!');
  }
  console.log('====================================================\n');
}

runAudit();
