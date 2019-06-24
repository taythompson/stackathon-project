// import p5 from "p5";
let h;
export const HydrogenSketch = p5 => {
  // Set height and width of canvas
  // const canvasWidth = p5.windowWidth;
  // const canvasHeight = p5.windowHeight;

  // make library globally available
  window.p5 = p5;

  // Setup function
  p5.setup = () => {
    p5.createCanvas(800, 600, p5.WEBGL);
    h = p5.createGraphics(5000, 600);
    h.background("#08415C");
    h.textSize(100);
    h.fill(0);
    h.text("H", -40, 300);
    h.text("H", h.width - 40, 300);
  };

  // Draw function
  p5.draw = () => {
    // ...
    const baseDiam = 50;
    p5.background("white");
    p5.orbitControl(); //gives mouse control
    p5.texture(h);
    p5.sphere(baseDiam * 0.5);
    p5.translate(-baseDiam * 0.4, -baseDiam * 0.8, 0);
    p5.rotateZ((3.14 / 180) * -50);
    p5.specularMaterial(125); //allow untextured shapes to pick up light effects
    // cylinder(baseDiam *0.2,baseDiam*2);
    // pop();

    p5.push();
    p5.translate(baseDiam * 0.1, -baseDiam * 1.4, 0);
    p5.texture(h);
    p5.sphere(baseDiam * 0.5);
    p5.translate(-baseDiam * 5, -baseDiam * 0.8, 0);
    p5.rotateZ((3.14 / 180) * 50);
    p5.ambientMaterial(250);
  };

  // Test function, accesible from outside
  p5.test = () => {
    console.log("testing -->");
  };
};
