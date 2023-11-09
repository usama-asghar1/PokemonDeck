import React, { useState } from "react";
import "./App.css";
import RandomCard from "../RandomCard";
import { Header } from "../Header";
import Input from "../Input";


function App() {
  const [pokemonName, setPokemonName] = useState("");
 
  function getPokemonName(input) {
    setPokemonName(input);
    console.log(pokemonName);
  }


  return (
    <main className="App">
     <div class="row">
        <Header />
      </div>
      <section className="main-content">
        <div class="row">
        <div class="col">
            <Input getPokemonName={getPokemonName} pokemonName={pokemonName} />
          </div>
          <div class="col">
            <RandomCard />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
