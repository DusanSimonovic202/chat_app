// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAu5rj_KqWJGMK6Axaw2ekQ_BFEF0NOA4",
  authDomain: "chatapp-31fc7.firebaseapp.com",
  projectId: "chatapp-31fc7",
  storageBucket: "chatapp-31fc7.appspot.com",
  messagingSenderId: "154236675807",
  appId: "1:154236675807:web:18bb67eed9cfce7a632b6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
