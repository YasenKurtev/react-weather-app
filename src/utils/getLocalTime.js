export default function getLocalTime(offset) {
    let date = new Date();
    let localTime = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let city = utc + (1000 * +offset);
    let result = new Date(city);
    let hours = result.getHours();
    let minutes = result.getMinutes();

    if (minutes <= 9) {
        minutes = "0" + minutes;
    }

    if (hours <= 9) {
        hours = "0" + hours;
    }

    let formatResult = hours + ":" + minutes;

    return formatResult;
}