// JavaScript-functie die een calculator maakt en een callback-functie retourneert
function createCalculator(operation) {
  // Gebruik een if-statement om te bepalen of de bewerking 'add' of 'multiply' is
  if (operation === 'add') {
    // Retourneer een callback-functie voor optellen
    return function (num1, num2, callback) {
      const result = num1 + num2;
      // Roep de callback-functie aan met de uitkomst van de optelling als argument
      callback(result);
    };
  } else if (operation === 'multiply') {
    // Retourneer een callback-functie voor vermenigvuldigen
    return function (num1, num2, callback) {
      const result = num1 * num2;
      // Roep de callback-functie aan met de uitkomst van de vermenigvuldiging als argument
      callback(result);
    };
  } else {
    // Retourneer null als de bewerking niet geldig is
    return null;
  }
}

// Callback-functie om het resultaat naar de console te loggen
function printResult(result) {
  console.log('Het resultaat is: ' + result);
}

// Maak een calculator voor optellen
const addCalculator = createCalculator('add');
// Test de addCalculator met printResult als callback
addCalculator(5, 10, printResult);

// Maak een calculator voor vermenigvuldigen
const multiplyCalculator = createCalculator('multiply');
// Test de multiplyCalculator met printResult als callback
multiplyCalculator(3, 4, printResult);