import { useThemeStore } from "../zustandStore";

export function useDarkMode() {
    const darkMode = useThemeStore((state) => state.darkMode);
    const color = darkMode ? "#FFFFFF" : "#000000"
    const background = darkMode ? "#000000" : "#FFFFFF"
    return {
        darkMode,
        background,
        color,
        darkModeBtnStyles: {
            color: color,
            borderColor: color,
            "&:hover": {
            borderColor: color,
                backgroundColor: "rgba(255, 255, 255, 0.08)", // subtle hover for dark mode
        },
    }
    };
}
