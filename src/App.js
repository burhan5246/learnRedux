import React from "react";
//import logo from "./logo.svg";
import "./App.css";
//import store from "./store";
import update_person from "./store/actions/personAction";
import update_game from "./store/actions/gameAction";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <h1>Redux tutorial</h1>
      Person Name : {props.person.name}
      <button onClick={props.updatePerson}>Update Person</button>
      <br />
      Game Name : {props.game.name}
      <button onClick={props.updateGame}>Update Game</button>
      <br />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    game: state.game,
    person: state.person
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePerson: () => {
      dispatch(update_person);
    },
    updateGame: () => {
      dispatch(update_game);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
