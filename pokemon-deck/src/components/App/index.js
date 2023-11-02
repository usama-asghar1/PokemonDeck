import React, { useState } from "react";
import "./App.css";
import RandomCard from "../RandomCard";


function App() {
  // const [pokemonName, setPokemonName] = useState("");
 
  // function getPokemonName(input) {
  //   setPokemonName(input);
  //   console.log(pokemonName);
  // }


  return (
    <main className="App">
      <section className="main-content">
        <div class="row">
          <div class="col">
            <RandomCard />
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
