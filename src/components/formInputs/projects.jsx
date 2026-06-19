import Section from "../util/section.jsx";
import Field from "../util/field.jsx";

function Projects({ projects, setProjects }) {
    function handleChange(e) {
        const {name, value} = e.target;

        setProjects(prev => 
            prev.map((project, index) => 
                index === 0 ? {...project, [name]: value} : project
            )
        )
    }

    return (
        <Section heading="Projects">
            <div className="projects-container">
                <Field 
                    labelName="Project Name"
                    id="project-name"
                    name="projectName"
                    type="text"
                    value={projects[0].projectName}
                    onChange={handleChange}
                />

                <Field 
                    labelName="Technologies"
                    id="technologies"
                    name="technologies"
                    type="text"
                    value={projects[0].technologies}
                    onChange={handleChange}
                />

                <Field 
                    labelName="Start Date"
                    id="start-date"
                    name="startDate"
                    type="date"
                    value={projects[0].startDate}
                    onChange={handleChange}
                />

                <Field 
                    labelName="End Date"
                    id="end-date"
                    name="endDate"
                    type="date"
                    value={projects[0].endDate}
                    onChange={handleChange}
                />

                <textarea 
                    name="descriptions" 
                    id="descriptions" 
                    value={projects[0].descriptions}
                    onChange={handleChange}
                />
            </div>
        </Section>
    )
}

export default Projects;