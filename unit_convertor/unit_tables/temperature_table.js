export const temperatureTable = {
    'unit': {
        // 注意：溫度轉換需要特殊處理，不能只用係數
        // 建議改用轉換函數，這裡提供參考係數
        'kelvin': { offset: 0, scale: 1 },  // 基準單位
        'celsius': { offset: 273.15, scale: 1 },
        'fahrenheit': { offset: 459.67, scale: 1.8 },
        'rankine': { offset: 0, scale: 1.8 },
        'reaumur': { offset: 273.15, scale: 0.8 },
    },
    'language': {
        'zh-TW': {
            'kelvin': 'K (克耳文)',
            'celsius': '°C (攝氏度)',
            'fahrenheit': '°F (華氏度)',
            'rankine': '°R (蘭氏度)',
            'reaumur': '°Ré (列氏度)',
        },
        'en': {
            'kelvin': 'K (Kelvin)',
            'celsius': '°C (Celsius)',
            'fahrenheit': '°F (Fahrenheit)',
            'rankine': '°R (Rankine)',
            'reaumur': '°Ré (Réaumur)',
        },
        'zh-CN': {
            'kelvin': 'K (开尔文)',
            'celsius': '°C (摄氏度)',
            'fahrenheit': '°F (华氏度)',
            'rankine': '°R (兰氏度)',
            'reaumur': '°Ré (列氏度)',
        },
        'ja': {
            'kelvin': 'K (ケルビン)',
            'celsius': '°C (セルシウス度)',
            'fahrenheit': '°F (ファーレンハイト度)',
            'rankine': '°R (ランキン度)',
            'reaumur': '°Ré (レオミュール度)',
        },
    },
}


