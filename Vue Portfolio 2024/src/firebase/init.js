// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkGKOFXREP5r-TzjB2KrtEME68YvZDS28",
  authDomain: "furd-portfolio-19th.firebaseapp.com",
  projectId: "furd-portfolio-19th",
  storageBucket: "furd-portfolio-19th.appspot.com",
  messagingSenderId: "524097206565",
  appId: "1:524097206565:web:cf2d3a5d8b02d2df2a02cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
export default db;

// Guide: https://youtu.be/bAsCDnOyzOk?si=F-XQPmX15neKAC5Z