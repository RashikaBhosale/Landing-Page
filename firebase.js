// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Yc9UUJr2TFndmrvgFo9PPZujbt6RfWM",
  authDomain: "travel-website-4749c.firebaseapp.com",
  projectId: "travel-website-4749c",
  storageBucket: "travel-website-4749c.appspot.com",
  messagingSenderId: "934896956460",
  appId: "1:934896956460:web:e693899e218e65b9a94d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);