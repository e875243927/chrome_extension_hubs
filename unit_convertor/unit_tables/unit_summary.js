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
            'zh-CN': '长度',
            'ja': '長さ',
        }
    },

    'temperature': {
        'unit': temperatureTable.unit,
        'unit_language': temperatureTable.language,
        'language': {
            'zh-TW': '溫度',
            'en': 'Temperature',
            'zh-CN': '温度',
            'ja': '温度',
        }
    },

    'capacity': {
        'unit': capacityTable.unit,
        'unit_language': capacityTable.language,
        'language': {
            'zh-TW': '體積/容量 (以水為基準)',
            'en': 'Volume/Capacity (Water as a reference)',
            'zh-CN': '体积/容量 (以水为基准)',
            'ja': '体積/容量 (水を基準とする)',
        }
    },

    'weight': {
        'unit': weightTable.unit,
        'unit_language': weightTable.language,
        'language': {
            'zh-TW': '重量',
            'en': 'Weight',
            'zh-CN': '重量',
            'ja': '重量',
        }
    },

    'timescale': {
        'unit': timescaleTable.unit,
        'unit_language': timescaleTable.language,
        'language': {
            'zh-TW': '時間',
            'en': 'Time',
            'zh-CN': '时间',
            'ja': '時間',
        }
    },

    'data_storage': {
        'unit': dataStorageTable.unit,
        'unit_language': dataStorageTable.language,
        'language': {
            'zh-TW': '資料儲存',
            'en': 'Data Storage',
            'zh-CN': '数据存储',
            'ja': 'データストレージ',
        }
    },

    'data_transfer_speed': {
        'unit': dataTransferSpeedTable.unit,
        'unit_language': dataTransferSpeedTable.language,
        'language': {
            'zh-TW': '資料傳輸速度',
            'en': 'Data Transfer Speed',
            'zh-CN': '数据传输速度',
            'ja': 'データ転送速度',
        }
    },

    'resolution': {
        'unit': resolutionTable.unit,
        'unit_language': resolutionTable.language,
        'language': {
            'zh-TW': '像素解析度',
            'en': 'Pixel Resolution',
            'zh-CN': '像素分辨率',
            'ja': 'ピクセル解像度',
        }
    },

    'cmos_size': {
        'unit': cmosSizeTable.unit,
        'unit_language': cmosSizeTable.language,
        'language': {
            'zh-TW': '感光元件 CMOS 大小',
            'en': 'CMOS Size',
            'zh-CN': '感光元件 CMOS 大小',
            'ja': '感光元件 CMOS 大小',
        }
    },

    'focal_length': {
        'unit': focalLengthTable.unit,
        'unit_language': focalLengthTable.language,
        'language': {
            'zh-TW': '焦距換算',
            'en': 'Focal Length',
            'zh-CN': '焦距換算',
            'ja': '焦距換算',
        }
    },

    'angle': {
        'unit': angleTable.unit,
        'unit_language': angleTable.language,
        'language': {
            'zh-TW': '角度換算',
            'en': 'Angle',
            'zh-CN': '角度換算',
            'ja': '角度換算',
        }
    },

    'magnetic_field': {
        'unit': magneticFieldTable.unit,
        'unit_language': magneticFieldTable.language,
        'language': {
            'zh-TW': '磁場強度',
            'en': 'Magnetic Field',
            'zh-CN': '磁场强度',
            'ja': '磁場強度',
        }
    },

    'fuel_efficiency': {
        'unit': fuelEfficiencyTable.unit,
        'unit_language': fuelEfficiencyTable.language,
        'language': {
            'zh-TW': '燃料效率',
            'en': 'Fuel Efficiency',
            'zh-CN': '燃料效率',
            'ja': '燃料效率',
        }
    },

    'illuminance': {
        'unit': illuminanceTable.unit,
        'unit_language': illuminanceTable.language,
        'language': {
            'zh-TW': '照度 (光強度)',
            'en': 'Illuminance (Light Intensity)',
            'zh-CN': '照度 (光强度)',
            'ja': '照度 (光強度)',
        }
    },

    'area': {
        'unit': areaTable.unit,
        'unit_language': areaTable.language,
        'language': {
            'zh-TW': '面積',
            'en': 'Area',
            'zh-CN': '面积',
            'ja': '面積',
        }
    },

    'force': {
        'unit': forceTable.unit,
        'unit_language': forceTable.language,
        'language': {
            'zh-TW': '力',
            'en': 'Force',
            'zh-CN': '力',
            'ja': '力',
        }
    },

    'energy': {
        'unit': energyTable.unit,
        'unit_language': energyTable.language,
        'language': {
            'zh-TW': '能量',
            'en': 'Energy',
            'zh-CN': '能量',
            'ja': 'エネルギー',
        }
    },

    'automotive_power': {
        'unit': automotivePowerTable.unit,
        'unit_language': automotivePowerTable.language,
        'language': {
            'zh-TW': '汽車功率',
            'en': 'Automotive Power',
            'zh-CN': '汽车功率',
            'ja': '自動車パワー',
        }
    },

    'radioactivity': {
        'unit': radioactivityTable.unit,
        'unit_language': radioactivityTable.language,
        'language': {
            'zh-TW': '放射性',
            'en': 'Radioactivity',
            'zh-CN': '放射性',
            'ja': '放射性',
        }
    },

    'equivalent_dose': {
        'unit': equivalentDoseTable.unit,
        'unit_language': equivalentDoseTable.language,
        'language': {
            'zh-TW': '等效劑量',
            'en': 'Equivalent Dose',
            'zh-CN': '等效劑量',
            'ja': '等效劑量',
        }
    },

    'velocity': {
        'unit': velocityTable.unit,
        'unit_language': velocityTable.language,
        'language': {
            'zh-TW': '速度',
            'en': 'Velocity',
            'zh-CN': '速度',
            'ja': '速度',
        }
    },

    'density': {
        'unit': densityTable.unit,
        'unit_language': densityTable.language,
        'language': {
            'zh-TW': '密度',
            'en': 'Density',
            'zh-CN': '密度',
            'ja': '密度',
        }
    },

    'pressure': {
        'unit': pressureTable.unit,
        'unit_language': pressureTable.language,
        'language': {
            'zh-TW': '壓力',
            'en': 'Pressure',
            'zh-CN': '压力',
            'ja': '圧力',
        }
    },

    'acceleration': {
        'unit': accelerationTable.unit,
        'unit_language': accelerationTable.language,
        'language': {
            'zh-TW': '加速度',
            'en': 'Acceleration',
            'zh-CN': '加速度',
            'ja': '加速度',
        }
    },

    'paper_size': {
        'unit': paperSizeTable.unit,
        'unit_language': paperSizeTable.language,
        'language': {
            'zh-TW': '紙張尺寸',
            'en': 'Paper Size',
            'zh-CN': '纸张尺寸',
            'ja': '紙張尺寸',
        }
    },

    'shoe_size': {
        'unit': shoeSizeTable.unit,
        'unit_language': shoeSizeTable.language,
        'language': {
            'zh-TW': '鞋碼',
            'en': 'Shoe Size',
            'zh-CN': '鞋码',
            'ja': 'シューズサイズ', 
        }
    },

}


