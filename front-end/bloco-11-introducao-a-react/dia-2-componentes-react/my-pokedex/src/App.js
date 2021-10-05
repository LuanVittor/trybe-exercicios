import React from 'react';
import './App.css';
import pokemons from './data';
import PokemonInfo from './PokemonInfo';

function App() {
  return (
    <div className='app'>
      <h1>Pokedex</h1>
      <PokemonInfo pokemons={pokemons}/>
    </div>
  );
}

export default App;
