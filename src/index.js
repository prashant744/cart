import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCuTbvAYBByxM9QuSsFHoEF9KAT-VqSnaE",
  authDomain: "cart-d3c19.firebaseapp.com",
  projectId: "cart-d3c19",
  storageBucket: "cart-d3c19.appspot.com",
  messagingSenderId: "72107345757",
  appId: "1:72107345757:web:69d802be6c397abacc0ab4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
