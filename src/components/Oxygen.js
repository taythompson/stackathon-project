import React from "react";
import OxygenSketch from "./OxygenSketch";
import { Link } from "react-router-dom";
import P5Wrapper from "react-p5-wrapper";

class Oxygen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Oxygen molecule</h1>
        </div>
        <div>
          <P5Wrapper OxygenSketch={OxygenSketch} />
        </div>
        <Link to="/completeReaction">
          <button>Next</button>
        </Link>
      </div>
    );
  }
}
export default Oxygen;
