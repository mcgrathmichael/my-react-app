import PropTypes from "prop-types";
function PokemonCard({ data }) {
  return (
    <div>
      <figure className="poke">
        {data.imgSrc ? <img src={data.imgSrc} /> : <p> ??? </p>}
      </figure>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};

export default PokemonCard;
