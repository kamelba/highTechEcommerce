import React, { Component } from "react";
import { connect } from "react-redux";
import { filterCategory } from "./redux/action/Filter";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { getAnnonce } from "./redux/action/actionAnnonce";



class Categorie extends Component {
  render() {
    // console.log(this.props.arrCategorie);
    // console.log(
    //   "filtred: ",
    //   this.props.arrCategorie.filter(
    //     (e, i) => e.category.toLowerCase() === "Smartphone".toLowerCase()
    //   )
    // );
    return (
      <div>
              <NavLink activeStyle={{ color: "green" }} to="/" exact>

        <input
          type="button"
          value="Smartphone"
          className="btnSearch"
          onClick={e => {
         
            this.props.filterCategory(e.target.value)}}
          
        /></NavLink>
 <NavLink activeStyle={{ color: "green" }} to="/" exact>

        <input
          type="button"
          value="Laptop"
          className="btnSearch"
          onClick={e => this.props.filterCategory(e.target.value)}
        /></NavLink>
 <NavLink activeStyle={{ color: "green" }} to="/" exact>
        <input
          type="button"
          value="Camera"
          className="btnSearch"
          onClick={e => this.props.filterCategory(e.target.value)}
        /></NavLink>
      </div>
    ); 
  }
}

const mapStateToProps = state => {
  return {
    arrCategorie: state.announce
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterCategory: x => dispatch(filterCategory(x)),
    getAnnonce:()=>dispatch(getAnnonce())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categorie);

// export default Categorie;
