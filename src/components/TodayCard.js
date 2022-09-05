import { useEffect, useState } from "react";
import useFetchDailyWeather from "../hooks/useFetchDailyWeather";
import { StyledTodayCard } from "./styles/TodayCard.styled";
import { MAIN_URL, WEATHER_ACCESS_KEY } from "../api/api";

let TodayCard = ({ dailyData }) => {
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
        </StyledTodayCard>
    )
}

export default TodayCard