function ResumeEducation({ education }) {
    return (
        <section className="education-container">
            <h2>Education</h2>

            {education.map(edu => {
                return (
                    <div key={edu.id}>
                        <div className="school-container">
                            <p>{edu.school}</p>
                            <div className="date-container">
                                <p>{edu.startDate} - {edu.endDate}</p>
                            </div>
                        </div>
    
                        <div className="degree-container">
                            <p>{edu.degree}</p>
                            <p>{edu.location}</p>
                        </div>

                        <p>{edu.gpa}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default ResumeEducation;