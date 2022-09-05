import { StyledMiniCard } from "./styles/MiniCard.styled"

let MiniCard = ({ data }) => {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let currentDate = new Date(`${data.dt_txt}`);
    let dayOfWeek = days[currentDate.getDay()];

    return (
        <StyledMiniCard>
            <p>{dayOfWeek}</p>
            <div className="weather-info">
                <img src="/images/1163661.png" alt="logo"></img>
                <p>{Math.round(data.main.temp)}°</p>
            </div>
        </StyledMiniCard>
    )
}

export default MiniCard