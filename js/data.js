/* ---------------- Site data (placeholders marked for the hospital to fill) ---------------- */
const HOSPITAL = {
  phone:"+91 95339 98838", tel:"+919533998838", wa:"919533998838",
  email:"chilukotim@gmail.com",
  address:"Pogathota, Nellore, Andhra Pradesh – 524001",
  maps:"https://maps.app.goo.gl/umTAkFe9sG36kNdS8"
};
const P = t => `<span class="ph-tag">&lt;add ${t}&gt;</span>`;

const DOCTORS = [
 {
  "id": "veeramma",
  "name": "Dr. Ch. Veeramma",
  "qual": "MBBS, DGO, MD, FMAS",
  "desig": "Sr. Obstetrician & Gynecologist, Infertility Specialist, Laparoscopic Surgeon",
  "spec": "Obstetrics & Gynecology",
  "photo": "assets/doctors/veeramma.jpg",
  "exp": "19+ years",
  "type": "Full-time",
  "days": "&lt;add days&gt;",
  "time": "&lt;add timings&gt;",
  "bio": "Dr. Ch. Veeramma is a senior obstetrician and gynecologist with over 19 years of clinical experience across government and private healthcare. She cares for women at every stage of life, with a focus on high-risk pregnancy, infertility and laparoscopic surgery.",
  "services": [
   "Antenatal and high-risk pregnancy care",
   "Normal and painless deliveries",
   "Laparoscopic gynecological surgery",
   "Infertility evaluation and treatment",
   "PCOS and menstrual disorders"
  ],
  "featured": true
 },
 {
  "id": "prameela",
  "name": "Dr. Prameela",
  "qual": "MBBS, DGO",
  "desig": "Senior Obstetrician & Gynecologist Specialist",
  "spec": "Obstetrics & Gynecology",
  "photo": "assets/doctors/prameela.jpg",
  "exp": "&lt;add&gt;",
  "type": "&lt;full-time / visiting&gt;",
  "days": "&lt;add days&gt;",
  "time": "&lt;add timings&gt;",
  "bio": "Dr. Prameela is a senior obstetrician and gynecologist who works alongside Dr. Veeramma in the hospital's women's health and maternity department.",
  "services": [
   "Antenatal check-ups",
   "Delivery and postnatal care",
   "Menstrual and hormonal problems",
   "Contraceptive counselling"
  ]
 },
 {
  "id": "prashanthi",
  "name": "Dr. N V Prashanthi",
  "qual": "MBBS, MD (General Medicine), DM (Neurology), Gold Medalist",
  "desig": "Neurologist",
  "spec": "Neurology",
  "photo": "assets/doctors/prashanthi.jpg",
  "exp": "&lt;add&gt;",
  "type": "&lt;full-time / visiting&gt;",
  "days": "&lt;add days&gt;",
  "time": "&lt;add timings&gt;",
  "bio": "Dr. N V Prashanthi is a gold-medalist neurologist trained in general medicine and neurology, treating disorders of the brain, spinal cord and nerves.",
  "services": [
   "Stroke and seizure care",
   "Headache and migraine",
   "Neuropathy and nerve disorders",
   "Dizziness and memory concerns"
  ]
 },
 {
  "id": "kiran",
  "name": "Dr. G. Kiran Kumar",
  "qual": "MS (Ophthal), Fellowship in Phaco (Sankara Nethralaya, Chennai)",
  "desig": "Eye Specialist",
  "spec": "Ophthalmology",
  "photo": "assets/doctors/kiran.jpg",
  "exp": "&lt;add&gt;",
  "type": "&lt;full-time / visiting&gt;",
  "days": "&lt;add days&gt;",
  "time": "&lt;add timings&gt;",
  "bio": "Dr. G. Kiran Kumar is an eye surgeon who completed a phacoemulsification fellowship at Sankara Nethralaya, Chennai, and treats common and complex eye conditions.",
  "services": [
   "Cataract evaluation and phaco surgery",
   "Diabetic eye screening",
   "Glaucoma and retina check",
   "Vision testing"
  ]
 },
 {
  "id": "firoz",
  "name": "Dr. SK. Firoz",
  "qual": "MBBS, MD (General Medicine)",
  "desig": "General Physician & Consultant Diabetologist",
  "spec": "General Medicine & Diabetology",
  "photo": "assets/doctors/firoz.jpg",
  "exp": "&lt;add&gt;",
  "type": "&lt;full-time / visiting&gt;",
  "days": "&lt;add days&gt;",
  "time": "&lt;add timings&gt;",
  "bio": "Dr. SK. Firoz is a general physician and consultant diabetologist, caring for everyday illness as well as long-term conditions such as diabetes, thyroid disease and hypertension.",
  "services": [
   "Fever and infections",
   "Diabetes management",
   "Thyroid and blood pressure care",
   "Preventive health checkups"
  ]
 },
 {
  "id": "vennala",
  "name": "Dr. K. Vennala",
  "qual": "MBBS, DNB (Paed), PGPn (USA)",
  "desig": "Neonatologist & Paediatrician Specialist",
  "spec": "Paediatrics & Neonatology",
  "photo": "assets/doctors/vennala.jpg",
  "exp": "&lt;add&gt;",
  "type": "&lt;full-time / visiting&gt;",
  "days": "&lt;add days&gt;",
  "time": "&lt;add timings&gt;",
  "bio": "Dr. K. Vennala is a paediatrician and neonatologist with additional training in the USA, caring for newborns, premature babies and growing children.",
  "services": [
   "Newborn and premature baby care",
   "Vaccination and growth monitoring",
   "Childhood infections and asthma",
   "Nutrition and development advice"
  ]
 },
 {
  "id": "tulasiram",
  "name": "Dr. Ch. Tulasiram",
  "qual": "MS (Ortho)",
  "desig": "Orthopedic Surgeon",
  "spec": "Orthopedics",
  "photo": "assets/doctors/tulasiram.jpg",
  "exp": "&lt;add&gt;",
  "type": "&lt;full-time / visiting&gt;",
  "days": "&lt;add days&gt;",
  "time": "&lt;add timings&gt;",
  "bio": "Dr. Ch. Tulasiram is an orthopedic surgeon treating injuries and disorders of bones, joints and the spine.",
  "services": [
   "Fractures and trauma",
   "Joint pain and arthritis",
   "Sports and ligament injuries",
   "Back and neck pain"
  ]
 },
 {
  "id": "vijay",
  "name": "Dr. Vijay Amarnath Reddy",
  "qual": "MD, DM (NIMS)",
  "desig": "Interventional Cardiologist",
  "spec": "Cardiology",
  "photo": "assets/doctors/vijay.jpg",
  "exp": "&lt;add&gt;",
  "type": "&lt;full-time / visiting&gt;",
  "days": "&lt;add days&gt;",
  "time": "&lt;add timings&gt;",
  "bio": "Dr. Vijay Amarnath Reddy is an interventional cardiologist trained at NIMS, Hyderabad, treating heart disease from prevention to emergency care.",
  "services": [
   "Chest pain and heart attack evaluation",
   "Hypertension and heart failure",
   "ECG and echo evaluation",
   "Interventional cardiology consultation"
  ]
 },
 {
  "id": "sreeram",
  "name": "Dr. K. Sreeram Kumar",
  "qual": "MD Gold Medalist (Pulmonary Medicine)",
  "desig": "General Physician, Specialist in Pulmonary Medicine & Respiratory Disorders",
  "spec": "Pulmonology",
  "photo": "assets/doctors/sreeram.jpg",
  "exp": "&lt;add&gt;",
  "type": "&lt;full-time / visiting&gt;",
  "days": "&lt;add days&gt;",
  "time": "&lt;add timings&gt;",
  "bio": "Dr. K. Sreeram Kumar is a gold-medalist pulmonologist and general physician who treats lung and breathing disorders.",
  "services": [
   "Asthma and COPD",
   "Chronic cough and breathlessness",
   "Tuberculosis and pneumonia",
   "Lung function testing"
  ]
 }
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
  {name:"TTK Health Care TPA Pvt. Ltd", tpa:"Vidal Health TPA", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Pre-authorisation and policy conditions apply."},
  {name:"Medi Assist India Pvt. Ltd", tpa:"Medi Assist", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Pre-authorisation and policy conditions apply."},
  {name:"Good Health Plan Ltd", tpa:"Good Health Plan", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Policy validation is required before treatment."},
  {name:"Care Health Management & TPA Services Pvt. Ltd", tpa:"Care Health", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Cashless approval depends on policy coverage and treatment eligibility."},
  {name:"Paramount Health Services Pvt. Ltd", tpa:"Paramount Health", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Bring policy card and ID proof for approval."},
  {name:"E-Meditek TPA", tpa:"E-Meditek", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Please share policy details at admission."},
  {name:"MD India Health Care Services (P) Ltd", tpa:"MD India", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Pre-authorisation may be required for planned admissions."},
  {name:"Medicare TPA Services (P) Ltd", tpa:"Medicare TPA", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Policy terms and diagnosis eligibility apply."},
  {name:"United HealthCare Parekh India Pvt. Ltd", tpa:"United HealthCare Parekh", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Please carry your health card and ID proof."},
  {name:"Health India Pvt. Ltd", tpa:"Health India", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Pre-authorisation and diagnosis approval are required."},
  {name:"Vipul Medicorp TPA Pvt. Ltd", tpa:"Vidal Health / Vipul Medicorp", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Relevant policy and TPA process must be completed before treatment."},
  {name:"Star Health and Allied Insurance", tpa:"Star Health", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Please bring your policy card and Member ID."},
  {name:"Family Health Plan Ltd", tpa:"Family Health Plan", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Cashless approval depends on insurer and TPA rules."},
  {name:"L&T General Insurance", tpa:"L&T Insurance", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Kindly confirm policy eligibility before admission."},
  {name:"Genius (TPA) Pvt. Ltd", tpa:"Genius TPA", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Policy-specific approval process applies."},
  {name:"Bajaj Allianz TPA", tpa:"Bajaj Allianz", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Please share policy information at registration."},
  {name:"Universal Sompo General Insurance", tpa:"Universal Sompo", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Cashless facility depends on policy and treatment category."},
  {name:"Religare", tpa:"Care Health / Religare", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Pre-authorisation and documentation are required."},
  {name:"Cigna TTK", tpa:"Cigna TTK", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Approval from the insurer or TPA is required for cashless claims."},
  {name:"Apollo Munich Health Insurance", tpa:"Apollo Munich", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Please bring the policy card and valid ID."},
  {name:"HDFC Ergo General Insurance", tpa:"HDFC Ergo", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Policy and treatment eligibility must be verified before admission."},
  {name:"Medsave", tpa:"Medsave", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Please provide policy and member details for approval."},
  {name:"Cholamandalam MS General Insurance Company Ltd.", tpa:"Chola MS", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Cashless approval depends on policy terms and diagnosis."},
  {name:"Liberty Videocon General Insurance", tpa:"Liberty Videocon", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Kindly confirm eligibility before treatment begins."},
  {name:"Future Generali India Insurance", tpa:"Future Generali", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Pre-authorisation is generally required for planned procedures."},
  {name:"Reliance General Insurance", tpa:"Reliance", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Please share the policy number and claim details at registration."},
  {name:"ICICI Lombard General Insurance", tpa:"ICICI Lombard", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Cashless and reimbursement depend on the policy."},
  {name:"Tata AIG General Insurance", tpa:"Tata AIG", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Please bring the policy card and valid ID proof."},
  {name:"Park Health Insurance TPA Pvt. Ltd", tpa:"Park Health", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Policy-specific approval is required."},
  {name:"Health Insurance TPA Pvt. Ltd", tpa:"Health Insurance TPA", cashless:"Yes", person:"Insurance desk", phone:"Please confirm at reception", note:"Please complete the required TPA approval process before admission."}
];

const BLOGS = [
  {t:"What to expect in each trimester of pregnancy", c:"Pregnancy care", d:"&lt;add date&gt;"},
  {t:"PCOS and irregular periods: when to see a doctor", c:"Women's health", d:"&lt;add date&gt;"},
  {t:"Managing a high-risk pregnancy safely", c:"Pregnancy care", d:"&lt;add date&gt;"},
  {t:"Living well with type 2 diabetes", c:"Diabetology", d:"&lt;add date&gt;"},
  {t:"Simple habits that protect your heart", c:"Cardiology", d:"&lt;add date&gt;"},
  {t:"Knee and joint pain: home care and warning signs", c:"Orthopedics", d:"&lt;add date&gt;"}
];


const DEPT_INFO = {
 "Obstetrics & Gynecology": {
  "docs": [
   "veeramma",
   "prameela"
  ],
  "treats": [
   "Antenatal and high-risk pregnancy care",
   "Normal, painless and cesarean delivery",
   "PCOS, fibroids and menstrual disorders",
   "Menopause and well-woman care"
  ]
 },
 "Orthopedics": {
  "docs": [
   "tulasiram"
  ],
  "treats": [
   "Fractures and trauma",
   "Joint pain and arthritis",
   "Sports and ligament injuries",
   "Back and neck pain"
  ]
 },
 "Cardiology": {
  "docs": [
   "vijay"
  ],
  "treats": [
   "Chest pain and heart attack evaluation",
   "Hypertension and heart failure",
   "ECG and echo evaluation",
   "Interventional cardiology consultation"
  ]
 },
 "Pediatrics & Neonatology": {
  "docs": [
   "vennala"
  ],
  "treats": [
   "Newborn and premature baby care",
   "Vaccination and growth monitoring",
   "Fever, infections and asthma in children",
   "Nutrition and development advice"
  ]
 },
 "General Medicine": {
  "docs": [
   "firoz"
  ],
  "treats": [
   "Fever and infections",
   "Thyroid and lifestyle disorders",
   "Hypertension follow-up",
   "Routine health evaluation"
  ]
 },
 "Pulmonology": {
  "docs": [
   "sreeram"
  ],
  "treats": [
   "Asthma and COPD",
   "Chronic cough and breathlessness",
   "Tuberculosis and pneumonia",
   "Lung function testing"
  ]
 },
 "Diabetology": {
  "docs": [
   "firoz"
  ],
  "treats": [
   "Type 1 and type 2 diabetes",
   "Insulin and medication planning",
   "Diabetic foot and kidney screening",
   "Diet and lifestyle counselling"
  ]
 },
 "Ophthalmology": {
  "docs": [
   "kiran"
  ],
  "treats": [
   "Cataract evaluation and phaco surgery",
   "Diabetic eye screening",
   "Glaucoma and retina check",
   "Vision testing"
  ]
 },
 "Neurology": {
  "docs": [
   "prashanthi"
  ],
  "treats": [
   "Stroke and seizure care",
   "Headache and migraine",
   "Neuropathy and nerve disorders",
   "Dizziness and memory concerns"
  ]
 },
 "Laparoscopic Surgery": {
  "docs": [
   "veeramma"
  ],
  "treats": [
   "Laparoscopic hysterectomy",
   "Myomectomy and ovarian cystectomy",
   "Diagnostic laparoscopy",
   "Smaller cuts, faster recovery"
  ]
 },
 "Fertility & Infertility Care": {
  "docs": [
   "veeramma"
  ],
  "treats": [
   "Couple fertility evaluation",
   "Ovulation tracking and induction",
   "PCOS-related infertility",
   "Counselling and follow-up"
  ]
 },
 "Preventive Health Checkups": {
  "docs": [
   "firoz"
  ],
  "treats": [
   "Diabetes and blood pressure screening",
   "Heart and lipid profile",
   "Women's health screening",
   "Customised annual packages"
  ]
 }
};
