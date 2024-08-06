import {AppBar, Button, IconButton, Toolbar} from "@mui/material";
import './Navigation.css'
import {Email, GitHub, LinkedIn} from "@mui/icons-material";
import {memo, useEffect, useRef, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

interface AppProps {
    navBtnEventListener: Function
}

function Navigation({navBtnEventListener}: AppProps) {

    const buttonStyle = {fontFamily: "Plus Jakarta Sans", color: "black"}
    const iconButtonStyle = {float: "right"}

    const {scrollY} = useScroll();
    // const handleScroll = () => {
    //     setScrollPosition(window.scrollY);
    // };
    //
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll);
    // })
    //
    // const appbar = useRef<HTMLDivElement>(null);
    // function getAppBarClass() {
    //     if (scrollPosition > 0) return "app-bar app-bar-overlay";
    //     if (scrollPosition === 0 && appbar.current?.className.includes("app-bar-overlay")) {
    //         return "app-bar app-bar-unoverlay"
    //     }
    //     return "app-bar"
    // }

    const iconWrapperRef = useRef<HTMLDivElement>(null);

    function scroll(section: string) {
        // dispatch callback to allow app to scroll to component
        navBtnEventListener(section);
    }

    const opacity = useTransform(scrollY, [0, window.innerHeight * 0.5, window.innerHeight], [0, 0, 1])

    const resumeLink = "https://drive.google.com/file/d/1ljXq52D8t4RnaYdnXClneUesSXcBybm8/view?usp=sharing"
    return (
        <div className={"app-bar"}>
            <motion.div style={{
    position: "fixed",
    top: 0,
                left: 0,
    width: "100%",
    height: 64,
    opacity,
    boxShadow: "0 0 17px 0px rgba(0, 0, 0, 0.2)",
    padding: "16px 32px"
}}/>
            <Button onClick={() => scroll("home")} sx={buttonStyle} className={"button"} color={"info"}>Home</Button>
            <Button onClick={() => scroll("experience")} sx={buttonStyle} color={"info"}>Experience</Button>
            <Button onClick={() => scroll("projects")} sx={buttonStyle} color={"info"}>Projects</Button>
            <Button onClick={() => scroll("about")} sx={buttonStyle} color={"info"}>About Me</Button>
            <Button onClick={() => window.open("https://drive.google.com/file/d/1ljXq52D8t4RnaYdnXClneUesSXcBybm8/view?usp=sharing")} sx={buttonStyle} color={"info"}>Resume</Button>
            {/*<div id="nav-icon-wrapper" ref={iconWrapperRef} className={getIconClass()}>*/}
            {/*    <IconButton onClick={() => window.open("mailto:haydenhoffman@gmail.com")} color={"info"} sx={iconButtonStyle}>*/}
            {/*        <Email/>*/}
            {/*    </IconButton>*/}
            {/*    <IconButton onClick={() => window.open("https://github.com/s7560m")} color={"info"} sx={iconButtonStyle}>*/}
            {/*        <GitHub/>*/}
            {/*    </IconButton>*/}
            {/*    <IconButton onClick={() => window.open("https://linkedin.com/in/haydenhoffmanca")} color={"info"} sx={iconButtonStyle}>*/}
            {/*        <LinkedIn/>*/}
            {/*    </IconButton>*/}
            {/*</div>*/}
        </div>
    )
}

export default memo(Navigation);