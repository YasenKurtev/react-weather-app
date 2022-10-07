import { useState } from "react";
import Modal from "./Modal";
import { StyledHeader } from "./styles/Header.styled";

let Header = ({ props }) => {
    let [searchInput, setSearchInput] = useState('');
    let [openModal, setOpenModal] = useState(false);

    let onSearchSubmit = (e) => {
        e.preventDefault();
        if (searchInput.length !== 0) {
            props.setData(searchInput);
            setSearchInput(state => state = '');
        }
    }

    let onSearchReset = (e) => {
        e.preventDefault();
        setSearchInput(state => state = '');
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
        props.setData({ lat: position.coords.latitude, lon: position.coords.longitude });
    }

    function showError(error) {
        console.log('error');
    }

    return (

        <StyledHeader>
            <div className="first-container">
                <div className="title-container">
                    <img src="/images/few-clouds.png" alt="logo"></img>
                    <h1>WeatherApp</h1>
                </div>
                <div className="location-cities-container">
                    <button className="location-cities-btn" onClick={getLocation}>
                        <i className="fa-solid fa-location-dot"></i> <p>Get location</p>
                    </button>
                    <button className="location-cities-btn" onClick={() => setOpenModal(true)}>
                        <i className="fa-solid fa-bars"></i> <p>My cities</p>
                    </button>
                    <Modal open={openModal} setOpenModal={setOpenModal} units={props.units} myCities={props.myCities} removeCity={props.removeCity} setData={props.setData} />
                </div>
            </div>
            <form onSubmit={onSearchSubmit}>
                <input type="text" id="search" placeholder="Search for a city..." autoComplete="off" value={searchInput} onChange={onChangeHandler}></input>
                <button className="clear-btn" type="reset" onClick={onSearchReset}>
                    <i className="fa-solid fa-x"></i>
                </button>
                <button className="search-btn" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            <div className="second-container">
                <div className="units-selector-container">
                    <p>Units</p>
                    <div className="units-buttons-container">
                        <label>
                            <input type="radio" name="units" aria-label="celsius" value="small" checked={props.units === 'celsius' ? true : false} onClick={() => props.changeUnits('celsius')} />
                            <p>C°</p>
                        </label>

                        <label>
                            <input type="radio" name="units" aria-label="fahrenheit" value="big" checked={props.units === 'fahrenheit' ? true : false} onClick={() => props.changeUnits('fahrenheit')} />
                            <p>F°</p>
                        </label>
                    </div>
                </div>
                <div className="theme-selector-container">
                    <p>Dark mode</p>
                    <div className="theme-buttons-container">
                        <label>
                            <input type="radio" name="theme" aria-label="light" value="small" checked={props.theme === 'light' ? true : false} onClick={() => props.changeTheme('light')} />
                            <i className="fa-solid fa-sun"></i>
                        </label>

                        <label>
                            <input type="radio" name="theme" aria-label="dark" value="big" checked={props.theme === 'dark' ? true : false} onClick={() => props.changeTheme('dark')} />
                            <i className="fas fa-moon"></i>
                        </label>
                    </div>
                </div>
            </div>
        </StyledHeader>


    )
}

export default Header