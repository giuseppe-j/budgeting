import { Controller, useForm } from "react-hook-form";

import * as Types from "../shared/types";
import * as Constants from "../shared/constants";
import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";

interface Props {
    movementType: string;
    setMovementType: (value: string) => void;
    setShowModal: (value: boolean) => void;
    handleAddMovement: (movement: Types.Movement) => void;
    currentDate: Date;
}

export default function AddMovement({
    movementType,
    setMovementType,
    setShowModal,
    handleAddMovement,
    currentDate,
}: Props) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        control,
    } = useForm<Types.Movement>();

    const [date, setDate] = useState(currentDate);

    useEffect(() => {
        setValue("type", movementType);
    }, [movementType, setValue]);

    useEffect(() => {
        setDate(currentDate);
    }, [currentDate]);

    const onSubmit = handleSubmit((movement) => handleAddMovement(movement));

    const handleChange = (
        date: Date,
        field: { onChange: (value: any) => void }
    ) => {
        field.onChange(date);
        setDate(date);
    };

    return (
        <div>
            <div
                className="fixed z-10 inset-0 overflow-y-auto"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                        aria-hidden="true"
                    ></div>

                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="w-full">
                                <form onSubmit={onSubmit}>
                                    <div className="mb-4">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="description"
                                        >
                                            Description
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                            type="text"
                                            {...register("description", {
                                                required: true,
                                            })}
                                        />
                                        {errors.description && (
                                            <p className="text-xs text-red-700">
                                                Description is required
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="type"
                                        >
                                            Type
                                        </label>
                                        <div className="relative">
                                            <select
                                                className={`block appearance-none w-full capitalize ${
                                                    movementType ===
                                                    Constants.INCOME
                                                        ? "bg-teal-200"
                                                        : "bg-rose-200"
                                                } border border-gray-200 text-gray-700 py-3 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                                value={movementType}
                                                {...register("type")}
                                                onChange={(e) =>
                                                    setMovementType(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option
                                                    value={Constants.INCOME}
                                                >
                                                    {Constants.INCOME}
                                                </option>
                                                <option
                                                    value={Constants.EXPENSE}
                                                >
                                                    {Constants.EXPENSE}
                                                </option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="amount"
                                        >
                                            Amount
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                            type="number"
                                            step="0.01"
                                            {...register("amount", {
                                                required: true,
                                                valueAsNumber: true,
                                            })}
                                        />
                                        {errors.amount && (
                                            <p className="text-xs text-red-700">
                                                Amount is required
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="date"
                                        >
                                            Date
                                        </label>
                                        <Controller
                                            control={control}
                                            name="date"
                                            render={({ field }) => (
                                                <DatePicker
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                                    {...register("date")}
                                                    onChange={(date: Date) =>
                                                        handleChange(
                                                            date,
                                                            field
                                                        )
                                                    }
                                                    minDate={
                                                        new Date(
                                                            currentDate.getFullYear(),
                                                            currentDate.getMonth(),
                                                            1
                                                        )
                                                    }
                                                    maxDate={
                                                        new Date(
                                                            currentDate.getFullYear(),
                                                            currentDate.getMonth() +
                                                                1,
                                                            0
                                                        )
                                                    }
                                                    value={date}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => setShowModal(false)}
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
