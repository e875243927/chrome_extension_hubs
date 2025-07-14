const dataStorageTable = {
    'unit': {
        // 基本單位
        'bit': { offset: 0, scale: 0.125 },
        'byte': { offset: 0, scale: 1 },

        // 二進制前綴 (1024進制)
        'kibibyte': { offset: 0, scale: 1024 },
        'mebibyte': { offset: 0, scale: 1048576 },
        'gibibyte': { offset: 0, scale: 1073741824 },
        'tebibyte': { offset: 0, scale: 1099511627776 },
        'pebibyte': { offset: 0, scale: 1125899906842624 },

        // 十進制前綴 (1000進制)
        'kilobyte': { offset: 0, scale: 1000 },
        'megabyte': { offset: 0, scale: 1000000 },
        'gigabyte': { offset: 0, scale: 1000000000 },
        'terabyte': { offset: 0, scale: 1000000000000 },
        'petabyte': { offset: 0, scale: 1000000000000000 },
    },
    'language': {
        'zh-TW': {
            'bit': 'bit (位元)',
            'byte': 'B (位元組)',
            'kibibyte': 'KiB (千位元組)',
            'mebibyte': 'MiB (百萬位元組)',
            'gibibyte': 'GiB (十億位元組)',
            'tebibyte': 'TiB (兆位元組)',
            'pebibyte': 'PiB (千兆位元組)',
            'kilobyte': 'KB (千位元組)',
            'megabyte': 'MB (百萬位元組)',
            'gigabyte': 'GB (十億位元組)',
            'terabyte': 'TB (兆位元組)',
            'petabyte': 'PB (千兆位元組)',
        },
        'en': {
            'bit': 'bit (bit)',
            'byte': 'B (byte)',
            'kibibyte': 'KiB (kibibyte)',
            'mebibyte': 'MiB (mebibyte)',
            'gibibyte': 'GiB (gibibyte)',
            'tebibyte': 'TiB (tebibyte)',
            'pebibyte': 'PiB (pebibyte)',
            'kilobyte': 'KB (kilobyte)',
            'megabyte': 'MB (megabyte)',
            'gigabyte': 'GB (gigabyte)',
            'terabyte': 'TB (terabyte)',
            'petabyte': 'PB (petabyte)',
        },
    },
}

module.exports = dataStorageTable;
