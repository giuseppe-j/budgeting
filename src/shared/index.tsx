import * as Types from "./types";
import { db } from "./firebase";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";

export const fetchDataFromDB = async (uid: string) => {
    const movementRef = collection(db, "movements");
    const q = query(movementRef, where("uid", "==", uid));
    const snapshot = await getDocs(q);
    const data = snapshot.docs
        .map((doc) => doc.data())
        .map((movement) => {
            return { ...movement, date: movement.date.toDate() };
        });
    return data as Types.Movement[];
};

export const saveToDB = async (movement: Types.Movement) => {
    try {
        await addDoc(collection(db, "movements"), movement);
    } catch (err) {
        alert(err);
    }
};
