import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import gameReducer from "./reducers/gameReducer";
import personReducer from "./reducers/personReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
//import update_person from "./actions/personAction";

const Allreducer = combineReducers({
  game: gameReducer,
  person: personReducer,
  users: userReducer
});

const initialState = {
  game: { name: "Fifa" },
  person: { name: "sarthak", email: "sarthak@gmil.com" },
  users: []
};

const middleware = [thunk];

const store = createStore(
  Allreducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//console.log(store.getState());

//store.dispatch(update_person);
//store.dispatch({ type: "update_game", payload: "smackdown" });

//console.log(store.getState());
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store;
