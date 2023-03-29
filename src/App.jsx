import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const pokemon = {
    name: pokemonList[0].name,
    imgSrc: pokemonList[0].imgSrc,
  };
  return (
    <div>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];
export default App;
