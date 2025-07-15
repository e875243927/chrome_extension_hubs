import { lengthTable } from './length_table.js';
import { temperatureTable } from './temperature_table.js';
import { capacityTable } from './capacity_table.js';
import { weightTable } from './weight_table.js';
import { timescaleTable } from './timescale_table.js';
import { dataStorageTable } from './data_storage.js';
import { dataTransferSpeedTable } from './data_transfer_speed_table.js';
import { resolutionTable } from './resolution_table.js';
import { cmosSizeTable } from './cmos_size_table.js';
import { focalLengthTable } from './focal_length_table.js';
import { angleTable } from './angle_table.js';
import { magneticFieldTable } from './magnetic_table.js';
import { fuelEfficiencyTable } from './fuel_efficiency_table.js';
import { illuminanceTable } from './illuminance_table.js';
import { areaTable } from './area_table.js';
import { forceTable } from './force_table.js';
import { energyTable } from './energy_table.js';
import { automotivePowerTable } from './automotive_power_table.js';
import { radioactivityTable } from './radioactivity_table.js';
import { equivalentDoseTable } from './equivalent_dose_table.js';
import { velocityTable } from './velocity_table.js';
import { densityTable } from './density_table.js';
import { pressureTable } from './pressure_table.js';
import { accelerationTable } from './acceleration_table.js';
import { paperSizeTable } from './paper_size_table.js';
import { shoeSizeTable } from './shoe_size_table.js';

// 單位轉換表格管理
export const unitConversionTable = {
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


