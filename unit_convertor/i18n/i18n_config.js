import { getUnitTypeLanguageTable, getUnitLanguageTable } from '../unit_table_handler.js';
import { i18n_error_table } from './i18n_error_table.js';
import { i18n_ui_table } from './i18n_ui_table.js';

// 國際化配置
const i18nConfig = {
    // 支援的語言
    supportedLanguages: ['zh-TW', 'zh-CN', 'en', 'ja'],

    // 預設語言
    defaultLanguage: 'zh-TW',

    // 語言包
    translations: {
        'zh-TW': {
            unit_type: getUnitTypeLanguageTable()['zh-TW'],
            units: getUnitLanguageTable()['zh-TW'],
            errors: i18n_error_table['zh-TW'],
            ui: i18n_ui_table['zh-TW'],
        },
        'zh-CN': {
            unit_type: getUnitTypeLanguageTable()['zh-CN'],
            units: getUnitLanguageTable()['zh-CN'],
            errors: i18n_error_table['zh-CN'],
            ui: i18n_ui_table['zh-CN'],
        },
        'en': {
            unit_type: getUnitTypeLanguageTable()['en'],
            units: getUnitLanguageTable()['en'],
            errors: i18n_error_table['en'],
            ui: i18n_ui_table['en'],
        },
        'ja': {
            unit_type: getUnitTypeLanguageTable()['ja'],
            units: getUnitLanguageTable()['ja'],
            errors: i18n_error_table['ja'],
            ui: i18n_ui_table['ja'],
        }
    }
};

export default i18nConfig;
