import React from 'react';

const Home = ({ titulo, subtitulo, dataDelPokemon }) => {
  return(
    <div>
      <img src={dataDelPokemon}></img>
      <h2>{titulo}</h2>
      <h3>{subtitulo}</h3>
    </div>
  )
}

export default Home;
