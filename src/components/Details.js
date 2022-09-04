import { StyledDetails } from "./styles/Details.styled"

let Details = ({ data }) => {
    return (
        <StyledDetails>
            <div className="details-card">
                <p>Feels like</p>
                <p className="stats">{Math.round(data.main.feels_like)}°</p>
            </div>
            <div className="details-card">
                <p>Pressure</p>
                <p className="stats">{data.main.pressure} hPa</p>
            </div>
            <div className="details-card">
                <p>Humidity</p>
                <p className="stats">{data.main.humidity} %</p>
            </div>
            <div className="details-card">
                <p>Visibility</p>
                <p className="stats">{data.visibility} m</p>
            </div>
            <div className="details-card">
                <p>Wind</p>
                <p className="stats">{Math.round(data.wind.speed)} km/h</p>
            </div>
            <div className="details-card">
                <p>Sunrise</p>
                <p className="stats">{data.sys.sunrise}</p>
            </div>
            <div className="details-card">
                <p>Sunset</p>
                <p className="stats">{data.sys.sunset}</p>
            </div>
        </StyledDetails>
    )
}

export default Details