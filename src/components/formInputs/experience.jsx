import Section from "../util/section.jsx";
import Field from "../util/field.jsx";

function Experience({ experience, setExperience }) {

    function handleChange(e) {
        const {name, value} = e.target;

        setExperience(prev => 
            prev.map((exp, index) => 
                index === 0 ? {...exp, [name]: value} : exp
            )
        );
    }

    return (
        <Section heading={"Experience"}>
            <div className="experience-form">
                <Field 
                    labelName="Company Name"
                    id="company-name"
                    name="company"
                    type="text"
                    value={experience[0].company}
                    onChange={handleChange}                    
                />

                <Field 
                    labelName="Position"
                    id="position"
                    name="position"
                    type="text"
                    value={experience[0].position}
                    onChange={handleChange}                    
                />

                <Field 
                    labelName="Location"
                    id="company-location"
                    name="location"
                    type="text"
                    value={experience[0].location}
                    onChange={handleChange}                    
                />

                <Field 
                    labelName="Start Date"
                    id="start-date"
                    name='startDate'
                    type="date"
                    value={experience[0].startDate}
                    onChange={handleChange}                    
                />

                <Field 
                    labelName="End Date"
                    id="end-date"
                    name='endDate'
                    type="date"
                    value={experience[0].endDate}
                    onChange={handleChange}                    
                />

                <textarea 
                    name="descriptions" 
                    id="descriptions" 
                    value={experience[0].descriptions}
                    onChange={handleChange}
                />
            </div>
        </Section>
    )
}

export default Experience;