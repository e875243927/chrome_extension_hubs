export const shoeSizeTable = {
    'unit': {
        // 以 25cm 腳長為基準 (約 US 8男鞋 / US 9.5女鞋)
        'foot_length_25cm': { offset: 0, scale: 1 },

        // 腳長基準 (厘米)
        'foot_length_22cm': { offset: 0, scale: 0.88 },        // 22cm
        'foot_length_23cm': { offset: 0, scale: 0.92 },        // 23cm  
        'foot_length_24cm': { offset: 0, scale: 0.96 },        // 24cm
        'foot_length_26cm': { offset: 0, scale: 1.04 },        // 26cm
        'foot_length_27cm': { offset: 0, scale: 1.08 },        // 27cm
        'foot_length_28cm': { offset: 0, scale: 1.12 },        // 28cm
        'foot_length_29cm': { offset: 0, scale: 1.16 },        // 29cm
        'foot_length_30cm': { offset: 0, scale: 1.20 },        // 30cm

        // 美國男鞋 (US Men)
        'us_men_6': { offset: 0, scale: 0.88 },                // 對應22cm
        'us_men_6_5': { offset: 0, scale: 0.90 },              // 對應22.5cm
        'us_men_7': { offset: 0, scale: 0.92 },                // 對應23cm
        'us_men_7_5': { offset: 0, scale: 0.94 },              // 對應23.5cm
        'us_men_8': { offset: 0, scale: 1 },                   // 對應25cm (基準)
        'us_men_8_5': { offset: 0, scale: 1.02 },              // 對應25.5cm
        'us_men_9': { offset: 0, scale: 1.04 },                // 對應26cm
        'us_men_9_5': { offset: 0, scale: 1.06 },              // 對應26.5cm
        'us_men_10': { offset: 0, scale: 1.08 },               // 對應27cm
        'us_men_10_5': { offset: 0, scale: 1.10 },             // 對應27.5cm
        'us_men_11': { offset: 0, scale: 1.12 },               // 對應28cm
        'us_men_12': { offset: 0, scale: 1.16 },               // 對應29cm

        // 美國女鞋 (US Women)
        'us_women_6': { offset: 0, scale: 0.88 },              // 對應22cm
        'us_women_6_5': { offset: 0, scale: 0.90 },            // 對應22.5cm
        'us_women_7': { offset: 0, scale: 0.92 },              // 對應23cm
        'us_women_7_5': { offset: 0, scale: 0.94 },            // 對應23.5cm
        'us_women_8': { offset: 0, scale: 0.96 },              // 對應24cm
        'us_women_8_5': { offset: 0, scale: 0.98 },            // 對應24.5cm
        'us_women_9': { offset: 0, scale: 1 },                 // 對應25cm (基準)
        'us_women_9_5': { offset: 0, scale: 1.02 },            // 對應25.5cm
        'us_women_10': { offset: 0, scale: 1.04 },             // 對應26cm
        'us_women_10_5': { offset: 0, scale: 1.06 },           // 對應26.5cm
        'us_women_11': { offset: 0, scale: 1.08 },             // 對應27cm

        // 英國男鞋 (UK Men)
        'uk_men_5_5': { offset: 0, scale: 0.88 },              // 對應22cm
        'uk_men_6': { offset: 0, scale: 0.90 },                // 對應22.5cm
        'uk_men_6_5': { offset: 0, scale: 0.92 },              // 對應23cm
        'uk_men_7': { offset: 0, scale: 0.94 },                // 對應23.5cm
        'uk_men_7_5': { offset: 0, scale: 1 },                 // 對應25cm (基準)
        'uk_men_8': { offset: 0, scale: 1.02 },                // 對應25.5cm
        'uk_men_8_5': { offset: 0, scale: 1.04 },              // 對應26cm
        'uk_men_9': { offset: 0, scale: 1.06 },                // 對應26.5cm
        'uk_men_9_5': { offset: 0, scale: 1.08 },              // 對應27cm
        'uk_men_10': { offset: 0, scale: 1.10 },               // 對應27.5cm
        'uk_men_10_5': { offset: 0, scale: 1.12 },             // 對應28cm

        // 英國女鞋 (UK Women)
        'uk_women_4': { offset: 0, scale: 0.88 },              // 對應22cm
        'uk_women_4_5': { offset: 0, scale: 0.90 },            // 對應22.5cm
        'uk_women_5': { offset: 0, scale: 0.92 },              // 對應23cm
        'uk_women_5_5': { offset: 0, scale: 0.94 },            // 對應23.5cm
        'uk_women_6': { offset: 0, scale: 0.96 },              // 對應24cm
        'uk_women_6_5': { offset: 0, scale: 0.98 },            // 對應24.5cm
        'uk_women_7': { offset: 0, scale: 1 },                 // 對應25cm (基準)
        'uk_women_7_5': { offset: 0, scale: 1.02 },            // 對應25.5cm
        'uk_women_8': { offset: 0, scale: 1.04 },              // 對應26cm

        // 歐洲鞋碼 (EU)
        'eu_35': { offset: 0, scale: 0.88 },                   // 對應22cm
        'eu_35_5': { offset: 0, scale: 0.90 },                 // 對應22.5cm
        'eu_36': { offset: 0, scale: 0.92 },                   // 對應23cm
        'eu_37': { offset: 0, scale: 0.94 },                   // 對應23.5cm
        'eu_38': { offset: 0, scale: 0.96 },                   // 對應24cm
        'eu_39': { offset: 0, scale: 0.98 },                   // 對應24.5cm
        'eu_40': { offset: 0, scale: 1 },                      // 對應25cm (基準)
        'eu_41': { offset: 0, scale: 1.02 },                   // 對應25.5cm
        'eu_42': { offset: 0, scale: 1.04 },                   // 對應26cm
        'eu_43': { offset: 0, scale: 1.06 },                   // 對應26.5cm
        'eu_44': { offset: 0, scale: 1.08 },                   // 對應27cm
        'eu_45': { offset: 0, scale: 1.10 },                   // 對應27.5cm
        'eu_46': { offset: 0, scale: 1.12 },                   // 對應28cm

        // 日本鞋碼 (JP cm)
        'jp_22': { offset: 0, scale: 0.88 },                   // 22cm
        'jp_22_5': { offset: 0, scale: 0.90 },                 // 22.5cm
        'jp_23': { offset: 0, scale: 0.92 },                   // 23cm
        'jp_23_5': { offset: 0, scale: 0.94 },                 // 23.5cm
        'jp_24': { offset: 0, scale: 0.96 },                   // 24cm
        'jp_24_5': { offset: 0, scale: 0.98 },                 // 24.5cm
        'jp_25': { offset: 0, scale: 1 },                      // 25cm (基準)
        'jp_25_5': { offset: 0, scale: 1.02 },                 // 25.5cm
        'jp_26': { offset: 0, scale: 1.04 },                   // 26cm
        'jp_26_5': { offset: 0, scale: 1.06 },                 // 26.5cm
        'jp_27': { offset: 0, scale: 1.08 },                   // 27cm
        'jp_27_5': { offset: 0, scale: 1.10 },                 // 27.5cm
        'jp_28': { offset: 0, scale: 1.12 },                   // 28cm

        // 中國鞋碼 (CN cm)
        'cn_220': { offset: 0, scale: 0.88 },                  // 22cm
        'cn_225': { offset: 0, scale: 0.90 },                  // 22.5cm
        'cn_230': { offset: 0, scale: 0.92 },                  // 23cm
        'cn_235': { offset: 0, scale: 0.94 },                  // 23.5cm
        'cn_240': { offset: 0, scale: 0.96 },                  // 24cm
        'cn_245': { offset: 0, scale: 0.98 },                  // 24.5cm
        'cn_250': { offset: 0, scale: 1 },                     // 25cm (基準)
        'cn_255': { offset: 0, scale: 1.02 },                  // 25.5cm
        'cn_260': { offset: 0, scale: 1.04 },                  // 26cm
        'cn_265': { offset: 0, scale: 1.06 },                  // 26.5cm
        'cn_270': { offset: 0, scale: 1.08 },                  // 27cm
        'cn_275': { offset: 0, scale: 1.10 },                  // 27.5cm
        'cn_280': { offset: 0, scale: 1.12 },                  // 28cm

        // 韓國鞋碼 (KR mm)
        'kr_220': { offset: 0, scale: 0.88 },                  // 220mm
        'kr_225': { offset: 0, scale: 0.90 },                  // 225mm
        'kr_230': { offset: 0, scale: 0.92 },                  // 230mm
        'kr_235': { offset: 0, scale: 0.94 },                  // 235mm
        'kr_240': { offset: 0, scale: 0.96 },                  // 240mm
        'kr_245': { offset: 0, scale: 0.98 },                  // 245mm
        'kr_250': { offset: 0, scale: 1 },                     // 250mm (基準)
        'kr_255': { offset: 0, scale: 1.02 },                  // 255mm
        'kr_260': { offset: 0, scale: 1.04 },                  // 260mm
        'kr_265': { offset: 0, scale: 1.06 },                  // 265mm
        'kr_270': { offset: 0, scale: 1.08 },                  // 270mm
        'kr_275': { offset: 0, scale: 1.10 },                  // 275mm
        'kr_280': { offset: 0, scale: 1.12 },                  // 280mm
    },
    'language': {
        'zh-TW': {
            'foot_length_25cm': '腳長 25cm (基準)',
            'foot_length_22cm': '腳長 22cm',
            'foot_length_23cm': '腳長 23cm',
            'foot_length_24cm': '腳長 24cm',
            'foot_length_26cm': '腳長 26cm',
            'foot_length_27cm': '腳長 27cm',
            'foot_length_28cm': '腳長 28cm',
            'foot_length_29cm': '腳長 29cm',
            'foot_length_30cm': '腳長 30cm',

            'us_men_6': '美國男鞋 6號',
            'us_men_6_5': '美國男鞋 6.5號',
            'us_men_7': '美國男鞋 7號',
            'us_men_7_5': '美國男鞋 7.5號',
            'us_men_8': '美國男鞋 8號',
            'us_men_8_5': '美國男鞋 8.5號',
            'us_men_9': '美國男鞋 9號',
            'us_men_9_5': '美國男鞋 9.5號',
            'us_men_10': '美國男鞋 10號',
            'us_men_10_5': '美國男鞋 10.5號',
            'us_men_11': '美國男鞋 11號',
            'us_men_12': '美國男鞋 12號',

            'us_women_6': '美國女鞋 6號',
            'us_women_6_5': '美國女鞋 6.5號',
            'us_women_7': '美國女鞋 7號',
            'us_women_7_5': '美國女鞋 7.5號',
            'us_women_8': '美國女鞋 8號',
            'us_women_8_5': '美國女鞋 8.5號',
            'us_women_9': '美國女鞋 9號',
            'us_women_9_5': '美國女鞋 9.5號',
            'us_women_10': '美國女鞋 10號',
            'us_women_10_5': '美國女鞋 10.5號',
            'us_women_11': '美國女鞋 11號',

            'uk_men_5_5': '英國男鞋 5.5號',
            'uk_men_6': '英國男鞋 6號',
            'uk_men_6_5': '英國男鞋 6.5號',
            'uk_men_7': '英國男鞋 7號',
            'uk_men_7_5': '英國男鞋 7.5號',
            'uk_men_8': '英國男鞋 8號',
            'uk_men_8_5': '英國男鞋 8.5號',
            'uk_men_9': '英國男鞋 9號',
            'uk_men_9_5': '英國男鞋 9.5號',
            'uk_men_10': '英國男鞋 10號',
            'uk_men_10_5': '英國男鞋 10.5號',

            'uk_women_4': '英國女鞋 4號',
            'uk_women_4_5': '英國女鞋 4.5號',
            'uk_women_5': '英國女鞋 5號',
            'uk_women_5_5': '英國女鞋 5.5號',
            'uk_women_6': '英國女鞋 6號',
            'uk_women_6_5': '英國女鞋 6.5號',
            'uk_women_7': '英國女鞋 7號',
            'uk_women_7_5': '英國女鞋 7.5號',
            'uk_women_8': '英國女鞋 8號',

            'eu_35': '歐洲鞋碼 35',
            'eu_35_5': '歐洲鞋碼 35.5',
            'eu_36': '歐洲鞋碼 36',
            'eu_37': '歐洲鞋碼 37',
            'eu_38': '歐洲鞋碼 38',
            'eu_39': '歐洲鞋碼 39',
            'eu_40': '歐洲鞋碼 40',
            'eu_41': '歐洲鞋碼 41',
            'eu_42': '歐洲鞋碼 42',
            'eu_43': '歐洲鞋碼 43',
            'eu_44': '歐洲鞋碼 44',
            'eu_45': '歐洲鞋碼 45',
            'eu_46': '歐洲鞋碼 46',

            'jp_22': '日本鞋碼 22cm',
            'jp_22_5': '日本鞋碼 22.5cm',
            'jp_23': '日本鞋碼 23cm',
            'jp_23_5': '日本鞋碼 23.5cm',
            'jp_24': '日本鞋碼 24cm',
            'jp_24_5': '日本鞋碼 24.5cm',
            'jp_25': '日本鞋碼 25cm',
            'jp_25_5': '日本鞋碼 25.5cm',
            'jp_26': '日本鞋碼 26cm',
            'jp_26_5': '日本鞋碼 26.5cm',
            'jp_27': '日本鞋碼 27cm',
            'jp_27_5': '日本鞋碼 27.5cm',
            'jp_28': '日本鞋碼 28cm',

            'cn_220': '中國鞋碼 220 (22cm)',
            'cn_225': '中國鞋碼 225 (22.5cm)',
            'cn_230': '中國鞋碼 230 (23cm)',
            'cn_235': '中國鞋碼 235 (23.5cm)',
            'cn_240': '中國鞋碼 240 (24cm)',
            'cn_245': '中國鞋碼 245 (24.5cm)',
            'cn_250': '中國鞋碼 250 (25cm)',
            'cn_255': '中國鞋碼 255 (25.5cm)',
            'cn_260': '中國鞋碼 260 (26cm)',
            'cn_265': '中國鞋碼 265 (26.5cm)',
            'cn_270': '中國鞋碼 270 (27cm)',
            'cn_275': '中國鞋碼 275 (27.5cm)',
            'cn_280': '中國鞋碼 280 (28cm)',

            'kr_220': '韓國鞋碼 220mm',
            'kr_225': '韓國鞋碼 225mm',
            'kr_230': '韓國鞋碼 230mm',
            'kr_235': '韓國鞋碼 235mm',
            'kr_240': '韓國鞋碼 240mm',
            'kr_245': '韓國鞋碼 245mm',
            'kr_250': '韓國鞋碼 250mm',
            'kr_255': '韓國鞋碼 255mm',
            'kr_260': '韓國鞋碼 260mm',
            'kr_265': '韓國鞋碼 265mm',
            'kr_270': '韓國鞋碼 270mm',
            'kr_275': '韓國鞋碼 275mm',
            'kr_280': '韓國鞋碼 280mm',
        },
        'en': {
            'foot_length_25cm': 'Foot Length 25cm (Reference)',
            'foot_length_22cm': 'Foot Length 22cm',
            'foot_length_23cm': 'Foot Length 23cm',
            'foot_length_24cm': 'Foot Length 24cm',
            'foot_length_26cm': 'Foot Length 26cm',
            'foot_length_27cm': 'Foot Length 27cm',
            'foot_length_28cm': 'Foot Length 28cm',
            'foot_length_29cm': 'Foot Length 29cm',
            'foot_length_30cm': 'Foot Length 30cm',

            'us_men_6': 'US Men 6',
            'us_men_6_5': 'US Men 6.5',
            'us_men_7': 'US Men 7',
            'us_men_7_5': 'US Men 7.5',
            'us_men_8': 'US Men 8',
            'us_men_8_5': 'US Men 8.5',
            'us_men_9': 'US Men 9',
            'us_men_9_5': 'US Men 9.5',
            'us_men_10': 'US Men 10',
            'us_men_10_5': 'US Men 10.5',
            'us_men_11': 'US Men 11',
            'us_men_12': 'US Men 12',

            'us_women_6': 'US Women 6',
            'us_women_6_5': 'US Women 6.5',
            'us_women_7': 'US Women 7',
            'us_women_7_5': 'US Women 7.5',
            'us_women_8': 'US Women 8',
            'us_women_8_5': 'US Women 8.5',
            'us_women_9': 'US Women 9',
            'us_women_9_5': 'US Women 9.5',
            'us_women_10': 'US Women 10',
            'us_women_10_5': 'US Women 10.5',
            'us_women_11': 'US Women 11',

            'uk_men_5_5': 'UK Men 5.5',
            'uk_men_6': 'UK Men 6',
            'uk_men_6_5': 'UK Men 6.5',
            'uk_men_7': 'UK Men 7',
            'uk_men_7_5': 'UK Men 7.5',
            'uk_men_8': 'UK Men 8',
            'uk_men_8_5': 'UK Men 8.5',
            'uk_men_9': 'UK Men 9',
            'uk_men_9_5': 'UK Men 9.5',
            'uk_men_10': 'UK Men 10',
            'uk_men_10_5': 'UK Men 10.5',

            'uk_women_4': 'UK Women 4',
            'uk_women_4_5': 'UK Women 4.5',
            'uk_women_5': 'UK Women 5',
            'uk_women_5_5': 'UK Women 5.5',
            'uk_women_6': 'UK Women 6',
            'uk_women_6_5': 'UK Women 6.5',
            'uk_women_7': 'UK Women 7',
            'uk_women_7_5': 'UK Women 7.5',
            'uk_women_8': 'UK Women 8',

            'eu_35': 'EU 35',
            'eu_35_5': 'EU 35.5',
            'eu_36': 'EU 36',
            'eu_37': 'EU 37',
            'eu_38': 'EU 38',
            'eu_39': 'EU 39',
            'eu_40': 'EU 40',
            'eu_41': 'EU 41',
            'eu_42': 'EU 42',
            'eu_43': 'EU 43',
            'eu_44': 'EU 44',
            'eu_45': 'EU 45',
            'eu_46': 'EU 46',

            'jp_22': 'JP 22cm',
            'jp_22_5': 'JP 22.5cm',
            'jp_23': 'JP 23cm',
            'jp_23_5': 'JP 23.5cm',
            'jp_24': 'JP 24cm',
            'jp_24_5': 'JP 24.5cm',
            'jp_25': 'JP 25cm',
            'jp_25_5': 'JP 25.5cm',
            'jp_26': 'JP 26cm',
            'jp_26_5': 'JP 26.5cm',
            'jp_27': 'JP 27cm',
            'jp_27_5': 'JP 27.5cm',
            'jp_28': 'JP 28cm',

            'cn_220': 'CN 220 (22cm)',
            'cn_225': 'CN 225 (22.5cm)',
            'cn_230': 'CN 230 (23cm)',
            'cn_235': 'CN 235 (23.5cm)',
            'cn_240': 'CN 240 (24cm)',
            'cn_245': 'CN 245 (24.5cm)',
            'cn_250': 'CN 250 (25cm)',
            'cn_255': 'CN 255 (25.5cm)',
            'cn_260': 'CN 260 (26cm)',
            'cn_265': 'CN 265 (26.5cm)',
            'cn_270': 'CN 270 (27cm)',
            'cn_275': 'CN 275 (27.5cm)',
            'cn_280': 'CN 280 (28cm)',

            'kr_220': 'KR 220mm',
            'kr_225': 'KR 225mm',
            'kr_230': 'KR 230mm',
            'kr_235': 'KR 235mm',
            'kr_240': 'KR 240mm',
            'kr_245': 'KR 245mm',
            'kr_250': 'KR 250mm',
            'kr_255': 'KR 255mm',
            'kr_260': 'KR 260mm',
            'kr_265': 'KR 265mm',
            'kr_270': 'KR 270mm',
            'kr_275': 'KR 275mm',
            'kr_280': 'KR 280mm',
        },
    },
    'reference_values': {
        'zh-TW': {
            'measure_foot': '量腳方法：站立時從腳跟到最長腳趾的距離',
            'common_women_size': '台灣女性常見尺寸：23-25cm (EU 36-40)',
            'common_men_size': '台灣男性常見尺寸：25-27cm (EU 40-43)',
            'size_difference': '美國女鞋比男鞋小1.5號 (相同腳長)',
            'brand_variation': '不同品牌可能有±0.5號的差異',
            'fit_recommendation': '建議預留0.5-1cm空間給腳趾',
            'evening_measurement': '下午或晚上量腳較準確 (腳會略微腫脹)',
            'width_consideration': '此表僅適用於標準寬度，寬腳或窄腳需特別注意',
        },
        'en': {
            'measure_foot': 'Foot measurement: Distance from heel to longest toe while standing',
            'common_women_size': 'Common women sizes in Taiwan: 23-25cm (EU 36-40)',
            'common_men_size': 'Common men sizes in Taiwan: 25-27cm (EU 40-43)',
            'size_difference': 'US women shoes are 1.5 sizes smaller than men (same foot length)',
            'brand_variation': 'Different brands may vary by ±0.5 size',
            'fit_recommendation': 'Recommend 0.5-1cm space for toes',
            'evening_measurement': 'Measure feet in afternoon/evening for accuracy (feet swell slightly)',
            'width_consideration': 'This table applies to standard width only, wide/narrow feet need special attention',
        },
    },
    'conversion_note': {
        'zh-TW': {
            'accuracy_warning': '鞋碼轉換僅供參考，實際穿著請以試穿為準',
            'brand_differences': '不同品牌的版型可能有差異，建議查看各品牌尺寸表',
            'foot_shape': '腳型（寬窄、高低）會影響合適的鞋碼選擇',
            'shoe_type': '不同類型的鞋子（運動鞋、皮鞋、靴子）可能需要不同尺寸',
            'material_consideration': '鞋子材質（皮革、帆布、合成材料）影響穿著感受',
            'seasonal_variation': '腳部在不同季節和時間會有微小變化',
            'children_growth': '兒童鞋碼變化快速，建議定期重新測量',
            'online_shopping': '網購時建議參考品牌尺寸表和用戶評價',
        },
        'en': {
            'accuracy_warning': 'Shoe size conversion is for reference only, actual fitting should be based on trying on',
            'brand_differences': 'Different brands may have different fits, recommend checking individual brand size charts',
            'foot_shape': 'Foot shape (width, height) affects appropriate shoe size selection',
            'shoe_type': 'Different shoe types (sneakers, dress shoes, boots) may require different sizes',
            'material_consideration': 'Shoe materials (leather, canvas, synthetic) affect wearing experience',
            'seasonal_variation': 'Feet have minor variations across seasons and times of day',
            'children_growth': 'Children shoe sizes change rapidly, recommend regular re-measurement',
            'online_shopping': 'For online shopping, recommend checking brand size charts and user reviews',
        },
    },
}


