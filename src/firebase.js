import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUzLJWbEe8EVJWgW3a13jxduNWy1BLIZE",
  authDomain: "blogapp-e9dd7.firebaseapp.com",
  projectId: "blogapp-e9dd7",
  storageBucket: "blogapp-e9dd7.appspot.com",
  messagingSenderId: "91304977310",
  appId: "1:91304977310:web:04a0f5a6c6ce5229d2ec8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { db };
export { auth };