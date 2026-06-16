function ResumeGeneralInfo({ generalInfo }) {
    return (
        <div className="general-info-container">
            <h1>{generalInfo.firstName} {generalInfo.lastName}</h1>
        </div>
    )
}

export default ResumeGeneralInfo;