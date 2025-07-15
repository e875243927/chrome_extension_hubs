import { i18n } from './i18n.js';

// // 基本翻譯
// console.log(i18n.UI('convert')); // "轉換"
// console.log(i18n.Error('invalid_unit', { unit: 'xyz' })); // "無效的單位：xyz"

// // // 快捷方法
// console.log(i18n.Unit('meter')); // "公尺"
// console.log(i18n.UnitType('length')); // "長度"
// console.log(i18n.Error('unit_not_found', { unit: 'abc' })); // "找不到單位：abc"

// // 切換語言
// i18n.setLanguage('en');
// console.log(i18n.UI('convert')); // "Convert"

// // 格式化數字
// console.log(i18n.formatNumber(1234.567)); // "1,234.57"


// 抓取所有元素並遍歷
const i18nElements = document.querySelectorAll('[text-i18n-name]');

i18nElements.forEach((element, index) => {
    console.log(`元素 ${index + 1}:`);
    console.log('- 標籤:', element.tagName);
    console.log('- text-i18n-name 值:', element.getAttribute('text-i18n-name'));
    console.log('- 當前文字內容:', element.textContent);
    console.log('- 元素:', element);
    console.log('---');
});