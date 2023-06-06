// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH8GBHRFM0EkCnA7e0oHAI0GSLp5RWl9I",
  authDomain: "instruplay-live.firebaseapp.com",
  projectId: "instruplay-live",
  storageBucket: "instruplay-live.appspot.com",
  messagingSenderId: "401350529473",
  appId: "1:401350529473:web:19d7d855583ac75e2f1f40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;