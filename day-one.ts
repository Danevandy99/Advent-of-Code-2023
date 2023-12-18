import { readFileSync } from 'fs';

const digitsAsStrings = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const parseString = (inputString?: string): string | number => {
    if (!inputString) {
        return '';
    } else if (!isNaN(+inputString)) {
        return +inputString;
    } else {
        return digitsAsStrings.indexOf(inputString) + 1;
    }
};

const generateOutput = (input: string) => {
    // Split the input string by newlines
    const inputArray: string[] = input.split('\n');

    const numbers = inputArray.map((inputString) => {
        // Find the first number of digit as a string in the string with regex
        const pattern = new RegExp(`(?=(\\d|${digitsAsStrings.join("|")}))`, "g");

        const firstMatch = [...inputString.matchAll(pattern)].at(0)?.at(1);

        const indexOfFirstMatch = firstMatch ? inputString.indexOf(firstMatch) : 0;

        const firstNumber = parseString(firstMatch);

        const lastMatch = [...inputString.substring(indexOfFirstMatch).matchAll(pattern)]?.at(-1)?.at(1);

        const lastNumber = parseString(lastMatch);

        console.log(`${inputString} => ${firstNumber}${lastNumber}`)

        return +`${firstNumber}${lastNumber}`;
    });

    const sum = numbers.reduce((a, b) => a + b, 0);

    return sum;
};

const testInput = readFileSync('day-one-test-input.txt', 'utf8');
const textOutput = 281;

const testResult = generateOutput(testInput);

console.log('testResult', testResult, 'testOutput', textOutput, '\n');

const input: string = readFileSync('day-one-input.txt', 'utf8');

const result = generateOutput(input);

console.log(result);