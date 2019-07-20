import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, combineReducers } from "redux";

const personReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "update_person":
      return { name: payload };
    default:
      return state;
  }
};

const gameReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "update_game":
      return { name: payload };
    default:
      return state;
  }
};

const Allreducer = combineReducers({
  game: gameReducer,
  person: personReducer
});

const initialState = {
  game: { name: "Fifa" },
  person: { name: "sarthak" }
};
const store = createStore(
  Allreducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

store.dispatch({ type: "update_person", payload: "bitfumes" });
store.dispatch({ type: "update_game", payload: "smackdown" });

console.log(store.getState());
ReactDOM.render(<App />, document.getElementById("root"));
