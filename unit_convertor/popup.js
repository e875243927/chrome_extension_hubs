import { i18n } from './i18n.js';
import { unitConversionTable } from './unit_tables/unit_summary.js';
import { getAvailableUnitType, getUnitConversionTableKey } from './unit_table_handler.js';
import { convertUnit } from './unit_convert.js';

// DOM Elements
const langToggleBtn = document.getElementById('lang-toggle');
const langDropdown = document.querySelector('.lang-dropdown');
const unitTypeSelect = document.getElementById('unit-type-select');
const valueInSelect = document.getElementById('value-in-select');
const valueOutSelect = document.getElementById('value-out-select');
const valueInputBox = document.getElementById('value-input-box');
const resultValueDiv = document.getElementById('result-value');
const resultUnitPathDiv = document.getElementById('result-unit-path');
const resultFactorDiv = document.getElementById('result-factor');
const resultFormulaDiv = document.getElementById('result-formula');

/**
 * Checks if a string is a valid numeric value.
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is numeric.
 */
function isNumeric(str) {
    if (typeof str !== 'string' || str.length === 0) return false;
    // Handles standard numbers, decimals, and scientific notation like "1e-5".
    // It correctly returns false for "5+", "5-", or expressions.
    return !isNaN(str) && !isNaN(parseFloat(str));
}


/**
 * A safe, custom parser for mathematical expressions.
 * It handles +, -, *, /, ^ (power), and parentheses using the Shunting-yard algorithm.
 * This avoids using eval() or new Function().
 * @param {string} expression The mathematical expression to evaluate.
 * @returns {number} The result of the calculation.
 */
function evaluateExpression(expression) {
    try {
        const sanitized = expression.replace(/\s/g, '');
        if (!sanitized) return NaN;

        // Check for invalid characters.
        if (!/^[0-9eE.()+\-*\/^]+$/.test(sanitized)) {
            console.error('Invalid characters in expression');
            return NaN;
        }

        const tokens = sanitized.match(/(\d+\.?\d*([eE][+-]?\d+)?|\.\d+([eE][+-]?\d+)?|[()+\-*\/^])/g);
        if (!tokens) return NaN;

        const outputQueue = [];
        const operatorStack = [];
        // Adjusted precedence: * and / are higher than ^
        const precedence = { '+': 1, '-': 1, '^': 2, '*': 3, '/': 3 };
        const associativity = { '^': 'Right', '*': 'Left', '/': 'Left', '+': 'Left', '-': 'Left' };

        tokens.forEach(token => {
            if (!isNaN(token) && isFinite(token)) {
                outputQueue.push(parseFloat(token));
            } else if (token in precedence) {
                while (
                    operatorStack.length &&
                    operatorStack[operatorStack.length - 1] !== '(' &&
                    (precedence[operatorStack[operatorStack.length - 1]] > precedence[token] ||
                     (precedence[operatorStack[operatorStack.length - 1]] === precedence[token] && associativity[token] === 'Left'))
                ) {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.push(token);
            } else if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
                    outputQueue.push(operatorStack.pop());
                }
                if (operatorStack[operatorStack.length - 1] === '(') {
                    operatorStack.pop();
                } else {
                    throw new Error('Mismatched parentheses');
                }
            }
        });

        while (operatorStack.length) {
            const op = operatorStack.pop();
            if (op === '(') throw new Error('Mismatched parentheses');
            outputQueue.push(op);
        }

        const evaluationStack = [];
        outputQueue.forEach(token => {
            if (typeof token === 'number') {
                evaluationStack.push(token);
            } else {
                if (evaluationStack.length < 2) throw new Error('Invalid expression');
                const b = evaluationStack.pop();
                const a = evaluationStack.pop();
                switch (token) {
                    case '+': evaluationStack.push(a + b); break;
                    case '-': evaluationStack.push(a - b); break;
                    case '*': evaluationStack.push(a * b); break;
                    case '/':
                        if (b === 0) throw new Error('Division by zero');
                        evaluationStack.push(a / b);
                        break;
                    case '^': evaluationStack.push(Math.pow(a, b)); break;
                }
            }
        });

        if (evaluationStack.length !== 1) throw new Error('Invalid expression');
        const finalResult = evaluationStack[0];

        return isFinite(finalResult) ? finalResult : NaN;

    } catch (error) {
        console.error('Formula parsing error:', error.message);
        return NaN;
    }
}


/**
 * Formats a number, showing more precision for decimals and using scientific notation for very large/small numbers.
 * @param {number} num The number to format.
 * @returns {string} The formatted number.
 */
function formatNumber(num) {
    if (Math.abs(num) > 1e12 || (Math.abs(num) < 1e-9 && num !== 0)) {
        return num.toExponential(4); // 增加到4位小數
    }
    // 對於在 1e-6 和 1e-9 之間的數字，使用 toPrecision 來顯示更多有效數字
    if (Math.abs(num) < 1e-6 && num !== 0) {
        return num.toPrecision(6);
    }
    // 使用 toLocaleString 來格式化數字，並提供更多的最大小數位數
    return num.toLocaleString(undefined, {
        maximumFractionDigits: 10,
        useGrouping: true
    });
}


/**
 * Updates the entire UI with the selected language.
 */
function updateLanguageUI() {
    // Update static text elements
    document.querySelectorAll('[text-i18n-name]').forEach(element => {
        const key = element.getAttribute('text-i18n-name');
        element.textContent = i18n.UI(key);
    });

    // Update unit type dropdown
    populateUnitTypeDropdown();
    // Update unit dropdowns
    updateUnitDropdowns();
    // Update conversion result
    performConversion();
}

/**
 * Populates the unit type dropdown with available types.
 */
function populateUnitTypeDropdown() {
    const currentUnitType = unitTypeSelect.value;
    unitTypeSelect.innerHTML = ''; // Clear existing options

    const unitTypes = getAvailableUnitType();
    unitTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = i18n.UnitType(type);
        unitTypeSelect.appendChild(option);
    });

    // Restore previous selection if it still exists
    if (unitTypes.includes(currentUnitType)) {
        unitTypeSelect.value = currentUnitType;
    }
}

/**
 * Updates the input and output unit dropdowns based on the selected unit type.
 */
function updateUnitDropdowns() {
    const selectedType = unitTypeSelect.value;
    if (!selectedType) return;

    const currentInUnit = valueInSelect.value;
    const currentOutUnit = valueOutSelect.value;

    valueInSelect.innerHTML = '';
    valueOutSelect.innerHTML = '';

    const units = getUnitConversionTableKey(selectedType);
    units.forEach(unit => {
        const optionText = i18n.Unit(unit);

        const inOption = document.createElement('option');
        inOption.value = unit;
        inOption.textContent = optionText;
        valueInSelect.appendChild(inOption);

        const outOption = document.createElement('option');
        outOption.value = unit;
        outOption.textContent = optionText;
        valueOutSelect.appendChild(outOption);
    });

    // Restore previous selections if they still exist
    if (units.includes(currentInUnit)) {
        valueInSelect.value = currentInUnit;
    }
    if (units.includes(currentOutUnit)) {
        valueOutSelect.value = currentOutUnit;
    }
}

/**
 * Performs the unit conversion and updates the result display.
 */
function performConversion() {
    const inputText = valueInputBox.value.trim();
    const unitType = unitTypeSelect.value;
    const fromUnit = valueInSelect.value;
    const toUnit = valueOutSelect.value;

    if (!inputText || !unitType || !fromUnit || !toUnit) {
        resultValueDiv.textContent = `${i18n.UI('result')}: --`;
        resultUnitPathDiv.textContent = `${i18n.UI('unit')}: --`;
        resultFactorDiv.textContent = `${i18n.UI('conversion_factor')}: --`;
        resultFormulaDiv.textContent = `${i18n.UI('formula')}: --`;
        return;
    }

    let value;
    const cleanedInput = inputText.replace(/,/g, '.');

    // First, check if the input is a valid number (including scientific notation)
    if (isNumeric(cleanedInput)) {
        value = parseFloat(cleanedInput);
    } else {
        // If it's not a simple number, treat it as a formula
        value = evaluateExpression(cleanedInput);
    }

    if (isNaN(value)) {
        resultValueDiv.textContent = `${i18n.UI('result')}: 輸入或公式錯誤`;
        resultUnitPathDiv.textContent = `${i18n.UI('unit')}: --`;
        resultFactorDiv.textContent = `${i18n.UI('conversion_factor')}: --`;
        resultFormulaDiv.textContent = `${i18n.UI('formula')}: --`;
        return;
    }


    const result = convertUnit(value, unitType, fromUnit, toUnit);
    const fromUnitData = unitConversionTable[unitType].unit[fromUnit];
    const toUnitData = unitConversionTable[unitType].unit[toUnit];

    if (!fromUnitData || !toUnitData) {
        console.error('單位數據缺失:', { fromUnit, toUnit, fromUnitData, toUnitData });
        resultValueDiv.textContent = `${i18n.UI('result')}: --`;
        resultUnitPathDiv.textContent = `${i18n.UI('unit')}: --`;
        resultFactorDiv.textContent = `${i18n.UI('conversion_factor')}: --`;
        resultFormulaDiv.textContent = `${i18n.UI('formula')}: --`;
        return;
    }

    const conversionScale = fromUnitData.scale / toUnitData.scale;
    const conversionOffset = (fromUnitData.offset - toUnitData.offset) / toUnitData.scale;

    resultValueDiv.textContent = `${i18n.UI('result')}: ${formatNumber(result)} ${i18n.Unit(toUnit)}`;
    resultUnitPathDiv.textContent = `${i18n.UI('unit')}: ${i18n.Unit(fromUnit)} -> ${i18n.Unit(toUnit)}`;
    resultFactorDiv.textContent = `${i18n.UI('conversion_factor')}: scale=${formatNumber(conversionScale)}, offset=${formatNumber(conversionOffset)}`;
    resultFormulaDiv.textContent = `${i18n.UI('formula')}: ${i18n.Unit(toUnit)} = (${i18n.Unit(fromUnit)} * ${formatNumber(conversionScale)}) + ${formatNumber(conversionOffset)}`;
}

/**
 * Initializes the application, sets up event listeners.
 */
function initialize() {
    // Language toggle
    langToggleBtn.addEventListener('click', () => {
        langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!langToggleBtn.contains(event.target) && !langDropdown.contains(event.target)) {
            langDropdown.classList.remove('show');
        }
    });

    langDropdown.addEventListener('click', (event) => {
        const langOption = event.target.closest('.lang-option');
        if (langOption) {
            const lang = langOption.dataset.lang;
            i18n.setLanguage(lang);
            updateLanguageUI();
        }
    });

    // Populate dropdowns on initial load
    populateUnitTypeDropdown();
    updateUnitDropdowns();

    // Add event listeners
    unitTypeSelect.addEventListener('change', () => {
        updateUnitDropdowns();
        performConversion();
    });

    valueInSelect.addEventListener('change', performConversion);
    valueOutSelect.addEventListener('change', performConversion);

    // Use 'input' for real-time feedback
    valueInputBox.addEventListener('input', performConversion);

    // Add other event listeners for robustness
    valueInputBox.addEventListener('change', performConversion);
    valueInputBox.addEventListener('paste', () => {
        setTimeout(performConversion, 0);
    });

    // Initial UI language setup
    updateLanguageUI();
}

// Run the app
initialize();