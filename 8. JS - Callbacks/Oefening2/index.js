"use strict";


function modifyString(string, callback) {
    let length = string.length
    callback(length);
}

function printOutput(output) {
    console.log(`De lengte van de string is: ${output}`)
}

modifyString(`dit is een test`, printOutput);