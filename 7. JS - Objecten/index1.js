"use strict";


const recept =
    {
        name: "spaghetti",
        description: "italian food",
        persons: 5,
        ingredients: [
            {
                name: "tomato",
                quantity: "500",
                price: 1.19
            },
            {
                name: "pasta",
                quantity: "300",
                price: 0.99
            },
            {
                name: "olive oil",
                quantity: "50",
                price: 3.49
            }
        ]
    }
;

const title = createElement(`h1`, recept.name)
document.body.appendChild(title);
const totaal = recept.ingredients.reduce((total, ingredient) => total + ingredient.price, 0);
const p = createElement(`p`, `Totaalprijs van de ingredienten: ${totaal}`, null, true);


function createElement(elType, elText, elClass, bool = false) {
    const element = document.createElement(elType);
    if (elText) element.textContent = elText;
    if (elClass) element.classList.add(elClass);
    if (bool) document.body.appendChild(element);
    return element;
}