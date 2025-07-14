const { getUnitConversionFactor } = require('./unit_table_handler');

// 轉換到標準單位
function convertToStandardUnit(value, unitType, unit) {
    const { offset, scale } = getUnitConversionFactor(unitType, unit);
    return (value * scale) + offset;
}

// 從標準單位轉換到其他單位
function convertFromStandardUnit(value, unitType, unit) {
    const { offset, scale } = getUnitConversionFactor(unitType, unit);
    return (value - offset) / scale;
}

// 單位間直接轉換
function convertUnit(value, unitType, fromUnit, toUnit) {
    const standardValue = convertToStandardUnit(value, unitType, fromUnit);
    return convertFromStandardUnit(standardValue, unitType, toUnit);
}

// 導出功能
module.exports = {
    convertUnit,
    convertToStandardUnit,
    convertFromStandardUnit,
};
