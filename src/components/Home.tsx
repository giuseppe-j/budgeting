import AddButtons from "./AddButtons";
import Navbar from "./Navbar";
import Months from "./Months";
import AddMovement from "./AddMovement";
import Balance from "./Balance";
import { fetchDataFromDB, saveToDB } from "../shared";
import { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

import * as Types from "../shared/types";
import AccordionList from "./AccordionList";
import { categories, getCategoryKey } from "../utils/categories";
import { User } from "firebase/auth";

type Props = {
    user: User;
};

export default function Home({ user }: Props) {
    const [movements, setMovements] = useState<Types.Movement[]>([]);
    const [movementType, setMovementType] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedCategory, setSelectedCategory] = useState<number>(0);

    useEffect(() => {
        const fetchFromDB = async () => {
            const movements = await fetchDataFromDB();
            const userMovements = movements.filter(
                (movement) => movement.uid === user.uid
            );
            setMovements(userMovements);
        };
        fetchFromDB();
    }, [user.uid]);

    useEffect(() => {
        setSelectedCategory(selectedCategory);
    }, [selectedCategory]);

    const addMovement = (movement: Types.Movement) => {
        const id: string = uuid();
        const uid: string = user.uid;
        const newMovement = { ...movement, id, uid };
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
