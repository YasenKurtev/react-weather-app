import { StyledMain } from "./styles/Main.styled"
import TodayCard from "./TodayCard"
import Map from "./Map"
import MiniCard from "./WeeklyCard"
import Details from "./Details"
import DailyCard from "./DailyCard"
import { StyledLoading } from "./styles/Loading.styled"
import useDefaultCity from '../hooks/useDefaultCityHook';
import useFetchDailyWeather from "../hooks/useFetchDailyWeather"
import useFetchWeeklyWeather from "../hooks/useFetchWeeklyWeather"
import getLocalTime from "../utils/getLocalTime"
import timeConverter from "../utils/timeConverter"

let Main = ({ props }) => {
    let [defaultCity, changeDefaultCity] = useDefaultCity();
    let city = defaultCity;
    let coords = { lat: 0, lon: 0 };

    if (typeof props.data === 'string') {
        city = props.data;
    }

    if (typeof props.data === 'object') {
        coords = props.data;
        city = null;
    }

    let [dailyData, isLoadingDaily] = useFetchDailyWeather(city, coords.lat, coords.lon);
    let [weeklyData, isLoadingWeekly] = useFetchWeeklyWeather(city, coords.lat, coords.lon);

    if (isLoadingDaily || isLoadingWeekly) {
        return (
            <StyledLoading>
                <div className="lds-dual-ring"></div>
                <p>Fetching weather data...</p>
            </StyledLoading>
        )
    }

    let localTime = getLocalTime(dailyData.timezone);

    return (
        <StyledMain>
            <section className="today-map">
                <TodayCard
                    dailyData={dailyData}
                    defaultCity={defaultCity}
                    changeDefaultCity={changeDefaultCity}
                    units={props.units}
                    localTime={localTime}
                    sunrise={timeConverter(dailyData.sys.sunrise, dailyData.timezone)}
                    sunset={timeConverter(dailyData.sys.sunset, dailyData.timezone)}>
                </TodayCard>
                <Map coordinates={dailyData.coord}></Map>
            </section>
            <section className="weather-details">
                <Details dailyData={dailyData} units={props.units}></Details>
            </section>
            <section className="daily-forecast">
                <p className="daily-title">24-hour forecast</p>
                <div className="daily-container">
                    {weeklyData.list.slice(1, 10).map(x =>
                        <DailyCard
                            data={x}
                            units={props.units}
                            sunrise={timeConverter(dailyData.sys.sunrise, dailyData.timezone)}
                            sunset={timeConverter(dailyData.sys.sunset, dailyData.timezone)}>
                        </DailyCard>)}
                </div>
            </section>
            <section className="weekly-forecast">
                <p className="weekly-title">5-day forecast</p>
                <div className="weekly-container">
                    {weeklyData.list.filter(x => x.dt_txt.split(' ')[1].slice(0, 2) === "12").map(x =>
                        <MiniCard
                            data={x}
                            units={props.units}>
                        </MiniCard>)}
                </div>
            </section>
        </StyledMain>
    )
}

export default Main