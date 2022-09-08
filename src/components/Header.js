import { useState } from "react";
import { StyledHeader } from "./styles/Header.styled";

let Header = ({ data, setData, theme, changeTheme }) => {
    let [searchInput, setSearchInput] = useState('');

    let onSearchSubmit = (e) => {
        e.preventDefault();
        setData(searchInput);
    }

    let onChangeHandler = (e) => {
        setSearchInput(state => state = e.target.value);
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            console.log('Not supported');
        }
    }

    function showPosition(position) {
        setData({ lat: position.coords.latitude, lon: position.coords.longitude });
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
                    <label>
                        <input type="radio" name="test" value="small" />
                        <p>C°</p>
                    </label>

                    <label>
                        <input type="radio" name="test" value="big" />
                        <p>F°</p>
                    </label>
                </div>
            </div>
            <div className="theme-selector">
                <p>Dark mode</p>
                <div className="theme-buttons">

                    <label>
                        <input type="radio" name="theme" value="small" checked={theme === 'light' ? true : false} onClick={() => changeTheme('light')} />
                        <i className="fa-solid fa-sun"></i>
                    </label>

                    <label>
                        <input type="radio" name="theme" value="big" checked={theme === 'dark' ? true : false} onClick={() => changeTheme('dark')} />
                        <i className="fas fa-moon"></i>
                    </label>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header