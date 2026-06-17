import Section from "../util/section.jsx";
import Field from "../util/field.jsx";

function Education({ education, setEducation }) {
    function handleChange(e) {
        const {name, value} = e.target;

        setEducation(prev =>
            prev.map((edu, index) =>
                index === 0 ? {...edu, [name]: value} : edu
            )
        );
    }

    return (
        <Section heading="Education">
            <div className="education-form">
                <Field 
                    labelName="University Name"
                    id="university-name"
                    name="school"
                    type="text"
                    value={education[0].school}
                    onChange={handleChange}
                />
    
                <Field 
                    labelName="Degree"
                    id="degree"
                    name="degree"
                    type="text"
                    value={education[0].degree}
                    onChange={handleChange}
                />
    
                <Field 
                    labelName="University Location"
                    id="university-location"
                    name="location"
                    type="text"
                    value={education[0].location}
                    onChange={handleChange}
                />
    
                <Field 
                    labelName="GPA"
                    id="gpa"
                    name="gpa"
                    type="text"
                    value={education[0].gpa}
                    onChange={handleChange}
                />
    
                <Field 
                    labelName="Start Date"
                    id="start-date"
                    name="startDate"
                    type="date"
                    value={education[0].startDate}
                    onChange={handleChange}
                />
    
                <Field 
                    labelName="End Date"
                    id="end-date"
                    name="endDate"
                    type="date"
                    value={education[0].endDate}
                    onChange={handleChange}
                />
            </div>
        </Section>
    )
}

export default Education;