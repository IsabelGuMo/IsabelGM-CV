import { useState } from 'react';
import './App.css';
import { Hero, About, Education, Experience, More } from './components';
import { CV } from './CV/CV';

const { hero,  education, experience, languages, habilities,  } = CV;

const App = () => {
  const [ showEducation, setShowEducation] = useState(true);
  
  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <button onClick={() => setShowEducation(true)}>Education</button>
      <button onClick={() => setShowEducation(false)}>Experience</button>
      {showEducation ? <Education education={education} /> : <Experience experience={experience} />}
      
      <More
      languages={languages}
      habilities={habilities}
    />
  </div>
  );
}

export default App;
