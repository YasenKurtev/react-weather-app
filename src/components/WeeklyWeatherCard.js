import { days } from "../utils/daysAndMonths";
import unitsConverter from "../utils/unitsConverter";
import { StyledWeeklyWeatherCard } from "./styles/WeeklyWeatherCard.styled"
import { dayIcons } from "../utils/images"

let WeeklyWeatherCard = ({ data, units }) => {
    //Get day of week
    let currentDate = new Date(`${data.dt_txt}`);

    return (
        <StyledWeeklyWeatherCard>
            <p className="day-of-week">
                {currentDate.getDay() === 0
                    ? 'Monday'
                    : currentDate.getDay() === 1
                        ? 'Tuesday'
                        : currentDate.getDay() === 2
                            ? 'Wednesday'
                            : currentDate.getDay() === 3
                                ? 'Thursday'
                                : currentDate.getDay() === 4
                                    ? 'Friday'
                                    : currentDate.getDay() === 5
                                        ? 'Saturday'
                                        : 'Sunday'}</p>
            <div className="weather-info">
                <img src={dayIcons[data.weather[0].id]} alt="logo"></img>
                <p className="temp">{unitsConverter(data.main.temp, units)}°</p>
            </div>
        </StyledWeeklyWeatherCard>
    )
}

export default WeeklyWeatherCard;