import { React } from "react";

function Navbar({ setIndex, pokemonIndex, pokemonList, pokemon }) {
  const alertPikachu = () => {
    if (pokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };
  function nextClick() {
    setIndex(pokemonIndex + 1);
    alertPikachu();
  }

  function prevClick() {
    setIndex(pokemonIndex - 1);
    alertPikachu();
  }

  return (
    <>
      {pokemonIndex <= 0 ? (
        <span style={{ display: "none" }}></span>
      ) : (
        <button onClick={prevClick}>Previous</button>
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={nextClick}>Next</button>
      ) : (
        <span style={{ display: "none" }}></span>
      )}
    </>
  );
}

export default Navbar;
