import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from '../../pages/homepage';
import ShopPage from '../../pages/shop-page';
import SignInSignUp from '../../pages/sign-in-sign-up';
import Header from '../header';
import { auth } from '../../firebase/firebase.utils';

import './app.styles.scss';

class App extends Component {

  state = {
    currentUser: null
  }

  userAuth = false;

  componentDidMount() {
    this.userAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.userAuth();
  }

  render() {  
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
        
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={SignInSignUp} />
        </Switch>
      </Router>
    )
  }
};

export default App;