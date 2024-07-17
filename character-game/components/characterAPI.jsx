import { useState, useEffect } from "react";

export default function RandomCharacter() {
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

  return (
      <div>
        <h1>{character.name}</h1>
        <img src={character.image} alt="rick & morty charcter" />
      </div>
  );
}
