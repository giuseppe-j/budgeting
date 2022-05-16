import { useEffect, useState } from "react";
import * as Types from "../shared/types";
import * as Constants from "../shared/constants";
import Moment from "moment";

type Props = {
    movements: Types.Movement[];
    currentDate: Date;
};

export default function Balance(props: Props) {
    const formatCurrentDate = Moment(props.currentDate).format("MM-YYYY");
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        const filterMovements = props.movements.filter(
            (movement: Types.Movement) => {
                const formatDate = Moment(movement.date).format("MM-YYYY");
                return formatDate === formatCurrentDate;
            }
        );
        const sum = filterMovements.reduce(
            (acc: number, curr: Types.Movement) => {
                return curr.type === Constants.EXPENSE
                    ? acc - curr.amount
                    : acc + curr.amount;
            },
            0
        );
        setBalance(sum);
    }, [formatCurrentDate, props.movements]);
    return (
        <div className="flex justify-center py-5">
            <span className="capitalize text-3xl text-white">
                {Constants.FORMATTER.format(balance)}
            </span>
        </div>
    );
}
