const velocityTable = {
    'unit': {
        // 以米每秒 (m/s) 為基準
        'meter_per_second': { offset: 0, scale: 1 },                // 1 m/s
        'kilometer_per_hour': { offset: 0, scale: 3.6 },            // 1 km/h = 1/3.6 m/s
        'kilometer_per_second': { offset: 0, scale: 0.001 },        // 1 km/s = 1000 m/s
        'meter_per_minute': { offset: 0, scale: 60 },               // 1 m/min = 1/60 m/s
        'meter_per_hour': { offset: 0, scale: 3600 },               // 1 m/h = 1/3600 m/s
        'centimeter_per_second': { offset: 0, scale: 100 },         // 1 cm/s = 0.01 m/s
        'millimeter_per_second': { offset: 0, scale: 1000 },        // 1 mm/s = 0.001 m/s
        'micrometer_per_second': { offset: 0, scale: 1000000 },     // 1 μm/s = 10⁻⁶ m/s
        'nanometer_per_second': { offset: 0, scale: 1000000000 },   // 1 nm/s = 10⁻⁹ m/s

        // 英制單位
        'mile_per_hour': { offset: 0, scale: 2.23694 },             // 1 mph = 0.44704 m/s
        'mile_per_second': { offset: 0, scale: 0.000621371 },       // 1 mile/s = 1609.34 m/s
        'mile_per_minute': { offset: 0, scale: 0.0372823 },         // 1 mile/min = 26.8224 m/s
        'foot_per_second': { offset: 0, scale: 3.28084 },           // 1 ft/s = 0.3048 m/s
        'foot_per_minute': { offset: 0, scale: 196.85 },            // 1 ft/min = 0.00508 m/s
        'foot_per_hour': { offset: 0, scale: 11811 },               // 1 ft/h = 8.47×10⁻⁵ m/s
        'inch_per_second': { offset: 0, scale: 39.3701 },           // 1 in/s = 0.0254 m/s
        'inch_per_minute': { offset: 0, scale: 2362.2 },            // 1 in/min = 4.233×10⁻⁴ m/s
        'inch_per_hour': { offset: 0, scale: 141732 },              // 1 in/h = 7.056×10⁻⁶ m/s
        'yard_per_second': { offset: 0, scale: 1.09361 },           // 1 yd/s = 0.9144 m/s
        'yard_per_minute': { offset: 0, scale: 65.6168 },           // 1 yd/min = 0.01524 m/s

        // 海事/航空單位
        'knot': { offset: 0, scale: 1.94384 },                      // 1 knot = 0.514444 m/s
        'nautical_mile_per_hour': { offset: 0, scale: 1.94384 },    // 1 nmi/h = 1 knot
        'nautical_mile_per_second': { offset: 0, scale: 0.000539957 }, // 1 nmi/s = 1852 m/s
        'mach': { offset: 0, scale: 0.00291545 },                   // 1 Mach ≈ 343 m/s (標準大氣)
        'speed_of_sound': { offset: 0, scale: 0.00291545 },         // 音速 ≈ 343 m/s

        // 特殊速度單位
        'speed_of_light': { offset: 0, scale: 3.33564e-9 },         // 1c = 299,792,458 m/s
        'speed_of_light_percent': { offset: 0, scale: 3.33564e-7 }, // 1%c = 2,997,924.58 m/s
        'escape_velocity_earth': { offset: 0, scale: 8.93e-5 },     // 地球逃逸速度 ≈ 11,200 m/s
        'orbital_velocity_earth': { offset: 0, scale: 0.000126 },   // 地球軌道速度 ≈ 7,900 m/s

        // 古典/歷史單位
        'furlong_per_fortnight': { offset: 0, scale: 1.663e6 },     // 1 furlong/fortnight = 1.663×10⁻⁶ m/s
        'league_per_hour': { offset: 0, scale: 0.746 },             // 1 league/h = 1.34 m/s
        'rod_per_second': { offset: 0, scale: 0.198838 },           // 1 rod/s = 5.0292 m/s

        // 生物學單位
        'body_length_per_second': { offset: 0, scale: 0.588 },      // 1 BL/s ≈ 1.7 m/s (人體)
        'wingbeat_frequency': { offset: 0, scale: 1 },              // 依物種而定

        // 地質/天文單位
        'continental_drift': { offset: 0, scale: 3.17e10 },         // 大陸漂移 ≈ 3.15×10⁻¹⁰ m/s
        'hair_growth': { offset: 0, scale: 2.74e9 },                // 頭髮生長 ≈ 3.65×10⁻¹⁰ m/s
        'nail_growth': { offset: 0, scale: 1.1e9 },                 // 指甲生長 ≈ 9.1×10⁻¹⁰ m/s

        // 粒子物理單位
        'thermal_velocity': { offset: 0, scale: 0.002 },            // 熱速度 ≈ 500 m/s (室溫)
        'drift_velocity': { offset: 0, scale: 10000 },              // 漂移速度 ≈ 10⁻⁴ m/s
        'fermi_velocity': { offset: 0, scale: 6.8e-7 },             // 費米速度 ≈ 1.47×10⁶ m/s

        // 流體力學單位
        'stokes': { offset: 0, scale: 10000 },                      // 斯托克斯速度 = 10⁻⁴ m/s
        'darcy_velocity': { offset: 0, scale: 86400 },              // 達西速度 (地下水)

        // 其他常用單位
        'revolution_per_second': { offset: 0, scale: 0.159155 },    // 1 rps = 2π rad/s
        'revolution_per_minute': { offset: 0, scale: 9.5493 },      // 1 rpm = π/30 rad/s
        'degree_per_second': { offset: 0, scale: 57.2958 },         // 1 °/s = π/180 rad/s
        'radian_per_second': { offset: 0, scale: 1 },               // 角速度單位
    },
    'language': {
        'zh-TW': {
            'meter_per_second': '米每秒 (m/s)',
            'kilometer_per_hour': '公里每小時 (km/h)',
            'kilometer_per_second': '公里每秒 (km/s)',
            'meter_per_minute': '米每分鐘 (m/min)',
            'meter_per_hour': '米每小時 (m/h)',
            'centimeter_per_second': '公分每秒 (cm/s)',
            'millimeter_per_second': '毫米每秒 (mm/s)',
            'micrometer_per_second': '微米每秒 (μm/s)',
            'nanometer_per_second': '奈米每秒 (nm/s)',
            'mile_per_hour': '英里每小時 (mph)',
            'mile_per_second': '英里每秒 (mile/s)',
            'mile_per_minute': '英里每分鐘 (mile/min)',
            'foot_per_second': '英尺每秒 (ft/s)',
            'foot_per_minute': '英尺每分鐘 (ft/min)',
            'foot_per_hour': '英尺每小時 (ft/h)',
            'inch_per_second': '英寸每秒 (in/s)',
            'inch_per_minute': '英寸每分鐘 (in/min)',
            'inch_per_hour': '英寸每小時 (in/h)',
            'yard_per_second': '碼每秒 (yd/s)',
            'yard_per_minute': '碼每分鐘 (yd/min)',
            'knot': '節 (knot)',
            'nautical_mile_per_hour': '海里每小時 (nmi/h)',
            'nautical_mile_per_second': '海里每秒 (nmi/s)',
            'mach': '馬赫數 (Mach)',
            'speed_of_sound': '音速 (a)',
            'speed_of_light': '光速 (c)',
            'speed_of_light_percent': '光速百分比 (%c)',
            'escape_velocity_earth': '地球逃逸速度',
            'orbital_velocity_earth': '地球軌道速度',
            'furlong_per_fortnight': '弗隆每雙週 (furlong/fortnight)',
            'league_per_hour': '里格每小時 (league/h)',
            'rod_per_second': '桿每秒 (rod/s)',
            'body_length_per_second': '體長每秒 (BL/s)',
            'wingbeat_frequency': '翼拍頻率',
            'continental_drift': '大陸漂移速度',
            'hair_growth': '頭髮生長速度',
            'nail_growth': '指甲生長速度',
            'thermal_velocity': '熱速度',
            'drift_velocity': '漂移速度',
            'fermi_velocity': '費米速度',
            'stokes': '斯托克斯速度',
            'darcy_velocity': '達西速度',
            'revolution_per_second': '轉每秒 (rps)',
            'revolution_per_minute': '轉每分鐘 (rpm)',
            'degree_per_second': '度每秒 (°/s)',
            'radian_per_second': '弧度每秒 (rad/s)',
        },
        'en': {
            'meter_per_second': 'Meter per Second (m/s)',
            'kilometer_per_hour': 'Kilometer per Hour (km/h)',
            'kilometer_per_second': 'Kilometer per Second (km/s)',
            'meter_per_minute': 'Meter per Minute (m/min)',
            'meter_per_hour': 'Meter per Hour (m/h)',
            'centimeter_per_second': 'Centimeter per Second (cm/s)',
            'millimeter_per_second': 'Millimeter per Second (mm/s)',
            'micrometer_per_second': 'Micrometer per Second (μm/s)',
            'nanometer_per_second': 'Nanometer per Second (nm/s)',
            'mile_per_hour': 'Mile per Hour (mph)',
            'mile_per_second': 'Mile per Second (mile/s)',
            'mile_per_minute': 'Mile per Minute (mile/min)',
            'foot_per_second': 'Foot per Second (ft/s)',
            'foot_per_minute': 'Foot per Minute (ft/min)',
            'foot_per_hour': 'Foot per Hour (ft/h)',
            'inch_per_second': 'Inch per Second (in/s)',
            'inch_per_minute': 'Inch per Minute (in/min)',
            'inch_per_hour': 'Inch per Hour (in/h)',
            'yard_per_second': 'Yard per Second (yd/s)',
            'yard_per_minute': 'Yard per Minute (yd/min)',
            'knot': 'Knot (knot)',
            'nautical_mile_per_hour': 'Nautical Mile per Hour (nmi/h)',
            'nautical_mile_per_second': 'Nautical Mile per Second (nmi/s)',
            'mach': 'Mach Number (Mach)',
            'speed_of_sound': 'Speed of Sound (a)',
            'speed_of_light': 'Speed of Light (c)',
            'speed_of_light_percent': 'Percent Speed of Light (%c)',
            'escape_velocity_earth': 'Earth Escape Velocity',
            'orbital_velocity_earth': 'Earth Orbital Velocity',
            'furlong_per_fortnight': 'Furlong per Fortnight',
            'league_per_hour': 'League per Hour',
            'rod_per_second': 'Rod per Second',
            'body_length_per_second': 'Body Length per Second (BL/s)',
            'wingbeat_frequency': 'Wingbeat Frequency',
            'continental_drift': 'Continental Drift Speed',
            'hair_growth': 'Hair Growth Speed',
            'nail_growth': 'Nail Growth Speed',
            'thermal_velocity': 'Thermal Velocity',
            'drift_velocity': 'Drift Velocity',
            'fermi_velocity': 'Fermi Velocity',
            'stokes': 'Stokes Velocity',
            'darcy_velocity': 'Darcy Velocity',
            'revolution_per_second': 'Revolution per Second (rps)',
            'revolution_per_minute': 'Revolution per Minute (rpm)',
            'degree_per_second': 'Degree per Second (°/s)',
            'radian_per_second': 'Radian per Second (rad/s)',
        },
    },
    'reference_values': {
        'zh-TW': {
            'walking_speed': '步行速度：約 1.4 m/s (5 km/h)',
            'running_speed': '跑步速度：約 5 m/s (18 km/h)',
            'cycling_speed': '騎車速度：約 6 m/s (22 km/h)',
            'car_city': '市區開車：約 14 m/s (50 km/h)',
            'car_highway': '高速公路：約 28 m/s (100 km/h)',
            'train_speed': '火車速度：約 56 m/s (200 km/h)',
            'airplane_cruise': '客機巡航：約 250 m/s (900 km/h)',
            'sound_air': '空氣中音速：343 m/s (20°C)',
            'light_vacuum': '真空中光速：299,792,458 m/s',
            'cheetah_max': '獵豹最高速：約 30 m/s (108 km/h)',
            'hummingbird': '蜂鳥飛行：約 15 m/s (54 km/h)',
            'bullet_speed': '子彈速度：約 400-1200 m/s',
            'earth_orbit': '地球軌道速度：約 30,000 m/s',
            'escape_velocity': '地球逃逸速度：11,200 m/s',
            'wind_gentle': '微風：約 2-5 m/s',
            'wind_strong': '強風：約 15-25 m/s',
            'hurricane': '颶風：>33 m/s (119 km/h)',
            'tsunami_wave': '海嘯波速：約 200 m/s',
            'blood_flow': '血流速度：約 0.3-0.5 m/s',
            'nerve_impulse': '神經衝動：約 120 m/s',
        },
        'en': {
            'walking_speed': 'Walking Speed: ~1.4 m/s (5 km/h)',
            'running_speed': 'Running Speed: ~5 m/s (18 km/h)',
            'cycling_speed': 'Cycling Speed: ~6 m/s (22 km/h)',
            'car_city': 'City Driving: ~14 m/s (50 km/h)',
            'car_highway': 'Highway Driving: ~28 m/s (100 km/h)',
            'train_speed': 'Train Speed: ~56 m/s (200 km/h)',
            'airplane_cruise': 'Airplane Cruise: ~250 m/s (900 km/h)',
            'sound_air': 'Sound in Air: 343 m/s (20°C)',
            'light_vacuum': 'Light in Vacuum: 299,792,458 m/s',
            'cheetah_max': 'Cheetah Max Speed: ~30 m/s (108 km/h)',
            'hummingbird': 'Hummingbird Flight: ~15 m/s (54 km/h)',
            'bullet_speed': 'Bullet Speed: ~400-1200 m/s',
            'earth_orbit': 'Earth Orbital Speed: ~30,000 m/s',
            'escape_velocity': 'Earth Escape Velocity: 11,200 m/s',
            'wind_gentle': 'Gentle Breeze: ~2-5 m/s',
            'wind_strong': 'Strong Wind: ~15-25 m/s',
            'hurricane': 'Hurricane: >33 m/s (119 km/h)',
            'tsunami_wave': 'Tsunami Wave: ~200 m/s',
            'blood_flow': 'Blood Flow: ~0.3-0.5 m/s',
            'nerve_impulse': 'Nerve Impulse: ~120 m/s',
        },
    },
    'conversion_note': {
        'zh-TW': {
            'velocity_vs_speed': '速度有方向性，速率只有大小',
            'relative_motion': '速度相對於參考系而定',
            'mach_number': '馬赫數隨溫度和介質變化',
            'angular_velocity': '角速度單位：rad/s, °/s, rpm',
            'terminal_velocity': '終端速度：重力與阻力平衡',
            'doppler_effect': '都卜勒效應與相對速度有關',
        },
        'en': {
            'velocity_vs_speed': 'Velocity has direction, speed is magnitude only',
            'relative_motion': 'Velocity is relative to reference frame',
            'mach_number': 'Mach number varies with temperature and medium',
            'angular_velocity': 'Angular velocity units: rad/s, °/s, rpm',
            'terminal_velocity': 'Terminal velocity: balance of gravity and drag',
            'doppler_effect': 'Doppler effect relates to relative velocity',
        },
    },
    'applications': {
        'zh-TW': {
            'transportation': '交通運輸：車速、船速、飛行速度',
            'sports': '運動科學：跑步、游泳、球類運動',
            'physics': '物理學：運動學、動力學分析',
            'engineering': '工程學：流體速度、機械運動',
            'meteorology': '氣象學：風速、氣流速度',
            'astronomy': '天文學：行星軌道、恆星運動',
            'biology': '生物學：動物移動、血流速度',
            'geology': '地質學：板塊運動、地震波',
            'oceanography': '海洋學：洋流、波浪速度',
            'aerospace': '航太工程：火箭、衛星速度',
        },
        'en': {
            'transportation': 'Transportation: Vehicle, ship, aircraft speeds',
            'sports': 'Sports Science: Running, swimming, ball sports',
            'physics': 'Physics: Kinematics, dynamics analysis',
            'engineering': 'Engineering: Fluid velocity, mechanical motion',
            'meteorology': 'Meteorology: Wind speed, air flow',
            'astronomy': 'Astronomy: Planetary orbits, stellar motion',
            'biology': 'Biology: Animal locomotion, blood flow',
            'geology': 'Geology: Plate tectonics, seismic waves',
            'oceanography': 'Oceanography: Ocean currents, wave speed',
            'aerospace': 'Aerospace: Rocket, satellite velocities',
        },
    },
}

module.exports = velocityTable;
