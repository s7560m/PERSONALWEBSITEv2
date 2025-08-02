import { useThemeStore } from "../zustandStore";

export function useDarkMode() {
    const darkMode = useThemeStore((state) => state.darkMode);

    return {
        darkMode,
        background: darkMode ? "#000000" : "#FFFFFF",
        color: darkMode ? "#FFFFFF" : "#000000",
    };
}
