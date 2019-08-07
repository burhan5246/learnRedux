import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./store/index";

let render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

store.subscribe(render);

render();
