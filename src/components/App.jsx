import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Artists from "./Pages/Artists";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Navigation from "./Navigation";

const App = () => (
  <>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/artists" component={Artists} />
      <Route path="/events" component={Events} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  </>
);

export default App;
