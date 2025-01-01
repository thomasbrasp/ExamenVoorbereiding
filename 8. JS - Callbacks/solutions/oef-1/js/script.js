// JavaScript-functie die de som berekent en de callback-functie aanroept
function calculate(num1, num2, callback) {
    const sum = num1 + num2;
    // Roep de callback-functie aan met de berekende som als argument
    callback(sum);
  }

  // Callback-functie om de som naar de console te loggen
  function printSum(result) {
    console.log('De som is: ' + result);
  }

  // Test de calculate-functie met printSum als callback
  calculate(5, 10, printSum);