import useFetchDailyWeather from "../hooks/useFetchDailyWeather"
import getLocalTime from "../utils/getLocalTime";
import { dayIcons, nightIcons } from "../utils/images"
import timeConverter from "../utils/timeConverter";
import unitsConverter from "../utils/unitsConverter";
import Loading from "./Loading";
import LoadingMini from "./LoadingMini";
import { StyledLoading } from "./styles/Loading.styled";
import { StyledLoadingMini } from "./styles/LoadingMini.styled";
import { StyledMyCitiesCard } from "./styles/MyCitiesCard.styled"

let MyCitiesCard = ({ city, units, removeCity, index }) => {
    let [dailyData, isLoadingDaily] = useFetchDailyWeather(city);

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

    let localTime = getLocalTime(dailyData.timezone);
    let sunrise = timeConverter(dailyData.sys.sunrise, dailyData.timezone);
    let sunset = timeConverter(dailyData.sys.sunset, dailyData.timezone);

    return (
        <StyledMyCitiesCard>
            <p>{dailyData.name}</p>
            <div className="weather-info">
                <img src={localTime.split(":")[0] < sunset.split(":")[0] + 1
                    && localTime.split(":")[0] > sunrise.split(":")[0]
                    ? dayIcons[dailyData.weather[0].id]
                    : nightIcons[dailyData.weather[0].id]}
                    alt="logo">
                </img>
                <p>{unitsConverter(dailyData.main.temp, units)}°</p>
            </div>
            <div className="add-button" onClick={() => removeCity(dailyData.name)}>
                <i class="fa-solid fa-trash"></i>
                <p>Remove</p>
            </div>
        </StyledMyCitiesCard>
    )
}

export default MyCitiesCard