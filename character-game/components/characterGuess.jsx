import React from "react";
import "./characterGuess.css";

export default function CharacterGuess(
    { character , randomCharacters = [] }
) {

    console.log("CharacterGuess component props:", { character, randomCharacters });

  return (
    <div>
      {randomCharacters.length > 0 && (
        <div>
          <h2>Random Characters:</h2>
          <ul>
            {randomCharacters.map((characters) => (
              <li key={characters.id}>{characters.name}</li>
            ))}
          </ul>
        </div>
      )}
      {character ? (
        <div>
          <li>{character.name}</li>
          <img src={character.image} alt="rick & morty character" id="character"/>
        </div>
      ) : (
        <p>Loading character...</p>
      )}
    </div>
  );
}
