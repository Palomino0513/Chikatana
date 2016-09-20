import React from 'react';
import ReactDOM from 'react-dom';
import PokeTable from '../components/PokeTable/PokeTable'

var pokemons = [
    { number: 1, name: 'Bulbasaur' },
    { number: 2, name: 'Yvysaur' },
    { number: 3, name: 'Venasaur' },
    { number: 4, name: 'Palomino' },
];

ReactDOM.render(
    <PokeTable pokemons={pokemons} />,
    document.getElementById('react-content')
);