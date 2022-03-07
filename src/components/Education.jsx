import React from 'react';
import './Education.css';

const Education = ({ education }) => {
 return (
   <div className="education">
    <div className="card">
      <h3>Education</h3>
      {education.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <h4 className="name">{item.name}</h4>
            <p>
              <b>{item.where}</b>
            </p>
            <p>{item.date}</p>
          </div>
        );
      })}
    </div>
  </div>
 );
};

export default Education;