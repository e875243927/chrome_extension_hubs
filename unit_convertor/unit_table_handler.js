import { unitConversionTable } from './unit_tables/unit_summary.js';

// 獲取所有可用單位種類
function getAvailableUnitType() {
    return Object.keys(unitConversionTable);
}

// 獲取轉換單位"轉換"表格
function getUnitConversionTableKey(unitType) {
    return Object.keys(unitConversionTable[unitType].unit);
}

// 獲取轉換單位"轉換"表格
function getUnitConversionTable(unitType) {
    return unitConversionTable[unitType].unit;
}

// 獲取轉換單位"轉換"factor
function getUnitConversionFactor(unitType, unit) {
    return unitConversionTable[unitType].unit[unit];
}

// 獲取轉換單位"語言"表格
function getUnitLanguageTable() {
    const unitLanguageTable = {};
    for (const unitType in unitConversionTable) {
        for (const language in unitConversionTable[unitType].unit_language) {
            if (!(language in unitLanguageTable)) {
                unitLanguageTable[language] = {};
            }
            for (const unitLanguage in unitConversionTable[unitType].unit_language[language]) {
                unitLanguageTable[language][unitLanguage] = unitConversionTable[unitType].unit_language[language][unitLanguage];
            }
        }
    }
    return unitLanguageTable;
}

// 獲取轉換單位種類"語言"表格
function getUnitTypeLanguageTable() {
    const unitTypeLanguageTable = {};
    for (const unitType in unitConversionTable) {
        for (const language in unitConversionTable[unitType].language) {
            if (!(language in unitTypeLanguageTable)) {
                unitTypeLanguageTable[language] = {};
            }
            unitTypeLanguageTable[language][unitType] = unitConversionTable[unitType].language[language];
        }
    }
    return unitTypeLanguageTable;
}


// 導出功能
export {
    getAvailableUnitType,
    getUnitConversionTableKey,
    getUnitConversionTable,
    getUnitConversionFactor,
    getUnitLanguageTable,
    getUnitTypeLanguageTable,
};