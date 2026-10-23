/* Health library: condition guides and quick-reference values. All content must be approved by the concerned doctors before launch. */
const LIB = [
 {
  "t": "Diabetes",
  "cat": "Metabolic",
  "sum": "A long-term condition where blood sugar stays high because the body makes too little insulin or cannot use it well.",
  "signs": [
   "Frequent urination and excess thirst",
   "Unexplained weight loss or constant tiredness",
   "Slow-healing wounds, tingling feet, blurred vision"
  ],
  "help": [
   "Fasting sugar and HbA1c tests as advised, usually every 3 months",
   "Daily walking, less sugar and refined flour, smaller rice portions",
   "Yearly eye, kidney and foot check-ups"
  ]
 },
 {
  "t": "High blood pressure",
  "cat": "Heart",
  "sum": "Often silent, high blood pressure strains the heart, brain and kidneys over years.",
  "signs": [
   "Usually no symptoms",
   "Morning headache, dizziness or nosebleeds in severe cases"
  ],
  "help": [
   "Check pressure regularly, even when you feel well",
   "Cut down salt, stay active, avoid tobacco",
   "Take medicines daily and do not stop without advice"
  ]
 },
 {
  "t": "Heart attack warning signs",
  "cat": "Heart",
  "sum": "A blocked heart artery needs treatment within minutes to hours, so speed matters.",
  "signs": [
   "Chest pressure, tightness or pain, sometimes spreading to the arm, jaw or back",
   "Sweating, nausea, breathlessness",
   "In women and diabetics: unusual tiredness or upper-belly discomfort"
  ],
  "help": [
   "Do not wait or drive yourself: go to the emergency room at once",
   "Know your blood pressure, sugar and cholesterol",
   "Stop smoking and exercise regularly"
  ]
 },
 {
  "t": "Stroke",
  "cat": "Neurology",
  "sum": "A stroke happens when blood supply to part of the brain is cut off or a vessel bursts.",
  "signs": [
   "Face drooping on one side",
   "Arm or leg weakness",
   "Slurred speech, sudden confusion or loss of vision"
  ],
  "help": [
   "Remember FAST: Face, Arm, Speech, Time to act",
   "Note when symptoms began and come straight to emergency",
   "Control blood pressure, sugar and cholesterol"
  ]
 },
 {
  "t": "PCOS / PCOD",
  "cat": "Women's health",
  "sum": "A hormonal condition that can cause irregular periods, excess hair growth, acne and difficulty conceiving.",
  "signs": [
   "Periods that are late, missed or very infrequent",
   "Weight gain, acne, unwanted facial or body hair",
   "Trouble getting pregnant"
  ],
  "help": [
   "Healthy weight, regular exercise and balanced meals",
   "Ultrasound and hormone tests as advised",
   "Treatment is tailored to whether you want to conceive"
  ]
 },
 {
  "t": "Pregnancy danger signs",
  "cat": "Women's health",
  "sum": "Most pregnancies are safe, but some symptoms need urgent attention.",
  "signs": [
   "Vaginal bleeding or leaking fluid",
   "Severe headache, blurred vision or swelling of face and hands",
   "Reduced baby movements, fever, severe abdominal pain"
  ],
  "help": [
   "Go to the hospital straight away if any sign appears",
   "Attend every antenatal visit and take iron and folic acid as advised",
   "Book delivery planning early, especially in high-risk pregnancy"
  ]
 },
 {
  "t": "Asthma and COPD",
  "cat": "Lungs",
  "sum": "Long-term lung conditions that narrow the airways and cause breathlessness.",
  "signs": [
   "Wheezing, chest tightness or breathlessness",
   "Long-standing cough with phlegm",
   "Symptoms worse at night or with dust, smoke or cold air"
  ],
  "help": [
   "Use inhalers exactly as prescribed and carry the reliever",
   "Avoid smoke, dust and known triggers",
   "Seek care early if breathing worsens or inhaler does not help"
  ]
 },
 {
  "t": "Osteoarthritis",
  "cat": "Bones & joints",
  "sum": "Wear of joint cartilage, most common in the knees, hips and hands after middle age.",
  "signs": [
   "Knee or joint pain that worsens with activity",
   "Stiffness after rest, difficulty climbing stairs",
   "Swelling or a grinding feeling in the joint"
  ],
  "help": [
   "Keep weight in a healthy range and strengthen thigh muscles",
   "Physiotherapy and suitable pain relief under supervision",
   "See an orthopedic doctor if pain limits daily life"
  ]
 },
 {
  "t": "Cataract",
  "cat": "Eye",
  "sum": "Clouding of the eye lens, common with age and with diabetes, causing gradual blurred vision.",
  "signs": [
   "Cloudy or dim vision, glare from lights",
   "Frequent change in glasses power",
   "Colours looking faded"
  ],
  "help": [
   "Eye check-up once a year after 40, or sooner with diabetes",
   "Surgery replaces the cloudy lens when vision affects daily life",
   "Wear sunglasses outdoors"
  ]
 },
 {
  "t": "Newborn danger signs",
  "cat": "Child health",
  "sum": "Newborns can become unwell quickly, so know when not to wait.",
  "signs": [
   "Not feeding well or very sleepy",
   "Fast breathing, blue lips, fever or very cold body",
   "Yellow skin below the chest, fits or a bulging soft spot"
  ],
  "help": [
   "Go to the paediatric emergency immediately for any of these signs",
   "Breastfeed early and often, keep the baby warm",
   "Follow the vaccination schedule given by your paediatrician"
  ]
 },
 {
  "t": "Dengue",
  "cat": "Infection",
  "sum": "A mosquito-borne viral fever, more common in and after the monsoon.",
  "signs": [
   "High fever with severe headache and pain behind the eyes",
   "Body and joint pain, rash",
   "Warning signs: persistent vomiting, belly pain, bleeding gums, extreme weakness"
  ],
  "help": [
   "Rest, drink plenty of fluids and use paracetamol only; avoid ibuprofen and aspirin",
   "See a doctor early for blood counts",
   "Remove standing water and use mosquito protection"
  ]
 }
];

const REF = [
  ["Blood pressure","Below 120/80 mmHg","140/90 or higher on repeat readings"],
  ["Fasting blood sugar","Below 100 mg/dL","126 mg/dL or higher"],
  ["HbA1c","Below 5.7%","6.5% or higher"],
  ["BMI (Asian cut-offs)","18.5 to 22.9","25 or higher"],
  ["Haemoglobin (women)","12 g/dL or more","Below 12; below 11 in pregnancy"],
  ["Oxygen saturation","95% to 100%","Below 94%: seek care"]
];
pages.library = () => `
<section class="band"><div class="wrap">
  <h1>Health library</h1>
  <p>Plain-language guides to common conditions: what to look for and when to see a doctor. This is general information and does not replace an examination.</p>
  <div class="emg-box"><b>Go to the emergency room now for:</b> chest pain or pressure · sudden weakness, facial droop or slurred speech · severe breathing difficulty · seizures · heavy bleeding or reduced baby movements in pregnancy · a newborn who is blue, limp or not feeding. Call <a href="tel:${HOSPITAL.tel}">${HOSPITAL.phone}</a>.</div>
  <div style="margin:22px 0 14px"><input id="libSearch" placeholder="Search, for example sugar or chest pain" style="max-width:360px" aria-label="Search the health library"></div>
  <div class="chips" id="libChips"><button class="chip" aria-pressed="true" data-cat="all">All</button>${[...new Set(LIB.map(x=>x.cat))].map(c=>`<button class="chip" aria-pressed="false" data-cat="${c}">${c}</button>`).join("")}</div>
  <div id="libList" style="margin-top:22px">${LIB.map(x=>`<details data-cat="${x.cat}"><summary>${x.t} <span class="note">· ${x.cat}</span></summary><p>${x.sum}</p><h4 class="lh">Common signs</h4><ul class="tl">${x.signs.map(s=>`<li>${s}</li>`).join("")}</ul><h4 class="lh">What helps</h4><ul class="tl">${x.help.map(s=>`<li>${s}</li>`).join("")}</ul><div class="btn-row"><a class="btn btn-line" href="#/appointment">Book a consultation</a></div></details>`).join("")}</div>
  <p id="libNone" hidden class="note">Nothing matches that search.</p>
</div></section>
<section class="band soft"><div class="wrap">
  <div class="head"><h2>Quick reference values</h2><p>Typical adult values. Your doctor may set different targets for you.</p></div>
  <div class="tablewrap"><table><thead><tr><th>Measure</th><th>Usual healthy value</th><th>Needs attention</th></tr></thead><tbody>${REF.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table></div>
  <p class="note" style="margin-top:14px">Also see the <a href="#/calculators">calculators</a> and the <a href="#/disclaimer">medical disclaimer</a>. Content to be reviewed by the hospital's doctors before publishing.</p>
</div></section>`;

function initLibrary(){
  const s = document.getElementById('libSearch'); if(!s) return;
  let cat = 'all';
  const apply = () => { const q = s.value.trim().toLowerCase(); let n = 0;
    document.querySelectorAll('#libList details').forEach(d => { const ok = (cat==='all' || d.dataset.cat===cat) && d.textContent.toLowerCase().includes(q); d.style.display = ok ? '' : 'none'; if(ok) n++; });
    document.getElementById('libNone').hidden = n > 0; };
  s.addEventListener('input', apply);
  document.getElementById('libChips').addEventListener('click', e => { const b = e.target.closest('.chip'); if(!b) return; cat = b.dataset.cat;
    document.querySelectorAll('#libChips .chip').forEach(c => c.setAttribute('aria-pressed', String(c===b))); apply(); });
}
