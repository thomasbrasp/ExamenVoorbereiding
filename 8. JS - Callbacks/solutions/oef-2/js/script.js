function modifyString(inputString, callback) {
    const length = inputString.length;
    // Roep de callback-functie aan met de lengte van de string als argument
    callback(length);
  }

  // Callback-functie om de lengte naar de console te loggen
  function printLength(result) {
    console.log('De lengte van de string is: ' + result);
  }

  // Test de modifyString-functie met printLength als callback
  modifyString("Hello, World!", printLength);