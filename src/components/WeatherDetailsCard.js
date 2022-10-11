import timeConverter from "../utils/timeConverter";
import unitsConverter from "../utils/unitsConverter";
import { StyledWeatherDetailsCard } from "./styles/WeatherDetailsCard.styled";

let WeatherDetailsCard = ({ dailyData, units }) => {
    return (
        <StyledWeatherDetailsCard>
            <div className="details-card">
                <div className="details-title">
                    <i className="fa-solid fa-temperature-half"></i>
                    <p>Feels</p>
                </div>
                <p className="stats">{unitsConverter(dailyData.main.temp, units)}°</p>
            </div>
            <div className="details-card">
                <div className="details-title">
                    <i className="fa-solid fa-gauge"></i>
                    <p>Pressure</p>
                </div>
                <p className="stats">{dailyData.main.pressure} hPa</p>
            </div>
            <div className="details-card">
                <div className="details-title">
                    <i className="fa-solid fa-droplet"></i>
                    <p>Humidity</p>
                </div>
                <p className="stats">{dailyData.main.humidity} %</p>
            </div>
            <div className="details-card">
                <div className="details-title">
                    <i className="fa-solid fa-eye"></i>
                    <p>Visibility</p>
                </div>
                <p className="stats">{dailyData.visibility} m</p>
            </div>
            <div className="details-card">
                <div className="details-title">
                    <i className="fa-solid fa-wind"></i>
                    <p>Wind</p>
                </div>
                <p className="stats">{Math.round(dailyData.wind.speed)} km/h</p>
            </div>
            <div className="details-card">
                <div className="details-title">
                    <i className="fa-solid fa-arrow-up"></i>
                    <p>Sunrise</p>
                </div>
                <p className="stats">{timeConverter(dailyData.sys.sunrise, dailyData.timezone)}</p>
            </div>
            <div className="details-card">
                <div className="details-title">
                    <i className="fa-solid fa-arrow-down"></i>
                    <p>Sunset</p>
                </div>
                <p className="stats">{timeConverter(dailyData.sys.sunset, dailyData.timezone)}</p>
            </div>
        </StyledWeatherDetailsCard>
    )
}

export default WeatherDetailsCard;