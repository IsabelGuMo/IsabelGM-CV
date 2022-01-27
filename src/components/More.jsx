import React from 'react';
import './More.css';

const More = ({languages, habilities}) => {
    return (
        <div className= "hero">
            <div className= "card">
                {languages.map((item) => {
                return (
                    <div key={JSON.stringify(item)}>
                    <p>{item.language}</p>
                    <p>{item.wrlevel}</p>
                    <p>{item.splevel}</p>
                    </div>
                );
                })}
            </div>
            <div className= "card">
                {habilities.map((item) => {
                return (
                    <div key={JSON.stringify(item)}>
                    <p>{item}</p>
                    </div>
                );
                })}
            </div>
      </div>
    );

};

export default More;