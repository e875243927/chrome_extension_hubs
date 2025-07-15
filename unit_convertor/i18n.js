import i18nConfig from './i18n/i18n_config.js';

// i18n 管理器
// 簡化的 i18n 管理器
class I18nManager {
    constructor(config = i18nConfig) {
        this.config = config;
        this.currentLanguage = config.defaultLanguage;
    }

    // 設定語言
    setLanguage(language) {
        if (this.config.supportedLanguages.includes(language)) {
            this.currentLanguage = language;
            return true;
        }
        console.warn(`Unsupported language: ${language}`);
        return false;
    }

    // 獲取當前語言
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    getLanguageText(text_type, text, params) {
        try {
            return this.config.translations[this.currentLanguage][text_type][text].replace(/\{([^{}]+)\}/g, (match, p1) => params[p1] || match);
        } catch (error) {
            console.error(`Language text not found: ${text_type} ${text}`);
            return text;
        }
    }

    // 獲取單位種類名稱
    UnitType(unitTypeName, params = {}) {
        return this.getLanguageText('unit_type', unitTypeName, params);
    }

    // 獲取單位名稱
    Unit(unitName, params = {}) {
        return this.getLanguageText('units', unitName, params);
    }

    // 獲取介面文字
    UI(uiName, params = {}) {
        return this.getLanguageText('ui', uiName, params);
    }

    // 獲取錯誤訊息
    Error(errorName, params = {}) {
        return this.getLanguageText('errors', errorName, params);
    }

    // 格式化數字
    formatNumber(number) {
        return number.toLocaleString(this.currentLanguage);
    }

}

// 創建全局實例
const i18n = new I18nManager();

// 導出
export {
    I18nManager,
    i18n,
};