// declare any variables you need here.
// var x, y, etc..
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.
var body = 220;
var tail = 200;
var speed = 1;
var motion = 2;

function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(500, 500);
}

function draw() {
  //call your functions and do your drawing here.
  background(82, 138, 222);
  //ground
  noStroke();
  fill(196, 156, 47);
  rect(0, 480, 500, 20);
  //function calls
  catPostTop();
  catPost();
  moveCat();
  catPaws();
  catEyes();
  catTail();
}

// write functions here that are called in your setup or draw function. please remove this one.
function moveCat() {
  noStroke();
  // cat's body
  fill(255, 140, 0);
  arc(250, 235, body, body, PI, TWO_PI);
  //cat's face
  fill(255, 140, 0);
  arc(350, 235, 120, 120, PI, TWO_PI);
  //left cheek
  fill(255, 255, 255);
  ellipse(340, 225, 20, 20);
  //right cheek
  fill(255, 255, 255);
  ellipse(360, 225, 20, 20);
  //nose
  fill(255, 184, 243);
  triangle(350, 225, 360, 215, 340, 215);
  //right ear
  fill(255, 140, 0);
  arc(360, 180, 40, 40, 65, 250);
  //left ear
  fill(255, 140, 0);
  arc(380, 185, 40, 40, 60, 250);

  //breathing animation
  //conditional statement
  body = body + speed;

  if (body > 200) {
    speed = -0.2;
  }
  if (body < 180) {
    speed = 20;
  }
}

//cat post before loop
// function catPost() {
//   stroke(245, 240, 213);
//   strokeWeight(15);
//   line(200, 280, 300, 280);
//   line(200, 295, 300, 295);
//   line(200, 310, 300, 310);
//   line(200, 325, 300, 325);
//   line(200, 340, 300, 340);
//   line(200, 355, 300, 355);
//   line(200, 370, 300, 370);
//   line(200, 385, 300, 385);
//   line(200, 400, 300, 400);
//   line(200, 415, 300, 415);
//   line(200, 430, 300, 430);
//   line(200, 445, 300, 445);
//   line(200, 460, 300, 460);
//   line(200, 475, 300, 475);
// }

//cat post with loop
function catPost() {
  for (let level = 280; level < 475; level++) {
    stroke(245, 240, 213);
    strokeWeight(15);
    line(200, level, 300, level);
  }
}

//cat post top
function catPostTop() {
  stroke(222, 80, 118);
  strokeWeight(40);
  line(400, 253, 100, 253);
}

//cat's paws
function catPaws() {
  //left back paw
  stroke(255);
  strokeWeight(15);
  line(200, 230, 180, 230);
  //right back paw
  stroke(255);
  strokeWeight(15);
  line(220, 230, 240, 230);
}

//cat eyes
function catEyes() {
  //left eye
  noStroke();
  fill(222, 122, 9);
  arc(330, 200, 20, 20, 0, PI);
  //right eye
  fill(222, 122, 9);
  arc(370, 200, 20, 20, 0, PI);
}

//cat's tail
function catTail() {
  //tail
  stroke(222, 122, 9);
  strokeWeight(15);
  line(90, tail, 160, 228);

  //twitching animations
  //conditional statement
  tail = tail + motion;
  if (tail > 228) {
    motion = -1;
  }
  if (tail < 220) {
    motion = 1;
  }
}
