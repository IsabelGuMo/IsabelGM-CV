import React from 'react';
import './About.css';

const About = ({ about }) => {
    return (
      <div className="about">
        <div className="card">
        <h3>Sobre mi</h3>
        {about.aboutMe.map((item) => {
          return ( 
            <div key={JSON.stringify(item)}>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;