import Section from "../util/section.jsx";
import Field from "../util/field.jsx";

function Education({ education, setEducation }) {
    function handleChange(e, educationID) {
        const {name, value} = e.target;

        setEducation(prev =>
            prev.map(edu =>
                edu.id === educationID ? {...edu, [name]: value} : edu
            )
        );
    }

    function addEducation() {
        const newEducation = {
            id: crypto.randomUUID(),
            school: "",
            degree: "",
            gpa: "",
            location: "",
            startDate: "",
            endDate: "",
        }

        setEducation(prev => [...prev, newEducation]);
    }

    function removeEducation(educationID) {
        setEducation(prev => 
            prev.filter(edu => edu.id !== educationID)
        );
    }

    return (
        <Section heading="Education">
            {education.map(edu => (
                <div className="education-form">
                    <div className="education-form-top">
                        <h3>{edu.school}</h3>
                        <button type="button" onClick={() => removeEducation(edu.id)}>x</button>
                    </div>

                    <Field 
                        labelName="University Name"
                        id="university-name"
                        name="school"
                        type="text"
                        value={edu.school}
                        onChange={(e) => handleChange(e, edu.id)}
                    />
        
                    <Field 
                        labelName="Degree"
                        id="degree"
                        name="degree"
                        type="text"
                        value={edu.degree}
                        onChange={(e) => handleChange(e, edu.id)}
                    />
        
                    <Field 
                        labelName="University Location"
                        id="university-location"
                        name="location"
                        type="text"
                        value={edu.location}
                        onChange={(e) => handleChange(e, edu.id)}
                    />
        
                    <Field 
                        labelName="GPA"
                        id="gpa"
                        name="gpa"
                        type="text"
                        value={edu.gpa}
                        onChange={(e) => handleChange(e, edu.id)}
                    />
        
                    <Field 
                        labelName="Start Date"
                        id="start-date"
                        name="startDate"
                        type="date"
                        value={edu.startDate}
                        onChange={(e) => handleChange(e, edu.id)}
                    />
        
                    <Field 
                        labelName="End Date"
                        id="end-date"
                        name="endDate"
                        type="date"
                        value={edu.endDate}
                        onChange={(e) => handleChange(e, edu.id)}
                    />
                </div>
            ))}
            <button type="button" onClick={addEducation}>Add Education +</button>
        </Section>
    )
}

export default Education;