function ResumeSkills({ skills }) {
    if(skills.length === 0) return null;
    
    return (
        <section className="skills-container">
            <h2>Technical Skills</h2>

            {skills.map(category => {
                return (
                    <div className="skill" key={category.id}>
                        <p className="skill-title">{category.skillTitle}: </p>

                        <div className="resume-skill-items">
                            {category.skillItems.map(item => (
                                <span key={item.id}>{item.name}</span>
                            ))}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ResumeSkills;