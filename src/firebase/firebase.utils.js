import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB14DUSKgO58Q1nJfO1g3azjqpDCOZCR8E",
  authDomain: "crwn-db-74131.firebaseapp.com",
  DatabaseURL: "https://crwn-db-74131.firebaseio.com",
  projectId: "CRWN-db-74131",
  storageBucket: "CRWN -db-74131.appspot.com ",
  messagingSenderId: " 311392041451 ",
  appId: " 1: 311392041451: web: 314e957e6dd9e258bf81ae ",
  measurementId: " G-9VHD54S17B "
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;