import React, { useState } from "react";
import "./App.css";
import RandomCard from "../RandomCard";


function App() {
//   const [pokemonName, setPokemonName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

//   function getPokemonName(input) {
//     setPokemonName(input);
//     console.log(pokemonName);
//   }

  function togglePopup() {
    setIsOpen(!isOpen);
    console.log("i am here");
  }

  return (
    <main className="App">
      <section className="main-content">
        <div class="row">
          <div class="col">
            <RandomCard togglePopup={togglePopup} isOpen={isOpen} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
