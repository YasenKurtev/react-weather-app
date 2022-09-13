import { useEffect, useState } from "react";
import { MAIN_URL, WEATHER_ACCESS_KEY } from "../api/api";

export default function useFetchWeeklyWeather(cityName, lat, lon) {
    let [weeklyData, setweeklyData] = useState({});
    let [weeklyError, setError] = useState(false);
    let [isLoadingWeekly, setLoading] = useState(true);

    useEffect(() => {
        if (cityName !== null) {
            fetch(`${MAIN_URL}/forecast?q=${cityName}&appid=${WEATHER_ACCESS_KEY}`)
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
                        setweeklyData(state => state = result);
                        setLoading(false);
                    }, 1000);
                });
        } else {
            fetch(`${MAIN_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_ACCESS_KEY}`)
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
                        setweeklyData(state => state = result);
                        setLoading(false);
                    }, 1000);
                });
        }
    }, [cityName, lat, lon])

    return [weeklyData, isLoadingWeekly, weeklyError];
}