// estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js';

export const Muestra = () => {
  const listExample = data.pokemon.slice().sort(() => 0.5 - Math.random()).slice(0, 25);
  return listExample
};

export const anotherExample = () => {
  return 'OMG';
};


