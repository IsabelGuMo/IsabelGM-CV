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
                <div className= "libreries">
                    <p>
                        <img src={habilities.logo}></img>
                    </p>
                   <p>
                        <img src={habilities.react}></img> 
                    </p>
                    <p>
                        <img src={habilities.vue}></img> 
                    </p>
                </div>
            </div>
      </div>
    );

};

export default More;