import { days } from "../utils/daysOfWeek";
import unitsConverter from "../utils/unitsConverter";
import { StyledWeeklyWeatherCard } from "./styles/WeeklyWeatherCard.styled"
import { dayIcons } from "../utils/images"

let WeeklyWeatherCard = ({ data, units }) => {
    //Get day of week
    let currentDate = new Date(`${data.dt_txt}`);
    let dayOfWeek = days[currentDate.getDay()];

    return (
        <StyledWeeklyWeatherCard>
            <img src="not/found" className="day-of-week" alt={dayOfWeek}></img>
            <div className="weather-info">
                <img src={dayIcons[data.weather[0].id]} alt="logo"></img>
                <p>{unitsConverter(data.main.temp, units)}°</p>
            </div>
        </StyledWeeklyWeatherCard>
    )
}

export default WeeklyWeatherCard;