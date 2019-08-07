import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import update_person from "./store/actions/personAction";
import update_game from "./store/actions/gameAction";

const updatePerson = () => {
  store.dispatch(update_person);
};

const updateGame = () => {
  store.dispatch(update_game);
};
function App() {
  return (
    <div className="App">
      <h1>Redux tutorial</h1>
      Person Name : {store.getState().person.name}
      <button onClick={updatePerson}>Update Person</button>
      <br />
      Game Name : {store.getState().game.name}
      <button onClick={updateGame}>Update Game</button>
      <br />
    </div>
  );
}

export default App;
