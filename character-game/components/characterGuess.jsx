import React from "react";
import _ from "lodash";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const handleClick= (char) => {
    if (char.isSpecial) {
      toast.success('🤩 Wow you guessed the correct character!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      toast.error('😨 Oops! Try Again!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <div id="largeDiv">
      <ToastContainer />
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
