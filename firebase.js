// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4_v5-VYxFfZRFiaOFtbFTWnzHuethfEU",
  authDomain: "sosa-75f3d.firebaseapp.com",
  projectId: "sosa-75f3d",
  storageBucket: "sosa-75f3d.appspot.com",
  messagingSenderId: "908356547933",
  appId: "1:908356547933:web:cc4a38fe778f59ac64e4b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
