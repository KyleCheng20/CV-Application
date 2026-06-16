import '../styles/App.css'
import { useState } from 'react';
import ResumePreview from './preview/resumePreview'
import GeneralInfo from './formInputs/generalInfo';

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

  return (
    <>
      <h1>CV Application</h1>
      <GeneralInfo 
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      />

      <ResumePreview
        generalInfo={generalInfo}
      />
    </>
  )
}

export default App
