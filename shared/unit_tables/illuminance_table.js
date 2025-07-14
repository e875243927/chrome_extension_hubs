const illuminanceTable = {
    'unit': {
        // 以勒克斯 (Lux) 為基準
        'lux': { offset: 0, scale: 1 },
        'lumen_per_m2': { offset: 0, scale: 1 },           // 1 lx = 1 lm/m²

        // 勒克斯的倍數單位
        'kilolux': { offset: 0, scale: 0.001 },            // 1 klx = 1,000 lx
        'millilux': { offset: 0, scale: 1000 },            // 1 mlx = 0.001 lx
        'microlux': { offset: 0, scale: 1000000 },         // 1 μlx = 0.000001 lx
        'nanolux': { offset: 0, scale: 1000000000 },       // 1 nlx = 0.000000001 lx

        // 流明每單位面積
        'lumen_per_cm2': { offset: 0, scale: 0.0001 },     // 1 lm/cm² = 10,000 lx
        'lumen_per_mm2': { offset: 0, scale: 0.000001 },   // 1 lm/mm² = 1,000,000 lx
        'lumen_per_in2': { offset: 0, scale: 0.00064516 }, // 1 lm/in² ≈ 1,550 lx
        'lumen_per_ft2': { offset: 0, scale: 0.092903 },   // 1 lm/ft² ≈ 10.764 lx

        // 傳統單位
        'foot_candle': { offset: 0, scale: 0.092903 },     // 1 fc ≈ 10.764 lx
        'foot_lambert': { offset: 0, scale: 0.092903 },    // 同 foot-candle
        'phot': { offset: 0, scale: 0.0001 },              // 1 ph = 10,000 lx
        'nox': { offset: 0, scale: 1000 },                 // 1 nox = 0.001 lx

        // 其他地區單位
        'meter_candle': { offset: 0, scale: 1 },           // 1 meter-candle = 1 lx
        'centimeter_candle': { offset: 0, scale: 0.0001 }, // 1 cm-candle = 10,000 lx

        // 天文學單位
        'solar_constant': { offset: 0, scale: 0.0000074 }, // 太陽常數 ≈ 135,000 lx

        // 攝影測光單位 (近似值)
        'ev_at_iso100': { offset: 0, scale: 1 },           // EV值轉換（需要複雜計算）

        // 舊制單位
        'candle_per_ft2': { offset: 0, scale: 0.092903 },  // 同 foot-candle
        'apostilb': { offset: 0, scale: 3.14159 },         // 1 asb ≈ 0.318 lx
        'blondel': { offset: 0, scale: 3.14159 },          // 1 blondel ≈ 0.318 lx
        'bril': { offset: 0, scale: 100000000000000 },     // 1 bril = 10^-14 lx
        'skot': { offset: 0, scale: 3141.59 },             // 1 skot ≈ 0.000318 lx
    },
    'language': {
        'zh-TW': {
            'lux': '勒克斯 (lx)',
            'lumen_per_m2': '流明每平方米 (lm/m²)',
            'kilolux': '千勒克斯 (klx)',
            'millilux': '毫勒克斯 (mlx)',
            'microlux': '微勒克斯 (μlx)',
            'nanolux': '納勒克斯 (nlx)',
            'lumen_per_cm2': '流明每平方厘米 (lm/cm²)',
            'lumen_per_mm2': '流明每平方毫米 (lm/mm²)',
            'lumen_per_in2': '流明每平方英寸 (lm/in²)',
            'lumen_per_ft2': '流明每平方英尺 (lm/ft²)',
            'foot_candle': '英尺燭光 (fc)',
            'foot_lambert': '英尺朗伯 (fL)',
            'phot': '菲特 (ph)',
            'nox': '諾克斯 (nox)',
            'meter_candle': '米燭光 (m-c)',
            'centimeter_candle': '厘米燭光 (cm-c)',
            'solar_constant': '太陽常數單位',
            'ev_at_iso100': '曝光值 ISO100 (EV)',
            'candle_per_ft2': '燭光每平方英尺 (cd/ft²)',
            'apostilb': '阿波斯提爾布 (asb)',
            'blondel': '布隆德爾 (blondel)',
            'bril': '布里爾 (bril)',
            'skot': '斯科特 (skot)',
        },
        'en': {
            'lux': 'Lux (lx)',
            'lumen_per_m2': 'Lumen per m² (lm/m²)',
            'kilolux': 'Kilolux (klx)',
            'millilux': 'Millilux (mlx)',
            'microlux': 'Microlux (μlx)',
            'nanolux': 'Nanolux (nlx)',
            'lumen_per_cm2': 'Lumen per cm² (lm/cm²)',
            'lumen_per_mm2': 'Lumen per mm² (lm/mm²)',
            'lumen_per_in2': 'Lumen per in² (lm/in²)',
            'lumen_per_ft2': 'Lumen per ft² (lm/ft²)',
            'foot_candle': 'Foot-candle (fc)',
            'foot_lambert': 'Foot-lambert (fL)',
            'phot': 'Phot (ph)',
            'nox': 'Nox (nox)',
            'meter_candle': 'Meter-candle (m-c)',
            'centimeter_candle': 'Centimeter-candle (cm-c)',
            'solar_constant': 'Solar Constant Unit',
            'ev_at_iso100': 'Exposure Value ISO100 (EV)',
            'candle_per_ft2': 'Candle per ft² (cd/ft²)',
            'apostilb': 'Apostilb (asb)',
            'blondel': 'Blondel (blondel)',
            'bril': 'Bril (bril)',
            'skot': 'Skot (skot)',
        },
    },
    'reference_values': {
        'zh-TW': {
            'sunlight_direct': '直射陽光：100,000 lx',
            'sunlight_cloudy': '陰天：10,000 lx',
            'office_lighting': '辦公室照明：300-500 lx',
            'home_lighting': '家庭照明：100-300 lx',
            'street_lighting': '街道照明：10-20 lx',
            'moonlight_full': '滿月：0.2 lx',
            'starlight': '星光：0.001 lx',
        },
        'en': {
            'sunlight_direct': 'Direct Sunlight: 100,000 lx',
            'sunlight_cloudy': 'Cloudy Day: 10,000 lx',
            'office_lighting': 'Office Lighting: 300-500 lx',
            'home_lighting': 'Home Lighting: 100-300 lx',
            'street_lighting': 'Street Lighting: 10-20 lx',
            'moonlight_full': 'Full Moon: 0.2 lx',
            'starlight': 'Starlight: 0.001 lx',
        },
    },
}

module.exports = illuminanceTable;
