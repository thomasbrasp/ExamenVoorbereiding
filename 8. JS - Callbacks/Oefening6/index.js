"use strict";
console.log(`Oefening6`)
console.log(`-`.repeat(20))
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(inputArray);
function filterAndDouble(array) {
    return array.filter(e => e % 2 === 0).map(e => e * 2)
}

const filteredArray = filterAndDouble(inputArray)
console.log(filteredArray);
//TODO: test