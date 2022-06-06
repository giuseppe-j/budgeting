import {
    INVESTING,
    SALARY,
    SHOPPING,
    TRANSPORTATION,
    UTILITIES,
    WELLNESS,
} from "../shared/constants";

export const categories = [
    { key: 1, name: SHOPPING },
    { key: 2, name: TRANSPORTATION },
    { key: 3, name: WELLNESS },
    { key: 4, name: UTILITIES },
    { key: 5, name: INVESTING },
    { key: 6, name: SALARY },
];

export const getCategoryKey = (category: string): number => {
    return categories.find((cat) => cat.name === category)!.key;
};
