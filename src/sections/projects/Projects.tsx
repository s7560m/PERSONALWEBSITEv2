import './Projects.css'
import Project from "../../interfaces/ProjectInterface";
import ProjectItem from "./components/ProjectItem";
import {CSSProperties, useEffect, useRef, useState} from "react";
import useOnScreen, {isInViewport} from "../../hooks/useOnScreen";
import CircularProgressWithLabel from "../../components/CircularProgressWithLabel";
import {CircularProgress} from "@mui/material";
import ProjectList from "./components/ProjectList";

interface AppProps {
    setValue?: Function,
    setShowCircularProgress?: Function
}
export default function Projects({setValue, setShowCircularProgress}: AppProps) {

    const projectArray: Array<Project> = [
        {
            title: "CTC Learning Platform",
            link: 'https://ctc-learning-platform.web.app',
            src: "https://firebasestorage.googleapis.com/v0/b/personal-site-57ec2.appspot.com/o/images%2FScreen%20Shot%202022-09-05%20at%2011.56.02%20AM.png?alt=media&token=9932f34c-ada4-42ca-b814-9a1c35fcceb4",
            description: "This is a learning platform I built by myself in React.js and Flask to supplement my teachings at my Connect to Canada coding instructor job. This is a fully-working platform that allows the admin (me) to create classes, create assignments, enrol users in classes, mark a user's submission, and more. I built this platform to both solidify my understanding in fullstack development and CI / CD.",
            color: "rgb(78, 63, 118)",
            isVideo: false,
        },
        {
            title: "Gymaction",
            link: 'https://gymaction.ca',
            src: "https://firebasestorage.googleapis.com/v0/b/personal-site-57ec2.appspot.com/o/images%2FScreen%20Shot%202022-04-20%20at%204.11.59%20PM.png?alt=media&token=b34511e3-65dc-4191-a9f7-99e6209cd9b5",
            description: "Gymaction is a web app that allows users to track their progress and compete with their friends in the gym\n" +
                "using timestamped gym logs. I built this web app using my current knowledge of Vue.js and Vuetify for the frontend, and I used Express.js and MongoDB for the backend. Something I wanted in this project was user session persistence (maintaining a user's preferences after they log out), and this was achieved by implementing the use of cookies and sessions using the express-session library.",
            color: "black",
            isVideo: false,
        },
        {
            title: "Music Portfolio",
            link: "https://music.haydenhoffman.io",
            src: "https://firebasestorage.googleapis.com/v0/b/personal-site-57ec2.appspot.com/o/images%2FScreen%20Shot%202022-05-16%20at%205.54.50%20PM.png?alt=media&token=448a0b74-c952-4869-bd3d-eefd40d37b6e",
            description: "My own music portfolio hosted on a subdomain of haydenhoffman.io. This music portfolio showcases some of my CSS skills, such as animations and responsiveness.",
            color: "#1C5253",
            isVideo: false,
        },
        {
            title: "Parkanywhere.online [DeltaHacks Winner!]",
            link: "https://devpost.com/software/parkanywhere-online",
            src: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/423/505/datas/original.png",
            description: "Congestion is a serious problem across major cities across the world and it has been a complex issue to solve; in fact, humanity has yet to develop a solution to completely solve congestion. Parkanywhere.online provides the ability for end-users to search and pre-book empty parking slots close to a specified location, which the parking slots are made available by other end-users on the platform whether they are residential, commercial, or industrial.",
            color: "#1C2826",
            isVideo: false,
        },
        {
            title: "FormAI",
            link: "https://devpost.com/software/form-ai",
            src: "https://www.youtube.com/embed/7KCuC8-i4EI",
            description: "Form AI is an android app that uses pose detection to determine if you are using proper form while exercising. For example, it can determine if your squat form is correct or not, just by using your camera! To determine the correct form, 33 nodes were detected on the joints (e.g. left knee, left elbow, right shoulder, etc.) of the user via Google's Pose Detection API, and the angles of each joint were used to determine the correctness of a user's form.",
            color: "#D64550",
            isVideo: true,
        },
        {
            title: "Chrome Dinosaur Game (Arduino Replica)",
            link: "https://github.com/s7560m/arduino-dinosaur-game",
            src: "https://www.youtube.com/embed/0xL7578DOQA",
            description: "Built a replica of Google Chrome’s dinosaur game (that can be played when offline) using an Arduino UNO R3. It uses an LCD 16x2 to display the game, and a push button to control the jumping.",
            color: "darkred",
            isVideo: true,
        },
    ]

    const div = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(div);
    const [currentProjectNum, setCurrentProjectNum] = useState<number>(1);

    useEffect(() => {
        let ratio = Math.floor(currentProjectNum * 100 / projectArray.length);

        if (setValue !== undefined) {
            setValue(ratio);
        }
    }, [currentProjectNum])

    useEffect(() => {
        if (setShowCircularProgress !== undefined) {
            setShowCircularProgress(isVisible);
        }
    }, [isVisible])

    return (<div ref={div} className={isVisible ? "projects-show" : "projects-hide"} id="projects">
        <div id="header-wrapper-projects">
            <p id="header-projects">PROJECTS.</p>
            {/*<div style={{height: "20px", width: "120%", right: "10px", top: "10px", position: "relative", backgroundColor: "white"}}/>*/}
            <div id="divider-projects"/>
        </div>
        <ProjectList projectArray={projectArray} setCurrentProjectNum={setCurrentProjectNum}/>
    </div>)
}