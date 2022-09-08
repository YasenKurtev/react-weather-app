import { useContext } from "react";
import { StyledTodayCard } from "./styles/TodayCard.styled";
import { SettingsContext } from "./contexts/settingsContext";
import unitsConverter from "../utils/unitsConverter";

let TodayCard = ({ dailyData, units }) => {
    let { defaultCity, setDefaultCity } = useContext(SettingsContext);

    let addDefaultCity = () => {
        localStorage.setItem('defaultCity', dailyData.name);
        setDefaultCity(state => state = dailyData.name)
    }

    return (
        <StyledTodayCard>
            <img src="/images/1163661.png" alt="logo"></img>

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
                : <button className="default-city-btn" onClick={addDefaultCity}>Set as default city</button>}
        </StyledTodayCard>
    )
}

export default TodayCard