import { useState } from "react";

export default function useMyCities() {
    //Set My cities state, depending on if there are saved cities or not
    let [myCities, setMyCities] = useState(!localStorage.getItem('myCities') ? [] : JSON.parse(localStorage.getItem('myCities')));

    //Set My cities empty array if there are no saved cities
    if (myCities.length === 0) {
        localStorage.setItem('myCities', JSON.stringify(myCities));
    }

    //Add city to My cities list
    let addCity = (city) => {
        setMyCities(state => state.length === 0 ? [city] : [...state, city]);
        localStorage.setItem('myCities', myCities.length === 0 ? JSON.stringify([city]) : JSON.stringify([...myCities, city]));
    }

    //Remove city from My cities list
    let removeCity = (city) => {
        setMyCities(state => state.length <= 1 ? state = [] : state = state.filter(x => x !== city));
        localStorage.setItem('myCities', myCities.length === 1 ? JSON.stringify([]) : JSON.stringify(myCities.filter(x => x !== city)));
    }

    return [myCities, addCity, removeCity];
}