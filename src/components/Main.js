import { StyledMain } from "./styles/Main.styled"
import TodayCard from "./TodayCard"
import Map from "./Map"
import MiniCard from "./MiniCard"
import Details from "./Details"
import DailyCard from "./DailyCard"
import useFetchDailyWeather from "../hooks/useFetchDailyWeather"
import useFetchWeeklyWeather from "../hooks/useFetchWeeklyWeather"
import { StyledLoading } from "./styles/Loading.styled"
import { useContext, useState } from "react"
import { SettingsContext } from "./contexts/settingsContext"

let Main = ({ coords }) => {
    let { defaultCity } = useContext(SettingsContext);

    if (coords.lat !== 0 && coords.lon !== 0) {
        defaultCity = null;
    }

    let [dailyData, isLoading] = useFetchDailyWeather(defaultCity, coords.lat, coords.lon);
    let [weeklyData] = useFetchWeeklyWeather(defaultCity, coords.lat, coords.lon);

    console.log(weeklyData);

    if (isLoading) {
        return (
            <StyledLoading>
                <div className="lds-dual-ring">

                </div>
                <p>Fetching weather data...</p>
            </StyledLoading>
        )
    }

    return (
        <StyledMain>
            <section className="today-map">
                <TodayCard dailyData={dailyData}></TodayCard>
                <Map coordinates={dailyData.coord}></Map>
            </section>
            <section className="weather-details">
                <Details dailyData={dailyData}></Details>
            </section>
            <section className="daily-forecast">
                <p className="daily-title">Daily forecast</p>
                <div className="daily-container">
                    <DailyCard></DailyCard>
                    <DailyCard></DailyCard>
                    <DailyCard></DailyCard>
                    <DailyCard></DailyCard>
                    <DailyCard></DailyCard>
                    <DailyCard></DailyCard>
                    <DailyCard></DailyCard>
                    <DailyCard></DailyCard>
                    <DailyCard></DailyCard>
                    <DailyCard></DailyCard>
                    <DailyCard></DailyCard>
                    <DailyCard></DailyCard>
                </div>
            </section>
            <section className="weekly-forecast">
                <p className="weekly-title">7-day forecast</p>
                <div className="weekly-container">
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                </div>
            </section>
        </StyledMain>
    )
}

export default Main