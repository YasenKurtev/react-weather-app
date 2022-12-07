import useFetchDailyWeather from "../hooks/useFetchDailyWeather"
import getLocalTime from "../utils/getLocalTime";
import { dayIcons, nightIcons } from "../utils/images"
import timeConverter from "../utils/timeConverter";
import unitsConverter from "../utils/unitsConverter";
import LoadingMini from "./LoadingMini";
import { StyledLoadingMini } from "./styles/LoadingMini.styled";
import { StyledMyCitiesCard } from "./styles/MyCitiesCard.styled"

let MyCitiesCard = ({ city, units, removeCity, index, setData, setOpenModal, toggleNotification }) => {
    //Fetch weather for current city
    let [dailyData, isLoadingDaily] = useFetchDailyWeather(city);

    //Close modal and show details for current city
    let detailsHandler = () => {
        setData(dailyData.name);
        setOpenModal(false);
    }

    //Display loading spinner
    if (isLoadingDaily) {
        if (index === 0) {
            return (
                <StyledLoadingMini>
                    <LoadingMini></LoadingMini>
                </StyledLoadingMini>
            )
        }
        return null;
    }

    //Get local time for current city
    let localTime = getLocalTime(dailyData.timezone);
    let sunrise = timeConverter(dailyData.sys.sunrise, dailyData.timezone);
    let sunset = timeConverter(dailyData.sys.sunset, dailyData.timezone);

    return (
        <StyledMyCitiesCard>
            <div className="city-container">
                <div className="city-name-container">
                    <p className="city-name">{dailyData.name}</p>
                    <p className="local-time"><i>{localTime}</i></p>
                </div>
                <p className="temp">{unitsConverter(dailyData.main.temp, units)}°</p>
            </div>
            <div className="info-container">
                {/* Set day or night icon, depending on time */}
                <div className="weather-info-container">
                    <img src={localTime.split(":")[0] < sunset.split(":")[0] + 1
                        && localTime.split(":")[0] > sunrise.split(":")[0]
                        ? dayIcons[dailyData.weather[0].id]
                        : nightIcons[dailyData.weather[0].id]}
                        alt="logo">
                    </img>
                    <p className="condition"><i>{dailyData.weather[0].main}</i></p>
                </div>
                <div className="buttons-container">
                    <div className="btn" onClick={() => { detailsHandler(); toggleNotification('fetch', dailyData.name) }}>
                        <i className="fa-solid fa-earth-americas"></i>
                        <p>Details</p>
                    </div>
                    <div className="btn" onClick={() => { removeCity(dailyData.name); toggleNotification('remove', dailyData.name) }}>
                        <i className="fa-solid fa-trash"></i>
                        <p>Remove</p>
                    </div>
                </div>
            </div>
        </StyledMyCitiesCard>
    )
}

export default MyCitiesCard;