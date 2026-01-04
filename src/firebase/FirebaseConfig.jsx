// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtYnuUae8XOEoYICG-gI5SDIj_EZAkmM8",
  authDomain: "buybuddy-cb691.firebaseapp.com",
  projectId: "buybuddy-cb691",
  storageBucket: "buybuddy-cb691.firebasestorage.app",
  messagingSenderId: "813965677133",
  appId: "1:813965677133:web:edce8b23e8d42474650204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;