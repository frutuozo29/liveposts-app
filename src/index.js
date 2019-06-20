import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import App from './components/App';

// redux
import { createStore, applyMiddleware, compose } from "redux";
// middlewares
import thunk from 'redux-thunk';
// react-redux
import { Provider } from "react-redux";
// reducer
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducers, enhancer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));