export function getLocalDateString(date = new Date()) {
    return date.toLocaleDateString("en-CA");
}


export function isDateBefore(date, startDate) {
    return date < startDate;
}


export function isDateAfter(date, endDate) {
    return date > endDate;
}