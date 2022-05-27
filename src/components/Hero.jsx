import React from 'react';
import './Hero.css';

const Hero = ({ hero }) => {
 return (
  <div className="hero">
     <img src={hero.image} alt="Foto Isabel Gutiérrez" />
    <div className="card">
      <h2>
        {hero.name} {hero.adress}
      </h2>
        <p>{hero.city} </p>
        <p>
          <a href={"mailto:" + hero.email}>Mi email</a>
        </p>
        <p>
        <a target="_blank" href={hero.cv} rel="noreferrer">Imprimir CV</a>
        </p>
        <p>
          <a target="_blank" href={hero.gitHub} rel="noreferrer">GitHub</a>
        </p>
        <p>
            <a target="_blank" href={hero.portfolio} rel="noreferrer">Portfolio</a>
        </p>
    </div>
  </div>
 );
};

export default Hero;

