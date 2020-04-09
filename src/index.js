import React from 'react';
import ReactDOM from 'react-dom';
import store from './data/store';

import App from './App';
import { Provider } from 'react-redux';


const handleCounter = () => {
  store.dispatch({ type: "INCREMENT_COUNTER" })
}

const handleScore = () => {
  store.dispatch({ type: "INCREMENT_SCORE" })
}

ReactDOM.render(
  <Provider
    store={store}
  >
    <App
      handleCounter={handleCounter}
      handleScore={handleScore}
    />
  </Provider>,

  document.getElementById('root')
);