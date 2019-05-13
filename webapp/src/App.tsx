import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./Welcome";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header" />
      <Router>
        <Route path="/" component={Welcome} />
      </Router>
    </div>
  );
};

export default App;
