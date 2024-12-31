"use strict";

const year = new Date().getFullYear();

for (let i = 1950; i <= year; i++) {
    if (isLeapYear(i)) document.body.appendChild(createElement(`p`, `Het jaartal ${i} is een schrikkeljaar.`))
}

function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function createElement(elType, elText, elClass) {
    const element = document.createElement(elType);
    if (elText) element.textContent = elText;
    if (elClass) element.classList.add(elClass);
    
    return element;
}
