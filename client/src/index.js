import React from 'react';
import ReactDOM from 'react-dom';

import CartProvider from './providers/cart/cart.provider.jsx';

import App from './components/app';

ReactDOM.render(
  <CartProvider>
    <App /> 
  </CartProvider>,
  document.getElementById('root'));