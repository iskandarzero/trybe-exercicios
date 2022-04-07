import React from "react";

class Pokemon extends React.Component {
  render () {
    const pokemon = this.props.pokemon;

    return (
      <div>
        <img src={pokemon.image} alt={`Imagem do ${pokemon.name}`}></img>
        <p>{pokemon.name}</p>
        <p>{pokemon.type}</p>
        <p>{`Average Weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
      </div>
    );
  }
}

export default Pokemon