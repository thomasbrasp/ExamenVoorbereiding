"use strict";

const persons = [
    {
        name: "Bob",
        age: 45
    },
    {
        name: "Charlie",
        age: 35
    },
    {
        name: "Alice",
        age: 30
    },
]

let sortedPersons = sortByAttribute([...persons], `name`);
console.log(sortedPersons)

function sortByAttribute(array, attribute) {
    array.sort((a,b) => {
        if (a[attribute] < b[attribute]) return -1;
        else if (a[attribute] > b[attribute]) return 1;
        else return 0;
    })
    return array
}

console.log(JSON.stringify(persons))
console.log(persons)