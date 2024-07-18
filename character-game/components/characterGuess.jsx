import React from "react";
import "./characterGuess.css";

export default function CharacterGuess({ character, randomCharacters = [] }) {
  console.log("CharacterGuess component props:", {
    character,
    randomCharacters,
  });

  return (
    <div>
      {character ? (
        <div id="picture">
          <img
            src={character.image}
            alt="rick & morty character"
            id="character"
          />
        </div>
      ) : (
        <p>Loading character...</p>
      )}
      <h2 id="guess">Who am I??</h2>
      {randomCharacters.length > 0 && (
        <div>
          <ul>
            {randomCharacters.map((characters) => (
              <button>
                <li key={characters.id}>{characters.name}</li>
              </button>
            ))}
            <button>
              {" "}
              <li>{character.name}</li>
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
