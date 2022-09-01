import { StyledMiniCard } from "./styles/MiniCard.styled"

let MiniCard = () => {
    return (
        <StyledMiniCard>
            <p>Monday</p>
            <div className="weather-info">
                <img src="/images/1163661.png" alt="logo"></img>
                <p>15°</p>
            </div>
        </StyledMiniCard>
    )
}

export default MiniCard