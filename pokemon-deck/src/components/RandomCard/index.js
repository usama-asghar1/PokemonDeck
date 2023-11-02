import { useEffect, useState } from "react";
import "./RandomCard.css";

function RandomCard() {
  const [randomCard, setRandomCard] = useState({});
  const [randomNumber, setRandomNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    async function fetchRandomCard() {
      try {
        const response = await fetch(
          `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:${randomNumber}`
        );
        const data = await response.json();
        const randomCardNumber = Math.floor(Math.random() * data.data.length);
        setRandomCard(data.data[randomCardNumber]);
        setIsLoading(false); 
      } catch (error) {
        console.log(error);
      }
    }

    if (randomNumber !== null) {
      setIsLoading(true); 
      fetchRandomCard();
    }
  }, [randomNumber]);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 151));
  }, []);

function handleFetchRandomCard () {
    setRandomNumber(Math.floor(Math.random() * 151));
  };
  
  console.log(randomCard);

  return (
    <section className="random-card-container">
      {isLoading ? ( // Render a placeholder element while loading
        <div className="card-placeholder">Loading</div>
      ) : (
        <article className="card">
          {randomCard.images && randomCard.images.small && (
         <img src={randomCard.images.small} alt={randomCard.name} key={randomCard.id} />
          )}
        </article>
      )}
  <button type="button" onClick={handleFetchRandomCard}>
        Get Random Card
  </button>


      
    </section>
  );
}

export default RandomCard;

