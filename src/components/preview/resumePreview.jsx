import '../../styles/resumePreview.css'
import ResumeGeneralInfo from './resumeGeneralInfo';
import ResumeEducation from './resumeEducation';

function ResumePreview({ generalInfo, education }) {
    return (
        <div className="resume-paper">
            <ResumeGeneralInfo generalInfo={generalInfo}/>
            <ResumeEducation education={education}/>
        </div>
    )
}

export default ResumePreview;