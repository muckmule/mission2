import { combineReducers } from 'redux';
import { UPDATE_AMOUNT, UPDATE_CURRENCY } from './actions';

const amountReducer = (state = 1000, action) => {
  switch (action.type) {
    case UPDATE_AMOUNT:
      return action.payload;
    default:
      return state;
  }
};

const currencyReducer = (state = 'USD', action) => {
  switch (action.type) {
    case UPDATE_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  amount: amountReducer,
  currency: currencyReducer
});
