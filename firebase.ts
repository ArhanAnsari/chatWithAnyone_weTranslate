import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyCqNAZyYLtdC7zUN_6cQ_fZUo9P3clniF0",
    authDomain: "chatwithanyone-translator-app.firebaseapp.com",
    projectId: "chatwithanyone-translator-app",
    storageBucket: "chatwithanyone-translator-app.appspot.com",
    messagingSenderId: "561605274666",
    appId: "1:561605274666:web:b8b0e5dfebdba8cdee2753"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };