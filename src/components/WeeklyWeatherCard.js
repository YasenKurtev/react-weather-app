import { days } from "../utils/daysAndMonths";
import unitsConverter from "../utils/unitsConverter";
import { StyledWeeklyWeatherCard } from "./styles/WeeklyWeatherCard.styled"
import { dayIcons } from "../utils/images"

let WeeklyWeatherCard = ({ data, units }) => {
    //Get day of week
    let currentDate = new Date(`${data.dt_txt}`.replace(/-/g, "/"));
    let dayOfWeek = days[currentDate.getDay()];

    return (
        <StyledWeeklyWeatherCard>
            <p className="day-of-week">{dayOfWeek}</p>
            <div className="weather-info">
                <img src={dayIcons[data.weather[0].id]} alt="logo"></img>
                <p className="temp">{unitsConverter(data.main.temp, units)}°</p>
            </div>
        </StyledWeeklyWeatherCard>
    )
}

export default WeeklyWeatherCard;