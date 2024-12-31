'use strict';

function nameFromEmail(email) {
    const atIndex = email.indexOf(`@`)
    let name = email.substring(0, atIndex);
    name = name.replace(`.`, ` `).toUpperCase();
    console.log(name)
}

let input;
do {
    input = prompt(`your mail or your life`)
    nameFromEmail(input)
} while (input !== ``)

