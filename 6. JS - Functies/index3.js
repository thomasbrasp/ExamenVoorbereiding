"use strict";

printMaalTafels(10, 10, `-`);

function maalTafel(number, iterator, seperator) {
    const p = document.createElement(`p`);
    for (let i = 1; i <= iterator; i++) {
        p.textContent += (number * i).toString().padStart(3, 0) + seperator
    }
    p.textContent = p.textContent.substring(0, p.textContent.length - 1);
    document.body.appendChild(p)
}

function printMaalTafels(number, iterator, seperator = ` `) {
    for (let i = 1; i <= iterator; i++) {
        maalTafel(i, iterator, seperator);
    }
}

