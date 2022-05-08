import AddButtons from "./components/AddButtons";
import Navbar from "./components/Navbar";
import Months from "./components/Months";
import MovementList from "./components/MovementList";
import AddMovement from "./components/AddMovement";
import Balance from "./components/Balance";
import { fetchDataFromLocalStorage, saveToLocalStorage } from "./shared";
import { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

import * as Constants from "./shared/constants";
import * as Types from "./shared/types";

export default function App() {
    const [movements, setMovements] = useState<Types.Movement[]>([]);
    const [movementType, setMovementType] = useState<string>(Constants.INCOME);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const fetchFromLocalStorage = async () => {
            const movements = fetchDataFromLocalStorage();
            setMovements(movements);
            console.log(movements);
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
        <div className="h-screen bg-sky-100">
            <div className="bg-gradient-to-t from-sky-500 to-cyan-400">
                <Navbar />
                <Months />
                <Balance />
            </div>
            <div className="container mx-auto">
                <div className="w-full bg-white sm:w-9/12 lg:w-8/12 mx-auto relative">
                    <AddButtons
                        setShowModal={setShowModal}
                        setMovementType={setMovementType}
                    />
                    <MovementList movements={movements} />
                </div>
            </div>
            <AddMovement
                showModal={showModal}
                setShowModal={setShowModal}
                movementType={movementType}
                setMovementType={setMovementType}
                handleAddMovement={addMovement}
            />
        </div>
    );
}
