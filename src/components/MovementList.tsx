import * as Types from "../shared/types";
import * as Constants from "../shared/constants";

import Moment from "moment";

type Props = {
    movements: Types.Movement[];
};

export default function MovementList(props: Props) {
    return (
        <div className="px-10 py-0 pb-5 shadow-lg text-gray-700">
            {props.movements.map((movement: Types.Movement) => {
                const formatDate = Moment(movement.date).format("DD-MM-YYYY");
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
                                {Constants.FORMATTER.format(movement.amount)}
                            </p>
                        </div>
                        <hr className="my-6 border-gray-300" />
                    </div>
                );
            })}
        </div>
    );
}
