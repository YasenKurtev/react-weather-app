import { StyledDailyCard } from "./styles/DailyCard.styled"

let DailyCard = () => {
    return (
        <StyledDailyCard>
            <p>12:00</p>
            <div className="weather-info">
                <img src="/images/1163661.png" alt="logo"></img>
                <p>15°</p>
            </div>
        </StyledDailyCard>
    )
}

export default DailyCard