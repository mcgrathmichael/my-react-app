// import { React } from "react";

// function Navbar({ setIndex, pokemonIndex, pokemonList, pokemon }) {
//   // let [currentName, setCurrentName] = useState("");

//   // const handleClick = (name) => {
//   //   setCurrentName(name);
//   // };

//   // const alertPikachu = () => {
//   //   if (pokemon.name === "pikachu") {
//   //     alert("pika pikachu !!!");
//   //   }
//   // };
//   // function nextClick() {
//   //   setIndex(pokemonIndex + 1);
//   //   alertPikachu();
//   // }

//   // function prevClick() {
//   //   setIndex(pokemonIndex - 1);
//   //   alertPikachu();
//   // }

//   return (
//     // <>
//     //   {pokemonIndex > 0 ? (
//     //   <button onClick={prevClick}>Previous</button>
//     // ) : (
//     //   <span style={{ display: "none" }}></span>
//     // )}
//     // {pokemonIndex < pokemonList.length - 1 ? (
//     //   <button onClick={nextClick}>Next</button>
//     // ) : (
//     //   <span style={{ display: "none" }}></span>
//     // )}
//     <div>
//       {pokemonList.map((pokemonList, char, index) => (
//         <button
//           key={index}
//           name={pokemonList.name}
//           onClick={() => handleClick(pokemonList.name)}>
//           {pokemonList.name}
//         </button>
//       ))}
//       <p>Current name: {currentName}</p>
//     </div>
//   );
// }

// export default Navbar;

// import { React, useState } from "react";

// function Navbar({ pokemonList, setIndex }) {
//   const [showPoke, setShowPoke] = useState(pokemonList[0]);

//   const handleClick = (animal) => {
//     setShowPoke(animal);
//   };

//   return (
//     <div>
//       {pokemonList.map((animal) => (
//         <button key={animal.name} onClick={() => handleClick(animal)}>
//           {animal.name}
//         </button>
//       ))}
//       {showPoke ? <PokemonCard data={showPoke} /> : "Choose your Pokémon"}
//     </div>
//   );
// }

// export default Navbar;
// Navbar.jsx

import { React, useState } from "react";

function Navbar({ pokemonList, setIndex }) {
  // const [showPoke, setShowPoke] = useState(pokemonList[0]);

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    <div>
      {pokemonList.map((animal, index) => (
        <button key={animal.name} onClick={() => handleClick(index)}>
          {animal.name}
        </button>
      ))}
      {/* {showPoke ? <PokemonCard data={showPoke} /> : "Choose your Pokémon"} */}
    </div>
  );
}

export default Navbar;
