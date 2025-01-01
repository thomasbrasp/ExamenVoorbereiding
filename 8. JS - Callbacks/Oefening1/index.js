"use strict";

function calculate(a, b, callback) {
    let c = a + b;
    callback(c)
}

function printLog(output) {
    console.log(`de som is: ${output}`);
}

calculate(1, 2, printLog)