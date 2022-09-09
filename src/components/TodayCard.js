import { StyledTodayCard } from "./styles/TodayCard.styled";
import unitsConverter from "../utils/unitsConverter";
import { dayIcons, nightIcons } from "../utils/images"
import timeConverter from "../utils/timeConverter"

let TodayCard = ({ dailyData, defaultCity, changeDefaultCity, units, localTime }) => {

    return (
        <StyledTodayCard>
            <img src={localTime.split(":")[0] < timeConverter(dailyData.sys.sunset, dailyData.timezone).split(":")[0]
                ? dayIcons[dailyData.weather[0].id]
                : nightIcons[dailyData.weather[0].id]}
                alt="logo"></img>
            <div className="weather-info">
                <h1>{dailyData.name}</h1>
                <p className="temp">{unitsConverter(dailyData.main.temp, units)}°</p>
                <p className="condition">{dailyData.weather[0].main}</p>
            </div>
            <div className="low-high">
                <p>L: {Math.round(dailyData.coord.lat)}</p>
                <p>H: {Math.round(dailyData.coord.lon)}</p>
            </div>
            {defaultCity === dailyData.name
                ? <div className="default-city-div">
                    <i className="fa-solid fa-house"></i>
                    <p className="default-city">This is your default city</p>
                </div>
                : <button className="default-city-btn" onClick={() => changeDefaultCity(dailyData.name)}>Set as default city</button>}
        </StyledTodayCard>
    )
}

export default TodayCard