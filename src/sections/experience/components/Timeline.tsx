import TimelineItemInterface from "../../../interfaces/TimelineItemInterface";
import {Card, CardContent, CardHeader} from "@mui/material";
import TimelineItem from "./TimelineItem";
import './Timeline.css'

interface AppProps {
    timelineItems: Array<TimelineItemInterface>
}
export default function Timeline({timelineItems}: AppProps) {
    return <div className="timeline">
        {timelineItems.map((timelineItem: TimelineItemInterface) => {
        // TODO: figure out how to build a timeline
        return <TimelineItem timelineItem={timelineItem}/>
        })}
    </div>
}