// Rose Arc Brow & Lash Studio: small progressive enhancements only.
// The site works fully without JavaScript.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Studio videos: load and play only while on screen; show controls instead
  // of autoplay for visitors who prefer reduced motion.
  var videos = document.querySelectorAll('.reel video');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (videos.length) {
    if (reduce || !('IntersectionObserver' in window)) {
      videos.forEach(function (v) { v.controls = true; });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var v = e.target;
          if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () { v.controls = true; }); }
          else { v.pause(); }
        });
      }, { threshold: 0.35 });
      videos.forEach(function (v) { io.observe(v); });
    }
  }

  // Brow effect on the Rose Arc logos: draws on hover (mouse) or tap (touch).
  function redraw(el) {
    el.classList.remove('is-brow');
    void el.offsetWidth; // restart the drawing
    el.classList.add('is-brow');
  }
  document.querySelectorAll('[data-brow]').forEach(function (el) {
    var timer, hovering = false;
    el.addEventListener('pointerenter', function (e) {
      if (e.pointerType !== 'mouse') return;
      hovering = true; clearTimeout(timer); redraw(el);
    });
    el.addEventListener('pointerleave', function (e) {
      if (e.pointerType !== 'mouse') return;
      hovering = false;
      el.classList.remove('is-brow');
    });
    el.addEventListener('click', function (e) {
      // The header logo links home; on the home page, scroll up instead of reloading.
      if (el.tagName === 'A') {
        var here = location.pathname.replace(/index\.html$/, '');
        var dest = el.pathname.replace(/index\.html$/, '');
        if (here === dest) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
        else return;
      }
      clearTimeout(timer); redraw(el);
      timer = setTimeout(function () { if (!hovering) el.classList.remove('is-brow'); }, 2200);
    });
  });

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
