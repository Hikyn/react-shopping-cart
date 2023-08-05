import { Link } from "react-router-dom";
import "../styling/NavBar.css";
import logo from "../images/plant.png";
import React from "react";

const Navbar = () => {
  return (
    <div role="banner" className="NavBar">
      <Link className="Home" to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <Link className="Home" to="/">
        Home
      </Link>
      <Link className="Shop" to="/shop">
        Shop
      </Link>
    </div>
  );
};

export default Navbar;
