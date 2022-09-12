import useFetchDailyWeather from "../hooks/useFetchDailyWeather"
import { dayIcons } from "../utils/images"
import unitsConverter from "../utils/unitsConverter";
import Loading from "./Loading";
import LoadingMini from "./LoadingMini";
import { StyledLoading } from "./styles/Loading.styled";
import { StyledLoadingMini } from "./styles/LoadingMini.styled";
import { StyledMyCitiesCard } from "./styles/MyCitiesCard.styled"

let MyCitiesCard = ({ city, units, removeCity, setOpenModal }) => {
    let [dailyData, isLoadingDaily] = useFetchDailyWeather(city);

    let removeCurrentCity = () => {
        removeCity(dailyData.name);
        setOpenModal(true);
    }

    if (isLoadingDaily) {
        return (
                <StyledLoadingMini>
                    <LoadingMini></LoadingMini>
                </StyledLoadingMini>
        )
    }

    return (
        <StyledMyCitiesCard>
            <p>{dailyData.name}</p>
            <div className="weather-info">
                <img src={dayIcons[800]} alt="logo"></img>
                <p>{unitsConverter(dailyData.main.temp, units)}°</p>
            </div>
            <div className="add-button" onClick={() => removeCurrentCity()}>
                <i class="fa-solid fa-trash"></i>
                <p>Remove</p>
            </div>
        </StyledMyCitiesCard>
    )
}

export default MyCitiesCard