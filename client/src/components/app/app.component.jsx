import React, { Component } from 'react';
import { BrowserRouter as Router, 
         Route, Switch, Redirect } from 'react-router-dom';

import Homepage from '../../pages/homepage';
import ShopPage from '../../pages/shop-page';
import CheckoutPage from '../../pages/checkout-page';
import SignInSignUp from '../../pages/sign-in-sign-up';
import Header from '../header';
import { auth, createUserProfile } from '../../firebase/firebase.utils';

import UserContext from '../../contexts/user/user.context';

import './app.styles.scss';

class App extends Component {
  state = {
    currentUser: null
  }

  userAuth = false;

  componentDidMount() {
    this.userAuth = auth.onAuthStateChanged(async (user) => {

      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot((snapshot) => {
          this.setState({ 
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
          }})
        })
      } else {
        this.setState({currentUser: user});
      }
    })
  }

  componentWillUnmount() {
    this.userAuth();
  }

  render() {  
    return (
      <Router>
        <UserContext.Provider value={this.state.currentUser}>
          <Header />
        </UserContext.Provider>
        
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/login' render={() => this.props.currentUser ?
              <Redirect to='/' />
              :
              <SignInSignUp />
          } />
        </Switch>
      </Router>
    )
  }
};

export default App;