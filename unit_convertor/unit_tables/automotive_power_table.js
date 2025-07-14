const automotivePowerTable = {
    'unit': {
        // 以瓦特 (W) 為基準
        'watt': { offset: 0, scale: 1 },
        'kilowatt': { offset: 0, scale: 0.001 },                    // 1 kW = 1,000 W
        'megawatt': { offset: 0, scale: 0.000001 },                // 1 MW = 1,000,000 W

        // 馬力單位 (汽機車最常用)
        'horsepower_mechanical': { offset: 0, scale: 0.00134102 }, // 1 hp = 745.7 W (SAE/機械馬力)
        'horsepower_metric': { offset: 0, scale: 0.00135962 },     // 1 PS = 735.5 W (公制馬力)
        'horsepower_electric': { offset: 0, scale: 0.00134048 },   // 1 hp = 746 W (電氣馬力)
        'horsepower_boiler': { offset: 0, scale: 0.000101942 },    // 1 bhp = 9,809.5 W (鍋爐馬力)
        'horsepower_water': { offset: 0, scale: 0.00134102 },      // 1 whp = 745.7 W (水馬力)
        'horsepower_brake': { offset: 0, scale: 0.00134102 },      // 1 bhp = 745.7 W (制動馬力)
        'horsepower_indicated': { offset: 0, scale: 0.00134102 },  // 1 ihp = 745.7 W (指示馬力)

        // 歐洲標準
        'pferdestärke': { offset: 0, scale: 0.00135962 },          // 1 PS = 735.5 W (德制)
        'cheval_vapeur': { offset: 0, scale: 0.00135962 },         // 1 cv = 735.5 W (法制)
        'cavalli_vapore': { offset: 0, scale: 0.00135962 },        // 1 CV = 735.5 W (意制)
        'caballos_vapor': { offset: 0, scale: 0.00135962 },        // 1 cv = 735.5 W (西制)

        // 其他功率單位
        'foot_pound_per_second': { offset: 0, scale: 0.737562 },   // 1 ft·lbf/s = 1.356 W
        'foot_pound_per_minute': { offset: 0, scale: 44.2537 },    // 1 ft·lbf/min = 0.0226 W
        'btu_per_hour': { offset: 0, scale: 3.41214 },             // 1 BTU/h = 0.293 W
        'btu_per_minute': { offset: 0, scale: 0.0568690 },         // 1 BTU/min = 17.58 W
        'btu_per_second': { offset: 0, scale: 0.000947817 },       // 1 BTU/s = 1,055 W
        'calorie_per_second': { offset: 0, scale: 0.239006 },      // 1 cal/s = 4.184 W
        'kilocalorie_per_hour': { offset: 0, scale: 0.860421 },    // 1 kcal/h = 1.163 W

        // 小功率單位
        'milliwatt': { offset: 0, scale: 1000 },                   // 1 mW = 0.001 W
        'microwatt': { offset: 0, scale: 1000000 },                // 1 μW = 10⁻⁶ W
        'nanowatt': { offset: 0, scale: 1000000000 },              // 1 nW = 10⁻⁹ W

        // 大功率單位
        'gigawatt': { offset: 0, scale: 1e-9 },                    // 1 GW = 10⁹ W
        'terawatt': { offset: 0, scale: 1e-12 },                   // 1 TW = 10¹² W

        // 特殊單位
        'poncelet': { offset: 0, scale: 0.00101972 },              // 1 p = 980.665 W (法國舊制)
        'ton_refrigeration': { offset: 0, scale: 0.000284345 },    // 1 TR = 3,516.85 W (制冷噸)

        // 引擎相關
        'brake_horsepower': { offset: 0, scale: 0.00134102 },      // 制動馬力 (實際輸出)
        'indicated_horsepower': { offset: 0, scale: 0.00134102 },  // 指示馬力 (理論)
        'shaft_horsepower': { offset: 0, scale: 0.00134102 },      // 軸馬力
        'wheel_horsepower': { offset: 0, scale: 0.00134102 },      // 輪上馬力

        // 電動車常用
        'peak_power_kw': { offset: 0, scale: 0.001 },              // 峰值功率 (kW)
        'continuous_power_kw': { offset: 0, scale: 0.001 },        // 持續功率 (kW)
    },
    'language': {
        'zh-TW': {
            'watt': '瓦特 (W)',
            'kilowatt': '千瓦 (kW)',
            'megawatt': '兆瓦 (MW)',
            'horsepower_mechanical': '機械馬力 (hp)',
            'horsepower_metric': '公制馬力 (PS)',
            'horsepower_electric': '電氣馬力 (hp)',
            'horsepower_boiler': '鍋爐馬力 (bhp)',
            'horsepower_water': '水馬力 (whp)',
            'horsepower_brake': '制動馬力 (bhp)',
            'horsepower_indicated': '指示馬力 (ihp)',
            'pferdestärke': '德制馬力 (PS)',
            'cheval_vapeur': '法制馬力 (cv)',
            'cavalli_vapore': '意制馬力 (CV)',
            'caballos_vapor': '西制馬力 (cv)',
            'foot_pound_per_second': '英尺磅每秒 (ft·lbf/s)',
            'foot_pound_per_minute': '英尺磅每分 (ft·lbf/min)',
            'btu_per_hour': 'BTU每小時 (BTU/h)',
            'btu_per_minute': 'BTU每分鐘 (BTU/min)',
            'btu_per_second': 'BTU每秒 (BTU/s)',
            'calorie_per_second': '卡路里每秒 (cal/s)',
            'kilocalorie_per_hour': '千卡每小時 (kcal/h)',
            'milliwatt': '毫瓦 (mW)',
            'microwatt': '微瓦 (μW)',
            'nanowatt': '納瓦 (nW)',
            'gigawatt': '吉瓦 (GW)',
            'terawatt': '太瓦 (TW)',
            'poncelet': '龐斯萊 (p)',
            'ton_refrigeration': '制冷噸 (TR)',
            'brake_horsepower': '制動馬力 (bhp)',
            'indicated_horsepower': '指示馬力 (ihp)',
            'shaft_horsepower': '軸馬力 (shp)',
            'wheel_horsepower': '輪上馬力 (whp)',
            'peak_power_kw': '峰值功率 (kW)',
            'continuous_power_kw': '持續功率 (kW)',
        },
        'en': {
            'watt': 'Watt (W)',
            'kilowatt': 'Kilowatt (kW)',
            'megawatt': 'Megawatt (MW)',
            'horsepower_mechanical': 'Mechanical Horsepower (hp)',
            'horsepower_metric': 'Metric Horsepower (PS)',
            'horsepower_electric': 'Electric Horsepower (hp)',
            'horsepower_boiler': 'Boiler Horsepower (bhp)',
            'horsepower_water': 'Water Horsepower (whp)',
            'horsepower_brake': 'Brake Horsepower (bhp)',
            'horsepower_indicated': 'Indicated Horsepower (ihp)',
            'pferdestärke': 'Pferdestärke (PS)',
            'cheval_vapeur': 'Cheval Vapeur (cv)',
            'cavalli_vapore': 'Cavalli Vapore (CV)',
            'caballos_vapor': 'Caballos Vapor (cv)',
            'foot_pound_per_second': 'Foot Pound per Second (ft·lbf/s)',
            'foot_pound_per_minute': 'Foot Pound per Minute (ft·lbf/min)',
            'btu_per_hour': 'BTU per Hour (BTU/h)',
            'btu_per_minute': 'BTU per Minute (BTU/min)',
            'btu_per_second': 'BTU per Second (BTU/s)',
            'calorie_per_second': 'Calorie per Second (cal/s)',
            'kilocalorie_per_hour': 'Kilocalorie per Hour (kcal/h)',
            'milliwatt': 'Milliwatt (mW)',
            'microwatt': 'Microwatt (μW)',
            'nanowatt': 'Nanowatt (nW)',
            'gigawatt': 'Gigawatt (GW)',
            'terawatt': 'Terawatt (TW)',
            'poncelet': 'Poncelet (p)',
            'ton_refrigeration': 'Ton of Refrigeration (TR)',
            'brake_horsepower': 'Brake Horsepower (bhp)',
            'indicated_horsepower': 'Indicated Horsepower (ihp)',
            'shaft_horsepower': 'Shaft Horsepower (shp)',
            'wheel_horsepower': 'Wheel Horsepower (whp)',
            'peak_power_kw': 'Peak Power (kW)',
            'continuous_power_kw': 'Continuous Power (kW)',
        },
    },
    'reference_values': {
        'zh-TW': {
            'motorcycle_125cc': '125cc機車：約 8-12 hp',
            'motorcycle_600cc': '600cc機車：約 80-120 hp',
            'motorcycle_1000cc': '1000cc重機：約 150-200 hp',
            'compact_car': '小型汽車：約 80-120 hp',
            'mid_size_car': '中型汽車：約 120-200 hp',
            'luxury_car': '豪華汽車：約 200-400 hp',
            'sports_car': '跑車：約 300-700 hp',
            'supercar': '超跑：約 500-1000+ hp',
            'electric_car_tesla_model_3': 'Tesla Model 3：約 283-450 hp',
            'electric_car_tesla_model_s': 'Tesla Model S：約 670-1020 hp',
            'truck_pickup': '皮卡車：約 200-450 hp',
            'truck_semi': '聯結車：約 400-600 hp',
            'bus_city': '市區公車：約 200-300 hp',
            'formula_1': 'F1賽車：約 1000 hp',
            'human_peak': '人類峰值：約 1.2-1.5 hp (短時間)',
            'human_sustained': '人類持續：約 0.1-0.3 hp',
        },
        'en': {
            'motorcycle_125cc': '125cc Motorcycle: ~8-12 hp',
            'motorcycle_600cc': '600cc Motorcycle: ~80-120 hp',
            'motorcycle_1000cc': '1000cc Superbike: ~150-200 hp',
            'compact_car': 'Compact Car: ~80-120 hp',
            'mid_size_car': 'Mid-size Car: ~120-200 hp',
            'luxury_car': 'Luxury Car: ~200-400 hp',
            'sports_car': 'Sports Car: ~300-700 hp',
            'supercar': 'Supercar: ~500-1000+ hp',
            'electric_car_tesla_model_3': 'Tesla Model 3: ~283-450 hp',
            'electric_car_tesla_model_s': 'Tesla Model S: ~670-1020 hp',
            'truck_pickup': 'Pickup Truck: ~200-450 hp',
            'truck_semi': 'Semi Truck: ~400-600 hp',
            'bus_city': 'City Bus: ~200-300 hp',
            'formula_1': 'Formula 1: ~1000 hp',
            'human_peak': 'Human Peak: ~1.2-1.5 hp (short burst)',
            'human_sustained': 'Human Sustained: ~0.1-0.3 hp',
        },
    },
    'conversion_note': {
        'zh-TW': {
            'hp_vs_ps': '美國常用hp (745.7W)，歐洲常用PS (735.5W)',
            'brake_vs_wheel': '制動馬力是引擎輸出，輪上馬力是實際到達輪胎的動力',
            'peak_vs_continuous': '電動車有峰值功率和持續功率之分',
            'measurement_standards': '不同測試標準(SAE, DIN, JIS)會有差異',
            'power_vs_torque': '馬力是功率，扭力是力矩，兩者相關但不同',
        },
        'en': {
            'hp_vs_ps': 'US commonly uses hp (745.7W), Europe commonly uses PS (735.5W)',
            'brake_vs_wheel': 'Brake horsepower is engine output, wheel horsepower is actual power to wheels',
            'peak_vs_continuous': 'Electric vehicles distinguish between peak and continuous power',
            'measurement_standards': 'Different testing standards (SAE, DIN, JIS) may vary',
            'power_vs_torque': 'Horsepower is power, torque is rotational force - related but different',
        },
    },
    'regional_preferences': {
        'zh-TW': {
            'taiwan': '台灣：主要使用hp和PS',
            'usa': '美國：主要使用hp (SAE標準)',
            'europe': '歐洲：主要使用PS/kW',
            'japan': '日本：主要使用PS (JIS標準)',
            'china': '中國：主要使用PS和kW',
        },
        'en': {
            'taiwan': 'Taiwan: Mainly uses hp and PS',
            'usa': 'USA: Mainly uses hp (SAE standard)',
            'europe': 'Europe: Mainly uses PS/kW',
            'japan': 'Japan: Mainly uses PS (JIS standard)',
            'china': 'China: Mainly uses PS and kW',
        },
    },
}

module.exports = automotivePowerTable;
