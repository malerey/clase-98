import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact'

const App = () => {
  const [page, setPage] = useState('home')
  const [pokemon, setPokemon] = useState({})

  const handleClick = e => {
    setPage(e.target.id)
  }

  const paginacion = {
    home: <Home titulo={"Pagina principal"} subtitulo={"La la la la"} dataDelPokemon={pokemon.sprites?.front_default}/>,
    about: <About titulo={"Pagina de informacion"} dataDelPokemon={pokemon.weight} />,
    blog: <Blog titulo={"Este es el blog"}/>,
    contact: <Contact/>
  }

  useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(res => res.json())
    .then(data => setPokemon(data))
  }, [])

console.log(pokemon)
  return (
    <div className="App">
      <nav>
        <p id="home" onClick={handleClick}>Home</p>
        <p id="about" onClick={handleClick}>About</p>
        <p id="blog" onClick={handleClick}>Blog</p>
        <p id="contact" onClick={handleClick}>Contact</p>
      </nav>

      {paginacion[page]}

    </div>
  );
}

export default App;
