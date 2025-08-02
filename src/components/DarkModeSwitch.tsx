import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useThemeStore } from "../zustandStore";

function DarkModeSwitch() {
    const darkMode = useThemeStore((state) => state.darkMode);
    const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

    return (
        <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} arrow>
            <IconButton
                onClick={toggleDarkMode}
                color="inherit"
                sx={{ height: 40, width: 40 }}
            >
                {darkMode ? <LightMode fontSize="medium" /> : <DarkMode fontSize="medium" />}
            </IconButton>
        </Tooltip>
    );
}

export default DarkModeSwitch;
