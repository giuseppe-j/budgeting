import * as Types from "../shared/types";
import * as Constants from "../shared/constants";

import { formatDDMMYYYY, formatMMYYYY } from "../utils/date";

type Props = {
    movements: Types.Movement[];
    currentDate: Date;
};

export default function MovementList(props: Props) {
    const formatCurrentDate = formatMMYYYY(props.currentDate);
    return (
        <div className="px-10 py-0 pb-5 shadow-lg text-gray-700">
            {props.movements
                .filter((movement: Types.Movement) => {
                    const formatDate = formatMMYYYY(movement.date);
                    return formatDate === formatCurrentDate;
                })
                .map((movement: Types.Movement) => {
                    const formatDate = formatDDMMYYYY(movement.date);
                    return (
                        <div key={movement.id}>
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-semibold">
                                        {movement.description}
                                    </p>
                                    <span className="text-xs text-gray-500 font-semibold">
                                        {formatDate}
                                    </span>
                                </div>
                                <p
                                    className={
                                        movement.type === Constants.EXPENSE
                                            ? "font-semibold text-rose-600"
                                            : "font-semibold text-teal-600"
                                    }
                                >
                                    {Constants.FORMATTER.format(
                                        movement.amount
                                    )}
                                </p>
                            </div>
                            <hr className="my-6 border-gray-300" />
                        </div>
                    );
                })}
        </div>
    );
}
