import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import Grind from "./Grind";
import Preinfuse from "./Preinfuse";
import Fill from "./Fill";
import Wait from "./Wait";
import Press from "./Press";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header" />
      <Router>
        <Switch>
          <Route path="/grind" component={Grind} />
          <Route path="/preinfuse" component={Preinfuse} />
          <Route path="/fill" component={Fill} />
          <Route path="/wait" component={Wait} />
          <Route path="/press" component={Press} />
          <Route path="/" component={Welcome} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
