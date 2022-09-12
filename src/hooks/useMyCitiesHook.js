import { useState } from "react";

export default function useMyCities() {
    let [myCities, setMyCities] = useState(!localStorage.getItem('myCities') ? [] : JSON.parse(localStorage.getItem('myCities')));

    if (myCities.length === 0) {
        localStorage.setItem('myCities', JSON.stringify(myCities));
    }

    let addCity = (city) => {
        localStorage.setItem('myCities', myCities.length === 0 ? JSON.stringify([city]) : JSON.stringify([...myCities, city]));
        setMyCities(JSON.parse(localStorage.getItem('myCities')));
        
        console.log(myCities);
    }

    let removeCity = (city) => {
        setMyCities(state => state.length <= 1 ? state = [] : state = state.filter(x => x !== city));
        localStorage.setItem('myCities', myCities.length === 1 ? JSON.stringify([]) : JSON.stringify(myCities.filter(x => x !== city)));
        console.log(myCities);
    }

    return [myCities, addCity, removeCity];
}