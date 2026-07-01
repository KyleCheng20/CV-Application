function ResumeExperience({ experience }) {
    return (
        <section className="experience-container"> 
            <h2>Experience</h2>

            {experience.map(exp => {
                return (
                    <div className="experience" key={exp.id}>
                        <div className="company-container">
                            <p>{exp.company}</p>
                            <div className="date-container">
                                <p>{exp.startDate} - {exp.endDate}</p>
                            </div>
                        </div>

                        <div className="position-container">
                            <p>{exp.position}</p>
                            <p>{exp.location}</p>
                        </div>

                        <ul className="experience-descriptions-container">
                            {exp.descriptions.map(description => (
                                <li key={description.id}>{description.text}</li>
                            ))}
                        </ul>
                    </div>
                )
            })}
        </section>
    )
}

export default ResumeExperience