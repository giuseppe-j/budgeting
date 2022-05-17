export const getDate = (currentDate : Date, alpha: number) => {
    const date = new Date(currentDate.getTime());
    date.setMonth(date.getMonth() + alpha);
    return date;
};

export const isCurrentYear = (date: Date) => {
    return date.getFullYear() === new Date().getFullYear();
};

