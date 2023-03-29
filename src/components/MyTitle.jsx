import MyTitle from "./components/MyTitle";
import PokemonCard from "./PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  return (
    <div>
      <MyTitle />
      <PokemonCard 
      {name: pokemon.name},
      {imgSrc: pokemon.imgSrc} 
      />
    </div>
  );
}

export default App;
