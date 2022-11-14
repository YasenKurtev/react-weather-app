import { useState } from "react";
import MyCitiesModal from "./MyCitiesModal";
import { StyledHeader } from "./styles/Header.styled";

let searchValueIsEmpty = (value) => value.trim() === '';

let Header = ({ props }) => {
    //Search input state
    let [searchInput, setSearchInput] = useState('');
    //Search error state
    let [error, setError] = useState(false);
    //My cities modal state
    let [openModal, setOpenModal] = useState(false);

    //On city search submit, set search data to search input value and clear search input
    let onSearchSubmit = (e) => {
        e.preventDefault();

        if (searchValueIsEmpty(searchInput)) {
            setError(true);
            return;
        }

        props.setData(searchInput);
        setSearchInput(state => state = '');
    }

    //Clear search input
    let onSearchReset = (e) => {
        e.preventDefault();
        setSearchInput(state => state = '');
    }

    //Set search input on every input change
    let onChangeHandler = (e) => {
        if (!searchValueIsEmpty(e.target.value)) {
            setError(false);
        }
        setSearchInput(state => state = e.target.value);
    }

    //Get location
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            console.log('Not supported');
        }
    }

    //Set search data to location latitude and longitude
    function showPosition(position) {
        props.setData({ lat: position.coords.latitude, lon: position.coords.longitude });
    }

    function showError(error) {
        console.log('error');
    }

    return (
        <>
            <MyCitiesModal open={openModal} setOpenModal={setOpenModal} units={props.units} myCities={props.myCities} removeCity={props.removeCity} setData={props.setData} />
            <StyledHeader>
                <div className="first-container">
                    <div className="title-container">
                        <img src="images/few-clouds.png" alt="logo"></img>
                        <h1>WeatherApp</h1>
                    </div>
                    <div className="location-cities-container">
                        <button className="location-cities-btn" onClick={getLocation}>
                            <i className="fa-solid fa-location-dot"></i> <p>Get location</p>
                        </button>
                        <button className="location-cities-btn" onClick={() => setOpenModal(true)}>
                            <i className="fa-solid fa-bars"></i> <p>My cities</p>
                        </button>
                    </div>
                </div>
                <form onSubmit={onSearchSubmit}>
                    <div className="input-buttons">
                        <input type="text" id="search" placeholder="Search for a city..." autoComplete="off" value={searchInput} onChange={onChangeHandler}></input>
                        <button className="clear-btn" type="reset" aria-label="clear" onClick={onSearchReset}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                        <button className="search-btn" type="submit" aria-label="search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    {error && <p className="error">Please enter a city!</p>}
                </form>
                <div className="second-container">
                    <div className="units-selector-container">
                        <p>Units</p>
                        <div className="units-buttons-container">
                            <label>
                                <input type="radio" name="units" aria-label="celsius" value="small" defaultChecked={props.units === 'celsius' ? true : false} onClick={() => props.changeUnits('celsius')} />
                                <p>C°</p>
                            </label>
                            <label>
                                <input type="radio" name="units" aria-label="fahrenheit" value="big" defaultChecked={props.units === 'fahrenheit' ? true : false} onClick={() => props.changeUnits('fahrenheit')} />
                                <p>F°</p>
                            </label>
                        </div>
                    </div>
                    <div className="theme-selector-container">
                        <p>Theme</p>
                        <div className="theme-buttons-container">
                            <label>
                                <input type="radio" name="theme" aria-label="light" value="small" defaultChecked={props.theme === 'light' ? true : false} onClick={() => props.changeTheme('light')} />
                                <i className="fa-solid fa-sun"></i>
                            </label>

                            <label>
                                <input type="radio" name="theme" aria-label="dark" value="big" defaultChecked={props.theme === 'dark' ? true : false} onClick={() => props.changeTheme('dark')} />
                                <i className="fas fa-moon"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </StyledHeader>
        </>
    )
}

export default Header;