// Import the functions you need from the SDKs you need
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp1AAwOCWD1xF5IbtUpcTh8u73DhZJP0o",
  authDomain: "alever-3edfe.firebaseapp.com",
  projectId: "alever-3edfe",
  storageBucket: "alever-3edfe.appspot.com",
  messagingSenderId: "269273461516",
  appId: "1:269273461516:web:697cf43e05ab418d9fcf29",
  measurementId: "G-S541STQPPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(getAuth(app), email, password);
  }
  
export const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
}