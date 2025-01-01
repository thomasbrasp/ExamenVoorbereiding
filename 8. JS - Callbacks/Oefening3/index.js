"use strict";


function createCalculator(action, callback) {
    return (a, b) => {
        let result;

        if (action === "add") {
            result = a + b;
        } else if (action === "multiply") {
            result = a * b;
        }

        if (callback) callback(result)

        return result;
    };
}

function printResult(output) {
    console.log(output);
}

const add = createCalculator("add");
const addAndPrint = createCalculator("add", printResult);

const x = add(1, 2);
console.log(`manuele log ` + x);
addAndPrint(1, 2)

