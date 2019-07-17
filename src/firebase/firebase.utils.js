import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCJRiUrw3zysJcTOOr51FLicgz4hvh09sI",
    authDomain: "crwd-shop-app.firebaseapp.com",
    databaseURL: "https://crwd-shop-app.firebaseio.com",
    projectId: "crwd-shop-app",
    storageBucket: "",
    messagingSenderId: "281793071034",
    appId: "1:281793071034:web:953aafaefe476301"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

