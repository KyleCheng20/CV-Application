import '../../styles/resumePreview.css'
import ResumeGeneralInfo from './resumeGeneralInfo';

function ResumePreview({ generalInfo }) {
    return (
        <div className="resume-paper">
            <ResumeGeneralInfo generalInfo={generalInfo}/>
        </div>
    )
}

export default ResumePreview;