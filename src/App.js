import React, { Component } from "react";
import Navbar from "./Navbar";
import ParticleComponent from "./ParticleComponent";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Announce from "./reactstrap/Announce";
import Register from "./reactstrap/Register";
import Footer from './Footer'

import { getAnnonce } from "./redux/action/actionAnnonce";
import { connect } from "react-redux";



import Searchbar from "./Searchbar";
import Data from "./Data";
import Categorie from "./Categorie";


class App extends Component {
  componentDidMount()    {
    this.props.getAnnonce()
    
  }
  
  render() {
   
    return (
      <div>
        <Router>
        <Navbar />

          <Route
            path="/" exact strict
            render={() => {
              return (
                <div className="body">
                  <ParticleComponent />
                  <div className="section">
                    <div className="section1">
                      <Searchbar />
                    </div>
                  </div>
                  <Data/>
                </div>
              );
            }}
          />

               <Route path="/register" component={Register}/>
          <Route path="/Annonce" exact strict component={Announce} />
        </Router>
        <Footer/>
      </div>
    );
  }
}
// export default App;
export default connect((state) => {
  return { annonce: state.annonce };}, { getAnnonce }
  )(App);
  
