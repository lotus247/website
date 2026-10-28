/* Calculators: clinical, fitness, pregnancy and nutrition tools. Estimates only; nothing is stored or sent. */
const fmt = d => d.toLocaleDateString('en-IN', {day:'numeric', month:'long', year:'numeric'});
const addDays = (d, n) => new Date(d.getTime() + n * 864e5);
const asDate = v => new Date(v + 'T00:00:00');
const kcal = x => Math.round(x).toLocaleString('en-IN');
const CATS = ['Health & Clinical', 'Fitness & Body', 'Pregnancy & Cycle', 'Nutrition & Macros'];
const fNum = (k, l, min, max, x) => Object.assign({k, l, t:'number', min, max}, x);
const fSel = (k, l, o) => ({k, l, t:'select', o});
const SEX = fSel('sex', 'Sex', [['m','Male'], ['f','Female']]);
const AGE = fNum('age', 'Age (years)', 15, 100), WT = fNum('w', 'Weight (kg)', 20, 300), HT = fNum('h', 'Height (cm)', 100, 250);
const ACT = fSel('act', 'Activity', [['1.2','Little or no exercise'], ['1.375','Light, 1 to 3 days a week'], ['1.55','Moderate, 3 to 5 days a week'], ['1.725','Hard, 6 to 7 days a week'], ['1.9','Very hard or physical job']]);
const LMP = {k:'lmp', l:'First day of last period', t:'date'}, CYC = fNum('cyc', 'Average cycle length (days)', 21, 40, {v:28});
const bmr = v => 10*v.w + 6.25*v.h - 5*v.age + (v.sex === 'm' ? 5 : -161);

/* Colour vision screening: dot plates drawn on a canvas */
const CV_CTRL = [['#d9c9a3','#cdb98a','#e3d7b5'], ['#2a5d9f','#3b73b8','#1f4a85']];
const CV_RG = [['#e07b3c','#d9653a','#eb9a5a','#c9553b'], ['#8fae4f','#a4bf5e','#7a9a46','#b3c76d']];
const CV_PLATES = [['12', CV_CTRL], ['8', CV_RG], ['29', CV_RG], ['57', CV_RG], ['74', CV_RG]];
function drawPlate(cv, num, pal){
  const s = 300, ctx = cv.getContext('2d'), m = document.createElement('canvas'); m.width = m.height = s;
  const mc = m.getContext('2d'); mc.fillStyle = '#000'; mc.fillRect(0, 0, s, s); mc.fillStyle = '#fff';
  mc.font = 'bold 190px Arial'; mc.textAlign = 'center'; mc.textBaseline = 'middle'; mc.fillText(num, s/2, s/2 + 8);
  const d = mc.getImageData(0, 0, s, s).data; ctx.clearRect(0, 0, s, s);
  for(let i = 0; i < 2200; i++){
    const x = Math.random()*s, y = Math.random()*s, r = 2.5 + Math.random()*4, dx = x - s/2, dy = y - s/2;
    if(dx*dx + dy*dy > 146*146) continue;
    const set = d[((y|0)*s + (x|0))*4] > 128 ? pal[1] : pal[0];
    ctx.fillStyle = set[(Math.random()*set.length)|0]; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  }
}
function initColorTest(el){
  const cv = el.querySelector('canvas'), inp = el.querySelector('input'), btn = el.querySelector('.cvt-next'), out = el.querySelector('.calc-out');
  let i = 0, score = 0;
  const show = () => { drawPlate(cv, CV_PLATES[i][0], CV_PLATES[i][1]); inp.value = ''; out.textContent = 'Plate ' + (i+1) + ' of ' + CV_PLATES.length; };
  btn.addEventListener('click', () => {
    if(i >= CV_PLATES.length){ i = 0; score = 0; cv.hidden = inp.parentNode.hidden = false; btn.textContent = 'Next plate'; show(); return; }
    if(i > 0 && inp.value.trim() === CV_PLATES[i][0]) score++;
    i++;
    if(i < CV_PLATES.length){ show(); return; }
    cv.hidden = inp.parentNode.hidden = true; btn.textContent = 'Restart test';
    out.innerHTML = score === 4 ? '<b>All four colour plates read correctly.</b> No sign of red-green difficulty on this screen.'
      : score >= 2 ? '<b>' + score + ' of 4 colour plates read correctly.</b> Some were missed, so a formal colour vision test is worth having.'
      : '<b>' + score + ' of 4 colour plates read correctly.</b> Several were missed. Please book an eye examination for a proper test.';
    out.innerHTML += '<br>This is a screening only. Screen brightness and settings affect colours, and it cannot diagnose or grade colour blindness.';
  });
  show();
}

const CALCS = [
  {id:'gfr', cat:CATS[0], ic:'drop', title:'GFR calculator', desc:'Estimates kidney function (eGFR) from blood creatinine, using the CKD-EPI 2021 equation.',
   f:[SEX, fNum('age', 'Age (years)', 18, 100), fNum('scr', 'Serum creatinine (mg/dL)', 0.2, 15)],
   run:v => { const f = v.sex === 'f', r = v.scr / (f ? 0.7 : 0.9);
     const g = 142 * Math.pow(Math.min(r,1), f ? -0.241 : -0.302) * Math.pow(Math.max(r,1), -1.2) * Math.pow(0.9938, v.age) * (f ? 1.012 : 1);
     const s = g>=90 ? 'G1 (normal or high)' : g>=60 ? 'G2 (mildly decreased)' : g>=45 ? 'G3a (mild to moderate decrease)' : g>=30 ? 'G3b (moderate to severe decrease)' : g>=15 ? 'G4 (severely decreased)' : 'G5 (kidney failure range)';
     return `<b>eGFR ${Math.round(g)} mL/min/1.73 m²</b><br>Stage category ${s}. Staging also needs urine tests and repeat results, so please review with a doctor.`; }},
  {id:'bmi', cat:CATS[0], ic:'pulse', title:'BMI calculator', desc:'Body mass index from height and weight, using Asian cut-offs (adults).',
   f:[fNum('w', 'Weight (kg)', 10, 300), fNum('h', 'Height (cm)', 80, 250)],
   run:v => { const b = v.w / Math.pow(v.h/100, 2), c = b<18.5 ? 'Underweight' : b<23 ? 'Healthy range' : b<25 ? 'Overweight (at risk)' : 'Obese range';
     return `<b>BMI ${b.toFixed(1)}</b>: ${c}.<br>Asian cut-offs: healthy 18.5 to 22.9, overweight 23 to 24.9, obese 25 and above.`; }},
  {id:'cvt', cat:CATS[0], ic:'eye', title:'Colour vision test', desc:'A quick screening of how accurately you see colours, using five dot plates.', custom:true, init:initColorTest,
   html:'<canvas width="300" height="300" style="width:100%;max-width:260px;border-radius:50%;display:block;margin:14px auto" role="img" aria-label="Colour dot plate containing a number"></canvas><div class="field"><label for="cvt-in">What number do you see? Leave blank if none.</label><input id="cvt-in" type="text" inputmode="numeric" maxlength="3" autocomplete="off"></div><div class="btn-row"><button class="btn btn-pink cvt-next" type="button">Next plate</button></div><div class="calc-out" aria-live="polite"></div>'},
  {id:'bp', cat:CATS[0], ic:'heart', title:'Blood pressure check', desc:'See which category a blood pressure reading falls in.',
   f:[fNum('s', 'Systolic, top number (mmHg)', 60, 260), fNum('d', 'Diastolic, bottom number (mmHg)', 30, 160)],
   run:v => { const c = v.s>=180 || v.d>=120 ? 'Very high. Seek urgent care if you have chest pain, severe headache, breathlessness or weakness' : v.s>=140 || v.d>=90 ? 'Stage 2 high blood pressure' : v.s>=130 || v.d>=80 ? 'Stage 1 high blood pressure' : v.s>=120 ? 'Elevated' : 'Normal';
     return `<b>${v.s}/${v.d} mmHg: ${c}</b><br>Uses American Heart Association bands. One reading is not a diagnosis; repeat on different days and see a doctor.`; }},
  {id:'a1c', cat:CATS[0], ic:'drop', title:'HbA1c to average glucose', desc:'Converts an HbA1c result to estimated average blood sugar.',
   f:[fNum('a', 'HbA1c (%)', 3, 20)],
   run:v => { const g = 28.7*v.a - 46.7, c = v.a < 5.7 ? 'in the usual healthy range' : v.a < 6.5 ? 'in the prediabetes range' : 'in the diabetes range';
     return `<b>Average glucose about ${Math.round(g)} mg/dL (${(g/18.016).toFixed(1)} mmol/L)</b><br>An HbA1c of ${v.a}% is ${c}. Please discuss your result with a doctor.`; }},

  {id:'bmr', cat:CATS[1], ic:'pulse', title:'BMR calculator', desc:'Calories your body burns at complete rest (Mifflin-St Jeor equation).',
   f:[SEX, AGE, WT, HT], run:v => `<b>BMR about ${kcal(bmr(v))} kcal a day</b><br>This is what your body needs just to stay alive, before any activity.`},
  {id:'bf', cat:CATS[1], ic:'clipboard', title:'Body fat calculator', desc:'Estimates body fat percentage from tape measurements (US Navy method).',
   f:[SEX, fNum('h', 'Height (cm)', 120, 230), fNum('nk', 'Neck (cm)', 20, 70), fNum('wa', 'Waist at navel (cm)', 40, 200), fNum('hp', 'Hip at widest point (cm), women only', 50, 200, {opt:true})],
   run:v => { const m = v.sex === 'm', L = Math.log10;
     if(v.wa <= v.nk) return 'Waist should be larger than neck. Please check the measurements.';
     if(!m && !v.hp) return 'Women: please enter the hip measurement.';
     const bf = m ? 495/(1.0324 - 0.19077*L(v.wa - v.nk) + 0.15456*L(v.h)) - 450 : 495/(1.29579 - 0.35004*L(v.wa + v.hp - v.nk) + 0.221*L(v.h)) - 450;
     if(!(bf > 0 && bf < 70)) return 'Please check the measurements.';
     const c = m ? (bf<6 ? 'essential fat' : bf<14 ? 'athletic' : bf<18 ? 'fit' : bf<25 ? 'average' : 'higher than recommended') : (bf<14 ? 'essential fat' : bf<21 ? 'athletic' : bf<25 ? 'fit' : bf<32 ? 'average' : 'higher than recommended');
     return `<b>Body fat about ${bf.toFixed(1)}%</b>: ${c}.<br>A tape-measure estimate can be off by a few percent.`; }},
  {id:'ibw', cat:CATS[1], ic:'users', title:'Ideal body weight', desc:'A reference weight for your height (Devine formula).',
   f:[SEX, fNum('h', 'Height (cm)', 120, 230)],
   run:v => { const b = (v.sex === 'm' ? 50 : 45.5) + 2.3 * Math.max(0, v.h/2.54 - 60);
     return `<b>Ideal body weight about ${b.toFixed(1)} kg</b><br>A healthy range is roughly ${Math.round(b*0.9)} to ${Math.round(b*1.1)} kg. BMI is the better everyday guide.`; }},
  {id:'whr', cat:CATS[1], ic:'users', title:'Waist-hip ratio', desc:'Checks where your body carries fat, a marker of heart and diabetes risk.',
   f:[SEX, fNum('wa', 'Waist (cm)', 40, 200), fNum('hp', 'Hip (cm)', 50, 200)],
   run:v => { const r = v.wa / v.hp, hi = v.sex === 'm' ? r >= 0.9 : r >= 0.85;
     return `<b>Waist-hip ratio ${r.toFixed(2)}</b>: ${hi ? 'abdominal obesity, with higher heart and diabetes risk' : 'within the lower-risk range'}.<br>WHO thresholds are 0.90 for men and 0.85 for women.`; }},

  {id:'due', cat:CATS[2], ic:'heart', title:'Pregnancy calculator', desc:'Estimated due date and how far along you are, from your last period.',
   f:[LMP, CYC],
   run:v => { const l = asDate(v.lmp), t = new Date(); t.setHours(0,0,0,0); const d = Math.floor((t - l)/864e5), edd = addDays(l, 280 + (v.cyc - 28));
     if(d < 0) return 'That date is in the future.';
     if(d > 300) return `Estimated due date: <b>${fmt(edd)}</b>. That date is long past, so please check it.`;
     const w = Math.floor(d/7);
     return `<b>Due date: ${fmt(edd)}</b><br>You are about ${w} weeks ${d % 7} days along (${w<14 ? 'first' : w<28 ? 'second' : 'third'} trimester). A scan confirms dating.`; }},
  {id:'ovu', cat:CATS[2], ic:'calendar', title:'Ovulation calculator', desc:'Likely ovulation date and fertile window.',
   f:[LMP, CYC],
   run:v => { const l = asDate(v.lmp), o = addDays(l, v.cyc - 14);
     return `<b>Likely ovulation: ${fmt(o)}</b><br>Fertile window: ${fmt(addDays(o,-5))} to ${fmt(addDays(o,1))}<br>Cycles vary, so treat this as an estimate.`; }},
  {id:'per', cat:CATS[2], ic:'calendar', title:'Period calculator', desc:'Predicts your next three periods and your next ovulation.',
   f:[LMP, CYC, fNum('len', 'Period length (days)', 2, 10, {v:5})],
   run:v => { const l = asDate(v.lmp);
     return '<b>Next expected periods</b><br>' + [1,2,3].map(i => { const s = addDays(l, v.cyc*i); return fmt(s) + ' to ' + fmt(addDays(s, v.len - 1)); }).join('<br>')
       + `<br>Ovulation in the next cycle is likely around ${fmt(addDays(l, v.cyc*2 - 14))}. See a doctor if cycles are often shorter than 21 or longer than 35 days, or you miss several periods.`; }},

  {id:'tdee', cat:CATS[3], ic:'clipboard', title:'TDEE calculator', desc:'Total calories you burn in a day, including activity.',
   f:[SEX, AGE, WT, HT, ACT],
   run:v => `<b>TDEE about ${kcal(bmr(v) * +v.act)} kcal a day</b><br>Resting BMR ${kcal(bmr(v))} kcal multiplied by an activity factor of ${v.act}.`},
  {id:'cal', cat:CATS[3], ic:'clipboard', title:'Calorie calculator', desc:'Daily calories to maintain, lose or gain weight.',
   f:[SEX, AGE, WT, HT, ACT, fSel('g', 'Goal', [['0','Maintain weight'], ['-500','Lose about 0.5 kg a week'], ['-1000','Lose about 1 kg a week'], ['500','Gain about 0.5 kg a week']])],
   run:v => { const t = bmr(v) * +v.act + +v.g, low = t < (v.sex === 'm' ? 1500 : 1200);
     return `<b>About ${kcal(t)} kcal a day</b> to reach your goal.` + (low ? '<br>That is a very low intake. Please see a doctor or dietitian before eating this little.' : '<br>Check your weight every two weeks and adjust. A dietitian can personalise this.'); }},
  {id:'wat', cat:CATS[3], ic:'drop', title:'Daily water intake', desc:'A rough guide to how much fluid you need in a day.',
   f:[WT, fSel('x', 'Day type', [['0','Mostly indoors, mild weather'], ['500','Active day or hot weather']])],
   run:v => `<b>About ${((35*v.w + +v.x)/1000).toFixed(1)} litres a day</b> from water, tea, milk and other drinks.<br>People with kidney, heart or liver conditions should follow their doctor's fluid advice.`}
];

const calcField = (c, f) => `<div class="field"><label for="${c.id}-${f.k}">${f.l}</label>` + (f.t === 'select'
  ? `<select id="${c.id}-${f.k}">${f.o.map(o => `<option value="${o[0]}">${o[1]}</option>`).join('')}</select>`
  : `<input id="${c.id}-${f.k}" type="${f.t}" ${f.min !== undefined ? `min="${f.min}" max="${f.max}" step="any"` : ''} ${f.v ? `value="${f.v}"` : ''}>`) + '</div>';
const calcCard = c => `<div class="card calc" data-calc="${c.id}"><span class="icowrap">${ico(c.ic)}</span><h3>${c.title}</h3><p>${c.desc}</p>` + (c.custom ? c.html
  : `<div class="fields" style="margin-top:14px">${c.f.map(f => calcField(c, f)).join('')}</div><div class="calc-out" aria-live="polite">Enter the values above to see your result.</div>`) + '</div>';
pages.calculators = () => `
<section class="band"><div class="wrap">
  <h1>Health calculators</h1>
  <p>${CALCS.length} quick tools for common health questions. Results are estimates to help you plan, not a diagnosis. Nothing you type here is stored or sent.</p>
  <div class="chips" id="calcChips" style="margin-top:20px"><button class="chip" aria-pressed="true" data-cat="all">All</button>${CATS.map(c => `<button class="chip" aria-pressed="false" data-cat="${c}">${c}</button>`).join('')}</div>
  ${CATS.map(cat => `<div class="cgroup" data-cat="${cat}"><h2 style="margin:34px 0 16px;font-size:1.5rem">${cat}</h2><div class="grid g2">${CALCS.filter(c => c.cat === cat).map(calcCard).join('')}</div></div>`).join('')}
  <p class="note" style="margin-top:26px">Questions about a result? <a href="#/appointment">Book a consultation</a> or read the <a href="#/library">health library</a>.</p>
</div></section>`;

function initCalcs(){
  document.querySelectorAll('.calc').forEach(el => {
    const c = CALCS.find(x => x.id === el.dataset.calc);
    if(c.custom){ c.init(el); return; }
    const out = el.querySelector('.calc-out'), idle = 'Enter the values above to see your result.';
    const go = () => { const v = {};
      for(const f of c.f){ const e = el.querySelector('#' + c.id + '-' + f.k);
        if(!e.value){ if(f.opt){ v[f.k] = 0; continue; } out.textContent = idle; return; }
        v[f.k] = f.t === 'number' ? +e.value : e.value;
        if(f.t === 'number' && (v[f.k] < f.min || v[f.k] > f.max)){ out.textContent = 'Please check the ' + f.l.toLowerCase() + '.'; return; } }
      out.innerHTML = c.run(v); };
    el.addEventListener('input', go); el.addEventListener('change', go); go();
  });
  const ch = document.getElementById('calcChips');
  if(ch) ch.addEventListener('click', e => { const b = e.target.closest('.chip'); if(!b) return;
    ch.querySelectorAll('.chip').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    document.querySelectorAll('.cgroup').forEach(g => g.style.display = (b.dataset.cat === 'all' || g.dataset.cat === b.dataset.cat) ? '' : 'none'); });
}
