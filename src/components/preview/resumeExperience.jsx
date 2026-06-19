function ResumeExperience({ experience }) {
    return (
        <section className="experience-container"> 
            <h2>Experience</h2>

            {experience.map(exp => {
                return (
                    <div key={exp.id}>
                        <div className="company-container">
                            <p>{exp.company}</p>
                            <div className="date-container">
                                <p>{exp.startDate} - {exp.endDate}</p>
                            </div>

                            <div className="position-container">
                                <p>{exp.position}</p>
                                <p>{exp.location}</p>
                            </div>

                            <div className="description-container">
                                <p>{exp.descriptions}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ResumeExperience