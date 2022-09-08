import unitsConverter from "../utils/unitsConverter"
import { StyledDailyCard } from "./styles/DailyCard.styled"

let DailyCard = ({ data, units }) => {

    return (
        <StyledDailyCard>
            <p>{data.dt_txt.split(' ')[1].slice(0, 5)}</p>
            <div className="weather-info">
                <img src="/images/1163661.png" alt="logo"></img>
                <p>{unitsConverter(data.main.temp, units)}°</p>
            </div>
        </StyledDailyCard>
    )
}

export default DailyCard