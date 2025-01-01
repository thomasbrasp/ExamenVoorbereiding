"use strict";
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
const arrayC = mergeArrays(arrayA, arrayB);

function logVariable(variable) {
    const [name, value] = Object.entries(variable)[0];
    console.log(`${name}:`, value);
}

logVariable({ arrayC });


function mergeArrays(arr1, arr2) {
    return [...arr1,...arr2]
}