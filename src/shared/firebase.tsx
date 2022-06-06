import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBT0LXDLq8Tplfb8gA0TraTFYogvAJjcB4",
    authDomain: "budgeting-app-6f390.firebaseapp.com",
    projectId: "budgeting-app-6f390",
    storageBucket: "budgeting-app-6f390.appspot.com",
    messagingSenderId: "772618059676",
    appId: "1:772618059676:web:02f76a36a879bc6fd21259",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
