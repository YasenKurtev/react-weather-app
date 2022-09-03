import { StyledMain } from "./styles/Main.styled"
import TodayCard from "./TodayCard"
import Map from "./Map"
import MiniCard from "./MiniCard"
import Details from "./Details"
import DailyCard from "./DailyCard"
import useFetchDailyWeather from "../hooks/useFetchDailyWeather"
import { StyledLoading } from "./styles/Loading.styled"

let Main = () => {
    let [data, isLoading] = useFetchDailyWeather('Plovdiv');

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
                <TodayCard data={data}></TodayCard>
                <Map></Map>
            </section>
            <section className="weather-details">
                <Details></Details>
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