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
                <h1 id="title-header" className="header">{timelineItem.company}</h1>
                <h2 id="company-header" className="header">{timelineItem.title}</h2>
            </div>
            <div className="timeline-item-body">
                <h3 id="description-text" className="header header-2">{timelineItem.description}</h3>
            </div>
        {/*<TimelineVertical/>*/}
        </div>
        <div className="date-wrapper">
            <h3 className="date-range">{timelineItem.dateRange}</h3>
        </div>
    </div>
}