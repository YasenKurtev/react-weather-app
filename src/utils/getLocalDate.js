import { days, months } from "./daysAndMonths";

export default function getLocalDate(offset) {
    let date = new Date();
    let localTime = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let city = utc + (1000 * +offset);
    let result = new Date(city);
    let dayOfWeek = days[result.getDay() - 1];
    let dayOfMonth = result.getDate();
    let month = months[result.getMonth()].slice(0, 3);
    let year = result.getFullYear();
    let formatResult = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;

    return formatResult;
}