import { useEffect, useState } from "react";
import useFetchDailyWeather from "../hooks/useFetchDailyWeather";
import { StyledTodayCard } from "./styles/TodayCard.styled";
import { MAIN_URL, WEATHER_ACCESS_KEY } from "../api/api";

let TodayCard = (props) => {
    return (
        <StyledTodayCard>
            <img src="/images/1163661.png" alt="logo"></img>

            <div className="weather-info">
                <h1>{props.data.name}</h1>
                <p className="temp">{props.data.main.temp}°</p>
                <p className="condition">Rain</p>
            </div>
            <div className="low-high">
                <p>L: 30</p>
                <p>H: 30</p>
            </div>
        </StyledTodayCard>
    )
}

export default TodayCard