import React from "react";

export default function PokemonList(props) {
  return (
    <div>
      {props.pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}
