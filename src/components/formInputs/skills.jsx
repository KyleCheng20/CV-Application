import { useState } from "react";
import Section from "../util/section.jsx";
import Field from "../util/field.jsx";

function Skills({ skills, setSkills }) {
    const [newSkillItem, setNewSkillItem] = useState({});

    function addNewSkillCategory() {
        const newSkillCategory = {
            id: crypto.randomUUID(),
            skillTitle: "",
            skillItems: [],
        };

        setSkills(prev => [...prev, newSkillCategory]);
    }

    function addNewSkillItem(categoryID) {
        const newSkill = {
            id: crypto.randomUUID(),
            name: newSkillItem[categoryID],
        };

        if(!newSkill.name.trim()) return;

        setSkills(prev => 
            prev.map(skill => 
                skill.id === categoryID ? {...skill, skillItems: [...skill.skillItems, newSkill]} : skill
            )
        );

        // Clear the input box after user has added the skill
        setNewSkillItem(prev => ({
            ...prev,
            [categoryID]: "",
        }));
    }

    function removeSkillItem(categoryID, skillID) {
        setSkills(prev => 
            prev.map(skill => 
                skill.id === categoryID ? {...skill, skillItems: skill.skillItems.filter(item => item.id!== skillID)} : skill
            )
        )
    }

    function handleTitleChange(e, categoryID) {
        const value = e.target.value;

        setSkills(prev =>
            prev.map(skill =>
                skill.id === categoryID ? {...skill, skillTitle: value} : skill
            )
        );
    }

    return (
        <Section heading={"Technical Skills"}>
            <div className="skills-container">
                {skills.map(category =>
                    <div key={category.id}>
                        <Field 
                            labelName="Skill Title"
                            id="skill-title"
                            name="skillTitle"
                            type="text"
                            value={category.skillTitle}
                            onChange={(e) => handleTitleChange(e, category.id)}
                        />

                        <Field 
                            labelName="Skill Item"
                            id="skill-item"
                            name="skillItems"
                            type="text"
                            value={newSkillItem[category.id] || ""}
                            onChange={(e) => setNewSkillItem(prev => ({...prev, [category.id]: e.target.value}))}
                        />

                        <button type="button" onClick={() => addNewSkillItem(category.id)}>+</button>

                        <div className="skill-items">
                            {category.skillItems.map(skill => (
                                <div className="skill-card" key={skill.id}>
                                    <span>{skill.name}</span>
                                    <button type="button" onClick={() => removeSkillItem(category.id, skill.id)}>x</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <button type="button" onClick={addNewSkillCategory}>
                    Add Skill Category +
                </button>

            </div>
        </Section>
    )
}

export default Skills;