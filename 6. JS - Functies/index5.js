"use strict";

const array = [16, 12, 16, 7, 17, 14, 9, 8, 18, 12];

function sum(array) {
    // return array.reduce((acc, n ) => acc + n, 0);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sum(array))
