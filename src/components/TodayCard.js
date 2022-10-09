import { StyledTodayCard } from "./styles/TodayCard.styled";
import unitsConverter from "../utils/unitsConverter";
import { dayIcons, nightIcons } from "../utils/images"
import { useState } from "react";
import ErrorModal from "./styles/ErrorModal";

let TodayCard = ({ dailyData, defaultCity, changeDefaultCity, units, localTime, sunrise, sunset, myCities, addCity, removeCity }) => {
    let [openModal, setOpenModal] = useState(false);

    return (
        <StyledTodayCard>
            <img src={localTime.split(":")[0] < sunset.split(":")[0] + 1
                && localTime.split(":")[0] > sunrise.split(":")[0]
                ? dayIcons[dailyData.weather[0].id]
                : nightIcons[dailyData.weather[0].id]}
                alt="logo">
            </img>
            {myCities.includes(dailyData.name)
                ? <div className="add-button" onClick={() => removeCity(dailyData.name)}>
                    <i class="fa-solid fa-trash"></i>
                    <p>Remove</p>
                </div>
                : <div className="add-button" onClick={myCities.length < 3 ? () => addCity(dailyData.name) : () => setOpenModal(true)}>
                    <i class="fa-solid fa-plus"></i>
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
            {defaultCity === dailyData.name
                ? <div className="default-city-div">
                    <i className="fa-solid fa-house"></i>
                    <p className="default-city"><i>This is your default city</i></p>
                </div>
                : <div className="default-city-div">
                    <i class="fa-solid fa-hand-pointer"></i>
                    <p className="default-city-btn" onClick={() => changeDefaultCity(dailyData.name)}><i>Set as default city</i></p>
                </div>}
        </StyledTodayCard>
    )
}

export default TodayCard