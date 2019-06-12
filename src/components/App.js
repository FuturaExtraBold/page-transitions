import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <section className="navigation">
            <div className="container">
              <NavLink exact to="/" className="navigation__link" activeClassName="navigation__link--active">Home</NavLink>
              <NavLink to="/about" className="navigation__link" activeClassName="navigation__link--active">About</NavLink>
            </div>
          </section>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
