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
      <p>{hero.phone}</p>
      <p>
        <a href={hero.gitHub}>GitHub</a>
      </p>
    </div>
  </div>
 );
};

export default Hero;
