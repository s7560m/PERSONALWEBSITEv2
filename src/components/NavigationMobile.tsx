import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
} from "@mui/material";
import './Navigation.css'
import {Close, MenuSharp} from "@mui/icons-material";
import {memo, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import DarkModeSwitch from "./DarkModeSwitch";

interface AppProps {
    navBtnEventListener: Function
}

function NavigationMobile({navBtnEventListener}: AppProps) {

    const iconButtonStyle = {fontSize: "40px", color: "black"}

    function scroll(section: string) {
        // dispatch callback to allow app to scroll to component
        navBtnEventListener(section);
        setShowDialog(false);
        // setTimeout(() => setShowDialog(false), 100);
    }

    const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [0, window.innerHeight * 0.5, window.innerHeight], [0, 0, 1])

    const [showDialog, setShowDialog] = useState<boolean>(false);

    const buttonStyling = {height: "80px", fontSize: "20px", width: "100%", marginBottom: "20px", fontFamily: "Plus Jakarta Sans, Sans Serif"};
    const resumeLink = "https://docs.google.com/document/d/1-SQ0mGyEKzCh1-IHYhcb6lSypipgKnZHHGW58N28KU4/edit?usp=sharing"
    return (
        <>
            <div className={"app-bar-mobile"} style={{position: "fixed", top: 0, zIndex: 5, padding: 8}}>
                <motion.div style={{zIndex: 0, height: 66, position: "fixed", top: 0, left: 0, background: "white", width: "100%", opacity, boxShadow: "0 0 17px 0px rgba(0, 0, 0, 0.2)", display: "flex", alignItems: "center", justifyContent: "space-between"}}/>
                <div id="hamburger-wrapper">
                    <IconButton onClick={() => setShowDialog(true)} sx={iconButtonStyle}>
                        <MenuSharp style={{fontSize: "30px"}}/>
                    </IconButton>
                </div>
                <DarkModeSwitch/>
            </div>
            <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
                <DialogTitle sx={{fontFamily: "Plus Jakarta Sans, Sans Serif"}}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <div>MENU.</div>
                        <IconButton onClick={() => setShowDialog(false)} sx={{position: "relative", left: 8}}><Close/></IconButton>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <Button color={"secondary"} variant="outlined" onClick={() => scroll("home")} sx={buttonStyling}>Home</Button>
                    <Button color={"secondary"} variant="outlined" onClick={() => scroll("experience")} sx={buttonStyling}>Experience</Button>
                    <Button color={"secondary"} variant="outlined" onClick={() => scroll("projects")} sx={buttonStyling}>Projects</Button>
                    <Button color={"secondary"} variant="outlined" onClick={() => scroll("about")} sx={buttonStyling}>About</Button>
                    <Button color={"secondary"} variant="outlined" onClick={() => window.open(resumeLink)} sx={buttonStyling}>Resume</Button>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default memo(NavigationMobile);