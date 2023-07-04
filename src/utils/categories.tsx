import {
    INVESTING,
    SALARY,
    SHOPPING,
    TRANSPORTATION,
    UTILITIES,
    WELLNESS,
} from "../shared/constants";

export const categories = [
    {
        key: 1,
        name: SHOPPING,
        color: "yellow",
        bgcolor: "rgb(254 249 195)",
    },
    {
        key: 2,
        name: TRANSPORTATION,
        color: "violet",
        bgcolor: "rgb(221 214 254)",
    },
    {
        key: 3,
        name: WELLNESS,
        color: "red",
        bgcolor: "rgb(254 202 202)",
    },
    {
        key: 4,
        name: UTILITIES,
        color: "blue",
        bgcolor: "rgb(191 219 254)",
    },
    {
        key: 5,
        name: INVESTING,
        color: "orange",
        bgcolor: "rgb(254 215 170)",
    },
    {
        key: 6,
        name: SALARY,
        color: "teal",
        bgcolor: "rgb(153 246 228)",
    },
];

export const getCategoryKey = (category: string): number => {
    return categories.find((cat) => cat.name === category)!.key;
};

export const getCategoryColor = (category: string): string => {
    return categories.find((cat) => cat.name === category)!.color;
};
