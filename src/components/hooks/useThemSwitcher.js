import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            const newMode = userPref ? userPref : (mediaQuery.matches ? "dark" : "light");
            setMode(newMode);
            document.documentElement.classList.toggle("dark", newMode === "dark");
        };

        handleChange();

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleMode = () => {
        const newMode = mode === "dark" ? "light" : "dark";
        window.localStorage.setItem("theme", newMode);
        document.documentElement.classList.toggle("dark", newMode === "dark");
        setMode(newMode); 
    };

    return [mode, toggleMode];
};

export default useThemeSwitcher;
