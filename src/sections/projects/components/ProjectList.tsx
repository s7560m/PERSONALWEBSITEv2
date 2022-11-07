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
    setCurrentProjectNum: Function

}

function ProjectList({projectArray, setCurrentProjectNum}: AppProps) {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [scrollPos, setScrollPos] = useState<number>(0);
    const projectRefs = useRef<Array<HTMLDivElement>>([]);

    function handleScroll() {
        setScrollPos(window.scrollY);

        // adjusts progressbar for projects
        projectRefs.current.forEach((ref, index) => {
            if (isInViewport(ref)) {
                setCurrentProjectNum(index + 1);
            }
        })
    }

    useEffect(() => {

        // initialize animation library
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-quart',
        });

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    })

    // return a list of projects
    return <div id="projects-wrapper">
        {projectArray.map((project, index) => {
            return <div ref={el => projectRefs.current[index] = el as HTMLDivElement} key={index} data-aos="fade" className="projects-wrapper">
                <ProjectItem project={project}/>
            </div>
        })}
    </div>
}

// we don't want to rerender project list because of the AOS animations
// so we simply just memoize the whole component
export default memo(ProjectList);