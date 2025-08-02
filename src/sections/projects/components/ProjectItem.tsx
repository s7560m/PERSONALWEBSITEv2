import './ProjectItem.css'
import {Button, Paper} from "@mui/material";
import Project from "../../../interfaces/ProjectInterface";
import {useDarkMode} from "../../../hooks/useDarkMode";

interface AppProps {
    project: Project;
}

export default function ProjectItem({project}: AppProps) {


    const {darkMode, darkModeBtnStyles} = useDarkMode()
    return <div className="project-item-wrapper">
        <Paper variant="elevation" elevation={20} square={false}>
            {!project.isVideo && <img className="project-item-image" src={project.src} loading="lazy" alt={project.img_alt}/>}
            {project.isVideo && <iframe className="responsive-iframe" loading="lazy" src={project.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>}
            <div className="project-content-wrapper">
                <h2 className="project-item-title">{project.title}</h2>
                <div className="project-item-link" style={{color: darkMode ? "unset" : "initial"}}>{project.link}</div>
                <div  style={{background: darkMode ? "unset" : "#f1f1f1"}} className="project-item-description">{project.description}</div>
            </div>
            <div className="project-actions">
                    <Button  onClick={() => window.open(project.link)} variant="outlined" color={"secondary"} sx={{
                        fontSize: window.innerWidth < 768 ? 10 : "initial",
                        ...darkModeBtnStyles,
                    }}>Visit Project</Button>
            </div>
        </Paper>
    </div>
}