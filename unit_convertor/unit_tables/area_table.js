export const areaTable = {
    'unit': {
        // 以平方米 (m²) 為基準
        'square_meter': { offset: 0, scale: 1 },
        'square_centimeter': { offset: 0, scale: 10000 },           // 1 m² = 10,000 cm²
        'square_millimeter': { offset: 0, scale: 1000000 },        // 1 m² = 1,000,000 mm²
        'square_kilometer': { offset: 0, scale: 0.000001 },        // 1 m² = 0.000001 km²

        // 英制單位
        'square_inch': { offset: 0, scale: 1550.0031 },            // 1 m² ≈ 1,550 in²
        'square_foot': { offset: 0, scale: 10.763910 },            // 1 m² ≈ 10.764 ft²
        'square_yard': { offset: 0, scale: 1.195990 },             // 1 m² ≈ 1.196 yd²
        'square_mile': { offset: 0, scale: 0.0000003861 },         // 1 m² ≈ 3.861×10⁻⁷ mi²

        // 土地測量單位
        'hectare': { offset: 0, scale: 0.0001 },                   // 1 m² = 0.0001 ha
        'acre': { offset: 0, scale: 0.000247105 },                 // 1 m² ≈ 0.000247 acre
        'are': { offset: 0, scale: 0.01 },                         // 1 m² = 0.01 are
        'square_rod': { offset: 0, scale: 0.0395368 },             // 1 m² ≈ 0.0395 sq rod
        'square_perch': { offset: 0, scale: 0.0395368 },           // 同 square_rod

        // 亞洲傳統單位
        'ping': { offset: 0, scale: 0.302511 },                    // 1 m² ≈ 0.3025 坪
        'tsubo': { offset: 0, scale: 0.302511 },                   // 日式坪，同台灣坪
        'taiwan_square_chi': { offset: 0, scale: 11.111111 },      // 1 m² ≈ 11.11 台尺²
        'chinese_mu': { offset: 0, scale: 0.0015 },                // 1 m² ≈ 0.0015 畝
        'japanese_se': { offset: 0, scale: 0.010083 },             // 1 m² ≈ 0.01 畝 (日本)
        'korean_pyeong': { offset: 0, scale: 0.302511 },           // 韓國坪

        // 其他單位
        'square_nautical_mile': { offset: 0, scale: 0.0000002916 }, // 1 m² ≈ 2.916×10⁻⁷ nmi²
        'square_chain': { offset: 0, scale: 0.002471 },            // 1 m² ≈ 0.00247 ch²
        'square_furlong': { offset: 0, scale: 0.0000247 },         // 1 m² ≈ 2.47×10⁻⁵ fur²

        // 小單位
        'square_micrometer': { offset: 0, scale: 1000000000000 },  // 1 m² = 10¹² μm²
        'square_nanometer': { offset: 0, scale: 1e18 },            // 1 m² = 10¹⁸ nm²

        // 大單位
        'square_megameter': { offset: 0, scale: 1e-12 },           // 1 m² = 10⁻¹² Mm²
        'square_gigameter': { offset: 0, scale: 1e-18 },           // 1 m² = 10⁻¹⁸ Gm²

        // 特殊單位
        'barn': { offset: 0, scale: 1e28 },                        // 核物理單位，1 m² = 10²⁸ barn
        'circular_mil': { offset: 0, scale: 1973525241.4 },        // 1 m² ≈ 1.97×10⁹ cmil
        'square_thou': { offset: 0, scale: 1550003100 },           // 1 m² ≈ 1.55×10⁹ sq thou
    },
    'language': {
        'zh-TW': {
            'square_meter': '平方米 (m²)',
            'square_centimeter': '平方厘米 (cm²)',
            'square_millimeter': '平方毫米 (mm²)',
            'square_kilometer': '平方公里 (km²)',
            'square_inch': '平方英寸 (in²)',
            'square_foot': '平方英尺 (ft²)',
            'square_yard': '平方碼 (yd²)',
            'square_mile': '平方英里 (mi²)',
            'hectare': '公頃 (ha)',
            'acre': '英畝 (acre)',
            'are': '公畝 (are)',
            'square_rod': '平方竿 (sq rod)',
            'square_perch': '平方柱 (sq perch)',
            'ping': '坪',
            'tsubo': '坪 (日式)',
            'taiwan_square_chi': '台尺² (台尺平方)',
            'chinese_mu': '畝 (中式)',
            'japanese_se': '畝 (日式)',
            'korean_pyeong': '坪 (韓式)',
            'square_nautical_mile': '平方海里 (nmi²)',
            'square_chain': '平方鏈 (ch²)',
            'square_furlong': '平方化朗 (fur²)',
            'square_micrometer': '平方微米 (μm²)',
            'square_nanometer': '平方納米 (nm²)',
            'square_megameter': '平方兆米 (Mm²)',
            'square_gigameter': '平方吉米 (Gm²)',
            'barn': '巴恩 (barn)',
            'circular_mil': '圓密耳 (cmil)',
            'square_thou': '平方密耳 (sq thou)',
        },
        'en': {
            'square_meter': 'Square Meter (m²)',
            'square_centimeter': 'Square Centimeter (cm²)',
            'square_millimeter': 'Square Millimeter (mm²)',
            'square_kilometer': 'Square Kilometer (km²)',
            'square_inch': 'Square Inch (in²)',
            'square_foot': 'Square Foot (ft²)',
            'square_yard': 'Square Yard (yd²)',
            'square_mile': 'Square Mile (mi²)',
            'hectare': 'Hectare (ha)',
            'acre': 'Acre (acre)',
            'are': 'Are (are)',
            'square_rod': 'Square Rod (sq rod)',
            'square_perch': 'Square Perch (sq perch)',
            'ping': 'Ping (坪)',
            'tsubo': 'Tsubo (坪)',
            'taiwan_square_chi': 'Taiwan Square Chi (台尺²)',
            'chinese_mu': 'Chinese Mu (畝)',
            'japanese_se': 'Japanese Se (畝)',
            'korean_pyeong': 'Korean Pyeong (坪)',
            'square_nautical_mile': 'Square Nautical Mile (nmi²)',
            'square_chain': 'Square Chain (ch²)',
            'square_furlong': 'Square Furlong (fur²)',
            'square_micrometer': 'Square Micrometer (μm²)',
            'square_nanometer': 'Square Nanometer (nm²)',
            'square_megameter': 'Square Megameter (Mm²)',
            'square_gigameter': 'Square Gigameter (Gm²)',
            'barn': 'Barn (barn)',
            'circular_mil': 'Circular Mil (cmil)',
            'square_thou': 'Square Thou (sq thou)',
        },
        'zh-CN': {
            'square_meter': '平方米 (m²)',
            'square_centimeter': '平方厘米 (cm²)',
            'square_millimeter': '平方毫米 (mm²)',
            'square_kilometer': '平方公里 (km²)',
            'square_inch': '平方英寸 (in²)',
            'square_foot': '平方英尺 (ft²)',
            'square_yard': '平方碼 (yd²)',
            'square_mile': '平方英里 (mi²)',
            'hectare': '公頃 (ha)',
            'acre': '英畝 (acre)',
            'are': '公畝 (are)',
            'square_rod': '平方竿 (sq rod)',
            'square_perch': '平方柱 (sq perch)',
            'ping': '坪',
            'tsubo': '坪 (日式)',
            'taiwan_square_chi': '台尺² (台尺平方)',
            'chinese_mu': '畝 (中式)',
            'japanese_se': '畝 (日式)',
            'korean_pyeong': '坪 (韓式)',
            'square_nautical_mile': '平方海里 (nmi²)',
            'square_chain': '平方鏈 (ch²)',
            'square_furlong': '平方化朗 (fur²)',
            'square_micrometer': '平方微米 (μm²)',
            'square_nanometer': '平方納米 (nm²)',            
            'square_megameter': '平方兆米 (Mm²)',
            'square_gigameter': '平方吉米 (Gm²)',
            'barn': '巴恩 (barn)',
            'circular_mil': '圓密耳 (cmil)',
            'square_thou': '平方密耳 (sq thou)',
        },
        'ja': {
            'square_meter': '平方メートル (m²)',
            'square_centimeter': '平方センチメートル (cm²)',
            'square_millimeter': '平方ミリメートル (mm²)',
            'square_kilometer': '平方キロメートル (km²)',
            'square_inch': '平方インチ (in²)',
            'square_foot': '平方フット (ft²)',
            'square_yard': '平方ヤード (yd²)',            
            'square_mile': '平方マイル (mi²)',
            'hectare': 'ヘクタール (ha)',
            'acre': '英畝 (acre)',
            'are': '公畝 (are)',
            'square_rod': '平方竿 (sq rod)',
            'square_perch': '平方柱 (sq perch)',
            'ping': '坪',
            'tsubo': '坪 (日式)',
            'taiwan_square_chi': '台尺² (台尺平方)',
            'chinese_mu': '畝 (中式)',
            'japanese_se': '畝 (日式)',
            'korean_pyeong': '坪 (韓式)',
            'square_nautical_mile': '平方海里 (nmi²)',
            'square_chain': '平方鏈 (ch²)',
            'square_furlong': '平方化朗 (fur²)',
            'square_micrometer': '平方マイクロメートル (μm²)',
            'square_nanometer': '平方ナノメートル (nm²)',
            'square_megameter': '平方メガメートル (Mm²)',
            'square_gigameter': '平方ギガメートル (Gm²)',
            'barn': '巴恩 (barn)',
            'circular_mil': '円密耳 (cmil)',
            'square_thou': '平方密耳 (sq thou)',
        }
    },
    'reference_values': {
        'zh-TW': {
            'football_field': '足球場：約 7,140 m²',
            'basketball_court': '籃球場：約 420 m²',
            'tennis_court': '網球場：約 261 m²',
            'parking_space': '停車位：約 12.5 m²',
            'typical_house': '一般住宅：約 100-200 m²',
            'typical_apartment': '一般公寓：約 30-100 m²',
            'one_ping': '一坪：約 3.31 m²',
        },
        'en': {
            'football_field': 'Football Field: ~7,140 m²',
            'basketball_court': 'Basketball Court: ~420 m²',
            'tennis_court': 'Tennis Court: ~261 m²',
            'parking_space': 'Parking Space: ~12.5 m²',
            'typical_house': 'Typical House: ~100-200 m²',
            'typical_apartment': 'Typical Apartment: ~30-100 m²',
            'one_ping': 'One Ping: ~3.31 m²',
        },
    },
    'conversion_note': {
        'zh-TW': {
            'ping_explanation': '坪是台灣、日本常用的面積單位，1坪 ≈ 3.31 m²',
            'land_units': '土地測量常用公頃、英畝等大面積單位',
            'precision_note': '轉換結果可能因標準不同而略有差異',
        },
        'en': {
            'ping_explanation': 'Ping is commonly used in Taiwan and Japan, 1 ping ≈ 3.31 m²',
            'land_units': 'Land surveying commonly uses hectares, acres and other large area units',
            'precision_note': 'Conversion results may vary slightly due to different standards',
        },
    },
}


