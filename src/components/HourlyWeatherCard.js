import unitsConverter from "../utils/unitsConverter";
import { dayIcons, nightIcons } from "../utils/images";
import { StyledHourlyWeatherCard } from "./styles/HourlyWeatherCard.styled";

let HourlyWeatherCard = ({ data, units, sunrise, sunset }) => {

    return (
        <StyledHourlyWeatherCard>
            {/* Extract time of day */}
            <p>{data.dt_txt.split(' ')[1].slice(0, 5)}</p>
            <div className="weather-info">
                {/* Set day or night icon, depending on time */}
                <img src={data.dt_txt.split(' ')[1].slice(0, 5).split(":")[0] < sunset.split(":")[0] + 1
                    && data.dt_txt.split(' ')[1].slice(0, 5).split(":")[0] > sunrise.split(":")[0]
                    ? dayIcons[data.weather[0].id]
                    : nightIcons[data.weather[0].id]}
                    alt="logo">
                </img>
                <p>{unitsConverter(data.main.temp, units)}°</p>
            </div>
        </StyledHourlyWeatherCard>
    )
}

export default HourlyWeatherCard;