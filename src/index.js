import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCedhySAEHZQDRA9dGqAvXUktqIhis9PN0",
    authDomain: "mahavirjewellers-3f88b.firebaseapp.com",
    databaseURL: "https://mahavirjewellers-3f88b.firebaseio.com",
    projectId: "mahavirjewellers-3f88b",
    storageBucket: "mahavirjewellers-3f88b.appspot.com",
    messagingSenderId: "205551242273"
  };
  firebase.initializeApp(config);

ReactDOM.render(
    <App />, 
    document.getElementById('root'));

registerServiceWorker();
