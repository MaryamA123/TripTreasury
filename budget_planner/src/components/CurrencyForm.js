import "./CurrencyForm.css"
import React, {useState} from "react";

const CurrencyForm = () => {
  const [formData, setFormData] = useState({
    currency1: "",
    currency2: "",
    amount:0,
    totalDays:0
  })
  
  const [showDailyBudget, setShowDailyBudget] = useState(false);

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: name === "amount" || name === "totalDays" ? valueAsNumber(e): value})
  }

  const valueAsNumber = (event) => {
    const value = event.target.value;
    return value === '' ? '' : Number(value); // Parse value as a number or keep it empty if it's ''
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    calculatedDailyBudget()
    setShowDailyBudget(true)
  };
    

  const conversionRate = 2;
  const dailyBudget = Math.round((formData.amount * conversionRate)/ formData.totalDays).toFixed(2)
  
  function calculatedDailyBudget(){
    console.log(conversionRate);
    console.log(dailyBudget)

  }

  
  return (
    <>
      {/* <h1>Currency Conversion Form to go here</h1> */}
      <div className="formContainer">
      <form onSubmit={handleSubmit} >
      
        <label>Choose your base Currency:</label>
        <select id="currency1" name="currency1" value={formData.currency1} onChange={handleInputChange} >
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
        </select>
      
        <label>Choose your Second Currency:</label>
        <select id="currency2" name="currency2" value={formData.currency2} onChange={handleInputChange}>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
        </select>

        <label>Please enter amount:</label>
        <input type="number" min={"1"} name="amount" value={formData.amount} onChange={handleInputChange}></input>

      <label>Length of trip (in days):</label>
        <input type= "number" min={"1"} name="totalDays" value ={formData.totalDays} onChange={handleInputChange} ></input>
        <input type="submit" value="Submit" className="submitButton"></input>
        
      </form>
      </div>
      
      {showDailyBudget && (
        <div>
          <h2>Your daily budget is {dailyBudget} {formData.currency2}</h2>
        </div>)}
        
    </>
  )
};



export default CurrencyForm;
