import React from 'react';
import './More.css';

const More = ({languages, habilities}) => {
    return (
        <div className= "more">
            <div className= "card">
                <h3>Languages</h3>
                {languages.map((item) => {
                return (
                    <div key={JSON.stringify(item)}>
                    <h4>{item.language}</h4>
                    <p>{item.wrlevel}</p>
                    <p>{item.splevel}</p>
                    </div>
                );
                })}
            </div>
            <div className= "card">
            <h3>Skills</h3>
                {habilities.map((item) => {
                return (
                    <div key={JSON.stringify(item)}>
                    <h4>{item}</h4>
                    </div>
                );
                })}
            </div>
      </div>
    );

};

export default More;