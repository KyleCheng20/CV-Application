import Section from "../util/section.jsx";
import Field from "../util/field.jsx";

function Projects({ projects, setProjects }) {
    function handleChange(e, projectID) {
        const {name, value} = e.target;

        setProjects(prev => 
            prev.map(project => 
                project.id === projectID ? {...project, [name]: value} : project
            )
        )
    }

    function addProject() {
        const newProject = {
            id: crypto.randomUUID(),
            projectName: "",
            technologies: "",
            startDate: "",
            endDate: "",
            descriptions: [
                {
                    id: crypto.randomUUID(),
                    text: "",
                }
            ],
        };

        setProjects(prev => [...prev, newProject]);
    }

    function removeProject(projectID) {
        setProjects(prev => 
            prev.filter(project => project.id !== projectID)
        );
    }

    function addDescription(projectID) {
        const newDescription = {
            id: crypto.randomUUID(),
            text: "",
        }

        setProjects(prev => 
            prev.map(project => 
                project.id === projectID ? {...project, descriptions: [...project.descriptions, newDescription]} : project
            )
        );
    }

    function handleDescriptionChange(projectID, descriptionID, value) {
        setProjects(prev => 
            prev.map(project => 
                project.id === projectID ? {...project, descriptions: project.descriptions.map(description => 
                    description.id === descriptionID ? {...description, text: value} : description
                )} : project
            )
        );
    }

    function removeDescription(projectID, descriptionID) {
        setProjects(prev => 
            prev.map(project => 
                project.id === projectID ? {...project, descriptions: project.descriptions.filter(description => description.id !== descriptionID)} : project
            )
        );
    }

    return (
        <Section heading="Projects">
            {projects.map(project => (
                <div key={project.id} className="projects-container">
                    <div className="projects-container-top">
                        <h3>{project.projectName}</h3>
                        <button type="button" onClick={() => removeProject(project.id)}>x</button>
                    </div>

                    <Field 
                        labelName="Project Name"
                        id="project-name"
                        name="projectName"
                        type="text"
                        value={project.projectName}
                        onChange={(e) => handleChange(e, project.id)}
                    />

                    <Field 
                        labelName="Technologies"
                        id="technologies"
                        name="technologies"
                        type="text"
                        value={project.technologies}
                        onChange={(e) => handleChange(e, project.id)}
                    />

                    <Field 
                        labelName="Start Date"
                        id="start-date"
                        name="startDate"
                        type="date"
                        value={project.startDate}
                        onChange={(e) => handleChange(e, project.id)}
                    />

                    <Field 
                        labelName="End Date"
                        id="end-date"
                        name="endDate"
                        type="date"
                        value={project.endDate}
                        onChange={(e) => handleChange(e, project.id)}
                    />

                    <div className="descriptions-container">
                        <p>Descriptions</p>
                        {project.descriptions.map(description => (
                            <div key={description.id}>
                                <textarea 
                                    name="descriptions" 
                                    id="descriptions" 
                                    value={description.text}
                                    onChange={(e) => handleDescriptionChange(project.id, description.id, e.target.value)}
                                />

                                <button type="button" onClick={() => removeDescription(project.id, description.id)}>x</button>
                            </div>
                        ))}
                    </div>

                        <button type="button" onClick={() => addDescription(project.id)}>Add Description</button>
                </div>
            ))}

            <button type="button" onClick={addProject}>Add Project +</button>
        </Section>
    )
}

export default Projects;