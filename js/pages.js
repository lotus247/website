/* ---------------- Pages ---------------- */
const pages = {};

pages.home = () => `
<section class="hero">
  <div class="wrap">
    <div>
      <p class="tagline">Multi-specialty care in Pogathota, Nellore</p>
      <h1>Specialist care for your whole family, close to home</h1>
      <p class="lead">Lotus Hospital brings together specialists in gynecology, orthopedics, cardiology, pediatrics, general medicine and more, with emergency care available around the clock.</p>
      <div class="btn-row">
        <a class="btn btn-pink" href="#/appointment">Book appointment</a>
        <a class="btn btn-line" href="tel:${HOSPITAL.tel}">Call ${HOSPITAL.phone}</a>
        <a class="btn btn-wa" href="${waLink('Hello Lotus Hospital, I would like to know more.')}" target="_blank" rel="noopener">WhatsApp</a>
        <a class="btn btn-line" href="${HOSPITAL.maps}" target="_blank" rel="noopener">Get directions</a>
      </div>
    </div>
    <div class="hero-card art">${heroArt()}</div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <dl class="facts">
      <div class="fact"><dt>Emergency</dt><dd>Open 24 / 7</dd></div>
      <div class="fact"><dt>OP timings</dt><dd>10 AM–2 PM · 4 PM–7 PM</dd></div>
      <div class="fact"><dt>Phone</dt><dd><a href="tel:${HOSPITAL.tel}">${HOSPITAL.phone}</a></dd></div>
      <div class="fact"><dt>Location</dt><dd>Pogathota, Nellore</dd></div>
      <div class="fact"><dt>Insurance</dt><dd>Cashless &amp; TPA support</dd></div>
    </dl>
  </div>
</section>

<section class="band stats"><div class="wrap"><div class="statgrid">
  <div class="stat"><b data-count="${new Date().getFullYear()-2014}" data-suffix="+">0</b><span>Years of care</span></div>
  <div class="stat"><b data-count="100">0</b><span>Hospital beds</span></div>
  <div class="stat"><b data-count="5">0</b><span>ICU beds</span></div>
  <div class="stat"><b data-count="9">0</b><span>Specialties</span></div>
  <div class="stat"><b data-count="3">0</b><span>Locations</span></div>
</div></div></section>

<section class="band">
  <div class="wrap">
    <div class="head"><h2>Everything you need, in one place</h2><p>Each section of the hospital has its own page.</p></div>
    <div class="grid g4">${[['users','Our doctors','Nine specialists with qualifications, photos and timings.','doctors'],['plus','Services','Twelve departments, what each treats and who to see.','services'],['pin','Our clinics','Veda Clinic and Sankalpa Clinic across Nellore.','clinics'],['book','Health library','Plain-language guides to common conditions.','library'],['calc','Calculators','BMI, due date, ovulation, calories and HbA1c.','calculators'],['shield','Insurance & TPA','Cashless support and the documents to bring.','insurance'],['image','Gallery','The hospital, our team and health camps.','gallery'],['calendar','Book appointment','Request a slot; we confirm by phone.','appointment']].map(([ic,t,d,r])=>`<a class="card tile-link" href="#/${r}"><span class="icowrap">${ico(ic)}</span><h3>${t}</h3><p>${d}</p></a>`).join("")}</div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="feature">
      <div class="photo pimg" style="aspect-ratio:3/4"><img src="${DOCTORS[0].photo}" alt="${DOCTORS[0].name}"></div>
      <div>
        <span class="badge">Women's health &amp; maternity</span>
        <h2>Dr. Ch. Veeramma</h2>
        <p style="color:var(--muted)">MBBS, MD (Obstetrics &amp; Gynecology), DGO (Bombay), FMAS</p>
        <p>With more than 19 years of clinical experience across government and private hospitals, Dr. Veeramma leads the hospital's obstetrics and gynecology department — from antenatal care and high-risk pregnancy to laparoscopic surgery and fertility treatment.</p>
        <div class="btn-row">
          <a class="btn btn-pink" href="#/appointment?doctor=veeramma">Book with Dr. Veeramma</a>
          <a class="btn btn-line" href="#/doctor/veeramma">Full profile</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="band soft">
  <div class="wrap" style="text-align:center">
    <h2>Need care right now?</h2>
    <p style="margin:0 auto 1em">The emergency room is open 24 hours a day, every day. OP runs 10 AM to 2 PM and 4 PM to 7 PM.</p>
    <div class="btn-row" style="justify-content:center"><a class="btn btn-pink" href="tel:${HOSPITAL.tel}">Call ${HOSPITAL.phone}</a><a class="btn btn-wa" href="${waLink('Hello Lotus Hospital')}" target="_blank" rel="noopener">WhatsApp</a><a class="btn btn-line" href="#/appointment">Book appointment</a></div>
  </div>
</section>`;

pages.about = () => `
<section class="band">
  <div class="wrap">
    <h1>About Lotus Hospital</h1>
    <p class="note">Established 2014 · Beside S2 Cinema Hall, Pogathota, Nellore</p>
    <p>Lotus Hospital is a 100-bed multi-specialty hospital serving families in and around Nellore. What began as a women's health and surgery practice under Dr. Ch. Veeramma has grown into a hospital with consultants across nine specialties, 5 ICU beds, an operation theatre and round-the-clock emergency care. Two outpatient clinics — <a href="#/clinics">Veda and Sankalpa</a> — extend the same care into other parts of the city. ${P("full hospital story from the hospital")}</p>
    <div class="grid g2" style="margin-top:28px">
      <div class="card"><h3>Our mission</h3><p>${P("mission statement")} — to give every patient in Nellore specialist care that is accurate, affordable and delivered with respect.</p></div>
      <div class="card"><h3>Our vision</h3><p>${P("vision statement")} — to be the hospital families in Nellore trust first, for everything from a routine check-up to a complex surgery.</p></div>
    </div>
  </div>
</section>

<section class="band soft">
  <div class="wrap">
    <div class="head"><h2>Facilities</h2><p>To be confirmed and expanded by the hospital.</p></div>
    <div class="grid g3">
      ${["24/7 emergency room","Operation theatre","Labour and delivery suite","Inpatient rooms and wards","Ultrasound and imaging","Laboratory services","Pharmacy","Ambulance service","Parking"].map(f=>`<div class="card"><h3>${f}</h3><p>${P("details")}</p></div>`).join("")}
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="head"><h2>Leadership</h2></div>
    <div class="grid g3">${DOCTORS.filter(d=>d.featured).map(docCard).join("")}
      <div class="card"><h3>Hospital administrator</h3><p>${P("name and designation")}</p></div>
      <div class="card"><h3>Nursing head</h3><p>${P("name and designation")}</p></div>
    </div>
  </div>
</section>`;

pages.doctors = () => `
<section class="band">
  <div class="wrap">
    <h1>Our doctors</h1>
    <p class="note">Consultation days and timings are confirmed when you book. Some doctors visit on fixed days.</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin:22px 0 16px">
      <input id="docSearch" placeholder="Search by doctor name" style="max-width:320px" aria-label="Search doctors by name">
    </div>
    <div class="chips" id="specChips">
      <button class="chip" aria-pressed="true" data-spec="all">All specialties</button>
      ${[...new Set(DOCTORS.map(d=>d.spec))].map(s=>`<button class="chip" aria-pressed="false" data-spec="${s}">${s}</button>`).join("")}
    </div>
    <div class="grid g4" id="docGrid" style="margin-top:26px">${DOCTORS.map(docCard).join("")}</div>
    <p id="noDocs" hidden class="note" style="margin-top:20px">No doctor matches that search. Try another name or choose a specialty.</p>
  </div>
</section>`;

pages.doctor = (id) => {
  const d = DOCTORS.find(x=>x.id===id);
  if(!d) return pages.notfound();
  return `
<section class="band">
  <div class="wrap">
    <p class="note"><a href="#/doctors">← All doctors</a></p>
    <div class="feature">
      <div class="photo pimg" style="aspect-ratio:3/4">${d.photo ? `<img src="${d.photo}" alt="${d.name}">` : "Doctor photo " + P("image")}</div>
      <div>
        ${d.featured?'<span class="badge">Leading women\'s health specialist</span>':''}
        <h1 style="font-size:clamp(1.7rem,3.6vw,2.4rem)">${d.name}</h1>
        <p style="color:var(--muted);margin-bottom:4px">${d.qual}</p>
        <p class="spec" style="color:var(--pink);font-weight:600">${d.desig || d.spec}</p><p class="note">${d.spec} · ${d.exp} experience · ${d.type}</p>
        <p>${d.bio}</p>
        <p style="color:var(--muted);font-size:.93rem">Consultation: ${d.days}, ${d.time}<br>Registration number: ${P("if the hospital wishes to display it")}<br>Languages: ${P("languages spoken")}</p>
        <div class="btn-row">
          <a class="btn btn-pink" href="#/appointment?doctor=${d.id}">Book appointment</a>
          <a class="btn btn-wa" href="${waLink('I would like to book an appointment with '+d.name.replace(/<[^>]*>/g,''))}" target="_blank" rel="noopener">WhatsApp enquiry</a>
        </div>
      </div>
    </div>
    <div style="margin-top:34px">
      <h2>Services offered</h2>
      <div class="grid g3">${d.services.map(s=>`<div class="card"><h3>${s}</h3><p>${P("short description")}</p></div>`).join("")}</div>
    </div>
  </div>
</section>`;
};

pages.clinics = () => `
<section class="band">
  <div class="wrap">
    <h1>Our clinics</h1>
    <p style="font-size:1.06rem">Alongside the main hospital in Pogathota, Lotus runs two outpatient clinics across Nellore. Both are staffed by Lotus Hospital doctors and follow the same clinical standards — so a consultation at either clinic connects straight back to the hospital if you need tests, surgery or admission.</p>
    <div class="grid g3" style="margin-top:26px">
      <div class="card"><h3>Lotus Hospital</h3><p>The main 100-bed hospital in Pogathota, with inpatient rooms, operation theatre, ICU and 24/7 emergency care.</p></div>
      <div class="card"><h3>Veda Clinic</h3><p>Outpatient consultations and follow-ups. ${P("locality")}</p></div>
      <div class="card"><h3>Sankalpa Clinic</h3><p>Outpatient consultations and follow-ups. ${P("locality")}</p></div>
    </div>
  </div>
</section>

${CLINICS.map((c,i)=>`
<section class="band ${i%2===0?'soft':''}" id="${c.id}">
  <div class="wrap">
    <div class="feature" style="grid-template-columns:1fr 1fr">
      <div>
        <span class="badge">${c.line}</span>
        <h2>${c.name}</h2>
        <p>${c.intro}</p>
        <h3 style="font-size:1rem;margin-top:22px">What the clinic handles</h3>
        <ul style="margin:0 0 18px;padding-left:20px;color:var(--muted);font-size:.95rem">
          ${c.focus.map(f=>`<li>${f}</li>`).join("")}
        </ul>
        <p class="note" style="margin:0">
          <strong style="color:var(--navy)">Address</strong> ${c.address}<br>
          <strong style="color:var(--navy)">Phone</strong> ${c.phone}<br>
          <strong style="color:var(--navy)">Timings</strong> ${c.timings}<br>
          <strong style="color:var(--navy)">Doctors here</strong> ${c.doctors}
        </p>
        <div class="btn-row">
          <a class="btn btn-pink" href="#/appointment?clinic=${c.id}">Book at ${c.name}</a>
          <a class="btn btn-wa" href="${waLink('I would like to book an appointment at '+c.name+'.')}" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
      <div class="photo" style="aspect-ratio:1/1">${c.name} photo ${P("clinic image")}</div>
    </div>
  </div>
</section>`).join("")}

<section class="band">
  <div class="wrap">
    <div class="head"><h2>Which one should I go to?</h2></div>
    <details><summary>I need a consultation or a follow-up</summary><p>Any of the three locations works. Pick whichever is closest to you, then check that the doctor you want consults there on that day.</p></details>
    <details><summary>I need surgery, delivery or admission</summary><p>These happen at the main Lotus Hospital in Pogathota, where the theatre, labour suite, ICU and inpatient rooms are.</p></details>
    <details><summary>It is an emergency</summary><p>Go straight to Lotus Hospital, Pogathota, or call <a href="tel:${HOSPITAL.tel}">${HOSPITAL.phone}</a>. The clinics do not run emergency services.</p></details>
    <details><summary>Are my records shared between the clinics?</summary><p>${P("record-sharing process")}</p></details>
  </div>
</section>`;

pages.services = () => `
<section class="band">
  <div class="wrap">
    <h1>Services and departments</h1>
    <p>Lotus Hospital is a 100-bed multi-specialty hospital with twelve departments under one roof. Each department below lists what it treats and the consultants you can see.</p>
    <div class="btn-row"><a class="btn btn-pink" href="#/appointment">Book appointment</a><a class="btn btn-line" href="#/doctors">Meet the doctors</a><a class="btn btn-line" href="#/library">Health library</a></div>
    <div class="grid g2" style="margin-top:28px">
      ${DEPARTMENTS.map(d=>{const i=DEPT_INFO[d.name]||{docs:[],treats:[]};return `<div class="card"><span class="icowrap">${ico(DEPT_IC[d.name])}</span><h3>${d.name}</h3><p>${d.desc}</p><ul class="tl">${i.treats.map(t=>`<li>${t}</li>`).join("")}</ul><p class="note" style="margin-top:12px">Consultants: ${i.docs.map(id=>{const x=DOCTORS.find(y=>y.id===id);return `<a href="#/doctor/${id}">${x.name}</a>`}).join(", ")}</p><div class="btn-row" style="margin-top:12px"><a class="btn btn-line" href="#/appointment">Book</a></div></div>`}).join("")}
    </div>
  </div>
</section>

<section class="band soft">
  <div class="wrap">
    <div class="head"><h2>Women's health and maternity</h2><p>The full range of obstetrics, gynecology and laparoscopic services carried over from the existing site.</p></div>
    <div class="grid g3">${WOMENS.map(s=>`<div class="card"><h3 style="font-size:1rem">${s}</h3></div>`).join("")}</div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="head"><h2>Common questions</h2></div>
    <details><summary>Do I need an appointment to see a doctor?</summary><p>Walk-in consultations are possible during OP hours, but booking ahead means less waiting. ${P("hospital policy")}</p></details>
    <details><summary>How far in advance should I book?</summary><p>${P("advance notice required")}</p></details>
    <details><summary>Is emergency care available at night?</summary><p>Yes. The emergency room is open 24 hours a day, every day.</p></details>
    <details><summary>Can I reschedule or cancel a booking?</summary><p>${P("cancellation and rescheduling process")}</p></details>
  </div>
</section>`;

pages.insurance = () => `
<section class="band">
  <div class="wrap">
    <h1>Insurance and TPA</h1>
    <p>Lotus Hospital works with several insurance companies and third-party administrators for cashless treatment and reimbursement. Check the list below, then speak to the insurance desk before admission.</p>
    <div style="margin:22px 0"><input id="insSearch" placeholder="Search insurer or TPA" style="max-width:340px" aria-label="Search insurance providers"></div>
    <div class="tablewrap">
      <table id="insTable">
        <thead><tr><th>Insurance / TPA</th><th>Cashless</th><th>Contact person</th><th>Phone</th><th>Notes</th></tr></thead>
        <tbody>${INSURERS.map(i=>`<tr><td>${i.name}<br><span class="note">${i.tpa}</span></td><td class="${i.cashless==='Yes'?'yes':''}">${i.cashless}</td><td>${i.person}</td><td>${i.phone}</td><td>${i.note}</td></tr>`).join("")}</tbody>
      </table>
    </div>
    <p class="note" style="margin-top:14px">Full provider list to be supplied by the hospital, with logos where the insurer permits their use.</p>
  </div>
</section>

<section class="band soft">
  <div class="wrap">
    <div class="grid g2">
      <div class="card">
        <h3>Insurance desk</h3>
        <p>Contact person: ${P("name")}<br>Designation: ${P("designation")}<br>Phone: ${P("desk number")}<br>WhatsApp: ${P("number")}<br>Email: ${P("email")}<br>Desk timings: ${P("timings")}</p>
      </div>
      <div class="card">
        <h3>Documents to bring</h3>
        <p>Policy card or e-card · Photo ID proof · Doctor's referral or admission advice · Previous treatment records · ${P("any other documents")}</p>
      </div>
      <div class="card">
        <h3>Pre-authorization</h3>
        <p>${P("step-by-step pre-authorization process")} Approval usually takes ${P("approximate timeline")}.</p>
      </div>
      <div class="card">
        <h3>Please note</h3>
        <p>Cashless treatment and insurance approval depend on your policy, the insurer or TPA's approval, treatment eligibility and hospital process. Contact the insurance desk before admission.</p>
      </div>
    </div>
  </div>
</section>`;

pages.blogs = () => `
<section class="band">
  <div class="wrap">
    <h1>Health articles</h1>
    <p>Plain-language health information written and reviewed by the hospital's doctors.</p>
    <div class="grid g3" style="margin-top:26px">
      ${BLOGS.map(b=>`<article class="post"><p class="meta">${b.c} · ${b.d}</p><h3>${b.t}</h3><p class="note">Reviewed by ${P("doctor name")}</p><div class="btn-row" style="margin-top:12px"><a class="btn btn-line" href="#/blogs">Read article</a></div></article>`).join("")}
    </div>
    <p class="note" style="margin-top:22px">Every article will carry its author or reviewing doctor, the publishing date and a medical disclaimer.</p>
  </div>
</section>`;

pages.gallery = () => `
<section class="band">
  <div class="wrap">
    <h1>Gallery</h1>
    <p>Photographs of the hospital, our team and community health work. All images to be supplied by the hospital.</p>
    <div class="grid g3" style="margin-top:26px">
      ${["Hospital exterior","Reception","Waiting area","Consultation room","Patient rooms","Operation theatre","Labour and delivery area","Medical equipment","Doctors","Staff","Health camps","Awareness programs"].map(g=>`<figure style="margin:0"><div class="tile">${g} ${P("photo")}</div></figure>`).join("")}
    </div>
    <p class="note" style="margin-top:22px">Patient photographs and testimonials will be published only with written consent.</p>
  </div>
</section>`;

pages.contact = () => `
<section class="band">
  <div class="wrap">
    <h1>Contact us</h1>
    <div class="grid g2" style="margin-top:22px">
      <div>
        <div class="card" style="margin-bottom:18px">
          <h3>Lotus Hospital</h3>
          <p>${HOSPITAL.address}<br>
          Reception: <a href="tel:${HOSPITAL.tel}">${HOSPITAL.phone}</a><br>
          Emergency: ${P("24/7 emergency number")}<br>
          WhatsApp: <a href="${waLink('Hello Lotus Hospital')}" target="_blank" rel="noopener">${HOSPITAL.phone}</a><br>
          Email: <a href="mailto:${HOSPITAL.email}">${HOSPITAL.email}</a></p>
          <p style="margin:0"><strong>OP timings</strong> 10:00 AM–2:00 PM and 4:00 PM–7:00 PM<br><strong>Emergency</strong> 24 hours, all days</p>
          <div class="btn-row">
            <a class="btn btn-pink" href="#/appointment">Book appointment</a>
            <a class="btn btn-line" href="${HOSPITAL.maps}" target="_blank" rel="noopener">Get directions</a>
          </div>
        </div>
        <div class="tile" style="aspect-ratio:16/10">Google Map embed ${P("map embed code")}</div>
      </div>
      <div>
        <div class="card">
          <h3>Send a message</h3>
          <form id="contactForm" novalidate>
            <div class="fields" style="grid-template-columns:1fr">
              <div class="field"><label for="c-name">Your name</label><input id="c-name" required></div>
              <div class="field"><label for="c-phone">Mobile number</label><input id="c-phone" type="tel" required></div>
              <div class="field"><label for="c-email">Email</label><input id="c-email" type="email"></div>
              <div class="field"><label for="c-msg">Message</label><textarea id="c-msg"></textarea></div>
            </div>
            <div class="btn-row"><button class="btn btn-pink" type="submit">Send message</button></div>
            <div id="contactOk" hidden class="ok">Thank you. Your message has been received and the hospital team will get back to you.</div>
          </form>
        </div>
        <div class="card" style="margin-top:18px">
          <h3>Follow us</h3>
          <p>Facebook · Instagram · YouTube · Google Business Profile ${P("official links")}</p>
        </div>
      </div>
    </div>
  </div>
</section>`;

pages.appointment = (doctor, clinic) => `
<section class="band">
  <div class="wrap">
    <h1>Book an appointment</h1>
    <p>Send your details and the hospital team will call you to confirm the date and time. No payment is taken online.</p>
    <div style="max-width:820px;margin-top:24px">${apptForm(doctor||"", clinic||"hospital")}</div>
    <p class="note" style="margin-top:18px">Prefer to talk? Call <a href="tel:${HOSPITAL.tel}">${HOSPITAL.phone}</a> during OP hours, or message the hospital on WhatsApp any time.</p>
  </div>
</section>`;

pages.privacy = () => `
<section class="band"><div class="wrap" style="max-width:820px">
  <h1>Privacy policy</h1>
  <p class="note">Last updated ${P("date")}. Final wording to be approved by the hospital.</p>
  <h3>What we collect</h3><p>When you submit an appointment or contact form, we collect your name, mobile number, email address and the details you choose to share about your health concern.</p>
  <h3>How it is used</h3><p>These details are used only to contact you about your appointment or enquiry. They are shared with hospital staff involved in scheduling and care, and are not sold or given to advertisers.</p>
  <h3>Where it is stored</h3><p>Form submissions reach the hospital by WhatsApp and email. ${P("storage and retention details")}</p>
  <h3>Medical records</h3><p>This website does not hold medical records, test results or prescriptions. Hospital records are kept confidentially at the hospital.</p>
  <h3>Cookies and analytics</h3><p>The site uses basic analytics to understand how visitors use the pages. ${P("analytics details")}</p>
  <h3>Your choices</h3><p>To have your enquiry details removed, contact the hospital at <a href="mailto:${HOSPITAL.email}">${HOSPITAL.email}</a> or <a href="tel:${HOSPITAL.tel}">${HOSPITAL.phone}</a>.</p>
</div></section>`;

pages.disclaimer = () => `
<section class="band"><div class="wrap" style="max-width:820px">
  <h1>Medical disclaimer</h1>
  <p>The information on this website is provided for general health awareness. It is not a diagnosis, a prescription or a substitute for consulting a qualified doctor.</p>
  <p>Do not delay seeking medical advice because of something you have read here. If you have a medical emergency, call <a href="tel:${HOSPITAL.tel}">${HOSPITAL.phone}</a> or go to the nearest emergency room immediately.</p>
  <p>Treatment outcomes differ from person to person. Anything described on this site as a service or treatment is offered after a doctor examines you and confirms it is appropriate for your condition.</p>
  <p>Articles are reviewed by the hospital's doctors before publishing, but medical knowledge changes. Where an article is dated, it reflects what was understood at that time.</p>
  <p>Patient photographs, testimonials and reviews appear only with written consent.</p>
</div></section>`;

pages.notfound = () => `
<section class="band"><div class="wrap">
  <h1>Page not found</h1>
  <p>That page does not exist yet. Try the <a href="#/">home page</a> or <a href="#/doctors">our doctors</a>.</p>
</div></section>`;

