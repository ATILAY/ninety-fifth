import React from "react";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";

import store from "./store/store";
import "./App.scss";
import Explaination from "./components/explaination";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Explaination/>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
// d1