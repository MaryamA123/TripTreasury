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
  const [exchangeRate, setExchangeRate] = useState(null);

  const apiKey = process.env.REACT_APP_TripTreasury_APIKey;

  //valueAsNumber is used when user inputs data for the amount and totalDays as these need to be of datatype number
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "amount" || name === "totalDays" ? valueAsNumber(e) : value,
    });
  };

  // Parse value as a number or keep it empty if it's ''
  const valueAsNumber = (event) => {
    const value = event.target.value;
    return value === "" ? "" : Number(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDailyBudget(true);
    dailyRate();
    calculateAndSetDailyBudget();
  };

  //function used to calculate the daily budget of the duration of the trip
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

  //function used to get the daily rate from the user inputs
  const dailyRate = async () => {
    try {
      const rate = await makeApiCall(
        apiKey,
        formData.currency1,
        formData.currency2
      );
      if (rate !== undefined) {
        const currentRate = rate.toFixed(2);
        setExchangeRate(currentRate);
      } else {
        console.log("Error: Conversion rate is undefined");
      }
    } catch (error) {
      console.error("Error getting conversion rate:", error);
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
            <label>Choose your second Currency:</label>
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
            <input
              type="submit"
              value="Submit"
              className="submitButton"
            ></input>
          </div>
        </form>
      </div>

      {showDailyBudget && dailyBudget && exchangeRate !== null && (
        <div className="dailyBudget">
          <h3>
            The current conversion rate is 1.00 {formData.currency1} to{" "}
            {exchangeRate} {formData.currency2}.
            <br />
            <br />
            Your daily budget is {dailyBudget} {formData.currency2}.<br />
            <br />
            Have a wonderful trip and safe travels!
          </h3>
        </div>
      )}
    </>
  );
};

export default CurrencyForm;
