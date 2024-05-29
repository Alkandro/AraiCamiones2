// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFW1ReaxxSkkMuKiYT9T51B3rwN0z0-Zg",
  authDomain: "restaurant-deb73.firebaseapp.com",
  projectId: "restaurant-deb73",
  storageBucket: "restaurant-deb73.appspot.com",
  messagingSenderId: "733198847821",
  appId: "1:733198847821:web:cd7fd94b9eeff07e53b104",
  measurementId: "G-Z3L83B415F"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
