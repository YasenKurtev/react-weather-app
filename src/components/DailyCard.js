import unitsConverter from "../utils/unitsConverter"
import { StyledDailyCard } from "./styles/DailyCard.styled"
import { dayIcons, nightIcons } from "../utils/images"
import timeConverter from "../utils/timeConverter"

let DailyCard = ({ data, units, sunrise, sunset }) => {

    return (
        <StyledDailyCard>
            <p>{data.dt_txt.split(' ')[1].slice(0, 5)}</p>
            <div className="weather-info">
                <img src={data.dt_txt.split(' ')[1].slice(0, 5).split(":")[0] < sunset.split(":")[0]
                    && data.dt_txt.split(' ')[1].slice(0, 5).split(":")[0] > sunrise.split(":")[0]
                    ? dayIcons[data.weather[0].id]
                    : nightIcons[data.weather[0].id]}
                    alt="logo">
                </img>
                <p>{unitsConverter(data.main.temp, units)}°</p>
            </div>
        </StyledDailyCard>
    )
}

export default DailyCard