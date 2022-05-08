import * as Types from "./types";

export const fetchDataFromLocalStorage = () => {
    const json: string = localStorage.getItem("react-budgeting") || "[]";
    return JSON.parse(json) || [];
};

export const saveToLocalStorage = (items: Types.Movement[]) => {
    const json: void = localStorage.setItem(
        "react-budgeting",
        JSON.stringify(items)
    );
    return json;
};
