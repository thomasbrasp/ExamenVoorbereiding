"use strict";

const isOdd = (number) => number % 2 !== 0;
const isEven = (number) => number % 2 === 0;

function atLeastTwo(arrayNumbers, callback) {
    let amount = 0;
    arrayNumbers.forEach(number => {
        if (callback(number)) {
            amount += 1;
        }
    })
    return amount >= 2;
}

console.log(atLeastTwo([2, 3, 4, 6, 8], isOdd));
console.log(atLeastTwo([2, 3, 4, 6, 8], isEven));
console.log(atLeastTwo([2, 3, 4, 5, 6, 8], isOdd));
console.log(atLeastTwo([2, 3, 4, 5, 6, 8], isEven));