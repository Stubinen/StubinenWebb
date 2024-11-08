// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL_iCbDyvp7aPzDYKzovB8n5SccIyXvgw",
  authDomain: "stubinen-98125.firebaseapp.com",
  projectId: "stubinen-98125",
  storageBucket: "stubinen-98125.firebasestorage.app",
  messagingSenderId: "342498024112",
  appId: "1:342498024112:web:387c025e24bacf1e11f975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;