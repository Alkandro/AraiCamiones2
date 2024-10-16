<<<<<<< HEAD
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDFW1ReaxxSkkMuKiYT9T51B3rwN0z0-Zg",
//   authDomain: "restaurant-deb73.firebaseapp.com",
//   projectId: "restaurant-deb73",
//   storageBucket: "restaurant-deb73.appspot.com",
//   messagingSenderId: "733198847821",
//   appId: "1:733198847821:web:cd7fd94b9eeff07e53b104",
//   measurementId: "G-Z3L83B415F"
// };

// // Initialize Firebase
// const appFirebase = initializeApp(firebaseConfig);
// export default appFirebase;





import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDFW1ReaxxSkkMuKiYT9T51B3rwN0z0-Zg",
    authDomain: "restaurant-deb73.firebaseapp.com",
    projectId: "restaurant-deb73",
    storageBucket: "restaurant-deb73.appspot.com",
    messagingSenderId: "733198847821",
    appId: "1:733198847821:web:cd7fd94b9eeff07e53b104",
    measurementId: "G-Z3L83B415F"
  };



// Inicializar Firebase App si aún no ha sido inicializada
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Inicializar Firebase Auth con persistencia en AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
export default app;
=======
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
>>>>>>> 7f80b80e4243b1a6ccf8c37dd9a9f11601422c70
