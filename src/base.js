import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8sPoDHTfFXPWVdhfz7rKqi3euoEtEvyM",
  authDomain: "lauraz-9c604.firebaseapp.com",
  databaseURL: "https://lauraz-9c604-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp } ;

// this is a default export
export default base;
