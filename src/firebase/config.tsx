// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBhGou_vmAgCmWI74okVwW5XZqfUm2LMk",
  authDomain: "let-s-task.firebaseapp.com",
  projectId: "let-s-task",
  storageBucket: "let-s-task.appspot.com",
  messagingSenderId: "256223478173",
  appId: "1:256223478173:web:a1c8176224be311310ef74",
  measurementId: "G-NYMSQTHLKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);