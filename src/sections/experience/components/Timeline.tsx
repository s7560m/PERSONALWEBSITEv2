import TimelineItemInterface from "../../../interfaces/TimelineItemInterface";
import TimelineItem from "./TimelineItem";
import './Timeline.css'
import {useRef} from "react";

interface AppProps {
    timelineItems: Array<TimelineItemInterface>,
}
export default function Timeline({timelineItems}: AppProps) {
    useRef<HTMLDivElement[]>([]);

    return <div className="timeline">
        {timelineItems.map((timelineItem: TimelineItemInterface) => {
            return <div>
                <TimelineItem timelineItem={timelineItem}/>
            </div>
        })}
    </div>
}