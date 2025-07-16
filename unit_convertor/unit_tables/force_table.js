export const forceTable = {
    'unit': {
        // 以牛頓 (N) 為基準
        'newton': { offset: 0, scale: 1 },                          // 1 N = 1 kg⋅m/s²
        'kilonewton': { offset: 0, scale: 0.001 },                  // 1 kN = 1,000 N
        'meganewton': { offset: 0, scale: 0.000001 },               // 1 MN = 10⁶ N
        'giganewton': { offset: 0, scale: 0.000000001 },            // 1 GN = 10⁹ N
        'millinewton': { offset: 0, scale: 1000 },                  // 1 mN = 0.001 N
        'micronewton': { offset: 0, scale: 1000000 },               // 1 μN = 10⁻⁶ N
        'nanonewton': { offset: 0, scale: 1000000000 },             // 1 nN = 10⁻⁹ N
        'piconewton': { offset: 0, scale: 1000000000000 },          // 1 pN = 10⁻¹² N

        // CGS 單位系統
        'dyne': { offset: 0, scale: 100000 },                       // 1 dyn = 10⁻⁵ N
        'kilodyne': { offset: 0, scale: 100 },                      // 1 kdyn = 10⁻² N
        'megadyne': { offset: 0, scale: 0.1 },                      // 1 Mdyn = 10 N

        // 公制重力單位
        'kilogram_force': { offset: 0, scale: 0.101972 },           // 1 kgf = 9.80665 N
        'gram_force': { offset: 0, scale: 101.972 },                // 1 gf = 9.80665×10⁻³ N
        'tonne_force': { offset: 0, scale: 0.000101972 },           // 1 tf = 9806.65 N
        'milligram_force': { offset: 0, scale: 101972 },            // 1 mgf = 9.80665×10⁻⁶ N

        // 英制單位
        'pound_force': { offset: 0, scale: 0.224809 },              // 1 lbf = 4.448222 N
        'ounce_force': { offset: 0, scale: 3.59694 },               // 1 ozf = 0.278014 N
        'ton_force_short': { offset: 0, scale: 0.000112404 },       // 1 tonf (short) = 8896.44 N
        'ton_force_long': { offset: 0, scale: 0.0001 },             // 1 tonf (long) = 9964.02 N
        'kip': { offset: 0, scale: 0.000224809 },                   // 1 kip = 4448.22 N
        'poundal': { offset: 0, scale: 7.23301 },                   // 1 pdl = 0.138255 N

        // 特殊單位
        'sthene': { offset: 0, scale: 0.001 },                      // 1 sn = 1000 N (MTS系統)
        'kilopond': { offset: 0, scale: 0.101972 },                 // 1 kp = 1 kgf = 9.80665 N
        'pond': { offset: 0, scale: 101.972 },                      // 1 p = 1 gf = 9.80665×10⁻³ N

        // 原子/分子尺度力
        'atomic_unit_force': { offset: 0, scale: 1.21e11 },         // 1 au = 8.24×10⁻⁹ N
        'planck_force': { offset: 0, scale: 8.1e-45 },              // 1 F_P = 1.21×10⁴⁴ N

        // 歷史單位
        'grave_force': { offset: 0, scale: 0.101972 },              // 1 Gf = 1 kgf (舊法國單位)
        'hyl_force': { offset: 0, scale: 0.101972 },                // 1 hyl⋅m/s² = 9.80665 N

        // 工程單位
        'dekanewton': { offset: 0, scale: 0.1 },                    // 1 daN = 10 N
        'hectonewton': { offset: 0, scale: 0.01 },                  // 1 hN = 100 N
        'crinal': { offset: 0, scale: 100000 },                     // 1 crinal = 10⁻⁵ N (紡織)

        // 地球物理單位
        'bar_force': { offset: 0, scale: 0.00001 },                 // 1 bar⋅cm² = 10⁵ N
        'atmosphere_force': { offset: 0, scale: 0.00000986923 },    // 1 atm⋅cm² = 101325 N

        // 其他常用單位
        'joule_per_meter': { offset: 0, scale: 1 },                 // 1 J/m = 1 N
        'watt_second_per_meter': { offset: 0, scale: 1 },           // 1 W⋅s/m = 1 N
        'kilogram_meter_per_second_squared': { offset: 0, scale: 1 }, // 1 kg⋅m/s² = 1 N
    },
    'language': {
        'zh-TW': {
            'newton': '牛頓 (N)',
            'kilonewton': '千牛頓 (kN)',
            'meganewton': '兆牛頓 (MN)',
            'giganewton': '吉牛頓 (GN)',
            'millinewton': '毫牛頓 (mN)',
            'micronewton': '微牛頓 (μN)',
            'nanonewton': '納牛頓 (nN)',
            'piconewton': '皮牛頓 (pN)',
            'dyne': '達因 (dyn)',
            'kilodyne': '千達因 (kdyn)',
            'megadyne': '兆達因 (Mdyn)',
            'kilogram_force': '公斤力 (kgf)',
            'gram_force': '公克力 (gf)',
            'tonne_force': '噸力 (tf)',
            'milligram_force': '毫克力 (mgf)',
            'pound_force': '磅力 (lbf)',
            'ounce_force': '盎司力 (ozf)',
            'ton_force_short': '短噸力 (tonf)',
            'ton_force_long': '長噸力 (tonf)',
            'kip': '千磅力 (kip)',
            'poundal': '磅達 (pdl)',
            'sthene': '斯坦 (sn)',
            'kilopond': '千磅 (kp)',
            'pond': '磅 (p)',
            'atomic_unit_force': '原子力單位 (au)',
            'planck_force': '普朗克力 (F_P)',
            'grave_force': '格拉夫力 (Gf)',
            'hyl_force': '海爾力 (hyl⋅m/s²)',
            'dekanewton': '十牛頓 (daN)',
            'hectonewton': '百牛頓 (hN)',
            'crinal': '克里納 (crinal)',
            'bar_force': '巴力 (bar⋅cm²)',
            'atmosphere_force': '大氣壓力 (atm⋅cm²)',
            'joule_per_meter': '焦耳每米 (J/m)',
            'watt_second_per_meter': '瓦秒每米 (W⋅s/m)',
            'kilogram_meter_per_second_squared': '公斤米每秒平方 (kg⋅m/s²)',
        },
        'en': {
            'newton': 'Newton (N)',
            'kilonewton': 'Kilonewton (kN)',
            'meganewton': 'Meganewton (MN)',
            'giganewton': 'Giganewton (GN)',
            'millinewton': 'Millinewton (mN)',
            'micronewton': 'Micronewton (μN)',
            'nanonewton': 'Nanonewton (nN)',
            'piconewton': 'Piconewton (pN)',
            'dyne': 'Dyne (dyn)',
            'kilodyne': 'Kilodyne (kdyn)',
            'megadyne': 'Megadyne (Mdyn)',
            'kilogram_force': 'Kilogram-force (kgf)',
            'gram_force': 'Gram-force (gf)',
            'tonne_force': 'Tonne-force (tf)',
            'milligram_force': 'Milligram-force (mgf)',
            'pound_force': 'Pound-force (lbf)',
            'ounce_force': 'Ounce-force (ozf)',
            'ton_force_short': 'Short Ton-force (tonf)',
            'ton_force_long': 'Long Ton-force (tonf)',
            'kip': 'Kip (kip)',
            'poundal': 'Poundal (pdl)',
            'sthene': 'Sthène (sn)',
            'kilopond': 'Kilopond (kp)',
            'pond': 'Pond (p)',
            'atomic_unit_force': 'Atomic Unit of Force (au)',
            'planck_force': 'Planck Force (F_P)',
            'grave_force': 'Grave-force (Gf)',
            'hyl_force': 'Hyl-force (hyl⋅m/s²)',
            'dekanewton': 'Dekanewton (daN)',
            'hectonewton': 'Hectonewton (hN)',
            'crinal': 'Crinal (crinal)',
            'bar_force': 'Bar-force (bar⋅cm²)',
            'atmosphere_force': 'Atmosphere-force (atm⋅cm²)',
            'joule_per_meter': 'Joule per Meter (J/m)',
            'watt_second_per_meter': 'Watt-second per Meter (W⋅s/m)',
            'kilogram_meter_per_second_squared': 'Kilogram-meter per Second² (kg⋅m/s²)',
        },
        'zh-CN': {
            'newton': '牛顿 (N)',
            'kilonewton': '千牛顿 (kN)',
            'meganewton': '兆牛顿 (MN)',
            'giganewton': '吉牛顿 (GN)',
            'millinewton': '毫牛顿 (mN)',
            'micronewton': '微牛顿 (μN)',
            'nanonewton': '纳牛顿 (nN)',
            'piconewton': '皮牛顿 (pN)',
            'dyne': '达因 (dyn)',
            'kilodyne': '千达因 (kdyn)',
            'megadyne': '兆达因 (Mdyn)',
            'kilogram_force': '公斤力 (kgf)',
            'gram_force': '克力 (gf)',
            'tonne_force': '吨力 (tf)',
            'milligram_force': '毫克力 (mgf)',
            'pound_force': '磅力 (lbf)',
            'ounce_force': '盎司力 (ozf)',
            'ton_force_short': '短吨力 (tonf)',
            'ton_force_long': '长吨力 (tonf)',
            'kip': '千磅力 (kip)',
            'poundal': '磅达 (pdl)',
            'sthene': '斯坦 (sn)',
            'kilopond': '千磅 (kp)',
            'pond': '磅 (p)',
            'atomic_unit_force': '原子力单位 (au)',
            'planck_force': '普朗克力 (F_P)',
            'grave_force': '格拉夫力 (Gf)',
            'hyl_force': '海尔力 (hyl⋅m/s²)',
            'dekanewton': '十牛顿 (daN)',
            'hectonewton': '百牛顿 (hN)',
            'crinal': '克里纳 (crinal)',
            'bar_force': '巴力 (bar⋅cm²)',
            'atmosphere_force': '大气压力 (atm⋅cm²)',
            'joule_per_meter': '焦耳每米 (J/m)',
            'watt_second_per_meter': '瓦秒每米 (W⋅s/m)',
            'kilogram_meter_per_second_squared': '公斤米每秒平方 (kg⋅m/s²)',
        },
        'ja': {
            'newton': 'ニュートン (N)',
            'kilonewton': 'キロニュートン (kN)',
            'meganewton': 'メガニュートン (MN)',
            'giganewton': 'ギガニュートン (GN)',
            'millinewton': 'ミリニュートン (mN)',
            'micronewton': 'マイクロニュートン (μN)',
            'nanonewton': 'ナノニュートン (nN)',
            'piconewton': 'ピコニュートン (pN)',
            'dyne': 'ダイン (dyn)',
            'kilodyne': 'キロダイン (kdyn)',
            'megadyne': 'メガダイン (Mdyn)',
            'kilogram_force': '重量キログラム (kgf)',
            'gram_force': '重量グラム (gf)',
            'tonne_force': '重量トン (tf)',
            'milligram_force': '重量ミリグラム (mgf)',
            'pound_force': '重量ポンド (lbf)',
            'ounce_force': '重量オンス (ozf)',
            'ton_force_short': '重量ショートトン (tonf)',
            'ton_force_long': '重量ロングトン (tonf)',
            'kip': 'キップ (kip)',
            'poundal': 'パウンダル (pdl)',
            'sthene': 'ステーヌ (sn)',
            'kilopond': 'キロポンド (kp)',
            'pond': 'ポンド (p)',
            'atomic_unit_force': '原子単位系 (au)',
            'planck_force': 'プランク力 (F_P)',
            'grave_force': 'グラーブ力 (Gf)',
            'hyl_force': 'ハイル力 (hyl⋅m/s²)',
            'dekanewton': 'デカニュートン (daN)',
            'hectonewton': 'ヘクトニュートン (hN)',
            'crinal': 'クリナール (crinal)',
            'bar_force': 'バール力 (bar⋅cm²)',
            'atmosphere_force': '気圧 (atm⋅cm²)',
            'joule_per_meter': 'ジュール毎メートル (J/m)',
            'watt_second_per_meter': 'ワット秒毎メートル (W⋅s/m)',
            'kilogram_meter_per_second_squared': 'キログラムメートル毎秒毎秒 (kg⋅m/s²)',
        },
    },
    'reference_values': {
        'zh-TW': {
            'earth_gravity_1kg': '1公斤物體重力：9.81 N',
            'earth_gravity_1lb': '1磅物體重力：4.45 N',
            'human_bite': '人類咬合力：約 200-1000 N',
            'car_braking': '汽車煞車力：約 5-15 kN',
            'jet_engine_thrust': '噴射引擎推力：約 100-500 kN',
            'rocket_thrust': '火箭推力：約 1-50 MN',
            'bridge_cable_tension': '橋樑纜繩張力：約 10-100 MN',
            'earthquake_fault': '地震斷層力：約 10¹²-10¹⁵ N',
            'molecular_bond': '分子鍵力：約 10⁻⁹-10⁻¹¹ N',
            'van_der_waals': '凡德瓦力：約 10⁻¹²-10⁻¹³ N',
            'atomic_force_microscope': '原子力顯微鏡：約 10⁻¹²-10⁻⁹ N',
            'optical_tweezers': '光學鑷子：約 10⁻¹⁵-10⁻¹² N',
            'surface_tension_water': '水表面張力：約 0.073 N/m',
            'magnetic_force_mri': 'MRI磁力：約 10-1000 N',
            'electrostatic_force': '靜電力：約 10⁻¹⁵-10⁻⁶ N',
            'spring_force': '彈簧力：約 1-1000 N',
            'muscle_force': '肌肉力：約 100-5000 N',
            'wind_force': '風力：約 1-10000 N/m²',
        },
        'en': {
            'earth_gravity_1kg': '1 kg Object Weight: 9.81 N',
            'earth_gravity_1lb': '1 lb Object Weight: 4.45 N',
            'human_bite': 'Human Bite Force: ~200-1000 N',
            'car_braking': 'Car Braking Force: ~5-15 kN',
            'jet_engine_thrust': 'Jet Engine Thrust: ~100-500 kN',
            'rocket_thrust': 'Rocket Thrust: ~1-50 MN',
            'bridge_cable_tension': 'Bridge Cable Tension: ~10-100 MN',
            'earthquake_fault': 'Earthquake Fault Force: ~10¹²-10¹⁵ N',
            'molecular_bond': 'Molecular Bond Force: ~10⁻⁹-10⁻¹¹ N',
            'van_der_waals': 'Van der Waals Force: ~10⁻¹²-10⁻¹³ N',
            'atomic_force_microscope': 'Atomic Force Microscope: ~10⁻¹²-10⁻⁹ N',
            'optical_tweezers': 'Optical Tweezers: ~10⁻¹⁵-10⁻¹² N',
            'surface_tension_water': 'Water Surface Tension: ~0.073 N/m',
            'magnetic_force_mri': 'MRI Magnetic Force: ~10-1000 N',
            'electrostatic_force': 'Electrostatic Force: ~10⁻¹⁵-10⁻⁶ N',
            'spring_force': 'Spring Force: ~1-1000 N',
            'muscle_force': 'Muscle Force: ~100-5000 N',
            'wind_force': 'Wind Force: ~1-10000 N/m²',
        },
    },
    'conversion_note': {
        'zh-TW': {
            'force_definition': '力 = 質量 × 加速度 (F = ma)',
            'weight_vs_mass': '重量是力，質量是物質的量',
            'gravity_variation': '重力加速度因地點而異 (9.78-9.83 m/s²)',
            'force_types': '接觸力、場力、基本力 (強、弱、電磁、重力)',
            'unit_systems': 'SI (N)、CGS (dyn)、英制 (lbf)、公制 (kgf)',
            'dynamic_vs_static': '動態力vs靜態力的測量差異',
        },
        'en': {
            'force_definition': 'Force = Mass × Acceleration (F = ma)',
            'weight_vs_mass': 'Weight is force, mass is quantity of matter',
            'gravity_variation': 'Gravitational acceleration varies by location (9.78-9.83 m/s²)',
            'force_types': 'Contact forces, field forces, fundamental forces (strong, weak, EM, gravity)',
            'unit_systems': 'SI (N), CGS (dyn), Imperial (lbf), Metric (kgf)',
            'dynamic_vs_static': 'Dynamic vs static force measurement differences',
        },
    },
    'applications': {
        'zh-TW': {
            'engineering': '工程設計：結構分析、材料強度',
            'physics': '物理學：牛頓定律、動力學',
            'biomechanics': '生物力學：肌肉力、關節力',
            'aerospace': '航太工程：推力、升力、阻力',
            'automotive': '汽車工程：煞車力、轉向力',
            'materials': '材料科學：拉伸、壓縮、剪切',
            'nanotechnology': '奈米技術：原子力、分子操控',
            'geophysics': '地球物理：地震力、板塊運動',
            'sports': '運動科學：衝擊力、肌力測試',
            'robotics': '機器人學：致動器力、抓取力',
        },
        'en': {
            'engineering': 'Engineering Design: Structural analysis, material strength',
            'physics': 'Physics: Newton\'s laws, dynamics',
            'biomechanics': 'Biomechanics: Muscle force, joint force',
            'aerospace': 'Aerospace: Thrust, lift, drag',
            'automotive': 'Automotive: Braking force, steering force',
            'materials': 'Materials Science: Tension, compression, shear',
            'nanotechnology': 'Nanotechnology: Atomic force, molecular manipulation',
            'geophysics': 'Geophysics: Seismic force, plate tectonics',
            'sports': 'Sports Science: Impact force, muscle testing',
            'robotics': 'Robotics: Actuator force, grasping force',
        },
    },
}


