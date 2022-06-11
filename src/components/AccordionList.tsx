import { Fragment, useEffect, useState } from "react";
import * as Types from "../shared/types";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import MovementList from "./MovementList";
import { getIcon } from "../utils/categoryIcon";
import { formatMMYYYY } from "../utils/date";

type AccordionListProps = {
    categories: Array<Object>;
    movements: Types.Movement[];
    currentDate: Date;
    selectedCategory: number;
};

export default function AccordionList(props: AccordionListProps) {
    const { categories, movements, currentDate, selectedCategory } = props;

    const [open, setOpen] = useState(0);

    useEffect(() => {
        setOpen(selectedCategory);
    }, [selectedCategory, currentDate]);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };

    const hasMovement = (category: string) => {
        return movements.some((m) => {
            return (
                m.category === category &&
                formatMMYYYY(m.date) === formatMMYYYY(currentDate)
            );
        });
    };

    return (
        <div className="px-10 py-0 pb-5 shadow-lg text-gray-700">
            <Fragment>
                {categories.map(
                    (category: any) =>
                        hasMovement(category.name) && (
                            <Accordion
                                key={category.key}
                                open={open === category.key}
                                onClick={() => handleOpen(category.key)}
                                className="w-full py-2"
                            >
                                <AccordionHeader>
                                    <div className="flex items-center">
                                        {getIcon(category.name)}
                                        <p className="font-semibold text-base text-gray-700 capitalize ml-4">
                                            {category.name}
                                        </p>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody className="py-2">
                                    <MovementList
                                        movements={movements}
                                        currentDate={currentDate}
                                        category={category.name}
                                    />
                                </AccordionBody>
                            </Accordion>
                        )
                )}
            </Fragment>
        </div>
    );
}
