const angleTable = {
    'unit': {
        // 以度 (degree) 為基準
        'degree': { offset: 0, scale: 1 },
        'radian': { offset: 0, scale: 0.017453292519943295 },  // π/180
        'gradian': { offset: 0, scale: 1.1111111111111112 },   // 10/9
        'turn': { offset: 0, scale: 0.002777777777777778 },    // 1/360
        'arcminute': { offset: 0, scale: 60 },                 // 60 分/度
        'arcsecond': { offset: 0, scale: 3600 },               // 3600 秒/度
        'mil_nato': { offset: 0, scale: 17.777777777777779 },  // 6400/360
        'mil_ussr': { offset: 0, scale: 16.666666666666668 },  // 6000/360
        'percent_grade': { offset: 0, scale: 1.7453292519943295 }, // tan(度*π/180)*100
    },
    'language': {
        'zh-TW': {
            'degree': '度 (°)',
            'radian': '弧度 (rad)',
            'gradian': '梯度/百分度 (gon)',
            'turn': '轉 (rev)',
            'arcminute': '角分 (′)',
            'arcsecond': '角秒 (″)',
            'mil_nato': '密位 NATO (mil)',
            'mil_ussr': '密位 蘇聯 (mil)',
            'percent_grade': '百分比坡度 (%)',
        },
        'en': {
            'degree': 'Degree (°)',
            'radian': 'Radian (rad)',
            'gradian': 'Gradian (gon)',
            'turn': 'Turn (rev)',
            'arcminute': 'Arcminute (′)',
            'arcsecond': 'Arcsecond (″)',
            'mil_nato': 'Mil NATO (mil)',
            'mil_ussr': 'Mil USSR (mil)',
            'percent_grade': 'Percent Grade (%)',
        },
    },
}

module.exports = angleTable;
