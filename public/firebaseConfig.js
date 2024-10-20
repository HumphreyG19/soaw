// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration details
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyDoEGzMn78oA2Vj6ekwvY1KIN8e8bLH2E0",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "soaw-app.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "soaw-app",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "soaw-app.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "405556551631",
  appId: process.env.FIREBASE_APP_ID || "1:405556551631:web:19f15d80c6a846d27dfcba"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
