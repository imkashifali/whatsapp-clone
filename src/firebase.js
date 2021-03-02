import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPoYgg9Eme1rL3HjaieVfslpRTUBnScaI",
  authDomain: "twitter-48743.firebaseapp.com",
  projectId: "twitter-48743",
  storageBucket: "twitter-48743.appspot.com",
  messagingSenderId: "843391438470",
  appId: "1:843391438470:web:fadb3fb237010afc8a4b07",
  measurementId: "G-W43JCYV8DJ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
