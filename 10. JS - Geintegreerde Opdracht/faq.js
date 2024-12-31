"use strict";

const coll = document.querySelectorAll(`.collapsible`);

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener(`click`, function()  {
        coll[i].classList.toggle(`active`)
        const content = coll[i].nextElementSibling;
        if (content.style.display === `block`) {
            content.style.display = `none`
        } else {
            content.style.display = `block`
        }
    })
}


// const coll = document.querySelectorAll(`.collapsible`);
//
// // loop over al de button elementen in je coll array
// for (let i = 0; i < coll.length; i++) {
//     // voeg een click eventlistener toe aan elk button element
//     coll[i].addEventListener(`click`, () => {
//         // Voeg de klasse active toe aan het button element
//         coll[i].classList.toggle(`active`);
//         // haal het p-element op dat onder het button element is gedefinieerd
//         const content = coll[i].nextElementSibling;
//         if (content.style.display === `block`) {
//             content.style.display = `none`;
//         } else {
//             content.style.display = `block`;
//
//         }
//     })
// }