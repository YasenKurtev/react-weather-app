import { createContext } from "react";
import { useState } from "react";

export let SettingsContext = createContext();

export let SettingsProvider = ({ children }) => {
    let [defaultCity, setDefaultCity] = useState(localStorage.getItem('defaultCity'));
    let [defaultTheme, setDefaultTheme] = useState(localStorage.getItem('defaultTheme'));

    if (defaultCity === null) {
        setDefaultCity(state => state = 'Plovdiv');
        localStorage.setItem('defaultCity', 'Plovdiv');
    }

    if (defaultTheme === null) {
        setDefaultTheme(state => state = 'light');
        localStorage.setItem('defaultTheme', 'light');
    }

    return (
        <SettingsContext.Provider value={{
            defaultCity: defaultCity,
            setDefaultCity: setDefaultCity,
            defaultTheme: defaultTheme,
            setDefaultTheme: setDefaultTheme
        }}>
            {children}
        </SettingsContext.Provider>
    )
}