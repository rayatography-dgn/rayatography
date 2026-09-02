/**
 * Rayatography · Md. Jarif Uddin Rayat
 * Creative Director & Brand Designer Portfolio Engine
 * Smooth Canvas Frame Scrubbing, Dynamic Case Study System, and Interactions.
 */

(function () {
  'use strict';

  // --- Configuration ---
  const TOTAL_FRAMES = 240;
  const DAMPING = 0.08;
  const FRAME_PREFIX = 'frames/frame_';
  const FRAME_EXT = '.jpg';

  // --- Case Studies Dataset (Exact 6 Behance Portfolio Projects) ---
  const CASE_STUDIES = {
    '1': {
      id: 1,
      title: "Minimalist Strategic Typography Carousel",
      category: "Carousel Design · Typography",
      year: "2025",
      image: "assets/project_1.jpg?v=behance_v2",
      behanceUrl: "https://www.behance.net/gallery/254085987/Minimalist-Strategic-Typography-Carousel",
      summary: "Strategic editorial carousel design exploring brand identity systems versus simple logo design, formulated for maximum engagement and retention on social feeds.",
      challenge: "In noisy digital feeds, high-level strategic concepts like brand strategy are often lost in dense text or superficial design. The objective was to craft a scroll-stopping visual hierarchy that communicates deep strategic value in seconds.",
      approach: "Built on strict minimalist grid systems, bold contrast typography, and high-impact human editorial framing. Every slide delivers a single powerful axiom with seamless swipe continuity.",
      process: "1. Content architecture and hook refinement: 'Your Logo Isn't Your Brand'.\n2. High-contrast typography paired with razor-sharp editorial portrait photography.\n3. Swipe-retention mechanics and modular slide template formulation.",
      outcome: "A viral 10-slide educational carousel series published across creator networks and Behance.",
      impact: "Generated over 200,000 organic impressions, top featured status on Behance, and hundreds of client inquiries.",
      nextId: '2'
    },
    '2': {
      id: 2,
      title: "Creative Gadget Social Media Ads & Manipulation",
      category: "Social Media Design · Manipulation",
      year: "2025",
      image: "assets/project_2.jpg?v=behance_v2",
      behanceUrl: "https://www.behance.net/gallery/253219127/Creative-Gadget-Social-Media-Ads-Manipulation-Design",
      summary: "High-end photo manipulation, atmosphere rendering, and digital billboard mockups for smart electronics client NextGen Gadget BD.",
      challenge: "The client needed to market their smart LED night lights and RGB monitor light bars in a crowded e-commerce space where standard product white-background shots go unnoticed.",
      approach: "Conceived a surreal 'Nature Meets High-Tech' outdoor gallery setting under a starry twilight meadow. By juxtaposing sleek glowing electronics with organic floral landscapes, the product stands out as an art object.",
      process: "1. Concept sketches and perspective alignment across multi-light mockups.\n2. Atmospheric composite manipulation, realistic glow propagation, and depth map rendering.\n3. Multi-format campaign rollout for digital ads, billboard mockups, and social carousels.",
      outcome: "A cohesive, cinematic visual campaign delivered across 6 high-conversion ad creatives.",
      impact: "Boosted client campaign CTR by 4.2x and established a benchmark for premium gadget manipulation in Bangladesh.",
      nextId: '3'
    },
    '3': {
      id: 3,
      title: "Pyra Fintech Worldwide Payments Brand Identity",
      category: "Brand Identity · Fintech",
      year: "2025",
      image: "assets/project_3.jpg?v=behance_v2",
      behanceUrl: "https://www.behance.net/gallery/252769449/Pyra-Fintech-Worldwide-Payments-Brand-Identity",
      summary: "Comprehensive visual identity system, mobile app UI styling, and brand guidelines for a global digital banking platform.",
      challenge: "Building trust in digital payment systems requires an identity that feels modern, secure, and approachable across international markets and younger demographics.",
      approach: "Formulated the 'Moving in The Right Direction' brand architecture. Engineered a geometric 'P' monogram symbolizing forward momentum, paired with an electric neon lime and oceanic blue palette.",
      process: "1. Brand discovery and geometric grid construction for the primary logomark.\n2. Color theory development balancing institutional security (deep navy) with dynamic energy (neon lime).\n3. Comprehensive brand manual detailing mobile UI component states, digital debit cards, and app store graphics.",
      outcome: "A full-scale enterprise identity package and design system for multi-platform deployment.",
      impact: "Successfully positioned Pyra for investor readiness and international user onboarding.",
      nextId: '4'
    },
    '4': {
      id: 4,
      title: "Social Media Visual Identity & Carousel Design",
      category: "Social Media Design · Visual Identity",
      year: "2025",
      image: "assets/project_4.jpg?v=behance_v2",
      behanceUrl: "https://www.behance.net/gallery/244250105/Social-Media-Visual-Identity-Carousel-Design",
      summary: "Distinct retro-futuristic TV robot visual hook and educational carousel framework created for digital marketing educators.",
      challenge: "Overcoming standard webinar and course promotion fatigue with a distinctive, unforgettable visual character and storytelling universe.",
      approach: "Designed a 3D retro-futuristic CRT television cyborg character ('Master in 2026') as the recurring host, combined with warm orange tones and pixel-typography accents.",
      process: "1. Character design, 3D lighting setup, and materials choreography.\n2. Pixel art typography integration against contemporary editorial layouts.\n3. 8-slide educational masterclass structure designed for high save and bookmark rates.",
      outcome: "A complete visual identity and carousel kit setting a new visual benchmark in digital marketing education.",
      impact: "Surpassed 15,000 saves and established a unique personal brand aesthetic for the campaign.",
      nextId: '5'
    },
    '5': {
      id: 5,
      title: "Beanory Coffee Modern Minimal Brand Identity",
      category: "Brand Identity · Packaging",
      year: "2024",
      image: "assets/project_5.jpg?v=behance_v2",
      behanceUrl: "https://www.behance.net/gallery/244123531/Beanory-Coffee-Modern-Minimal-Brand-Identity-System",
      summary: "Warm, artisanal coffee brand identity encompassing custom logotype, bean motif patterns, packaging merchandise, and storefront signage.",
      challenge: "Beanory needed to position itself as a premium specialty coffee roastery that celebrates the artisanal bean-to-cup journey with warmth and sophistication.",
      approach: "Designed a flowing, custom hand-crafted logotype with integrated coffee bean and steam contours. Paired with a warm espresso, caramel, and oat milk color palette and tactile Kraft packaging.",
      process: "1. Custom typography crafting with bean curvature integration.\n2. Seamless geometric bean motif pattern design for cups, apparel, and tote bags.\n3. Storefront facade visualization, hanging signage, and social media templates.",
      outcome: "A cohesive 360° coffee brand identity ready for physical store launch and digital presence.",
      impact: "Client achieved 100% brand consistency across packaging, interior merchandise, and online storefront.",
      nextId: '6'
    },
    '6': {
      id: 6,
      title: "Gadget Social Media Ad Design & Creative Ads",
      category: "Campaign Design · Social Media",
      year: "2024",
      image: "assets/project_6.jpg?v=behance_v2",
      behanceUrl: "https://www.behance.net/gallery/243241899/Gadget-Social-Media-Ad-Design-Creative-Ads-Design",
      summary: "High-impact consumer electronics product ad campaigns featuring pro-grade specs layout and dynamic fashion art direction.",
      challenge: "Transforming dry technical smartphone specifications (120Hz, 48MP, unibody titanium) into an aspirational, luxury fashion statement.",
      approach: "Blended high-fashion editorial styling with crisp Apple-inspired typographic spec callouts. Using rich terracotta orange backdrops and dynamic model poses, the device becomes a lifestyle statement.",
      process: "1. Device color-matched art direction (titanium, desert gold, deep slate).\n2. Typographic pacing using bold display numbers and clean unibody callouts.\n3. Multi-channel advertising templates for Instagram Stories, feed posts, and retail banners.",
      outcome: "A premier 12-piece ad creative suite delivering seamless product and spec clarity.",
      impact: "Increased campaign engagement by 320% and established elevated brand perception for the retailer.",
      nextId: '1'
    }
  };

  // --- DOM Elements ---
  const canvas = document.getElementById('sequence-canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const loader = document.getElementById('loader');
  const loaderProgressBar = document.getElementById('loader-progress-bar');
  const loaderPercent = document.getElementById('loader-percent');
  const heroScrollPrompt = document.getElementById('hero-scroll-prompt');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const modal = document.getElementById('case-study-modal');
  const modalScrollBody = document.getElementById('modal-scroll-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');

  // --- State Variables ---
  const images = new Array(TOTAL_FRAMES);
  let loadedCount = 0;
  let targetProgress = 0;
  let currentProgress = 0;
  let lastRenderedIndex = -1;
  let isLoopRunning = false;
  let isFirstFrameDrawn = false;

  /**
   * Generates the zero-padded file path for a given frame index (1-based).
   */
  function getFramePath(index) {
    const padded = String(index).padStart(4, '0');
    return `${FRAME_PREFIX}${padded}${FRAME_EXT}`;
  }

  /**
   * Resizes canvas to devicePixelRatio for crisp Retina rendering.
   */
  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    if (lastRenderedIndex >= 0) {
      renderFrame(lastRenderedIndex, true);
    }
  }

  /**
   * Draws an image onto the canvas using "cover" aspect-ratio scaling.
   */
  function drawImageProp(image) {
    if (!image || !image.complete || image.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = image.naturalWidth;
    const ih = image.naturalHeight;

    const canvasAspect = cw / ch;
    const imageAspect = iw / ih;

    let renderW, renderH, offsetX, offsetY;

    if (canvasAspect > imageAspect) {
      renderW = cw;
      renderH = cw / imageAspect;
      offsetX = 0;
      offsetY = (ch - renderH) / 2;
    } else {
      renderH = ch;
      renderW = ch * imageAspect;
      offsetX = (cw - renderW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(image, offsetX, offsetY, renderW, renderH);
  }

  /**
   * Finds the nearest loaded frame if current target frame is buffering.
   */
  function findClosestLoadedFrame(index) {
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = index - offset;
      if (prev >= 0 && images[prev] && images[prev].complete && images[prev].naturalWidth > 0) {
        return images[prev];
      }
      const next = index + offset;
      if (next < TOTAL_FRAMES && images[next] && images[next].complete && images[next].naturalWidth > 0) {
        return images[next];
      }
    }
    return null;
  }

  /**
   * Renders the frame at the specified index.
   */
  function renderFrame(index, forceRedraw = false) {
    if (!forceRedraw && index === lastRenderedIndex) return;

    let img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) {
      img = findClosestLoadedFrame(index);
    }

    if (img && img.complete && img.naturalWidth > 0) {
      drawImageProp(img);
      lastRenderedIndex = index;
    }
  }

  /**
   * Smooth Lerp Physics Animation Loop.
   */
  function animationLoop() {
    const delta = targetProgress - currentProgress;
    currentProgress += delta * DAMPING;

    if (Math.abs(delta) < 0.00005) {
      currentProgress = targetProgress;
    }

    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round(currentProgress * (TOTAL_FRAMES - 1)))
    );

    renderFrame(frameIndex);

    if (Math.abs(targetProgress - currentProgress) > 0.00005) {
      requestAnimationFrame(animationLoop);
    } else {
      isLoopRunning = false;
    }
  }

  function startLoop() {
    if (!isLoopRunning) {
      isLoopRunning = true;
      requestAnimationFrame(animationLoop);
    }
  }

  /**
   * Scroll handler mapping page scroll position to the frame sequence.
   */
  function onScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;

    const scrollTop = Math.max(0, Math.min(window.scrollY, maxScroll));
    targetProgress = scrollTop / maxScroll;

    if (heroScrollPrompt) {
      heroScrollPrompt.style.opacity = scrollTop > 50 ? '0' : '0.8';
    }

    updateActiveNav();
    startLoop();
  }

  /**
   * Updates the active state of navigation links.
   */
  function updateActiveNav() {
    const scrollPos = window.scrollY + 250;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  /**
   * Preloads all 240 frames progressively.
   */
  function preloadFrames() {
    const onFrameLoad = (index) => {
      loadedCount++;
      const percent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

      if (loaderProgressBar) loaderProgressBar.style.width = `${percent}%`;
      if (loaderPercent) loaderPercent.textContent = `${percent}%`;

      if (index === 0 && !isFirstFrameDrawn) {
        isFirstFrameDrawn = true;
        renderFrame(0, true);
      }

      if (loadedCount >= TOTAL_FRAMES) {
        setTimeout(() => {
          if (loader) loader.classList.add('loaded');
          onScroll();
        }, 200);
      }
    };

    const firstImg = new Image();
    firstImg.src = getFramePath(1);
    firstImg.onload = () => onFrameLoad(0);
    firstImg.onerror = () => onFrameLoad(0);
    images[0] = firstImg;

    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i + 1);
      img.onload = () => onFrameLoad(i);
      img.onerror = () => onFrameLoad(i);
      images[i] = img;
    }
  }

  /**
   * Opens and renders the Case Study Modal.
   */
  function openCaseStudy(projectId) {
    const data = CASE_STUDIES[projectId];
    if (!data) return;

    modalScrollBody.innerHTML = `
      <div class="cs-header">
        <span class="cs-badge">${data.category} · ${data.year}</span>
        <h2 class="cs-title">${data.title}</h2>
        <p class="cs-summary">${data.summary}</p>
      </div>

      <img src="${data.image}" alt="${data.title}" class="cs-hero-image" />

      <div class="cs-section-block">
        <h3 class="cs-section-heading">The Challenge</h3>
        <p class="cs-text">${data.challenge}</p>
      </div>

      <div class="cs-section-block">
        <h3 class="cs-section-heading">The Approach & Creative Strategy</h3>
        <p class="cs-text">${data.approach}</p>
      </div>

      <div class="cs-section-block">
        <h3 class="cs-section-heading">Design Execution</h3>
        <p class="cs-text" style="white-space: pre-line;">${data.process}</p>
      </div>

      <div class="cs-section-block">
        <h3 class="cs-section-heading">Final Outcome</h3>
        <p class="cs-text">${data.outcome}</p>
      </div>

      <div class="cs-section-block">
        <h3 class="cs-section-heading">Impact & Results</h3>
        <p class="cs-text">${data.impact}</p>
      </div>

      <div class="cs-next-row" style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
        ${data.behanceUrl ? `
        <a href="${data.behanceUrl}" target="_blank" rel="noopener noreferrer" class="btn-behance-ext" style="display:inline-flex; align-items:center; gap:8px; padding:14px 24px; border-radius:999px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); color:#fff; text-decoration:none; font-size:14px; font-weight:500; transition:all 0.3s cubic-bezier(0.16, 1, 0.3, 1);">
          <span>Open on Behance</span>
          <span>↗</span>
        </a>` : ''}
        <button class="btn-next-project" onclick="window.RayatApp.openCaseStudy('${data.nextId}')">
          <span>Next Project</span>
          <span>→</span>
        </button>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalScrollBody.scrollTop = 0;
  }

  /**
   * Closes the Case Study Modal.
   */
  function closeCaseStudy() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /**
   * Smooth Anchor Navigation Handler.
   */
  function initSmoothNav() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /**
   * Sets up project cards event listeners.
   */
  function initProjectInteractions() {
    document.querySelectorAll('.project-item').forEach((item) => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-project-id');
        if (id) openCaseStudy(id);
      });
    });

    modalCloseBtn?.addEventListener('click', closeCaseStudy);
    modalBackdrop?.addEventListener('click', closeCaseStudy);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeCaseStudy();
      }
    });
  }

  // --- Initialization ---
  function init() {
    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    resizeCanvas();
    preloadFrames();
    initSmoothNav();
    initProjectInteractions();
    onScroll();
  }

  // Expose global methods for inline handlers
  window.RayatApp = {
    openCaseStudy,
    closeCaseStudy
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
