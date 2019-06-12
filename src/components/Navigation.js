import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <section className="navigation">
      <div className="container">
        <NavLink exact to="/" className="navigation__link" activeClassName="navigation__link--active">Home</NavLink>
        <NavLink to="/about" className="navigation__link" activeClassName="navigation__link--active">About</NavLink>
        <NavLink to="/contact" className="navigation__link" activeClassName="navigation__link--active">Contact</NavLink>
      </div>
    </section>
  );
}

export default Navigation;
