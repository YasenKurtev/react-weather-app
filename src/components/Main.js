import { StyledMain } from "./styles/Main.styled"
import TodayWeatherCard from "./TodayWeatherCard"
import Map from "./Map"
import WeeklyWeatherCard from "./WeeklyWeatherCard"
import WeatherDetailsCard from "./WeatherDetailsCard"
import HourlyWeatherCard from "./HourlyWeatherCard"
import { StyledLoading } from "./styles/Loading.styled"
import useDefaultCity from '../hooks/useDefaultCityHook';
import useFetchDailyWeather from "../hooks/useFetchDailyWeather"
import useFetchWeeklyWeather from "../hooks/useFetchWeeklyWeather"
import getLocalTime from "../utils/getLocalTime"
import timeConverter from "../utils/timeConverter"
import getLocalDate from "../utils/getLocalDate"
import Loading from "./Loading"
import FetchError from "./FetchError"
import NotificationModal from "./NotificationModal"
import { useState } from "react"
import MyCitiesModal from "./MyCitiesModal"

let Main = ({ props }) => {
    
    //Get default city
    let [defaultCity, changeDefaultCity] = useDefaultCity();
    let city = defaultCity;
    let coords = { lat: 0, lon: 0 };

    //If there is searched input, set search criteria to the searched input
    if (typeof props.data === 'string') {
        city = props.data;
    }

    //If there is searched location, set search criteria to the searched coordinates
    if (typeof props.data === 'object') {
        coords = props.data;
        city = null;
    }

    //Fetch daily and weekly weather data, depending on search criteria
    let [dailyData, isLoadingDaily, dailyError] = useFetchDailyWeather(city, coords.lat, coords.lon);
    let [weeklyData, isLoadingWeekly, weeklyError] = useFetchWeeklyWeather(city, coords.lat, coords.lon);

    //Display loading spinner
    if (isLoadingDaily || isLoadingWeekly) {
        return (
            <StyledMain>
                <StyledLoading>
                    <Loading></Loading>
                </StyledLoading>
            </StyledMain>
        )
    }

    //Display error message
    if (dailyError || weeklyError) {
        return (
            <StyledMain>
                <NotificationModal error={dailyError} />
                <FetchError></FetchError>
            </StyledMain>
        )
    }

    //Get searched city local time and date
    let localTime = getLocalTime(dailyData.timezone);
    let localDate = getLocalDate(dailyData.timezone);

    let toggleNotification = (type, cityName) => {
        props.setNotification(notification => notification = { type: null, city: null });
        setTimeout(() => {
            props.setNotification(notification => notification = { type: type, city: cityName });
        }, 1)
    }

    return (
        <StyledMain>
            {props.notification.type === 'fetch' && <NotificationModal city={dailyData.name} />}
            {props.notification.type === 'add' && <NotificationModal addedCity={props.notification.city} />}
            {props.notification.type === 'remove' && <NotificationModal removedCity={props.notification.city} />}
            {props.notification.type === 'default' && <NotificationModal defaultCity={props.notification.city} />}
            <MyCitiesModal
                open={props.openModal}
                setOpenModal={props.setOpenModal}
                units={props.units}
                myCities={props.myCities}
                removeCity={props.removeCity}
                setData={props.setData}
                toggleNotification={toggleNotification}
            />
            <section className="today-map">
                <TodayWeatherCard
                    dailyData={dailyData}
                    defaultCity={defaultCity}
                    changeDefaultCity={changeDefaultCity}
                    units={props.units}
                    localTime={localTime}
                    sunrise={timeConverter(dailyData.sys.sunrise, dailyData.timezone)}
                    sunset={timeConverter(dailyData.sys.sunset, dailyData.timezone)}
                    myCities={props.myCities}
                    addCity={props.addCity}
                    removeCity={props.removeCity}
                    toggleNotification={toggleNotification}>
                </TodayWeatherCard>
                <Map coordinates={dailyData.coord}></Map>
            </section>
            <section className="weather-details">
                <WeatherDetailsCard dailyData={dailyData} units={props.units}></WeatherDetailsCard>
            </section>
            <section className="daily-forecast">
                <div className="daily-forecast-container">
                    <p className="daily-title">24-hour forecast</p>
                    <div className="daily-time-container">
                        <i className="fa-regular fa-clock"></i>
                        <p className="daily-time"><i>Local time in {dailyData.name}:</i> {localTime}</p>
                    </div>
                </div>
                {/* Render daily weather for different times of the day */}
                <div className="daily-container">
                    {weeklyData.list.slice(1, 10).map((x, i) =>
                        <HourlyWeatherCard
                            key={i}
                            data={x}
                            units={props.units}
                            sunrise={timeConverter(dailyData.sys.sunrise, dailyData.timezone)}
                            sunset={timeConverter(dailyData.sys.sunset, dailyData.timezone)}>
                        </HourlyWeatherCard>)}
                </div>
            </section>
            <section className="weekly-forecast">
                <div className="weekly-forecast-container">
                    <p className="weekly-title">5-day forecast</p>
                    <div className="weekly-day-container">
                        <i className="fa-regular fa-calendar"></i>
                        <p className="weekly-day"><i>Current date in {dailyData.name}:</i> {localDate}</p>
                    </div>
                </div>
                {/* Render weekly weather for different days of the week */}
                <div className="weekly-container">
                    {weeklyData.list.filter(x => x.dt_txt.split(' ')[1].slice(0, 2) === "21").map((x, i) =>
                        <WeeklyWeatherCard
                            key={i}
                            data={x}
                            units={props.units}>
                        </WeeklyWeatherCard>)}
                </div>
            </section>
        </StyledMain>
    )
}

export default Main;