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
        <div className="flex justify-between">
            <div className="flex-1">
                <button className="capitalize" onClick={() => getCurrent(-1)}>
                    {previous.toLocaleString("default", {
                        month: "long",
                        year: isCurrentYear(previous) ? undefined : "numeric",
                    })}
                </button>
            </div>
            <div className="flex-1 text-center">
                <span className="capitalize">
                    {current.toLocaleString("default", {
                        month: "long",
                        year: isCurrentYear(current) ? undefined : "numeric",
                    })}
                </span>
            </div>
            <div className="flex-1 text-right">
                <button
                    className="capitalize disabled:opacity-50"
                    onClick={() => getCurrent(1)}
                    disabled={next >= new Date()}
                >
                    {next.toLocaleString("default", {
                        month: "long",
                        year: isCurrentYear(next) ? undefined : "numeric",
                    })}
                </button>
            </div>
        </div>
    );
}
