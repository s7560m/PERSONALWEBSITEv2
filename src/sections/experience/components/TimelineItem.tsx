import TimelineItemInterface from "../../../interfaces/TimelineItemInterface";
import './TimelineItem.css'
interface AppProps {
    timelineItem: TimelineItemInterface
}

function TimelineVertical() {
    const timeline_vertical_style = {
        height: "50px",
        width: "10px",
        margin: "auto",
        marginTop: "10px",
        backgroundColor: "white"
    }
    return <div style={timeline_vertical_style}></div>
}

export default function TimelineItem({timelineItem}: AppProps) {
    return <div className="timeline-item">
        <div className="timeline-item-wrapper">
            <div className="timeline-item-header">
                <h1 className="header">{timelineItem.title}</h1>
                <h2 className="header">{timelineItem.company}</h2>
            </div>
            <div className="timeline-item-body">
                <h3 className="header header-2">{timelineItem.description}</h3>
            </div>
        {/*<TimelineVertical/>*/}
        </div>
        <div className="date-wrapper">
            <h3 className="date-range">{timelineItem.dateRange}</h3>
        </div>
    </div>
}