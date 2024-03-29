import React from 'react';
import './More.css';

const More = ({languages, habilities}) => {
    return (
        <div className= "more">
            
            <div className= "card">
                <h3>Skills</h3>
                <div className= "libreries">
                    <p>
                        <img src={habilities.logoCss} alt="logo css"></img>
                    </p>
                    <p>
                        <img src={habilities.logoHtml} alt="logo html"></img>
                    </p>
                   <p>
                        <img src={habilities.react} alt="logo react"></img> 
                    </p>
                    <p>
                        <img src={habilities.vue} alt="logo vue"></img> 
                    </p>
                    <p>
                        <img src={habilities.logoJS} alt="logo JavaScript"></img> 
                    </p>
                </div>
            </div>
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
      </div>
    );

};

export default More;