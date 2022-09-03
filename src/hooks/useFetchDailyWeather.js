import { useEffect, useState } from "react";
import { MAIN_URL, WEATHER_ACCESS_KEY } from "../api/api";

export default function useFetchDailyWeather(cityName) {
    let [data, setData] = useState({});
    let [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${MAIN_URL}/weather?q=${cityName}&appid=${WEATHER_ACCESS_KEY}&units=metric`)
            .then(res => res.json())
            .then(result => {
                setTimeout(() => {
                    setData(state => state = result);
                    setLoading(false);
                }, 3000);
            });
    }, [])

    return [data, isLoading];
}