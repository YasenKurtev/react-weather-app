import { useState } from "react";

export default function useDefaultCity() {
    let [defaultCity, setDefaultCity] = useState(localStorage.getItem('defaultCity'));

    //Set default city to 'Plovdiv' on initial page load
    if (defaultCity === null) {
        localStorage.setItem('defaultCity', 'Plovdiv');
        setDefaultCity('Plovdiv')
    }

    //Set default city to selected city
    let changeDefaultCity = (city) => {
        localStorage.setItem('defaultCity', city);
        setDefaultCity(city);
    }

    return [defaultCity, changeDefaultCity];
}