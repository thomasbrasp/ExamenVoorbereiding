"use strict";
const todos =
    [
        {
            id: 1,
            title: "gras afrijden",
            completed: false
        },
        {
            id: 2,
            title: "was ophangen",
            completed: false
        },
        {
            id: 3,
            title: "meubels afstoffen",
            completed: false
        },
        {
            id: 4,
            title: "typescript oefenen",
            completed: true
        },
        {
            id: 5,
            title: "auto wassen",
            completed: false
        },
        {
            id: 6,
            title: "hond uitlaten",
            completed: false
        },
        {
            id: 7,
            title: "kapotte lampjes vervangen",
            completed: false
        },
        {
            id: 8,
            title: "boodschappen doen",
            completed: true
        },
        {
            id: 9,
            title: "fotoalbum maken",
            completed: false
        }
    ]

const completedArr = todos.map(todo => todo.completed);
console.log(getCompleted(completedArr))

function getCompleted(arr) {
    return arr.filter(value => value === true);
}

