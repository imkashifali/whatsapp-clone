import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMKibVgQbQRzX2XiLF1JDvkeS5oOwrKaA",
  authDomain: "fir-f8882.firebaseapp.com",
  projectId: "fir-f8882",
  storageBucket: "fir-f8882.appspot.com",
  messagingSenderId: "278133588500",
  appId: "1:278133588500:web:32bddd7416f935aee1dd01",
  measurementId: "G-ZZBE3GXKCC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
