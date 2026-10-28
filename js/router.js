/* ---------------- Router ---------------- */
function render(){
  const raw = location.hash.replace(/^#\/?/,"") || "";
  const [pathPart, queryPart] = raw.split("?");
  const seg = pathPart.split("/").filter(Boolean);
  const q = new URLSearchParams(queryPart||"");
  const main = document.getElementById("main");
  let html;
  switch(seg[0]){
    case undefined: html = pages.home(); break;
    case "about": html = pages.about(); break;
    case "doctors": html = pages.doctors(); break;
    case "doctor": html = pages.doctor(seg[1]); break;
    case "services": html = pages.services(); break;
    case "clinics": html = pages.clinics(); break;
    case "library": html = pages.library(); break;
    case "calculators": html = pages.calculators(); break;
    case "insurance": html = pages.insurance(); break;
    case "blogs": html = pages.blogs(); break;
    case "gallery": html = pages.gallery(); break;
    case "contact": html = pages.contact(); break;
    case "appointment": html = pages.appointment(q.get("doctor"), q.get("clinic")); break;
    case "privacy": html = pages.privacy(); break;
    case "disclaimer": html = pages.disclaimer(); break;
    default: html = pages.notfound();
  }
  main.innerHTML = html;
  document.querySelectorAll('nav.main a').forEach(a=>{
    const target = a.getAttribute('href');
    a.classList.toggle('active', target === '#/'+(seg[0]||'') || (!seg[0] && target==='#/'));
  });
  document.getElementById('mainnav').classList.remove('open');
  document.getElementById('menuBtn').setAttribute('aria-expanded','false');
  window.scrollTo({top:0,behavior:'instant'});
  wireUp();
  if(typeof initCalcs==='function') initCalcs();
  if(typeof initLibrary==='function') initLibrary();
  if(typeof bindInteractiveMotion==='function') bindInteractiveMotion();
  if(typeof Anim!=='undefined') Anim.refresh();
}

function wireUp(){
  const apptForm = document.getElementById('apptForm');
  if(apptForm){
    apptForm.addEventListener('submit', e=>{
      e.preventDefault();
      if(!apptForm.checkValidity()){ apptForm.reportValidity(); return; }
      document.getElementById('apptOk').hidden = false;
      apptForm.querySelector('button[type=submit]').textContent = 'Request sent';
    });
    const build = () => {
      const g = id => (document.getElementById(id)||{}).value || '';
      const docSel = document.getElementById('f-doctor');
      const docName = docSel && docSel.selectedIndex>0 ? docSel.options[docSel.selectedIndex].text : 'No preference';
      const locSel = document.getElementById('f-loc');
      const locName = locSel ? locSel.options[locSel.selectedIndex].text : 'Lotus Hospital';
      const msg = `Appointment request — Lotus Hospital\nName: ${g('f-name')}\nMobile: ${g('f-mobile')}\nEmail: ${g('f-email')}\nLocation: ${locName}\nDoctor: ${docName}\nDepartment: ${g('f-dept')}\nDate: ${g('f-date')}\nTime: ${g('f-time')}\nReason: ${g('f-reason')}\nMessage: ${g('f-msg')}`;
      document.getElementById('waSend').href = `https://wa.me/${HOSPITAL.wa}?text=${encodeURIComponent(msg)}`;
    };
    apptForm.addEventListener('input', build);
    build();
  }

  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', e=>{
      e.preventDefault();
      if(!contactForm.checkValidity()){ contactForm.reportValidity(); return; }
      document.getElementById('contactOk').hidden = false;
    });
  }

  const search = document.getElementById('docSearch');
  const chips = document.getElementById('specChips');
  if(search && chips){
    let spec = 'all';
    const apply = () => {
      const term = search.value.trim().toLowerCase();
      const list = DOCTORS.filter(d=>{
        const plain = d.name.replace(/&lt;|&gt;/g,'').toLowerCase();
        return (spec==='all' || d.spec===spec) && plain.includes(term);
      });
      document.getElementById('docGrid').innerHTML = list.map(docCard).join('');
      document.getElementById('noDocs').hidden = list.length>0;
      if(typeof Anim!=='undefined') Anim.refresh();
    };
    search.addEventListener('input', apply);
    chips.addEventListener('click', e=>{
      const b = e.target.closest('.chip'); if(!b) return;
      spec = b.dataset.spec;
      chips.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed', String(c===b)));
      apply();
    });
  }

  const insSearch = document.getElementById('insSearch');
  if(insSearch){
    insSearch.addEventListener('input', ()=>{
      const t = insSearch.value.trim().toLowerCase();
      document.querySelectorAll('#insTable tbody tr').forEach(tr=>{
        tr.style.display = tr.textContent.toLowerCase().includes(t) ? '' : 'none';
      });
    });
  }
}

