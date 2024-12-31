'use strict';

(() => {

    function oef4() {
        //https://apwt.gitbook.io/webtechnologie/javascript/arrays/oefeningen#oefening-4-punten
        const grades = [16, 12, 16, 7, 17, 14, 9, 8, 18, 12];
        let sum = 0;
        let fails = 0;
        for (let i = 0; i < grades.length; i++) {
            if (grades[i] < 10) {
                fails++;
            }
            sum += grades[i];
        }
        const average = (sum / grades.length).toFixed(1);
        const percentage = average / 0.20;
        console.log(average)
        console.log(percentage);
        console.log(fails)
    }

    function oef5() {

        //TODO:creation, assigningvalue and appending should be grouped per element
        //https://apwt.gitbook.io/webtechnologie/javascript/arrays/oefeningen#oefening-5-punten-met-vragen
        const grades = [16, 12, 16, 7, 17, 14, 9, 8, 18, 12];

        // let grades = [];
        // let input;
        // do {
        //     input = prompt(`Enter a number`);
        //     if (input !== ``) {
        //         grades.push(parseInt(input));
        //     }
        // } while (input !== ``)

        const sum = grades.reduce((sum, n) => sum + n, 0);
        const average = (sum / grades.length);
        const percentage = average / 0.20;

        const fails = grades.filter(grade => grade < 10).length;
        // const fails = grades.reduce((failCount, grade) => failCount + (grade < 10 ? 1 : 0), 0);
        // console.log(average.toFixed(1), percentage, fails)
        const results = [average.toFixed(1), percentage, fails];
        const avgEl = document.createElement(`p`);
        const percentEl = document.createElement(`p`);
        const failsEl = document.createElement(`p`);
        avgEl.textContent = `Gemiddelde: ${results[0]}`
        percentEl.textContent = `Percentage: ${results[1]}`
        failsEl.textContent = `Buizen: ${results[2]}`
        document.body.appendChild(avgEl)
        document.body.appendChild(percentEl)
        document.body.appendChild(failsEl)

        //next time follow this:
// Array om de punten op te slaan
// Vraag de gebruiker om punten in te voeren met een do-while loop
// Voeg het ingevoerde getal toe aan de array
// Totaal nodig voor berekenen van gemiddelde
// Aantal geslaagde nodig voor berekening percentage en aantal gebuisde
// Bereken gemiddelde
// Bereken het percentage
// Toon de resultaten op het scherm

    }

    function pokemons() {
        const pokemons = [
            "Bulbasaur",
            "Ivysaur",
            "Venusaur",
            "Charmander",
            "Charmeleon",
            "Charizard",
            "Squirtle",
            "Wartortle",
            "Blastoise",
            "Caterpie",
            "Metapod",
            "Butterfree",
            "Weedle",
            "Kakuna",
            "Beedrill",
            "Pidgey",
            "Pidgeotto",
            "Pidgeot",
            "Rattata",
            "Raticate",
            "Spearow",
        ];

        renderFullList();

        renderMyTeam();

        function renderFullList() {
            const leftContainer = document.querySelector(`.left`);
            const titleList = document.createElement(`h1`)
            titleList.textContent = `Pokemon Team`;
            leftContainer.appendChild(titleList);
            const olElement = document.createElement(`ol`)
            leftContainer.appendChild(olElement);
            for (let i = 0; i < pokemons.length; i++) {
                const htmlLiElement = document.createElement(`li`);
                htmlLiElement.textContent = pokemons[i];
                olElement.appendChild(htmlLiElement)
            }
        }

        function renderMyTeam() {
            const rightContainer = document.querySelector(`.right`);
            const titleMyTeam = document.createElement(`h2`)
            titleMyTeam.textContent = `Mijn Team`;
            rightContainer.appendChild(titleMyTeam)
            const olElement = document.createElement(`ol`)
            rightContainer.appendChild(olElement);
            titleMyTeam.addEventListener(`click`, (e) => {
                let input;
                do {
                    input = prompt(`Kies een pokemon`)
                    console.log(input);
                } while (input !== ``)
            })
        }
    }
})();

