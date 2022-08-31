import Container from "./styles/Container.styles";
import { StyledHeader } from "./styles/Header.styled";

let Header = () => {
    return (
        <StyledHeader>
            <div className="logo">
                <img src="/images/1163661.png" alt="logo"></img>
                <h1>WeatherApp</h1>
            </div>
            <div className="location">
                <button className="location-btn">
                <i class="fa-solid fa-location-dot"></i> Get location
                </button>
            </div>
            <form>
                <input type="text" id="search" placeholder="Search for a city..."></input>
                <button className="search-btn" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button className="clear-btn">
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>
            </form>
            <div className="theme-selector">
                <p>Dark mode</p>
                <div className="theme-buttons">
                    <button className="theme-btn">
                        <i className="fas fa-moon"></i>
                    </button>
                    <button className="theme-btn">
                        <i class="fa-solid fa-sun"></i>
                    </button>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header