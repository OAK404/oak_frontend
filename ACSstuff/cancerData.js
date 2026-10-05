/**
 * cancerData.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Cancer types organized by body system, with hotspot positions calibrated
 * for the front/back body diagram image (200×520 viewBox coordinate space).
 *
 * USAGE (ES Module):
 *   import { CANCER_SYSTEMS, HOTSPOTS } from './cancerData.js';
 *
 * USAGE (CommonJS / <script> tag):
 *   <script src="cancerData.js"></script>
 *   // then access window.CANCER_SYSTEMS and window.HOTSPOTS
 *
 * Each HOTSPOT entry has:
 *   id        – unique string key
 *   label     – display name of the hotspot region
 *   x, y      – position as % of container width / height (for CSS left/top)
 *   system    – parent system key (matches CANCER_SYSTEMS key)
 *   cancers   – array of cancer type objects (name, link, tags, desc)
 *
 * ACS links are pre-filled; descriptions are short stubs — replace with your
 * full content where marked TODO.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── BODY SYSTEMS ────────────────────────────────────────────────────────────
export const CANCER_SYSTEMS = {
  head_neck: {
    label: 'Head & Neck',
    color: '#e07a6a',   // rose
    icon: '',
  },
  lung_chest: {
    label: 'Lung & Chest',
    color: '#6a9fd8',   // sky blue
    icon: '',
  },
  breast: {
    label: 'Breast',
    color: '#d97fb8',   // pink
    icon: '',
  },
  digestive: {
    label: 'Digestive System',
    color: '#c49a3c',   // amber
    icon: '',
  },
  urinary: {
    label: 'Urinary System',
    color: '#7a9e7e',   // sage
    icon: '',
  },
  reproductive: {
    label: 'Reproductive System',
    color: '#a07cc5',   // lavender
    icon: '',
  },
  endocrine: {
    label: 'Endocrine System',
    color: '#d4845a',   // terracotta
    icon: '',
  },
  skin: {
    label: 'Skin',
    color: '#c4a35a',   // tan
    icon: '',
  },
  bone_soft: {
    label: 'Bone & Soft Tissue',
    color: '#7a8fa6',   // steel blue
    icon: '',
  },
  eye: {
    label: 'Eye',
    color: '#5aabb5',   // teal
    icon: '',
  },
  brain_ns: {
    label: 'Brain & Nervous System',
    color: '#9b7ec8',   // purple
    icon: '',
  },
  blood_lymph: {
    label: 'Blood & Lymph',
    color: '#c45e4a',   // crimson
    icon: '',
  },
  other: {
    label: 'Other Cancers',
    color: '#888888',
    icon: '',
  },
};

// ─── CANCER TYPE LIBRARY ─────────────────────────────────────────────────────
// Each entry: { name, link, tags[], desc }
// TODO: Replace desc stubs with full clinical content.

const CANCER_TYPES = {
  // HEAD & NECK
  head_neck_general: {
    name: 'Head and Neck Cancers',
    link: 'https://www.cancer.org/cancer/head-neck-cancer.html',
    tags: ['Sore throat', 'Hoarseness', 'Difficulty swallowing'],
    desc: 'A broad category covering cancers arising in the head and neck region. Risk factors include tobacco, alcohol, and HPV infection. TODO: add detailed content.',
  },
  laryngeal: {
    name: 'Laryngeal and Hypopharyngeal Cancer',
    link: 'https://www.cancer.org/cancer/laryngeal-hypopharyngeal-cancer.html',
    tags: ['Hoarseness', 'Sore throat', 'Ear pain'],
    desc: 'Cancers of the voice box (larynx) and lower throat. Strongly linked to tobacco and alcohol use. TODO: add detailed content.',
  },
  nasal: {
    name: 'Nasal Cavity and Paranasal Sinuses Cancer',
    link: 'https://www.cancer.org/cancer/nasal-cavity-paranasal-sinus-cancer.html',
    tags: ['Nasal blockage', 'Nosebleeds', 'Facial pain'],
    desc: 'Rare cancers affecting the nasal passages and sinus cavities. TODO: add detailed content.',
  },
  nasopharyngeal: {
    name: 'Nasopharyngeal Cancer',
    link: 'https://www.cancer.org/cancer/nasopharyngeal-cancer.html',
    tags: ['Neck lump', 'Hearing loss', 'Nasal congestion'],
    desc: 'Cancer of the upper part of the throat behind the nose. More common in Southeast Asia and parts of Africa. TODO: add detailed content.',
  },
  oral_oropharyngeal: {
    name: 'Oral Cavity and Oropharyngeal Cancer',
    link: 'https://www.cancer.org/cancer/oral-cavity-oropharyngeal-cancer.html',
    tags: ['Mouth sore', 'Jaw pain', 'Difficulty chewing'],
    desc: 'Cancers of the mouth, lips, tongue, and throat. HPV is increasingly a cause of oropharyngeal cancers. TODO: add detailed content.',
  },
  salivary: {
    name: 'Salivary Gland Cancer',
    link: 'https://www.cancer.org/cancer/salivary-gland-cancer.html',
    tags: ['Facial swelling', 'Facial numbness', 'Jaw pain'],
    desc: 'Rare cancers arising from the salivary glands near the jaw and neck. TODO: add detailed content.',
  },

  // LUNG & CHEST
  lung: {
    name: 'Lung Cancer',
    link: 'https://www.cancer.org/cancer/lung-cancer.html',
    tags: ['Persistent cough', 'Chest pain', 'Shortness of breath'],
    desc: 'The leading cause of cancer death in the US. Strongly linked to smoking; screening with low-dose CT recommended for high-risk adults. TODO: add detailed content.',
  },
  lung_net: {
    name: 'Lung Neuroendocrine Tumor',
    link: 'https://www.cancer.org/cancer/lung-cancer/about/what-is.html',
    tags: ['Cough', 'Wheezing', 'Flushing'],
    desc: 'A subtype of lung tumor arising from neuroendocrine cells. Behavior ranges from slow-growing to aggressive. TODO: add detailed content.',
  },
  mesothelioma: {
    name: 'Mesothelioma',
    link: 'https://www.cancer.org/cancer/malignant-mesothelioma.html',
    tags: ['Chest pain', 'Shortness of breath', 'Asbestos exposure'],
    desc: 'A rare cancer of the mesothelium, most often the lining of the lungs, strongly linked to asbestos exposure. TODO: add detailed content.',
  },
  thymus: {
    name: 'Thymus Cancer',
    link: 'https://www.cancer.org/cancer/thymoma.html',
    tags: ['Chest pain', 'Cough', 'Difficulty swallowing'],
    desc: 'Rare cancers of the thymus gland located in the chest. Often found incidentally on imaging. TODO: add detailed content.',
  },

  // BREAST
  breast: {
    name: 'Breast Cancer',
    link: 'https://www.cancer.org/cancer/breast-cancer.html',
    tags: ['Lump', 'Skin changes', 'Nipple discharge'],
    desc: 'The most common cancer in American women. Regular mammograms and self-exams are critical for early detection. Highly treatable when caught early. TODO: add detailed content.',
  },
  breast_men: {
    name: 'Breast Cancer in Men',
    link: 'https://www.cancer.org/cancer/breast-cancer-in-men.html',
    tags: ['Breast lump', 'Nipple changes', 'Skin changes'],
    desc: 'Though rare, men can develop breast cancer. BRCA2 gene mutations increase risk. Awareness is key because it is often diagnosed late. TODO: add detailed content.',
  },

  // DIGESTIVE
  anal: {
    name: 'Anal Cancer',
    link: 'https://www.cancer.org/cancer/anal-cancer.html',
    tags: ['Rectal bleeding', 'Anal pain', 'Lump near anus'],
    desc: 'Cancer of the anal canal, increasingly linked to HPV infection. More common in people over 60. TODO: add detailed content.',
  },
  bile_duct: {
    name: 'Bile Duct Cancer (Cholangiocarcinoma)',
    link: 'https://www.cancer.org/cancer/bile-duct-cancer.html',
    tags: ['Jaundice', 'Abdominal pain', 'Itching'],
    desc: 'Cancer arising in the bile ducts inside or outside the liver. Often diagnosed at an advanced stage. TODO: add detailed content.',
  },
  colorectal: {
    name: 'Colorectal Cancer',
    link: 'https://www.cancer.org/cancer/colon-rectal-cancer.html',
    tags: ['Blood in stool', 'Bowel changes', 'Cramping'],
    desc: 'Third most common cancer in the US. Colonoscopy screening from age 45 is highly effective for early detection. TODO: add detailed content.',
  },
  esophageal: {
    name: 'Esophageal Cancer',
    link: 'https://www.cancer.org/cancer/esophagus-cancer.html',
    tags: ['Difficulty swallowing', 'Weight loss', 'Chest pain'],
    desc: 'Cancer of the esophagus (food pipe). Risk factors include GERD, Barrett\'s esophagus, tobacco, and alcohol. TODO: add detailed content.',
  },
  gallbladder: {
    name: 'Gallbladder Cancer',
    link: 'https://www.cancer.org/cancer/gallbladder-cancer.html',
    tags: ['Abdominal pain', 'Jaundice', 'Nausea'],
    desc: 'Rare cancer of the gallbladder. Gallstones and chronic inflammation are risk factors. Often found late due to few early symptoms. TODO: add detailed content.',
  },
  gi_net: {
    name: 'Gastrointestinal Neuroendocrine (Carcinoid) Tumors',
    link: 'https://www.cancer.org/cancer/gastrointestinal-carcinoid-tumor.html',
    tags: ['Flushing', 'Diarrhea', 'Abdominal pain'],
    desc: 'Slow-growing tumors arising from neuroendocrine cells of the GI tract. May cause carcinoid syndrome. TODO: add detailed content.',
  },
  gist: {
    name: 'Gastrointestinal Stromal Tumor (GIST)',
    link: 'https://www.cancer.org/cancer/gastrointestinal-stromal-tumor.html',
    tags: ['Abdominal pain', 'GI bleeding', 'Early fullness'],
    desc: 'Rare tumors arising in the walls of the GI tract. Most occur in the stomach or small intestine. TODO: add detailed content.',
  },
  liver: {
    name: 'Liver Cancer',
    link: 'https://www.cancer.org/cancer/liver-cancer.html',
    tags: ['Abdominal pain', 'Jaundice', 'Weight loss'],
    desc: 'Primary liver cancer is often linked to cirrhosis, hepatitis B or C, and heavy alcohol use. Often asymptomatic until advanced. TODO: add detailed content.',
  },
  pancreatic: {
    name: 'Pancreatic Cancer',
    link: 'https://www.cancer.org/cancer/pancreatic-cancer.html',
    tags: ['Back pain', 'Jaundice', 'Weight loss'],
    desc: 'One of the most challenging cancers to detect early. CA 19-9 and imaging are used for diagnosis. TODO: add detailed content.',
  },
  pancreatic_net: {
    name: 'Pancreatic Neuroendocrine Tumor (NET)',
    link: 'https://www.cancer.org/cancer/pancreatic-cancer/about/what-is-pancreatic-cancer.html',
    tags: ['Low blood sugar', 'Abdominal pain', 'Diarrhea'],
    desc: 'A subtype of pancreatic tumor arising from hormone-producing cells. Generally slower-growing than exocrine pancreatic cancer. TODO: add detailed content.',
  },
  small_intestine: {
    name: 'Small Intestine Cancer',
    link: 'https://www.cancer.org/cancer/small-intestine-cancer.html',
    tags: ['Abdominal pain', 'Weight loss', 'Blood in stool'],
    desc: 'Rare cancer of the small bowel. Several subtypes exist including adenocarcinoma, sarcoma, and carcinoid. TODO: add detailed content.',
  },
  stomach: {
    name: 'Stomach Cancer',
    link: 'https://www.cancer.org/cancer/stomach-cancer.html',
    tags: ['Indigestion', 'Nausea', 'Weight loss'],
    desc: 'Gastric cancer often develops slowly. H. pylori infection, diet, and smoking are major risk factors. TODO: add detailed content.',
  },

  // URINARY
  bladder: {
    name: 'Bladder Cancer',
    link: 'https://www.cancer.org/cancer/bladder-cancer.html',
    tags: ['Blood in urine', 'Urinary frequency', 'Pelvic pain'],
    desc: 'One of the most common urologic cancers. Smoking is the leading risk factor. Often caught early due to visible blood in urine. TODO: add detailed content.',
  },
  kidney: {
    name: 'Kidney Cancer',
    link: 'https://www.cancer.org/cancer/kidney-cancer.html',
    tags: ['Blood in urine', 'Flank pain', 'Lump in side'],
    desc: 'Renal cell carcinoma is the most common type. Smoking, obesity, and high blood pressure increase risk. TODO: add detailed content.',
  },
  wilms: {
    name: 'Wilms Tumor',
    link: 'https://www.cancer.org/cancer/wilms-tumor.html',
    tags: ['Abdominal swelling', 'Flank pain', 'Fever'],
    desc: 'A rare kidney cancer that primarily affects children. One of the most successfully treated childhood cancers. TODO: add detailed content.',
  },

  // REPRODUCTIVE
  cervical: {
    name: 'Cervical Cancer',
    link: 'https://www.cancer.org/cancer/cervical-cancer.html',
    tags: ['Irregular bleeding', 'Pelvic pain', 'Discharge'],
    desc: 'Almost all cervical cancers are caused by HPV. Pap smears and HPV vaccines are highly effective prevention tools. TODO: add detailed content.',
  },
  endometrial: {
    name: 'Endometrial Cancer',
    link: 'https://www.cancer.org/cancer/endometrial-cancer.html',
    tags: ['Abnormal uterine bleeding', 'Pelvic pain', 'Weight loss'],
    desc: 'The most common gynecologic cancer in the US. Abnormal vaginal bleeding is the most frequent early symptom. TODO: add detailed content.',
  },
  ovarian: {
    name: 'Ovarian Cancer',
    link: 'https://www.cancer.org/cancer/ovarian-cancer.html',
    tags: ['Bloating', 'Pelvic pain', 'Early fullness'],
    desc: 'Often called the "silent killer" due to vague early symptoms. BRCA1/BRCA2 mutations significantly increase risk. TODO: add detailed content.',
  },
  penile: {
    name: 'Penile Cancer',
    link: 'https://www.cancer.org/cancer/penile-cancer.html',
    tags: ['Skin changes', 'Sores', 'Discharge'],
    desc: 'A rare cancer of the penis, often linked to HPV, poor hygiene, or phimosis. TODO: add detailed content.',
  },
  prostate: {
    name: 'Prostate Cancer',
    link: 'https://www.cancer.org/cancer/prostate-cancer.html',
    tags: ['Urinary changes', 'Pelvic discomfort', 'Bone pain'],
    desc: 'The most common cancer in American men. PSA screening is recommended for men at average risk starting at age 50. TODO: add detailed content.',
  },
  testicular: {
    name: 'Testicular Cancer',
    link: 'https://www.cancer.org/cancer/testicular-cancer.html',
    tags: ['Testicular lump', 'Swelling', 'Dull ache'],
    desc: 'Most common cancer in men aged 15–35. Highly treatable, especially when caught early. TODO: add detailed content.',
  },
  uterine_sarcoma: {
    name: 'Uterine Sarcoma',
    link: 'https://www.cancer.org/cancer/uterine-sarcoma.html',
    tags: ['Abnormal bleeding', 'Pelvic pain', 'Uterine mass'],
    desc: 'A rare, aggressive cancer arising from the muscle or connective tissue of the uterus. TODO: add detailed content.',
  },
  vaginal: {
    name: 'Vaginal Cancer',
    link: 'https://www.cancer.org/cancer/vaginal-cancer.html',
    tags: ['Vaginal bleeding', 'Discharge', 'Pelvic pain'],
    desc: 'A rare cancer of the vaginal lining. HPV is the primary risk factor. Regular Pap tests can detect changes early. TODO: add detailed content.',
  },
  vulvar: {
    name: 'Vulvar Cancer',
    link: 'https://www.cancer.org/cancer/vulvar-cancer.html',
    tags: ['Itching', 'Skin changes', 'Lump'],
    desc: 'Cancer of the external female genitalia. HPV infection and lichen sclerosus are risk factors. TODO: add detailed content.',
  },

  // ENDOCRINE
  neuroendocrine: {
    name: 'Neuroendocrine Tumors and Carcinoid Tumors',
    link: 'https://www.cancer.org/cancer/gastrointestinal-carcinoid-tumor.html',
    tags: ['Flushing', 'Diarrhea', 'Wheezing'],
    desc: 'Tumors arising from neuroendocrine cells throughout the body. Behavior varies widely from benign to aggressive. TODO: add detailed content.',
  },
  adrenal: {
    name: 'Adrenal Cancer',
    link: 'https://www.cancer.org/cancer/adrenal-cancer.html',
    tags: ['Abdominal pain', 'Hormonal changes', 'Weight gain'],
    desc: 'Rare cancer of the adrenal glands above the kidneys. May produce excess hormones causing various symptoms. TODO: add detailed content.',
  },
  pituitary: {
    name: 'Pituitary Tumors',
    link: 'https://www.cancer.org/cancer/pituitary-tumors.html',
    tags: ['Headaches', 'Vision changes', 'Hormonal imbalance'],
    desc: 'Most are benign (adenomas) but can cause significant hormonal and neurological effects. TODO: add detailed content.',
  },
  thyroid: {
    name: 'Thyroid Cancer',
    link: 'https://www.cancer.org/cancer/thyroid-cancer.html',
    tags: ['Neck lump', 'Hoarseness', 'Difficulty swallowing'],
    desc: 'The most common endocrine cancer. Usually very treatable. Papillary thyroid cancer is the most common subtype. TODO: add detailed content.',
  },

  // SKIN
  skin_general: {
    name: 'Skin Cancer',
    link: 'https://www.cancer.org/cancer/skin-cancer.html',
    tags: ['New moles', 'Changing spots', 'Non-healing sores'],
    desc: 'The most common cancer overall. UV exposure is the primary risk factor. Use the ABCDE rule to check moles. TODO: add detailed content.',
  },
  basal_squamous: {
    name: 'Basal and Squamous Cell Skin Cancer',
    link: 'https://www.cancer.org/cancer/basal-squamous-cell-skin-cancer.html',
    tags: ['Pearly bump', 'Flat lesion', 'Bleeding sore'],
    desc: 'The most common skin cancers. Rarely spread but should be treated promptly. Sun protection prevents most cases. TODO: add detailed content.',
  },
  kaposi: {
    name: 'Kaposi Sarcoma',
    link: 'https://www.cancer.org/cancer/kaposi-sarcoma.html',
    tags: ['Skin lesions', 'Mouth sores', 'Lymph node swelling'],
    desc: 'A cancer caused by HHV-8 virus, commonly associated with HIV/AIDS. Lesions appear on skin and mucous membranes. TODO: add detailed content.',
  },
  skin_lymphoma: {
    name: 'Lymphoma of the Skin',
    link: 'https://www.cancer.org/cancer/lymphoma-skin.html',
    tags: ['Skin patches', 'Itching', 'Tumors on skin'],
    desc: 'Non-Hodgkin lymphoma that originates in the skin. Mycosis fungoides is the most common type. TODO: add detailed content.',
  },
  melanoma: {
    name: 'Melanoma Skin Cancer',
    link: 'https://www.cancer.org/cancer/melanoma-skin-cancer.html',
    tags: ['Asymmetric mole', 'Irregular border', 'Color variation'],
    desc: 'The most dangerous form of skin cancer. Can spread to other organs if not caught early. UV exposure is the main risk factor. TODO: add detailed content.',
  },
  merkel: {
    name: 'Merkel Cell Skin Cancer',
    link: 'https://www.cancer.org/cancer/merkel-cell-skin-cancer.html',
    tags: ['Firm skin lump', 'Reddish nodule', 'Fast growth'],
    desc: 'A rare and aggressive skin cancer linked to Merkel cell polyomavirus and UV exposure. TODO: add detailed content.',
  },

  // BONE & SOFT TISSUE
  bone: {
    name: 'Bone Cancer',
    link: 'https://www.cancer.org/cancer/bone-cancer.html',
    tags: ['Bone pain', 'Swelling', 'Fractures'],
    desc: 'Primary bone cancers are rare. Types include osteosarcoma, Ewing sarcoma, and chondrosarcoma. TODO: add detailed content.',
  },
  ewing: {
    name: 'Ewing Sarcoma',
    link: 'https://www.cancer.org/cancer/ewing-tumor.html',
    tags: ['Bone pain', 'Swelling', 'Fever'],
    desc: 'A malignant tumor in bones or soft tissue, most common in children and young adults. TODO: add detailed content.',
  },
  osteosarcoma: {
    name: 'Osteosarcoma',
    link: 'https://www.cancer.org/cancer/osteosarcoma.html',
    tags: ['Bone pain', 'Swelling near joint', 'Fracture'],
    desc: 'The most common primary bone cancer, usually arising near the knee or shoulder in adolescents. TODO: add detailed content.',
  },
  rhabdomyosarcoma: {
    name: 'Rhabdomyosarcoma',
    link: 'https://www.cancer.org/cancer/rhabdomyosarcoma.html',
    tags: ['Lump or swelling', 'Bulging eye', 'Bloody discharge'],
    desc: 'A cancer of soft tissue derived from skeletal muscle cells; most common in children. TODO: add detailed content.',
  },
  soft_tissue: {
    name: 'Soft Tissue Sarcomas',
    link: 'https://www.cancer.org/cancer/soft-tissue-sarcoma.html',
    tags: ['Growing lump', 'Pain', 'Limited range of motion'],
    desc: 'Rare cancers of the connective tissues including fat, muscle, blood vessels, and deep skin. TODO: add detailed content.',
  },
  spinal: {
    name: 'Spinal Tumors',
    link: 'https://www.cancer.org/cancer/brain-spinal-cord-tumors-adults.html',
    tags: ['Back pain', 'Weakness', 'Numbness'],
    desc: 'Tumors can arise from the spinal cord itself or from structures surrounding it. TODO: add detailed content.',
  },

  // EYE
  eye: {
    name: 'Eye Cancer (Ocular Melanoma)',
    link: 'https://www.cancer.org/cancer/eye-cancer.html',
    tags: ['Vision changes', 'Floaters', 'Flashes of light'],
    desc: 'The most common primary eye cancer in adults. Arises from melanocytes in the uvea. Often found during routine eye exams. TODO: add detailed content.',
  },
  retinoblastoma: {
    name: 'Retinoblastoma',
    link: 'https://www.cancer.org/cancer/retinoblastoma.html',
    tags: ['White pupil reflex', 'Crossed eyes', 'Vision problems'],
    desc: 'A rare eye cancer primarily affecting young children under age 5. Can be hereditary. Highly curable when detected early. TODO: add detailed content.',
  },

  // BRAIN & NERVOUS SYSTEM
  brain_adults: {
    name: 'Brain Tumors in Adults',
    link: 'https://www.cancer.org/cancer/brain-spinal-cord-tumors-adults.html',
    tags: ['Headaches', 'Seizures', 'Cognitive changes'],
    desc: 'Brain tumors can be primary (originating in the brain) or metastatic (spreading from elsewhere). Symptoms depend on tumor location. TODO: add detailed content.',
  },
  brain_children: {
    name: 'Brain Tumors in Children',
    link: 'https://www.cancer.org/cancer/brain-spinal-cord-tumors-children.html',
    tags: ['Headaches', 'Nausea', 'Balance problems'],
    desc: 'The most common solid tumor in children. Types include medulloblastoma, glioma, and ependymoma. TODO: add detailed content.',
  },
  glioblastoma: {
    name: 'Glioblastoma',
    link: 'https://www.cancer.org/cancer/glioblastoma.html',
    tags: ['Severe headache', 'Neurological changes', 'Seizures'],
    desc: 'The most aggressive primary brain tumor. Despite treatment, it typically recurs. Active research is ongoing. TODO: add detailed content.',
  },
  medulloblastoma: {
    name: 'Medulloblastoma',
    link: 'https://www.cancer.org/cancer/brain-spinal-cord-tumors-children.html',
    tags: ['Coordination problems', 'Headaches', 'Nausea'],
    desc: 'A fast-growing brain tumor arising in the cerebellum, most common in children. Often responsive to treatment. TODO: add detailed content.',
  },
  meningioma: {
    name: 'Meningioma',
    link: 'https://www.cancer.org/cancer/brain-spinal-cord-tumors-adults.html',
    tags: ['Headaches', 'Vision changes', 'Weakness'],
    desc: 'The most common primary brain tumor. Most are benign and slow-growing, arising from the meninges. TODO: add detailed content.',
  },
  neuroblastoma: {
    name: 'Neuroblastoma',
    link: 'https://www.cancer.org/cancer/neuroblastoma.html',
    tags: ['Abdominal lump', 'Bone pain', 'Fatigue'],
    desc: 'A cancer of the peripheral nervous system, most often arising in the adrenal glands of young children. TODO: add detailed content.',
  },

  // BLOOD & LYMPH
  blood_general: {
    name: 'Blood Cancer',
    link: 'https://www.cancer.org/cancer/leukemia.html',
    tags: ['Fatigue', 'Easy bruising', 'Infections'],
    desc: 'An umbrella term for cancers affecting the blood, bone marrow, and lymphatic system. TODO: add detailed content.',
  },
  leukemia_general: {
    name: 'Leukemia',
    link: 'https://www.cancer.org/cancer/leukemia.html',
    tags: ['Fatigue', 'Easy bruising', 'Frequent infections'],
    desc: 'Cancer of blood-forming tissues. More common in adults over 55 and in children under 15. TODO: add detailed content.',
  },
  all: {
    name: 'Acute Lymphocytic Leukemia (ALL) in Adults',
    link: 'https://www.cancer.org/cancer/acute-lymphocytic-leukemia.html',
    tags: ['Fatigue', 'Bone pain', 'Enlarged lymph nodes'],
    desc: 'A fast-growing cancer of lymphoid cells; in adults it is more aggressive than in children. TODO: add detailed content.',
  },
  aml: {
    name: 'Acute Myeloid Leukemia (AML) in Adults',
    link: 'https://www.cancer.org/cancer/acute-myeloid-leukemia.html',
    tags: ['Fatigue', 'Bleeding', 'Infections'],
    desc: 'The most common acute leukemia in adults. Rapidly progressing; requires urgent treatment. TODO: add detailed content.',
  },
  cll: {
    name: 'Chronic Lymphocytic Leukemia (CLL)',
    link: 'https://www.cancer.org/cancer/chronic-lymphocytic-leukemia.html',
    tags: ['Swollen lymph nodes', 'Fatigue', 'Night sweats'],
    desc: 'The most common leukemia in adults in Western countries. Often slow-growing and initially managed with watchful waiting. TODO: add detailed content.',
  },
  cml: {
    name: 'Chronic Myeloid Leukemia (CML)',
    link: 'https://www.cancer.org/cancer/chronic-myeloid-leukemia.html',
    tags: ['Fatigue', 'Spleen enlargement', 'Weight loss'],
    desc: 'Driven by the BCR-ABL gene mutation. Targeted therapies (TKIs) have dramatically improved outcomes. TODO: add detailed content.',
  },
  cmml: {
    name: 'Chronic Myelomonocytic Leukemia (CMML)',
    link: 'https://www.cancer.org/cancer/chronic-myelomonocytic-leukemia.html',
    tags: ['Fatigue', 'Easy bruising', 'Infections'],
    desc: 'A rare blood cancer with features of both myelodysplastic syndrome and myeloproliferative neoplasm. TODO: add detailed content.',
  },
  childhood_leukemia: {
    name: 'Childhood Leukemia',
    link: 'https://www.cancer.org/cancer/leukemia-in-children.html',
    tags: ['Pale skin', 'Fatigue', 'Bone pain'],
    desc: 'The most common cancer in children. ALL is the most frequent type. Cure rates are high with modern treatment. TODO: add detailed content.',
  },
  lymphoma_general: {
    name: 'Lymphoma',
    link: 'https://www.cancer.org/cancer/non-hodgkin-lymphoma.html',
    tags: ['Swollen lymph nodes', 'Night sweats', 'Weight loss'],
    desc: 'Cancer of the lymphatic system. Divided into Hodgkin and non-Hodgkin types. TODO: add detailed content.',
  },
  nhl: {
    name: 'Non-Hodgkin Lymphoma',
    link: 'https://www.cancer.org/cancer/non-hodgkin-lymphoma.html',
    tags: ['Swollen lymph nodes', 'Fever', 'Fatigue'],
    desc: 'A diverse group of blood cancers. Includes many subtypes with varying aggressiveness and treatments. TODO: add detailed content.',
  },
  nhl_children: {
    name: 'Non-Hodgkin Lymphoma in Children',
    link: 'https://www.cancer.org/cancer/non-hodgkin-lymphoma-children.html',
    tags: ['Swollen lymph nodes', 'Abdominal swelling', 'Breathing trouble'],
    desc: 'One of the more common childhood cancers. Tends to be aggressive but also highly responsive to treatment. TODO: add detailed content.',
  },
  hodgkin: {
    name: 'Hodgkin Lymphoma',
    link: 'https://www.cancer.org/cancer/hodgkin-lymphoma.html',
    tags: ['Painless swollen nodes', 'Night sweats', 'Itching'],
    desc: 'Defined by the presence of Reed-Sternberg cells. Highly treatable, especially in younger patients. TODO: add detailed content.',
  },
  myeloma: {
    name: 'Multiple Myeloma',
    link: 'https://www.cancer.org/cancer/multiple-myeloma.html',
    tags: ['Bone pain', 'Fatigue', 'Kidney problems'],
    desc: 'Cancer of plasma cells in the bone marrow. New therapies have significantly extended survival. TODO: add detailed content.',
  },
  mds: {
    name: 'Myelodysplastic Syndromes',
    link: 'https://www.cancer.org/cancer/myelodysplastic-syndrome.html',
    tags: ['Fatigue', 'Shortness of breath', 'Easy bleeding'],
    desc: 'A group of disorders in which blood cells are poorly formed. Can progress to AML. TODO: add detailed content.',
  },
  waldenstrom: {
    name: 'Waldenström Macroglobulinemia',
    link: 'https://www.cancer.org/cancer/waldenstrom-macroglobulinemia.html',
    tags: ['Fatigue', 'Vision changes', 'Neuropathy'],
    desc: 'A rare type of non-Hodgkin lymphoma that produces large amounts of IgM antibody. TODO: add detailed content.',
  },

  // OTHER
  unknown_primary: {
    name: 'Cancer of Unknown Primary',
    link: 'https://www.cancer.org/cancer/cancer-unknown-primary.html',
    tags: ['Varies by site', 'Unexplained symptoms', 'Metastatic findings'],
    desc: 'When cancer is found in the body but the original (primary) site cannot be determined. Occurs in ~2–5% of cancer diagnoses. TODO: add detailed content.',
  },
  rare: {
    name: 'Rare Cancers, Cancer Subtypes, and Pre-cancers',
    link: 'https://www.cancer.org/cancer.html',
    tags: ['Varies', 'Rare presentation', 'Specialized care'],
    desc: 'A broad category covering uncommon cancers and precancerous conditions that don\'t fit neatly into other groupings. TODO: add detailed content.',
  },
};

// ─── HOTSPOTS ─────────────────────────────────────────────────────────────────
// x, y → percentage of container width / height
// cancerIds → array of keys from CANCER_TYPES above
// Positions are calibrated for the body diagram image (front view).
// Adjust x/y values to fine-tune placement on your specific layout.

export const HOTSPOTS = [
  {
    id: 'eye_region',
    label: 'Eye',
    x: 55,
    y: 3.5,
    system: 'eye',
    cancerIds: ['eye', 'retinoblastoma'],
  },
  {
    id: 'brain_region',
    label: 'Brain & Nervous System',
    x: 44,
    y: 2,
    system: 'brain_ns',
    cancerIds: ['brain_adults', 'brain_children', 'glioblastoma', 'medulloblastoma', 'meningioma', 'neuroblastoma'],
  },
  {
    id: 'head_neck_region',
    label: 'Head & Neck',
    x: 50,
    y: 11,
    system: 'head_neck',
    cancerIds: ['head_neck_general', 'laryngeal', 'nasal', 'nasopharyngeal', 'oral_oropharyngeal', 'salivary', 'thyroid'],
  },
  {
    id: 'pituitary_region',
    label: 'Pituitary / Endocrine (Head)',
    x: 57,
    y: 5,
    system: 'endocrine',
    cancerIds: ['pituitary', 'neuroendocrine'],
  },
  {
    id: 'lung_chest_region',
    label: 'Lung & Chest',
    x: 30,
    y: 25,
    system: 'lung_chest',
    cancerIds: ['lung', 'lung_net', 'mesothelioma', 'thymus'],
  },
  {
    id: 'breast_region',
    label: 'Breast',
    x: 60,
    y: 27,
    system: 'breast',
    cancerIds: ['breast', 'breast_men'],
  },
  {
    id: 'skin_region',
    label: 'Skin',
    x: 74,
    y: 20,
    system: 'skin',
    cancerIds: ['skin_general', 'basal_squamous', 'melanoma', 'merkel', 'kaposi', 'skin_lymphoma'],
  },
  {
    id: 'liver_region',
    label: 'Liver & Bile',
    x: 62,
    y: 35,
    system: 'digestive',
    cancerIds: ['liver', 'bile_duct', 'gallbladder'],
  },
  {
    id: 'stomach_region',
    label: 'Stomach & Esophagus',
    x: 50,
    y: 37,
    system: 'digestive',
    cancerIds: ['stomach', 'esophageal', 'gi_net', 'gist'],
  },
  {
    id: 'kidney_region',
    label: 'Kidney (Adrenal)',
    x: 30,
    y: 38,
    system: 'urinary',
    cancerIds: ['kidney', 'wilms', 'adrenal'],
  },
  {
    id: 'pancreas_region',
    label: 'Pancreas',
    x: 44,
    y: 42,
    system: 'digestive',
    cancerIds: ['pancreatic', 'pancreatic_net'],
  },
  {
    id: 'colon_region',
    label: 'Colorectal & Small Intestine',
    x: 38,
    y: 47,
    system: 'digestive',
    cancerIds: ['colorectal', 'small_intestine', 'anal'],
  },
  {
    id: 'bladder_region',
    label: 'Bladder',
    x: 55,
    y: 52,
    system: 'urinary',
    cancerIds: ['bladder'],
  },
  {
    id: 'reproductive_region',
    label: 'Reproductive System',
    x: 50,
    y: 57,
    system: 'reproductive',
    cancerIds: ['prostate', 'testicular', 'penile', 'cervical', 'endometrial', 'ovarian', 'uterine_sarcoma', 'vaginal', 'vulvar'],
  },
  {
    id: 'blood_lymph_region',
    label: 'Blood & Lymph System',
    x: 20,
    y: 55,
    system: 'blood_lymph',
    cancerIds: [
      'blood_general', 'leukemia_general', 'all', 'aml', 'cll', 'cml', 'cmml',
      'childhood_leukemia', 'lymphoma_general', 'nhl', 'nhl_children', 'hodgkin',
      'myeloma', 'mds', 'waldenstrom',
    ],
  },
  {
    id: 'bone_region',
    label: 'Bone & Soft Tissue',
    x: 22,
    y: 70,
    system: 'bone_soft',
    cancerIds: ['bone', 'ewing', 'osteosarcoma', 'rhabdomyosarcoma', 'soft_tissue', 'spinal'],
  },
  {
    id: 'other_region',
    label: 'Other / Unknown Primary',
    x: 78,
    y: 60,
    system: 'other',
    cancerIds: ['unknown_primary', 'rare'],
  },
];

// ─── HELPER: RESOLVE CANCERS FOR A HOTSPOT ───────────────────────────────────
/**
 * Returns fully-resolved cancer objects for a given hotspot.
 * @param {Object} hotspot - a hotspot object from HOTSPOTS
 * @returns {Array} array of cancer objects with all fields
 */
export function resolveCancers(hotspot) {
  return hotspot.cancerIds
    .map(id => ({ id, ...CANCER_TYPES[id] }))
    .filter(c => c.name); // filter out any missing keys
}

/**
 * Returns the system metadata for a given hotspot.
 * @param {Object} hotspot
 * @returns {Object} system metadata from CANCER_SYSTEMS
 */
export function resolveSystem(hotspot) {
  return CANCER_SYSTEMS[hotspot.system] || CANCER_SYSTEMS.other;
}

// ─── CJS / Script-tag fallback ───────────────────────────────────────────────
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CANCER_SYSTEMS, HOTSPOTS, resolveCancers, resolveSystem };
} else if (typeof window !== 'undefined') {
  window.CANCER_DATA = { CANCER_SYSTEMS, HOTSPOTS, resolveCancers, resolveSystem };
}