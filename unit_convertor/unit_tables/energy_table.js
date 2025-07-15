export const energyTable = {
    'unit': {
        // 以焦耳 (J) 為基準
        'joule': { offset: 0, scale: 1 },
        'kilojoule': { offset: 0, scale: 0.001 },                   // 1 kJ = 1,000 J
        'megajoule': { offset: 0, scale: 0.000001 },               // 1 MJ = 1,000,000 J
        'gigajoule': { offset: 0, scale: 0.000000001 },            // 1 GJ = 1,000,000,000 J
        'terajoule': { offset: 0, scale: 1e-12 },                  // 1 TJ = 10¹² J
        'petajoule': { offset: 0, scale: 1e-15 },                  // 1 PJ = 10¹⁵ J

        // 電力單位
        'watt_hour': { offset: 0, scale: 0.0002777778 },           // 1 Wh = 3,600 J
        'kilowatt_hour': { offset: 0, scale: 2.7777778e-7 },       // 1 kWh = 3,600,000 J
        'megawatt_hour': { offset: 0, scale: 2.7777778e-10 },      // 1 MWh = 3.6×10⁹ J
        'gigawatt_hour': { offset: 0, scale: 2.7777778e-13 },      // 1 GWh = 3.6×10¹² J
        'terawatt_hour': { offset: 0, scale: 2.7777778e-16 },      // 1 TWh = 3.6×10¹⁵ J

        // 熱量單位
        'calorie': { offset: 0, scale: 0.239006 },                 // 1 cal = 4.184 J (thermochemical)
        'kilocalorie': { offset: 0, scale: 0.000239006 },          // 1 kcal = 4,184 J
        'calorie_15c': { offset: 0, scale: 0.238662 },             // 15°C卡路里
        'calorie_it': { offset: 0, scale: 0.238845 },              // IT卡路里
        'btu': { offset: 0, scale: 0.000947817 },                  // 1 BTU = 1,055.06 J
        'btu_it': { offset: 0, scale: 0.000947817 },               // IT BTU
        'btu_th': { offset: 0, scale: 0.000948451 },               // 熱化學 BTU
        'therm': { offset: 0, scale: 9.4804e-9 },                  // 1 therm = 105,506,000 J
        'quad': { offset: 0, scale: 9.4804e-19 },                  // 1 quad = 1.055×10¹⁸ J

        // 原子物理單位
        'electron_volt': { offset: 0, scale: 6.242e18 },           // 1 eV = 1.602×10⁻¹⁹ J
        'kiloelectron_volt': { offset: 0, scale: 6.242e15 },       // 1 keV = 1.602×10⁻¹⁶ J
        'megaelectron_volt': { offset: 0, scale: 6.242e12 },       // 1 MeV = 1.602×10⁻¹³ J
        'gigaelectron_volt': { offset: 0, scale: 6.242e9 },        // 1 GeV = 1.602×10⁻¹⁰ J
        'teraelectron_volt': { offset: 0, scale: 6.242e6 },        // 1 TeV = 1.602×10⁻⁷ J

        // 傳統機械單位
        'erg': { offset: 0, scale: 10000000 },                     // 1 erg = 10⁻⁷ J
        'foot_pound_force': { offset: 0, scale: 0.737562 },        // 1 ft·lbf = 1.355818 J
        'inch_pound_force': { offset: 0, scale: 8.85074 },         // 1 in·lbf = 0.112985 J
        'horsepower_hour': { offset: 0, scale: 3.725e-7 },         // 1 hp·h = 2,684,520 J
        'horsepower_hour_metric': { offset: 0, scale: 3.777e-7 },  // 1 PS·h = 2,647,796 J

        // 能源當量單位
        'tonne_oil_equivalent': { offset: 0, scale: 2.388e-11 },   // 1 toe = 41.868 GJ
        'tonne_coal_equivalent': { offset: 0, scale: 3.412e-11 },  // 1 tce = 29.31 GJ
        'barrel_oil_equivalent': { offset: 0, scale: 1.628e-9 },   // 1 boe = 6.14 GJ
        'cubic_meter_natural_gas': { offset: 0, scale: 2.778e-8 }, // 1 m³ NG ≈ 36 MJ
        'tonne_tnt': { offset: 0, scale: 2.39e-10 },               // 1 t TNT = 4.184 GJ
        'kiloton_tnt': { offset: 0, scale: 2.39e-13 },             // 1 kt TNT = 4.184 TJ
        'megaton_tnt': { offset: 0, scale: 2.39e-16 },             // 1 Mt TNT = 4.184 PJ

        // 其他單位
        'planck_energy': { offset: 0, scale: 5.11e-10 },           // 1 Eₚ ≈ 1.956 GJ
        'rydberg': { offset: 0, scale: 4.587e17 },                 // 1 Ry = 2.18×10⁻¹⁸ J
        'hartree': { offset: 0, scale: 2.294e17 },                 // 1 Eₕ = 4.36×10⁻¹⁸ J
        'celsius_heat_unit': { offset: 0, scale: 0.000526565 },    // 1 CHU = 1,899.1 J
        'gallon_gasoline_equivalent': { offset: 0, scale: 8.27e-9 }, // 1 GGE ≈ 121 MJ

        // 小單位
        'microjoule': { offset: 0, scale: 1000000 },               // 1 μJ = 10⁻⁶ J
        'nanojoule': { offset: 0, scale: 1000000000 },             // 1 nJ = 10⁻⁹ J
        'picojoule': { offset: 0, scale: 1000000000000 },          // 1 pJ = 10⁻¹² J
        'femtojoule': { offset: 0, scale: 1000000000000000 },      // 1 fJ = 10⁻¹⁵ J
        'attojoule': { offset: 0, scale: 1000000000000000000 },    // 1 aJ = 10⁻¹⁸ J
    },
    'language': {
        'zh-TW': {
            'joule': '焦耳 (J)',
            'kilojoule': '千焦耳 (kJ)',
            'megajoule': '兆焦耳 (MJ)',
            'gigajoule': '吉焦耳 (GJ)',
            'terajoule': '太焦耳 (TJ)',
            'petajoule': '拍焦耳 (PJ)',
            'watt_hour': '瓦特小時 (Wh)',
            'kilowatt_hour': '千瓦時 (kWh)',
            'megawatt_hour': '兆瓦時 (MWh)',
            'gigawatt_hour': '吉瓦時 (GWh)',
            'terawatt_hour': '太瓦時 (TWh)',
            'calorie': '卡路里 (cal)',
            'kilocalorie': '千卡路里 (kcal)',
            'calorie_15c': '15°C卡路里 (cal₁₅)',
            'calorie_it': 'IT卡路里 (calᵢₜ)',
            'btu': '英制熱量單位 (BTU)',
            'btu_it': 'IT BTU',
            'btu_th': '熱化學 BTU',
            'therm': '瑟姆 (therm)',
            'quad': '夸德 (quad)',
            'electron_volt': '電子伏特 (eV)',
            'kiloelectron_volt': '千電子伏特 (keV)',
            'megaelectron_volt': '兆電子伏特 (MeV)',
            'gigaelectron_volt': '吉電子伏特 (GeV)',
            'teraelectron_volt': '太電子伏特 (TeV)',
            'erg': '爾格 (erg)',
            'foot_pound_force': '英尺磅力 (ft·lbf)',
            'inch_pound_force': '英寸磅力 (in·lbf)',
            'horsepower_hour': '馬力小時 (hp·h)',
            'horsepower_hour_metric': '公制馬力小時 (PS·h)',
            'tonne_oil_equivalent': '噸油當量 (toe)',
            'tonne_coal_equivalent': '噸煤當量 (tce)',
            'barrel_oil_equivalent': '桶油當量 (boe)',
            'cubic_meter_natural_gas': '立方米天然氣 (m³ NG)',
            'tonne_tnt': '噸TNT當量 (t TNT)',
            'kiloton_tnt': '千噸TNT當量 (kt TNT)',
            'megaton_tnt': '百萬噸TNT當量 (Mt TNT)',
            'planck_energy': '普朗克能量 (Eₚ)',
            'rydberg': '里德伯 (Ry)',
            'hartree': '哈特里 (Eₕ)',
            'celsius_heat_unit': '攝氏熱量單位 (CHU)',
            'gallon_gasoline_equivalent': '加侖汽油當量 (GGE)',
            'microjoule': '微焦耳 (μJ)',
            'nanojoule': '納焦耳 (nJ)',
            'picojoule': '皮焦耳 (pJ)',
            'femtojoule': '飛焦耳 (fJ)',
            'attojoule': '阿焦耳 (aJ)',
        },
        'en': {
            'joule': 'Joule (J)',
            'kilojoule': 'Kilojoule (kJ)',
            'megajoule': 'Megajoule (MJ)',
            'gigajoule': 'Gigajoule (GJ)',
            'terajoule': 'Terajoule (TJ)',
            'petajoule': 'Petajoule (PJ)',
            'watt_hour': 'Watt Hour (Wh)',
            'kilowatt_hour': 'Kilowatt Hour (kWh)',
            'megawatt_hour': 'Megawatt Hour (MWh)',
            'gigawatt_hour': 'Gigawatt Hour (GWh)',
            'terawatt_hour': 'Terawatt Hour (TWh)',
            'calorie': 'Calorie (cal)',
            'kilocalorie': 'Kilocalorie (kcal)',
            'calorie_15c': '15°C Calorie (cal₁₅)',
            'calorie_it': 'IT Calorie (calᵢₜ)',
            'btu': 'British Thermal Unit (BTU)',
            'btu_it': 'IT BTU',
            'btu_th': 'Thermochemical BTU',
            'therm': 'Therm (therm)',
            'quad': 'Quad (quad)',
            'electron_volt': 'Electron Volt (eV)',
            'kiloelectron_volt': 'Kiloelectron Volt (keV)',
            'megaelectron_volt': 'Megaelectron Volt (MeV)',
            'gigaelectron_volt': 'Gigaelectron Volt (GeV)',
            'teraelectron_volt': 'Teraelectron Volt (TeV)',
            'erg': 'Erg (erg)',
            'foot_pound_force': 'Foot Pound-force (ft·lbf)',
            'inch_pound_force': 'Inch Pound-force (in·lbf)',
            'horsepower_hour': 'Horsepower Hour (hp·h)',
            'horsepower_hour_metric': 'Metric Horsepower Hour (PS·h)',
            'tonne_oil_equivalent': 'Tonne of Oil Equivalent (toe)',
            'tonne_coal_equivalent': 'Tonne of Coal Equivalent (tce)',
            'barrel_oil_equivalent': 'Barrel of Oil Equivalent (boe)',
            'cubic_meter_natural_gas': 'Cubic Meter Natural Gas (m³ NG)',
            'tonne_tnt': 'Tonne TNT Equivalent (t TNT)',
            'kiloton_tnt': 'Kiloton TNT Equivalent (kt TNT)',
            'megaton_tnt': 'Megaton TNT Equivalent (Mt TNT)',
            'planck_energy': 'Planck Energy (Eₚ)',
            'rydberg': 'Rydberg (Ry)',
            'hartree': 'Hartree (Eₕ)',
            'celsius_heat_unit': 'Celsius Heat Unit (CHU)',
            'gallon_gasoline_equivalent': 'Gallon Gasoline Equivalent (GGE)',
            'microjoule': 'Microjoule (μJ)',
            'nanojoule': 'Nanojoule (nJ)',
            'picojoule': 'Picojoule (pJ)',
            'femtojoule': 'Femtojoule (fJ)',
            'attojoule': 'Attojoule (aJ)',
        },
    },
    'reference_values': {
        'zh-TW': {
            'human_daily_energy': '人體日需能量：約 8,400 kJ (2,000 kcal)',
            'gasoline_liter': '1公升汽油：約 32 MJ',
            'household_daily': '家庭日用電：約 10-30 kWh',
            'lightning_bolt': '閃電：約 1-5 GJ',
            'nuclear_bomb_hiroshima': '廣島原子彈：約 63 TJ',
            'earth_orbital_energy': '地球軌道能：約 2.65×10³³ J',
            'photon_visible': '可見光光子：約 2-3 eV',
            'chemical_bond': '化學鍵能：約 1-10 eV',
        },
        'en': {
            'human_daily_energy': 'Human Daily Energy: ~8,400 kJ (2,000 kcal)',
            'gasoline_liter': '1 Liter Gasoline: ~32 MJ',
            'household_daily': 'Household Daily Electricity: ~10-30 kWh',
            'lightning_bolt': 'Lightning Bolt: ~1-5 GJ',
            'nuclear_bomb_hiroshima': 'Hiroshima Atomic Bomb: ~63 TJ',
            'earth_orbital_energy': 'Earth Orbital Energy: ~2.65×10³³ J',
            'photon_visible': 'Visible Light Photon: ~2-3 eV',
            'chemical_bond': 'Chemical Bond Energy: ~1-10 eV',
        },
    },
    'conversion_note': {
        'zh-TW': {
            'calorie_types': '卡路里有多種定義，營養學常用千卡路里(kcal)',
            'energy_equivalents': '能源當量單位用於比較不同燃料的能量含量',
            'precision_note': '轉換結果可能因定義標準不同而略有差異',
            'atomic_scale': '原子尺度常用電子伏特(eV)，宏觀尺度用焦耳(J)',
        },
        'en': {
            'calorie_types': 'There are multiple definitions of calorie, nutrition commonly uses kcal',
            'energy_equivalents': 'Energy equivalent units are used to compare energy content of different fuels',
            'precision_note': 'Conversion results may vary slightly due to different definition standards',
            'atomic_scale': 'Atomic scale commonly uses electron volts (eV), macroscopic scale uses joules (J)',
        },
    },
}


