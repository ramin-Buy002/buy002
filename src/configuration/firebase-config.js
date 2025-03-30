// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWmlSVq9d6-psUi7o-kyw0LqbkK4bjWiU",
  authDomain: "buy002-99171.firebaseapp.com",
  databaseURL: "https://buy002-99171-default-rtdb.firebaseio.com",
  projectId: "buy002-99171",
  storageBucket: "buy002-99171.firebasestorage.app",
  messagingSenderId: "842405104947",
  appId: "1:842405104947:web:a5b616c3ece3c4d5c44246",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const fireStoreDb = getFirestore(firebaseApp);

export { firebaseApp, fireStoreDb , auth };
