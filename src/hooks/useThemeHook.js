import { useState } from "react";

export default function useTheme() {
    let [theme, setTheme] = useState(localStorage.getItem('theme'));

    //Set theme to 'light' on initial page laod
    if (theme === null) {
        localStorage.setItem('theme', 'light');
        setTheme('light');
    }

    //Set theme to selected theme
    let changeTheme = (theme) => {
        localStorage.setItem('theme', theme);
        setTheme(theme);
    }

    return [theme, changeTheme];
}