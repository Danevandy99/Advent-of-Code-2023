"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const digitsAsStrings = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const parseString = (inputString) => {
    if (!inputString) {
        return '';
    }
    else if (!isNaN(+inputString)) {
        return +inputString;
    }
    else {
        return digitsAsStrings.indexOf(inputString) + 1;
    }
};
const generateOutput = (input) => {
    // Split the input string by newlines
    const inputArray = input.split('\n');
    const numbers = inputArray.map((inputString) => {
        var _a, _b, _c;
        // Find the first number of digit as a string in the string with regex
        const pattern = new RegExp(`(?=(\\d|${digitsAsStrings.join("|")}))`, "g");
        const firstMatch = (_a = [...inputString.matchAll(pattern)].at(0)) === null || _a === void 0 ? void 0 : _a.at(1);
        const indexOfFirstMatch = firstMatch ? inputString.indexOf(firstMatch) : 0;
        const firstNumber = parseString(firstMatch);
        const lastMatch = (_c = (_b = [...inputString.substring(indexOfFirstMatch).matchAll(pattern)]) === null || _b === void 0 ? void 0 : _b.at(-1)) === null || _c === void 0 ? void 0 : _c.at(1);
        const lastNumber = parseString(lastMatch);
        console.log(`${inputString} => ${firstNumber}${lastNumber}`);
        return +`${firstNumber}${lastNumber}`;
    });
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum;
};
const testInput = (0, fs_1.readFileSync)('day-one-test-input.txt', 'utf8');
const textOutput = 281;
const testResult = generateOutput(testInput);
console.log('testResult', testResult, 'testOutput', textOutput, '\n');
const input = (0, fs_1.readFileSync)('day-one-input.txt', 'utf8');
const result = generateOutput(input);
console.log(result);
