import Section from "../util/section.jsx";
import Field from "../util/field.jsx";
import { useState } from "react";

function GeneralInfo() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gitHub: "",
        linkedIn: ""
    }); 

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

            <div className="general-information-preview">
                <p>{generalInfo.firstName}</p> 
            </div>
        </Section>
    )
}

export default GeneralInfo;