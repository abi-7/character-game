
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

  function handleReset() {
    setSearchTerm("");
    setSearchResults(data.characters || []);
  }

  return (
    <div>
      <h1>Test</h1>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleReset}>Reset</button>
      <h1>{character.name}</h1>
      <img
        src={character.image}
        alt="rick & morty charcter"
        className="object-cover w-full h-80 md:h-80 rounded-md mt-10"
      />
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
