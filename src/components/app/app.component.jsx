import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from '../../pages/homepage';
import ShopPage from '../../pages/shop-page';
import SignInSignUp from '../../pages/sign-in-sign-up';
import Header from '../header';

import './app.styles.scss';

const App = () => {
  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/login' component={SignInSignUp} />
      </Switch>
    </Router>
  )
};

export default App;