import "./App.css";
import RandomCharacter from "../components/handleAPI";
import { useState } from "react";

export default function App() {
  const [newCharacter, setNewCharacter] = useState(true);

  //handles button click of new character
  const handleClick = () => {
    setNewCharacter(false); //set to false to force a re-render
    setTimeout(() => setNewCharacter(true), 0);
  };

  return (
    <>
      <div id="container">
        <div id="title">
          <h1>Guess the character! </h1>
          <h2>(Rick and Morty Edition)</h2>
        </div>
        <div id="card">
          <button onClick={handleClick}>New Character!</button>
          {newCharacter && <RandomCharacter />}
        </div>
      </div>
    </>
  );
}
