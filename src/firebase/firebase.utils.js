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

export const createUserProfile = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if(!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.error('user add to db error', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

