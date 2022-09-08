import { useState } from "react";

export default function useUnits() {
    let [units, setUnits] = useState(localStorage.getItem('units'));

    if (units === null) {
        localStorage.setItem('units', 'celsius');
        setUnits('celsius');
    }

    let changeUnits = (units) => {
        localStorage.setItem('units', units);
        setUnits(units);
    }

    return [units, changeUnits];
}