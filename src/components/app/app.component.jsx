import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from '../../pages/homepage';
import ShopPage from '../../pages/shop-page';
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
          <Route path='/login' component={SignInSignUp} />
        </Switch>
      </Router>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);