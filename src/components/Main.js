import { StyledMain } from "./styles/Main.styled"
import TodayCard from "./TodayCard"
import Map from "./Map"

let Main = () => {
    return (
        <StyledMain>
            <section className="today-map">
                <TodayCard></TodayCard>
                <Map></Map>
            </section>

        </StyledMain>
    )
}

export default Main