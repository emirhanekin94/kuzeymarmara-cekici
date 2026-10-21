/**
 * KUZEY MARMARA OTO ÇEKİCİ & YOL YARDIM
 * Tel & WhatsApp: 0533 265 70 89
 * Modern Etkileşim, Canlı Arama, Lightbox & Navigasyon Motoru
 */

document.addEventListener('DOMContentLoaded', () => {
  const PHONE_NUMBER = '905332657089';
  const DISPLAY_PHONE = '0533 265 70 89';

  // 1. Mobil Menü Aç / Kapat
  const menuBtn = document.querySelector('.menu-toggle-btn, #hamburger');
  const mainNav = document.querySelector('.main-nav');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');

  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = menuBtn.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');

      if (mainNav) mainNav.classList.toggle('active');
      if (mobileDrawer) mobileDrawer.classList.toggle('active');
    });

    const closeMenu = () => {
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      if (mainNav) mainNav.classList.remove('active');
      if (mobileDrawer) mobileDrawer.classList.remove('active');
    };

    if (mainNav) {
      mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    }
    if (mobileDrawer) {
      mobileDrawer.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    }

    document.addEventListener('click', (e) => {
      const isNavActive = (mainNav && mainNav.classList.contains('active')) || 
                          (mobileDrawer && mobileDrawer.classList.contains('active'));

      if (isNavActive && !menuBtn.contains(e.target)) {
        if (mainNav && !mainNav.contains(e.target)) closeMenu();
        if (mobileDrawer && !mobileDrawer.contains(e.target)) closeMenu();
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

      let message = `Merhaba Kuzey Marmara Çekici,\nAcil oto çekici / kurtarıcıya ihtiyacım var:\n\n📍 Bulunduğum Bölge: ${region}\n🚗 Araç Türü: ${vehicle}\n⚠️ Durum: ${problem}`;
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
      const message = 'Merhaba Kuzey Marmara Çekici, yolda kaldım. Bulunduğum konuma en yakın oto çekici / yol yardım aracınızı acil yönlendirir misiniz? Canlı konumumu iletiyorum:';
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
  document.addEventListener('click', (e) => {
    const filterBtn = e.target.closest('[data-gallery-filter]');
    if (!filterBtn) return;
    e.preventDefault();

    document.querySelectorAll('[data-gallery-filter]').forEach(b => b.classList.remove('active'));
    filterBtn.classList.add('active');
    const filter = filterBtn.getAttribute('data-gallery-filter');

    const galleryCards = document.querySelectorAll('.gallery-item, .photo-slot-card');
    galleryCards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      if (filter === 'all' || category === filter || category.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });

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
});
