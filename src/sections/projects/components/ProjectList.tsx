import {CSSProperties, memo, useEffect, useRef, useState} from "react";
import {isInViewport} from "../../../hooks/useOnScreen";
import ProjectItem from "./ProjectItem";
import {CircularProgress} from "@mui/material";
import Project from "../../../interfaces/ProjectInterface";
// @ts-ignore
import * as AOS from 'aos'
import "aos/dist/aos.css";

interface AppProps {
    projectArray: Array<Project>,

}

function ProjectList({projectArray}: AppProps) {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [scrollPos, setScrollPos] = useState<number>(0);
    const projectRefs = useRef<Array<HTMLDivElement>>([]);

    // function handleScroll() {
    //     // adjusts progressbar for projects
    //     // BUG: Some projects are too large for the viewport
    //     // TODO: Fix this bug
    // }
    //
    // useEffect(() => {
    //
    //     // initialize animation library
    //     AOS.init({
    //         offset: 0,
    //         duration: 300,
    //         easing: 'ease-in-quart',
    //     });
    //
    //     window.addEventListener('scroll', handleScroll);
    //
    //     return () => window.removeEventListener('scroll', handleScroll);
    // })

    // return a list of projects
    return <div id="projects-wrapper">
        {projectArray.map((project, index) => {
            return <div ref={el => projectRefs.current[index] = el as HTMLDivElement} key={index} className="projects-wrapper">
                <ProjectItem project={project}/>
            </div>

        })}
    </div>
}

// we don't want to rerender project list because of the AOS animations
// so we simply just memoize the whole component
export default memo(ProjectList);