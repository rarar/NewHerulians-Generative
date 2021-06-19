let smoothImage, roughImage, ripplesImage, irregularImage;
let shapes = [];
let q1 = 1;
let q2 = 1;
let q3 = 1;
let camTheta;
let camIncrement;
let camAmplitudeX;
let camAmplitudeY;
let camAmplitudeZ;


function preload() {
  smoothImage = loadImage("../img/smooth.png");
  roughImage = loadImage("../img/rough.png");
  ripplesImage = loadImage("../img/ripples.png");
  irregularImage = loadImage("../img/irregular.png");
  getAnswers(6, 1, 3);
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  for (let i = 0; i < 35; i++) {
    let x = random(-width/2, width/2);
    let y = random(-height/2, height/2);
    let r = random(5, 50);
    let b = new Shape(x, y, r, q1, q2, q3);
    shapes.push(b);
  }



  camTheta = random(0.00025, 0.003);
  camIncrement = this.theta;
  camAmplitudeX = random(-1.5, 1.5);
  camAmplitudeY = random(-1.5, 1.5);
  camAmplitudeZ = random(-1.5, 1.5);
}

function getAnswers(v1, v2, v3) {
  q1 = v1;
  q2 = v2;
  q3 = v3;
}

function draw() {
  //background(0);


  // lights();
  let xDir = 60;
  let yDir = 60;
  let zDir = 60;
  let c;
  switch (q1) {
    case 0:
      c = color(149, 252, 145);
      break;
    case 1:
      c = color(250, 20, 27);
      break;
    case 2:
      c = color(252, 167, 92);
      break;
    case 3:
      c = color(250, 97, 252);
      break;
    case 4:
      c = color(255, 252, 99);
      break;
    case 5:
      c = color(34, 148, 23);
      break;
    case 6:
      c = color(78, 91, 251);
      break;
    case 7:
      c = color(95, 191, 252);
      break;
  }
  //lights();
  ambientLight(c);
  directionalLight(c, createVector(sin(camTheta) * camAmplitudeX, sin(camTheta) * camAmplitudeY, sin(camTheta) * camAmplitudeZ));
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].move();
    shapes[i].show();
  }
}

class Shape {

  constructor(x, y, r, q1, q2, q3) {
    this.x = x;
    this.y = y;
    this.r = r * random(2);
    this.z = random(-250, 300);
    this.brightness = 0;
    this.rotationValue = random(0.0001, 0.01);
    this.startingRotation = random(360);
    this.theta = random(0.00025, 0.003);
    this.increment = this.theta;
    this.amplitudeX = random(-1.5, 1.5);
    this.amplitudeY = random(-1.5, 1.5);
    this.amplitudeZ = random(-1.5, 1.5);
    this.q1 = q1;
    this.q2 = q2;
    this.q3 = q3;
  }



  move() {
    this.x = this.x + sin(this.theta) * this.amplitudeX;
    this.y = this.y + sin(this.theta) * this.amplitudeY;
    this.z = this.z + sin(this.theta) * this.amplitudeZ;
    this.theta += this.increment;
  }

  show() {
    // stroke(255);
    // strokeWeight(1);
    // fill(this.brightness);
    noStroke();
    push();
    translate(this.x, this.y, this.z);
    rotateZ((frameCount + this.startingRotation) * this.rotationValue);
    rotateX((frameCount + this.startingRotation) * this.rotationValue);
    rotateY((frameCount + this.startingRotation) * this.rotationValue);
    this.makeShape();
    pop();
  }

  makeShape() {
    switch (this.q3) {
      case 0:
        texture(smoothImage);
        break;
      case 1:
        texture(roughImage);
        break;
      case 2:
        texture(ripplesImage);
        break;
      case 3:
        texture(irregularImage);
        break;
    }

    // switch (this.q1) {
    //   case 0:
    //     tint(149, 252, 145, 180);
    //     break;
    //   case 1:
    //     tint(250, 20, 27, 180);
    //     break;
    //   case 2:
    //     tint(252, 167, 92, 180);
    //     break;
    //   case 3:
    //     tint(250, 97, 252, 180);
    //     break;
    //   case 4:
    //     tint(255, 252, 99, 180);
    //     break;
    //   case 5:
    //     tint(34, 148, 23, 180);
    //     break;
    //   case 6:
    //     tint(78, 91, 251, 180);
    //     break;
    //   case 7:
    //     tint(95, 191, 252, 180);
    //     break;
    // }

    switch (this.q2) {
      case 0:
        sphere(this.r);
        break;
      case 1:
        plane(this.r);
        break;
      case 2:
        cylinder(this.r, this.r*2);
        break;
      case 3:
        cone(this.r, this.r*2);
        break;
    }


  }
}
