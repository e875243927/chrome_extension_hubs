export const densityTable = {
    'unit': {
        // 以公斤每立方米 (kg/m³) 為基準
        'kilogram_per_cubic_meter': { offset: 0, scale: 1 },        // 1 kg/m³
        'gram_per_cubic_centimeter': { offset: 0, scale: 0.001 },   // 1 g/cm³ = 1000 kg/m³
        'gram_per_cubic_meter': { offset: 0, scale: 1000 },         // 1 g/m³ = 0.001 kg/m³
        'gram_per_liter': { offset: 0, scale: 1 },                  // 1 g/L = 1 kg/m³
        'gram_per_milliliter': { offset: 0, scale: 0.001 },         // 1 g/mL = 1000 kg/m³
        'milligram_per_cubic_centimeter': { offset: 0, scale: 1 },  // 1 mg/cm³ = 1 kg/m³
        'milligram_per_liter': { offset: 0, scale: 1000 },          // 1 mg/L = 0.001 kg/m³
        'microgram_per_cubic_centimeter': { offset: 0, scale: 1000 }, // 1 μg/cm³ = 0.001 kg/m³
        'microgram_per_liter': { offset: 0, scale: 1000000 },       // 1 μg/L = 10⁻⁶ kg/m³

        // 公制單位
        'kilogram_per_liter': { offset: 0, scale: 0.001 },          // 1 kg/L = 1000 kg/m³
        'kilogram_per_cubic_decimeter': { offset: 0, scale: 0.001 }, // 1 kg/dm³ = 1000 kg/m³
        'kilogram_per_cubic_centimeter': { offset: 0, scale: 0.000001 }, // 1 kg/cm³ = 10⁶ kg/m³
        'tonne_per_cubic_meter': { offset: 0, scale: 0.001 },       // 1 t/m³ = 1000 kg/m³
        'tonne_per_cubic_kilometer': { offset: 0, scale: 1000000000 }, // 1 t/km³ = 10⁻⁹ kg/m³
        'megagram_per_cubic_meter': { offset: 0, scale: 0.001 },    // 1 Mg/m³ = 1000 kg/m³

        // 英制單位
        'pound_per_cubic_foot': { offset: 0, scale: 0.0624279 },    // 1 lb/ft³ = 16.0185 kg/m³
        'pound_per_cubic_inch': { offset: 0, scale: 0.0000361273 }, // 1 lb/in³ = 27679.9 kg/m³
        'pound_per_cubic_yard': { offset: 0, scale: 1.68555 },      // 1 lb/yd³ = 0.593276 kg/m³
        'pound_per_gallon_us': { offset: 0, scale: 0.00834540 },    // 1 lb/gal(US) = 119.826 kg/m³
        'pound_per_gallon_imperial': { offset: 0, scale: 0.00699908 }, // 1 lb/gal(Imp) = 142.857 kg/m³
        'ounce_per_cubic_inch': { offset: 0, scale: 0.000578037 },  // 1 oz/in³ = 1729.99 kg/m³
        'ounce_per_cubic_foot': { offset: 0, scale: 0.998847 },     // 1 oz/ft³ = 1.00115 kg/m³
        'ounce_per_gallon_us': { offset: 0, scale: 0.133527 },      // 1 oz/gal(US) = 7.48915 kg/m³
        'ounce_per_gallon_imperial': { offset: 0, scale: 0.111985 }, // 1 oz/gal(Imp) = 8.92857 kg/m³

        // 噸系列
        'ton_per_cubic_foot': { offset: 0, scale: 0.0000312139 },   // 1 ton/ft³ = 32037 kg/m³
        'ton_per_cubic_yard': { offset: 0, scale: 0.000842778 },    // 1 ton/yd³ = 1186.55 kg/m³
        'ton_per_cubic_meter': { offset: 0, scale: 0.001 },         // 1 ton/m³ = 1000 kg/m³
        'long_ton_per_cubic_yard': { offset: 0, scale: 0.000751243 }, // 1 long ton/yd³ = 1331.33 kg/m³
        'short_ton_per_cubic_yard': { offset: 0, scale: 0.000842778 }, // 1 short ton/yd³ = 1186.55 kg/m³

        // 特殊單位
        'specific_gravity': { offset: 0, scale: 0.001 },            // 比重 (相對於水)
        'degree_baume': { offset: 0, scale: 1 },                    // 波美度 (需要特殊計算)
        'degree_api': { offset: 0, scale: 1 },                      // API度 (石油工業)
        'degree_brix': { offset: 0, scale: 1 },                     // 白利糖度
        'degree_plato': { offset: 0, scale: 1 },                    // 柏拉圖度 (啤酒工業)
        'degree_twaddell': { offset: 0, scale: 1 },                 // 特瓦德爾度

        // 原子/分子單位
        'atomic_mass_unit_per_cubic_angstrom': { offset: 0, scale: 6.022e-4 }, // 1 u/Ų = 1.66×10⁻³ kg/m³
        'gram_per_mole_per_cubic_centimeter': { offset: 0, scale: 0.001 }, // 1 g/mol/cm³ = 1000 kg/m³
        'kilogram_per_mole_per_cubic_meter': { offset: 0, scale: 1 }, // 1 kg/mol/m³ = 1 kg/m³

        // 地質/天文單位
        'earth_density': { offset: 0, scale: 0.000181 },            // 地球平均密度 ≈ 5515 kg/m³
        'solar_density': { offset: 0, scale: 0.000714 },            // 太陽平均密度 ≈ 1408 kg/m³
        'water_density_4c': { offset: 0, scale: 0.001 },            // 4°C水密度 = 1000 kg/m³
        'air_density_stp': { offset: 0, scale: 0.819 },             // 標準狀況空氣密度 ≈ 1.225 kg/m³

        // 生物學單位
        'cell_density': { offset: 0, scale: 0.0009 },               // 細胞密度 ≈ 1100 kg/m³
        'bone_density': { offset: 0, scale: 0.0005 },               // 骨密度 ≈ 2000 kg/m³
        'muscle_density': { offset: 0, scale: 0.00095 },            // 肌肉密度 ≈ 1050 kg/m³
        'fat_density': { offset: 0, scale: 0.00109 },               // 脂肪密度 ≈ 920 kg/m³

        // 工業單位
        'bulk_density': { offset: 0, scale: 1 },                    // 堆積密度
        'apparent_density': { offset: 0, scale: 1 },                // 表觀密度
        'true_density': { offset: 0, scale: 1 },                    // 真密度
        'tap_density': { offset: 0, scale: 1 },                     // 振實密度

        // 粒子密度
        'particle_density': { offset: 0, scale: 1 },                // 粒子密度
        'grain_density': { offset: 0, scale: 1 },                   // 顆粒密度
        'packing_density': { offset: 0, scale: 1 },                 // 堆積密度

        // 其他單位
        'slug_per_cubic_foot': { offset: 0, scale: 0.00194032 },    // 1 slug/ft³ = 515.379 kg/m³
        'grain_per_gallon_us': { offset: 0, scale: 15.4324 },       // 1 gr/gal(US) = 0.0648 kg/m³
        'grain_per_cubic_foot': { offset: 0, scale: 437.5 },        // 1 gr/ft³ = 0.00229 kg/m³
        'pennyweight_per_cubic_inch': { offset: 0, scale: 0.000644 }, // 1 dwt/in³ = 1555.17 kg/m³

        // 歷史單位
        'livre_per_cubic_pied': { offset: 0, scale: 0.0306 },       // 法國古制
        'pfund_per_cubic_fuss': { offset: 0, scale: 0.0357 },       // 德國古制
        'catty_per_cubic_chi': { offset: 0, scale: 0.0018 },        // 中國古制
    },
    'language': {
        'zh-TW': {
            'kilogram_per_cubic_meter': '公斤每立方米 (kg/m³)',
            'gram_per_cubic_centimeter': '公克每立方公分 (g/cm³)',
            'gram_per_cubic_meter': '公克每立方米 (g/m³)',
            'gram_per_liter': '公克每升 (g/L)',
            'gram_per_milliliter': '公克每毫升 (g/mL)',
            'milligram_per_cubic_centimeter': '毫克每立方公分 (mg/cm³)',
            'milligram_per_liter': '毫克每升 (mg/L)',
            'microgram_per_cubic_centimeter': '微克每立方公分 (μg/cm³)',
            'microgram_per_liter': '微克每升 (μg/L)',
            'kilogram_per_liter': '公斤每升 (kg/L)',
            'kilogram_per_cubic_decimeter': '公斤每立方分米 (kg/dm³)',
            'kilogram_per_cubic_centimeter': '公斤每立方公分 (kg/cm³)',
            'tonne_per_cubic_meter': '噸每立方米 (t/m³)',
            'tonne_per_cubic_kilometer': '噸每立方公里 (t/km³)',
            'megagram_per_cubic_meter': '兆克每立方米 (Mg/m³)',
            'pound_per_cubic_foot': '磅每立方英尺 (lb/ft³)',
            'pound_per_cubic_inch': '磅每立方英寸 (lb/in³)',
            'pound_per_cubic_yard': '磅每立方碼 (lb/yd³)',
            'pound_per_gallon_us': '磅每加侖美制 (lb/gal)',
            'pound_per_gallon_imperial': '磅每加侖英制 (lb/gal)',
            'ounce_per_cubic_inch': '盎司每立方英寸 (oz/in³)',
            'ounce_per_cubic_foot': '盎司每立方英尺 (oz/ft³)',
            'ounce_per_gallon_us': '盎司每加侖美制 (oz/gal)',
            'ounce_per_gallon_imperial': '盎司每加侖英制 (oz/gal)',
            'ton_per_cubic_foot': '噸每立方英尺 (ton/ft³)',
            'ton_per_cubic_yard': '噸每立方碼 (ton/yd³)',
            'ton_per_cubic_meter': '噸每立方米 (ton/m³)',
            'long_ton_per_cubic_yard': '長噸每立方碼 (long ton/yd³)',
            'short_ton_per_cubic_yard': '短噸每立方碼 (short ton/yd³)',
            'specific_gravity': '比重 (SG)',
            'degree_baume': '波美度 (°Bé)',
            'degree_api': 'API度 (°API)',
            'degree_brix': '白利糖度 (°Bx)',
            'degree_plato': '柏拉圖度 (°P)',
            'degree_twaddell': '特瓦德爾度 (°Tw)',
            'atomic_mass_unit_per_cubic_angstrom': '原子質量單位每立方埃 (u/Ų)',
            'gram_per_mole_per_cubic_centimeter': '克每摩爾每立方公分 (g/mol/cm³)',
            'kilogram_per_mole_per_cubic_meter': '公斤每摩爾每立方米 (kg/mol/m³)',
            'earth_density': '地球密度',
            'solar_density': '太陽密度',
            'water_density_4c': '4°C水密度',
            'air_density_stp': '標準狀況空氣密度',
            'cell_density': '細胞密度',
            'bone_density': '骨密度',
            'muscle_density': '肌肉密度',
            'fat_density': '脂肪密度',
            'bulk_density': '堆積密度',
            'apparent_density': '表觀密度',
            'true_density': '真密度',
            'tap_density': '振實密度',
            'particle_density': '粒子密度',
            'grain_density': '顆粒密度',
            'packing_density': '堆積密度',
            'slug_per_cubic_foot': '斯勒格每立方英尺 (slug/ft³)',
            'grain_per_gallon_us': '格令每加侖美制 (gr/gal)',
            'grain_per_cubic_foot': '格令每立方英尺 (gr/ft³)',
            'pennyweight_per_cubic_inch': '便士重每立方英寸 (dwt/in³)',
            'livre_per_cubic_pied': '里弗每立方皮耶 (livre/pied³)',
            'pfund_per_cubic_fuss': '普芬德每立方富斯 (Pfund/Fuß³)',
            'catty_per_cubic_chi': '斤每立方尺 (斤/尺³)',
        },
        'en': {
            'kilogram_per_cubic_meter': 'Kilogram per Cubic Meter (kg/m³)',
            'gram_per_cubic_centimeter': 'Gram per Cubic Centimeter (g/cm³)',
            'gram_per_cubic_meter': 'Gram per Cubic Meter (g/m³)',
            'gram_per_liter': 'Gram per Liter (g/L)',
            'gram_per_milliliter': 'Gram per Milliliter (g/mL)',
            'milligram_per_cubic_centimeter': 'Milligram per Cubic Centimeter (mg/cm³)',
            'milligram_per_liter': 'Milligram per Liter (mg/L)',
            'microgram_per_cubic_centimeter': 'Microgram per Cubic Centimeter (μg/cm³)',
            'microgram_per_liter': 'Microgram per Liter (μg/L)',
            'kilogram_per_liter': 'Kilogram per Liter (kg/L)',
            'kilogram_per_cubic_decimeter': 'Kilogram per Cubic Decimeter (kg/dm³)',
            'kilogram_per_cubic_centimeter': 'Kilogram per Cubic Centimeter (kg/cm³)',
            'tonne_per_cubic_meter': 'Tonne per Cubic Meter (t/m³)',
            'tonne_per_cubic_kilometer': 'Tonne per Cubic Kilometer (t/km³)',
            'megagram_per_cubic_meter': 'Megagram per Cubic Meter (Mg/m³)',
            'pound_per_cubic_foot': 'Pound per Cubic Foot (lb/ft³)',
            'pound_per_cubic_inch': 'Pound per Cubic Inch (lb/in³)',
            'pound_per_cubic_yard': 'Pound per Cubic Yard (lb/yd³)',
            'pound_per_gallon_us': 'Pound per Gallon US (lb/gal)',
            'pound_per_gallon_imperial': 'Pound per Gallon Imperial (lb/gal)',
            'ounce_per_cubic_inch': 'Ounce per Cubic Inch (oz/in³)',
            'ounce_per_cubic_foot': 'Ounce per Cubic Foot (oz/ft³)',
            'ounce_per_gallon_us': 'Ounce per Gallon US (oz/gal)',
            'ounce_per_gallon_imperial': 'Ounce per Gallon Imperial (oz/gal)',
            'ton_per_cubic_foot': 'Ton per Cubic Foot (ton/ft³)',
            'ton_per_cubic_yard': 'Ton per Cubic Yard (ton/yd³)',
            'ton_per_cubic_meter': 'Ton per Cubic Meter (ton/m³)',
            'long_ton_per_cubic_yard': 'Long Ton per Cubic Yard (long ton/yd³)',
            'short_ton_per_cubic_yard': 'Short Ton per Cubic Yard (short ton/yd³)',
            'specific_gravity': 'Specific Gravity (SG)',
            'degree_baume': 'Degree Baumé (°Bé)',
            'degree_api': 'Degree API (°API)',
            'degree_brix': 'Degree Brix (°Bx)',
            'degree_plato': 'Degree Plato (°P)',
            'degree_twaddell': 'Degree Twaddell (°Tw)',
            'atomic_mass_unit_per_cubic_angstrom': 'Atomic Mass Unit per Cubic Angstrom (u/Ų)',
            'gram_per_mole_per_cubic_centimeter': 'Gram per Mole per Cubic Centimeter (g/mol/cm³)',
            'kilogram_per_mole_per_cubic_meter': 'Kilogram per Mole per Cubic Meter (kg/mol/m³)',
            'earth_density': 'Earth Density',
            'solar_density': 'Solar Density',
            'water_density_4c': 'Water Density at 4°C',
            'air_density_stp': 'Air Density at STP',
            'cell_density': 'Cell Density',
            'bone_density': 'Bone Density',
            'muscle_density': 'Muscle Density',
            'fat_density': 'Fat Density',
            'bulk_density': 'Bulk Density',
            'apparent_density': 'Apparent Density',
            'true_density': 'True Density',
            'tap_density': 'Tap Density',
            'particle_density': 'Particle Density',
            'grain_density': 'Grain Density',
            'packing_density': 'Packing Density',
            'slug_per_cubic_foot': 'Slug per Cubic Foot (slug/ft³)',
            'grain_per_gallon_us': 'Grain per Gallon US (gr/gal)',
            'grain_per_cubic_foot': 'Grain per Cubic Foot (gr/ft³)',
            'pennyweight_per_cubic_inch': 'Pennyweight per Cubic Inch (dwt/in³)',
            'livre_per_cubic_pied': 'Livre per Cubic Pied (livre/pied³)',
            'pfund_per_cubic_fuss': 'Pfund per Cubic Fuß (Pfund/Fuß³)',
            'catty_per_cubic_chi': 'Catty per Cubic Chi (catty/chi³)',
        },
    }
}


