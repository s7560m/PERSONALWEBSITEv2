import {AppBar, Button, IconButton, Toolbar} from "@mui/material";
import './Navigation.css'
import {Email, GitHub, LinkedIn} from "@mui/icons-material";
import {memo, useEffect, useRef, useState} from "react";

interface AppProps {
    navBtnEventListener: Function
}

function Navigation({navBtnEventListener}: AppProps) {

    const buttonStyle = {fontFamily: "Plus Jakarta Sans"}
    const iconButtonStyle = {float: "right"}

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
    }

    const resumeLink = "https://drive.google.com/file/d/1ljXq52D8t4RnaYdnXClneUesSXcBybm8/view?usp=sharing"
    return (
        <div ref={appbar} className={getAppBarClass()}>
            <Button onClick={() => scroll("home")} sx={buttonStyle} className={"button"} color={"info"}>Home</Button>
            <Button onClick={() => scroll("experience")} sx={buttonStyle} color={"info"}>Experience</Button>
            <Button onClick={() => scroll("projects")} sx={buttonStyle} color={"info"}>Projects</Button>
            <Button onClick={() => scroll("about")} sx={buttonStyle} color={"info"}>About Me</Button>
            <Button onClick={() => window.open("https://drive.google.com/file/d/1ljXq52D8t4RnaYdnXClneUesSXcBybm8/view?usp=sharing")} sx={buttonStyle} color={"info"}>Resume</Button>
            <div id="nav-icon-wrapper" ref={iconWrapperRef} className={getIconClass()}>
                <IconButton onClick={() => window.open("mailto:haydenhoffman@gmail.com")} color={"info"} sx={iconButtonStyle}>
                    <Email/>
                </IconButton>
                <IconButton onClick={() => window.open("https://github.com/s7560m")} color={"info"} sx={iconButtonStyle}>
                    <GitHub/>
                </IconButton>
                <IconButton onClick={() => window.open("https://linkedin.com/in/haydenhoffmanca")} color={"info"} sx={iconButtonStyle}>
                    <LinkedIn/>
                </IconButton>
            </div>
        </div>
    )
}

export default memo(Navigation);