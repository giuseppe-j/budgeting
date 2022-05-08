import * as Types from "../shared/types";

type Props = {
    movements: Types.Movement[];
};

export default function MovementList(props: Props) {
    return (
        <div className="p-10 shadow-lg text-gray-700">
            {props.movements.map((movement: Types.Movement) => {
                return (
                    <div key={movement.id}>
                        <div className="flex justify-between">
                            <p>{movement.description}</p>
                            <p>{movement.amount}</p>
                        </div>
                        <hr className="my-6 border-gray-300" />
                    </div>
                );
            })}
        </div>
    );
}
