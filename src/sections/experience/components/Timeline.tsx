import TimelineItemInterface from "../../../interfaces/TimelineItemInterface";
import {Card, CardContent, CardHeader} from "@mui/material";
import TimelineItem from "./TimelineItem";
import './Timeline.css'
import {useEffect, useRef} from "react";
import {useScroll} from "framer-motion";

interface AppProps {
    timelineItems: Array<TimelineItemInterface>,
}
export default function Timeline({timelineItems}: AppProps) {
    const itemsRef = useRef<HTMLDivElement[]>([]);

    // useEffect(() => {
    //     itemsRef.current = itemsRef.current.slice(0, timelineItems.length);
    // }, [timelineItems])
    //
    // useEffect(() => {
    //     if (itemsRef.current) {
    //         // send list of coordinates plus index
    //         sendListOfCoordinates(itemsRef.current.map((el, index) => {
    //             return {
    //                 index,
    //                 coordinates: el.getBoundingClientRect()
    //             }
    //         }))
    //     }
    // }, [itemsRef])

    return <div className="timeline">
        {timelineItems.map((timelineItem: TimelineItemInterface, timelineItemIndex) => {
        // TODO: figure out how to build a timeline
            return <div>
                <TimelineItem timelineItem={timelineItem}/>
            </div>
        })}
    </div>
}