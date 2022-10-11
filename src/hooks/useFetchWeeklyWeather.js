import { useEffect, useState } from "react";
import { MAIN_URL, WEATHER_ACCESS_KEY } from "../api/api";

export default function useFetchWeeklyWeather(cityName, lat, lon) {
    let [weeklyData, setweeklyData] = useState({});
    let [weeklyError, setError] = useState(false);
    let [isLoadingWeekly, setLoading] = useState(true);

    useEffect(() => {
        //Fetch weather by city name
        if (cityName !== null) {
            fetch(`${MAIN_URL}/forecast?q=${cityName}&appid=${WEATHER_ACCESS_KEY}`)
                .then(res => {
                    if (res.ok) {
                        setError(false);
                        return res.json();
                    }
                    //If fetch failed set error state to true
                    setError(true);
                })
                .then(result => {
                    //Set loading time for 1 second
                    setLoading(true);
                    setTimeout(() => {
                        setweeklyData(state => state = result);
                        setLoading(false);
                    }, 1000);
                })
                .catch((error) => {
                    console.log(error);
                });
            //Fetch weather by coordinates
        } else {
            fetch(`${MAIN_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_ACCESS_KEY}`)
                .then(res => {
                    if (res.ok) {
                        setError(false);
                        return res.json();
                    }
                    //If fetch failed set error state to true
                    setError(true);
                })
                .then(result => {
                    //Set loading time for 1 second
                    setLoading(true);
                    setTimeout(() => {
                        setweeklyData(state => state = result);
                        setLoading(false);
                    }, 1000);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [cityName, lat, lon]);

    return [weeklyData, isLoadingWeekly, weeklyError];
}