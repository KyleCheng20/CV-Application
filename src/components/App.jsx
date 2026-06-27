import '../styles/App.css'
import { useState } from 'react';
import ResumePreview from './preview/resumePreview'
import GeneralInfo from './formInputs/generalInfo';
import Education from './formInputs/education';
import Experience from './formInputs/experience';
import Projects from './formInputs/projects';
import Skills from './formInputs/skills';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    location: "",
    gitHub: "",
    linkedIn: ""
  });

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      gpa: "",
      location: "",
      startDate: "",
      endDate: "",
    }
  ]);

  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      descriptions: [],
    }
  ]);

  const [projects, setProjects] = useState([
    {
      id: crypto.randomUUID(),
      projectName: "",
      technologies: "",
      startDate: "",
      endDate: "",
      descriptions: "",
    }
  ]);

  const [skills, setSkills] = useState([]);

  return (
    <>
      <div className="input-form-container">
          <h1>CV Application</h1>
          <GeneralInfo 
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
    
          <Education 
            education={education}
            setEducation={setEducation}
          />
    
          <Experience 
            experience={experience}
            setExperience={setExperience}
          />
    
          <Projects 
            projects={projects}
            setProjects={setProjects}
          />
    
          <Skills 
            skills={skills}
            setSkills={setSkills}
          />
      </div>

      <ResumePreview
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        projects={projects}
        skills={skills}
      />
    </>
  )
}

export default App
