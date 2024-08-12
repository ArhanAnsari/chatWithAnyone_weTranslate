import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
      apiKey: "AIzaSyD4bUzzqAWDq3rZOm6Hb-JUiPCGKxoljmo",
      authDomain: "chatwithanyone-9c3a4.firebaseapp.com",
      projectId: "chatwithanyone-9c3a4",
      storageBucket: "chatwithanyone-9c3a4.appspot.com",
      messagingSenderId: "655206719484",
      appId: "1:655206719484:web:7700f0d43f5b13ace31c79",
      measurementId: "G-EKWB0B5YKN"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
