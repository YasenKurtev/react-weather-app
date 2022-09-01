import { StyledMain } from "./styles/Main.styled"
import TodayCard from "./TodayCard"
import Map from "./Map"
import MiniCard from "./MiniCard"
import Details from "./Details"

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