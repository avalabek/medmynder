import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Books} />
      <Route exact path="/signup" component={Signup} />
      
      
    </div>
  </Router>
);

export default App;
