import { days } from "../utils/daysOfWeek";
import unitsConverter from "../utils/unitsConverter";
import { StyledWeeklyCard } from "./styles/WeeklyCard.styled"
import { dayIcons } from "../utils/images"

let WeeklyCard = ({ data, units }) => {
    //Get day of week
    let currentDate = new Date(`${data.dt_txt}`);
    let dayOfWeek = days[currentDate.getDay() - 1];

    return (
        <StyledWeeklyCard>
            <p>{dayOfWeek}</p>
            <div className="weather-info">
                <img src={dayIcons[data.weather[0].id]} alt="logo"></img>
                <p>{unitsConverter(data.main.temp, units)}°</p>
            </div>
        </StyledWeeklyCard>
    )
}

export default WeeklyCard;