import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "budgeting-app-6f390.firebaseapp.com",
    projectId: "budgeting-app-6f390",
    storageBucket: "budgeting-app-6f390.appspot.com",
    messagingSenderId: "772618059676",
    appId: "1:772618059676:web:02f76a36a879bc6fd21259",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
