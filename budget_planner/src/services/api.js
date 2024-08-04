function makeApiCall(apiKey, fromCurrency, toCurrency) {
    const apiURL = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${toCurrency}&base_currency=${fromCurrency}`;
  
    return fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}, ${apiURL}`);
      }
      return response.json();
    })
    .then(data => {
      var conversionRate = data.data[toCurrency]
      return conversionRate
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  }
  export default makeApiCall;
  