import axios from 'axios';

export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';

export const updateAmount = (amount) => ({
  type: UPDATE_AMOUNT,
  payload: amount
});

export const updateCurrency = (currency) => async (dispatch) => {
  dispatch({ type: UPDATE_CURRENCY, payload: currency });
  
  let response = null;
  const url = "https://api.apilayer.com/exchangerates_data/convert";

  response = await axios.get(url, {
      params: {
          amount: amount,
          from: from,
          to: to,
      },
      headers: {
          apikey: process.env.REACT_APP_APILAYER_KEY,
      },
  });

  return response;
};
