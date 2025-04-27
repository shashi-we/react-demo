// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACsWFRcDJkh3BFWU5hspSRSSn3-uSadqw",
  authDomain: "netflixgpt-4b15c.firebaseapp.com",
  projectId: "netflixgpt-4b15c",
  storageBucket: "netflixgpt-4b15c.firebasestorage.app",
  messagingSenderId: "364534653572",
  appId: "1:364534653572:web:e677ccbde8fc1b50b8d8d1",
  measurementId: "G-9PTNDRQP2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
