import "./App.css";
import RandomCharacter from "../components/characterAPI";

export default function App() {
  return (
    <>
      <div id="card">
        <div id="title">
          <h1>Guess the character! </h1>
          <h2>(Rick and Morty Edition)</h2>
        </div>
        <button >Reset</button>
        <div id="character">
        <RandomCharacter />
        </div>
      </div>
    </>
  );
}
