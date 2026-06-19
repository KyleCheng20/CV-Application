import '../styles/App.css'
import { useState } from 'react';
import ResumePreview from './preview/resumePreview'
import GeneralInfo from './formInputs/generalInfo';
import Education from './formInputs/education';
import Experience from './formInputs/experience';
import Projects from './formInputs/projects'

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
      school: "",
      degree: "",
      gpa: "",
      location: "",
      startDate: "",
      endDate: "",
      id: crypto.randomUUID(),
    }
  ]);

  const [experience, setExperience] = useState([
    {
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      descriptions: "",
      id: crypto.randomUUID(),
    }
  ]);

  const [projects, setProjects] = useState([
    {
      projectName: "",
      technologies: "",
      startDate: "",
      endDate: "",
      descriptions: "",
      id: crypto.randomUUID(),
    }
  ])

  return (
    <>
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

      <ResumePreview
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        projects={projects}
      />
    </>
  )
}

export default App
