"use strict";
import fs from 'fs';

const personData = JSON.parse(fs.readFileSync('./assets/person.json', 'utf8'));

console.log(personData);
console.log(`KAKA`)

const person =

    {
        "firstname": "Jurgen",
        "lastname": "Vervoort",
        "age": 27,
        "city": "Heist-op-den-Berg",
        "street": "Bergstraat",
        "number": "17c",
        "postal": 2220,
        "hobbies": [
            "voetbal",
            "tafeltennis",
            "vissen"
        ]
    };
printFullName(person)
printHobbies(person)


function printHobbies(person) {
    const ul = createElement(`ul`, null, null, true);
    person.hobbies.forEach((hobby) => {
        const li = createElement(`li`, hobby, null)
        ul.appendChild(li)
    })
}

function printFullName(person) {
    console.log(person.firstname + ` ` + person.lastname)
}

function createElement(elType, elText, elClass, bool = false) {
    const element = document.createElement(elType);
    if (elText) element.textContent = elText;
    if (elClass) element.classList.add(elClass);
    if (bool) document.body.appendChild(element);
    return element;
}
