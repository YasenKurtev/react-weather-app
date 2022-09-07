import { createContext } from "react";
import { useState } from "react";

export let SettingsContext = createContext();

export let SettingsProvider = ({ children }) => {
    let [defaultCity, setDefaultCity] = useState(localStorage.getItem('defaultCity'));

    if (defaultCity === null) {
        setDefaultCity(state => state = 'Berlin');
        localStorage.setItem('defaultCity', 'Berlin');
    }

    return (
        <SettingsContext.Provider value={{ defaultCity: defaultCity, setDefaultCity: setDefaultCity }}>
            {children}
        </SettingsContext.Provider>
    )
}