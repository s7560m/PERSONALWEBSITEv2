import './Projects.css'
import Project from "../../interfaces/ProjectInterface";
import ProjectItem from "./components/ProjectItem";
import {CSSProperties, useEffect, useRef, useState} from "react";
import useOnScreen, {isInViewport} from "../../hooks/useOnScreen";
import CircularProgressWithLabel from "../../components/CircularProgressWithLabel";
import {CircularProgress} from "@mui/material";
import ProjectList from "./components/ProjectList";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    wrap
} from 'framer-motion';

interface AppProps {
    setValue?: Function,
    setShowCircularProgress?: Function
}
export default function Projects({setValue, setShowCircularProgress}: AppProps) {

    const projectArray: Array<Project> = [
        {
            title: "Parkanywhere.online [DeltaHacks Winner]",
            link: "https://devpost.com/software/parkanywhere-online",
            src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/423/505/datas/gallery.jpg",
            description: "Congestion is a serious problem across major cities across the world and it has been a complex issue to solve; in fact, humanity has yet to develop a solution to completely solve congestion. Parkanywhere.online provides the ability for end-users to search and pre-book empty parking slots close to a specified location, which the parking slots are made available by other end-users on the platform whether they are residential, commercial, or industrial.",
            color: "white",
            isVideo: false,
        },
        {
            title: "FormAI",
            link: "https://devpost.com/software/form-ai",
            src: "https://www.youtube.com/embed/7KCuC8-i4EI",
            description: "Form AI is an android app that uses pose detection to determine if you are using proper form while exercising. For example, it can determine if your squat form is correct or not, just by using your camera! To determine the correct form, 33 nodes were detected on the joints (e.g. left knee, left elbow, right shoulder, etc.) of the user via Google's Pose Detection API, and the angles of each joint were used to determine the correctness of a user's form.",
            color: "white",
            isVideo: true,
        },
        {
            title: "Chrome Dinosaur Game (Arduino Replica)",
            link: "https://github.com/s7560m/arduino-dinosaur-game",
            src: "https://www.youtube.com/embed/0xL7578DOQA",
            description: "Built a replica of Google Chrome’s dinosaur game (that can be played when offline) using an Arduino UNO R3. It uses an LCD 16x2 to display the game, and a push button to control the jumping.",
            color: "white",
            isVideo: true,
        },
    ]

    // const div = useRef<HTMLDivElement>(null);
    // const isVisible = useOnScreen(div);
    // const [currentProjectNum, setCurrentProjectNum] = useState<number>(1);
    //
    // useEffect(() => {
    //     let ratio = Math.floor(currentProjectNum * 100 / projectArray.length);
    //
    //     if (setValue !== undefined) {
    //         setValue(ratio);
    //     }
    // }, [currentProjectNum])
    //
    // useEffect(() => {
    //     if (setShowCircularProgress !== undefined) {
    //         setShowCircularProgress(isVisible);
    //     }
    // }, [isVisible])

    // function getProjectsWrapperClass() {
    //     let init = "projects-init"
    //     if (window.innerWidth <= 768) return "projects-mobile";
    //     return "projects-hide " + init;
    // }
    function ProjectsHeader() {
        const projectsHeaderArr: string[] = [];
        for (let i = 0; i < 10; i++) {
            projectsHeaderArr.push("PROJECTS");
            projectsHeaderArr.push("•")
        }

        const textStyle = {
            margin: "0 20px",
            fontSize: 40,
            fontWeight: "bold"
        }

        return <div style={{display: "flex"}}>{
            projectsHeaderArr.map(project => <div style={textStyle}>
                {project}
            </div>)
        }</div>
    }

    const {scrollY} = useScroll();

    const right = useTransform(scrollY, [window.innerHeight * 2, window.innerHeight * 3], [0, 200])

    interface ParallaxProps {
        children: string;
        baseVelocity: number;
    }
    function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
        const baseX = useMotionValue(0);
        const { scrollY } = useScroll();
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, {
            damping: 50,
            stiffness: 400
        });
        const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
            clamp: false
        });

        /**
         * This is a magic wrapping for the length of the text - you
         * have to replace for wrapping that works for you or dynamically
         * calculate
         */
        const x = useTransform(baseX, (v) => `${wrap(0, -60, v)}%`);

        const directionFactor = useRef<number>(1);
        useAnimationFrame((t, delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 5000);

            /**
             * This is what changes the direction of the scroll once we
             * switch scrolling directions.
             */
            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            } else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }

            moveBy += directionFactor.current * moveBy * velocityFactor.get();

            baseX.set(baseX.get() + moveBy);
        });

        const parallaxStyle = {width: "400px"}

        /**
         * The number of times to repeat the child text should be dynamically calculated
         * based on the size of the text and viewport. Likewise, the x motion value is
         * currently wrapped between -20 and -45% - this 25% is derived from the fact
         * we have four children (100% / 4). This would also want deriving from the
         * dynamically generated number of children.
         */
        return (
            <div className="parallax">
                <motion.div className="scroller" style={{ x, wordSpacing: 10, display: "flex"}}>
                    <div style={parallaxStyle}>{children} </div>
                    <div style={parallaxStyle}>{children} </div>
                    <div style={parallaxStyle}>{children} </div>
                    <div style={parallaxStyle}>{children} </div>
                    <div style={parallaxStyle}>{children} </div>
                    <div style={parallaxStyle}>{children} </div>
                    <div style={parallaxStyle}>{children} </div>
                    <div style={parallaxStyle}>{children} </div>
                    <div style={parallaxStyle}>{children} </div>
                </motion.div>
            </div>
        );
    }

    return (<div id="projects">
        <div id="header-wrapper-projects">
            <div id="header-desktop">
                <motion.div id="header-projects">
                    {/*<ProjectsHeader></ProjectsHeader>*/}
                    <ParallaxText baseVelocity={2}>PERSONAL PROJECTS •</ParallaxText>
                </motion.div>
            </div>
            <div id="header-mobile">
                <div id="header-projects">PERSONAL PROJECTS.</div>
            </div>
            {/*{window.innerWidth >= 768 && <motion.div id="header-projects">*/}
            {/*    /!*<ProjectsHeader></ProjectsHeader>*!/*/}
            {/*    <ParallaxText baseVelocity={2}>PERSONAL PROJECTS •</ParallaxText>*/}
            {/*</motion.div>}*/}
            {/*{window.innerWidth < 768 && <div id="header-projects">PERSONAL PROJECTS.</div>}*/}
            {/*<div style={{height: "20px", width: "120%", right: "10px", top: "10px", position: "relative", backgroundColor: "white"}}/>*/}
            {/*<div id="divider-projects"/>*/}
        </div>
        <ProjectList projectArray={projectArray}/>
    </div>)
}