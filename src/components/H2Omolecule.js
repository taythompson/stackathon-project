import React from "react";
import H2Osketch from "./H20sketch";
import P5Wrapper from "react-p5-wrapper";
// import Flip from "react-reveal/Flip";
import TypeWriter from "react-typewriter";

import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import "./Buttons.css";

const popover = (
  <Popover id="popover-basic" title="H2O Bonds">
    Covalent
  </Popover>
);

const H2Omolecule = () => {
  return (
    <div>
      <div>
        <TypeWriter typing={1}>
          These three atoms are able to combine electrons to create a water
          molecule
        </TypeWriter>
      </div>
      <div>
        <P5Wrapper sketch={H2Osketch} />
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <Button variant="success">Bond Type</Button>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default H2Omolecule;
