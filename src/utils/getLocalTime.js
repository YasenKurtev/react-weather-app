export default function getLocalTime(offset) {
    let date = new Date();
    let localTime = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let city = utc + (1000 * -offset);
    let result = new Date(city);
    let formatResult = result.getHours() + ":" + result.getMinutes();

    return formatResult;
}