import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/components/header.scss';

class Header extends React.Component {
  render() {
    return (
    <header className="header">
      <nav className="header-nav">
        <NavLink exact to="/" activeClassName="selected">HOME</NavLink>
        <NavLink to="/about" activeClassName="selected">ABOUT</NavLink>
        <NavLink to="/projects" activeClassName="selected">PROJECTS</NavLink>
      </nav>
    </header>
    )
  }
}

export default Header