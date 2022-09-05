import { useState } from "react";
import { StyledHeader } from "./styles/Header.styled";

let Header = ({ setCoords }) => {
    let [searchInput, setSearchInput] = useState('');

    let onSearchSubmit = (e) => {
        e.preventDefault();
        console.log(searchInput);
    }

    let onChangeHandler = (e) => {
        setSearchInput(state => state = e.target.value)
        console.log(searchInput);
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            console.log('Not supported');
        }
    }

    function showPosition(position) {
        setCoords({ lat: position.coords.latitude, lon: position.coords.longitude })
    }

    function showError(error) {
        console.log('error');
    }

    return (
        <StyledHeader>
            <div className="logo">
                <img src="/images/1163661.png" alt="logo"></img>
                <h1>WeatherApp</h1>
            </div>
            <div className="location">
                <button className="location-btn" onClick={getLocation}>
                    <i className="fa-solid fa-location-dot"></i> <p>Get location</p>
                </button>
            </div>
            <form onSubmit={onSearchSubmit}>
                <input type="text" id="search" placeholder="Search for a city..." value={searchInput} onChange={onChangeHandler}></input>
                <button className="search-btn" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>

            </form>
            <div className="units-selector">
                <p>Units</p>
                <div className="units-buttons">
                    <button>C°</button>
                    <button>F°</button>
                </div>
            </div>
            <div className="theme-selector">
                <p>Dark mode</p>
                <div className="theme-buttons">
                    <button className="theme-btn" type="radio">
                        <i className="fas fa-moon"></i>
                    </button>
                    <button className="theme-btn" type="radio">
                        <i className="fa-solid fa-sun"></i>
                    </button>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header