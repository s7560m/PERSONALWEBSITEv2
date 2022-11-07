import {CircularProgress} from "@mui/material";
import {CSSProperties} from "react";

interface AppProps {
    total: number,
    value: number,
}

export default function CircularProgressWithLabel({total, value}: AppProps) {

    let ratio = Math.floor(value / total) * 100;

    return <CircularProgress color="primary" variant="determinate" value={ratio}/>
}