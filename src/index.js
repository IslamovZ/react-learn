import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {BrowserRouter, Route,  Switch} from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import Cart from './pages/cart';
import Product from './pages/product'
import store from './store/store'
import Navbar from './Navbar';

console.log(store)

ReactDOM.render(
  <Provider store={store}>
    
    <BrowserRouter >
      <Navbar />
      <Switch>
      <Route exact path={'/'} component ={Product}/>
      <Route path={'/cart'} component ={Cart}/>
      </Switch>
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
