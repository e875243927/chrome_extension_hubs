const weightTable = {
    'unit': {
        // 基本公制
        'gram': { offset: 0, scale: 1 },
        'milligram': { offset: 0, scale: 0.001 },
        'microgram': { offset: 0, scale: 0.000001 },
        'kilogram': { offset: 0, scale: 1000 },
        'ton': { offset: 0, scale: 1000000 },  // 公噸

        // 英制
        'ounce': { offset: 0, scale: 28.349523125 },
        'pound': { offset: 0, scale: 453.59237 },
        'stone': { offset: 0, scale: 6350.29318 },
        'short_ton': { offset: 0, scale: 907184.74 },  // 美噸
        'long_ton': { offset: 0, scale: 1016046.9088 }, // 英噸
        'grain': { offset: 0, scale: 0.06479891 },

        // 金衡制
        'troy_ounce': { offset: 0, scale: 31.1034768 },
        'troy_pound': { offset: 0, scale: 373.2417216 },
        'pennyweight': { offset: 0, scale: 1.55517384 },
        'carat': { offset: 0, scale: 0.2 },

        // 中文現代
        'qian': { offset: 0, scale: 5 },
        'liang': { offset: 0, scale: 50 },
        'jin': { offset: 0, scale: 500 },

        // 中文傳統
        'traditional_qian': { offset: 0, scale: 3.75 },
        'traditional_liang': { offset: 0, scale: 37.5 },
        'traditional_jin': { offset: 0, scale: 600 },

        //
        'atomic_mass_unit': { offset: 0, scale: 1.66053906660e-24 }, // 原子質量單位 (amu)
    },
    'language': {
        'zh-TW': {
            'gram': 'g (公克)',
            'milligram': 'mg (毫克)',
            'microgram': 'μg (微克)',
            'kilogram': 'kg (公斤)',
            'ton': 't (公噸)',
            'ounce': 'oz (盎司)',
            'pound': 'lb (磅)',
            'short_ton': 'short ton (美噸)',
            'long_ton': 'long ton (英噸)',
            'grain': 'grain (格令)',
            'troy_ounce': 'troy oz (金衡盎司)',
            'troy_pound': 'troy lb (金衡磅)',
            'pennyweight': 'pennyweight (金衡錢重)',
            'carat': 'carat (克拉)',
            'atomic_mass_unit': 'amu (原子質量單位)',
            'qian': 'qian (現代錢)',
            'liang': 'liang (現代兩)',
            'jin': 'jin (現代斤)',
            'traditional_qian': 'qian (傳統錢)',
            'traditional_liang': 'liang (傳統兩)',
            'traditional_jin': 'jin (傳統斤)',
        },
        'en': {
            'gram': 'g (gram)',
            'milligram': 'mg (milligram)',
            'microgram': 'μg (microgram)',
            'kilogram': 'kg (kilogram)',
            'ton': 't (ton)',
            'ounce': 'oz (ounce)',
            'pound': 'lb (pound)',
            'short_ton': 'short ton (US)',
            'long_ton': 'long ton (UK)',
            'grain': 'grain (grain)',
            'troy_ounce': 'troy oz (troy ounce)',
            'troy_pound': 'troy lb (troy pound)',
            'pennyweight': 'pennyweight (pennyweight)',
            'carat': 'carat (carat)',
            'atomic_mass_unit': 'amu (atomic mass unit)',
            'qian': 'qian (qian)',
            'liang': 'liang (liang)',
            'jin': 'jin (jin)',
            'traditional_qian': 'qian (traditional qian)',
            'traditional_liang': 'liang (traditional liang)',
            'traditional_jin': 'jin (traditional jin)',
        },
    },
}

module.exports = weightTable;
