import React from "react";
import _ from "lodash";
import "./characterGuess.css";

export default function CharacterGuess({ character, randomCharacters }) {

  console.log("character:", character);
  
  const combinedCharacters = [...randomCharacters, character].filter(char => char !== null);

  // Shuffle the combined array
  const shuffledCharacters = _.shuffle(combinedCharacters);

  console.log("shuffledCharacters:", shuffledCharacters);

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
        {shuffledCharacters.length > 0 && (
          <ul id="list">
            {shuffledCharacters.map(
              (char) =>
                char && (
                  <button key={char.id}>
                    <li>{char.name}</li>
                  </button>
                )
            )}
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
