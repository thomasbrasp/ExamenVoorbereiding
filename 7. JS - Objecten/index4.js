"use strict";
const animalData = [
    {
        name: "tiger",
        info: ["mainly asian", "Stripes", "Is the largest living cat species"]
    },
    {
        name: "turtle",
        info: [
            "reptile",
            "Can't run, but sure can hide",
            "This animal is very slow"
        ]
    },
    {
        name: "dog",
        info: ["mammal", "omnivore", "Best friend"]
    },
    {
        name: "cat",
        info: ["mammal", "Species that is commonly kept as a pet"]
    },
    {
        name: "ant",
        info: [
            "There are many different species of this insect around the world.",
            "They can be brown, red and black",
            "They live in soil and cavities in wood and plants"
        ]
    },
    {
        name: "cow",
        info: [
            "Its stomach contains four separate compartments",
            "Their flautulence is responsible for a lot of the greenhouse gases.",
            "Their milk is very popular among human populations",
            "They produce milk"
        ]
    },
    {
        name: "crocodile",
        info: [
            "It eats fish, turtle and mammals.",
            "lives solitarily in murky, warm and quiet waters",
            "This reptile was around in times of the dinousaurs"
        ]
    },
    {
        name: "bird",
        info: [
            "There are many different species of this animal, almost everywhere in the world",
            "often omnivore",
            "peak and wings"
        ]
    },
    {
        name: "pig",
        info: [
            "Oink!",
            "It's one of the smartest animals on Earth, equivalent to a 3 year old child"
        ]
    },
    {
        name: "flea",
        info: [
            "an insect",
            "there used to be circuses where they acted",
            "cats and dogs are like 24/7 buses for these tiny tiny creatures"
        ]
    }
];

const animals = getAnimalsList(animalData);
animals.map(printList)
const myBtn = document.querySelector(`button`);

myBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    const inputUser = document.querySelector(`#a`).value
    const labelElement = document.querySelector(`label`)
    labelElement.textContent = animalData[inputUser - 1].info
})
function getAnimalsList(animalArray) {
    return animalArray.map(animal => animal.name)
}
function printList(textContentElement) {
    const li = document.createElement(`li`);
    li.textContent = textContentElement;
    document.querySelector(`ol`).appendChild(li);
}