import React from "react";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon/Pokemon";
const all_pokemon = [
  {
    name: "Charizard",
    weight: "90",
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: "6.9",
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: "122",
    awesome: true,
    terrifying: false,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega Beedrill",
    weight: "65",
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];
/*const pokemonList = all_pokemon.map(function (pokemon) {
  return Pokemon(pokemon);
});*/

/*const listingPokemon = pokemonList.map((pokemon) => {
  const totalpokemon = Pokemon(pokemon);
  return totalpokemon;
});
const allpokemons = listingPokemon();
*/
/*const pokemonCharacteristics = pokemonList.map((pokemon, index) => {
  const listingPokemon = <Pokemon key={index} pokemon={pokemon} />;
  return listingPokemon;
*/

function App() {
  return (
    <main className="container my-5">
      <Title content="Some Simple Title" />
      <div className="row mb-4">
        {all_pokemon.map((pokemon) => (
          <div className="col-md-6 col-lg-4">
            <Pokemon
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
          </div>
        ))}
      </div>
    </main>
    /*<div className="App">
      <main className="container">
        <Title content="Some Simple Title" />
        <div className="row">
          <div className="col-md-6 col-lg-4">{pokemonList}</div>
        </div>
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          React seems to be really exciting. It's new but it looks like it is
          really "friendly"
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World! Welcome to Codaisseur!!!
        </a>
      </header>
    </div>*/
  );
}
export default App;
