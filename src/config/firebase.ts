// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCarLboQh496tnJLVV6IMZIL19HfexcgpM",
  authDomain: "react-app-12767.firebaseapp.com",
  projectId: "react-app-12767",
  storageBucket: "react-app-12767.appspot.com",
  messagingSenderId: "553979871109",
  appId: "1:553979871109:web:7a1c7d5ea1520bda810eec",
  measurementId: "G-BRLG5TGWPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);