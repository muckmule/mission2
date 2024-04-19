// CurrencyConverter.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  updateCurrency from './actions';
import updateAmount from './actions';


const CurrencyConverter = () => {
  const [inputAmount, setInputAmount] = useState(1000);
  const currencyList = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];
  const selectedCurrency = useSelector(state => state.currency);
  const dispatch = useDispatch();

  const handleAmountChange = (e) => {
    const amount = e.target.value.replace(/\D/g, ''); // 숫자만 허용
    setInputAmount(amount.length > 0 ? parseInt(amount, 10) : '');
  };

  const handleCurrencyChange = (e) => {
    dispatch(updateCurrency(e.target.value));
  };

  return (
    <div>
      <input type="text" value={inputAmount} onChange={handleAmountChange} />
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        {currencyList.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      {/* 환율 정보 표시 */}
    </div>
  );
};

export default CurrencyConverter;

const Amount = styled.div`
background-color: #dddddd;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1em;

input {
    width: 70%;
    padding: .5em;
}

select {
    width: 20%;
}
`;
