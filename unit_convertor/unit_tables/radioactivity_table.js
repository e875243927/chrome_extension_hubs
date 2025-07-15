export const radioactivityTable = {
    'unit': {
        // 以貝克勒爾 (Bq) 為基準
        'becquerel': { offset: 0, scale: 1 },                       // 1 Bq = 1 衰變/秒
        'kilobecquerel': { offset: 0, scale: 0.001 },               // 1 kBq = 1,000 Bq
        'megabecquerel': { offset: 0, scale: 0.000001 },            // 1 MBq = 10⁶ Bq
        'gigabecquerel': { offset: 0, scale: 0.000000001 },         // 1 GBq = 10⁹ Bq
        'terabecquerel': { offset: 0, scale: 1e-12 },               // 1 TBq = 10¹² Bq
        'petabecquerel': { offset: 0, scale: 1e-15 },               // 1 PBq = 10¹⁵ Bq
        'exabecquerel': { offset: 0, scale: 1e-18 },                // 1 EBq = 10¹⁸ Bq

        'curie': { offset: 0, scale: 2.7027e-11 },                  // 1 Ci = 3.7×10¹⁰ Bq
        'millicurie': { offset: 0, scale: 2.7027e-8 },              // 1 mCi = 3.7×10⁷ Bq
        'microcurie': { offset: 0, scale: 2.7027e-5 },              // 1 μCi = 3.7×10⁴ Bq
        'nanocurie': { offset: 0, scale: 0.027027 },                // 1 nCi = 37 Bq
        'picocurie': { offset: 0, scale: 27.027 },                  // 1 pCi = 0.037 Bq
        'femtocurie': { offset: 0, scale: 27027 },                  // 1 fCi = 3.7×10⁻⁵ Bq
        'attocurie': { offset: 0, scale: 27027000 },                // 1 aCi = 3.7×10⁻⁸ Bq

        'rutherford': { offset: 0, scale: 1e-6 },                   // 1 Rd = 10⁶ Bq (歷史單位)
        'mache_unit': { offset: 0, scale: 2.7027e-8 },              // 1 ME = 3.7×10⁷ Bq (氡氣用)

        'disintegrations_per_second': { offset: 0, scale: 1 },      // 1 dps = 1 Bq
        'disintegrations_per_minute': { offset: 0, scale: 60 },     // 1 dpm = 1/60 Bq
        'disintegrations_per_hour': { offset: 0, scale: 3600 },     // 1 dph = 1/3600 Bq

        'counts_per_second': { offset: 0, scale: 1 },               // 1 cps ≈ 1 Bq (假設100%效率)
        'counts_per_minute': { offset: 0, scale: 60 },              // 1 cpm ≈ 1/60 Bq (假設100%效率)
        'counts_per_hour': { offset: 0, scale: 3600 },              // 1 cph ≈ 1/3600 Bq (假設100%效率)

        // 小單位
        'millibecquerel': { offset: 0, scale: 1000 },               // 1 mBq = 0.001 Bq
        'microbecquerel': { offset: 0, scale: 1000000 },            // 1 μBq = 10⁻⁶ Bq
        'nanobecquerel': { offset: 0, scale: 1000000000 },          // 1 nBq = 10⁻⁹ Bq
        'picobecquerel': { offset: 0, scale: 1000000000000 },       // 1 pBq = 10⁻¹² Bq
        'femtobecquerel': { offset: 0, scale: 1000000000000000 },   // 1 fBq = 10⁻¹⁵ Bq
        'attobecquerel': { offset: 0, scale: 1000000000000000000 }, // 1 aBq = 10⁻¹⁸ Bq
    },
    'language': {
        'zh-TW': {
            'becquerel': '貝克勒爾 (Bq)',
            'kilobecquerel': '千貝克勒爾 (kBq)',
            'megabecquerel': '兆貝克勒爾 (MBq)',
            'gigabecquerel': '吉貝克勒爾 (GBq)',
            'terabecquerel': '太貝克勒爾 (TBq)',
            'petabecquerel': '拍貝克勒爾 (PBq)',
            'exabecquerel': '艾貝克勒爾 (EBq)',
            'curie': '居里 (Ci)',
            'millicurie': '毫居里 (mCi)',
            'microcurie': '微居里 (μCi)',
            'nanocurie': '納居里 (nCi)',
            'picocurie': '皮居里 (pCi)',
            'femtocurie': '飛居里 (fCi)',
            'attocurie': '阿居里 (aCi)',
            'rutherford': '拉塞福 (Rd)',
            'mache_unit': '馬赫單位 (ME)',
            'disintegrations_per_second': '衰變每秒 (dps)',
            'disintegrations_per_minute': '衰變每分 (dpm)',
            'disintegrations_per_hour': '衰變每時 (dph)',
            'counts_per_second': '計數每秒 (cps)',
            'counts_per_minute': '計數每分 (cpm)',
            'counts_per_hour': '計數每時 (cph)',
            'millibecquerel': '毫貝克勒爾 (mBq)',
            'microbecquerel': '微貝克勒爾 (μBq)',
            'nanobecquerel': '納貝克勒爾 (nBq)',
            'picobecquerel': '皮貝克勒爾 (pBq)',
            'femtobecquerel': '飛貝克勒爾 (fBq)',
            'attobecquerel': '阿貝克勒爾 (aBq)',
        },
        'en': {
            'becquerel': 'Becquerel (Bq)',
            'kilobecquerel': 'Kilobecquerel (kBq)',
            'megabecquerel': 'Megabecquerel (MBq)',
            'gigabecquerel': 'Gigabecquerel (GBq)',
            'terabecquerel': 'Terabecquerel (TBq)',
            'petabecquerel': 'Petabecquerel (PBq)',
            'exabecquerel': 'Exabecquerel (EBq)',
            'curie': 'Curie (Ci)',
            'millicurie': 'Millicurie (mCi)',
            'microcurie': 'Microcurie (μCi)',
            'nanocurie': 'Nanocurie (nCi)',
            'picocurie': 'Picocurie (pCi)',
            'femtocurie': 'Femtocurie (fCi)',
            'attocurie': 'Attocurie (aCi)',
            'rutherford': 'Rutherford (Rd)',
            'mache_unit': 'Mache Unit (ME)',
            'disintegrations_per_second': 'Disintegrations per Second (dps)',
            'disintegrations_per_minute': 'Disintegrations per Minute (dpm)',
            'disintegrations_per_hour': 'Disintegrations per Hour (dph)',
            'counts_per_second': 'Counts per Second (cps)',
            'counts_per_minute': 'Counts per Minute (cpm)',
            'counts_per_hour': 'Counts per Hour (cph)',
            'millibecquerel': 'Millibecquerel (mBq)',
            'microbecquerel': 'Microbecquerel (μBq)',
            'nanobecquerel': 'Nanobecquerel (nBq)',
            'picobecquerel': 'Picobecquerel (pBq)',
            'femtobecquerel': 'Femtobecquerel (fBq)',
            'attobecquerel': 'Attobecquerel (aBq)',
        },
    },
    'reference_values': {
        'zh-TW': {
            'banana_equivalent': '香蕉等效劑量：約 15 Bq (鉀-40)',
            'human_body': '人體天然放射性：約 4,000 Bq',
            'smoke_detector': '煙霧探測器：約 37 kBq (鋂-241)',
            'chest_xray_source': '胸部X光機源：約 1-10 TBq',
            'nuclear_medicine': '核醫學檢查：約 100-800 MBq',
            'chernobyl_release': '車諾比事故釋放：約 5.2×10¹⁸ Bq',
            'fukushima_release': '福島事故釋放：約 1.5×10¹⁷ Bq',
            'radon_indoor': '室內氡氣：約 40 Bq/m³ (平均)',
            'carbon_14_dating': '碳-14定年：約 230 Bq/kg (活體碳)',
            'tritium_watch': '氚氣手錶：約 0.9 GBq',
            'medical_isotope_tc99m': '醫用Tc-99m：約 740 MBq (典型劑量)',
            'nuclear_reactor': '核反應爐：約 10²⁰ Bq (運轉中)',
        },
        'en': {
            'banana_equivalent': 'Banana Equivalent: ~15 Bq (K-40)',
            'human_body': 'Human Body Natural: ~4,000 Bq',
            'smoke_detector': 'Smoke Detector: ~37 kBq (Am-241)',
            'chest_xray_source': 'Chest X-ray Source: ~1-10 TBq',
            'nuclear_medicine': 'Nuclear Medicine: ~100-800 MBq',
            'chernobyl_release': 'Chernobyl Release: ~5.2×10¹⁸ Bq',
            'fukushima_release': 'Fukushima Release: ~1.5×10¹⁷ Bq',
            'radon_indoor': 'Indoor Radon: ~40 Bq/m³ (average)',
            'carbon_14_dating': 'Carbon-14 Dating: ~230 Bq/kg (living carbon)',
            'tritium_watch': 'Tritium Watch: ~0.9 GBq',
            'medical_isotope_tc99m': 'Medical Tc-99m: ~740 MBq (typical dose)',
            'nuclear_reactor': 'Nuclear Reactor: ~10²⁰ Bq (operating)',
        },
    },
    'conversion_note': {
        'zh-TW': {
            'activity_definition': '活度表示每秒發生的放射性衰變次數',
            'curie_origin': '居里原定義為1克鐳-226的活度',
            'detection_efficiency': '計數率(cpm/cps)需考慮探測器效率',
            'half_life_relation': '活度會隨半衰期指數衰減',
            'different_quantities': '活度≠劑量，需要其他因子計算生物效應',
        },
        'en': {
            'activity_definition': 'Activity represents the number of radioactive decays per second',
            'curie_origin': 'Curie was originally defined as the activity of 1 gram of Ra-226',
            'detection_efficiency': 'Count rates (cpm/cps) must account for detector efficiency',
            'half_life_relation': 'Activity decays exponentially with half-life',
            'different_quantities': 'Activity ≠ Dose, other factors needed for biological effects',
        },
    },
}


