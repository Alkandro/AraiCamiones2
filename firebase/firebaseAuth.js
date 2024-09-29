// firebaseAuth.js
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";

import firebaseConfig from "../credenciales";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firebase Auth con persistencia en AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default auth;
