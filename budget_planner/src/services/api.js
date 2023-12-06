function makeApiCall(apiKey, fromCurrency, toCurrency) {
    const apiURL = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${toCurrency}&base_currency=${fromCurrency}`;
  
    fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}, ${apiURL}`);
      }
      return response.json();
    })
    .then(data => {
      const result = Number(data.data[toCurrency])
      console.log(`The conversion for 1${fromCurrency} to ${toCurrency} is: ${result}`);
      return result
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  }
  export default makeApiCall;
  
  const apiKey = 'fca_live_dxIYuhTXOQFtljZCfSXinVRkl11qqPzSwTh9HNGP';
  const fromCurrency = 'GBP';
  const toCurrency = 'EUR';
  
  makeApiCall(apiKey, fromCurrency, toCurrency);