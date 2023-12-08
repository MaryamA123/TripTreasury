import "./CurrencyForm.css";
import React, { useState } from "react";
import makeApiCall from "../services/api";

const CurrencyForm = () => {
  const [formData, setFormData] = useState({
    currency1: "",
    currency2: "",
    amount: 0,
    totalDays: 0,
  });

  const [showDailyBudget, setShowDailyBudget] = useState(false);
  const [dailyBudget, setDailyBudget] = useState(null);

  const apiKey = "fca_live_dxIYuhTXOQFtljZCfSXinVRkl11qqPzSwTh9HNGP";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "amount" || name === "totalDays" ? valueAsNumber(e) : value,
    });
  };

  const valueAsNumber = (event) => {
    const value = event.target.value;
    return value === "" ? "" : Number(value); // Parse value as a number or keep it empty if it's ''
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDailyBudget(true);
    calculateAndSetDailyBudget();
  };

  const calculateAndSetDailyBudget = async () => {
    try {
      const rate = await makeApiCall(
        apiKey,
        formData.currency1,
        formData.currency2
      );
      const totalBudget = (
        (rate * formData.amount) /
        formData.totalDays
      ).toFixed(2);
      setDailyBudget(totalBudget);
    } catch (error) {
      console.error("Error calculating daily budget:", error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group">
          <label>Choose your base Currency:</label>
          <select
            id="currency1"
            name="currency1"
            value={formData.currency1}
            onChange={handleInputChange}
          >
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
            <option value="THB">THB</option>
            <option value="DKK">DKK</option>
            <option value="CHF">CHF</option>
            <option value="HKD">HKD</option>
          </select>
          </div>
          <div className="form-group">

          <label>Choose your Second Currency:</label>
          <select
            id="currency2"
            name="currency2"
            value={formData.currency2}
            onChange={handleInputChange}
          >
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
            <option value="THB">THB</option>
            <option value="DKK">DKK</option>
            <option value="CHF">CHF</option>
            <option value="HKD">HKD</option>
          </select>
          </div>
          <div className="form-group">
          <label>Please enter amount you wish to convert:</label>
          <input
            type="number"
            min={"1"}
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          ></input>
          </div>
          <div className="form-group">
          <label>Length of trip (in days):</label>
          <input
            type="number"
            min={"1"}
            name="totalDays"
            value={formData.totalDays}
            onChange={handleInputChange}
          ></input>
          </div>
          <div className="form-group">
          <input type="submit" value="Submit" className="submitButton"></input>
          </div>
        </form>
      </div>

      {showDailyBudget && dailyBudget !== null && (
        <div className="dailyBudget">
          <h2>
            Your daily budget is {dailyBudget} {formData.currency2}.
          </h2>
          <h3>Have a wonderful trip and safe travels!</h3>
        </div>
      )}
    </>
  );
};

export default CurrencyForm;
