import { useState } from "react";

export default function useTheme() {
    let [theme, setTheme] = useState(localStorage.getItem('theme'));

    if (theme === null) {
        localStorage.setItem('theme', 'light');
        setTheme('light');
    }

    let changeTheme = (theme) => {
        localStorage.setItem('theme', theme);
        setTheme(theme);
    }

    return [theme, changeTheme];
}