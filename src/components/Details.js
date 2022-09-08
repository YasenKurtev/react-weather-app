import unitsConverter from "../utils/unitsConverter"
import { StyledDetails } from "./styles/Details.styled"

let Details = ({ dailyData, units }) => {
    return (
        <StyledDetails>
            <div className="details-card">
                <div className="details-title">
                    <i class="fa-solid fa-temperature-half"></i>
                    <p>Feels like</p>
                </div>
                <p className="stats">{unitsConverter(dailyData.main.temp, units)}°</p>
            </div>
            <div className="details-card">
                <div className="details-title">
                    <i class="fa-solid fa-gauge"></i>
                    <p>Pressure</p>
                </div>
                <p className="stats">{dailyData.main.pressure} hPa</p>
            </div>
            <div className="details-card">
                <div className="details-title">
                    <i class="fa-solid fa-droplet"></i>
                    <p>Humidity</p>
                </div>
                <p className="stats">{dailyData.main.humidity} %</p>
            </div>
            <div className="details-card">
                <div className="details-title">
                    <i class="fa-solid fa-eye"></i>
                    <p>Visibility</p>
                </div>
                <p className="stats">{dailyData.visibility} m</p>
            </div>
            <div className="details-card">
                <div className="details-title">
                    <i class="fa-solid fa-wind"></i>
                    <p>Wind</p>
                </div>
                <p className="stats">{Math.round(dailyData.wind.speed)} km/h</p>
            </div>
            <div className="details-card">
                <div className="details-title">
                    <i class="fa-solid fa-arrow-up"></i>
                    <p>Sunrise</p>
                </div>
                <p className="stats">{dailyData.sys.sunrise}</p>
            </div>
            <div className="details-card">
                <div className="details-title">
                    <i class="fa-solid fa-arrow-down"></i>
                    <p>Sunset</p>
                </div>
                <p className="stats">{dailyData.sys.sunset}</p>
            </div>
        </StyledDetails>
    )
}

export default Details