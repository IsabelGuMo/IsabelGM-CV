import { useState } from 'react';
import { scroller } from 'react-scroll';
import './App.css';
import { Hero, About, Education, Experience, More } from './components';
import { CV } from './CV/CV';

const { hero, about,  education, experience, languages, habilities,  } = CV;

const App = () => {
  const [ menu, setMenu] = useState(0);

  const scrollTo = (selected) => {
    if (selected === 1) {
      scroller.scrollTo("about")
    };
    if (selected === 2) {
      scroller.scrollTo("experience")
    };
    if (selected === 3) {
      scroller.scrollTo("education")
    };
    if (selected === 4) {
      scroller.scrollTo("more")
    };
  };

  return (
    <div className="App">
      <Hero hero={hero} />
      <div className="navbar">
        <button onClick={() => setMenu(1)}>
          <img
            src="https://res.cloudinary.com/dayw7rwf5/image/upload/v1646597743/cv/about_j26buf.jpg"
            alt="About me"/>
        </button>
      
        <button onClick={() => setMenu(2)}>
            <img
              src="https://res.cloudinary.com/dayw7rwf5/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1646643570/cv/experience_vtgjx8.jpg"
              alt="Experience"/>
          </button>
          <button onClick={() => setMenu(3)}>
            <img
              src="https://res.cloudinary.com/dayw7rwf5/image/upload/v1646644063/cv/learn_xunyas.jpg"
              alt="Education"/>
          </button>
          <button onClick={() => setMenu(4)}>
            <img
              src="https://res.cloudinary.com/dayw7rwf5/image/upload/v1646643961/cv/skills_i9kuzl.jpg"
              alt="Skills"/>
          </button>
        </div>

        {
            menu === 1 ? (
          <About about={about} />
        ) : menu === 2 ? (
          <Experience experience={experience} />
        ) : menu === 3 ? (
          <Education education={education} />
        ) : menu === 4 ? (
          <More languages ={languages} habilities={habilities} />
        ) : (
          ""
       )}
       {scrollTo(menu)}
    </div>
    
  );
  
}

export default App;
