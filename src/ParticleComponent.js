import React, { Component } from "react";
import Particles from "react-particles-js";

import "./App.css";

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
};

class ParticleComponent extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <Particles params={particleOpt} />
      </div>
    );
  }
}

export default ParticleComponent;
