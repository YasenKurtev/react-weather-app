import { useEffect, useState } from "react";
import { MAIN_URL, WEATHER_ACCESS_KEY } from "../api/api";

export default function useFetchCoordinatesWeather(lat, lon) {
    let [fetchedData, setFetchedData] = useState({});
    let [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${MAIN_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_ACCESS_KEY}`)
            .then(res => res.json())
            .then(result => {
                setTimeout(() => {
                    setFetchedData(state => state = result);
                    setLoading(false);
                }, 1000);
            });
    }, [])

    return [fetchedData, isLoading];
}