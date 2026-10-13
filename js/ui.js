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

document.getElementById('yr').textContent = new Date().getFullYear();
window.addEventListener('hashchange', render);
render();
