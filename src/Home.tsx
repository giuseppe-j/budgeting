import AddButtons from "./components/AddButtons";
import Navbar from "./components/Navbar";
import Months from "./components/Months";
import AddMovement from "./components/AddMovement";
import Balance from "./components/Balance";
import { fetchDataFromDB, saveToDB } from "./shared";
import { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

import * as Types from "./shared/types";
import AccordionList from "./components/AccordionList";
import { categories, getCategoryKey } from "./utils/categories";
export default function Home() {
    const [movements, setMovements] = useState<Types.Movement[]>([]);
    const [movementType, setMovementType] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedCategory, setSelectedCategory] = useState<number>(0);

    useEffect(() => {
        const fetchFromLocalStorage = async () => {
            const movements = await fetchDataFromDB();
            setMovements(movements);
        };
        fetchFromLocalStorage();
    }, []);

    useEffect(() => {
        setSelectedCategory(selectedCategory);
    }, [selectedCategory]);

    const addMovement = (movement: Types.Movement) => {
        const id: string = uuid();
        const newMovement = { ...movement, id };
        const newMovements = [...movements, newMovement];
        setMovements(newMovements);
        saveToDB(newMovement);
        setShowModal(false);
        setSelectedCategory(getCategoryKey(newMovement.category));
    };

    const handleCurrentDate = (date: Date) => {
        setCurrentDate(date);
        setSelectedCategory(0);
    };
    return (
        <div className="h-screen bg-sky-100 overflow-auto">
            <div className="bg-gradient-to-t from-sky-500 to-cyan-400">
                <Navbar />
                <Months handleCurrentDate={handleCurrentDate} />
                <Balance movements={movements} currentDate={currentDate} />
            </div>
            <div className="container mx-auto">
                <div className="w-full bg-white sm:w-9/12 lg:w-8/12 mx-auto">
                    <AddButtons
                        setShowModal={setShowModal}
                        setMovementType={setMovementType}
                    />
                    <AccordionList
                        categories={categories}
                        movements={movements}
                        currentDate={currentDate}
                        selectedCategory={selectedCategory}
                    />
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
