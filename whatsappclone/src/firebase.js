import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCq9cmMUEfg2DSr2JjeRGqJawZqth7LR0g",
  authDomain: "whats-app-clone-b75de.firebaseapp.com",
  databaseURL: "https://whats-app-clone-b75de.firebaseio.com",
  projectId: "whats-app-clone-b75de",
  storageBucket: "whats-app-clone-b75de.appspot.com",
  messagingSenderId: "20767238248",
  appId: "1:20767238248:web:a3c1f0003c1c57795db3dd",
  measurementId: "G-WQZTGT4FT8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
