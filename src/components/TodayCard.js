import { useContext, useEffect, useState } from "react";
import useFetchDailyWeather from "../hooks/useFetchDailyWeather";
import { StyledTodayCard } from "./styles/TodayCard.styled";
import { MAIN_URL, WEATHER_ACCESS_KEY } from "../api/api";
import { SettingsContext } from "./contexts/settingsContext";

let TodayCard = ({ dailyData }) => {
    let { defaultCity, setDefaultCity } = useContext(SettingsContext);

    let addDefaultCity = () => {
        localStorage.setItem('defaultCity', dailyData.name);
        setDefaultCity(state => state = dailyData.name)
    }

    let removeDefaultCity = () => {
        setDefaultCity(state => state = 'Plovdiv');
        localStorage.removeItem('defaultCity');
    }

    return (
        <StyledTodayCard>
            <img src="/images/1163661.png" alt="logo"></img>

            <div className="weather-info">
                <h1>{dailyData.name}</h1>
                <p className="temp">{Math.round(dailyData.main.temp)}°</p>
                <p className="condition">{dailyData.weather[0].main}</p>
            </div>
            <div className="low-high">
                <p>L: {Math.round(dailyData.coord.lat)}</p>
                <p>H: {Math.round(dailyData.coord.lon)}</p>
            </div>
            {defaultCity === dailyData.name
                ? <div className="default-city-div">
                    <i className="fa-solid fa-house"></i>
                    <p className="default-city">This is your default city</p>
                </div>
                : <button className="default-city-btn" onClick={addDefaultCity}>Set as default city</button>}
        </StyledTodayCard>
    )
}

export default TodayCard