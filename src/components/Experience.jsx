import React from "react";
import './Experience.css';

const Experience = ({ experience }) => {
    return (
      <div className="experience">
      <div className="card">
      
         {experience.map((item) => {
           return (
             <div key={JSON.stringify(item)}>
               <p className="name">📕 {item.name}</p>
               <p>{item.date}</p>
               <p>{item.where}</p>
             </div>
           );
         })}
       </div>
      </div>
    );
   };
   
   export default Experience;