import React from "react";
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight: { measurementUnit, value }, image } } = this.props;
    return (
      <div className='pokedex'>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{`${ measurementUnit }: ${ value }`}</p>
        <div>
          <img src={ image } alt='lala'></img>
        </div>
      </div>
    )
  }
}

Pokedex.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokedex