import axios from 'axios';

export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';

export const updateAmount = (amount) => ({
  type: UPDATE_AMOUNT,
  payload: amount
});

export const updateCurrency = (currency) => async (dispatch) => {
  dispatch({ type: UPDATE_CURRENCY, payload: currency });
  // API 호출하여 환율 정보 가져오기 및 처리
};
