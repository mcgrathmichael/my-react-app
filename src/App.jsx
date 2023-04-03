import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [pokemonIndex, setIndex] = useState(0);
  let pokemon = pokemonList[pokemonIndex];
  // function Navbar() {}
  // name: pokemonList[pokemonIndex].name,
  // imgSrc: pokemonList[pokemonIndex].imgSrc,

  return (
    <div>
      {/* <PokemonCard pokemon={pokemon} /> */}
      <Navbar
        setIndex={setIndex}
        pokemonList={pokemonList}
        pokemonIndex={pokemonIndex}
      />
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
