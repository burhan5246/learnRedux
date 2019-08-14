import React from "react";
//import logo from "./logo.svg";
import "./App.css";
//import store from "./store";
import update_person from "./store/actions/personAction";
import update_game from "./store/actions/gameAction";
import fetch_user from "./store/actions/userAction";
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
      <button onClick={props.fetchUser}>Fetch</button>
      <br />
      <h3>User list</h3>
      {props.users.length === 0 ? (
        <p>no user found</p>
      ) : (
        props.users.map(user => <p key={user.id}>{user.first_name}</p>)
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    game: state.game,
    person: state.person,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePerson: () => {
      dispatch(update_person);
    },
    updateGame: () => {
      dispatch(update_game);
    },
    fetchUser: () => {
      dispatch(fetch_user);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
