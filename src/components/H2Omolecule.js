import React from "react";
import H2Osketch from "./H20sketch";
import P5Wrapper from "react-p5-wrapper";

class H2Omolecule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <h1>H2O molecule</h1>
        </div>
        <div>
          <P5Wrapper H2Osketch={H2Osketch} />
        </div>
      </div>
    );
  }
}
export default H2Omolecule;
