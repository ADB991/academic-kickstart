var canvas;

function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("canvasContainer");
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}