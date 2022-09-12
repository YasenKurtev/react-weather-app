import { dayIcons } from "../utils/images"
import { StyledMyCitiesCard } from "./styles/MyCitiesCard.styled"

let MyCitiesCard = () => {
    return (
        <StyledMyCitiesCard>
            <p>Plovdiv</p>
            <div className="weather-info">
                <img src={dayIcons[800]} alt="logo"></img>
                <p>22°</p>
            </div>
        </StyledMyCitiesCard>
    )
}

export default MyCitiesCard