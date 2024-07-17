import "./App.css";
import { useState, useEffect } from "react";

//This function will search through the data set under the conditions given
function RandomCharacter() {
  const [character, setCharacter] = useState("");

  useEffect(() => {
    const handleAPI = async () => {
      try {
        const apiUrl = `https://rickandmortyapi.com/api/character`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const totalCharacters = data.info.count;
        const randomId = Math.floor(Math.random() * totalCharacters) + 1;
        fetchCharacter(randomId);
      } catch (error) {
        console.error("Error fetching total characters:", error);
      }
    };

    const fetchCharacter = async (id) => {
      try {
        const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    handleAPI();
  }, []);

  function handleReset() {}

  return (
    <div id="card">
      <div id="title">
        <h1>Guess the character! </h1>
        <h2>**Rick and Morty Edition**</h2>
      </div>
      <button onClick={handleReset}>Reset</button>
      <div id="character">
        <h1>{character.name}</h1>
        <img src={character.image} alt="rick & morty charcter" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <RandomCharacter />
    </>
  );
}
