function ResumeProjects({ projects }) {
    return(
        <section className="projects-container"> 
            <h2>Projects</h2>

            {projects.map(project => {
                return (
                    <div key={project.id}>
                        <div className="project-container">
                            <p>{project.projectName}</p>
                            <span>|</span>
                            <p>{project.technologies}</p>
                            <div className="date-container">
                                <p>{project.startDate} - {project.endDate}</p>
                            </div>

                            <ul className="projects-descriptions-container">
                                {project.descriptions.map(description => (
                                    <li key={description.id}>{description.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ResumeProjects;