import {memo, useRef} from "react";
import ProjectItem from "./ProjectItem";
import Project from "../../../interfaces/ProjectInterface";

interface AppProps {
    projectArray: Array<Project>,

}

function ProjectList({projectArray}: AppProps) {
    const projectRefs = useRef<Array<HTMLDivElement>>([]);

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