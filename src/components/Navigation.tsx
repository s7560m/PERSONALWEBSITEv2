import {Button} from "@mui/material";
import './Navigation.css'
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import DarkModeSwitch from "./DarkModeSwitch";
import {useDarkMode} from "../hooks/useDarkMode";
import {useNavigate} from "react-router-dom";

interface AppProps {
    navBtnEventListener: Function
}

export default function Navigation({navBtnEventListener}: AppProps) {
    const { color, background } = useDarkMode()
    const buttonStyle = {fontFamily: "Plus Jakarta Sans", color}
    const {scrollY} = useScroll();

    useRef<HTMLDivElement>(null);
    function scroll(section: string) {
        // dispatch callback to allow app to scroll to component
        navBtnEventListener(section);
    }

    const navigate = useNavigate()

    const opacity = useTransform(scrollY, [0, window.innerHeight * 0.5, window.innerHeight], [0, 0, 1])
    return (
        <div style={{background}} className={"app-bar"}>
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
            <div>
            <Button onClick={() => scroll("home")} sx={buttonStyle} className={"button"} color={"info"}>Home</Button>
            <Button onClick={() => navigate("/blog")} sx={buttonStyle} color={"info"}>Blog</Button>
            <Button onClick={() => scroll("experience")} sx={buttonStyle} color={"info"}>Experience</Button>
            <Button onClick={() => scroll("projects")} sx={buttonStyle} color={"info"}>Projects</Button>
            <Button onClick={() => scroll("about")} sx={buttonStyle} color={"info"}>About Me</Button>
            <Button onClick={() => window.open("https://docs.google.com/document/d/1-SQ0mGyEKzCh1-IHYhcb6lSypipgKnZHHGW58N28KU4/edit?usp=sharing")} sx={buttonStyle} color={"info"}>Resume</Button>
            </div>
            <DarkModeSwitch/>
        </div>
    )
}