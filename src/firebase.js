// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAF9JQecucbpCFNlIYtgkV24C5rd2x3mjQ",
  authDomain: "fir-upload-img-ft02.firebaseapp.com",
  projectId: "fir-upload-img-ft02",
  storageBucket: "fir-upload-img-ft02.appspot.com",
  messagingSenderId: "763882008421",
  appId: "1:763882008421:web:079d636d56a6f910d3fb8c",
  measurementId: "G-L4YSE3QGCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
