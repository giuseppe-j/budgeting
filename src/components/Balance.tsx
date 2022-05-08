import { useEffect, useState } from "react";
import * as Types from "../shared/types";
import * as Constants from "../shared/constants";

type Props = {
    movements: Types.Movement[];
};

export default function Balance(props: Props) {
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        const sum = props.movements.reduce(
            (acc: number, curr: Types.Movement) => {
                return curr.type === Constants.EXPENSE
                    ? acc - curr.amount
                    : acc + curr.amount;
            },
            0
        );
        setBalance(sum);
    }, [props.movements]);
    return (
        <div className="flex justify-center py-5">
            <span className="capitalize text-3xl text-white">
                {Constants.FORMATTER.format(balance)}
            </span>
        </div>
    );
}
