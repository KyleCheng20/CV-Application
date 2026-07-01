function ResumeProjects({ projects }) {
    return(
        <section className="projects-container"> 
            <h2>Projects</h2>

            {projects.map(project => {
                return (
                    <div className="project" key={project.id}>
                        <div className="project-container">
                            <div className="project-left">
                                <p className="project-name">{project.projectName}</p>
                                <span>|</span>
                                <p>{project.technologies}</p>
                            </div>
                            <div className="date-container">
                                <p>{project.startDate} - {project.endDate}</p>
                            </div>
                        </div>

                        <ul className="projects-descriptions-container">
                            {project.descriptions.map(description => (
                                <li key={description.id}>{description.text}</li>
                            ))}
                        </ul>
                    </div>
                )
            })}
        </section>
    )
}

export default ResumeProjects;