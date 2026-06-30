import "../../styles/formInputs.css";

function Section({ heading, children }) {
    return (
        <div className="section">
            <h2>{heading}</h2>
            {children}
        </div>
    )
}

export default Section;