import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav style={{ background: "#eee", padding: "10px" }}>
      {/* <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> */}
      <Link to="/">Home</Link> | <Link to="/list">Consulter nos annonces</Link> | <Link to="/add">Diffuser une annonce</Link> | <Link to="/manage">Gérer les annonces</Link>
    </nav>
  );
};

export default Menu;