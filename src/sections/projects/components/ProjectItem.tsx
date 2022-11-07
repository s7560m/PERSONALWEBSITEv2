import './ProjectItem.css'
import {Button, Card, CardContent, Paper} from "@mui/material";
import Project from "../../../interfaces/ProjectInterface";

interface AppProps {
    project: Project;
}

export default function ProjectItem({project}: AppProps) {



    return <div className="project-item-wrapper">
        <Paper sx={{backgroundColor: project.color}} variant="elevation" elevation={20} square={false}>
            {!project.isVideo && <img className="project-item-image" src={project.src} alt={project.img_alt}/>}
            {project.isVideo && <iframe className="responsive-iframe" src={project.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>}
            <div className="project-content-wrapper">
                <div className="project-item-title">{project.title}</div>
                <div className="project-item-link">{project.link}</div>
                <div className="project-item-description">{project.description}</div>
            </div>
            <div className="project-actions">
                    <Button onClick={() => window.open(project.link)} variant="outlined" color={"info"}>Visit Project</Button>
            </div>
        </Paper>
    </div>
}