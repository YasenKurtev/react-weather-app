import { StyledTodayCard } from "./styles/TodayCard.styled";

let TodayCard = () => {
    return (
        <StyledTodayCard>
            <img src="/images/1163661.png" alt="logo"></img>

            <div className="weather-info">
                <h1>Plovdiv</h1>
                <p className="temp">22</p>
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