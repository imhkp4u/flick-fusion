// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV817OjX2ycDJfgF7IoFgGg9PLuScQcG0",
  authDomain: "netflix-gpt-2c4a4.firebaseapp.com",
  projectId: "netflix-gpt-2c4a4",
  storageBucket: "netflix-gpt-2c4a4.appspot.com",
  messagingSenderId: "505159017005",
  appId: "1:505159017005:web:cee4c7aa571fba70188ea4",
  measurementId: "G-THN8X9DHT5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
