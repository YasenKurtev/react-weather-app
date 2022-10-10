import { useEffect, useState } from "react";
import { MAIN_URL, WEATHER_ACCESS_KEY } from "../api/api";

export default function useFetchDailyWeather(cityName, lat, lon) {
    let [dailyData, setDailyData] = useState({});
    let [dailyError, setError] = useState(false);
    let [isLoadingDaily, setLoading] = useState(true);

    useEffect(() => {
        if (cityName !== null) {
            fetch(`${MAIN_URL}/weather?q=${cityName}&appid=${WEATHER_ACCESS_KEY}`)
                .then(res => {
                    if (res.ok) {
                        setError(false);
                        return res.json();
                    }
                    setError(true);
                })
                .then(result => {
                    setLoading(true);
                    setTimeout(() => {
                        setDailyData(state => state = result);
                        setLoading(false);
                    }, 1000);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            fetch(`${MAIN_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_ACCESS_KEY}`)
                .then(res => {
                    if (res.ok) {
                        setError(false);
                        return res.json();
                    }
                    setError(true);
                })
                .then(result => {
                    setLoading(true);
                    setTimeout(() => {
                        setDailyData(state => state = result);
                        setLoading(false);
                    }, 1000);
                });
        }
    }, [cityName, lat, lon])

    return [dailyData, isLoadingDaily, dailyError];
}