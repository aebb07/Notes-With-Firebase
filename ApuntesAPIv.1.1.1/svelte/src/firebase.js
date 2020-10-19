/**
 * Firebase initialization
 */
import firebase from 'firebase/app';
var firebaseConfig = {
  apiKey: "AIzaSyBS1bavFD7Cw0WqeU2x8cW4RGbguNabANs",
  authDomain: "appnotesnew.firebaseapp.com",
  databaseURL: "https://appnotesnew.firebaseio.com",
  projectId: "appnotesnew",
  storageBucket: "appnotesnew.appspot.com",
  messagingSenderId: "187354405353",
  appId: "1:187354405353:web:02531ccb5ecd01f23ad378"
};
firebase.initializeApp(firebaseConfig);

/**
 * Firebase Firestore
 */
import 'firebase/firestore';
export const firestoreDb = firebase.firestore();

/**
 * Firebase Auth Google / Facebook
 */
import 'firebase/auth'
export const firebaseAuth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
