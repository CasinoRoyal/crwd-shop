import React, { Component } from 'react';
import { BrowserRouter as Router, 
         Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from '../../pages/homepage';
import ShopPage from '../../pages/shop-page';
import CheckoutPage from '../../pages/checkout-page';
import SignInSignUp from '../../pages/sign-in-sign-up';
import Header from '../header';
import { auth, createUserProfile } from '../../firebase/firebase.utils';
import { setCurrentUser } from '../../redux/user/user.actions';

import './app.styles.scss';

class App extends Component {

  userAuth = false;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.userAuth = auth.onAuthStateChanged(async (userAuth) => {

      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.userAuth();
  }

  render() {  
    return (
      <Router>
        <Header />
        
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/login' render={() => this.props.currentUser ?
              <Redirect to='/' /> :
              <SignInSignUp />
          } />
        </Switch>
      </Router>
    )
  }
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);