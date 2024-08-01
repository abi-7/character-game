import React from "react";
import _ from "lodash";
import "./characterGuess.css";

export default function CharacterGuess({ character, randomCharacters }) {
  console.log("character:", character);

  const correctChar =  {...character, isSpecial: true};

  const combinedCharacters = correctChar 
  ? [...randomCharacters, correctChar] 
  : [...randomCharacters].filter(
    (char) => char !== null
  );

  // Shuffle the combined array
  const shuffledCharacters = _.shuffle(combinedCharacters);

  console.log("shuffledCharacters:", shuffledCharacters);

  //todo: add prop identifier to identify
  //if button user has clicked is the correct character name
  const handleClick= (char) => {
    if (char.isSpecial) {
      alert(`You clicked on the special character: ${char.name}`);
    } else {
      alert(`You clicked on: ${char.name}`);
    }
  };

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
                  <button key={char.id} onClick={() => handleClick(char)}>
                    <li>{char.name}</li>
                  </button>
                )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
