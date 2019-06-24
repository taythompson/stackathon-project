import React from "react";
import { HydrogenSketch } from "./HydrogenSketch";
import P5Wrapper from "react-p5-wrapper";
import { Link } from "react-router-dom";

class HydrogenMolecule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Hydrogen molecule</h1>
          </div>
          <P5Wrapper HydrogenSketch={HydrogenSketch} />
          <Link to="/oxygen">
            <button>Next</button>
          </Link>
        </header>
      </div>
    );
  }
}
export default HydrogenMolecule;
