import {AppBar, Button, Dialog, DialogContent, DialogTitle, IconButton, Toolbar} from "@mui/material";
import './Navigation.css'
import {Email, GitHub, LinkedIn, Menu} from "@mui/icons-material";
import {memo, useEffect, useRef, useState} from "react";

interface AppProps {
    navBtnEventListener: Function
}

function NavigationMobile({navBtnEventListener}: AppProps) {

    const buttonStyle = {fontFamily: "Plus Jakarta Sans"}
    const iconButtonStyle = {float: "right", fontSize: "40px"}

    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    })

    const appbar = useRef<HTMLDivElement>(null);
    function getAppBarClass() {
        if (scrollPosition > 0) return "app-bar app-bar-overlay";
        if (scrollPosition === 0 && appbar.current?.className.includes("app-bar-overlay")) {
            return "app-bar app-bar-unoverlay"
        }
        return "app-bar"
    }

    const iconWrapperRef = useRef<HTMLDivElement>(null);

    function getIconClass() {
        // scroll pos greater than 3/4s of window inner height
        if (scrollPosition > 3 * window.innerHeight / 4) return "show-icon-wrapper";

        if (["show-icon-wrapper", "hide-icon-wrapper"].indexOf(iconWrapperRef.current?.className as string) > -1) {
            return "hide-icon-wrapper"
        }
        // iconwrapperref should not be null here
        return "init-icon-class"

    }

    function scroll(section: string) {
        // dispatch callback to allow app to scroll to component
        navBtnEventListener(section);
        console.log(section);
        setShowDialog(false);
        // setTimeout(() => setShowDialog(false), 100);
    }

    const [showDialog, setShowDialog] = useState<boolean>(false);

    const buttonStyling = {height: "80px", fontSize: "20px", width: "100%", marginBottom: "20px", fontFamily: "Plus Jakarta Sans, Sans Serif"};

    return (
        <div ref={appbar} className={getAppBarClass()}>
            <div id="hamburger-wrapper">
                <IconButton onClick={() => setShowDialog(true)} color={"info"} sx={iconButtonStyle}>
                    <Menu style={{fontSize: "40px"}}/>
                </IconButton>
            </div>
            <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
                <DialogTitle sx={{fontFamily: "Plus Jakarta Sans, Sans Serif"}}>
                    Menu.
                </DialogTitle>
                <DialogContent>
                    <Button color={"secondary"} variant="contained" onClick={() => scroll("home")} sx={buttonStyling}>Home</Button>
                    <Button color={"secondary"} variant="contained" onClick={() => scroll("experience")} sx={buttonStyling}>Experience</Button>
                    <Button color={"secondary"} variant="contained" onClick={() => scroll("projects")} sx={buttonStyling}>Projects</Button>
                    <Button color={"secondary"} variant="contained" onClick={() => scroll("about")} sx={buttonStyling}>About</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default memo(NavigationMobile);