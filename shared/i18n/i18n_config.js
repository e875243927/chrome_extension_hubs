const { getUnitTypeLanguageTable, getUnitLanguageTable } = require('../unit_table_handler');
const { i18n_error_table } = require('../i18n/i18n_error_table');
const { i18n_ui_table } = require('../i18n/i18n_ui_table');

// 國際化配置
const i18nConfig = {
    // 支援的語言
    supportedLanguages: ['zh-TW', 'en'],

    // 預設語言
    defaultLanguage: 'zh-TW',

    // 語言包
    translations: {
        'zh-TW': {
            // 單位種類名稱
            unit_type: getUnitTypeLanguageTable()['zh-TW'],
            // 單位名稱
            units: getUnitLanguageTable()['zh-TW'],
            // 錯誤訊息
            errors: i18n_error_table['zh-TW'],
            // 介面文字
            ui: i18n_ui_table['zh-TW'],
        },
        'en': {
            unit_type: getUnitTypeLanguageTable()['en'],
            units: getUnitLanguageTable()['en'],
            errors: i18n_error_table['en'],
            ui: i18n_ui_table['en'],
        }
    }
};

module.exports = i18nConfig;