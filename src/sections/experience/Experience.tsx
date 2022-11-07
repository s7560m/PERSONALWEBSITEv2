import './Experience.css'
import TimelineItemInterface from "../../interfaces/TimelineItemInterface";
import Timeline from "./components/Timeline";
export default function Experience() {

    const timelineItems: Array<TimelineItemInterface> = [
        {
            title: "Coding Instructor",
            company: "Connect to Canada",
            description: "When I was rehired at Connect to Canada, I was tasked with teaching various subject matter, such as Scratch, Python, Web Development, and Robotics (using the Arduino) over video call. I organized lesson plans, assignments, and quizzes to continually test students' comprehensions in the subject matter.",
            dateRange: "July 2021 - Present"
        },
        {
            title: "Software Engineering Intern",
            company: "OddJob Handyman Services",
            description: "OddJob.ca is a professional handyman company that deals with jobs such as installing sinks, repairing doors, and more. My job was to design a web-based internal pricing tool that would let OddJob staff create handyman quotes without the need to manually fill out quotes in getjobber.com.",
            dateRange: "July 2020 - September 2020"
        }
    ]

    return (<div className={"experience"}>
        <div id="header-wrapper-experience">
            <p id="header-experience">EXPERIENCE.</p>
            <div id="divider-experience"/>
        </div>
        <Timeline timelineItems={timelineItems}/>
    </div>)
}