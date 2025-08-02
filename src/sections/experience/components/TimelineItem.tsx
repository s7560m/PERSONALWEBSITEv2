import TimelineItemInterface from "../../../interfaces/TimelineItemInterface";
import './TimelineItem.css'
import {
    Button,
    Card,
    Chip,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton
} from "@mui/material";
import {useState} from "react";
import {Close} from "@mui/icons-material";
interface AppProps {
    timelineItem: TimelineItemInterface,
}
export default function TimelineItem({timelineItem}: AppProps) {

    const [techStackDialog, setTechStackDialog] = useState<boolean>(false);
    return <>
        <Dialog open={techStackDialog} onClose={() => setTechStackDialog(false)}>
            <DialogTitle sx={{fontFamily: "Plus Jakarta Sans, Sans Serif"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div>TECH STACK.</div>
                <IconButton onClick={() => setTechStackDialog(false)} sx={{position: "relative", left: 8}}><Close/></IconButton>
            </div>
            </DialogTitle>
            <DialogContent>
                <div style={{display: "flex", maxWidth: 400, flexWrap: "wrap"}}>
                {timelineItem.skills.map(skill => <div style={{margin: 2}}><Chip label={skill} /></div>)}
                </div>
            </DialogContent>
            {/*<DialogActions>*/}
            {/*    <Button color={"secondary"} variant={"outlined"} onClick={() => setTechStackDialog(false)}>Close</Button>*/}
            {/*</DialogActions>*/}
        </Dialog>
        <Card elevation={10} className="timeline-item">
        <div className="timeline-item-wrapper">
            <div className="timeline-item-header">
                <h1 id="title-header" className="header">{timelineItem.company}</h1>
                <h2 id="company-header" className="header">{timelineItem.title}</h2>
            </div>
            <div className="timeline-item-body">
                <h3 id="description-text" style={{fontWeight: "normal"}} className="header header-2">{timelineItem.description}</h3>
            </div>
            <div className={"timeline-options"}>
                <div style={{display: "flex", gap: 10}}>
                    <Button onClick={() => setTechStackDialog(true)} sx={{fontSize: (window.innerWidth < 768) ? 10 : "initial" }} color={"secondary"} variant="outlined">Tech Stack</Button>
                </div>
                <div style={{fontWeight: "bold"}}>{timelineItem.dateRange}</div>

            </div>
            {/*<TimelineVertical/>*/}
        </div>
        {/*<div className="date-wrapper">*/}
        {/*    <h3 className="date-range">{timelineItem.dateRange}</h3>*/}
        {/*</div>*/}
    </Card></>
}