import { useEffect, useState } from "react";
import { MAIN_URL, WEATHER_ACCESS_KEY } from "../api/api";

export default function useFetchDailyWeather(cityName, lat, lon) {
    let [dailyData, setDailyData] = useState({});
    let [isLoadingDaily, setLoading] = useState(true);

    useEffect(() => {
        if (cityName !== null) {
            fetch(`${MAIN_URL}/weather?q=${cityName}&appid=${WEATHER_ACCESS_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setLoading(true);
                    setTimeout(() => {
                        setDailyData(state => state = result);
                        setLoading(false);
                    }, 1000);
                });
        } else {
            fetch(`${MAIN_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_ACCESS_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setLoading(true);
                    setTimeout(() => {
                        setDailyData(state => state = result);
                        setLoading(false);
                    }, 1000);
                });
        }
    }, [cityName, lat, lon])

    return [dailyData, isLoadingDaily];
}