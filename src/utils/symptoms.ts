interface SymptomPrediction {
  condition: string;
  symptoms: string[];
  urgency: 'low' | 'medium' | 'high';
  recommendations: string[];
  warning_signs: string[];
  pills: string[];
}

export const analyzeSymptoms = (input: string): SymptomPrediction | null => {
  const symptoms = input.toLowerCase();

  // 1. Common cold symptoms
  if (symptoms.includes('runny nose') || symptoms.includes('cough') || symptoms.includes('sore throat') || symptoms.includes('congestion')) {
    return {
      condition: 'Common Cold',
      symptoms: [
        'Runny or stuffy nose',
        'Sore throat',
        'Cough',
        'Congestion',
        'Slight body aches',
        'Sneezing',
        'Low-grade fever'
      ],
      urgency: 'low',
      recommendations: [
        'Rest and stay hydrated',
        'Over-the-counter decongestants',
        'Throat lozenges',
        'Humidifier use'
      ],
      warning_signs: [
        'Fever above 101.3°F (38.5°C)',
        'Symptoms lasting more than 10 days',
        'Severe sinus pain',
        'Difficulty breathing'
      ],
      pills: [
        'Paracetamol (for fever and pain)',
        'Ibuprofen (if no contraindications)',
        'Diphenhydramine (for congestion)',
        'Guaifenesin (for cough)'
      ]
    };
  }

  // 2. Flu-like symptoms
  if (symptoms.includes('fever') || symptoms.includes('body ache') || symptoms.includes('fatigue') || symptoms.includes('headache')) {
    return {
      condition: 'Influenza (Flu)',
      symptoms: [
        'High fever',
        'Severe body aches',
        'Extreme fatigue',
        'Headache',
        'Dry cough',
        'Chills',
        'Loss of appetite'
      ],
      urgency: 'medium',
      recommendations: [
        'Rest and stay hydrated',
        'Over-the-counter pain relievers',
        'Antiviral medications (if prescribed)',
        'Isolation to prevent spread'
      ],
      warning_signs: [
        'Difficulty breathing',
        'Persistent chest pain',
        'Severe muscle pain',
        'Dehydration',
        'Confusion'
      ],
      pills: [
        'Oseltamivir (if prescribed by a doctor)',
        'Paracetamol (for fever and pain)',
        'Ibuprofen (if no contraindications)'
      ]
    };
  }

  // 3. Allergies
  if (symptoms.includes('sneezing') || symptoms.includes('itchy') || symptoms.includes('watery eyes') || symptoms.includes('allergy')) {
    return {
      condition: 'Seasonal Allergies',
      symptoms: [
        'Sneezing',
        'Itchy or watery eyes',
        'Runny nose',
        'Nasal congestion',
        'Itchy throat',
        'Postnasal drip'
      ],
      urgency: 'low',
      recommendations: [
        'Antihistamines',
        'Nasal corticosteroids',
        'Avoid allergen exposure',
        'Air purifiers',
        'Keep windows closed during high pollen times'
      ],
      warning_signs: [
        'Difficulty breathing',
        'Severe chest tightness',
        'Swelling of face or throat',
        'Severe dizziness'
      ],
      pills: [
        'Loratadine (antihistamine)',
        'Cetirizine (antihistamine)',
        'Fluticasone nasal spray (for congestion)'
      ]
    };
  }

  // 4. Indigestion
  if (symptoms.includes('stomach ache') || symptoms.includes('indigestion') || symptoms.includes('bloating') || symptoms.includes('nausea')) {
    return {
      condition: 'Indigestion',
      symptoms: [
        'Stomach ache',
        'Bloating',
        'Nausea',
        'Heartburn',
        'Feeling full quickly'
      ],
      urgency: 'low',
      recommendations: [
        'Eat smaller meals',
        'Avoid spicy or fatty foods',
        'Stay upright after eating',
        'Drink plenty of water'
      ],
      warning_signs: [
        'Severe abdominal pain',
        'Vomiting blood',
        'Unexplained weight loss',
        'Difficulty swallowing'
      ],
      pills: [
        'Antacids (e.g., Tums, Rolaids)',
        'Ranitidine (if available)',
        'Omeprazole (for acid reflux)',
        'Simethicone (for bloating)'
      ]
    };
  }

  // 5. Headache or migraine
  if (symptoms.includes('headache') || symptoms.includes('migraine') || symptoms.includes('sensitivity to light') || symptoms.includes('throbbing pain')) {
    return {
      condition: 'Headache or Migraine',
      symptoms: [
        'Throbbing or pulsing pain',
        'Sensitivity to light or sound',
        'Nausea or vomiting',
        'Aura (in migraines)'
      ],
      urgency: 'medium',
      recommendations: [
        'Rest in a dark, quiet room',
        'Stay hydrated',
        'Apply a cold compress to your head',
        'Avoid triggers like stress or certain foods'
      ],
      warning_signs: [
        'Sudden, severe headache',
        'Headache with fever or stiff neck',
        'Confusion or difficulty speaking',
        'Weakness or numbness on one side of the body'
      ],
      pills: [
        'Paracetamol (for mild pain)',
        'Ibuprofen (if no contraindications)',
        'Sumatriptan (for migraines, if prescribed)',
        'Aspirin (if suitable for the patient)'
      ]
    };
  }

  // 6. Food poisoning
  if (symptoms.includes('vomiting') || symptoms.includes('diarrhea') || symptoms.includes('stomach cramps') || symptoms.includes('fever')) {
    return {
      condition: 'Food Poisoning',
      symptoms: [
        'Nausea and vomiting',
        'Diarrhea',
        'Stomach cramps',
        'Fever',
        'Dehydration'
      ],
      urgency: 'medium',
      recommendations: [
        'Stay hydrated with oral rehydration solutions',
        'Avoid solid foods until symptoms improve',
        'Rest and avoid strenuous activity',
        'Seek medical attention if symptoms persist'
      ],
      warning_signs: [
        'Severe dehydration',
        'Blood in stool or vomit',
        'High fever (above 102°F)',
        'Symptoms lasting more than 3 days'
      ],
      pills: [
        'Oral rehydration salts (ORS)',
        'Loperamide (for diarrhea, if necessary)',
        'Bismuth subsalicylate (e.g., Pepto-Bismol)',
        'Probiotics (to restore gut health)'
      ]
    };
  }

  // 7. Anxiety or stress
  if (symptoms.includes('anxiety') || symptoms.includes('stress') || symptoms.includes('nervousness') || symptoms.includes('restlessness')) {
    return {
      condition: 'Anxiety or Stress',
      symptoms: [
        'Feeling nervous or restless',
        'Increased heart rate',
        'Sweating',
        'Difficulty concentrating',
        'Fatigue',
        'Irritability'
      ],
      urgency: 'low',
      recommendations: [
        'Practice deep breathing exercises',
        'Engage in physical activity or yoga',
        'Maintain a healthy sleep schedule',
        'Avoid caffeine and alcohol'
      ],
      warning_signs: [
        'Panic attacks',
        'Chest pain or difficulty breathing',
        'Persistent feelings of dread',
        'Inability to function in daily life'
      ],
      pills: [
        'Over-the-counter calming supplements (e.g., magnesium, valerian root)',
        'Buspirone (if prescribed by a doctor)',
        'Selective serotonin reuptake inhibitors (SSRIs, if prescribed)',
        'Benzodiazepines (short-term use, if prescribed)'
      ]
    };
  }

  // 8. Back pain
  if (symptoms.includes('back pain') || symptoms.includes('lower back pain') || symptoms.includes('stiffness') || symptoms.includes('muscle ache')) {
    return {
      condition: 'Back Pain',
      symptoms: [
        'Pain or stiffness in the back',
        'Muscle spasms',
        'Limited range of motion',
        'Pain radiating to the legs (in severe cases)'
      ],
      urgency: 'low',
      recommendations: [
        'Apply heat or cold packs to the affected area',
        'Practice good posture',
        'Engage in gentle stretching exercises',
        'Avoid heavy lifting or strenuous activities'
      ],
      warning_signs: [
        'Severe pain that doesn’t improve with rest',
        'Numbness or tingling in the legs',
        'Loss of bladder or bowel control',
        'Pain after a fall or injury'
      ],
      pills: [
        'Paracetamol (for mild pain)',
        'Ibuprofen (for inflammation, if no contraindications)',
        'Muscle relaxants (e.g., cyclobenzaprine, if prescribed)',
        'Topical analgesics (e.g., menthol-based creams)'
      ]
    };
  }

  // 9. Insomnia or sleep disturbances
  if (symptoms.includes('insomnia') || symptoms.includes('difficulty sleeping') || symptoms.includes('restlessness at night') || symptoms.includes('waking up frequently')) {
    return {
      condition: 'Insomnia or Sleep Disturbances',
      symptoms: [
        'Difficulty falling asleep',
        'Waking up frequently during the night',
        'Feeling tired despite sleeping',
        'Difficulty concentrating during the day'
      ],
      urgency: 'low',
      recommendations: [
        'Maintain a consistent sleep schedule',
        'Avoid screens before bedtime',
        'Create a relaxing bedtime routine',
        'Limit caffeine and heavy meals in the evening'
      ],
      warning_signs: [
        'Chronic insomnia lasting more than 3 weeks',
        'Daytime fatigue affecting daily activities',
        'Mood changes or irritability',
        'Sleep apnea symptoms (e.g., loud snoring, gasping for air)'
      ],
      pills: [
        'Melatonin supplements (over-the-counter)',
        'Diphenhydramine (short-term use for sleep aid)',
        'Zolpidem (if prescribed by a doctor)',
        'Eszopiclone (if prescribed for chronic insomnia)'
      ]
    };
  }

  // 10. Muscle pain or soreness
  if (symptoms.includes('muscle pain') || symptoms.includes('sore muscles') || symptoms.includes('muscle stiffness') || symptoms.includes('muscle cramps')) {
    return {
      condition: 'Muscle Pain or Soreness',
      symptoms: [
        'Muscle stiffness',
        'Soreness or tenderness',
        'Cramps or spasms',
        'Pain during movement'
      ],
      urgency: 'low',
      recommendations: [
        'Apply heat or cold packs to the affected area',
        'Rest the affected muscles',
        'Perform gentle stretching exercises',
        'Stay hydrated to prevent cramps'
      ],
      warning_signs: [
        'Severe pain that doesn’t improve with rest',
        'Swelling or redness in the affected area',
        'Muscle weakness or inability to move',
        'Pain after a traumatic injury'
      ],
      pills: [
        'Ibuprofen (for inflammation, if no contraindications)',
        'Paracetamol (for pain relief)',
        'Magnesium supplements (for cramps)',
        'Topical analgesics (e.g., menthol-based creams)'
      ]
    };
  }

  // 11. Skin rash or irritation
  if (symptoms.includes('rash') || symptoms.includes('itchy skin') || symptoms.includes('redness') || symptoms.includes('skin irritation')) {
    return {
      condition: 'Skin Rash or Irritation',
      symptoms: [
        'Redness or discoloration',
        'Itchy or irritated skin',
        'Swelling or bumps',
        'Dry or flaky patches'
      ],
      urgency: 'low',
      recommendations: [
        'Avoid scratching the affected area',
        'Apply a cold compress to reduce itching',
        'Use hypoallergenic moisturizers',
        'Avoid exposure to potential irritants'
      ],
      warning_signs: [
        'Rash spreading rapidly',
        'Severe swelling or pain',
        'Blisters or open sores',
        'Fever or signs of infection'
      ],
      pills: [
        'Antihistamines (e.g., loratadine, cetirizine)',
        'Hydrocortisone cream (for mild irritation)',
        'Calamine lotion (for itching)',
        'Antibiotics (if prescribed for infection)'
      ]
    };
  }

  // 12. High blood pressure (hypertension)
  if (symptoms.includes('high blood pressure') || symptoms.includes('hypertension') || symptoms.includes('headache with pressure') || symptoms.includes('dizziness')) {
    return {
      condition: 'High Blood Pressure (Hypertension)',
      symptoms: [
        'Headache or pressure in the head',
        'Dizziness or lightheadedness',
        'Blurred vision',
        'Shortness of breath (in severe cases)'
      ],
      urgency: 'medium',
      recommendations: [
        'Reduce salt intake in your diet',
        'Engage in regular physical activity',
        'Manage stress through relaxation techniques',
        'Monitor your blood pressure regularly'
      ],
      warning_signs: [
        'Severe headache or confusion',
        'Chest pain or shortness of breath',
        'Nosebleeds',
        'Vision changes or loss'
      ],
      pills: [
        'Amlodipine (if prescribed by a doctor)',
        'Lisinopril (if prescribed)',
        'Losartan (if prescribed)',
        'Hydrochlorothiazide (if prescribed)'
      ]
    };
  }

  // 13. Chest pain or discomfort
  if (symptoms.includes('chest pain') || symptoms.includes('tightness in chest') || symptoms.includes('pressure in chest') || symptoms.includes('shortness of breath')) {
    return {
      condition: 'Chest Pain or Discomfort',
      symptoms: [
        'Chest pain or discomfort',
        'Tightness or pressure in the chest',
        'Shortness of breath',
        'Pain radiating to the arms, back, or jaw',
        'Nausea or lightheadedness'
      ],
      urgency: 'high',
      recommendations: [
        'Seek immediate medical attention',
        'Avoid physical exertion until evaluated',
        'Stay calm and try to relax',
        'Avoid caffeine and stimulants'
      ],
      warning_signs: [
        'Severe chest pain lasting more than a few minutes',
        'Pain radiating to the arms, back, or jaw',
        'Shortness of breath or difficulty breathing',
        'Sweating or clammy skin',
        'Nausea or vomiting'
      ],
      pills: [
        'Aspirin (if prescribed by a doctor)',
        'Nitroglycerin (if prescribed for angina)',
        'Beta-blockers (if prescribed)',
        'ACE inhibitors (if prescribed)'
      ]
    };
  }

  // 14. Diabetes symptoms
  if (symptoms.includes('increased thirst') || symptoms.includes('frequent urination') || symptoms.includes('fatigue') || symptoms.includes('blurred vision')) {
    return {
      condition: 'Diabetes',
      symptoms: [
        'Increased thirst and hunger',
        'Frequent urination',
        'Fatigue or weakness',
        'Blurred vision',
        'Slow-healing sores or frequent infections'
      ],
      urgency: 'medium',
      recommendations: [
        'Monitor blood sugar levels regularly',
        'Maintain a balanced diet low in sugar and refined carbs',
        'Engage in regular physical activity',
        'Consult a healthcare professional for medication if needed'
      ],
      warning_signs: [
        'Severe fatigue or weakness',
        'Unexplained weight loss',
        'Nausea or vomiting',
        'Confusion or difficulty concentrating',
        'Signs of ketoacidosis (fruity breath, rapid breathing)'
      ],
      pills: [
        'Metformin (if prescribed by a doctor)',
        'Insulin (if prescribed)',
        'Sulfonylureas (if prescribed)',
        'DPP-4 inhibitors (if prescribed)'
      ]
    };
  }

    // 15. Asthma symptoms
    if (symptoms.includes('wheezing') || symptoms.includes('shortness of breath') || symptoms.includes('chest tightness') || symptoms.includes('coughing')) {
      return {
        condition: 'Asthma',
        symptoms: [
          'Wheezing',
          'Shortness of breath',
          'Chest tightness',
          'Coughing',
        ],
        urgency: 'medium',
        recommendations: [
          'Use prescribed inhaler as directed',
          'Avoid triggers such as smoke, pollen, and pet dander',
          'Monitor peak flow regularly',
          'Consult a healthcare professional for proper management'
        ],
        warning_signs: [
          'Severe shortness of breath',
          'Inability to speak in full sentences',
          'Blue lips or face',
          'Decreased level of consciousness'
        ],
        pills: [
          'Albuterol (rescue inhaler)',
          'Inhaled corticosteroids (e.g., fluticasone)',
          'Montelukast (leukotriene modifier)',
          'Theophylline (bronchodilator)'
        ]
      };
    }

  // 16. Urinary Tract Infection (UTI)
  if (symptoms.includes('frequent urination') || symptoms.includes('painful urination') || symptoms.includes('burning sensation') || symptoms.includes('blood in urine')) {
    return {
      condition: 'Urinary Tract Infection (UTI)',
      symptoms: [
        'Frequent urination',
        'Painful urination',
        'Burning sensation during urination',
        'Blood in urine',
        'Lower abdominal discomfort'
      ],
      urgency: 'medium',
      recommendations: [
        'Drink plenty of water',
        'Avoid caffeine and alcohol',
        'Use a heating pad for abdominal discomfort',
        'Consult a healthcare professional for antibiotics'
      ],
      warning_signs: [
        'High fever',
        'Severe abdominal or back pain',
        'Nausea or vomiting',
        'Confusion or altered mental state'
      ],
      pills: [
        'Antibiotics (e.g., trimethoprim/sulfamethoxazole, ciprofloxacin)',
        'Phenazopyridine (for pain relief)'
      ]
    };
  }

  // 17. Sinusitis
  if (symptoms.includes('sinus pain') || symptoms.includes('nasal congestion') || symptoms.includes('facial pressure') || symptoms.includes('headache')) {
    return {
      condition: 'Sinusitis',
      symptoms: [
        'Sinus pain',
        'Nasal congestion',
        'Facial pressure',
        'Headache',
        'Thick nasal discharge'
      ],
      urgency: 'low',
      recommendations: [
        'Use saline nasal spray',
        'Apply warm compresses to the face',
        'Stay hydrated',
        'Use a humidifier'
      ],
      warning_signs: [
        'High fever',
        'Severe headache or facial pain',
        'Vision changes',
        'Stiff neck'
      ],
      pills: [
        'Decongestants (e.g., pseudoephedrine)',
        'Pain relievers (e.g., ibuprofen, paracetamol)',
        'Nasal corticosteroids (e.g., fluticasone)',
        'Antibiotics (if bacterial infection is suspected)'
      ]
    };
  }

  // 18. Bronchitis
  if (symptoms.includes('persistent cough') || symptoms.includes('wheezing') || symptoms.includes('shortness of breath') || symptoms.includes('chest discomfort')) {
    return {
      condition: 'Bronchitis',
      symptoms: [
        'Persistent cough',
        'Wheezing',
        'Shortness of breath',
        'Chest discomfort',
        'Fatigue'
      ],
      urgency: 'medium',
      recommendations: [
        'Rest and stay hydrated',
        'Use a humidifier',
        'Avoid irritants such as smoke and pollution',
        'Consult a healthcare professional for treatment'
      ],
      warning_signs: [
        'High fever',
        'Severe shortness of breath',
        'Chest pain',
        'Coughing up blood'
      ],
      pills: [
        'Bronchodilators (e.g., albuterol)',
        'Cough suppressants (e.g., dextromethorphan)',
        'Expectorants (e.g., guaifenesin)',
        'Antibiotics (if bacterial infection is suspected)'
      ]
    };
  }

  // 19. Conjunctivitis (Pinkeye)
  if (symptoms.includes('eye redness') || symptoms.includes('eye itching') || symptoms.includes('eye discharge') || symptoms.includes('eye irritation')) {
    return {
      condition: 'Conjunctivitis (Pinkeye)',
      symptoms: [
        'Eye redness',
        'Eye itching',
        'Eye discharge',
        'Eye irritation',
        'Blurred vision'
      ],
      urgency: 'low',
      recommendations: [
        'Use artificial tears',
        'Apply warm compresses to the eyes',
        'Avoid touching the eyes',
        'Wash hands frequently'
      ],
      warning_signs: [
        'Severe eye pain',
        'Vision changes',
        'Sensitivity to light',
        'Fever'
      ],
      pills: [
        'Antibiotic eye drops (if bacterial infection is suspected)',
        'Antihistamine eye drops (for allergic conjunctivitis)'
      ]
    };
  }

  // 20. Eczema
  if (symptoms.includes('itchy skin') || symptoms.includes('dry skin') || symptoms.includes('red patches') || symptoms.includes('flaky skin')) {
    return {
      condition: 'Eczema',
      symptoms: [
        'Itchy skin',
        'Dry skin',
        'Red patches',
        'Flaky skin',
        'Thickened skin'
      ],
      urgency: 'low',
      recommendations: [
        'Use hypoallergenic moisturizers',
        'Avoid scratching the skin',
        'Take short, lukewarm showers',
        'Avoid irritants such as harsh soaps and detergents'
      ],
      warning_signs: [
        'Severe itching',
        'Skin infection',
        'Blisters or open sores',
        'Fever'
      ],
      pills: [
        'Topical corticosteroids (e.g., hydrocortisone)',
        'Antihistamines (for itching)',
        'Topical calcineurin inhibitors (e.g., tacrolimus, pimecrolimus)'
      ]
    };
  }

  // 21. Gout
  if (symptoms.includes('joint pain') || symptoms.includes('swelling') || symptoms.includes('redness') || symptoms.includes('tenderness')) {
    return {
      condition: 'Gout',
      symptoms: [
        'Sudden, severe joint pain',
        'Swelling',
        'Redness',
        'Tenderness',
        'Warmth in the affected joint'
      ],
      urgency: 'medium',
      recommendations: [
        'Rest and elevate the affected joint',
        'Apply ice packs',
        'Stay hydrated',
        'Avoid alcohol and high-purine foods'
      ],
      warning_signs: [
        'High fever',
        'Severe pain that doesn’t improve with rest',
        'Joint infection',
        'Kidney stones'
      ],
      pills: [
        'Nonsteroidal anti-inflammatory drugs (NSAIDs)',
        'Colchicine',
        'Allopurinol',
        'Corticosteroids'
      ]
    };
  }

  // 22. Hypothyroidism
  if (symptoms.includes('fatigue') || symptoms.includes('weight gain') || symptoms.includes('cold sensitivity') || symptoms.includes('dry skin')) {
    return {
      condition: 'Hypothyroidism',
      symptoms: [
        'Fatigue',
        'Weight gain',
        'Cold sensitivity',
        'Dry skin',
        'Constipation'
      ],
      urgency: 'medium',
      recommendations: [
        'Consult a healthcare professional for thyroid hormone replacement therapy',
        'Monitor thyroid hormone levels regularly',
        'Maintain a balanced diet',
        'Engage in regular physical activity'
      ],
      warning_signs: [
        'Severe fatigue or weakness',
        'Difficulty breathing',
        'Confusion or altered mental state',
        'Hypothermia'
      ],
      pills: [
        'Levothyroxine (synthetic thyroid hormone)'
      ]
    };
  }

  // 23. Iron Deficiency Anemia
  if (symptoms.includes('fatigue') || symptoms.includes('weakness') || symptoms.includes('pale skin') || symptoms.includes('shortness of breath')) {
    return {
      condition: 'Iron Deficiency Anemia',
      symptoms: [
        'Fatigue',
        'Weakness',
        'Pale skin',
        'Shortness of breath',
        'Dizziness'
      ],
      urgency: 'low',
      recommendations: [
        'Increase iron intake through diet',
        'Take iron supplements as directed',
        'Consume vitamin C to enhance iron absorption',
        'Consult a healthcare professional for evaluation'
      ],
      warning_signs: [
        'Severe fatigue or weakness',
        'Chest pain',
        'Rapid heart rate',
        'Difficulty breathing'
      ],
      pills: [
        'Iron supplements (e.g., ferrous sulfate, ferrous gluconate)'
      ]
    };
  }

  // 24. Osteoarthritis
  if (symptoms.includes('joint pain') || symptoms.includes('stiffness') || symptoms.includes('swelling') || symptoms.includes('decreased range of motion')) {
    return {
      condition: 'Osteoarthritis',
      symptoms: [
        'Joint pain',
        'Stiffness',
        'Swelling',
        'Decreased range of motion',
        'Grating sensation in the joint'
      ],
      urgency: 'low',
      recommendations: [
        'Engage in low-impact exercises',
        'Maintain a healthy weight',
        'Use assistive devices such as canes or walkers',
        'Apply heat or cold packs to the affected joint'
      ],
      warning_signs: [
        'Severe pain that doesn’t improve with rest',
        'Joint deformity',
        'Loss of joint function',
        'Fever'
      ],
      pills: [
        'Pain relievers (e.g., paracetamol)',
        'Nonsteroidal anti-inflammatory drugs (NSAIDs)',
        'Topical analgesics (e.g., capsaicin cream)',
        'Corticosteroid injections'
      ]
    };
  }

  // 25. Plantar Fasciitis
  if (symptoms.includes('heel pain') || symptoms.includes('foot pain') || symptoms.includes('stiffness') || symptoms.includes('tenderness')) {
    return {
      condition: 'Plantar Fasciitis',
      symptoms: [
        'Heel pain',
        'Foot pain',
        'Stiffness',
        'Tenderness',
        'Pain worse in the morning or after rest'
      ],
      urgency: 'low',
      recommendations: [
        'Rest and avoid activities that aggravate the pain',
        'Stretch the plantar fascia and calf muscles',
        'Wear supportive shoes with good arch support',
        'Use orthotic inserts'
      ],
      warning_signs: [
        'Severe pain that doesn’t improve with rest',
        'Numbness or tingling in the foot',
        'Loss of foot function',
        'Fever'
      ],
      pills: [
        'Pain relievers (e.g., paracetamol)',
        'Nonsteroidal anti-inflammatory drugs (NSAIDs)',
        'Corticosteroid injections'
      ]
    };
  }

  // 26. Tension Headache
  if (symptoms.includes('headache') || symptoms.includes('pressure') || symptoms.includes('tightness') || symptoms.includes('neck pain')) {
    return {
      condition: 'Tension Headache',
      symptoms: [
        'Headache',
        'Pressure',
        'Tightness',
        'Neck pain',
        'Shoulder pain'
      ],
      urgency: 'low',
      recommendations: [
        'Rest in a quiet, dark room',
        'Apply heat or cold packs to the head and neck',
        'Practice relaxation techniques',
        'Stay hydrated'
      ],
      warning_signs: [
        'Sudden, severe headache',
        'Headache with fever or stiff neck',
        'Confusion or difficulty speaking',
        'Weakness or numbness on one side of the body'
      ],
      pills: [
        'Pain relievers (e.g., paracetamol)',
        'Ibuprofen (if no contraindications)'
      ]
    };
  }

  // 27. Vertigo
  if (symptoms.includes('dizziness') || symptoms.includes('spinning sensation') || symptoms.includes('loss of balance') || symptoms.includes('nausea')) {
    return {
      condition: 'Vertigo',
      symptoms: [
        'Dizziness',
        'Spinning sensation',
        'Loss of balance',
        'Nausea',
        'Vomiting'
      ],
      urgency: 'low',
      recommendations: [
        'Rest in a quiet, dark room',
        'Avoid sudden movements',
        'Stay hydrated',
        'Consult a healthcare professional for evaluation'
      ],
      warning_signs: [
        'Sudden, severe dizziness',
        'Double vision',
        'Difficulty speaking',
        'Weakness or numbness on one side of the body'
      ],
      pills: [
        'Antihistamines (e.g., meclizine, dimenhydrinate)',
        'Antiemetics (e.g., promethazine)'
      ]
    };
  }

  // 28. Carpal Tunnel Syndrome
  if (symptoms.includes('numbness') || symptoms.includes('tingling') || symptoms.includes('pain') || symptoms.includes('weakness')) {
    return {
      condition: 'Carpal Tunnel Syndrome',
      symptoms: [
        'Numbness',
        'Tingling',
        'Pain',
        'Weakness',
        'In the hand and fingers'
      ],
      urgency: 'low',
      recommendations: [
        'Wear a wrist splint',
        'Avoid repetitive hand movements',
        'Take frequent breaks',
        'Practice stretching exercises'
      ],
      warning_signs: [
        'Severe pain that doesn’t improve with rest',
        'Loss of hand function',
        'Muscle wasting',
        'Fever'
      ],
      pills: [
        'Pain relievers (e.g., paracetamol)',
        'Nonsteroidal anti-inflammatory drugs (NSAIDs)',
        'Corticosteroid injections'
      ]
    };
  }

  // 29. Plantar Warts
  if (symptoms.includes('wart') || symptoms.includes('growth') || symptoms.includes('pain') || symptoms.includes('tenderness')) {
    return {
      condition: 'Plantar Warts',
      symptoms: [
        'Wart',
        'Growth',
        'Pain',
        'Tenderness',
        'On the sole of the foot'
      ],
      urgency: 'low',
      recommendations: [
        'Use over-the-counter wart removal products',
        'Soak the foot in warm water',
        'File down the wart',
        'Keep the foot clean and dry'
      ],
      warning_signs: [
        'Severe pain that doesn’t improve with treatment',
        'Infection',
        'Bleeding',
        'Fever'
      ],
      pills: [
        'Salicylic acid',
        'Cryotherapy',
        'Cantharidin',
        'Bleomycin'
      ]
    };
  }

  // 30. Ringworm
  if (symptoms.includes('rash') || symptoms.includes('itchy') || symptoms.includes('red') || symptoms.includes('circular')) {
    return {
      condition: 'Ringworm',
      symptoms: [
        'Rash',
        'Itchy',
        'itching',
        'Flaky skin',
        'Redness',
        'Circular patches',
        'Raised border',
        'Red',
        'Circular',
        'Raised border'
      ],
      urgency: 'low',
      recommendations: [
        'Keep the area clean and dry',
        'Apply over-the-counter antifungal creams',
        'Avoid sharing personal items',
        'Wash hands frequently'
      ],
      warning_signs: [
        'Severe itching',
        'Spreading rash',
        'Blisters or open sores',
        'Fever'
      ],
      pills: [
        'Topical antifungals (e.g., clotrimazole, miconazole)',
        'Oral antifungals (e.g., terbinafine, griseofulvin)'
      ]
    };
  }

  return null;
};