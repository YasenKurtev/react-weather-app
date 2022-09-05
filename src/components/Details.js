import { StyledDetails } from "./styles/Details.styled"

let Details = ({ dailyData }) => {
    return (
        <StyledDetails>
            <div className="details-card">
                <p>Feels like</p>
                <p className="stats">{Math.round(dailyData.main.feels_like)}°</p>
            </div>
            <div className="details-card">
                <p>Pressure</p>
                <p className="stats">{dailyData.main.pressure} hPa</p>
            </div>
            <div className="details-card">
                <p>Humidity</p>
                <p className="stats">{dailyData.main.humidity} %</p>
            </div>
            <div className="details-card">
                <p>Visibility</p>
                <p className="stats">{dailyData.visibility} m</p>
            </div>
            <div className="details-card">
                <p>Wind</p>
                <p className="stats">{Math.round(dailyData.wind.speed)} km/h</p>
            </div>
            <div className="details-card">
                <p>Sunrise</p>
                <p className="stats">{dailyData.sys.sunrise}</p>
            </div>
            <div className="details-card">
                <p>Sunset</p>
                <p className="stats">{dailyData.sys.sunset}</p>
            </div>
        </StyledDetails>
    )
}

export default Details