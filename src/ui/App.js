import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import store from "./bll/store";
import Root from "./Root";

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
