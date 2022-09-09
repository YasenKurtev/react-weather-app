import { StyledMain } from "./styles/Main.styled"
import TodayCard from "./TodayCard"
import Map from "./Map"
import MiniCard from "./MiniCard"
import Details from "./Details"
import DailyCard from "./DailyCard"
import useFetchDailyWeather from "../hooks/useFetchDailyWeather"
import useFetchWeeklyWeather from "../hooks/useFetchWeeklyWeather"
import { StyledLoading } from "./styles/Loading.styled"
import { useContext, useEffect, useState } from "react"
import { SettingsContext } from "./contexts/settingsContext"
import useDefaultCity from "../hooks/useDefaultCityHook"

let Main = ({ data, setData, units }) => {
    let [defaultCity, changeDefaultCity] = useDefaultCity();
    let city = defaultCity;
    let coords = { lat: 0, lon: 0 };

    if (typeof data === 'string') {
        city = data;
    }

    if (typeof data === 'object') {
        coords = data;
        city = null;
    }

    let [dailyData, isLoadingDaily] = useFetchDailyWeather(city, coords.lat, coords.lon);
    let [weeklyData, isLoadingWeekly] = useFetchWeeklyWeather(city, coords.lat, coords.lon);

    if (isLoadingDaily || isLoadingWeekly) {
        return (
            <StyledLoading>
                <div className="lds-dual-ring">

                </div>
                <p>Fetching weather data...</p>
            </StyledLoading>
        )
    }

    let hoursData = weeklyData.list.slice(1, 10);
    let daysData = weeklyData.list.filter(x => x.dt_txt.split(' ')[1].slice(0, 2) === "12");

    return (
        <StyledMain>
            <section className="today-map">
                <TodayCard dailyData={dailyData} defaultCity={defaultCity} changeDefaultCity={changeDefaultCity} units={units}></TodayCard>
                <Map coordinates={dailyData.coord}></Map>
            </section>
            <section className="weather-details">
                <Details dailyData={dailyData} units={units}></Details>
            </section>
            <section className="daily-forecast">
                <p className="daily-title">24-hour forecast</p>
                <div className="daily-container">
                    {hoursData.map(x => <DailyCard data={x} units={units}></DailyCard>)}
                </div>
            </section>
            <section className="weekly-forecast">
                <p className="weekly-title">5-day forecast</p>
                <div className="weekly-container">
                    {daysData.map(x => <MiniCard data={x} units={units}></MiniCard>)}
                </div>
            </section>
        </StyledMain>
    )
}

export default Main