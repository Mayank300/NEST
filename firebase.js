import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiBhy2-ZaiCjFGN29CPD7mY1psBtMI_5E",
  authDomain: "nest-with.firebaseapp.com",
  projectId: "nest-with",
  storageBucket: "nest-with.appspot.com",
  messagingSenderId: "133495765170",
  appId: "1:133495765170:web:40725724882b1164b7f1ab",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
