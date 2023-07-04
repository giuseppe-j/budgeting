import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../shared/firebase";
import { User } from "firebase/auth";
import Navbar from "./Navbar";
import { categories } from "../utils/categories";
import * as Types from "../shared/types";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { fetchDataFromDB } from "../shared";
ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
    user: User;
};

export default function Reports({ user }: Props) {
    const [movements, setMovements] = useState<Types.Movement[]>([]);

    useEffect(() => {
        const fetchFromDB = async () => {
            const movements = await fetchDataFromDB(user!.uid);
            setMovements(movements);
        };
        fetchFromDB();
    }, [user, user?.uid]);

    const getDatasetsData = () => {
        return categories.map((cat) => {
            return movements
                .filter((mov) => mov.category === cat.name)
                .map((catMov) => catMov.amount)
                .reduce(
                    (previousValue, currentValue) =>
                        previousValue + currentValue,
                    0
                );
        });
    };

    const getChartdata = () => {
        return {
            labels: categories.map((cat) => cat.name),
            datasets: [
                {
                    label: "# of Votes",
                    data: getDatasetsData(),
                    backgroundColor: categories.map((cat) => cat.bgcolor),
                    borderColor: categories.map((cat) => cat.color),
                    borderWidth: 1,
                },
            ],
        };
    };

    return (
        <div className="h-screen bg-sky-100 overflow-auto">
            <div className="bg-gradient-to-t from-sky-500 to-cyan-400">
                <Navbar />
            </div>
            <div className="container mx-auto flex justify-center">
                <div className="w-1/4">
                    <Doughnut data={getChartdata()} />
                </div>
            </div>
        </div>
    );
}
