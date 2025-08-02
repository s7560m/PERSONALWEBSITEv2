import {Card, CardContent} from "@mui/material";
import {CSSProperties} from "react";

export default function MacDialog({title, description, image, leftDesktop, topDesktop, zIndex}: {title: string, description?: string, image?: string, leftDesktop: number, topDesktop: number, leftMobile: number, topMobile: number, zIndex: number}) {
    function getContainerStyle(): CSSProperties {
        if (window.innerWidth >= 768) {
            return {position: "absolute", left: `${leftDesktop}vw`, top: `${topDesktop}vh`, zIndex}
        } else {
            return {position: "relative", left: 0, top: 0, zIndex, margin: "auto"}
        }
    }

    return <div style={getContainerStyle()}>
        <Card className="about-me-card" elevation={20} color="primary">
        <div style={{backgroundColor: "lightgrey", height: "32px", display: "flex", flexDirection: "row"}}>
            {/*<div className="about-me-header">About me.</div>*/}
            <div style={{display: "flex", flexDirection: "row"}}>
                <svg height="32px" width="24px" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="red" cx="16" cy="14" r="8" />
                </svg>
                <svg height="32px" width="24px" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="orange" cx="16" cy="14" r="8" />
                </svg>
                <svg height="32px" width="24px" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="green" cx="16" cy="14" r="8" />
                </svg>
            </div>
            <div style={{width: "fit-content", margin: "auto", fontSize: "14px", position: "relative", right: "24px"}}>{title}</div>
        </div>
        {/*<CardHeader sx={{backgroundColor: "lightgrey"}}>*/}
        {/*    <p style={{color: "white"}}>test</p>*/}
        {/*</CardHeader>*/}
        <CardContent>
            <div className="about-me-card-content">
                {image && <img className="about-me-img"
                      src={image}
                      loading="lazy" alt="Picture of me on mountain in the Azores."/>}
                {description && <p className="about-me-text">
                    {description}</p>}
            </div>
        </CardContent>
    </Card></div>
}