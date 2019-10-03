//This assignment Uses Sol LeWitt's Wall Drawing 396
//Instructions: A black five-pointed star, a yellow six-pointed star, a red seven-pointed star, and a blue eight-pointed star, drawn in color and India ink washes.
//https://massmoca.org/event/walldrawing396/
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  noStroke(0);
  fill(0);
	//5 point star
  beginShape();
  vertex (200, 30);
  vertex (155,150);
  vertex (30, 150);
  vertex(135, 220);
  vertex(80,370);
  vertex(200, 275); //midpoint
  vertex(320, 370);
  vertex(265, 220);
  vertex(370, 150);
  vertex(245, 150);
  endShape(CLOSE);
  push();
	//Seven Point Star
  translate (0, 400)
  fill(255, 0, 75);
  beginShape();
  vertex (70, 90);
  vertex (120, 370);
  vertex (200, 320);
  vertex (290, 370);
  vertex (330, 90);
  endShape(CLOSE);
  beginShape();
  vertex (200, 30);
  vertex (30, 245);
  vertex (200, 320);
  vertex (370, 245)
  endShape(CLOSE);
  pop();
  // Six Sided Star
  push();
  fill (255, 255, 0);
  translate(400, 0);
  triangle(200, 30, 30, 280, 370, 280);
  translate(0, 405);
  scale(1, -1);
  triangle(200, 30, 30, 280, 370, 280);
  pop();
  //Eight Sided Star
  push();
  translate(400, 400);
  fill(0, 175, 255);
  rect (80, 80, 240, 240);
  translate(200, -80);
  rotate(PI/4);
  rect (80, 80, 240, 240);
  pop();
  
}