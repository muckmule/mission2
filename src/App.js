import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import createStore from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers';
import CurrencyConverter from './CurrencyConverter';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  useEffect(() => {
    // 화폐 목록을 가져오는 API 호출 등 앱 초기화 작업 수행
  }, []);

  return (
    <Provider store={store}>
      <CurrencyConverter />
    </Provider>
  );
};

export default App;
