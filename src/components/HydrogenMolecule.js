import React from "react";
import { HydrogenSketch } from "./HydrogenSketch";
import P5Wrapper from "react-p5-wrapper";
import { Link } from "react-router-dom";
// import Flip from "react-reveal/Flip";
import TypeWriter from "react-typewriter";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import "./Buttons.css";

const popover = (
  <Popover id="popover-basic" title="Hydrogen is...">
    the most abundant chemical substance
  </Popover>
);

const HydrogenMolecule = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TypeWriter typing={1}>
            <h2>
              Hydrogen has one electron orbiting its nucleus. Hydrogen needs one
              more electron to be stable.
            </h2>
          </TypeWriter>
        </div>
        <P5Wrapper sketch={HydrogenSketch} />
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <Button className="buttons" variant="success" size="lg">
            Hydrogen Facts
          </Button>
        </OverlayTrigger>
        <Link to="/oxygen">
          <Button className="buttons" size="lg">
            Next Step
          </Button>
        </Link>
      </header>
    </div>
  );
};

export default HydrogenMolecule;
