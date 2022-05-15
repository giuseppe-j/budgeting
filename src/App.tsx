import AddButtons from "./components/AddButtons";
import Navbar from "./components/Navbar";
import Months from "./components/Months";
import MovementList from "./components/MovementList";
import AddMovement from "./components/AddMovement";
import Balance from "./components/Balance";
import { fetchDataFromLocalStorage, saveToLocalStorage } from "./shared";
import { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

import * as Types from "./shared/types";

export default function App() {
    const [movements, setMovements] = useState<Types.Movement[]>([]);
    const [movementType, setMovementType] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    useEffect(() => {
        const fetchFromLocalStorage = async () => {
            const movements = fetchDataFromLocalStorage();
            setMovements(movements);
        };
        fetchFromLocalStorage();
    }, []);

    const addMovement = (movement: Types.Movement) => {
        const id: string = uuid();
        const newMovement = { ...movement, id };
        const newMovements = [...movements, newMovement];
        setMovements(newMovements);
        saveToLocalStorage(newMovements);
    };

    return (
        <div className="h-screen bg-sky-100 overflow-auto">
            <div className="bg-gradient-to-t from-sky-500 to-cyan-400">
                <Navbar />
                <Months handleCurrentDate={setCurrentDate} />
                <Balance movements={movements} />
            </div>
            <div className="container mx-auto">
                <div className="w-full bg-white sm:w-9/12 lg:w-8/12 mx-auto">
                    <AddButtons
                        setShowModal={setShowModal}
                        setMovementType={setMovementType}
                    />
                    <MovementList movements={movements} />
                </div>
            </div>
            {showModal && (
                <AddMovement
                    setShowModal={setShowModal}
                    movementType={movementType}
                    setMovementType={setMovementType}
                    handleAddMovement={addMovement}
                    currentDate={currentDate}
                />
            )}
        </div>
    );
}
