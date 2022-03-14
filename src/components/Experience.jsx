import React from "react";
import './Experience.css';

const Experience = ({ experience }) => {
    return (
      <div className="experience">
        <div className="card">
        <h3>Experience</h3>
         {experience.map((item) => {
           return (
             <div key={JSON.stringify(item)}>
               <h4 className="name">{item.name}</h4>
               <p>{item.date}</p>
               <p>
                 <small>{item.description}</small>
                 </p>
             </div>
           );
         })}
        </div>
      </div>
    );
   };
   
   export default Experience;