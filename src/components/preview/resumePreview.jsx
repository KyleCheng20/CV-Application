import '../../styles/resumePreview.css'
import ResumeGeneralInfo from './previewComponents/resumeGeneralInfo';
import ResumeEducation from './previewComponents/resumeEducation';
import ResumeExperience from './previewComponents/resumeExperience';
import ResumeProjects from './previewComponents/resumeProjects';
import ResumeSkills from './previewComponents/resumeSkills';

function ResumePreview({ generalInfo, education, experience, projects, skills }) {
    return (
        <div className="resume-paper">
            <ResumeGeneralInfo generalInfo={generalInfo}/>
            <ResumeEducation education={education}/>
            <ResumeExperience experience={experience}/>
            <ResumeProjects projects={projects}/>
            <ResumeSkills skills={skills}/>
        </div>
    )
}

export default ResumePreview;