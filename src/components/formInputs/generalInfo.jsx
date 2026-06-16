import Section from "../util/section.jsx";
import Field from "../util/field.jsx";

function GeneralInfo({ generalInfo, setGeneralInfo }) {

    function handleChange(e) {
        const { name, value } = e.target;

        setGeneralInfo({
            ...generalInfo,
            [name]: value,
        });
    }
    return (
        <Section heading="General Information"> 
            <div className="general-information-form">
                <div className="general-information-container">
                    <Field 
                        labelName="First Name"
                        id="first-name"
                        name="firstName"
                        type="text"
                        value={generalInfo.firstName}
                        onChange={handleChange} 
                    /> 
                </div>
            </div>
        </Section>
    )
}

export default GeneralInfo;