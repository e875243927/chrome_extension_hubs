const lengthTable = require('../unit_tables/length_table');
const temperatureTable = require('../unit_tables/temperature_table');
const capacityTable = require('../unit_tables/capacity_table');
const weightTable = require('../unit_tables/weight_table');
const timescaleTable = require('../unit_tables/timescale_table');
const dataStorageTable = require('../unit_tables/data_storage');
const dataTransferSpeedTable = require('../unit_tables/data_transfer_speed_table');
const resolutionTable = require('../unit_tables/resolution_table');
const cmosSizeTable = require('../unit_tables/cmos_size_table');
const focalLengthTable = require('../unit_tables/focal_length_table');
const angleTable = require('../unit_tables/angle_table');
const magneticFieldTable = require('../unit_tables/magnetic_table');
const fuelEfficiencyTable = require('../unit_tables/fuel_efficiency_table');
const illuminanceTable = require('../unit_tables/illuminance_table');
const areaTable = require('../unit_tables/area_table');
const forceTable = require('../unit_tables/force_table');
const energyTable = require('../unit_tables/energy_table');
const automotivePowerTable = require('../unit_tables/automotive_power_table');
const radioactivityTable = require('../unit_tables/radioactivity_table');
const equivalentDoseTable = require('../unit_tables/equivalent_dose_table');
const velocityTable = require('../unit_tables/velocity_table');
const densityTable = require('../unit_tables/density_table');
const pressureTable = require('../unit_tables/pressure_table');
const accelerationTable = require('../unit_tables/acceleration_table');
const paperSizeTable = require('../unit_tables/paper_size_table');
const shoeSizeTable = require('../unit_tables/shoe_size_table');

// 單位轉換表格管理
const unitConversionTable = {
    'length': {
        'unit': lengthTable.unit,
        'unit_language': lengthTable.language,
        'language': {
            'zh-TW': '長度',
            'en': 'Length',
        }
    },

    'temperature': {
        'unit': temperatureTable.unit,
        'unit_language': temperatureTable.language,
        'language': {
            'zh-TW': '溫度',
            'en': 'Temperature',
        }
    },

    'capacity': {
        'unit': capacityTable.unit,
        'unit_language': capacityTable.language,
        'language': {
            'zh-TW': '體積/容量 (以水為基準)',
            'en': 'Volume/Capacity (Water as a reference)',
        }
    },

    'weight': {
        'unit': weightTable.unit,
        'unit_language': weightTable.language,
        'language': {
            'zh-TW': '重量',
            'en': 'Weight',
        }
    },

    'timescale': {
        'unit': timescaleTable.unit,
        'unit_language': timescaleTable.language,
        'language': {
            'zh-TW': '時間',
            'en': 'Time',
        }
    },

    'data_storage': {
        'unit': dataStorageTable.unit,
        'unit_language': dataStorageTable.language,
        'language': {
            'zh-TW': '資料儲存',
            'en': 'Data Storage',
        }
    },

    'data_transfer_speed': {
        'unit': dataTransferSpeedTable.unit,
        'unit_language': dataTransferSpeedTable.language,
        'language': {
            'zh-TW': '資料傳輸速度',
            'en': 'Data Transfer Speed',
        }
    },

    'resolution': {
        'unit': resolutionTable.unit,
        'unit_language': resolutionTable.language,
        'language': {
            'zh-TW': '像素解析度',
            'en': 'Pixel Resolution',
        }
    },

    'cmos_size': {
        'unit': cmosSizeTable.unit,
        'unit_language': cmosSizeTable.language,
        'language': {
            'zh-TW': '感光元件 CMOS 大小',
            'en': 'CMOS Size',
        }
    },

    'focal_length': {
        'unit': focalLengthTable.unit,
        'unit_language': focalLengthTable.language,
        'language': {
            'zh-TW': '焦距換算',
            'en': 'Focal Length',
        }
    },

    'angle': {
        'unit': angleTable.unit,
        'unit_language': angleTable.language,
        'language': {
            'zh-TW': '角度換算',
            'en': 'Angle',
        }
    },

    'magnetic_field': {
        'unit': magneticFieldTable.unit,
        'unit_language': magneticFieldTable.language,
        'language': {
            'zh-TW': '磁場強度',
            'en': 'Magnetic Field',
        }
    },

    'fuel_efficiency': {
        'unit': fuelEfficiencyTable.unit,
        'unit_language': fuelEfficiencyTable.language,
        'language': {
            'zh-TW': '燃料效率',
            'en': 'Fuel Efficiency',
        }
    },

    'illuminance': {
        'unit': illuminanceTable.unit,
        'unit_language': illuminanceTable.language,
        'language': {
            'zh-TW': '照度 (光強度)',
            'en': 'Illuminance (Light Intensity)',
        }
    },

    'area': {
        'unit': areaTable.unit,
        'unit_language': areaTable.language,
        'language': {
            'zh-TW': '面積',
            'en': 'Area',
        }
    },

    'force': {
        'unit': forceTable.unit,
        'unit_language': forceTable.language,
        'language': {
            'zh-TW': '力',
            'en': 'Force',
        }
    },

    'energy': {
        'unit': energyTable.unit,
        'unit_language': energyTable.language,
        'language': {
            'zh-TW': '能量',
            'en': 'Energy',
        }
    },

    'automotive_power': {
        'unit': automotivePowerTable.unit,
        'unit_language': automotivePowerTable.language,
        'language': {
            'zh-TW': '汽車功率',
            'en': 'Automotive Power',
        }
    },

    'radioactivity': {
        'unit': radioactivityTable.unit,
        'unit_language': radioactivityTable.language,
        'language': {
            'zh-TW': '放射性',
            'en': 'Radioactivity',
        }
    },

    'equivalent_dose': {
        'unit': equivalentDoseTable.unit,
        'unit_language': equivalentDoseTable.language,
        'language': {
            'zh-TW': '等效劑量',
            'en': 'Equivalent Dose',
        }
    },

    'velocity': {
        'unit': velocityTable.unit,
        'unit_language': velocityTable.language,
        'language': {
            'zh-TW': '速度',
            'en': 'Velocity',
        }
    },

    'density': {
        'unit': densityTable.unit,
        'unit_language': densityTable.language,
        'language': {
            'zh-TW': '密度',
            'en': 'Density',
        }
    },

    'pressure': {
        'unit': pressureTable.unit,
        'unit_language': pressureTable.language,
        'language': {
            'zh-TW': '壓力',
            'en': 'Pressure',
        }
    },

    'acceleration': {
        'unit': accelerationTable.unit,
        'unit_language': accelerationTable.language,
        'language': {
            'zh-TW': '加速度',
            'en': 'Acceleration',
        }
    },

    'paper_size': {
        'unit': paperSizeTable.unit,
        'unit_language': paperSizeTable.language,
        'language': {
            'zh-TW': '紙張尺寸',
            'en': 'Paper Size',
        }
    },

    'shoe_size': {
        'unit': shoeSizeTable.unit,
        'unit_language': shoeSizeTable.language,
        'language': {
            'zh-TW': '鞋碼',
            'en': 'Shoe Size',
        }
    },

}

module.exports = unitConversionTable;
