/**
 * KUZEY MARMARA OTO ÇEKİCİ & YOL YARDIM
 * Tel & WhatsApp: 0536 769 43 24
 * Modern Etkileşim, Canlı Arama, Lightbox & Navigasyon Motoru
 */

document.addEventListener('DOMContentLoaded', () => {
  const PHONE_NUMBER = '905367694324';
  const DISPLAY_PHONE = '0536 769 43 24';

  // 1. Mobil Menü Aç / Kapat & Dış Tıklama Yönetimi
  const menuBtn = document.querySelector('.menu-toggle-btn, #hamburger');
  const mainNav = document.querySelector('.main-nav');

  if (menuBtn && mainNav) {
    // Mobil karartma perdesi (backdrop) - yoksa dinamik oluşturulur
    let backdrop = document.querySelector('.mobile-menu-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'mobile-menu-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }

    const openMenu = () => {
      menuBtn.classList.add('active');
      menuBtn.setAttribute('aria-expanded', 'true');
      mainNav.classList.add('active');
      backdrop.classList.add('active');
      document.body.classList.add('menu-open');
    };

    const closeMenu = () => {
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.classList.remove('menu-open');
    };

    let lastToggleTime = 0;
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const now = Date.now();
      if (now - lastToggleTime < 300) return; // Mobil cihazlardaki çift tıklama / ghost click önleyici
      lastToggleTime = now;

      if (mainNav.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Menü içi linklere tıklandığında menüyü kapat, link dışı boşluklara tıklamalarda yayılmayı engelle
    mainNav.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link) {
        closeMenu();
      } else {
        e.stopPropagation();
      }
    });

    // Karartılmış arka plana dokunulduğunda menüyü kapat
    backdrop.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
    });

    // Menü dışı tıklamalar için güvenli koruma
    document.addEventListener('click', (e) => {
      if (!mainNav.classList.contains('active')) return;
      if (e.target.closest('.menu-toggle-btn') || e.target.closest('.main-nav')) return;
      closeMenu();
    });

    // ESC tuşu ile kapatma (Erişilebilirlik)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // 2. WhatsApp Yönlendirme Motoru (Safari, Chrome, iOS & Android Uyumlu)
  window.sendWhatsAppMessage = function(text) {
    const encodedText = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodedText}`;

    const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isMobile) {
      window.location.href = url;
    } else {
      const win = window.open(url, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = url;
      }
    }
  };

  // 3. Teklif & Çağrı Formları (WhatsApp Entegrasyonlu)
  document.querySelectorAll('form#dispatch-quote-form, form#hero-quote-form, form.wp-contact-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const region = form.querySelector('[name="region_select"], #dispatch-region, #hero-region-select')?.value || 'Kurtköy / Kuzey Marmara';
      const vehicle = form.querySelector('[name="vehicle_type_select"], #dispatch-vehicle, #hero-vehicle-select')?.value || 'Binek Otomobil';
      const problem = form.querySelector('[name="problem_select"], #dispatch-problem, #hero-problem-select')?.value || 'Arıza / Hareket Etmiyor';
      const toLocation = form.querySelector('[name="to_location"]')?.value || '';
      const userPhone = form.querySelector('[name="user_phone"]')?.value || '';

      let message = `Merhaba Marmara Çekici,\nAcil oto çekici / kurtarıcıya ihtiyacım var:\n\n📍 Bulunduğum Bölge: ${region}\n🚗 Araç Türü: ${vehicle}\n⚠️ Durum: ${problem}`;
      if (toLocation) message += `\n🎯 Gidilecek Yer / Servis: ${toLocation}`;
      if (userPhone) message += `\n📞 İletişim Numaram: ${userPhone}`;
      message += `\n\nEn yakın oto çekicinizi yönlendirip sabit fiyat bilgisi verir misiniz? Konumumu iletiyorum:`;

      window.sendWhatsAppMessage(message);
    });
  });

  // 4. Doğrudan WhatsApp Konum Gönderme Butonları
  document.querySelectorAll('.btn-send-location, .sticky-whatsapp-btn, .btn-whatsapp-direct, .btn-whatsapp').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.closest('form')) return; // Form içi submit butonlarını atla
      e.preventDefault();
      const message = 'Merhaba Marmara Çekici, yolda kaldım. Bulunduğum konuma en yakın nöbetçi oto çekici / kurtarıcı aracınızı acil yönlendirir misiniz? Canlı konumumu iletiyorum:';
      window.sendWhatsAppMessage(message);
    });
  });

  // 5. CANLI BÖLGE ARAMA & FİLTRELEME MOTORU (SEARCH-FIRST UX)
  const searchInput = document.getElementById('region-search-input');
  const searchClearBtn = document.getElementById('region-search-clear');
  const regionCards = document.querySelectorAll('.region-photo-card, .region-square-card, .region-card-luxury, .region-card');
  const regionTabs = document.querySelectorAll('.region-filter-tabs .filter-tab-btn, .filter-tabs-wrap .filter-tab-btn');
  const noResultsBox = document.getElementById('no-search-results');
  const regionsContainer = document.getElementById('regions-container');
  const toggleAllRegionsBtn = document.getElementById('btn-toggle-all-regions');

  function filterRegions() {
    const query = searchInput ? searchInput.value.trim().toLocaleLowerCase('tr') : '';
    const activeTab = document.querySelector('.region-filter-tabs .filter-tab-btn.active, .filter-tabs-wrap .filter-tab-btn.active');
    const selectedCategory = activeTab ? (activeTab.getAttribute('data-filter') || activeTab.getAttribute('data-category') || 'all') : 'all';

    let visibleCount = 0;

    if (regionsContainer) {
      if (query.length > 0 || selectedCategory !== 'all') {
        regionsContainer.classList.add('is-expanded');
        if (toggleAllRegionsBtn) toggleAllRegionsBtn.style.display = 'none';
      } else {
        if (toggleAllRegionsBtn) {
          toggleAllRegionsBtn.style.display = '';
          const wasExpanded = toggleAllRegionsBtn.getAttribute('aria-expanded') === 'true';
          if (!wasExpanded) {
            regionsContainer.classList.remove('is-expanded');
          }
        }
      }
    }

    regionCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardTitle = (card.querySelector('.region-photo-title, .region-square-title, .region-card-name, .region-name, h3')?.textContent || '').toLocaleLowerCase('tr');
      const cardDesc = (card.querySelector('.region-photo-hotspots, .region-square-sub, .region-card-sub, .region-sub, p')?.textContent || '').toLocaleLowerCase('tr');
      const cardBadges = (card.querySelector('.region-photo-badge, .region-photo-category, .region-square-badges, .region-badges')?.textContent || '').toLocaleLowerCase('tr');

      const matchesCategory = (selectedCategory === 'all' || cardCategory === selectedCategory || cardCategory.includes(selectedCategory));
      const matchesQuery = query === '' || cardTitle.includes(query) || cardDesc.includes(query) || cardBadges.includes(query);

      if (matchesCategory && matchesQuery) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResultsBox) {
      noResultsBox.style.display = (visibleCount === 0) ? 'block' : 'none';
    }

    if (searchClearBtn) {
      if (query.length > 0) {
        searchClearBtn.classList.add('visible');
      } else {
        searchClearBtn.classList.remove('visible');
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterRegions);
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
        filterRegions();
      }
    });
  }

  if (regionTabs.length) {
    regionTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        regionTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        filterRegions();
      });
    });
  }

  // 6. CANLI GALERİ FİLTRELEME MOTORU (galeri.html)
  function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('[data-gallery-filter]');
    const galleryGrid = document.getElementById('gallery-grid');
    if (!filterBtns.length && !galleryGrid) return;

    const cards = document.querySelectorAll('#gallery-grid .gallery-item, #gallery-grid .photo-slot-card, .gallery-item, .photo-slot-card');

    function applyFilter(filter, activeBtn) {
      filterBtns.forEach(b => b.classList.remove('active'));
      if (activeBtn) activeBtn.classList.add('active');

      cards.forEach(card => {
        const cat = (card.getAttribute('data-category') || '').trim().toLowerCase();
        const target = (filter || 'all').toLowerCase();
        if (target === 'all' || cat === target || cat.includes(target)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const filter = btn.getAttribute('data-gallery-filter') || 'all';
        applyFilter(filter, btn);
      });
    });

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-gallery-filter]');
      if (!btn) return;
      e.preventDefault();
      const filter = btn.getAttribute('data-gallery-filter') || 'all';
      applyFilter(filter, btn);
    });
  }
  initGalleryFilter();

  // 7. Bölge Listesini Genişletme / Daraltma Butonu
  if (toggleAllRegionsBtn && regionsContainer) {
    toggleAllRegionsBtn.addEventListener('click', () => {
      const isExpanded = regionsContainer.classList.toggle('is-expanded');
      toggleAllRegionsBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      const icon = toggleAllRegionsBtn.querySelector('.toggle-icon');
      const text = toggleAllRegionsBtn.querySelector('.toggle-text');
      if (isExpanded) {
        if (icon) icon.textContent = '▲';
        if (text) text.textContent = 'Daha Az Bölge Göster';
      } else {
        if (icon) icon.textContent = '▼';
        if (text) text.textContent = 'Tüm Hizmet Bölgelerini Göster';
        const sectionHeader = document.querySelector('#hizmet-bolgelerimiz .section-header');
        if (sectionHeader) {
          sectionHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  // 8. Sıkça Sorulan Sorular (FAQ) Akordiyonu
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.faq-accordion-btn, .faq-trigger, .faq-question');
    if (!trigger) return;
    
    e.preventDefault();
    const item = trigger.closest('.faq-accordion-item, .faq-card, .faq-item');
    if (!item) return;

    const isOpen = item.classList.contains('active');
    const parentWrap = item.closest('.faq-accordion-wrap, .faq-wrapper, .faq-wrap, .faq-grid') || item.parentElement;

    if (parentWrap) {
      parentWrap.querySelectorAll('.faq-accordion-item.active, .faq-card.active, .faq-item.active').forEach(c => {
        c.classList.remove('active');
        const b = c.querySelector('.faq-accordion-btn, .faq-trigger, .faq-question');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    }

    if (!isOpen) {
      item.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });

  // HTML5 <details> akordiyonları için tekli açılma davranışı (Bölgeler ve Bloglar)
  document.addEventListener('toggle', (e) => {
    const details = e.target;
    if (!details || details.tagName !== 'DETAILS' || !details.classList.contains('faq-accordion-item')) return;
    if (details.open) {
      const parent = details.closest('.faq-accordion-list') || details.parentElement;
      if (parent) {
        parent.querySelectorAll('details.faq-accordion-item[open]').forEach(other => {
          if (other !== details) other.open = false;
        });
      }
    }
  }, true);

  // 9. Mobil Hero Teklif Formu Aç/Kapat
  const heroFormToggle = document.getElementById('hero-form-toggle');
  const heroFormCard = document.getElementById('hero-form-card');
  if (heroFormToggle && heroFormCard) {
    heroFormToggle.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        const isOpen = heroFormCard.classList.toggle('open');
        const toggleBtnText = heroFormCard.querySelector('.toggle-btn-text');
        if (toggleBtnText) {
          toggleBtnText.textContent = isOpen ? 'Formu Kapat' : 'Fiyat Hesapla';
        }
      }
    });
  }

  // 10. Galeri Lightbox Modalı (galeri.html)
  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox) {
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = lightbox.querySelector('.lightbox-close-btn');

    document.querySelectorAll('.gallery-item, .photo-slot-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;

        const src = card.getAttribute('data-lightbox-src') || card.querySelector('img')?.src;
        const title = card.getAttribute('data-lightbox-title') || card.querySelector('img')?.title || card.querySelector('.photo-caption-title')?.textContent;
        const desc = card.getAttribute('data-lightbox-desc') || card.querySelector('.photo-caption-desc')?.textContent;

        if (src && lightboxImg) {
          lightboxImg.src = src;
          if (lightboxTitle && title) lightboxTitle.textContent = title;
          if (lightboxDesc && desc) lightboxDesc.textContent = desc;
          lightbox.classList.add('active');
          lightbox.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 8. Mobilde 4 bölgeden sonrasını aç/kapat (Tümünü Göster)
  const toggleMobileRegionsBtn = document.getElementById('toggleMobileRegionsBtn');
  if (toggleMobileRegionsBtn) {
    toggleMobileRegionsBtn.addEventListener('click', () => {
      const hiddenCards = document.querySelectorAll('.region-photo-card.mobile-hidden-region');
      const isExpanded = hiddenCards.length > 0 && hiddenCards[0].classList.contains('is-expanded');
      hiddenCards.forEach(c => c.classList.toggle('is-expanded'));
      if (isExpanded) {
        toggleMobileRegionsBtn.innerHTML = '<span>Tüm Bölgeleri Göster (+14 Bölge) ▾</span>';
      } else {
        toggleMobileRegionsBtn.innerHTML = '<span>Daha Az Bölge Göster ▴</span>';
      }
    });
  }

  // 11. CANLI UYDUDAN GPS KONUM BELİRLEME (ONE-CLICK HIGHWAY DISPATCH)
  const gpsBtn = document.getElementById('btn-gps-autolocate');
  const gpsText = document.getElementById('btn-gps-text');

  if (gpsBtn) {
    gpsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (navigator.vibrate) navigator.vibrate(50);

      if (!('geolocation' in navigator)) {
        window.sendWhatsAppMessage('Merhaba Kuzey Marmara Çekici, yolda kaldım. Bulunduğum konuma en yakın acil oto çekiciyi yönlendirir misiniz? Canlı konumumu iletiyorum:');
        return;
      }

      const originalText = gpsText ? gpsText.textContent : 'UYDUDAN CANLI KONUM AT (1 TIKLA)';
      if (gpsText) gpsText.textContent = '🛰️ GPS Uydusuna Bağlanılıyor...';
      gpsBtn.style.opacity = '0.85';

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(6);
          const lng = position.coords.longitude.toFixed(6);
          const accuracy = Math.round(position.coords.accuracy || 15);
          const mapsUrl = `https://maps.google.com/?q=${lat},${lng}`;

          const msg = `Merhaba Kuzey Marmara Çekici,\nOtoyolda / yolda kaldım, acil çekiciye ihtiyacım var!\n\n🛰️ CANLI GPS KONUMUM (Hassasiyet: ±${accuracy}m):\n${mapsUrl}\n\nEn yakın nöbetçi kurtarıcınızı yönlendirip net sabit fiyat teyidi verir misiniz?`;

          if (gpsText) gpsText.textContent = '✅ Konum Alındı! Yönlendiriliyor...';
          setTimeout(() => {
            if (gpsText) gpsText.textContent = originalText;
            gpsBtn.style.opacity = '1';
          }, 2500);

          window.sendWhatsAppMessage(msg);
        },
        (error) => {
          if (gpsText) gpsText.textContent = originalText;
          gpsBtn.style.opacity = '1';
          const fallbackMsg = 'Merhaba Kuzey Marmara Çekici, otoyolda yolda kaldım. Lütfen en yakın çekicinizi yönlendirir misiniz? Canlı konumumu aşağıda iletiyorum:';
          window.sendWhatsAppMessage(fallbackMsg);
        },
        {
          enableHighAccuracy: true,
          timeout: 8000,
          maximumAge: 0
        }
      );
    });
  }

  // 12. İNTERAKTİF FİYAT & VARIŞ SÜRESİ HESAPLAMA MOTORU
  const calcPickup = document.getElementById('calc-pickup');
  const calcDropoff = document.getElementById('calc-dropoff');
  const calcVehicle = document.getElementById('calc-vehicle');
  const calcEtaVal = document.getElementById('calc-eta-val');
  const calcPriceVal = document.getElementById('calc-price-val');
  const calcBtnCall = document.getElementById('calc-btn-call');
  const calcBtnWhatsapp = document.getElementById('calc-btn-whatsapp');

  function updatePriceCalculation() {
    if (!calcPickup || !calcDropoff || !calcVehicle) return;

    const pickup = calcPickup.value;
    const dropoff = calcDropoff.value;
    const vehicle = calcVehicle.value;

    let eta = '10 - 15 Dakika';
    if (pickup === 'kurtkoy') eta = '8 - 12 Dakika';
    else if (pickup === 'kmo') eta = '10 - 14 Dakika';
    else if (pickup === 'tem') eta = '9 - 13 Dakika';
    else if (pickup === 'sabiha') eta = '10 - 12 Dakika';
    else if (pickup === 'gebze') eta = '12 - 15 Dakika';
    else if (pickup === 'dilovasi') eta = '15 - 18 Dakika';

    let priceText = "Telefonda Sabit Fiyat Garantisi";
    if (dropoff === 'sehirlerarasi') {
      priceText = "Özel İndirimli Şehirler Arası Km Tarifesi";
    } else {
      priceText = "Telefonda Net Sabit Fiyat Sözü";
    }

    if (calcEtaVal) calcEtaVal.textContent = eta;
    if (calcPriceVal) calcPriceVal.textContent = priceText;
  }

  if (calcPickup && calcDropoff && calcVehicle) {
    [calcPickup, calcDropoff, calcVehicle].forEach(el => {
      el.addEventListener('change', updatePriceCalculation);
    });

    if (calcBtnWhatsapp) {
      calcBtnWhatsapp.addEventListener('click', (e) => {
        e.preventDefault();
        const pickupText = calcPickup.options[calcPickup.selectedIndex].text;
        const dropoffText = calcDropoff.options[calcDropoff.selectedIndex].text;
        const vehicleText = calcVehicle.options[calcVehicle.selectedIndex].text;
        const pricePolicy = calcPriceVal ? calcPriceVal.textContent : 'Telefonda Sabit Fiyat';
        const etaText = calcEtaVal ? calcEtaVal.textContent : '10 - 15 Dk';

        const msg = `Merhaba Marmara Çekici,\nFiyat ve kurtarma talebimi iletiyorum:\n\n📍 Alınacak Yer: ${pickupText}\n🎯 Teslimat: ${dropoffText}\n🚗 Araç Türü: ${vehicleText}\n⏱️ Tahmini Varış: ${etaText}\n🏷️ Fiyat Talebi: ${pricePolicy}\n\nLütfen en yakın çekicinizi yönlendirip net sabit fiyatı teyit eder misiniz?`;
        window.sendWhatsAppMessage(msg);
      });
    }
  }

  // 13. GOOGLE ADS KAMPANYA PARAMETRESİ & ŞEHİR İÇİ / OTOYOL HIZLI ÇAĞRI MOTORU
  const urlParams = new URLSearchParams(window.location.search);
  const isGoogleAds = urlParams.has('gclid') || urlParams.get('utm_source') === 'google' || urlParams.has('gad_source') || urlParams.has('ads') || urlParams.has('utm_campaign');

  // İlçe veya anahtar kelime eşleştirme (Ads / Mobil Arama)
  const queryStr = (window.location.search + ' ' + window.location.pathname).toLowerCase();
  let matchedLocation = 'ANADOLU YAKASI & OTOYOL BÖLGESİ';
  if (queryStr.includes('pendik')) matchedLocation = 'PENDİK & E-5 ÇEVRESİ';
  else if (queryStr.includes('kartal')) matchedLocation = 'KARTAL & SAHİL / E-5';
  else if (queryStr.includes('maltepe')) matchedLocation = 'MALTEPE & BAĞDAT CAD.';
  else if (queryStr.includes('gebze')) matchedLocation = 'GEBZE & ORGANİZE SANAYİ';
  else if (queryStr.includes('cayirova') || queryStr.includes('çayırova')) matchedLocation = 'ÇAYIROVA & ŞEKERPINAR';
  else if (queryStr.includes('kurtkoy') || queryStr.includes('kurtköy')) matchedLocation = 'KURTKÖY & HAVAALANI YOLU';
  else if (queryStr.includes('tuzla')) matchedLocation = 'TUZLA & DERİ SANAYİ';
  else if (queryStr.includes('sabiha')) matchedLocation = 'SABİHA GÖKÇEN HAVALİMANI';
  else if (queryStr.includes('dilovasi') || queryStr.includes('dilovası')) matchedLocation = 'DİLOVASI & OSMANGAZİ KÖPRÜSÜ';
  else if (queryStr.includes('atasehir') || queryStr.includes('ataşehir')) matchedLocation = 'ATAŞEHİR & FSM BAĞLANTISI';

  if (isGoogleAds) {
    const heroSection = document.querySelector('.hero-section, .hero, .subpage-hero');
    if (heroSection) {
      const adsBanner = document.createElement('div');
      adsBanner.setAttribute('style', 'background: linear-gradient(90deg, #ea580c 0%, #b91c1c 100%); color: #fff; padding: 12px 18px; text-align: center; font-size: 0.92rem; font-weight: 800; letter-spacing: 0.02em; box-shadow: 0 4px 20px rgba(234,88,12,0.35); border-radius: 10px; margin: 0 auto 22px; max-width: 900px; border: 1px solid rgba(255,255,255,0.2);');
      adsBanner.innerHTML = `🚨 <strong>ACİL ÇAĞRI:</strong> ${matchedLocation} NÖBETÇİ ÇEKİCİMİZ <strong>10 DAKİKADA YANINIZDA!</strong> • Telefonda Sabit Fiyat Sözü • %100 Taşıma Kaskolu`;
      const heroContainer = heroSection.querySelector('.container');
      if (heroContainer) {
        heroContainer.insertBefore(adsBanner, heroContainer.firstChild);
      }
    }
  }

  // Mobil Haptik Titreşim Desteği
  document.querySelectorAll('a[href^="tel:"], .btn-call, .header-call-pill, .sticky-call-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (navigator.vibrate) navigator.vibrate(40);
    });
  });
});


