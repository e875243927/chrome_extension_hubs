const magneticFieldTable = {
    'unit': {
        // 以特斯拉 (Tesla) 為基準
        'tesla': { offset: 0, scale: 1 },
        'gauss': { offset: 0, scale: 10000 },              // 1 T = 10,000 G
        'weber_per_m2': { offset: 0, scale: 1 },           // 1 T = 1 Wb/m²

        // 特斯拉的倍數單位
        'millitesla': { offset: 0, scale: 1000 },          // 1 T = 1,000 mT
        'microtesla': { offset: 0, scale: 1000000 },       // 1 T = 1,000,000 μT
        'nanotesla': { offset: 0, scale: 1000000000 },     // 1 T = 1,000,000,000 nT
        'picotesla': { offset: 0, scale: 1000000000000 },  // 1 T = 1,000,000,000,000 pT
        'femtotesla': { offset: 0, scale: 1000000000000000 }, // 1 T = 1,000,000,000,000,000 fT

        // 高斯的倍數單位
        'kilogauss': { offset: 0, scale: 10 },             // 1 T = 10 kG
        'milligauss': { offset: 0, scale: 10000000 },      // 1 T = 10,000,000 mG
        'microgauss': { offset: 0, scale: 10000000000 },   // 1 T = 10,000,000,000 μG

        // 韋伯的倍數單位
        'weber_per_cm2': { offset: 0, scale: 0.0001 },     // 1 T = 0.0001 Wb/cm²
        'weber_per_mm2': { offset: 0, scale: 0.000001 },   // 1 T = 0.000001 Wb/mm²
        'milliweber_per_m2': { offset: 0, scale: 1000 },   // 1 T = 1,000 mWb/m²
        'microweber_per_m2': { offset: 0, scale: 1000000 }, // 1 T = 1,000,000 μWb/m²

        // 地磁測量單位
        'gamma': { offset: 0, scale: 1000000000 },         // 1 T = 1,000,000,000 γ (= nT)

        // 磁場強度單位 (需要轉換係數)
        'oersted': { offset: 0, scale: 795.7747154594767 }, // 1 T ≈ 795.77 Oe (在真空中)
        'ampere_per_meter': { offset: 0, scale: 795774.7154594767 }, // 1 T ≈ 795,774.72 A/m
        'ampere_per_cm': { offset: 0, scale: 7957.747154594767 },    // 1 T ≈ 7,957.75 A/cm
        'ampere_per_mm': { offset: 0, scale: 795.7747154594767 },    // 1 T ≈ 795.77 A/mm

        // 舊制單位
        'maxwell_per_cm2': { offset: 0, scale: 10000 },    // 1 T = 10,000 Mx/cm² (= G)
        'lines_per_inch2': { offset: 0, scale: 64516 },    // 1 T ≈ 64,516 lines/in²

        // 工程單位
        'volt_second_per_m2': { offset: 0, scale: 1 },     // 1 T = 1 V·s/m²
        'kilogram_per_ampere_second2': { offset: 0, scale: 1 }, // 1 T = 1 kg/(A·s²)
    },
    'language': {
        'zh-TW': {
            'tesla': '特斯拉 (T)',
            'gauss': '高斯 (G)',
            'weber_per_m2': '韋伯每平方米 (Wb/m²)',
            'millitesla': '毫特斯拉 (mT)',
            'microtesla': '微特斯拉 (μT)',
            'nanotesla': '納特斯拉 (nT)',
            'picotesla': '皮特斯拉 (pT)',
            'femtotesla': '飛特斯拉 (fT)',
            'kilogauss': '千高斯 (kG)',
            'milligauss': '毫高斯 (mG)',
            'microgauss': '微高斯 (μG)',
            'weber_per_cm2': '韋伯每平方厘米 (Wb/cm²)',
            'weber_per_mm2': '韋伯每平方毫米 (Wb/mm²)',
            'milliweber_per_m2': '毫韋伯每平方米 (mWb/m²)',
            'microweber_per_m2': '微韋伯每平方米 (μWb/m²)',
            'gamma': '伽馬 (γ)',
            'oersted': '奧斯特 (Oe)',
            'ampere_per_meter': '安培每米 (A/m)',
            'ampere_per_cm': '安培每厘米 (A/cm)',
            'ampere_per_mm': '安培每毫米 (A/mm)',
            'maxwell_per_cm2': '麥克斯韋每平方厘米 (Mx/cm²)',
            'lines_per_inch2': '磁力線每平方英寸 (lines/in²)',
            'volt_second_per_m2': '伏特秒每平方米 (V·s/m²)',
            'kilogram_per_ampere_second2': '千克每安培平方秒 (kg/(A·s²))',
        },
        'en': {
            'tesla': 'Tesla (T)',
            'gauss': 'Gauss (G)',
            'weber_per_m2': 'Weber per m² (Wb/m²)',
            'millitesla': 'Millitesla (mT)',
            'microtesla': 'Microtesla (μT)',
            'nanotesla': 'Nanotesla (nT)',
            'picotesla': 'Picotesla (pT)',
            'femtotesla': 'Femtotesla (fT)',
            'kilogauss': 'Kilogauss (kG)',
            'milligauss': 'Milligauss (mG)',
            'microgauss': 'Microgauss (μG)',
            'weber_per_cm2': 'Weber per cm² (Wb/cm²)',
            'weber_per_mm2': 'Weber per mm² (Wb/mm²)',
            'milliweber_per_m2': 'Milliweber per m² (mWb/m²)',
            'microweber_per_m2': 'Microweber per m² (μWb/m²)',
            'gamma': 'Gamma (γ)',
            'oersted': 'Oersted (Oe)',
            'ampere_per_meter': 'Ampere per meter (A/m)',
            'ampere_per_cm': 'Ampere per cm (A/cm)',
            'ampere_per_mm': 'Ampere per mm (A/mm)',
            'maxwell_per_cm2': 'Maxwell per cm² (Mx/cm²)',
            'lines_per_inch2': 'Lines per inch² (lines/in²)',
            'volt_second_per_m2': 'Volt-second per m² (V·s/m²)',
            'kilogram_per_ampere_second2': 'Kilogram per ampere-second² (kg/(A·s²))',
        },
    },
}

module.exports = magneticFieldTable;
