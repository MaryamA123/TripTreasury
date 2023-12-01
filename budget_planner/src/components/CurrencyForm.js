import "./CurrencyForm.css"

function CurrencyForm() {
  return (
    <>
      <h1>Currency Conversion Form to go here</h1>
      <form>
      
        <label for="currency">Choose your first Currency:</label>
        <select id="currency" name="currency">
          <option value="BritishPound">GBP</option>
          <option value="UsDollar">USD</option>
          <option value="Euro">EUR</option>
          <option value="CandianDollar">CAD</option>
        </select>
      
        <label for="cars">Choose your Second Currency:</label>
        <select id="currency" name="currency">
          <option value="BritishPound">GBP</option>
          <option value="UsDollar">USD</option>
          <option value="Euro">EUR</option>
          <option value="CandianDollar">CAD</option>
        </select>
      
      <label>Please enter amount:</label>
        <input type="number"></input>
        <input type="submit" value="Submit" className="submitButton"></input>
      
      </form>
    </>
  );
}

export default CurrencyForm;
