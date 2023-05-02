// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU5ny3ur27KOVZkYlm1wLfA6EHZOOspVg",
  authDomain: "blogpagal.firebaseapp.com",
  projectId: "blogpagal",
  storageBucket: "blogpagal.appspot.com",
  messagingSenderId: "971264186109",
  appId: "1:971264186109:web:a880081810624ab0f09094",
  measurementId: "G-96HX6CMN72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);