// import p5 from "p5";

let o;
const OxygenSketch = p5 => {
  // Set height and width of canvas
  // const canvasWidth = p5.windowWidth;
  // const canvasHeight = p5.windowHeight;

  // make library globally available
  window.p5 = p5;
  // Setup function
  p5.setup = () => {
    p5.createCanvas(500, 400, p5.WEBGL);
    o = p5.createGraphics(900, 500);
    o.background("#CC2936");
    o.textSize(100);
    o.fill(0);
    o.text("O", -40, 300);
    o.text("O", o.width - 40, 300);
  };

  // Draw function
  p5.draw = () => {
    // ...
    const baseDiam = 100;
    p5.background("white");
    p5.orbitControl(); //gives mouse control
    p5.texture(o); //apply letter texture
    p5.directionalLight(255, 0, 0, 0, 0, -1); //color and direction of light
    p5.sphere(baseDiam);
    // Test function, accesible from outside
    p5.test = () => {
      console.log("testing -->");
    };
  };
};
export default OxygenSketch;
