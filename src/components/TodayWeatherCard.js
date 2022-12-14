import { StyledTodayWeatherCard } from "./styles/TodayWeatherCard.styled";
import unitsConverter from "../utils/unitsConverter";
import { dayIcons, nightIcons } from "../utils/images"
import { useState } from "react";
import ErrorModal from "./ErrorModal";

let TodayWeatherCard = ({ dailyData, defaultCity, changeDefaultCity, units, localTime, sunrise, sunset, myCities, addCity, removeCity, toggleNotification }) => {
    //My cities limit error modal state
    let [openModal, setOpenModal] = useState(false);

    return (
        <StyledTodayWeatherCard>
            {/* Set day or night icon, depending on time */}
            <img src={localTime.split(":")[0] < sunset.split(":")[0] + 1
                && localTime.split(":")[0] > sunrise.split(":")[0]
                ? dayIcons[dailyData.weather[0].id]
                : nightIcons[dailyData.weather[0].id]}
                alt="logo">
            </img>
            {/* Set add or remove button, depending on if the current city is in the My cities list */}
            {myCities.includes(dailyData.name)
                ? <div className="add-button" onClick={() => { removeCity(dailyData.name); toggleNotification('remove', dailyData.name) }}>
                    <i className="fa-solid fa-trash"></i>
                    <p>Remove</p>
                </div>
                : <div className="add-button" onClick={myCities.length < 3 ? () => { addCity(dailyData.name); toggleNotification('add', dailyData.name) } : () => setOpenModal(true)}>
                    <i className="fa-solid fa-plus"></i>
                    <p>Add</p>
                </div>}
            <div className="error-cities-container">
                <ErrorModal open={openModal} setOpenModal={setOpenModal}></ErrorModal>
            </div>
            <div className="weather-info">
                <h1>{dailyData.name}</h1>
                <p className="temp">{unitsConverter(dailyData.main.temp, units)}°</p>
                <p className="condition">{dailyData.weather[0].main}</p>
            </div>
            <div className="low-high">
                <p>L: {unitsConverter(dailyData.main.temp_min, units)}°</p>
                <p>H: {unitsConverter(dailyData.main.temp_max, units)}°</p>
            </div>
            {/* Set default city button, depending on if the current city is the default city */}
            {defaultCity === dailyData.name
                ? <div className="default-city-div-set">
                    <i className="fa-solid fa-house"></i>
                    <p className="default-city"><i>This is your default city</i></p>
                </div>
                : <div className="default-city-div-unset" onClick={() => { changeDefaultCity(dailyData.name); toggleNotification('default', dailyData.name) }}>
                    <i className="fa-solid fa-hand-pointer"></i>
                    <p className="default-city-btn"><i>Set as default city</i></p>
                </div>}
        </StyledTodayWeatherCard>
    )
}

export default TodayWeatherCard;