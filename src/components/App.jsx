import '../styles/App.css'
import { useState } from 'react';
import Header from './header';
import ResumePreview from './preview/resumePreview'
import GeneralInfo from './formInputs/generalInfo';
import Education from './formInputs/education';
import Experience from './formInputs/experience';
import Projects from './formInputs/projects';
import Skills from './formInputs/skills';
import Footer from './footer';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "First",
    lastName: "Last",
    phoneNumber: "(###)-###-####",
    email: "example@gmail.com",
    location: "City, Region",
    gitHub: "https://github.com/",
    linkedIn: "https://www.linkedin.com/"
  });

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: "University Name",
      degree: "Degree Title",
      gpa: "3.0",
      location: "City, Region",
      startDate: "2024-08-20",
      endDate: "2025-04-01",
    }
  ]);

  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      company: "Company Name",
      position: "Position",
      location: "City, Region",
      startDate: "2024-03-10",
      endDate: "2026-08-01",
      descriptions: [
        {
          id: crypto.randomUUID(),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor elit id augue malesuada, eget sodales ligula euismod.",
        }
      ],
    }
  ]);

  const [projects, setProjects] = useState([
    {
      id: crypto.randomUUID(),
      projectName: "Project Name",
      technologies: "Technology, Technology, Technology",
      startDate: "2025-01-12",
      endDate: "2025-02-06",
      descriptions: [
        {
          id: crypto.randomUUID(),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor elit id augue malesuada, eget sodales ligula euismod.",
        }
      ],
    }
  ]);

  const [skills, setSkills] = useState([]);

  return (
    <>
      <Header />

      <main>
        <div className="input-form-container">
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
      </main>

      <Footer />
    </>
  )
}

export default App
