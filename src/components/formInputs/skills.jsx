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
        const newSkill = newSkillItem[categoryID];

        if(!newSkill.trim()) return;

        setSkills(prev => 
            prev.map(skill => 
                skill.id === categoryID ? {...skill, skillItems: [...skill.skillItems, newSkill]} : skill
            )
        );

        // Clear the input box after use has added the skill
        setNewSkillItem(prev => ({
            ...prev,
            [categoryID]: "",
        }));
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