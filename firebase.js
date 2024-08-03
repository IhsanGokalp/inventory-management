// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh31QDu3b2KaJwugDFNpE1aEaHrJ50re8",
  authDomain: "inventory-management-app-9baf4.firebaseapp.com",
  projectId: "inventory-management-app-9baf4",
  storageBucket: "inventory-management-app-9baf4.appspot.com",
  messagingSenderId: "41683270889",
  appId: "1:41683270889:web:0e6d6329129de0f58dc478",
  measurementId: "G-EBH6V9P0KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };