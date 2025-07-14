const pressureTable = {
    'unit': {
        // 以帕斯卡 (Pa) 為基準
        'pascal': { offset: 0, scale: 1 },                          // 1 Pa = 1 N/m²
        'kilopascal': { offset: 0, scale: 0.001 },                  // 1 kPa = 1000 Pa
        'megapascal': { offset: 0, scale: 0.000001 },               // 1 MPa = 10⁶ Pa
        'gigapascal': { offset: 0, scale: 0.000000001 },            // 1 GPa = 10⁹ Pa
        'hectopascal': { offset: 0, scale: 0.01 },                  // 1 hPa = 100 Pa
        'decibar': { offset: 0, scale: 0.0001 },                    // 1 dbar = 10⁴ Pa
        'millibar': { offset: 0, scale: 0.01 },                     // 1 mbar = 100 Pa
        'microbar': { offset: 0, scale: 10 },                       // 1 μbar = 0.1 Pa
        'nanobar': { offset: 0, scale: 10000 },                     // 1 nbar = 10⁻⁴ Pa

        // 巴系列
        'bar': { offset: 0, scale: 0.00001 },                       // 1 bar = 10⁵ Pa
        'kilobar': { offset: 0, scale: 0.00000001 },                // 1 kbar = 10⁸ Pa
        'megabar': { offset: 0, scale: 0.00000000001 },             // 1 Mbar = 10¹¹ Pa

        // 大氣壓系列
        'atmosphere_standard': { offset: 0, scale: 0.00000986923 }, // 1 atm = 101325 Pa
        'atmosphere_technical': { offset: 0, scale: 0.0000101972 }, // 1 at = 98066.5 Pa
        'milliatomsphere': { offset: 0, scale: 0.00986923 },        // 1 matm = 101.325 Pa

        // 汞柱系列
        'torr': { offset: 0, scale: 0.00750062 },                   // 1 Torr = 133.322 Pa
        'millimeter_mercury': { offset: 0, scale: 0.00750062 },     // 1 mmHg = 133.322 Pa
        'centimeter_mercury': { offset: 0, scale: 0.000750062 },    // 1 cmHg = 1333.22 Pa
        'inch_mercury': { offset: 0, scale: 0.000295301 },          // 1 inHg = 3386.39 Pa
        'meter_mercury': { offset: 0, scale: 0.00000750062 },       // 1 mHg = 133322 Pa
        'millitorr': { offset: 0, scale: 7.50062 },                 // 1 mTorr = 0.133322 Pa
        'microtorr': { offset: 0, scale: 7500.62 },                 // 1 μTorr = 1.33322×10⁻⁴ Pa

        // 水柱系列
        'meter_water': { offset: 0, scale: 0.000101972 },           // 1 mH₂O = 9806.65 Pa
        'centimeter_water': { offset: 0, scale: 0.0101972 },        // 1 cmH₂O = 98.0665 Pa
        'millimeter_water': { offset: 0, scale: 0.101972 },         // 1 mmH₂O = 9.80665 Pa
        'inch_water': { offset: 0, scale: 0.00401463 },             // 1 inH₂O = 249.089 Pa
        'foot_water': { offset: 0, scale: 0.000334552 },            // 1 ftH₂O = 2989.07 Pa

        // 英制單位
        'pound_per_square_inch': { offset: 0, scale: 0.000145038 }, // 1 psi = 6894.76 Pa
        'pound_per_square_foot': { offset: 0, scale: 0.0208854 },   // 1 psf = 47.8803 Pa
        'kip_per_square_inch': { offset: 0, scale: 0.000000145038 }, // 1 ksi = 6.89476×10⁶ Pa
        'ounce_per_square_inch': { offset: 0, scale: 0.00232061 },  // 1 ozi = 430.922 Pa
        'ton_per_square_inch': { offset: 0, scale: 7.25189e-8 },    // 1 tsi = 1.37895×10⁷ Pa
        'ton_per_square_foot': { offset: 0, scale: 0.0000104427 },  // 1 tsf = 95760.5 Pa

        // 公制重力單位
        'kilogram_per_square_meter': { offset: 0, scale: 0.101972 }, // 1 kgf/m² = 9.80665 Pa
        'kilogram_per_square_centimeter': { offset: 0, scale: 0.0000101972 }, // 1 kgf/cm² = 98066.5 Pa
        'gram_per_square_centimeter': { offset: 0, scale: 0.0101972 }, // 1 gf/cm² = 98.0665 Pa
        'tonne_per_square_meter': { offset: 0, scale: 0.000101972 }, // 1 tf/m² = 9806.65 Pa

        // 特殊單位
        'dyne_per_square_centimeter': { offset: 0, scale: 10 },      // 1 dyn/cm² = 0.1 Pa
        'poundal_per_square_foot': { offset: 0, scale: 0.0671969 }, // 1 pdl/ft² = 1.48816 Pa
        'newton_per_square_meter': { offset: 0, scale: 1 },         // 1 N/m² = 1 Pa
        'newton_per_square_millimeter': { offset: 0, scale: 0.000001 }, // 1 N/mm² = 10⁶ Pa

        // 真空單位
        'micron': { offset: 0, scale: 0.00750062 },                 // 1 μ = 1 μmHg = 0.133322 Pa
        'picobar': { offset: 0, scale: 10000000 },                  // 1 pbar = 10⁻⁷ Pa

        // 地質/地球物理單位
        'standard_atmosphere_depth': { offset: 0, scale: 0.0000986923 }, // 標準大氣深度
        'ocean_depth_meter': { offset: 0, scale: 0.0001 },          // 海洋深度 (約10 kPa/m)
        'geological_pressure': { offset: 0, scale: 0.00000001 },    // 地質壓力 (約100 MPa)

        // 生物醫學單位
        'blood_pressure_mmhg': { offset: 0, scale: 0.00750062 },    // 血壓 mmHg
        'cerebrospinal_fluid': { offset: 0, scale: 0.0101972 },     // 腦脊液壓 cmH₂O
        'intraocular_pressure': { offset: 0, scale: 0.00750062 },   // 眼壓 mmHg

        // 工業單位
        'pounds_per_square_inch_gauge': { offset: 0, scale: 0.000145038 }, // psig (表壓)
        'pounds_per_square_inch_absolute': { offset: 0, scale: 0.000145038 }, // psia (絕壓)
        'inches_mercury_gauge': { offset: 0, scale: 0.000295301 },  // inHg gauge
        'inches_water_gauge': { offset: 0, scale: 0.00401463 },     // inH₂O gauge

        // 其他歷史單位
        'barad': { offset: 0, scale: 10 },                          // 1 barad = 0.1 Pa
        'barye': { offset: 0, scale: 10 },                          // 1 barye = 0.1 Pa
        'pieze': { offset: 0, scale: 0.001 },                       // 1 pz = 1000 Pa
        'sthene_per_square_meter': { offset: 0, scale: 0.001 },     // 1 sn/m² = 1000 Pa
    },
    'language': {
        'zh-TW': {
            'pascal': '帕斯卡 (Pa)',
            'kilopascal': '千帕斯卡 (kPa)',
            'megapascal': '兆帕斯卡 (MPa)',
            'gigapascal': '吉帕斯卡 (GPa)',
            'hectopascal': '百帕斯卡 (hPa)',
            'decibar': '分巴 (dbar)',
            'millibar': '毫巴 (mbar)',
            'microbar': '微巴 (μbar)',
            'nanobar': '納巴 (nbar)',
            'bar': '巴 (bar)',
            'kilobar': '千巴 (kbar)',
            'megabar': '兆巴 (Mbar)',
            'atmosphere_standard': '標準大氣壓 (atm)',
            'atmosphere_technical': '技術大氣壓 (at)',
            'milliatomsphere': '毫大氣壓 (matm)',
            'torr': '托 (Torr)',
            'millimeter_mercury': '毫米汞柱 (mmHg)',
            'centimeter_mercury': '公分汞柱 (cmHg)',
            'inch_mercury': '英寸汞柱 (inHg)',
            'meter_mercury': '米汞柱 (mHg)',
            'millitorr': '毫托 (mTorr)',
            'microtorr': '微托 (μTorr)',
            'meter_water': '米水柱 (mH₂O)',
            'centimeter_water': '公分水柱 (cmH₂O)',
            'millimeter_water': '毫米水柱 (mmH₂O)',
            'inch_water': '英寸水柱 (inH₂O)',
            'foot_water': '英尺水柱 (ftH₂O)',
            'pound_per_square_inch': '磅每平方英寸 (psi)',
            'pound_per_square_foot': '磅每平方英尺 (psf)',
            'kip_per_square_inch': '千磅每平方英寸 (ksi)',
            'ounce_per_square_inch': '盎司每平方英寸 (ozi)',
            'ton_per_square_inch': '噸每平方英寸 (tsi)',
            'ton_per_square_foot': '噸每平方英尺 (tsf)',
            'kilogram_per_square_meter': '公斤每平方米 (kgf/m²)',
            'kilogram_per_square_centimeter': '公斤每平方公分 (kgf/cm²)',
            'gram_per_square_centimeter': '公克每平方公分 (gf/cm²)',
            'tonne_per_square_meter': '噸每平方米 (tf/m²)',
            'dyne_per_square_centimeter': '達因每平方公分 (dyn/cm²)',
            'poundal_per_square_foot': '磅達每平方英尺 (pdl/ft²)',
            'newton_per_square_meter': '牛頓每平方米 (N/m²)',
            'newton_per_square_millimeter': '牛頓每平方毫米 (N/mm²)',
            'micron': '微米汞柱 (μ)',
            'picobar': '皮巴 (pbar)',
            'standard_atmosphere_depth': '標準大氣深度',
            'ocean_depth_meter': '海洋深度米',
            'geological_pressure': '地質壓力',
            'blood_pressure_mmhg': '血壓毫米汞柱',
            'cerebrospinal_fluid': '腦脊液壓',
            'intraocular_pressure': '眼壓',
            'pounds_per_square_inch_gauge': '磅每平方英寸表壓 (psig)',
            'pounds_per_square_inch_absolute': '磅每平方英寸絕壓 (psia)',
            'inches_mercury_gauge': '英寸汞柱表壓',
            'inches_water_gauge': '英寸水柱表壓',
            'barad': '巴拉德 (barad)',
            'barye': '巴里 (barye)',
            'pieze': '皮澤 (pz)',
            'sthene_per_square_meter': '斯坦每平方米 (sn/m²)',
        },
        'en': {
            'pascal': 'Pascal (Pa)',
            'kilopascal': 'Kilopascal (kPa)',
            'megapascal': 'Megapascal (MPa)',
            'gigapascal': 'Gigapascal (GPa)',
            'hectopascal': 'Hectopascal (hPa)',
            'decibar': 'Decibar (dbar)',
            'millibar': 'Millibar (mbar)',
            'microbar': 'Microbar (μbar)',
            'nanobar': 'Nanobar (nbar)',
            'bar': 'Bar (bar)',
            'kilobar': 'Kilobar (kbar)',
            'megabar': 'Megabar (Mbar)',
            'atmosphere_standard': 'Standard Atmosphere (atm)',
            'atmosphere_technical': 'Technical Atmosphere (at)',
            'milliatomsphere': 'Milliatomsphere (matm)',
            'torr': 'Torr (Torr)',
            'millimeter_mercury': 'Millimeter of Mercury (mmHg)',
            'centimeter_mercury': 'Centimeter of Mercury (cmHg)',
            'inch_mercury': 'Inch of Mercury (inHg)',
            'meter_mercury': 'Meter of Mercury (mHg)',
            'millitorr': 'Millitorr (mTorr)',
            'microtorr': 'Microtorr (μTorr)',
            'meter_water': 'Meter of Water (mH₂O)',
            'centimeter_water': 'Centimeter of Water (cmH₂O)',
            'millimeter_water': 'Millimeter of Water (mmH₂O)',
            'inch_water': 'Inch of Water (inH₂O)',
            'foot_water': 'Foot of Water (ftH₂O)',
            'pound_per_square_inch': 'Pound per Square Inch (psi)',
            'pound_per_square_foot': 'Pound per Square Foot (psf)',
            'kip_per_square_inch': 'Kip per Square Inch (ksi)',
            'ounce_per_square_inch': 'Ounce per Square Inch (ozi)',
            'ton_per_square_inch': 'Ton per Square Inch (tsi)',
            'ton_per_square_foot': 'Ton per Square Foot (tsf)',
            'kilogram_per_square_meter': 'Kilogram-force per Square Meter (kgf/m²)',
            'kilogram_per_square_centimeter': 'Kilogram-force per Square Centimeter (kgf/cm²)',
            'gram_per_square_centimeter': 'Gram-force per Square Centimeter (gf/cm²)',
            'tonne_per_square_meter': 'Tonne-force per Square Meter (tf/m²)',
            'dyne_per_square_centimeter': 'Dyne per Square Centimeter (dyn/cm²)',
            'poundal_per_square_foot': 'Poundal per Square Foot (pdl/ft²)',
            'newton_per_square_meter': 'Newton per Square Meter (N/m²)',
            'newton_per_square_millimeter': 'Newton per Square Millimeter (N/mm²)',
            'micron': 'Micron of Mercury (μ)',
            'picobar': 'Picobar (pbar)',
            'standard_atmosphere_depth': 'Standard Atmosphere Depth',
            'ocean_depth_meter': 'Ocean Depth Meter',
            'geological_pressure': 'Geological Pressure',
            'blood_pressure_mmhg': 'Blood Pressure mmHg',
            'cerebrospinal_fluid': 'Cerebrospinal Fluid Pressure',
            'intraocular_pressure': 'Intraocular Pressure',
            'pounds_per_square_inch_gauge': 'Pounds per Square Inch Gauge (psig)',
            'pounds_per_square_inch_absolute': 'Pounds per Square Inch Absolute (psia)',
            'inches_mercury_gauge': 'Inches Mercury Gauge',
            'inches_water_gauge': 'Inches Water Gauge',
            'barad': 'Barad (barad)',
            'barye': 'Barye (barye)',
            'pieze': 'Pieze (pz)',
            'sthene_per_square_meter': 'Sthène per Square Meter (sn/m²)',
        },
    },
    'reference_values': {
        'zh-TW': {
            'atmospheric_pressure': '標準大氣壓：101.325 kPa',
            'vacuum_perfect': '完全真空：0 Pa',
            'blood_pressure_systolic': '收縮壓：約 16 kPa (120 mmHg)',
            'blood_pressure_diastolic': '舒張壓：約 11 kPa (80 mmHg)',
            'tire_pressure_car': '汽車輪胎：約 200-250 kPa',
            'tire_pressure_bicycle': '自行車輪胎：約 400-800 kPa',
            'scuba_tank': '潛水氣瓶：約 20 MPa',
            'hydraulic_system': '液壓系統：約 10-70 MPa',
            'water_pressure_10m': '10米水深：約 200 kPa',
            'water_pressure_100m': '100米水深：約 1 MPa',
            'mariana_trench': '馬里亞納海溝：約 110 MPa',
            'earth_core': '地球核心：約 360 GPa',
            'diamond_anvil': '鑽石砧：約 500 GPa',
            'sound_pressure_whisper': '耳語聲壓：約 2×10⁻⁵ Pa',
            'sound_pressure_conversation': '對話聲壓：約 2×10⁻² Pa',
            'sound_pressure_jet': '噴射機聲壓：約 200 Pa',
            'boiler_pressure': '鍋爐壓力：約 1-10 MPa',
            'gas_cylinder': '氣體鋼瓶：約 15-20 MPa',
            'weather_high': '高氣壓：約 103-105 kPa',
            'weather_low': '低氣壓：約 98-100 kPa',
        },
        'en': {
            'atmospheric_pressure': 'Standard Atmospheric Pressure: 101.325 kPa',
            'vacuum_perfect': 'Perfect Vacuum: 0 Pa',
            'blood_pressure_systolic': 'Systolic Blood Pressure: ~16 kPa (120 mmHg)',
            'blood_pressure_diastolic': 'Diastolic Blood Pressure: ~11 kPa (80 mmHg)',
            'tire_pressure_car': 'Car Tire Pressure: ~200-250 kPa',
            'tire_pressure_bicycle': 'Bicycle Tire Pressure: ~400-800 kPa',
            'scuba_tank': 'Scuba Tank: ~20 MPa',
            'hydraulic_system': 'Hydraulic System: ~10-70 MPa',
            'water_pressure_10m': '10m Water Depth: ~200 kPa',
            'water_pressure_100m': '100m Water Depth: ~1 MPa',
            'mariana_trench': 'Mariana Trench: ~110 MPa',
            'earth_core': 'Earth Core: ~360 GPa',
            'diamond_anvil': 'Diamond Anvil: ~500 GPa',
            'sound_pressure_whisper': 'Whisper Sound Pressure: ~2×10⁻⁵ Pa',
            'sound_pressure_conversation': 'Conversation Sound Pressure: ~2×10⁻² Pa',
            'sound_pressure_jet': 'Jet Sound Pressure: ~200 Pa',
            'boiler_pressure': 'Boiler Pressure: ~1-10 MPa',
            'gas_cylinder': 'Gas Cylinder: ~15-20 MPa',
            'weather_high': 'High Pressure Weather: ~103-105 kPa',
            'weather_low': 'Low Pressure Weather: ~98-100 kPa',
        },
    },
    'conversion_note': {
        'zh-TW': {
            'pressure_definition': '壓力 = 力 / 面積 (P = F/A)',
            'gauge_vs_absolute': '表壓 = 絕壓 - 大氣壓',
            'hydrostatic_pressure': '靜水壓力：P = ρgh',
            'pascal_principle': '帕斯卡原理：密閉流體中壓力均勻傳遞',
            'temperature_dependence': '氣體壓力隨溫度變化',
            'vacuum_levels': '真空度：粗真空、高真空、超高真空',
        },
        'en': {
            'pressure_definition': 'Pressure = Force / Area (P = F/A)',
            'gauge_vs_absolute': 'Gauge Pressure = Absolute Pressure - Atmospheric Pressure',
            'hydrostatic_pressure': 'Hydrostatic Pressure: P = ρgh',
            'pascal_principle': 'Pascal\'s Principle: Pressure transmitted uniformly in confined fluid',
            'temperature_dependence': 'Gas pressure varies with temperature',
            'vacuum_levels': 'Vacuum levels: Rough, high, ultra-high vacuum',
        },
    },
    'applications': {
        'zh-TW': {
            'meteorology': '氣象學：氣壓測量、天氣預報',
            'hydraulics': '液壓學：液壓系統、水利工程',
            'medical': '醫學：血壓測量、呼吸器設定',
            'automotive': '汽車工程：輪胎壓力、引擎壓縮',
            'aerospace': '航太工程：艙壓控制、推進系統',
            'diving': '潛水：水壓計算、減壓病預防',
            'manufacturing': '製造業：壓力容器、品質控制',
            'geology': '地質學：岩石壓力、油氣探勘',
            'vacuum_technology': '真空技術：半導體製造、科學研究',
            'food_processing': '食品加工：高壓殺菌、包裝',
        },
        'en': {
            'meteorology': 'Meteorology: Barometric measurement, weather forecasting',
            'hydraulics': 'Hydraulics: Hydraulic systems, water engineering',
            'medical': 'Medical: Blood pressure measurement, ventilator settings',
            'automotive': 'Automotive: Tire pressure, engine compression',
            'aerospace': 'Aerospace: Cabin pressure control, propulsion systems',
            'diving': 'Diving: Water pressure calculation, decompression sickness prevention',
            'manufacturing': 'Manufacturing: Pressure vessels, quality control',
            'geology': 'Geology: Rock pressure, oil and gas exploration',
            'vacuum_technology': 'Vacuum Technology: Semiconductor manufacturing, scientific research',
            'food_processing': 'Food Processing: High pressure sterilization, packaging',
        },
    },
}

module.exports = pressureTable;
