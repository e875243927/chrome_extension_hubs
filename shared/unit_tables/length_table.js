const lengthTable = {
    'unit': {
        // 基本公制
        'meter': { offset: 0, scale: 1 },
        'kilometer': { offset: 0, scale: 1000 },
        'hectometer': { offset: 0, scale: 100 },
        'decimeter': { offset: 0, scale: 0.1 },
        'centimeter': { offset: 0, scale: 0.01 },
        'millimeter': { offset: 0, scale: 0.001 },
        'micrometer': { offset: 0, scale: 0.000001 },
        'nanometer': { offset: 0, scale: 0.000000001 },
        'picometer': { offset: 0, scale: 0.000000000001 },
        'angstrom': { offset: 0, scale: 0.0000000001 },

        // 英制
        'inch': { offset: 0, scale: 0.0254 },
        'foot': { offset: 0, scale: 0.3048 },
        'yard': { offset: 0, scale: 0.9144 },
        'mile': { offset: 0, scale: 1609.344 },
        'mil': { offset: 0, scale: 0.0000254 },
        'fathom': { offset: 0, scale: 1.8288 },

        // 海洋/航空
        'nautical_mile': { offset: 0, scale: 1852 },

        // 中文傳統
        'li': { offset: 0, scale: 500 },

        // 科學/天文
        'planck_length': { offset: 0, scale: 1.616255e-35 },
        'bohr_radius': { offset: 0, scale: 5.29177210903e-11 },
        'astronomical_unit': { offset: 0, scale: 1.495978707e+11 },
        'light_year': { offset: 0, scale: 9.4607304725808e+15 },
        'parsec': { offset: 0, scale: 3.08567758149137e+16 },

        // 印刷
        'point': { offset: 0, scale: 0.000352778 },
        'pica': { offset: 0, scale: 0.004233333 },
    },
    'language': {
        'zh-TW': {
            // 基本公制
            'meter': 'm (公尺)',
            'kilometer': 'km (公里)',
            'hectometer': 'hm (百公尺)',
            'decimeter': 'dm (公寸)',
            'centimeter': 'cm (公分)',
            'millimeter': 'mm (公釐)',
            'micrometer': 'μm (微米)',
            'nanometer': 'nm (奈米)',
            'picometer': 'pm (皮米)',
            'angstrom': 'Å (埃)',

            // 英制
            'inch': 'in (英吋)',
            'foot': 'ft (英呎)',
            'yard': 'yd (碼)',
            'mile': 'mi (英里)',
            'mil': 'mil (密耳)',
            'fathom': 'fth (英尋)',

            // 海洋/航空
            'nautical_mile': 'nmi (海里)',

            // 中文傳統
            'li': '里 (華里)',

            // 科學/天文
            'planck_length': 'lₚ (普朗克長度)',
            'bohr_radius': 'a₀ (波耳半徑)',
            'astronomical_unit': 'au (天文單位)',
            'light_year': 'ly (光年)',
            'parsec': 'pc (秒差距)',

            // 印刷
            'point': 'pt (點)',
            'pica': 'pc (派卡)',
        },
        'en': {
            // 基本公制
            'meter': 'm (meter)',
            'kilometer': 'km (kilometer)',
            'hectometer': 'hm (hectometer)',
            'decimeter': 'dm (decimeter)',
            'centimeter': 'cm (centimeter)',
            'millimeter': 'mm (millimeter)',
            'micrometer': 'μm (micrometer)',
            'nanometer': 'nm (nanometer)',
            'picometer': 'pm (picometer)',
            'angstrom': 'Å (angstrom)',

            // 英制
            'inch': 'in (inch)',
            'foot': 'ft (foot)',
            'yard': 'yd (yard)',
            'mile': 'mi (mile)',
            'mil': 'mil (mil)',
            'fathom': 'fth (fathom)',

            // 海洋/航空
            'nautical_mile': 'nmi (nautical mile)',

            // 中文傳統
            'li': 'li (Chinese li)',

            // 科學/天文
            'planck_length': 'lₚ (Planck length)',
            'bohr_radius': 'a₀ (Bohr radius)',
            'astronomical_unit': 'au (astronomical unit)',
            'light_year': 'ly (light year)',
            'parsec': 'pc (parsec)',

            // 印刷
            'point': 'pt (point)',
            'pica': 'pc (pica)',
        },
    },
}

module.exports = lengthTable;
