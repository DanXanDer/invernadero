// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX7aWPtTJpIhDUNnQB2fyf3jW7SeS8c60",
  authDomain: "invernadero-bf80c.firebaseapp.com",
  databaseURL: "https://invernadero-bf80c-default-rtdb.firebaseio.com",
  projectId: "invernadero-bf80c",
  storageBucket: "invernadero-bf80c.appspot.com",
  messagingSenderId: "819690531540",
  appId: "1:819690531540:web:000de2985f1fb9edd06941",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);