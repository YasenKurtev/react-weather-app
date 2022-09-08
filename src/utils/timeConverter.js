export default function timeConverter(unix, offset) {
    let date = new Date((unix + offset - 10800) * 1000);
    let hours = date.getHours() + "";
    console.log(hours);
    if (hours.length === 1) {
        hours = "0" + hours;
    }
    let minutes = date.getMinutes() + "";
    if (minutes.length === 1) {
        minutes = "0" + minutes;
    }
    let time = hours + ":" + minutes;

    return time;
}