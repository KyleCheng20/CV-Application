import Section from "../util/section.jsx";
import Field from "../util/field.jsx";
import { useState } from "react";

function Experience({ experience, setExperience }) {
    function handleChange(e, experienceID) {
        const {name, value} = e.target;

        setExperience(prev => 
            prev.map(exp => 
                exp.id === experienceID ? {...exp, [name]: value} : exp
            )
        );
    }

    function addExperience() {
        const newExperience = {
            id: crypto.randomUUID(),
            company: "",
            position: "",
            location: "",
            startDate: "",
            endDate: "",
            descriptions: [
                {
                    id: crypto.randomUUID(),
                    text: "",
                }
            ],
        };

        setExperience(prev => [...prev, newExperience]);
    }

    function removeExperience(experienceID) {
        setExperience(prev => 
            prev.filter(exp => exp.id !== experienceID)
        );
    }

    function addDescription(experienceID) {
        const newDescription = {
            id: crypto.randomUUID(),
            text: "",
        };

        setExperience(prev => 
            prev.map(exp => 
                exp.id === experienceID ? {...exp, descriptions: [...exp.descriptions, newDescription]} : exp
            )
        );
    }

    function handleDescriptionChange(experienceID, descriptionID, value) {
        setExperience(prev => 
            prev.map(exp => 
                exp.id === experienceID ? {...exp, descriptions: exp.descriptions.map(desc => 
                    desc.id === descriptionID ? {...desc, text: value} : desc
                )} : exp
            )
        );
    }

    function removeDescription(experienceID, descriptionID) {
        setExperience(prev => 
            prev.map(exp => 
                exp.id === experienceID ? {...exp, descriptions: exp.descriptions.filter(desc => desc.id !== descriptionID)} : exp
            )
        );
    }

    return (
        <Section heading={"Experience"}>
            {experience.map(exp => (
                <div className="experience-form">
                    <div className="experience-form-top">
                        <h3>{exp.company}</h3>
                        <button type="button" onClick={() => removeExperience(exp.id)}>x</button>
                    </div>
                    <Field 
                        labelName="Company Name"
                        id="company-name"
                        name="company"
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleChange(e, exp.id)}                    
                    />

                    <Field 
                        labelName="Position"
                        id="position"
                        name="position"
                        type="text"
                        value={exp.position}
                        onChange={(e) => handleChange(e, exp.id)}                    
                    />

                    <Field 
                        labelName="Location"
                        id="company-location"
                        name="location"
                        type="text"
                        value={exp.location}
                        onChange={(e) => handleChange(e, exp.id)}                    
                    />

                    <Field 
                        labelName="Start Date"
                        id="start-date"
                        name='startDate'
                        type="date"
                        value={exp.startDate}
                        onChange={(e) => handleChange(e, exp.id)}                    
                    />

                    <Field 
                        labelName="End Date"
                        id="end-date"
                        name='endDate'
                        type="date"
                        value={exp.endDate}
                        onChange={(e) => handleChange(e, exp.id)}                    
                    />

                    <div className="descriptions-container">
                        <p>Descriptions</p>
                        {exp.descriptions.map(description => (
                            <div key={description.id}>
                                <textarea 
                                    name="descriptions" 
                                    id="descriptions" 
                                    value={description.text}
                                    onChange={(e) => handleDescriptionChange(exp.id, description.id, e.target.value)}
                                />

                                <button type="button" onClick={() => removeDescription(exp.id, description.id)}>x</button>
                            </div>
                        ))}

                        <button type="button" onClick={() => addDescription(exp.id)}>Add Description</button>
                    </div>
                </div>
            ))}

            <button type="button" onClick={addExperience}>Add Experience +</button>
        </Section>
    )
}

export default Experience;