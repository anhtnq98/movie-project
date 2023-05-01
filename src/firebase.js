// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXAQX8Kz6rf7jq_1vQRdHfwf_ByKrxves",
  authDomain: "movies-website-b4f83.firebaseapp.com",
  projectId: "movies-website-b4f83",
  storageBucket: "movies-website-b4f83.appspot.com",
  messagingSenderId: "530655975716",
  appId: "1:530655975716:web:d8a8c93d4cc217761efbb1",
  measurementId: "G-CDD66JPRDT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
