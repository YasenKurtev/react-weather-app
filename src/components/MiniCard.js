import days from "../utils/daysOfWeek";
import unitsConverter from "../utils/unitsConverter";
import { StyledMiniCard } from "./styles/MiniCard.styled"

let MiniCard = ({ data, units }) => {
    let currentDate = new Date(`${data.dt_txt}`);
    let dayOfWeek = days[currentDate.getDay()];

    return (
        <StyledMiniCard>
            <p>{dayOfWeek}</p>
            <div className="weather-info">
                <img src="/images/1163661.png" alt="logo"></img>
                <p>{unitsConverter(data.main.temp, units)}°</p>
            </div>
        </StyledMiniCard>
    )
}

export default MiniCard