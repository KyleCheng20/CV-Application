import '../../styles/resumePreview.css'
import ResumeGeneralInfo from './resumeGeneralInfo';
import ResumeEducation from './resumeEducation';
import ResumeExperience from './resumeExperience';
import ResumeProjects from './resumeProjects';

function ResumePreview({ generalInfo, education, experience, projects }) {
    return (
        <div className="resume-paper">
            <ResumeGeneralInfo generalInfo={generalInfo}/>
            <ResumeEducation education={education}/>
            <ResumeExperience experience={experience}/>
            <ResumeProjects projects={projects}/>
        </div>
    )
}

export default ResumePreview;