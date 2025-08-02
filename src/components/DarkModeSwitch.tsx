import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useThemeStore } from "../zustandStore";
import {useDarkMode} from "../hooks/useDarkMode";

function DarkModeSwitch() {
    const darkMode = useThemeStore((state) => state.darkMode);
    const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

    const {color} = useDarkMode()

    return (
        <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} arrow>
            <IconButton
                onClick={toggleDarkMode}
                color="inherit"
                sx={{ height: 40, width: 40 }}
            >
                {darkMode ? <LightMode sx={{color}} fontSize="medium" /> : <DarkMode fontSize="medium" />}
            </IconButton>
        </Tooltip>
    );
}

export default DarkModeSwitch;
