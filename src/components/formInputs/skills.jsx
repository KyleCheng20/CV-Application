import Section from "../util/section.jsx";
import Field from "../util/field.jsx";

function Skills({ skills, setSkills }) {
    function addNewSkillCategory() {
        const newSkillCategory = {
            id: crypto.randomUUID(),
            skillTitle: "",
            skillItems: "",
        };

        setSkills(prev => [...prev, newSkillCategory]);
    }

    function handleChange(e) {
        const {name, value} = e.target;

        setSkills(prev =>
            prev.map((skill, index) =>
                index === 0 ? {...skill, [name]: value} : skill
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
                            onChange={handleChange}
                        />

                        <Field 
                            labelName="Skill Item"
                            id="skill-item"
                            name="skillItems"
                            type="text"
                            value={category.skillItems}
                            onChange={handleChange}
                        />
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