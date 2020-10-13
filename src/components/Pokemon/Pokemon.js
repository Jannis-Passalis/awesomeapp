import React from "react";
import PokemonStyle from "./Pokemon.scss";

function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4 Pokemon Pokemon:hover">
      <div className="card-body pb-0">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          {props.awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
          <br />
          {props.abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability) => {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
    </div>
    /*<div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome === "true" ? "YES" : "NOT SO MUCH"}</p>
      <p>
        Terrifying:{" "}
        {props.terrifying === "true" ? "THEY QUITE ARE" : "NOT AT ALL"}
      </p>
      <p>
        Abilities: ({props.abilities.length}):
        <ul>
          {props.abilities.map((ability) => {
            return <li>{ability}</li>;
          })}
        </ul>
      </p>
    </div>*/
  );
}

export default Pokemon;
