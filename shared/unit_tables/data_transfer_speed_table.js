const dataTransferSpeedTable = {
    'unit': {
        // 位元每秒
        'bps': { offset: 0, scale: 1 },
        'kbps': { offset: 0, scale: 1000 },
        'mbps': { offset: 0, scale: 1000000 },
        'gbps': { offset: 0, scale: 1000000000 },
        'tbps': { offset: 0, scale: 1000000000000 },

        // 位元組每秒
        'Bps': { offset: 0, scale: 8 },
        'KBps': { offset: 0, scale: 8000 },
        'MBps': { offset: 0, scale: 8000000 },
        'GBps': { offset: 0, scale: 8000000000 },
        'TBps': { offset: 0, scale: 8000000000000 },

        // 二進制位元組每秒
        'KiBps': { offset: 0, scale: 8192 },
        'MiBps': { offset: 0, scale: 8388608 },
        'GiBps': { offset: 0, scale: 8589934592 },
        'TiBps': { offset: 0, scale: 8796093022208 },
    },
    'language': {
        'zh-TW': {
            'bps': 'bps (位元/秒)',
            'kbps': 'Kbps (千位元/秒)',
            'mbps': 'Mbps (百萬位元/秒)',
            'gbps': 'Gbps (十億位元/秒)',
            'tbps': 'Tbps (兆位元/秒)',
            'Bps': 'B/s (位元組/秒)',
            'KBps': 'KB/s (千位元組/秒)',
            'MBps': 'MB/s (百萬位元組/秒)',
            'GBps': 'GB/s (十億位元組/秒)',
            'TBps': 'TB/s (兆位元組/秒)',
            'KiBps': 'KiB/s (千位元組/秒)',
            'MiBps': 'MiB/s (百萬位元組/秒)',
            'GiBps': 'GiB/s (十億位元組/秒)',
            'TiBps': 'TiB/s (兆位元組/秒)',
        },
        'en': {
            'bps': 'bps (bits per second)',
            'kbps': 'Kbps (kilobits per second)',
            'mbps': 'Mbps (megabits per second)',
            'gbps': 'Gbps (gigabits per second)',
            'tbps': 'Tbps (terabits per second)',
            'Bps': 'B/s (bytes per second)',
            'KBps': 'KB/s (kilobytes per second)',
            'MBps': 'MB/s (megabytes per second)',
            'GBps': 'GB/s (gigabytes per second)',
            'TBps': 'TB/s (terabytes per second)',
            'KiBps': 'KiB/s (kibibytes per second)',
            'MiBps': 'MiB/s (mebibytes per second)',
            'GiBps': 'GiB/s (gibibytes per second)',
            'TiBps': 'TiB/s (tebibytes per second)',
        },
    },
}

module.exports = dataTransferSpeedTable;
