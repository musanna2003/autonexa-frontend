// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvEa29qb1-h3be3C0e4_ZvqBUAhsLTSo8",
  authDomain: "ph-assignment-11-56f1e.firebaseapp.com",
  projectId: "ph-assignment-11-56f1e",
  storageBucket: "ph-assignment-11-56f1e.firebasestorage.app",
  messagingSenderId: "830470315538",
  appId: "1:830470315538:web:e7559d2f8ce0501bf402cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);