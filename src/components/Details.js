import { StyledDetails } from "./styles/Details.styled"

let Details = () => {
    return (
        <StyledDetails>
            <div className="details-card">
                <p>Feels like</p>
                <p className="stats">10</p>
            </div>
            <div className="details-card">
                <p>Pressure</p>
                <p className="stats">1023</p>
            </div>
            <div className="details-card">
                <p>Humidity</p>
                <p className="stats">100</p>
            </div>
            <div className="details-card">
                <p>Visibility</p>
                <p className="stats">10000</p>
            </div>
            <div className="details-card">
                <p>Wind</p>
                <p className="stats">1.5</p>
            </div>
            <div className="details-card">
                <p>Sunrise</p>
                <p className="stats">10:34</p>
            </div>
            <div className="details-card">
                <p>Sunset</p>
                <p className="stats">23:32</p>
            </div>
        </StyledDetails>
    )
}

export default Details