
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6szKD8D8XXM51IcvGY3sO8YlWXOwD4TQ",
  authDomain: "login-41cc3.firebaseapp.com",
  projectId: "login-41cc3",
  storageBucket: "login-41cc3.appspot.com",
  messagingSenderId: "743738346731",
  appId: "1:743738346731:web:1590ecc24e8acd000982ae",
  measurementId: "G-RP6NVDZJ29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


