import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtHJfLlgKJQhqefrpL4gBp37mbI208GGY",
  authDomain: "react-contact-app-ccc1e.firebaseapp.com",
  projectId: "react-contact-app-ccc1e",
  storageBucket: "react-contact-app-ccc1e.appspot.com",
  messagingSenderId: "415414684235",
  appId: "1:415414684235:web:d2faa69199c2ef05365bce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);