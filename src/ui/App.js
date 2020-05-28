import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import Root from "./Root";
import store from "../bll/store";

function App() {
  return (
      <HashRouter>
        <Provider store={store}>
          <Root/>
        </Provider>
      </HashRouter>
  );
}

export default App;
