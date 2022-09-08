import { useEffect, useState } from "react";

export default function useDate(timezone) {
    let [time, setTime] = useState();

    useEffect(() => {
        let newDate = new Date();
        let localTime = newDate.getTime();
        let localOffset = newDate.getTimezoneOffset() * 60000;
        let utc = localTime + localOffset;
        let currentTime = utc + (1000 * timezone);
        let date = new Date(currentTime);
        setTime(date);
    }, [])

    return time;
}