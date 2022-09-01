import { StyledMain } from "./styles/Main.styled"
import TodayCard from "./TodayCard"
import Map from "./Map"
import MiniCard from "./MiniCard"
import Details from "./Details"
import DailyCard from "./DailyCard"

let Main = () => {
    return (
        <StyledMain>
            <section className="today-map">
                <TodayCard></TodayCard>
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