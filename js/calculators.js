/* Calculators: BMI, due date, ovulation, daily calories, HbA1c. Estimates only. */
const fmt = d => d.toLocaleDateString('en-IN', {day:'numeric', month:'long', year:'numeric'});
const addDays = (d, n) => new Date(d.getTime() + n * 864e5);
const asDate = v => new Date(v + 'T00:00:00');
const CYC = {k:'cyc', l:'Average cycle length (days)', t:'number', min:21, max:40, v:28};
const LMP = {k:'lmp', l:'First day of last period', t:'date'};
const CALCS = [
  {id:'bmi', ic:'pulse', title:'BMI calculator', desc:'Body mass index from height and weight, using Asian cut-offs.',
   f:[{k:'w', l:'Weight (kg)', t:'number', min:10, max:300}, {k:'h', l:'Height (cm)', t:'number', min:80, max:250}],
   run:v => { const b = v.w / Math.pow(v.h/100, 2); const c = b<18.5 ? 'Underweight' : b<23 ? 'Healthy range' : b<25 ? 'Overweight (at risk)' : 'Obese range';
     return `<b>BMI ${b.toFixed(1)}</b>: ${c}.<br>Asian cut-offs: healthy 18.5 to 22.9, overweight 23 to 24.9, obese 25 and above.`; }},
  {id:'due', ic:'heart', title:'Pregnancy due date', desc:'Estimated due date and how far along you are, from your last period.',
   f:[LMP, CYC],
   run:v => { const l = asDate(v.lmp), t = new Date(); t.setHours(0,0,0,0); const d = Math.floor((t - l) / 864e5), edd = addDays(l, 280 + (v.cyc - 28));
     if(d < 0) return 'That date is in the future.';
     if(d > 300) return `Estimated due date: <b>${fmt(edd)}</b>. That date is long past, so please check it.`;
     const w = Math.floor(d / 7);
     return `<b>Due date: ${fmt(edd)}</b><br>You are about ${w} weeks ${d % 7} days along (${w<14 ? 'first' : w<28 ? 'second' : 'third'} trimester). A scan confirms dating.`; }},
  {id:'ovu', ic:'calendar', title:'Ovulation and fertile window', desc:'Your likely fertile days and next period date.',
   f:[LMP, CYC],
   run:v => { const l = asDate(v.lmp), o = addDays(l, v.cyc - 14);
     return `<b>Likely ovulation: ${fmt(o)}</b><br>Fertile window: ${fmt(addDays(o,-5))} to ${fmt(addDays(o,1))}<br>Next period expected: ${fmt(addDays(l, v.cyc))}. Cycles vary, so treat this as an estimate.`; }},
  {id:'cal', ic:'clipboard', title:'Daily calorie needs', desc:'Resting and maintenance calories using the Mifflin-St Jeor formula.',
   f:[{k:'sex', l:'Sex', t:'select', o:[['m','Male'],['f','Female']]}, {k:'age', l:'Age (years)', t:'number', min:15, max:100}, {k:'w', l:'Weight (kg)', t:'number', min:20, max:300}, {k:'h', l:'Height (cm)', t:'number', min:100, max:250},
      {k:'act', l:'Activity', t:'select', o:[['1.2','Little or no exercise'],['1.375','Light, 1 to 3 days a week'],['1.55','Moderate, 3 to 5 days a week'],['1.725','Hard, 6 to 7 days a week']]}],
   run:v => { const bmr = 10*v.w + 6.25*v.h - 5*v.age + (v.sex==='m' ? 5 : -161), m = bmr * +v.act;
     return `<b>Resting: about ${Math.round(bmr)} kcal a day</b><br>To maintain weight: about ${Math.round(m)} kcal. To lose weight slowly, a dietitian may suggest around ${Math.round(m-500)} kcal.`; }},
  {id:'a1c', ic:'drop', title:'HbA1c to average glucose', desc:'Converts an HbA1c result to estimated average blood sugar.',
   f:[{k:'a', l:'HbA1c (%)', t:'number', min:3, max:20}],
   run:v => { const g = 28.7 * v.a - 46.7, c = v.a < 5.7 ? 'in the usual healthy range' : v.a < 6.5 ? 'in the prediabetes range' : 'in the diabetes range';
     return `<b>Average glucose: about ${Math.round(g)} mg/dL (${(g/18.016).toFixed(1)} mmol/L)</b><br>An HbA1c of ${v.a}% is ${c}. Please discuss your result with a doctor.`; }}
];
const calcField = (c, f) => `<div class="field"><label for="${c.id}-${f.k}">${f.l}</label>` + (f.t === 'select'
  ? `<select id="${c.id}-${f.k}">${f.o.map(o => `<option value="${o[0]}">${o[1]}</option>`).join('')}</select>`
  : `<input id="${c.id}-${f.k}" type="${f.t}" ${f.min ? `min="${f.min}" max="${f.max}"` : ''} ${f.v ? `value="${f.v}"` : ''}>`) + '</div>';
pages.calculators = () => `
<section class="band"><div class="wrap">
  <h1>Health calculators</h1>
  <p>Quick tools for common questions. Results are estimates to help you plan, not a diagnosis. Nothing you type here is stored or sent.</p>
  <div class="grid g2" style="margin-top:26px">${CALCS.map(c => `<div class="card calc" data-calc="${c.id}"><span class="icowrap">${ico(c.ic)}</span><h3>${c.title}</h3><p>${c.desc}</p><div class="fields" style="margin-top:14px">${c.f.map(f => calcField(c, f)).join('')}</div><div class="calc-out" aria-live="polite">Enter the values above to see your result.</div></div>`).join('')}</div>
  <p class="note" style="margin-top:22px">Questions about a result? <a href="#/appointment">Book a consultation</a> or read the <a href="#/library">health library</a>.</p>
</div></section>`;
function initCalcs(){
  document.querySelectorAll('.calc').forEach(el => {
    const c = CALCS.find(x => x.id === el.dataset.calc), out = el.querySelector('.calc-out');
    const go = () => { const v = {};
      for(const f of c.f){ const e = el.querySelector('#' + c.id + '-' + f.k);
        if(!e.value){ out.textContent = 'Enter the values above to see your result.'; return; }
        v[f.k] = f.t === 'number' ? +e.value : e.value;
        if(f.t === 'number' && (v[f.k] < f.min || v[f.k] > f.max)){ out.textContent = 'Please check the ' + f.l.toLowerCase() + '.'; return; } }
      out.innerHTML = c.run(v); };
    el.addEventListener('input', go); el.addEventListener('change', go); go();
  });
}
