import dayjs from 'dayjs';

export const formatMMYYYY = (date: Date) => dayjs(date).format("MM-YYYY")
export const formatDDMMYYYY = (date: Date) => dayjs(date).format("DD-MM-YYYY")

export const getDate = (currentDate : Date, alpha: number) => {
    return dayjs(currentDate).add(alpha, 'months').toDate();
};

export const isCurrentYear = (date: Date) => {
    console.log(date)
    console.log(new Date())
    return date.getFullYear() === new Date().getFullYear();
};

