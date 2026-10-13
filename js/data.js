/* ---------------- Site data (placeholders marked for the hospital to fill) ---------------- */
const HOSPITAL = {
  phone:"+91 95339 98838", tel:"+919533998838", wa:"919533998838",
  email:"chilukotim@gmail.com",
  address:"Pogathota, Nellore, Andhra Pradesh – 524001",
  maps:"https://maps.app.goo.gl/umTAkFe9sG36kNdS8"
};
const P = t => `<span class="ph-tag">&lt;add ${t}&gt;</span>`;

const DOCTORS = [
  { id:"veeramma", name:"Dr. Ch. Veeramma", qual:"MBBS, MD (OBG), DGO (Bombay), FMAS",
    spec:"Obstetrics & Gynecology", exp:"19+ years", type:"Full-time",
    days:"Monday – Saturday", time:"10:00 AM–2:00 PM, 4:00 PM–7:00 PM", featured:true,
    bio:"Dr. Ch. Veeramma is an obstetrician and gynecologist with over 19 years of clinical experience across government and private healthcare. She cares for women through every stage of life, with a particular focus on high-risk pregnancy, infertility and minimal access surgery.",
    services:["Antenatal and high-risk pregnancy care","Normal and painless deliveries","Laparoscopic gynecological surgery","Infertility evaluation and treatment","PCOS and menstrual disorder management"] },
  { id:"ortho", name:"&lt;add doctor name&gt;", qual:"MBBS, MS (Orthopedics)", spec:"Orthopedics",
    exp:"&lt;add&gt;", type:"&lt;full-time / visiting&gt;", days:"&lt;add days&gt;", time:"&lt;add timings&gt;",
    bio:"Profile to be provided by the hospital.", services:["Joint pain and arthritis care","Fracture and trauma management","Sports injury treatment"] },
  { id:"cardio", name:"&lt;add doctor name&gt;", qual:"MBBS, MD, DM (Cardiology)", spec:"Cardiology",
    exp:"&lt;add&gt;", type:"&lt;full-time / visiting&gt;", days:"&lt;add days&gt;", time:"&lt;add timings&gt;",
    bio:"Profile to be provided by the hospital.", services:["ECG and echo evaluation","Hypertension management","Heart failure follow-up"] },
  { id:"peds", name:"&lt;add doctor name&gt;", qual:"MBBS, MD (Pediatrics)", spec:"Pediatrics & Neonatology",
    exp:"&lt;add&gt;", type:"&lt;full-time / visiting&gt;", days:"&lt;add days&gt;", time:"&lt;add timings&gt;",
    bio:"Profile to be provided by the hospital.", services:["Newborn care","Childhood vaccination","Growth and nutrition advice"] },
  { id:"genmed", name:"&lt;add doctor name&gt;", qual:"MBBS, MD (General Medicine)", spec:"General Medicine",
    exp:"&lt;add&gt;", type:"&lt;full-time / visiting&gt;", days:"&lt;add days&gt;", time:"&lt;add timings&gt;",
    bio:"Profile to be provided by the hospital.", services:["Fever and infection care","Thyroid and lifestyle disorders","Routine health evaluation"] },
  { id:"pulmo", name:"&lt;add doctor name&gt;", qual:"MBBS, MD (Pulmonology)", spec:"Pulmonology",
    exp:"&lt;add&gt;", type:"&lt;full-time / visiting&gt;", days:"&lt;add days&gt;", time:"&lt;add timings&gt;",
    bio:"Profile to be provided by the hospital.", services:["Asthma and COPD care","Chronic cough evaluation","Pulmonary function testing"] },
  { id:"diab", name:"&lt;add doctor name&gt;", qual:"MBBS, &lt;add qualification&gt;", spec:"Diabetology",
    exp:"&lt;add&gt;", type:"&lt;full-time / visiting&gt;", days:"&lt;add days&gt;", time:"&lt;add timings&gt;",
    bio:"Profile to be provided by the hospital.", services:["Diabetes management","Diabetic foot care","Diet and insulin counselling"] },
  { id:"neuro", name:"&lt;add doctor name&gt;", qual:"MBBS, MD, DM (Neurology)", spec:"Neurology",
    exp:"&lt;add&gt;", type:"&lt;full-time / visiting&gt;", days:"&lt;add days&gt;", time:"&lt;add timings&gt;",
    bio:"Profile to be provided by the hospital.", services:["Headache and migraine care","Seizure management","Stroke follow-up"] },
  { id:"eye", name:"&lt;add doctor name&gt;", qual:"MBBS, MS (Ophthalmology)", spec:"Ophthalmology",
    exp:"&lt;add&gt;", type:"&lt;full-time / visiting&gt;", days:"&lt;add days&gt;", time:"&lt;add timings&gt;",
    bio:"Profile to be provided by the hospital.", services:["Vision testing","Cataract evaluation","Diabetic eye screening"] }
];

const DEPARTMENTS = [
  {name:"Obstetrics & Gynecology", desc:"Pregnancy care, deliveries and complete women's health under one roof."},
  {name:"Orthopedics", desc:"Bone, joint and spine care, fracture management and sports injuries."},
  {name:"Cardiology", desc:"Heart check-ups, blood pressure care and ongoing cardiac follow-up."},
  {name:"Pediatrics & Neonatology", desc:"Newborn care, vaccination and treatment for growing children."},
  {name:"General Medicine", desc:"Everyday illnesses, infections and long-term condition management."},
  {name:"Pulmonology", desc:"Asthma, COPD, breathing difficulty and lung infection care."},
  {name:"Diabetology", desc:"Diabetes control, diet planning and prevention of complications."},
  {name:"Ophthalmology", desc:"Eye testing, cataract evaluation and diabetic eye screening."},
  {name:"Neurology", desc:"Headache, seizure, stroke and nerve-related treatment."},
  {name:"Laparoscopic Surgery", desc:"Minimally invasive surgery with smaller cuts and faster recovery."},
  {name:"Fertility & Infertility Care", desc:"Evaluation, counselling and treatment for couples planning a family."},
  {name:"Preventive Health Checkups", desc:"Packages that catch problems early, before symptoms appear."}
];

const CLINICS = [
  { id:"veda", name:"Veda Clinic", mark:"V",
    line:"Outpatient clinic under Lotus Hospital",
    intro:"Veda Clinic is an outpatient unit of Lotus Hospital, set up so patients can see a specialist for consultations, follow-ups and routine checks without coming to the main hospital. Cases that need admission, surgery or emergency care are referred directly to Lotus Hospital, and records move with the patient.",
    focus:["Specialist outpatient consultations","Routine and follow-up visits","Basic diagnostics and sample collection","Referral to Lotus Hospital when admission is needed"],
    address:"&lt;add Veda Clinic address&gt;",
    phone:"&lt;add clinic phone number&gt;",
    timings:"&lt;add consultation timings&gt;",
    doctors:"&lt;add doctors consulting here&gt;",
    maps:"" },
  { id:"sankalpa", name:"Sankalpa Clinic", mark:"S",
    line:"Outpatient clinic under Lotus Hospital",
    intro:"Sankalpa Clinic extends Lotus Hospital's care into another part of Nellore, offering consultations and ongoing treatment closer to where patients live. It runs to the same clinical protocols as the main hospital, with the same doctors visiting on fixed days.",
    focus:["Specialist outpatient consultations","Chronic condition follow-up","Preventive checks and counselling","Referral to Lotus Hospital for procedures"],
    address:"&lt;add Sankalpa Clinic address&gt;",
    phone:"&lt;add clinic phone number&gt;",
    timings:"&lt;add consultation timings&gt;",
    doctors:"&lt;add doctors consulting here&gt;",
    maps:"" }
];

const WOMENS = ["Antenatal care","High-risk pregnancy management","Normal and painless deliveries","Postnatal care and lactation support","Ultrasound scans and fetal monitoring","Cesarean section","Menstrual disorders treatment","PCOS / PCOD management","Fibroids, cysts and endometriosis treatment","Infertility evaluation and treatment","Contraceptive counseling","HPV vaccination and cervical cancer screening","Laparoscopic hysterectomy","Laparoscopic myomectomy","Laparoscopic ovarian cystectomy","Diagnostic laparoscopy","Tubal ligation / recanalization","Pre-marital and pre-conception counseling","Adolescent gynecology","Menopause clinic","Well-woman health checkups"];

const INSURERS = [
  {name:"&lt;add insurance company name&gt;", tpa:"&lt;add TPA&gt;", cashless:"Yes", person:"&lt;add contact person&gt;", phone:"&lt;add number&gt;", note:"Pre-authorization required"},
  {name:"&lt;add insurance company name&gt;", tpa:"&lt;add TPA&gt;", cashless:"Yes", person:"&lt;add contact person&gt;", phone:"&lt;add number&gt;", note:"Bring policy card and ID proof"},
  {name:"&lt;add insurance company name&gt;", tpa:"&lt;add TPA&gt;", cashless:"Reimbursement only", person:"&lt;add contact person&gt;", phone:"&lt;add number&gt;", note:"&lt;add restrictions, if any&gt;"},
  {name:"&lt;add insurance company name&gt;", tpa:"—", cashless:"Yes", person:"&lt;add contact person&gt;", phone:"&lt;add number&gt;", note:"&lt;add notes&gt;"}
];

const BLOGS = [
  {t:"What to expect in each trimester of pregnancy", c:"Pregnancy care", d:"&lt;add date&gt;"},
  {t:"PCOS and irregular periods: when to see a doctor", c:"Women's health", d:"&lt;add date&gt;"},
  {t:"Managing a high-risk pregnancy safely", c:"Pregnancy care", d:"&lt;add date&gt;"},
  {t:"Living well with type 2 diabetes", c:"Diabetology", d:"&lt;add date&gt;"},
  {t:"Simple habits that protect your heart", c:"Cardiology", d:"&lt;add date&gt;"},
  {t:"Knee and joint pain: home care and warning signs", c:"Orthopedics", d:"&lt;add date&gt;"}
];

