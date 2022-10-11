import { useState } from "react";

export default function useUnits() {
    let [units, setUnits] = useState(localStorage.getItem('units'));

    //Set units to 'celsius' on initial page laod
    if (units === null) {
        localStorage.setItem('units', 'celsius');
        setUnits('celsius');
    }

    //Set units to selected units
    let changeUnits = (units) => {
        localStorage.setItem('units', units);
        setUnits(units);
    }

    return [units, changeUnits];
}