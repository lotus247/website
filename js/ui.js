/* UI: mobile menu, theme switch, footer year, first render */
document.getElementById('menuBtn').addEventListener('click', function(){
  const nav = document.getElementById('mainnav');
  const open = nav.classList.toggle('open');
  this.setAttribute('aria-expanded', String(open));
});

const themeBtn = document.getElementById('themeBtn');
function setTheme(mode){
  document.documentElement.setAttribute('data-theme', mode);
  const dark = mode === 'dark';
  themeBtn.setAttribute('aria-checked', String(dark));
  document.getElementById('themeLabel').textContent = dark ? 'Light' : 'Dark';
  themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
}
themeBtn.addEventListener('click', ()=>{
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(next);
  try{ localStorage.setItem('lotus-theme', next); }catch(e){}
});
let startTheme = 'light';
try{
  const saved = localStorage.getItem('lotus-theme');
  if(saved) startTheme = saved;
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) startTheme = 'dark';
}catch(e){}
setTheme(startTheme);

function bindInteractiveMotion(){
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.card, .doc, .tile-link, .btn, .photo, .feature, .fact, .badge, .chip').forEach(el => {
    el.addEventListener('pointermove', e => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1200px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg) translateY(-2px)`;
      el.style.boxShadow = `${(x * 12).toFixed(2)}px ${(y * 12).toFixed(2)}px 24px rgba(28, 25, 65, 0.12)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
      el.style.boxShadow = '';
    });
  });
}

document.getElementById('yr').textContent = new Date().getFullYear();
window.addEventListener('hashchange', render);
window.addEventListener('load', bindInteractiveMotion);
render();
