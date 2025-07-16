export const equivalentDoseTable = {
    'unit': {
        // 以西弗 (Sv) 為基準
        'sievert': { offset: 0, scale: 1 },                         // 1 Sv = 1 J/kg (加權)
        'millisievert': { offset: 0, scale: 1000 },                 // 1 mSv = 0.001 Sv
        'microsievert': { offset: 0, scale: 1000000 },              // 1 μSv = 10⁻⁶ Sv
        'nanosievert': { offset: 0, scale: 1000000000 },            // 1 nSv = 10⁻⁹ Sv
        'picosievert': { offset: 0, scale: 1000000000000 },         // 1 pSv = 10⁻¹² Sv
        'femtosievert': { offset: 0, scale: 1000000000000000 },     // 1 fSv = 10⁻¹⁵ Sv
        'kilosievert': { offset: 0, scale: 0.001 },                 // 1 kSv = 1,000 Sv
        'megasievert': { offset: 0, scale: 0.000001 },              // 1 MSv = 10⁶ Sv

        'rem': { offset: 0, scale: 100 },                           // 1 rem = 0.01 Sv
        'millirem': { offset: 0, scale: 100000 },                   // 1 mrem = 10⁻⁵ Sv
        'microrem': { offset: 0, scale: 100000000 },                // 1 μrem = 10⁻⁸ Sv
        'nanonem': { offset: 0, scale: 100000000000 },              // 1 nrem = 10⁻¹¹ Sv
        'kilonem': { offset: 0, scale: 0.1 },                       // 1 krem = 10 Sv

        'centisievert': { offset: 0, scale: 100 },                  // 1 cSv = 0.01 Sv = 1 rem
        'decisievert': { offset: 0, scale: 10 },                    // 1 dSv = 0.1 Sv = 10 rem

        // 劑量率單位 - 時間基準
        'sievert_per_hour': { offset: 0, scale: 1 },                // 1 Sv/h
        'millisievert_per_hour': { offset: 0, scale: 1000 },        // 1 mSv/h = 0.001 Sv/h
        'microsievert_per_hour': { offset: 0, scale: 1000000 },     // 1 μSv/h = 10⁻⁶ Sv/h
        'nanosievert_per_hour': { offset: 0, scale: 1000000000 },   // 1 nSv/h = 10⁻⁹ Sv/h

        'sievert_per_minute': { offset: 0, scale: 60 },             // 1 Sv/min = 60 Sv/h
        'millisievert_per_minute': { offset: 0, scale: 60000 },     // 1 mSv/min
        'microsievert_per_minute': { offset: 0, scale: 60000000 },  // 1 μSv/min

        'sievert_per_second': { offset: 0, scale: 3600 },           // 1 Sv/s = 3600 Sv/h
        'millisievert_per_second': { offset: 0, scale: 3600000 },   // 1 mSv/s
        'microsievert_per_second': { offset: 0, scale: 3600000000 }, // 1 μSv/s

        'rem_per_hour': { offset: 0, scale: 100 },                  // 1 rem/h = 0.01 Sv/h
        'millirem_per_hour': { offset: 0, scale: 100000 },          // 1 mrem/h = 10⁻⁵ Sv/h
        'microrem_per_hour': { offset: 0, scale: 100000000 },       // 1 μrem/h = 10⁻⁸ Sv/h

        'rem_per_minute': { offset: 0, scale: 6000 },               // 1 rem/min = 0.6 Sv/h
        'millirem_per_minute': { offset: 0, scale: 6000000 },       // 1 mrem/min

        'rem_per_second': { offset: 0, scale: 360000 },             // 1 rem/s = 36 Sv/h
        'millirem_per_second': { offset: 0, scale: 360000000 },     // 1 mrem/s

        // 年劑量單位
        'sievert_per_year': { offset: 0, scale: 8760 },             // 1 Sv/year = 1/8760 Sv/h
        'millisievert_per_year': { offset: 0, scale: 8760000 },     // 1 mSv/year
        'microsievert_per_year': { offset: 0, scale: 8760000000 },  // 1 μSv/year

        'rem_per_year': { offset: 0, scale: 876000 },               // 1 rem/year
        'millirem_per_year': { offset: 0, scale: 876000000 },       // 1 mrem/year
        'microrem_per_year': { offset: 0, scale: 876000000000 },    // 1 μrem/year

        // 特殊單位
        'person_sievert': { offset: 0, scale: 1 },                  // 1 person-Sv = 1 Sv (集體劑量)
        'person_rem': { offset: 0, scale: 100 },                    // 1 person-rem = 0.01 Sv
        'man_sievert': { offset: 0, scale: 1 },                     // 1 man-Sv = 1 Sv (舊稱)
        'man_rem': { offset: 0, scale: 100 },                       // 1 man-rem = 0.01 Sv
    },
    'language': {
        'zh-TW': {
            'sievert': '西弗 (Sv)',
            'millisievert': '毫西弗 (mSv)',
            'microsievert': '微西弗 (μSv)',
            'nanosievert': '納西弗 (nSv)',
            'picosievert': '皮西弗 (pSv)',
            'femtosievert': '飛西弗 (fSv)',
            'kilosievert': '千西弗 (kSv)',
            'megasievert': '兆西弗 (MSv)',
            'rem': '侖目 (rem)',
            'millirem': '毫侖目 (mrem)',
            'microrem': '微侖目 (μrem)',
            'nanonem': '納侖目 (nrem)',
            'kilonem': '千侖目 (krem)',
            'centisievert': '釐西弗 (cSv)',
            'decisievert': '分西弗 (dSv)',
            'sievert_per_hour': '西弗每小時 (Sv/h)',
            'millisievert_per_hour': '毫西弗每小時 (mSv/h)',
            'microsievert_per_hour': '微西弗每小時 (μSv/h)',
            'nanosievert_per_hour': '納西弗每小時 (nSv/h)',
            'sievert_per_minute': '西弗每分鐘 (Sv/min)',
            'millisievert_per_minute': '毫西弗每分鐘 (mSv/min)',
            'microsievert_per_minute': '微西弗每分鐘 (μSv/min)',
            'sievert_per_second': '西弗每秒 (Sv/s)',
            'millisievert_per_second': '毫西弗每秒 (mSv/s)',
            'microsievert_per_second': '微西弗每秒 (μSv/s)',
            'rem_per_hour': '侖目每小時 (rem/h)',
            'millirem_per_hour': '毫侖目每小時 (mrem/h)',
            'microrem_per_hour': '微侖目每小時 (μrem/h)',
            'rem_per_minute': '侖目每分鐘 (rem/min)',
            'millirem_per_minute': '毫侖目每分鐘 (mrem/min)',
            'rem_per_second': '侖目每秒 (rem/s)',
            'millirem_per_second': '毫侖目每秒 (mrem/s)',
            'sievert_per_year': '西弗每年 (Sv/year)',
            'millisievert_per_year': '毫西弗每年 (mSv/year)',
            'microsievert_per_year': '微西弗每年 (μSv/year)',
            'rem_per_year': '侖目每年 (rem/year)',
            'millirem_per_year': '毫侖目每年 (mrem/year)',
            'microrem_per_year': '微侖目每年 (μrem/year)',
            'person_sievert': '人西弗 (person-Sv)',
            'person_rem': '人侖目 (person-rem)',
            'man_sievert': '人西弗 (man-Sv)',
            'man_rem': '人侖目 (man-rem)',
        },
        'en': {
            'sievert': 'Sievert (Sv)',
            'millisievert': 'Millisievert (mSv)',
            'microsievert': 'Microsievert (μSv)',
            'nanosievert': 'Nanosievert (nSv)',
            'picosievert': 'Picosievert (pSv)',
            'femtosievert': 'Femtosievert (fSv)',
            'kilosievert': 'Kilosievert (kSv)',
            'megasievert': 'Megasievert (MSv)',
            'rem': 'Roentgen Equivalent Man (rem)',
            'millirem': 'Millirem (mrem)',
            'microrem': 'Microrem (μrem)',
            'nanonem': 'Nanonem (nrem)',
            'kilonem': 'Kilonem (krem)',
            'centisievert': 'Centisievert (cSv)',
            'decisievert': 'Decisievert (dSv)',
            'sievert_per_hour': 'Sievert per Hour (Sv/h)',
            'millisievert_per_hour': 'Millisievert per Hour (mSv/h)',
            'microsievert_per_hour': 'Microsievert per Hour (μSv/h)',
            'nanosievert_per_hour': 'Nanosievert per Hour (nSv/h)',
            'sievert_per_minute': 'Sievert per Minute (Sv/min)',
            'millisievert_per_minute': 'Millisievert per Minute (mSv/min)',
            'microsievert_per_minute': 'Microsievert per Minute (μSv/min)',
            'sievert_per_second': 'Sievert per Second (Sv/s)',
            'millisievert_per_second': 'Millisievert per Second (mSv/s)',
            'microsievert_per_second': 'Microsievert per Second (μSv/s)',
            'rem_per_hour': 'Rem per Hour (rem/h)',
            'millirem_per_hour': 'Millirem per Hour (mrem/h)',
            'microrem_per_hour': 'Microrem per Hour (μrem/h)',
            'rem_per_minute': 'Rem per Minute (rem/min)',
            'millirem_per_minute': 'Millirem per Minute (mrem/min)',
            'rem_per_second': 'Rem per Second (rem/s)',
            'millirem_per_second': 'Millirem per Second (mrem/s)',
            'sievert_per_year': 'Sievert per Year (Sv/year)',
            'millisievert_per_year': 'Millisievert per Year (mSv/year)',
            'microsievert_per_year': 'Microsievert per Year (μSv/year)',
            'rem_per_year': 'Rem per Year (rem/year)',
            'millirem_per_year': 'Millirem per Year (mrem/year)',
            'microrem_per_year': 'Microrem per Year (μrem/year)',
            'person_sievert': 'Person-Sievert (person-Sv)',
            'person_rem': 'Person-Rem (person-rem)',
            'man_sievert': 'Man-Sievert (man-Sv)',
            'man_rem': 'Man-Rem (man-rem)',
        },
    },
    'reference_values': {
        'zh-TW': {
            'background_radiation': '天然背景輻射：約 2-3 mSv/year',
            'chest_xray': '胸部X光：約 0.1 mSv',
            'dental_xray': '牙科X光：約 0.005 mSv',
            'ct_scan_head': '頭部CT：約 2 mSv',
            'ct_scan_chest': '胸部CT：約 7 mSv',
            'ct_scan_abdomen': '腹部CT：約 10 mSv',
            'mammography': '乳房攝影：約 0.4 mSv',
            'nuclear_medicine': '核醫學檢查：約 1-20 mSv',
            'pet_scan': 'PET掃描：約 7 mSv',
            'airline_crew_annual': '航空機組員年劑量：約 2-5 mSv',
            'nuclear_worker_limit': '核工作人員限值：20 mSv/year',
            'public_dose_limit': '一般民眾限值：1 mSv/year',
            'acute_radiation_syndrome': '急性輻射症候群：>1 Sv',
            'lethal_dose_50': '半致死劑量：約 4-5 Sv',
            'radiation_therapy': '放射治療：約 50-70 Sv (局部)',
            'chernobyl_liquidators': '車諾比清理工：約 100-500 mSv',
            'fukushima_evacuation': '福島撤離標準：20 mSv/year',
            'banana_equivalent': '香蕉等效劑量：約 0.1 μSv',
            'smoking_annual': '吸菸年劑量：約 13 mSv/year',
            'radon_exposure': '氡氣暴露：約 1.3 mSv/year (平均)',
        },
        'en': {
            'background_radiation': 'Natural Background: ~2-3 mSv/year',
            'chest_xray': 'Chest X-ray: ~0.1 mSv',
            'dental_xray': 'Dental X-ray: ~0.005 mSv',
            'ct_scan_head': 'Head CT: ~2 mSv',
            'ct_scan_chest': 'Chest CT: ~7 mSv',
            'ct_scan_abdomen': 'Abdominal CT: ~10 mSv',
            'mammography': 'Mammography: ~0.4 mSv',
            'nuclear_medicine': 'Nuclear Medicine: ~1-20 mSv',
            'pet_scan': 'PET Scan: ~7 mSv',
            'airline_crew_annual': 'Airline Crew Annual: ~2-5 mSv',
            'nuclear_worker_limit': 'Nuclear Worker Limit: 20 mSv/year',
            'public_dose_limit': 'Public Dose Limit: 1 mSv/year',
            'acute_radiation_syndrome': 'Acute Radiation Syndrome: >1 Sv',
            'lethal_dose_50': 'Lethal Dose 50%: ~4-5 Sv',
            'radiation_therapy': 'Radiation Therapy: ~50-70 Sv (local)',
            'chernobyl_liquidators': 'Chernobyl Liquidators: ~100-500 mSv',
            'fukushima_evacuation': 'Fukushima Evacuation: 20 mSv/year',
            'banana_equivalent': 'Banana Equivalent Dose: ~0.1 μSv',
            'smoking_annual': 'Smoking Annual: ~13 mSv/year',
            'radon_exposure': 'Radon Exposure: ~1.3 mSv/year (average)',
        },
    },
    'conversion_note': {
        'zh-TW': {
            'equivalent_dose_definition': '等效劑量 = 吸收劑量 × 輻射權重因子',
            'radiation_weighting': 'γ射線/X射線/β射線：權重因子=1，α射線：權重因子=20',
            'biological_effect': '考慮不同輻射類型對生物組織的相對危害',
            'dose_rate_importance': '劑量率影響生物效應，急性vs慢性暴露',
            'collective_dose': '集體劑量用於評估群體輻射風險',
            'alara_principle': 'ALARA原則：合理抑低(As Low As Reasonably Achievable)',
        },
        'en': {
            'equivalent_dose_definition': 'Equivalent Dose = Absorbed Dose × Radiation Weighting Factor',
            'radiation_weighting': 'γ/X/β rays: weighting factor=1, α rays: weighting factor=20',
            'biological_effect': 'Accounts for relative biological harm of different radiation types',
            'dose_rate_importance': 'Dose rate affects biological effects, acute vs chronic exposure',
            'collective_dose': 'Collective dose used to assess population radiation risk',
            'alara_principle': 'ALARA Principle: As Low As Reasonably Achievable',
        },
    },
    'dose_limits': {
        'zh-TW': {
            'occupational_annual': '職業暴露年限值：20 mSv',
            'occupational_5year': '職業暴露5年平均：100 mSv',
            'public_annual': '一般民眾年限值：1 mSv',
            'pregnant_worker': '懷孕工作者：2 mSv (懷孕期間)',
            'lens_of_eye': '眼水晶體：20 mSv/year (職業)',
            'skin_extremities': '皮膚/四肢：500 mSv/year (職業)',
            'emergency_workers': '緊急應變人員：100 mSv (單次)',
            'life_saving': '救生行動：>100 mSv (可考慮)',
        },
        'en': {
            'occupational_annual': 'Occupational Annual Limit: 20 mSv',
            'occupational_5year': 'Occupational 5-year Average: 100 mSv',
            'public_annual': 'Public Annual Limit: 1 mSv',
            'pregnant_worker': 'Pregnant Worker: 2 mSv (pregnancy period)',
            'lens_of_eye': 'Lens of Eye: 20 mSv/year (occupational)',
            'skin_extremities': 'Skin/Extremities: 500 mSv/year (occupational)',
            'emergency_workers': 'Emergency Workers: 100 mSv (single event)',
            'life_saving': 'Life Saving Actions: >100 mSv (may consider)',
        },
    },
}


