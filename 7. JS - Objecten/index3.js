"use strict";
const todos = [{
    id: 1, title: "gras afrijden", completed: false
}, {
    id: 2, title: "was ophangen", completed: false
}, {
    id: 3, title: "meubels afstoffen", completed: false
}, {
    id: 4, title: "typescript oefenen", completed: true
}, {
    id: 5, title: "auto wassen", completed: false
}, {
    id: 6, title: "hond uitlaten", completed: false
}, {
    id: 7, title: "kapotte lampjes vervangen", completed: false
}, {
    id: 8, title: "boodschappen doen", completed: true
}, {
    id: 9, title: "fotoalbum maken", completed: false
}]

// const todosCompleted = getCompleted(todos).map(todo => todo.title);
const todosCompleted = getCompleted(todos);

todosCompleted.forEach(printParagraph)

// function getCompleted(element) {
//     return element.filter(todo => todo.completed === true);
// }

function getCompleted(element) {
    let filteredTodo = [];
    element.forEach(e => e.completed && filteredTodo.push(e.title))
    return filteredTodo
}

// function getCompleted(element) {
//     let filteredTodos = [];
//     element.forEach(e => {
//         if (e.completed === true) {
//             filteredTodos.push(e.title)
//         }
//     })
//     return filteredTodos
// }

// function getCompleted(element) {
//     let filteredTodos = [];
//     for (const e of element) {
//         if (e.completed === true) {
//             filteredTodos.push(e.title);
//         }
//     }
//     return filteredTodos;
// }

function printParagraph(textContentElement) {
    const p = document.createElement(`p`);
    p.textContent = textContentElement;
    document.body.appendChild(p);
}