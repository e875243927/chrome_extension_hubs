export const cmosSizeTable = {
    'unit': {
        // 以全畫幅面積為基準 (36×24mm = 864mm²)
        'full_frame': { offset: 0, scale: 1 },

        // 中片幅 (比全畫幅大)
        'medium_format_645': { offset: 0, scale: 1.68 },  // 44×33mm ≈ 1452mm²
        'medium_format_6x6': { offset: 0, scale: 3.63 },  // 56×56mm ≈ 3136mm²
        'medium_format_6x7': { offset: 0, scale: 4.34 },  // 56×67mm ≈ 3752mm²
        'medium_format_6x9': { offset: 0, scale: 5.44 },  // 56×84mm ≈ 4704mm²
        'fuji_gfx': { offset: 0, scale: 1.67 },           // 43.8×32.9mm ≈ 1441mm²
        'hasselblad_x': { offset: 0, scale: 1.67 },       // 43.8×32.9mm ≈ 1441mm²
        'phase_one': { offset: 0, scale: 2.47 },          // 53.4×40mm ≈ 2136mm²

        // APS格式
        'aps_h': { offset: 0, scale: 0.615 },        // 28.7×19mm ≈ 531mm²
        'aps_c_canon': { offset: 0, scale: 0.426 },  // 22.3×14.9mm ≈ 368mm²
        'aps_c_nikon': { offset: 0, scale: 0.431 },  // 23.5×15.6mm ≈ 372mm²
        'aps_c_sony': { offset: 0, scale: 0.431 },   // 23.5×15.6mm ≈ 372mm²

        // 小格式
        'four_thirds': { offset: 0, scale: 0.267 },  // 17.3×13mm ≈ 231mm²
        'one_inch': { offset: 0, scale: 0.135 },     // 13.2×8.8mm ≈ 116mm²
        'two_thirds': { offset: 0, scale: 0.067 },   // 8.8×6.6mm ≈ 58mm²
        'one_1_7': { offset: 0, scale: 0.050 },      // 7.6×5.7mm ≈ 43mm²
        'one_2_3': { offset: 0, scale: 0.033 },      // 6.17×4.55mm ≈ 28mm²
        'one_2_5': { offset: 0, scale: 0.029 },      // 5.76×4.29mm ≈ 25mm²
        'one_3': { offset: 0, scale: 0.020 },        // 4.8×3.6mm ≈ 17mm²
        'one_4': { offset: 0, scale: 0.014 },        // 4.0×3.0mm ≈ 12mm²
    },
    'language': {
        'zh-TW': {
            'full_frame': 'Full Frame 全畫幅 (36×24mm)',
            'medium_format_645': '中片幅 645 (44×33mm)',
            'medium_format_6x6': '中片幅 6×6 (56×56mm)',
            'medium_format_6x7': '中片幅 6×7 (56×67mm)',
            'medium_format_6x9': '中片幅 6×9 (56×84mm)',
            'fuji_gfx': 'Fuji GFX (43.8×32.9mm)',
            'hasselblad_x': 'Hasselblad X (43.8×32.9mm)',
            'phase_one': 'Phase One (53.4×40mm)',
            'aps_h': 'APS-H (28.7×19mm)',
            'aps_c_canon': 'APS-C Canon (22.3×14.9mm)',
            'aps_c_nikon': 'APS-C Nikon (23.5×15.6mm)',
            'aps_c_sony': 'APS-C Sony (23.5×15.6mm)',
            'four_thirds': '4/3 四分之三 (17.3×13mm)',
            'one_inch': '1" 一英寸 (13.2×8.8mm)',
            'two_thirds': '2/3" (8.8×6.6mm)',
            'one_1_7': '1/1.7" (7.6×5.7mm)',
            'one_2_3': '1/2.3" (6.17×4.55mm)',
            'one_2_5': '1/2.5" (5.76×4.29mm)',
            'one_3': '1/3" (4.8×3.6mm)',
            'one_4': '1/4" (4.0×3.0mm)',
        },
        'en': {
            'full_frame': 'Full Frame (36×24mm)',
            'medium_format_645': 'Medium Format 645 (44×33mm)',
            'medium_format_6x6': 'Medium Format 6×6 (56×56mm)',
            'medium_format_6x7': 'Medium Format 6×7 (56×67mm)',
            'medium_format_6x9': 'Medium Format 6×9 (56×84mm)',
            'fuji_gfx': 'Fuji GFX (43.8×32.9mm)',
            'hasselblad_x': 'Hasselblad X (43.8×32.9mm)',
            'phase_one': 'Phase One (53.4×40mm)',
            'aps_h': 'APS-H (28.7×19mm)',
            'aps_c_canon': 'APS-C Canon (22.3×14.9mm)',
            'aps_c_nikon': 'APS-C Nikon (23.5×15.6mm)',
            'aps_c_sony': 'APS-C Sony (23.5×15.6mm)',
            'four_thirds': '4/3 Four Thirds (17.3×13mm)',
            'one_inch': '1" One Inch (13.2×8.8mm)',
            'two_thirds': '2/3" (8.8×6.6mm)',
            'one_1_7': '1/1.7" (7.6×5.7mm)',
            'one_2_3': '1/2.3" (6.17×4.55mm)',
            'one_2_5': '1/2.5" (5.76×4.29mm)',
            'one_3': '1/3" (4.8×3.6mm)',
            'one_4': '1/4" (4.0×3.0mm)',
        },
        'zh-CN': {
            'full_frame': 'Full Frame 全画幅 (36×24mm)',
            'medium_format_645': '中画幅 645 (44×33mm)',
            'medium_format_6x6': '中画幅 6×6 (56×56mm)',
            'medium_format_6x7': '中画幅 6×7 (56×67mm)',
            'medium_format_6x9': '中画幅 6×9 (56×84mm)',
            'fuji_gfx': '富士 GFX (43.8×32.9mm)',
            'hasselblad_x': '哈苏 X (43.8×32.9mm)',
            'phase_one': '飞思 (53.4×40mm)',
            'aps_h': 'APS-H (28.7×19mm)',
            'aps_c_canon': 'APS-C 佳能 (22.3×14.9mm)',
            'aps_c_nikon': 'APS-C 尼康 (23.5×15.6mm)',
            'aps_c_sony': 'APS-C 索尼 (23.5×15.6mm)',
            'four_thirds': '4/3 四分之三 (17.3×13mm)',
            'one_inch': '1" 一英寸 (13.2×8.8mm)',
            'two_thirds': '2/3" (8.8×6.6mm)',
            'one_1_7': '1/1.7" (7.6×5.7mm)',
            'one_2_3': '1/2.3" (6.17×4.55mm)',
            'one_2_5': '1/2.5" (5.76×4.29mm)',
            'one_3': '1/3" (4.8×3.6mm)',
            'one_4': '1/4" (4.0×3.0mm)',
        },
        'ja': {
            'full_frame': 'フルフレーム (36×24mm)',
            'medium_format_645': '中判 645 (44×33mm)',
            'medium_format_6x6': '中判 6×6 (56×56mm)',
            'medium_format_6x7': '中判 6×7 (56×67mm)',
            'medium_format_6x9': '中判 6×9 (56×84mm)',
            'fuji_gfx': '富士フイルム GFX (43.8×32.9mm)',
            'hasselblad_x': 'ハッセルブラッド X (43.8×32.9mm)',
            'phase_one': 'フェーズワン (53.4×40mm)',
            'aps_h': 'APS-H (28.7×19mm)',
            'aps_c_canon': 'APS-C キヤノン (22.3×14.9mm)',
            'aps_c_nikon': 'APS-C ニコン (23.5×15.6mm)',
            'aps_c_sony': 'APS-C ソニー (23.5×15.6mm)',
            'four_thirds': 'フォーサーズ (17.3×13mm)',
            'one_inch': '1インチ (13.2×8.8mm)',
            'two_thirds': '2/3インチ (8.8×6.6mm)',
            'one_1_7': '1/1.7インチ (7.6×5.7mm)',
            'one_2_3': '1/2.3インチ (6.17×4.55mm)',
            'one_2_5': '1/2.5インチ (5.76×4.29mm)',
            'one_3': '1/3インチ (4.8×3.6mm)',
            'one_4': '1/4インチ (4.0×3.0mm)',
        },
    },
}


