/* ---------------- Components ---------------- */
const waLink = (msg) => `https://wa.me/${HOSPITAL.wa}?text=${encodeURIComponent(msg)}`;

function docCard(d){
  return `<article class="doc">
    <div class="ph" aria-hidden="true">${d.featured ? "❀" : "+"}</div>
    <div class="body">
      <h3>${d.name}</h3>
      <p class="qual">${d.qual}</p>
      <p class="spec">${d.spec}</p>
      <p class="time">${d.days} · ${d.time}</p>
      <div class="acts">
        <a class="btn btn-line" href="#/doctor/${d.id}">View profile</a>
        <a class="btn btn-pink" href="#/appointment?doctor=${d.id}">Book</a>
      </div>
    </div>
  </article>`;
}

function apptForm(preDoctor, preClinic){
  const opts = DOCTORS.map(d=>`<option value="${d.id}" ${preDoctor===d.id?"selected":""}>${d.name} — ${d.spec}</option>`).join("");
  const locs = [{id:"hospital",n:"Lotus Hospital, Pogathota"}].concat(CLINICS.map(c=>({id:c.id,n:c.name})))
    .map(l=>`<option value="${l.id}" ${preClinic===l.id?"selected":""}>${l.n}</option>`).join("");
  return `<form class="appt" id="apptForm" novalidate>
    <div class="fields">
      <div class="field"><label for="f-name">Patient name</label><input id="f-name" name="name" required></div>
      <div class="field"><label for="f-mobile">Mobile number</label><input id="f-mobile" name="mobile" type="tel" required></div>
      <div class="field full"><label for="f-loc">Location</label><select id="f-loc" name="location">${locs}</select></div>
      <div class="field"><label for="f-email">Email address</label><input id="f-email" name="email" type="email"></div>
      <div class="field"><label for="f-doctor">Preferred doctor</label><select id="f-doctor" name="doctor"><option value="">No preference</option>${opts}</select></div>
      <div class="field"><label for="f-dept">Department</label><select id="f-dept" name="dept"><option value="">Select department</option>${DEPARTMENTS.map(x=>`<option>${x.name}</option>`).join("")}</select></div>
      <div class="field"><label for="f-date">Preferred date</label><input id="f-date" name="date" type="date"></div>
      <div class="field"><label for="f-time">Preferred time</label><select id="f-time" name="time"><option>10:00 AM – 2:00 PM</option><option>4:00 PM – 7:00 PM</option></select></div>
      <div class="field"><label for="f-reason">Reason for consultation</label><input id="f-reason" name="reason"></div>
      <div class="field full"><label for="f-msg">Message (optional)</label><textarea id="f-msg" name="message"></textarea></div>
      <div class="consent"><input type="checkbox" id="f-consent" required><label for="f-consent" style="font-weight:400">I agree that Lotus Hospital may contact me by phone, WhatsApp or email about this appointment request.</label></div>
    </div>
    <div class="btn-row">
      <button class="btn btn-pink" type="submit">Send request</button>
      <a class="btn btn-wa" id="waSend" href="${waLink('Appointment request from the Lotus Hospital website.')}" target="_blank" rel="noopener">Send on WhatsApp</a>
    </div>
    <p class="note" style="margin-top:14px">The hospital does not collect any payment online. Requests are sent to the hospital's WhatsApp and email, and the team confirms the slot by phone.</p>
    <div id="apptOk" hidden class="ok">Your appointment request has been received. Our team will contact you shortly to confirm the appointment.</div>
  </form>`;
}

