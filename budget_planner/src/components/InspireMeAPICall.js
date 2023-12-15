import makeApiCall from "../services/api";
import React, { useState, useEffect } from 'react';

const CurrencyConverterInspireMe = () => {
    const [exchangeRate, setExchangeRate] = useState(null);
    const [error, setError] = useState(null);
  
    // API key
    //console.log(process.env.REACT_APP_TripTreasury_APIKey);
    const APIKey = process.env.REACT_APP_TripTreasury_APIKey;
  
    useEffect(() => {
      // Make API call when the component mounts
      const fetchData = async () => {
        try {
          const result = await makeApiCall(APIKey, 'GBP', 'THB');
          setExchangeRate(result);
        } catch (error) {
          setError('Error fetching data');
          console.log(error);
        }
      };
  
      fetchData();
    }, [APIKey]);
    console.log("Rendering")

    const formattedExchangeRate = exchangeRate ? exchangeRate.toFixed(2) : null;
  
    return (
      <div>
          <p>£1 is equal to {formattedExchangeRate} THB</p> 
        
      </div>
    );
  };
  
  export default CurrencyConverterInspireMe;