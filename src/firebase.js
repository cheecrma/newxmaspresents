// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getDatabase,
  ref,
  set,
  get,
  increment,
  onValue,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJI4cdxFZ1taQnAAFYEnD-wA4R1FABZVY",
  authDomain: "xmas-edc83.firebaseapp.com",
  projectId: "xmas-edc83",
  storageBucket: "xmas-edc83.firebasestorage.app",
  messagingSenderId: "560408725216",
  appId: "1:560408725216:web:da0cba012eb6df329fb285",
  measurementId: "G-M942EEBNZ8",
  databaseURL: "https://xmas-edc83-default-rtdb.firebaseio.com/", // 추가
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { analytics, database, ref, set, get, increment, onValue };
