// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkqcEgqHM4vGZTVZcYW_lKSaz9kag4FmE",
  authDomain: "streamgpt-75c21.firebaseapp.com",
  projectId: "streamgpt-75c21",
  storageBucket: "streamgpt-75c21.appspot.com",
  messagingSenderId: "471130514382",
  appId: "1:471130514382:web:ab4d2fe65a439a5ed5819f",
  measurementId: "G-KH03QG5JGT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
