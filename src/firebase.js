import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQWb1X6bNmSpzwRbkoUAPhRMhVPpEa7MA",
  authDomain: "whatsapp-8e448.firebaseapp.com",
  projectId: "whatsapp-8e448",
  storageBucket: "whatsapp-8e448.appspot.com",
  messagingSenderId: "158952167168",
  appId: "1:158952167168:web:6c7571477721c850e745e5",
  measurementId: "G-82Z9SM3YVB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
