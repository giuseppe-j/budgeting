import { useEffect, useState } from "react";

export default function Months() {
    const getPrevious = () => {
        const date = new Date(current.getTime());
        date.setMonth(date.getMonth() - 1);
        return date;
    };

    const getNext = () => {
        const date = new Date(current.getTime());
        date.setMonth(date.getMonth() + 1);
        return date;
    };

    const getCurrent = (alpha: number) => {
        const date = new Date(current.getTime());
        const newDate = new Date(date.setMonth(date.getMonth() + alpha));
        const previousNewDate = new Date(date.setMonth(date.getMonth() - 1));
        const nextNewDate = new Date(date.setMonth(date.getMonth() + 2));
        setCurrent(newDate);
        setPrevious(previousNewDate);
        setNext(nextNewDate);
    };

    const isCurrentYear = (date: Date) => {
        return date.getFullYear() === new Date().getFullYear();
    };

    const [current, setCurrent] = useState(new Date());
    const [previous, setPrevious] = useState(() => getPrevious());
    const [next, setNext] = useState(() => getNext());

    useEffect(() => {
        console.log(current);
    }, [current]);

    return (
        <div className="flex justify-between items-center py-5 px-4">
            <div>
                <button
                    className="capitalize text-white flex items-center"
                    onClick={() => getCurrent(-1)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                        />
                    </svg>
                    <span className="text-xs ml-1">
                        {previous.toLocaleString("default", {
                            month: "long",
                            year: isCurrentYear(previous)
                                ? undefined
                                : "numeric",
                        })}
                    </span>
                </button>
            </div>
            <div className="text-center">
                <span className="capitalize text-xl text-white">
                    {current.toLocaleString("default", {
                        month: "long",
                        year: isCurrentYear(current) ? undefined : "numeric",
                    })}
                </span>
            </div>
            <div className="text-right text-white">
                <button
                    className="capitalize disabled:opacity-50 flex items-center"
                    onClick={() => getCurrent(1)}
                    disabled={next >= new Date()}
                >
                    <span className="text-xs mr-1">
                        {next.toLocaleString("default", {
                            month: "long",
                            year: isCurrentYear(next) ? undefined : "numeric",
                        })}
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
