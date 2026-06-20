function ResumeSkills({ skills }) {
    if(skills.length === 0) return null;
    
    return (
        <section className="skills-container">
            <h2>Technical Skills</h2>

            {skills.map(skill => {
                return (
                    <div key={skill.id}>
                        <div className="skill-title-container">
                            <p className="skill-title">{skill.skillTitle}: </p>
                            <p className="skill-items">{skill.skillItems}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ResumeSkills;