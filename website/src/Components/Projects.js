import React from 'react'
import './Style/Projects.css';
import info from './Data/Research';

export default function Projects() {
    return (
        <div className='projects'>
            <ProjectContent />
        </div>
    )
}

function ProjectContent() {
    return(
       <div id='projectspage'>
            <p className='labintro'>
                Our team conducts research in high-intensity laser-matter interaction, including laser-driven beam and radiation sources, 
                with applications in fundamental physics, industry and medicine. We collaborate broadly across the UofA, Canada and 
                internationally.
            </p>
            <div className='cards'>
                {info.map(project => (
                    <ProjectCard
                        // image={project.image}
                        title={project.title}
                        description={project.description} />
                ))}
            </div>
        </div> 
    ) 
}

function ProjectCard(props) {
    return (
        <div className='card'>
            <div className='cardcontent'>
                {/* <img src={props.image}></img> */}
                <p id='title'>{props.title}</p>
                <p id='description'>{props.description}</p>
            </div>
        </div>
    )
}
