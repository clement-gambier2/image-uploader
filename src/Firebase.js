// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdtbjwBKO2TB88wYOimugKq4-Yrk5C4yQ",
  authDomain: "imageuploader-d71de.firebaseapp.com",
  projectId: "imageuploader-d71de",
  storageBucket: "imageuploader-d71de.appspot.com",
  messagingSenderId: "554864374489",
  appId: "1:554864374489:web:555f56fd3c15e3abe104c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);