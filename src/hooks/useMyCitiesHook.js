import { useState } from "react";

export default function useMyCities() {
    let [myCities, setMyCities] = useState(localStorage.getItem('myCities'));

    if (myCities === null) {
        localStorage.setItem('myCities', []);
        setMyCities([]);
    }

    let addCity = (city) => {
        localStorage.setItem('myCities', [...myCities, city]);
        setMyCities(state => state = [...state, city]);
    }

    let removeCity = (city) => {
        setMyCities(state => state = state.splice(state.indexOf(city), 1));
        localStorage.setItem('myCities', myCities);
    }

    return [myCities, addCity, removeCity];
}