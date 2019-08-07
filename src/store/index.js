import { createStore, combineReducers } from "redux";
import gameReducer from "./reducers/gameReducer";
import personReducer from "./reducers/personReducer";
//import update_person from "./actions/personAction";

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

//console.log(store.getState());

//store.dispatch(update_person);
//store.dispatch({ type: "update_game", payload: "smackdown" });

//console.log(store.getState());

export default store;
