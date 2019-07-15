import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from '../../pages/homepage';
import ShopPage from '../../pages/shop-page';

import './app.styles.scss';

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
    </Router>
  )
};

export default App;