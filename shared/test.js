// const { convertUnit } = require('./unit_convert');
// const { getUnitTypeLanguageTable, getUnitLanguageTable, getAvailableUnitType, getUnitConversionTableKey } = require('./unit_table_handler');

// console.log(convertUnit(1, 'length', 'meter', 'kilometer'));

// console.log(getUnitTypeLanguageTable());
// console.log(getUnitLanguageTable());

// console.log(getAvailableUnitType());
// console.log(getUnitConversionTableKey('length'));


const { i18n } = require('./i18n');

// 基本翻譯
console.log(i18n.UI('convert')); // "轉換"
console.log(i18n.Error('invalid_unit', { unit: 'xyz' })); // "無效的單位：xyz"

// // 快捷方法
console.log(i18n.Unit('meter')); // "公尺"
console.log(i18n.UnitType('length')); // "長度"
console.log(i18n.Error('unit_not_found', { unit: 'abc' })); // "找不到單位：abc"

// 切換語言
i18n.setLanguage('en');
console.log(i18n.UI('convert')); // "Convert"

// 格式化數字
console.log(i18n.formatNumber(1234.567)); // "1,234.57"
