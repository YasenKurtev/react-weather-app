import { useEffect, useState } from "react";
import { MAIN_URL, WEATHER_ACCESS_KEY } from "../api/api";

export default function useFetchDailyWeather(cityName, lat, lon) {
    let [fetchData, setFetchData] = useState({});
    let [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (cityName !== null) {
            fetch(`${MAIN_URL}/weather?q=${cityName}&appid=${WEATHER_ACCESS_KEY}&units=metric`)
                .then(res => res.json())
                .then(result => {
                    setLoading(true);
                    setTimeout(() => {
                        setFetchData(state => state = result);
                        setLoading(false);
                    }, 1000);
                });
        } else {
            fetch(`${MAIN_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_ACCESS_KEY}&units=metric`)
                .then(res => res.json())
                .then(result => {
                    setLoading(true);
                    setTimeout(() => {
                        setFetchData(state => state = result);
                        setLoading(false);
                    }, 1000);
                });
        }
    }, [cityName, lat, lon])

    return [fetchData, isLoading];
}