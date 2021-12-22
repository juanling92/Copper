// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-69Tat7eW63xz6emeqNHGyCBRo0LyXSg",
  authDomain: "tienda-cooper.firebaseapp.com",
  projectId: "tienda-cooper",
  storageBucket: "tienda-cooper.appspot.com",
  messagingSenderId: "543357839506",
  appId: "1:543357839506:web:b4787dbc1c40d3b6265e4b",
  measurementId: "G-C4WEDXPZMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);