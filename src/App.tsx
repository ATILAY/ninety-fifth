import React from "react";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";

import store from "./store/store";
import "./App.scss";
import Explanation from "./components/explanation";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Explanation/>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;