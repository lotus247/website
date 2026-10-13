/* Motion layer: scroll reveals with stagger, count-up numbers, header shadow and scroll progress. */
const Anim = (() => {
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SEL = '.card,.doc,.post,.tile,.fact,.head,.feature,details,.tablewrap,.stat,form.appt';
  let io;

  function count(el){
    const end = +el.dataset.count, suf = el.dataset.suffix || '';
    if(reduce){ el.textContent = end + suf; return; }
    const t0 = performance.now(), dur = 1400;
    (function tick(t){
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * e) + suf;
      if(p < 1) requestAnimationFrame(tick);
    })(t0);
  }
  function show(el){
    el.classList.add('in');
    el.querySelectorAll('[data-count]').forEach(count);
    setTimeout(() => el.style.removeProperty('--rd'), 1200);
  }
  function refresh(){
    if(io) io.disconnect();
    const els = [...document.querySelectorAll('#main ' + SEL.split(',').join(',#main '))].filter(el => !el.classList.contains('in'));
    els.forEach(el => {
      el.classList.add('rv');
      const i = [...el.parentNode.children].indexOf(el);
      el.style.setProperty('--rd', Math.min(i, 7) * 0.07 + 's');
    });
    if(reduce || !('IntersectionObserver' in window)){ els.forEach(show); return; }
    io = new IntersectionObserver(entries => entries.forEach(en => {
      if(en.isIntersecting){ show(en.target); io.unobserve(en.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
  }

  const hdr = document.querySelector('header.site'), bar = document.getElementById('progress');
  function onScroll(){
    const y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    hdr.classList.toggle('scrolled', y > 8);
    bar.style.transform = 'scaleX(' + (h > 0 ? y / h : 0) + ')';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  return { refresh };
})();
