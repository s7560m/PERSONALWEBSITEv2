// @ts-ignore
import './Home.css'
import {useRef} from "react";
import {IconButton, Tooltip} from "@mui/material";
import {Email, GitHub, KeyboardDoubleArrowDown, LinkedIn} from "@mui/icons-material";
import {motion, useScroll, useTransform} from "framer-motion";
import Lottie from 'lottie-react'
import LottieAnimation from '../../assets/lottie animation.json'
export default function Home() {

    // const [scrollPos, setScrollPos] = useState<number>(0);
    const {scrollY} = useScroll();

    const iconSize = {
        fontSize: "32px"
    }
    const MARGIN_SIZE = "10px";
    const iconButtonStying = {
        paddingLeft: "6px",
        paddingRight: "6px",
        marginRight: MARGIN_SIZE,
        color: "black"
    }

    const canvasWrapperRef = useRef<HTMLDivElement>(null);

    const opacity = useTransform(scrollY, [0, window.innerHeight * 0.75], [1, 0])
    const scale = useTransform(scrollY, [0, window.innerHeight * 0.75], [1, 0.98])


    return (<div ref={canvasWrapperRef} id="canvas-wrapper">
        {/*<canvas id="canvas-basic" ref={canvasRef} />*/}
        {/*<Landing canvasWrapperRef={canvasWrapperRef} />*/}
        {/* @ts-ignore */}
        <motion.div id="header-wrapper" style={{opacity, scale}}>
            <motion.div id="header">Hi, I'm Hayden.</motion.div>
            {/*<div id="divider"/>*/}
            <motion.div id="sub-header">I am a full-stack software developer based in Toronto, Canada. I design user experiences. I build APIs. I transform companies.</motion.div>
            <motion.div id="icons-wrapper">
                <Tooltip title={"My Linkedin"}>
                    <IconButton onClick={() => window.open("https://linkedin.com/in/haydenhoffmanca")} sx={iconButtonStying} color={"info"}>
                        <LinkedIn sx={iconSize}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={"My Github"}>
                <IconButton onClick={() => window.open("https://github.com/s7560m")} sx={iconButtonStying} color={"info"}>
                    <GitHub sx={iconSize}/>
                </IconButton>
                </Tooltip>
                <Tooltip title={"Email me"}>
                <IconButton onClick={() => window.open("mailto:haydenhoffman@gmail.com")} sx={iconButtonStying} color={"info"}>
                    <Email sx={iconSize}/>
                </IconButton>
                </Tooltip>
            </motion.div>
        </motion.div>
        <motion.div id="lottie" style={{opacity, scale}}>
            <Lottie loop animationData={LottieAnimation}/>
        </motion.div>
        {/*<dotlottie-player src="https://lottie.host/embed/add80e3d-9c5b-4af6-8706-2357c7e76b25/F5hb2yqqi6.json"/>*/}
        <motion.div className={"keyboard-style"} style={{opacity, position: "fixed", height: 100, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", width: "100%"}}>
            <KeyboardDoubleArrowDown sx={{fontSize: 40}}/>
        </motion.div>
    </div>)
}