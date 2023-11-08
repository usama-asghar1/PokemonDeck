import { useState } from "react";

import "./Input.css";

function Input({ getPokemonName }) {
  
 
  const [input, setInput] = useState("");
  function handleInput(input) {
    setInput(input);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getPokemonName(input);
    
   
  }
  function handleEnter(event) {
    if (event.key === "Enter") {
      getPokemonName(input);
    }
  }

  return (
    <section class="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a card"
          onChange={(event) => {
            handleInput(event.target.value);
          }}
          onKeyDown={handleEnter}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default Input;
