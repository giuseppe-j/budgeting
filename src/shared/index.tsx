import * as Types from "./types";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const fetchDataFromDB = async () => {
    const snapshot = await getDocs(collection(db, "movements"));
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
