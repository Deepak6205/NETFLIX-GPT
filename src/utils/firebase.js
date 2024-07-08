// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7OWH9NLmU3pbi647ExGRT77Og_rJvzmc",
  authDomain: "netflixgpt-a0e21.firebaseapp.com",
  projectId: "netflixgpt-a0e21",
  storageBucket: "netflixgpt-a0e21.appspot.com",
  messagingSenderId: "731034364316",
  appId: "1:731034364316:web:91eec96a317bfe4f058059",
  measurementId: "G-S1RRTSQ0H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();