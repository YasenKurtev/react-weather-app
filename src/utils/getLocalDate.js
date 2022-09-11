import { days, months } from "./daysOfWeek";

export default function getLocalDate(offset) {
    let date = new Date();
    let localTime = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let city = utc + (1000 * +offset);
    let result = new Date(city);
    let dayOfWeek = days[result.getDay() - 1];
    let dayOfMonth = result.getDate();
    let month = months[result.getMonth()];
    let year = result.getFullYear();
    let formatResult = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;

    return formatResult;
}