import React from "react";
import OxygenSketch from "./OxygenSketch";
import { Link } from "react-router-dom";
import P5Wrapper from "react-p5-wrapper";
// import Flip from "react-reveal/Flip";
import TypeWriter from "react-typewriter";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import "./Buttons.css";

const popover = (
  <Popover id="popover-basic" title="Oxygen Facts">
    6 atoms
  </Popover>
);

const Oxygen = () => {
  return (
    <div className="App">
      <div>
        <TypeWriter typing={1}>
          <h1>
            Oxygen atom has six electrons in its outer shell. Oxygen needs two
            more electrons in its outer shell to be stable
          </h1>
        </TypeWriter>
      </div>

      <P5Wrapper sketch={OxygenSketch} />
      <div className="buttons">
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <Button className="buttons" variant="success" size="lg">
            Oxygen Facts
          </Button>
        </OverlayTrigger>
        <Link to="/completeReaction">
          <Button className="buttons" size="lg">
            Next Step
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Oxygen;
