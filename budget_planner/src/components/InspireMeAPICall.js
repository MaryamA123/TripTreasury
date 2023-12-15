import makeApiCall from "../services/api";
import React, { useState, useEffect } from 'react';

const CurrencyConverterInspireMe = () => {
    const [exchangeRate, setExchangeRate] = useState(null);
    const [error, setError] = useState(null);
  
    // API key
    console.log(process.env.REACT_APP_TripTreasury_APIKey);
    const APIKey = process.env.REACT_APP_TripTreasury_APIKey;
  
    useEffect(() => {
      // Make API call when the component mounts
      const fetchData = async () => {
        try {
          const result = await makeApiCall(APIKey, 'GBP', 'THB');
          setExchangeRate(result.exchangeRate);
        } catch (error) {
          setError('Error fetching data');
          console.log(error);
        }
      };
  
      fetchData();
    }, [APIKey]);
  
    return (
      <div>
          <p>£1 is equal to {exchangeRate} THB</p> 
        
      </div>
    );
  };
  
  export default CurrencyConverterInspireMe;