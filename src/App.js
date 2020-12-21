import React from "react";
import "./styles.css";
import Header from "./components/header";
import { Switch, Route } from "react-router-dom";
import Pics from "./pages/pics";
import Shopping from "./pages/shopping";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Pics />
        </Route>
        <Route path="/shopping">
          <Shopping />
        </Route>
      </Switch>
    </div>
  );
}
