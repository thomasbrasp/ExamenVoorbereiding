// 'use strict';
// // const qs = (selector) => document.querySelector(selector);
// // const qsa = (selector) => document.querySelectorAll(selector);

// import fs from 'fs';
//
// const jsonData = JSON.parse(fs.readFileSync('./test.json', 'utf8'));
//
// console.log(jsonData)
// console.log(jsonData)

// function replacer(key, value) {
//   // Filtering out properties
//   if (typeof value === "string") {
//     return undefined;
//   }
//   return value;
// }
//
// const foo = {
//   foundation: "Mozilla",
//   model: "box",
//   week: 45,
//   transport: "car",
//   month: 7,
// };
// JSON.stringify(foo, replacer);
// // '{"week":45,"month":7}'


// // array.reduce((acc, n) => acc + n, 0);
// // acc is result so far
// // n is the value of the next item in array
// // 0 is the starting value of acc

// //deling door nul
// // const myBtn = document.querySelector(`button`);
// // const resultContainer = document.createElement(`div`);
// // document.body.appendChild(resultContainer);
// // const resultElement = document.querySelector(`p`);

// // myBtn.addEventListener(`click`, (e) => {
// //   e.preventDefault();
// //   const userInput = document.querySelector(`#number`).value;

// //   //   console.log(userInput);
// // });

// //OEF
// // let input = '';
// // let numbers = [];
// // do {
// //   input = prompt(`Voer een getal in, "stop" om te eindigen`);
// //   if (input !== `stop`) {
// //     numbers.push(parseInt(input));
// //   }
// // } while (input !== `stop`);
// // console.log(numbers);

// const grades = [16, 12, 16, 7, 17, 14, 9, 8, 18, 12];
// //gem percent en aantal onvoldoende
// const sum = grades.reduce((acc, n) => acc + n, 0);
// const avg = (sum / grades.length).toFixed(1);

// const buizen = grades.reduce((buisTotaal, grade) => buisTotaal + (grade < 10 ? 1 : 0), 0);
// console.log(`buizen: ${buizen}`);

// // const buizen = grades.filter(grade => grade < 10).length;
// // console.log(`buizen: ${buizen}`);

// // let buizen = 0;
// // for (const grade of grades) {
// //   if (grade < 10) buizen++;
// // }
// // console.log(`buizen: ${buizen}`);

// // const buizen = grades.reduce((buisTotaal, grade) => {
// //   return grade < 10 ? (buisTotaal += 1) : (buisTotaal += 0);
// // }, 0);

// console.log(`gemiddeld: ${avg}`);
// console.log(`percentage: ${(avg / 20) * 100}%`);
// console.log(`buizen: ${buizen}`);

// TODO: gucci oefening
// let input;
// let numbers = [];
// do {
//   input = prompt(`Enter number`);
//   if (input !== ``) {
//     numbers.push(parseInt(input));
//   }
// } while (input !== ``);

// const sum = numbers.reduce((sum, number) => sum + number, 0);
// const avg = sum / numbers.length;
// const failed = numbers.filter((number) => number < 10).length;

// document.querySelector(`#avg`).textContent = `gemiddeld: ${avg.toFixed(1)}`;
// document.querySelector(`#percentage`).textContent = `percentage: ${((avg / 20) * 100).toFixed(1)}%`;
// document.querySelector(`#failed`).textContent = `buizen: ${failed}`;

// <ul>
// <li id="avg"></li>
// <li id="percentage"></li>
// <li id="failed"></li>
// </ul>

// 'use strict';

// const totalList = document.querySelector(`#allPokemons`);
// const teamList = document.querySelector(`#PokemonsTeam`);
// const startPromptButton = document.querySelector(`#startPrompt`);

// const pokemons = [
//   'Bulbasaur',
//   'Ivysaur',
//   'Venusaur',
//   'Charmander',
//   'Charmeleon',
//   'Charizard',
//   'Squirtle',
//   'Wartortle',
//   'Blastoise',
//   'Caterpie',
//   'Metapod',
//   'Butterfree',
//   'Weedle',
//   'Kakuna',
//   'Beedrill',
//   'Pidgey',
//   'Pidgeotto',
//   'Pidgeot',
//   'Rattata',
//   'Raticate',
//   'Spearow'
// ];

// for (let i = 0; i < pokemons.length; i++) {
//   const pokemon = document.createElement('li');
//   pokemon.textContent = pokemons[i];
//   totalList.appendChild(pokemon);
// }

// startPromptButton.addEventListener('click', () => {
//   let team = [];
//   let input;

//   do {
//     input = prompt(`Welke pokemon wil je in je team? [1-21]:`);
//     if (input === ``) break;
//     if (isNaN(input) || input < 1 || input > pokemons.length) {
//       alert(`Deze pokemon ken ik niet`);
//       continue;
//     }
//     const index = parseInt(input, 10) - 1;
//     if (team.includes(index)) {
//       alert(`deze zit al in je team`);
//       continue;
//     } else {
//       team.push(index);
//       const selectedPokemon = pokemons[index];
//       const li = document.createElement('li');
//       li.textContent = selectedPokemon;
//       teamList.appendChild(li);
//     }
//   } while (input !== ``);
// });

//const rowSums = array2D.map((row) => row.reduce((sum, num) => sum + num, 0));
