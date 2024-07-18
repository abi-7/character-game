import { useState, useEffect } from "react";
import CharacterGuess from "./characterGuess";

export default function RandomCharacter() {
  const [character, setCharacter] = useState(null);
  const [randomCharacters, setRandomCharacters] = useState([]);

  //fetch characters from the api
  useEffect(() => {
    //generate 1 specific id and an array of 3 random ids
    const handleAPI = async () => {
      try {
        const apiUrl = `https://rickandmortyapi.com/api/character`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const totalCharacters = data.info.count;
        const randomId = Math.floor(Math.random() * totalCharacters) + 1;

        const generateIds = (count, exclude) => {
          const ids = new Set();
          while (ids.size < count) {
            const id = Math.floor(Math.random() * totalCharacters) + 1;
            if (id !== exclude) {
              ids.add(id);
            }
          }
          return Array.from(ids);
        };

        const randomIds = generateIds(3, randomId);

        await fetchCharacter(randomId, setCharacter);
        await fetchCharacter(randomIds, setRandomCharacters);
      } catch (error) {
        console.error("Error fetching total characters:", error);
      }
    };

    //fetch character data based on the id
    const fetchCharacter = async (id, setState) => {
      try {
        const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setState(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    //Fetch multiple characters
    const fetchCharacters = async (ids, setState) => {
      try {
        const characters = await Promise.all(
          ids.map(async (id) => {
            const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
          })
        );
        setState(characters);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    handleAPI();
  }, []);

  console.log("RandomCharacter state:", { character, randomCharacters });

  return (
    <>
      <CharacterGuess
        character={character}
        randomCharacters={randomCharacters}
      />
    </>
  );
}
