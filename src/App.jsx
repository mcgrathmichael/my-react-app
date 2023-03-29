import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  let [pokemonIndex, setIndex] = useState(0);

  function nextClick() {
    setIndex(pokemonIndex + 1);
  }
  function prevClick() {
    setIndex(pokemonIndex - 1);
  }

  let pokemon = {
    name: pokemonList[pokemonIndex].name,
    imgSrc: pokemonList[pokemonIndex].imgSrc,
  };
  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      {pokemonIndex < 0 ? (
        <display:none></display:none>
      ) : (
        <button onClick={prevClick}>Previous</button>
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={nextClick}>Next</button>
      ) : (
        <display:none></display:none>
      )}
    </div>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default App;
