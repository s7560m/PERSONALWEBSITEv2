import './Experience.css'
import TimelineItemInterface from "../../interfaces/TimelineItemInterface";
import Timeline from "./components/Timeline";
import {Card, CardContent, IconButton, Tooltip} from "@mui/material";
import {motion, useScroll, useTransform} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {Email, LinkedIn} from "@mui/icons-material";
import {useDarkMode} from "../../hooks/useDarkMode";
export default function Experience() {

    const timelineItems: Array<TimelineItemInterface> = [
        {
            title: "Software Developer",
            company: "Zensurance",
            description: "Zensurance is a Canadian-based insurance brokerage for small businesses. My role as a software developer strongly follows the software development lifecycle and agile methodology. I do a wide range of things at Zensurance, such as: building various features for stakeholders, provisioning AWS infrastructure using terraform, writing / improving our unit and integration testing, conducting insurance-related document generation testing on salesforce, code reviews, software monitoring, and much more.",
            dateRange: "Sept 2024 - Present",
            skills: ["Nestjs", "TypeORM", "PostgreSQL", "MongoDB", "Typescript", "Docker", "AWS", "Kubernetes (AWS EKS)", "Terraform", "Salesforce", "Kafka"]
        },
        {
            title: "Full Stack Developer",
            company: "Knotty Knickers",
            description: "Knotty Knickers is a Canadian-based lingerie company. My job at Knotty Knickers initially was to work on their Shopify websites to make design changes and UI / UX implementations. Later on, I worked with their marketing and warehouse teams to single-handedly build various full-stack software, such as an internal inventory system, a comprehensive sales dashboard, and order-packing software.",
            dateRange: "February 2023 - July 2024",
            skills: ["React", "Redux", "MongoDB", "Typescript", "Node.js", "Firebase", "Docker", "Google Cloud Platform", "Shopify", "Jest", "Webhooks"]
        },
        {
            title: "Full Stack Developer",
            company: "Connect to Canada",
            description: "Connect to Canada is a small Canadian-based education company with a goal of teaching students STEM-related courses. When I was at Connect to Canada, my job was to assist in the development and improvement of a web-based learning platform. I also built an analytics dashboard for CTC's instuctors to assess student performance. I was working part time at CTC while I was in school, then transitioned to full time after graduation.",
            dateRange: "May 2021 - September 2022",
            skills: ["React", "Redux", "MySQL", "Typescript", "Node.js", "Flask", "Docker", "Google Cloud Platform", "Jest", "Pytest"]
        },
        {
            title: "Software Engineer",
            company: "OddJob Handyman Services",
            description: "OddJob.ca is a professional handyman company that deals with jobs such as installing sinks, repairing doors, and more. My job was to assist in the development of a web-based internal pricing tool that would let OddJob staff create handyman quotes and invoices without having to manually fill them out in getjobber.com.",
            dateRange: "July 2020 - September 2020",
            skills: ["Vue", "Vuex", "Node.js", "Firebase", "Jest"]
        },
        {
            title: "Web Developer",
            company: "Freelance Work",
            description: "Currently working on frontend design changes for yogajeans.ca and climbonsight.ca.",
            dateRange: "July 2024 - Present",
            skills: ["Vue.js", "HTML", "CSS", "Javascript", "Shopify"]
        }
    ]

    const {scrollY} = useScroll();

    const [timelineHeight, setTimelineHeight] = useState<number>(0)
    const timelineRef = useRef<HTMLDivElement>(null);
    const opacity = useTransform(scrollY, [window.innerHeight - 100, window.innerHeight + 50, window.innerHeight + timelineHeight - 300, window.innerHeight + timelineHeight - 200], [0, 1, 1, 0])
    const experienceSidewaysOpacity = useTransform(scrollY, [window.innerHeight + 100, window.innerHeight + 500, window.innerHeight + timelineHeight - 300, window.innerHeight + timelineHeight - 200], [0, 1, 1, 0])
    const display = useTransform(scrollY, [window.innerHeight - 200, window.innerHeight - 100, window.innerHeight + timelineHeight - 200, window.innerHeight + timelineHeight - 100], ["none", "block", "block", "none"])
    const skillsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (timelineRef.current) {
            setTimelineHeight(timelineRef.current.offsetHeight)
        }

    }, [])

    const iconSize = {
        fontSize: "32px",
        padding: 0
    }

    const MARGIN_SIZE = "10px";
    const {color} = useDarkMode()
    const iconButtonStying = {
        paddingLeft: 0,
        paddingRight: "6px",
        marginRight: MARGIN_SIZE,
        color
    }

    return (
        <div className={"experience"} ref={experienceRef}>
        <div id="header-wrapper-experience">
            <motion.div id="header-experience-sideways" initial={{opacity: 0}} style={{opacity: experienceSidewaysOpacity}}>RELEVANT EXPERIENCE.</motion.div>
            <p id="header-experience">RELEVANT EXPERIENCE.</p>
            <div id="divider-experience"/>
        </div>
        <div style={{display: "flex"}} ref={timelineRef}>
            <Timeline timelineItems={timelineItems}/>
            <div className={"experience-skills"}>
            <motion.div ref={skillsRef} style={{opacity, display}} initial={{opacity: 0}}>
                <Card elevation={5}>
                    <CardContent sx={{padding: 5, fontFamily: "Plus Jakarta Sans"}}>
                        <h3 style={{marginTop: 0}}>Got any questions about my experience?</h3>
                        <div style={{display: "flex", alignItems: "center"}}>If so, feel free to reach out at any of the links below.</div>
                        <div style={{display: "flex", marginTop: 10, justifyContent: "start", position: "relative",
                            right: 3}}>
                            <Tooltip title={"My Linkedin"}>
                            <IconButton onClick={() => window.open("https://linkedin.com/in/haydenhoffmanca")} sx={iconButtonStying} color={"info"}>
                                <LinkedIn sx={iconSize}/>
                            </IconButton>
                            </Tooltip>
                            <Tooltip title={"Email me"}>
                            <IconButton onClick={() => window.open("mailto:haydenhoffman@gmail.com")} sx={iconButtonStying} color={"info"}>
                                <Email sx={iconSize}/>
                            </IconButton>
                            </Tooltip>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            </div>
        </div>
    </div>)
}