export const fuelEfficiencyTable = {
    'unit': {
        // 以公里每公升 (km/L) 為基準
        'km_per_liter': { offset: 0, scale: 1 },
        'mpg_us': { offset: 0, scale: 0.425144 },          // 1 mpg (US) ≈ 0.425 km/L
        'mpg_uk': { offset: 0, scale: 0.354006 },          // 1 mpg (UK) ≈ 0.354 km/L
        'miles_per_liter': { offset: 0, scale: 1.609344 }, // 1 mi/L ≈ 1.609 km/L

        // 體積/距離型單位（需要倒數轉換）
        'liter_per_100km': { offset: 0, scale: -1, inverse: true },     // L/100km = 100/(km/L)
        'liter_per_km': { offset: 0, scale: -1000, inverse: true },     // L/km = 1000/(km/L)
        'ml_per_km': { offset: 0, scale: -1, inverse: true },           // mL/km = 1000/(km/L)
        'gal_us_per_100mi': { offset: 0, scale: -62.1371, inverse: true }, // gal(US)/100mi
        'gal_uk_per_100mi': { offset: 0, scale: -51.7998, inverse: true }, // gal(UK)/100mi
        'gal_us_per_mi': { offset: 0, scale: -0.621371, inverse: true },    // gal(US)/mi
        'gal_uk_per_mi': { offset: 0, scale: -0.517998, inverse: true },    // gal(UK)/mi

        // 其他距離/體積型單位
        'km_per_gallon_us': { offset: 0, scale: 3.785412 },   // 1 km/gal(US) ≈ 3.785 km/L
        'km_per_gallon_uk': { offset: 0, scale: 4.546092 },   // 1 km/gal(UK) ≈ 4.546 km/L
        'miles_per_gallon_us': { offset: 0, scale: 0.425144 }, // 同 mpg_us
        'miles_per_gallon_uk': { offset: 0, scale: 0.354006 }, // 同 mpg_uk

        // 能源效率單位
        'km_per_kwh': { offset: 0, scale: 1 },             // 電動車效率（以相同數值處理）
        'miles_per_kwh': { offset: 0, scale: 1.609344 },   // 電動車效率
        'kwh_per_100km': { offset: 0, scale: -1, inverse: true }, // 電動車耗電量
        'kwh_per_100mi': { offset: 0, scale: -1.609344, inverse: true }, // 電動車耗電量
    },
    'language': {
        'zh-TW': {
            'km_per_liter': '公里每公升 (km/L)',
            'mpg_us': '英里每加侖 美制 (mpg US)',
            'mpg_uk': '英里每加侖 英制 (mpg UK)',
            'miles_per_liter': '英里每公升 (mi/L)',
            'liter_per_100km': '公升每百公里 (L/100km)',
            'liter_per_km': '公升每公里 (L/km)',
            'ml_per_km': '毫升每公里 (mL/km)',
            'gal_us_per_100mi': '美制加侖每百英里 (gal US/100mi)',
            'gal_uk_per_100mi': '英制加侖每百英里 (gal UK/100mi)',
            'gal_us_per_mi': '美制加侖每英里 (gal US/mi)',
            'gal_uk_per_mi': '英制加侖每英里 (gal UK/mi)',
            'km_per_gallon_us': '公里每美制加侖 (km/gal US)',
            'km_per_gallon_uk': '公里每英制加侖 (km/gal UK)',
            'miles_per_gallon_us': '英里每美制加侖 (mpg US)',
            'miles_per_gallon_uk': '英里每英制加侖 (mpg UK)',
            'km_per_kwh': '公里每千瓦時 (km/kWh)',
            'miles_per_kwh': '英里每千瓦時 (mi/kWh)',
            'kwh_per_100km': '千瓦時每百公里 (kWh/100km)',
            'kwh_per_100mi': '千瓦時每百英里 (kWh/100mi)',
        },
        'en': {
            'km_per_liter': 'Kilometers per Liter (km/L)',
            'mpg_us': 'Miles per Gallon US (mpg US)',
            'mpg_uk': 'Miles per Gallon UK (mpg UK)',
            'miles_per_liter': 'Miles per Liter (mi/L)',
            'liter_per_100km': 'Liters per 100 km (L/100km)',
            'liter_per_km': 'Liters per km (L/km)',
            'ml_per_km': 'Milliliters per km (mL/km)',
            'gal_us_per_100mi': 'US Gallons per 100 miles (gal US/100mi)',
            'gal_uk_per_100mi': 'UK Gallons per 100 miles (gal UK/100mi)',
            'gal_us_per_mi': 'US Gallons per mile (gal US/mi)',
            'gal_uk_per_mi': 'UK Gallons per mile (gal UK/mi)',
            'km_per_gallon_us': 'Kilometers per US Gallon (km/gal US)',
            'km_per_gallon_uk': 'Kilometers per UK Gallon (km/gal UK)',
            'miles_per_gallon_us': 'Miles per US Gallon (mpg US)',
            'miles_per_gallon_uk': 'Miles per UK Gallon (mpg UK)',
            'km_per_kwh': 'Kilometers per kWh (km/kWh)',
            'miles_per_kwh': 'Miles per kWh (mi/kWh)',
            'kwh_per_100km': 'kWh per 100 km (kWh/100km)',
            'kwh_per_100mi': 'kWh per 100 miles (kWh/100mi)',
        },
        'zh-CN': {
            'km_per_liter': '公里每升 (km/L)',
            'mpg_us': '英里每加仑 美制 (mpg US)',
            'mpg_uk': '英里每加仑 英制 (mpg UK)',
            'miles_per_liter': '英里每升 (mi/L)',
            'liter_per_100km': '升每百公里 (L/100km)',
            'liter_per_km': '升每公里 (L/km)',
            'ml_per_km': '毫升每公里 (mL/km)',
            'gal_us_per_100mi': '美制加仑每百英里 (gal US/100mi)',
            'gal_uk_per_100mi': '英制加仑每百英里 (gal UK/100mi)',
            'gal_us_per_mi': '美制加仑每英里 (gal US/mi)',
            'gal_uk_per_mi': '英制加仑每英里 (gal UK/mi)',
            'km_per_gallon_us': '公里每美制加仑 (km/gal US)',
            'km_per_gallon_uk': '公里每英制加仑 (km/gal UK)',
            'miles_per_gallon_us': '英里每美制加仑 (mpg US)',
            'miles_per_gallon_uk': '英里每英制加仑 (mpg UK)',
            'km_per_kwh': '公里每千瓦时 (km/kWh)',
            'miles_per_kwh': '英里每千瓦时 (mi/kWh)',
            'kwh_per_100km': '千瓦时每百公里 (kWh/100km)',
            'kwh_per_100mi': '千瓦时每百英里 (kWh/100mi)',
        },
        'ja': {
            'km_per_liter': 'キロメートル毎リットル (km/L)',
            'mpg_us': 'マイル毎ガロン（米）(mpg US)',
            'mpg_uk': 'マイル毎ガロン（英）(mpg UK)',
            'miles_per_liter': 'マイル毎リットル (mi/L)',
            'liter_per_100km': 'リットル毎100キロメートル (L/100km)',
            'liter_per_km': 'リットル毎キロメートル (L/km)',
            'ml_per_km': 'ミリリットル毎キロメートル (mL/km)',
            'gal_us_per_100mi': '米ガロン毎100マイル (gal US/100mi)',
            'gal_uk_per_100mi': '英ガロン毎100マイル (gal UK/100mi)',
            'gal_us_per_mi': '米ガロン毎マイル (gal US/mi)',
            'gal_uk_per_mi': '英ガロン毎マイル (gal UK/mi)',
            'km_per_gallon_us': 'キロメートル毎米ガロン (km/gal US)',
            'km_per_gallon_uk': 'キロメートル毎英ガロン (km/gal UK)',
            'miles_per_gallon_us': 'マイル毎米ガロン (mpg US)',
            'miles_per_gallon_uk': 'マイル毎英ガロン (mpg UK)',
            'km_per_kwh': 'キロメートル毎キロワット時 (km/kWh)',
            'miles_per_kwh': 'マイル毎キロワット時 (mi/kWh)',
            'kwh_per_100km': 'キロワット時毎100キロメートル (kWh/100km)',
            'kwh_per_100mi': 'キロワット時毎100マイル (kWh/100mi)',
        },
    },
    'conversion_note': {
        'zh-TW': {
            'inverse_units': '注意：L/100km、L/km 等單位需要倒數轉換（數值越小越省油）',
            'electric_vehicle': 'kWh 相關單位適用於電動車能源效率',
            'regional_differences': 'mpg 有美制和英制之分，加侖容量不同',
        },
        'en': {
            'inverse_units': 'Note: L/100km, L/km etc. require inverse conversion (lower values = better efficiency)',
            'electric_vehicle': 'kWh units are for electric vehicle energy efficiency',
            'regional_differences': 'mpg has US and UK variants with different gallon sizes',
        },
    },
}


