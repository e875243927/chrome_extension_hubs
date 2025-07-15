export const paperSizeTable = {
    'unit': {
        // 以 A4 紙張面積為基準 (210mm × 297mm = 62,370 mm²)
        'a4': { offset: 0, scale: 1 },

        // A系列 (ISO 216)
        'a0': { offset: 0, scale: 16 },                    // 841×1189mm, 16倍A4面積
        'a1': { offset: 0, scale: 8 },                     // 594×841mm, 8倍A4面積
        'a2': { offset: 0, scale: 4 },                     // 420×594mm, 4倍A4面積
        'a3': { offset: 0, scale: 2 },                     // 297×420mm, 2倍A4面積
        'a5': { offset: 0, scale: 0.5 },                   // 148×210mm, 0.5倍A4面積
        'a6': { offset: 0, scale: 0.25 },                  // 105×148mm, 0.25倍A4面積
        'a7': { offset: 0, scale: 0.125 },                 // 74×105mm, 0.125倍A4面積
        'a8': { offset: 0, scale: 0.0625 },                // 52×74mm, 0.0625倍A4面積

        // B系列 (ISO 217)
        'b0': { offset: 0, scale: 22.627 },                // 1000×1414mm
        'b1': { offset: 0, scale: 11.314 },                // 707×1000mm
        'b2': { offset: 0, scale: 5.657 },                 // 500×707mm
        'b3': { offset: 0, scale: 2.828 },                 // 353×500mm
        'b4': { offset: 0, scale: 1.414 },                 // 250×353mm
        'b5': { offset: 0, scale: 0.707 },                 // 176×250mm
        'b6': { offset: 0, scale: 0.354 },                 // 125×176mm

        // C系列 (ISO 269) - 信封用
        'c0': { offset: 0, scale: 19.063 },                // 917×1297mm
        'c1': { offset: 0, scale: 9.531 },                 // 648×917mm
        'c2': { offset: 0, scale: 4.766 },                 // 458×648mm
        'c3': { offset: 0, scale: 2.383 },                 // 324×458mm
        'c4': { offset: 0, scale: 1.191 },                 // 229×324mm
        'c5': { offset: 0, scale: 0.596 },                 // 162×229mm
        'c6': { offset: 0, scale: 0.298 },                 // 114×162mm

        // 北美系列
        'letter': { offset: 0, scale: 0.968 },             // 8.5×11" (215.9×279.4mm)
        'legal': { offset: 0, scale: 1.232 },              // 8.5×14" (215.9×355.6mm)
        'tabloid': { offset: 0, scale: 1.936 },            // 11×17" (279.4×431.8mm)
        'executive': { offset: 0, scale: 0.789 },          // 7.25×10.5" (184.15×266.7mm)
        'statement': { offset: 0, scale: 0.484 },          // 5.5×8.5" (139.7×215.9mm)
        'folio': { offset: 0, scale: 1.144 },              // 8.5×13" (215.9×330.2mm)
        'quarto': { offset: 0, scale: 0.953 },             // 8.5×10.83" (215.9×275.1mm)

        // 日本JIS系列
        'jis_b0': { offset: 0, scale: 24.034 },            // 1030×1456mm
        'jis_b1': { offset: 0, scale: 12.017 },            // 728×1030mm
        'jis_b2': { offset: 0, scale: 6.009 },             // 515×728mm
        'jis_b3': { offset: 0, scale: 3.004 },             // 364×515mm
        'jis_b4': { offset: 0, scale: 1.502 },             // 257×364mm
        'jis_b5': { offset: 0, scale: 0.751 },             // 182×257mm
        'jis_b6': { offset: 0, scale: 0.375 },             // 128×182mm

        // 中國GB系列
        'gb_16k_large': { offset: 0, scale: 0.959 },       // 210×285mm (大度16開)
        'gb_16k_standard': { offset: 0, scale: 0.771 },    // 185×260mm (正度16開)
        'gb_32k_large': { offset: 0, scale: 0.485 },       // 144×210mm (大度32開)
        'gb_32k_standard': { offset: 0, scale: 0.386 },    // 130×185mm (正度32開)

        // 其他常見尺寸
        'postcard': { offset: 0, scale: 0.239 },           // 100×148mm (明信片)
        'business_card': { offset: 0, scale: 0.087 },      // 54×85mm (名片)
        'photo_4x6': { offset: 0, scale: 0.390 },          // 102×152mm (4×6相片)
        'photo_5x7': { offset: 0, scale: 0.568 },          // 127×178mm (5×7相片)
        'photo_8x10': { offset: 0, scale: 1.296 },         // 203×254mm (8×10相片)
    },
    'language': {
        'zh-TW': {
            'a4': 'A4 (210×297mm)',
            'a0': 'A0 (841×1189mm)',
            'a1': 'A1 (594×841mm)',
            'a2': 'A2 (420×594mm)',
            'a3': 'A3 (297×420mm)',
            'a5': 'A5 (148×210mm)',
            'a6': 'A6 (105×148mm)',
            'a7': 'A7 (74×105mm)',
            'a8': 'A8 (52×74mm)',
            'b0': 'B0 (1000×1414mm)',
            'b1': 'B1 (707×1000mm)',
            'b2': 'B2 (500×707mm)',
            'b3': 'B3 (353×500mm)',
            'b4': 'B4 (250×353mm)',
            'b5': 'B5 (176×250mm)',
            'b6': 'B6 (125×176mm)',
            'c0': 'C0 信封 (917×1297mm)',
            'c1': 'C1 信封 (648×917mm)',
            'c2': 'C2 信封 (458×648mm)',
            'c3': 'C3 信封 (324×458mm)',
            'c4': 'C4 信封 (229×324mm)',
            'c5': 'C5 信封 (162×229mm)',
            'c6': 'C6 信封 (114×162mm)',
            'letter': 'Letter 美式信紙 (8.5×11")',
            'legal': 'Legal 美式法律用紙 (8.5×14")',
            'tabloid': 'Tabloid 小報 (11×17")',
            'executive': 'Executive 行政用紙 (7.25×10.5")',
            'statement': 'Statement 聲明書 (5.5×8.5")',
            'folio': 'Folio 對開 (8.5×13")',
            'quarto': 'Quarto 四開 (8.5×10.83")',
            'jis_b0': 'JIS B0 (1030×1456mm)',
            'jis_b1': 'JIS B1 (728×1030mm)',
            'jis_b2': 'JIS B2 (515×728mm)',
            'jis_b3': 'JIS B3 (364×515mm)',
            'jis_b4': 'JIS B4 (257×364mm)',
            'jis_b5': 'JIS B5 (182×257mm)',
            'jis_b6': 'JIS B6 (128×182mm)',
            'gb_16k_large': '大度16開 (210×285mm)',
            'gb_16k_standard': '正度16開 (185×260mm)',
            'gb_32k_large': '大度32開 (144×210mm)',
            'gb_32k_standard': '正度32開 (130×185mm)',
            'postcard': '明信片 (100×148mm)',
            'business_card': '名片 (54×85mm)',
            'photo_4x6': '4×6相片 (102×152mm)',
            'photo_5x7': '5×7相片 (127×178mm)',
            'photo_8x10': '8×10相片 (203×254mm)',
        },
        'en': {
            'a4': 'A4 (210×297mm)',
            'a0': 'A0 (841×1189mm)',
            'a1': 'A1 (594×841mm)',
            'a2': 'A2 (420×594mm)',
            'a3': 'A3 (297×420mm)',
            'a5': 'A5 (148×210mm)',
            'a6': 'A6 (105×148mm)',
            'a7': 'A7 (74×105mm)',
            'a8': 'A8 (52×74mm)',
            'b0': 'B0 (1000×1414mm)',
            'b1': 'B1 (707×1000mm)',
            'b2': 'B2 (500×707mm)',
            'b3': 'B3 (353×500mm)',
            'b4': 'B4 (250×353mm)',
            'b5': 'B5 (176×250mm)',
            'b6': 'B6 (125×176mm)',
            'c0': 'C0 Envelope (917×1297mm)',
            'c1': 'C1 Envelope (648×917mm)',
            'c2': 'C2 Envelope (458×648mm)',
            'c3': 'C3 Envelope (324×458mm)',
            'c4': 'C4 Envelope (229×324mm)',
            'c5': 'C5 Envelope (162×229mm)',
            'c6': 'C6 Envelope (114×162mm)',
            'letter': 'Letter (8.5×11")',
            'legal': 'Legal (8.5×14")',
            'tabloid': 'Tabloid (11×17")',
            'executive': 'Executive (7.25×10.5")',
            'statement': 'Statement (5.5×8.5")',
            'folio': 'Folio (8.5×13")',
            'quarto': 'Quarto (8.5×10.83")',
            'jis_b0': 'JIS B0 (1030×1456mm)',
            'jis_b1': 'JIS B1 (728×1030mm)',
            'jis_b2': 'JIS B2 (515×728mm)',
            'jis_b3': 'JIS B3 (364×515mm)',
            'jis_b4': 'JIS B4 (257×364mm)',
            'jis_b5': 'JIS B5 (182×257mm)',
            'jis_b6': 'JIS B6 (128×182mm)',
            'gb_16k_large': 'GB 16K Large (210×285mm)',
            'gb_16k_standard': 'GB 16K Standard (185×260mm)',
            'gb_32k_large': 'GB 32K Large (144×210mm)',
            'gb_32k_standard': 'GB 32K Standard (130×185mm)',
            'postcard': 'Postcard (100×148mm)',
            'business_card': 'Business Card (54×85mm)',
            'photo_4x6': '4×6 Photo (102×152mm)',
            'photo_5x7': '5×7 Photo (127×178mm)',
            'photo_8x10': '8×10 Photo (203×254mm)',
        },
    },
    'reference_values': {
        'zh-TW': {
            'a4_most_common': 'A4是最常用的紙張尺寸',
            'a3_drawing': 'A3常用於繪圖、海報',
            'a5_notebook': 'A5常用於筆記本、小冊子',
            'letter_us_standard': 'Letter是美國標準辦公用紙',
            'b4_japan_common': 'B4在日本很常見',
            'business_card_standard': '標準名片尺寸：54×85mm',
            'envelope_matching': 'C系列信封剛好裝入對應A系列紙張',
        },
        'en': {
            'a4_most_common': 'A4 is the most commonly used paper size',
            'a3_drawing': 'A3 commonly used for drawings and posters',
            'a5_notebook': 'A5 commonly used for notebooks and booklets',
            'letter_us_standard': 'Letter is the US standard office paper',
            'b4_japan_common': 'B4 is very common in Japan',
            'business_card_standard': 'Standard business card: 54×85mm',
            'envelope_matching': 'C-series envelopes fit corresponding A-series papers',
        },
    },
    'conversion_note': {
        'zh-TW': {
            'area_based': '轉換基於紙張面積比例計算',
            'aspect_ratio': 'A系列紙張長寬比為√2:1',
            'folding_relationship': 'A系列每大一號面積是前一號的2倍',
            'regional_differences': '不同地區可能有細微的尺寸差異',
            'practical_use': '實際使用時請確認具體尺寸要求',
        },
        'en': {
            'area_based': 'Conversion based on paper area ratio calculation',
            'aspect_ratio': 'A-series papers have √2:1 aspect ratio',
            'folding_relationship': 'Each A-series size is twice the area of the next smaller size',
            'regional_differences': 'Different regions may have slight size variations',
            'practical_use': 'Please confirm specific size requirements for practical use',
        },
    },
}


