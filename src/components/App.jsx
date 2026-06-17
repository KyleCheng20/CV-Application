import '../styles/App.css'
import { useState } from 'react';
import ResumePreview from './preview/resumePreview'
import GeneralInfo from './formInputs/generalInfo';
import Education from './formInputs/education';

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

      <ResumePreview
        generalInfo={generalInfo}
        education={education}
      />
    </>
  )
}

export default App
