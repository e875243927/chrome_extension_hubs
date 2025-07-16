export const resolutionTable = {
    'unit': {
        // 基本像素單位
        'pixel': { offset: 0, scale: 1 },
        'kilopixel': { offset: 0, scale: 1000 },
        'megapixel': { offset: 0, scale: 1000000 },

        // 常見解析度 (總像素數)
        'qvga': { offset: 0, scale: 76800 },      // 320×240
        'vga': { offset: 0, scale: 307200 },      // 640×480
        'svga': { offset: 0, scale: 480000 },     // 800×600
        'xga': { offset: 0, scale: 786432 },      // 1024×768
        'hd_720p': { offset: 0, scale: 921600 },  // 1280×720
        'sxga': { offset: 0, scale: 1310720 },    // 1280×1024
        'fhd_1080p': { offset: 0, scale: 2073600 }, // 1920×1080
        'wqhd_1440p': { offset: 0, scale: 3686400 }, // 2560×1440
        'uhd_4k': { offset: 0, scale: 8294400 },  // 3840×2160
        'uhd_8k': { offset: 0, scale: 33177600 }, // 7680×4320

        // DPI/PPI 相關
        'dpi_72': { offset: 0, scale: 72 },
        'dpi_96': { offset: 0, scale: 96 },
        'dpi_150': { offset: 0, scale: 150 },
        'dpi_300': { offset: 0, scale: 300 },
        'dpi_600': { offset: 0, scale: 600 },
    },
    'language': {
        'zh-TW': {
            'pixel': 'px (像素)',
            'kilopixel': 'Kpx (千像素)',
            'megapixel': 'Mpx (百萬像素)',
            'qvga': 'QVGA (320×240)',
            'vga': 'VGA (640×480)',
            'svga': 'SVGA (800×600)',
            'xga': 'XGA (1024×768)',
            'hd_720p': 'HD 720p (1280×720)',
            'sxga': 'SXGA (1280×1024)',
            'fhd_1080p': 'Full HD 1080p (1920×1080)',
            'wqhd_1440p': 'WQHD 1440p (2560×1440)',
            'uhd_4k': '4K UHD (3840×2160)',
            'uhd_8k': '8K UHD (7680×4320)',
            'dpi_72': '72 DPI',
            'dpi_96': '96 DPI',
            'dpi_150': '150 DPI',
            'dpi_300': '300 DPI',
            'dpi_600': '600 DPI',
        },
        'en': {
            'pixel': 'px (pixel)',
            'kilopixel': 'Kpx (kilopixel)',
            'megapixel': 'Mpx (megapixel)',
            'qvga': 'QVGA (320×240)',
            'vga': 'VGA (640×480)',
            'svga': 'SVGA (800×600)',
            'xga': 'XGA (1024×768)',
            'hd_720p': 'HD 720p (1280×720)',
            'sxga': 'SXGA (1280×1024)',
            'fhd_1080p': 'Full HD 1080p (1920×1080)',
            'wqhd_1440p': 'WQHD 1440p (2560×1440)',
            'uhd_4k': '4K UHD (3840×2160)',
            'uhd_8k': '8K UHD (7680×4320)',
            'dpi_72': '72 DPI',
            'dpi_96': '96 DPI',
            'dpi_150': '150 DPI',
            'dpi_300': '300 DPI',
            'dpi_600': '600 DPI',
        },
    },
}


