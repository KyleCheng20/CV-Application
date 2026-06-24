import { useState } from "react";
import Section from "../util/section.jsx";
import Field from "../util/field.jsx";

function Skills({ skills, setSkills }) {
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [newCategoryTitle, setNewCategoryTitle] = useState("");
    const [editingTitles, setEditingTitles] = useState({});
    const [newSkillItem, setNewSkillItem] = useState({});

    function confirmNewCategory() {
        if(!newCategoryTitle.trim()) return;

        const newCategory = {
            id: crypto.randomUUID(),
            skillTitle: newCategoryTitle,
            skillItems: [],
            editing: false,
        };

        setSkills(prev => [...prev, newCategory]);
        

        setIsAddingCategory(false);
        setNewCategoryTitle("");
    }

    function cancelNewCategory() {
        setIsAddingCategory(false);
        setNewCategoryTitle("");
    }

    function removeCategory(categoryID) {
        setSkills(prev => 
            prev.filter(category => category.id !== categoryID)
        );
    }

    function editCategoryTitle(categoryID) {
        const category = skills.find(cat => cat.id === categoryID);

        setEditingTitles(prev => ({
            ...prev,
            [categoryID]: category.skillTitle,
        }));

        setSkills(prev => 
            prev.map(category => category.id === categoryID ? {...category, editing: true} : category)
        );
    }

    function confirmEdit(categoryID) {
        const updatedTitle = editingTitles[categoryID];

        if(!updatedTitle.trim()) return;

        setSkills(prev => 
            prev.map(category => 
                category.id === categoryID ? {...category, skillTitle: updatedTitle, editing: false} : category
            )
        );

        setEditingTitles(prev => {
            const copy = { ...prev };
            delete copy[categoryID];
            return copy;
        });
    }

    function cancelEdit(categoryID) {
        setSkills(prev => 
            prev.map(category =>
                category.id === categoryID ? {...category, editing: false} : category
            )
        );

        setEditingTitles(prev => {
            const copy = { ...prev };
            delete copy[categoryID];
            return copy;
        });
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
                <button type="button" onClick={() => setIsAddingCategory(true)}>
                    Add Skill Category +
                </button>

                {isAddingCategory && (
                    <div className="new-category-form">
                        <Field 
                            labelName="Skill Title"
                            id="skill-title"
                            name="skillTitle"
                            type="text"
                            value={newCategoryTitle}
                            onChange={(e) => setNewCategoryTitle(e.target.value)}
                        />

                        <button type="button" onClick={confirmNewCategory}>+</button>
                        <button type="button" onClick={cancelNewCategory}>x</button>
                    </div>
                )}

                {skills.map(category => (
                    <div key={category.id}>
                        <div className="category-container">
                            {category.editing ? (
                                <>
                                    <Field 
                                        labelName="Skill Title"
                                        id="skill-title"
                                        name="skillTitle"
                                        type="text"
                                        value={editingTitles[category.id]}
                                        onChange={(e) => setEditingTitles(prev =>({
                                            ...prev,
                                            [category.id]: e.target.value,
                                        }))}
                                    />

                                    <button type="button" onClick={() => confirmEdit(category.id)}>✓</button>
                                    <button type="button" onClick={() => cancelEdit(category.id)}>x</button>
                                </>
                            ) : (
                                <>
                                    <h3 className="category-title">{category.skillTitle}</h3>
                                    <button type="button" onClick={() => editCategoryTitle(category.id)}>Edit</button>
                                    <button type="button" onClick={() => removeCategory(category.id)}>x</button>
                                </>
                            )}
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
                    </div>
                ))}

            </div>
        </Section>
    )
}

export default Skills;