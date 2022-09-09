import { useState } from "react";

export default function useDefaultCity() {
    let [defaultCity, setDefaultCity] = useState(localStorage.getItem('defaultCity'));

    if (defaultCity === null) {
        localStorage.setItem('defaultCity', 'Plovdiv');
        setDefaultCity('Plovdiv')
    }

    let changeDefaultCity = (city) => {
        localStorage.setItem('defaultCity', city);
        setDefaultCity(city);
    }

    return [defaultCity, changeDefaultCity];
}