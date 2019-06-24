// import p5 from "p5";

let h, o;
const H2Osketch = p5 => {
  // Set height and width of canvas
  // const canvasWidth = p5.windowWidth;
  // const canvasHeight = p5.windowHeight;

  // make library globally available
  window.p5 = p5;
  // Setup function
  p5.setup = () => {
    p5.createCanvas(500, 400, p5.WEBGL);
    h = p5.createGraphics(700, 500);
    h.background("#08415C");
    h.textSize(100);
    h.fill(0);
    h.text("H", -40, 300);
    h.text("H", h.width - 40, 300);
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
    const baseDiam = 50;
    p5.background(0);
    p5.orbitControl(); //gives mouse control
    p5.texture(o); //apply letter texture
    p5.directionalLight(255, 0, 0, 0, 0, -1); //color and direction of light
    p5.sphere(baseDiam);

    p5.directionalLight(255, 255, 255, 0, 0, -1);
    p5.push(); //push matrix to use 0,0 as reference
    p5.translate(-baseDiam * 2, -baseDiam * 1.4, 0);
    p5.texture(h);
    p5.sphere(baseDiam * 0.7);
    p5.translate(baseDiam, baseDiam * 0.8, 0);
    p5.rotateZ((3.14 / 180) * -50);
    p5.specularMaterial(250); //allow untextured shapes to pick up light effects
    p5.cylinder(baseDiam * 0.2, baseDiam * 2);
    p5.pop();

    p5.push();
    p5.translate(baseDiam * 2, -baseDiam * 1.4, 0);
    p5.texture(h);
    p5.sphere(baseDiam * 0.7);
    p5.translate(-baseDiam, baseDiam * 0.8, 0);
    p5.rotateZ((3.14 / 180) * 50);
    p5.ambientMaterial(250);
    p5.cylinder(baseDiam * 0.2, baseDiam * 2);
    p5.pop();
  };

  // Test function, accesible from outside
  p5.test = () => {
    console.log("testing -->");
  };
};
export default H2Osketch;
