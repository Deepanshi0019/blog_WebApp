// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkwv2NMyXct9ICJHVdnIQmY7AZewvh6A8",
  authDomain: "userdata-81544.firebaseapp.com",
  projectId: "userdata-81544",
  storageBucket: "userdata-81544.appspot.com",
  messagingSenderId: "1073929881472",
  appId: "1:1073929881472:web:9c461f8bad014251ad2365",
  measurementId: "G-NFL63QRQ8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;