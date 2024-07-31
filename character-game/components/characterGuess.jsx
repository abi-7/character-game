import React from "react";
import "./characterGuess.css";

export default function CharacterGuess({ character, randomCharacters = [] }) {
  console.log("CharacterGuess component props:", {
    character,
    randomCharacters,
  });

  return (
    <div id="largeDiv">
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
      <div>
        <h2 id="guess">Who am I??</h2>
        {randomCharacters.length > 0 && (
          <ul id="list">
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
        )}
    </div>
    </div>
  );
}
