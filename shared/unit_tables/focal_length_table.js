const focalLengthTable = {
    'unit': {
        // 以全畫幅等效焦距為基準
        'full_frame': { offset: 0, scale: 1 },

        // 中片幅 (轉換係數小於1，視角更廣)
        'medium_format_645': { offset: 0, scale: 0.79 },  // 轉換係數 0.79x
        'medium_format_6x6': { offset: 0, scale: 0.55 },  // 轉換係數 0.55x
        'medium_format_6x7': { offset: 0, scale: 0.49 },  // 轉換係數 0.49x
        'medium_format_6x9': { offset: 0, scale: 0.43 },  // 轉換係數 0.43x
        'fuji_gfx': { offset: 0, scale: 0.79 },           // 轉換係數 0.79x
        'hasselblad_x': { offset: 0, scale: 0.79 },       // 轉換係數 0.79x
        'phase_one': { offset: 0, scale: 0.65 },          // 轉換係數 0.65x

        // APS格式
        'aps_h': { offset: 0, scale: 1.3 },          // 轉換係數 1.3x
        'aps_c_canon': { offset: 0, scale: 1.6 },    // 轉換係數 1.6x
        'aps_c_nikon': { offset: 0, scale: 1.5 },    // 轉換係數 1.5x
        'aps_c_sony': { offset: 0, scale: 1.5 },     // 轉換係數 1.5x

        // 小格式
        'four_thirds': { offset: 0, scale: 2.0 },    // 轉換係數 2.0x
        'one_inch': { offset: 0, scale: 2.7 },       // 轉換係數 2.7x
        'two_thirds': { offset: 0, scale: 3.9 },     // 轉換係數 3.9x
        'one_1_7': { offset: 0, scale: 4.7 },        // 轉換係數 4.7x
        'one_2_3': { offset: 0, scale: 5.6 },        // 轉換係數 5.6x
        'one_2_5': { offset: 0, scale: 6.0 },        // 轉換係數 6.0x
        'one_3': { offset: 0, scale: 7.2 },          // 轉換係數 7.2x
        'one_4': { offset: 0, scale: 8.8 },          // 轉換係數 8.8x
    },
    'language': {
        'zh-TW': {
            'full_frame': 'Full Frame 全畫幅 (1.0x)',
            'medium_format_645': '中片幅 645 (0.79x)',
            'medium_format_6x6': '中片幅 6×6 (0.55x)',
            'medium_format_6x7': '中片幅 6×7 (0.49x)',
            'medium_format_6x9': '中片幅 6×9 (0.43x)',
            'fuji_gfx': 'Fuji GFX (0.79x)',
            'hasselblad_x': 'Hasselblad X (0.79x)',
            'phase_one': 'Phase One (0.65x)',
            'aps_h': 'APS-H (1.3x)',
            'aps_c_canon': 'APS-C Canon (1.6x)',
            'aps_c_nikon': 'APS-C Nikon (1.5x)',
            'aps_c_sony': 'APS-C Sony (1.5x)',
            'four_thirds': '4/3 四分之三 (2.0x)',
            'one_inch': '1" 一英寸 (2.7x)',
            'two_thirds': '2/3" (3.9x)',
            'one_1_7': '1/1.7" (4.7x)',
            'one_2_3': '1/2.3" (5.6x)',
            'one_2_5': '1/2.5" (6.0x)',
            'one_3': '1/3" (7.2x)',
            'one_4': '1/4" (8.8x)',
        },
        'en': {
            'full_frame': 'Full Frame (1.0x)',
            'medium_format_645': 'Medium Format 645 (0.79x)',
            'medium_format_6x6': 'Medium Format 6×6 (0.55x)',
            'medium_format_6x7': 'Medium Format 6×7 (0.49x)',
            'medium_format_6x9': 'Medium Format 6×9 (0.43x)',
            'fuji_gfx': 'Fuji GFX (0.79x)',
            'hasselblad_x': 'Hasselblad X (0.79x)',
            'phase_one': 'Phase One (0.65x)',
            'aps_h': 'APS-H (1.3x)',
            'aps_c_canon': 'APS-C Canon (1.6x)',
            'aps_c_nikon': 'APS-C Nikon (1.5x)',
            'aps_c_sony': 'APS-C Sony (1.5x)',
            'four_thirds': '4/3 Four Thirds (2.0x)',
            'one_inch': '1" One Inch (2.7x)',
            'two_thirds': '2/3" (3.9x)',
            'one_1_7': '1/1.7" (4.7x)',
            'one_2_3': '1/2.3" (5.6x)',
            'one_2_5': '1/2.5" (6.0x)',
            'one_3': '1/3" (7.2x)',
            'one_4': '1/4" (8.8x)',
        },
    },
}

module.exports = focalLengthTable;
