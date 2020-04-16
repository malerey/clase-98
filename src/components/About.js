import React from 'react';

const About = ({ titulo, dataDelPokemon }) => {
  return(
    <div>
    <h1>Peso del pokemon: {dataDelPokemon}</h1>
      <h2>{titulo}</h2>
      <h3>Esta no es la pagina principal</h3>
    </div>
  )
}

export default About;
