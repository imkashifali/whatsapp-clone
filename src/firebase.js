import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCVCBUX8CYudUMpkIhHfSSroq3IbKQQV_o",
	authDomain: "tiktok-2f250.firebaseapp.com",
	projectId: "tiktok-2f250",
	storageBucket: "tiktok-2f250.appspot.com",
	messagingSenderId: "689642053947",
	appId: "1:689642053947:web:8cbefcc5a5f03e9fffd71e",
	measurementId: "G-9L5T3PJQTF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
