"use strict";

indy(10);

function indy(number) {
    if (number < 1) {
        console.log("GG EZ")
        return;
    } else {
        console.log(number)
        indy(number - 1)
    }
}

