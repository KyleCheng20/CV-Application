import '../../styles/resumePreview.css'
import ResumeGeneralInfo from './resumeGeneralInfo';

function ResumePreview({ generalInfo }) {
    return (
        <div className="resume-paper">
            <h1>Preview</h1>
            <ResumeGeneralInfo generalInfo={generalInfo}/>
        </div>
    )
}

export default ResumePreview;