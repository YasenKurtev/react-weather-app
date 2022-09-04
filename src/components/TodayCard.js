import { useEffect, useState } from "react";
import useFetchDailyWeather from "../hooks/useFetchDailyWeather";
import { StyledTodayCard } from "./styles/TodayCard.styled";
import { MAIN_URL, WEATHER_ACCESS_KEY } from "../api/api";

let TodayCard = ({ data }) => {
    return (
        <StyledTodayCard>
            <img src="/images/1163661.png" alt="logo"></img>

            <div className="weather-info">
                <h1>{data.name}</h1>
                <p className="temp">{Math.round(data.main.temp)}°</p>
                <p className="condition">{data.weather[0].main}</p>
            </div>
            <div className="low-high">
                <p>L: {Math.round(data.coord.lat)}</p>
                <p>H: {Math.round(data.coord.lon)}</p>
            </div>
        </StyledTodayCard>
    )
}

export default TodayCard