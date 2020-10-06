import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import {Route, Router} from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import products from './reducers/products';
import Product from './pages/product'
import Cart from './pages/cart';

const store = createStore(products)
ReactDOM.render(
  <Provider store={store}>
    <Router >
      <Route exact path={'/'} component ={Product}/>
      <Route  path={'/cart'} component ={Cart}/>
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
