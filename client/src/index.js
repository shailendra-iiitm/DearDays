import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store=createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);