export const accelerationTable = {
    'unit': {
        // 以米每秒平方 (m/s²) 為基準
        'meter_per_second_squared': { offset: 0, scale: 1 },        // 1 m/s²
        'kilometer_per_second_squared': { offset: 0, scale: 0.001 }, // 1 km/s² = 1000 m/s²
        'kilometer_per_hour_squared': { offset: 0, scale: 12960 },   // 1 km/h² = 7.716×10⁻⁵ m/s²
        'kilometer_per_hour_per_second': { offset: 0, scale: 3.6 }, // 1 km/h/s = 0.2778 m/s²
        'centimeter_per_second_squared': { offset: 0, scale: 100 }, // 1 cm/s² = 0.01 m/s²
        'millimeter_per_second_squared': { offset: 0, scale: 1000 }, // 1 mm/s² = 0.001 m/s²
        'micrometer_per_second_squared': { offset: 0, scale: 1000000 }, // 1 μm/s² = 10⁻⁶ m/s²
        'nanometer_per_second_squared': { offset: 0, scale: 1000000000 }, // 1 nm/s² = 10⁻⁹ m/s²

        // 英制單位
        'foot_per_second_squared': { offset: 0, scale: 3.28084 },   // 1 ft/s² = 0.3048 m/s²
        'inch_per_second_squared': { offset: 0, scale: 39.3701 },   // 1 in/s² = 0.0254 m/s²
        'yard_per_second_squared': { offset: 0, scale: 1.09361 },   // 1 yd/s² = 0.9144 m/s²
        'mile_per_second_squared': { offset: 0, scale: 0.000621371 }, // 1 mile/s² = 1609.34 m/s²
        'mile_per_hour_squared': { offset: 0, scale: 8047.99 },     // 1 mph² = 1.242×10⁻⁴ m/s²
        'mile_per_hour_per_second': { offset: 0, scale: 2.23694 },  // 1 mph/s = 0.44704 m/s²

        // 重力單位
        'standard_gravity': { offset: 0, scale: 0.101972 },         // 1 g = 9.80665 m/s²
        'earth_gravity': { offset: 0, scale: 0.101972 },            // 1 g₀ = 9.80665 m/s²
        'milligravity': { offset: 0, scale: 101.972 },              // 1 mg = 9.80665×10⁻³ m/s²
        'microgravity': { offset: 0, scale: 101972 },               // 1 μg = 9.80665×10⁻⁶ m/s²
        'nanogravity': { offset: 0, scale: 101972000 },             // 1 ng = 9.80665×10⁻⁹ m/s²

        // 地球物理單位
        'gal': { offset: 0, scale: 100 },                           // 1 Gal = 0.01 m/s²
        'milligal': { offset: 0, scale: 100000 },                   // 1 mGal = 10⁻⁵ m/s²
        'microgal': { offset: 0, scale: 100000000 },                // 1 μGal = 10⁻⁸ m/s²
        'eotvos': { offset: 0, scale: 1e10 },                       // 1 E = 10⁻¹⁰ m/s² (重力梯度)

        // 角加速度單位
        'radian_per_second_squared': { offset: 0, scale: 1 },       // 1 rad/s²
        'degree_per_second_squared': { offset: 0, scale: 57.2958 }, // 1 °/s² = π/180 rad/s²
        'revolution_per_second_squared': { offset: 0, scale: 0.159155 }, // 1 rps² = 2π rad/s²
        'revolution_per_minute_squared': { offset: 0, scale: 573.24 }, // 1 rpm² = (π/30)² rad/s²
        'revolution_per_minute_per_second': { offset: 0, scale: 9.5493 }, // 1 rpm/s = π/30 rad/s²

        // 特殊應用單位
        'knot_per_second': { offset: 0, scale: 1.94384 },           // 1 knot/s = 0.514444 m/s²
        'mach_per_second': { offset: 0, scale: 0.00291545 },        // 1 Mach/s ≈ 343 m/s²
        'g_force': { offset: 0, scale: 0.101972 },                  // 1 G = 9.80665 m/s²

        // 生物學單位
        'head_injury_criterion': { offset: 0, scale: 0.101972 },    // HIC 以 g 為單位
        'whiplash_threshold': { offset: 0, scale: 0.0509859 },      // 頸部損傷閾值 ≈ 19.6 m/s²

        // 工程單位
        'meter_per_minute_squared': { offset: 0, scale: 3600 },     // 1 m/min² = 1/3600 m/s²
        'meter_per_hour_squared': { offset: 0, scale: 12960000 },   // 1 m/h² = 7.716×10⁻⁸ m/s²
        'foot_per_minute_squared': { offset: 0, scale: 11811 },     // 1 ft/min² = 8.467×10⁻⁵ m/s²
        'foot_per_hour_squared': { offset: 0, scale: 4.25e8 },      // 1 ft/h² = 2.35×10⁻⁹ m/s²

        // 天文單位
        'parsec_per_year_squared': { offset: 0, scale: 3.24e-17 },  // 1 pc/year² = 3.086×10¹⁶ m/s²
        'light_year_per_year_squared': { offset: 0, scale: 1.06e-16 }, // 1 ly/year² = 9.461×10¹⁵ m/s²
        'astronomical_unit_per_year_squared': { offset: 0, scale: 2.24e-12 }, // 1 AU/year² = 4.47×10¹¹ m/s²

        // 原子/分子尺度
        'atomic_unit_acceleration': { offset: 0, scale: 4.13e-18 }, // 1 au = 2.42×10¹⁷ m/s²
        'planck_acceleration': { offset: 0, scale: 1.93e-52 },      // 1 a_P = 5.18×10⁵¹ m/s²

        // 其他單位
        'galileo': { offset: 0, scale: 100 },                       // 1 Galileo = 1 Gal = 0.01 m/s²
        'leo': { offset: 0, scale: 10 },                            // 1 Leo = 0.1 m/s² (非標準)
        'jerk_unit': { offset: 0, scale: 1 },                       // 加加速度 m/s³
    },
    'language': {
        'zh-TW': {
            'meter_per_second_squared': '米每秒平方 (m/s²)',
            'kilometer_per_second_squared': '公里每秒平方 (km/s²)',
            'kilometer_per_hour_squared': '公里每小時平方 (km/h²)',
            'kilometer_per_hour_per_second': '公里每小時每秒 (km/h/s)',
            'centimeter_per_second_squared': '公分每秒平方 (cm/s²)',
            'millimeter_per_second_squared': '毫米每秒平方 (mm/s²)',
            'micrometer_per_second_squared': '微米每秒平方 (μm/s²)',
            'nanometer_per_second_squared': '奈米每秒平方 (nm/s²)',
            'foot_per_second_squared': '英尺每秒平方 (ft/s²)',
            'inch_per_second_squared': '英寸每秒平方 (in/s²)',
            'yard_per_second_squared': '碼每秒平方 (yd/s²)',
            'mile_per_second_squared': '英里每秒平方 (mile/s²)',
            'mile_per_hour_squared': '英里每小時平方 (mph²)',
            'mile_per_hour_per_second': '英里每小時每秒 (mph/s)',
            'standard_gravity': '標準重力 (g)',
            'earth_gravity': '地球重力 (g₀)',
            'milligravity': '毫重力 (mg)',
            'microgravity': '微重力 (μg)',
            'nanogravity': '納重力 (ng)',
            'gal': '伽 (Gal)',
            'milligal': '毫伽 (mGal)',
            'microgal': '微伽 (μGal)',
            'eotvos': '厄特沃什 (E)',
            'radian_per_second_squared': '弧度每秒平方 (rad/s²)',
            'degree_per_second_squared': '度每秒平方 (°/s²)',
            'revolution_per_second_squared': '轉每秒平方 (rps²)',
            'revolution_per_minute_squared': '轉每分鐘平方 (rpm²)',
            'revolution_per_minute_per_second': '轉每分鐘每秒 (rpm/s)',
            'knot_per_second': '節每秒 (knot/s)',
            'mach_per_second': '馬赫每秒 (Mach/s)',
            'g_force': 'G力 (G)',
            'head_injury_criterion': '頭部損傷準則 (HIC)',
            'whiplash_threshold': '頸部損傷閾值',
            'meter_per_minute_squared': '米每分鐘平方 (m/min²)',
            'meter_per_hour_squared': '米每小時平方 (m/h²)',
            'foot_per_minute_squared': '英尺每分鐘平方 (ft/min²)',
            'foot_per_hour_squared': '英尺每小時平方 (ft/h²)',
            'parsec_per_year_squared': '秒差距每年平方 (pc/year²)',
            'light_year_per_year_squared': '光年每年平方 (ly/year²)',
            'astronomical_unit_per_year_squared': '天文單位每年平方 (AU/year²)',
            'atomic_unit_acceleration': '原子加速度單位 (au)',
            'planck_acceleration': '普朗克加速度 (a_P)',
            'galileo': '伽利略 (Galileo)',
            'leo': '里奧 (Leo)',
            'jerk_unit': '加加速度單位 (m/s³)',
        },
        'en': {
            'meter_per_second_squared': 'Meter per Second Squared (m/s²)',
            'kilometer_per_second_squared': 'Kilometer per Second Squared (km/s²)',
            'kilometer_per_hour_squared': 'Kilometer per Hour Squared (km/h²)',
            'kilometer_per_hour_per_second': 'Kilometer per Hour per Second (km/h/s)',
            'centimeter_per_second_squared': 'Centimeter per Second Squared (cm/s²)',
            'millimeter_per_second_squared': 'Millimeter per Second Squared (mm/s²)',
            'micrometer_per_second_squared': 'Micrometer per Second Squared (μm/s²)',
            'nanometer_per_second_squared': 'Nanometer per Second Squared (nm/s²)',
            'foot_per_second_squared': 'Foot per Second Squared (ft/s²)',
            'inch_per_second_squared': 'Inch per Second Squared (in/s²)',
            'yard_per_second_squared': 'Yard per Second Squared (yd/s²)',
            'mile_per_second_squared': 'Mile per Second Squared (mile/s²)',
            'mile_per_hour_squared': 'Mile per Hour Squared (mph²)',
            'mile_per_hour_per_second': 'Mile per Hour per Second (mph/s)',
            'standard_gravity': 'Standard Gravity (g)',
            'earth_gravity': 'Earth Gravity (g₀)',
            'milligravity': 'Milligravity (mg)',
            'microgravity': 'Microgravity (μg)',
            'nanogravity': 'Nanogravity (ng)',
            'gal': 'Gal (Gal)',
            'milligal': 'Milligal (mGal)',
            'microgal': 'Microgal (μGal)',
            'eotvos': 'Eötvös (E)',
            'radian_per_second_squared': 'Radian per Second Squared (rad/s²)',
            'degree_per_second_squared': 'Degree per Second Squared (°/s²)',
            'revolution_per_second_squared': 'Revolution per Second Squared (rps²)',
            'revolution_per_minute_squared': 'Revolution per Minute Squared (rpm²)',
            'revolution_per_minute_per_second': 'Revolution per Minute per Second (rpm/s)',
            'knot_per_second': 'Knot per Second (knot/s)',
            'mach_per_second': 'Mach per Second (Mach/s)',
            'g_force': 'G-force (G)',
            'head_injury_criterion': 'Head Injury Criterion (HIC)',
            'whiplash_threshold': 'Whiplash Threshold',
            'meter_per_minute_squared': 'Meter per Minute Squared (m/min²)',
            'meter_per_hour_squared': 'Meter per Hour Squared (m/h²)',
            'foot_per_minute_squared': 'Foot per Minute Squared (ft/min²)',
            'foot_per_hour_squared': 'Foot per Hour Squared (ft/h²)',
            'parsec_per_year_squared': 'Parsec per Year Squared (pc/year²)',
            'light_year_per_year_squared': 'Light Year per Year Squared (ly/year²)',
            'astronomical_unit_per_year_squared': 'Astronomical Unit per Year Squared (AU/year²)',
            'atomic_unit_acceleration': 'Atomic Unit of Acceleration (au)',
            'planck_acceleration': 'Planck Acceleration (a_P)',
            'galileo': 'Galileo (Galileo)',
            'leo': 'Leo (Leo)',
            'jerk_unit': 'Jerk Unit (m/s³)',
        },
    },
    'reference_values': {
        'zh-TW': {
            'earth_gravity': '地球重力：9.81 m/s²',
            'moon_gravity': '月球重力：1.62 m/s²',
            'mars_gravity': '火星重力：3.71 m/s²',
            'jupiter_gravity': '木星重力：24.79 m/s²',
            'sun_gravity': '太陽重力：274 m/s²',
            'car_acceleration': '汽車加速：約 2-5 m/s²',
            'car_braking': '汽車煞車：約 8-10 m/s²',
            'elevator_acceleration': '電梯加速：約 1-2 m/s²',
            'roller_coaster': '雲霄飛車：約 30-50 m/s²',
            'fighter_jet': '戰鬥機：約 90 m/s² (9G)',
            'space_shuttle': '太空梭發射：約 30 m/s² (3G)',
            'centrifuge_training': '離心機訓練：約 80-100 m/s² (8-10G)',
            'human_tolerance': '人體耐受極限：約 150-200 m/s² (15-20G)',
            'crash_test': '撞擊測試：約 500-1000 m/s² (50-100G)',
            'bullet_acceleration': '子彈加速：約 10⁵-10⁶ m/s²',
            'earthquake_peak': '地震峰值：約 10-100 m/s²',
            'vibration_damage': '振動損害：約 100-1000 m/s²',
            'free_fall': '自由落體：9.81 m/s²',
            'parachute_opening': '降落傘開啟：約 30-50 m/s²',
            'airbag_deployment': '安全氣囊：約 600-1000 m/s²',
        },
        'en': {
            'earth_gravity': 'Earth Gravity: 9.81 m/s²',
            'moon_gravity': 'Moon Gravity: 1.62 m/s²',
            'mars_gravity': 'Mars Gravity: 3.71 m/s²',
            'jupiter_gravity': 'Jupiter Gravity: 24.79 m/s²',
            'sun_gravity': 'Sun Gravity: 274 m/s²',
            'car_acceleration': 'Car Acceleration: ~2-5 m/s²',
            'car_braking': 'Car Braking: ~8-10 m/s²',
            'elevator_acceleration': 'Elevator Acceleration: ~1-2 m/s²',
            'roller_coaster': 'Roller Coaster: ~30-50 m/s²',
            'fighter_jet': 'Fighter Jet: ~90 m/s² (9G)',
            'space_shuttle': 'Space Shuttle Launch: ~30 m/s² (3G)',
            'centrifuge_training': 'Centrifuge Training: ~80-100 m/s² (8-10G)',
            'human_tolerance': 'Human Tolerance Limit: ~150-200 m/s² (15-20G)',
            'crash_test': 'Crash Test: ~500-1000 m/s² (50-100G)',
            'bullet_acceleration': 'Bullet Acceleration: ~10⁵-10⁶ m/s²',
            'earthquake_peak': 'Earthquake Peak: ~10-100 m/s²',
            'vibration_damage': 'Vibration Damage: ~100-1000 m/s²',
            'free_fall': 'Free Fall: 9.81 m/s²',
            'parachute_opening': 'Parachute Opening: ~30-50 m/s²',
            'airbag_deployment': 'Airbag Deployment: ~600-1000 m/s²',
        },
    },
    'conversion_note': {
        'zh-TW': {
            'acceleration_definition': '加速度 = 速度變化 / 時間 (a = Δv/Δt)',
            'gravity_variation': '重力加速度因地點和高度而異',
            'g_force_meaning': 'G力表示相對於地球重力的倍數',
            'angular_acceleration': '角加速度：角速度的變化率',
            'centripetal_acceleration': '向心加速度：a = v²/r',
            'jerk_definition': '加加速度：加速度的變化率 (da/dt)',
        },
        'en': {
            'acceleration_definition': 'Acceleration = Change in Velocity / Time (a = Δv/Δt)',
            'gravity_variation': 'Gravitational acceleration varies by location and altitude',
            'g_force_meaning': 'G-force represents multiples of Earth\'s gravity',
            'angular_acceleration': 'Angular acceleration: rate of change of angular velocity',
            'centripetal_acceleration': 'Centripetal acceleration: a = v²/r',
            'jerk_definition': 'Jerk: rate of change of acceleration (da/dt)',
        },
    },
    'applications': {
        'zh-TW': {
            'automotive': '汽車工程：煞車系統、安全測試',
            'aerospace': '航太工程：火箭推進、太空人訓練',
            'civil_engineering': '土木工程：地震設計、結構分析',
            'biomechanics': '生物力學：人體運動、衝擊分析',
            'sports_science': '運動科學：訓練監控、傷害預防',
            'geophysics': '地球物理：地震學、重力測量',
            'manufacturing': '製造業：振動控制、品質檢測',
            'robotics': '機器人學：運動控制、路徑規劃',
            'medical': '醫學：診斷設備、復健治療',
            'physics_research': '物理研究：粒子加速器、實驗設計',
        },
        'en': {
            'automotive': 'Automotive: Braking systems, safety testing',
            'aerospace': 'Aerospace: Rocket propulsion, astronaut training',
            'civil_engineering': 'Civil Engineering: Seismic design, structural analysis',
            'biomechanics': 'Biomechanics: Human motion, impact analysis',
            'sports_science': 'Sports Science: Training monitoring, injury prevention',
            'geophysics': 'Geophysics: Seismology, gravity measurement',
            'manufacturing': 'Manufacturing: Vibration control, quality testing',
            'robotics': 'Robotics: Motion control, path planning',
            'medical': 'Medical: Diagnostic equipment, rehabilitation',
            'physics_research': 'Physics Research: Particle accelerators, experimental design',
        },
    },
}


