import React, { Component } from "react";
import logo from "./image/logo.png";

import MonCompte from "./reactstrap/Mon compte";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Categorie from "./Categorie";
import {filterCategory, filterChange } from "./redux/action/Filter"
import { connect } from "react-redux";

class Navbar extends Component {
  
  render() {
    return (
      <div className="header">
        <div className="logoBox">
          <NavLink activeStyle={{ color: "green" }} to="/" exact >
            <img className="logo" src={logo} alt="" onClick={() => {this.props.filterCategory(""); this.props.filterChange ("")}}/>
          </NavLink>
        </div>

        <div className="navBar">
          <li>
            <NavLink activeStyle={{ color: "green" }} to="/Annonce" exact>
              <button className="btnSearch">Publier annonce</button>
            </NavLink>
          </li>
          <li>
            <div className="btnCategorie">
              <Categorie />
            </div>
          </li>
          <li>
              <MonCompte/>
            
          </li>
        </div>
      </div>
    );
  }
}

// export default Navbar;
export default connect(null, { filterCategory, filterChange  }
  )(Navbar);
  