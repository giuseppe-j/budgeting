import * as Constants from "../shared/constants";

type Props = {
    setShowModal: (value: boolean) => void;
    setMovementType: (value: string) => void;
};

export default function AddButtons(props: Props) {
    return (
        <div className="px-4 py-5 mx-auto flex flex-wrap items-center justify-center">
            <button
                className="inline-flex items-center px-3 py-3 border-2 border-teal-600 hover:bg-teal-200 text-white text-sm font-medium rounded-full"
                onClick={() => {
                    props.setShowModal(true);
                    props.setMovementType(Constants.INCOME);
                }}
            >
                <svg className="w-4 h-4 fill-teal-600" viewBox="0 0 20 20">
                    <path
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                    ></path>
                </svg>
            </button>
            <button
                className="inline-flex items-center px-3 py-3 ml-3 border-2 border-rose-600 hover:bg-rose-200 text-white text-sm font-medium rounded-full"
                onClick={() => {
                    props.setShowModal(true);
                    props.setMovementType(Constants.EXPENSE);
                }}
            >
                <svg className="h-4 w-4 fill-rose-600" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
}
