function ResumeGeneralInfo({ generalInfo }) {
    return (
        <section className="general-info-container">
            <h1 className="resume-name">{generalInfo.firstName} {generalInfo.lastName}</h1>
            <div className="contacts-container">
                <span>{generalInfo.phoneNumber}</span>
                <span>|</span>
                <span>{generalInfo.email}</span>
                <span>|</span>
                <span>{generalInfo.location}</span>
            </div>
            <div className="social-links-container">
                <a href={generalInfo.github} target="_blank" rel="noopener noreferrer">{generalInfo.github}</a>
                <span>|</span>
                <a href={generalInfo.linkedIn} target="_blank" rel="noopener noreferrer">{generalInfo.linkedIn}</a>
            </div>
        </section>
    )
}

export default ResumeGeneralInfo;