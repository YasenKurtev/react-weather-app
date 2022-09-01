import { StyledMain } from "./styles/Main.styled"
import TodayCard from "./TodayCard"
import Map from "./Map"
import MiniCard from "./MiniCard"

let Main = () => {
    return (
        <StyledMain>
            <section className="today-map">
                <TodayCard></TodayCard>
                <Map></Map>
            </section>
            <section className="weekly-forecast">
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
            </section>
        </StyledMain>
    )
}

export default Main