import Container from "./styles/Container.styles";
import { StyledHeader } from "./styles/Header.styled";

let Header = () => {
    return (
        <StyledHeader>
            <div>
                <img src="/images/1163661.png" alt="logo"></img>
                <h1>WeatherApp</h1>
            </div>
            <form>
                <input type="text" id="search" placeholder="Search for a city..."></input>
                <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </StyledHeader>
    )
}

export default Header