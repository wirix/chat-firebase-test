import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDlvklXFeTrDkv7sBYZrYFA5gLvPbPBCh4",
  authDomain: "real-time-chat-e066a.firebaseapp.com",
  projectId: "real-time-chat-e066a",
  storageBucket: "real-time-chat-e066a.appspot.com",
  messagingSenderId: "987342339823",
  appId: "1:987342339823:web:621137ec9cf9f2eb72a51a",
  measurementId: "G-C77XE7BSN4"
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Context.Provider value={{ firebase, auth, firestore }}>
    <App />
  </Context.Provider>
);