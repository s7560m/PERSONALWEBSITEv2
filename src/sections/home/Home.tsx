// @ts-ignore
import * as Granim from "granim"
import './Home.css'
import {CSSProperties, StyleHTMLAttributes, useCallback, useEffect, useRef, useState} from "react";
import Landing from "./components/Landing";
import {IconButton} from "@mui/material";
import {Email, GitHub, LinkedIn} from "@mui/icons-material";
export default function Home() {

    const [scrollPos, setScrollPos] = useState<number>(0);
    const [canvasBrightness, setCanvasBrightness] = useState<number>(100);
    const [canvasWrapperStyle, setCanvasWrapperStyle] = useState<CSSProperties>(
        {filter: `brightness(${canvasBrightness}%)`}
    );

    useEffect(() => {

        function handleScroll() {

            setScrollPos(window.scrollY);
            // else {
            //     let newCanvasBrightness = 100;
            //     setCanvasBrightness(100);
            //     setCanvasWrapperStyle({filter: `brightness(${newCanvasBrightness})`})
            // }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    useEffect(() => {
        // calculate ratio
        if (window.innerWidth > 450) {
            let ratio = scrollPos / window.innerHeight;
            let newBrightness = 100 * ratio;
            let newBlur = 10 * ratio;
            setCanvasWrapperStyle({
                filter: `brightness(${100 - newBrightness}%) blur(${newBlur}px)`
            })
        }
    }, [scrollPos])

    const iconSize = {
        fontSize: "32px"
    }
    const MARGIN_SIZE = "10px";
    const iconButtonStying = {
        paddingLeft: "6px",
        paddingRight: "6px",
        marginRight: MARGIN_SIZE
    }

    const canvasWrapperRef = useRef<HTMLDivElement>(null);

    return (<div ref={canvasWrapperRef} id="canvas-wrapper" style={canvasWrapperStyle}>
        {/*<canvas id="canvas-basic" ref={canvasRef} />*/}
        <Landing canvasWrapperRef={canvasWrapperRef} />
        <div id="header-wrapper">
            <p id="header">HAYDEN HOFFMAN</p>
            <div id="divider"/>
            <p id="sub-header">Software Developer</p>
            <div id="icons-wrapper">
                <IconButton onClick={() => window.open("https://linkedin.com/in/haydenhoffmanca")} sx={iconButtonStying} color={"info"}>
                    <LinkedIn sx={iconSize}/>
                </IconButton>
                <IconButton onClick={() => window.open("https://github.com/s7560m")} sx={iconButtonStying} color={"info"}>
                    <GitHub sx={iconSize}/>
                </IconButton>
                <IconButton onClick={() => window.open("mailto:haydenhoffman@gmail.com")} sx={iconButtonStying} color={"info"}>
                    <Email sx={iconSize}/>
                </IconButton>
            </div>
        </div>
    </div>)
}