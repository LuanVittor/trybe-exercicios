import React from "react";
import Pokedex from "./Pokedex";

class PokemonInfo extends React.Component {
  render() {

    const { pokemons } = this.props
    return (
      <div className='pokedex'>
        {pokemons.map(element => <Pokedex key={element.id} pokemon={element} />)}
      </div>
    )
  }
}

export default PokemonInfo