import React from "react";
import { Link } from "react-router-dom";
// import logo from "../images/jeweLogo.png";
import Title from "./Title";

function Navbar() {
  return (
    <nav
      className="navbar-style"
      style={{
        listStyleType: "none",
        padding: 20,
        display: "flex",
        backgroundColor: "black",
        justifyContent: "center",
        fontFamily: "adobe-caslon-pro,times,georgia,serif",
        fontSize: 26,
      }}
    >
      <Title></Title>
      <ul
        className="navbar-list"
        style={{
          listStyleType: "none",
          padding: 0,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/about">Om oss</Link>
        </li>
        <li>
          <Link to="/services">Tjänster</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
