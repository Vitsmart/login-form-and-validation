
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDsLAh5aRATle_Hd_ZTtAn6-bdV_2KlOw",
  authDomain: "newuser-auth.firebaseapp.com",
  projectId: "newuser-auth",
  storageBucket: "newuser-auth.appspot.com",
  messagingSenderId: "766136183808",
  appId: "1:766136183808:web:e71bd1c4580ddf1a84bce5",
  measurementId: "G-DNYMY6J3VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider, signInWithRedirect}