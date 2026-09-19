(() => {
  'use strict';

  const slides = Array.from(document.querySelectorAll('.slide'));
  if (!slides.length || typeof window.va !== 'function') return;

  const isLocal = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname) ||
    window.location.protocol === 'file:';
  if (isLocal) return;

  const sessionStartedAt = performance.now();
  const viewedSlides = new Set();
  let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains('active')));
  let slideStartedAt = performance.now();
  let highestBuild = visibleBuildCount(slides[activeIndex]);
  let maxSlideReached = activeIndex + 1;
  let completed = false;
  let engaged = false;
  let sessionClosed = false;

  function slideDetails(index) {
    const slide = slides[index];
    return {
      slide: index + 1,
      title: slide?.dataset.title || `Slide ${index + 1}`
    };
  }

  function visibleBuildCount(slide) {
    if (!slide) return 0;
    return Array.from(slide.querySelectorAll('[data-step].in')).reduce((max, element) => {
      return Math.max(max, Number(element.dataset.step) || 0);
    }, 0);
  }

  function track(name, data = {}) {
    window.va('event', { name, data });
  }

  function trackSlideView(index, direction) {
    const details = slideDetails(index);
    viewedSlides.add(details.slide);
    maxSlideReached = Math.max(maxSlideReached, details.slide);
    track('Slide Viewed', {
      ...details,
      direction,
      progress: Math.round((details.slide / slides.length) * 100)
    });

    if (details.slide === slides.length && !completed) {
      completed = true;
      track('Presentation Completed', {
        slides: slides.length,
        elapsed_seconds: Math.round((performance.now() - sessionStartedAt) / 1000)
      });
    }
  }

  function trackSlideDwell(reason) {
    if (!slideStartedAt) return;
    const seconds = Math.round((performance.now() - slideStartedAt) / 1000);
    slideStartedAt = 0;
    if (seconds < 1) return;
    track('Slide Dwell', {
      ...slideDetails(activeIndex),
      seconds,
      reason
    });
  }

  function trackSessionEnd(reason) {
    if (sessionClosed) return;
    sessionClosed = true;
    trackSlideDwell(reason);
    track('Presentation Session', {
      elapsed_seconds: Math.round((performance.now() - sessionStartedAt) / 1000),
      slides_viewed: viewedSlides.size,
      max_slide: maxSlideReached,
      completed
    });
  }

  track('Presentation Started', {
    entry_slide: activeIndex + 1,
    total_slides: slides.length
  });
  trackSlideView(activeIndex, 'entry');

  document.addEventListener('deck:slidechange', (event) => {
    const nextIndex = Number(event.detail?.index);
    if (!Number.isInteger(nextIndex) || !slides[nextIndex]) return;

    if (nextIndex !== activeIndex) {
      const direction = nextIndex > activeIndex ? 'forward' : 'backward';
      trackSlideDwell('navigation');
      activeIndex = nextIndex;
      slideStartedAt = performance.now();
      highestBuild = visibleBuildCount(slides[activeIndex]);
      trackSlideView(activeIndex, direction);

      if (!engaged) {
        engaged = true;
        track('Presentation Engaged', { first_action: 'slide_navigation' });
      }
      return;
    }

    const currentBuild = visibleBuildCount(slides[activeIndex]);
    if (currentBuild > highestBuild) {
      highestBuild = currentBuild;
      track('Build Revealed', {
        ...slideDetails(activeIndex),
        step: currentBuild
      });
      if (!engaged) {
        engaged = true;
        track('Presentation Engaged', { first_action: 'build_reveal' });
      }
    }
  });

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a.slide-source-link');
    if (!link) return;
    let destination = 'external';
    try {
      destination = new URL(link.href, window.location.href).hostname;
    } catch (_) {
      // Keep the privacy-safe fallback when the URL cannot be parsed.
    }
    track('Source Opened', {
      ...slideDetails(activeIndex),
      destination,
      label: link.textContent.trim().replace(/\s+/g, ' ').slice(0, 120)
    });
  }, true);

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      trackSlideDwell('hidden');
    } else if (!slideStartedAt) {
      slideStartedAt = performance.now();
    }
  });

  window.addEventListener('pagehide', () => trackSessionEnd('exit'));
})();
