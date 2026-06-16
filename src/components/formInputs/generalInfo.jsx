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

                    <Field 
                        labelName="Last Name"
                        id="last-name"
                        name="lastName"
                        type="text"
                        value={generalInfo.lastName}
                        onChange={handleChange} 
                    /> 

                    <Field 
                        labelName="Phone Number"
                        id="phone-number"
                        name="phoneNumber"
                        type="tel"
                        placeholder="(555)-555-5555"
                        value={generalInfo.phoneNumber}
                        onChange={handleChange} 
                    />

                    <Field 
                        labelName="Email"
                        id="email"
                        name="email"
                        type="text"
                        placeholder="example@gmail.com"
                        value={generalInfo.email}
                        onChange={handleChange} 
                    />

                    <Field 
                        labelName="Location"
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Philadelphia, PA"
                        value={generalInfo.location}
                        onChange={handleChange} 
                    />

                    <Field 
                        labelName="GitHub"
                        id="github"
                        name="github"
                        type="text"
                        value={generalInfo.github}
                        onChange={handleChange} 
                    />

                    <Field 
                        labelName="LinkedIn"
                        id="linkedIn"
                        name="linkedIn"
                        type="text"
                        value={generalInfo.linkedIn}
                        onChange={handleChange} 
                    />
                </div>
            </div>
        </Section>
    )
}

export default GeneralInfo;