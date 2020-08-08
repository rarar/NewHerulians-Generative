// New Herulians Generative Engineer
// Authors: Raphael Arar & Eric Liu

let smoothImage, roughImage, ripplesImage, irregularImage;
let bg;

function preload() {
  smoothImage = loadImage("../img/smooth.png");
  roughImage = loadImage("../img/rough.png");
  ripplesImage = loadImage("../img/ripples.png");
  irregularImage = loadImage("../img/irregular.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  lights();
  generateImprint(5, 2, 3);
  noLoop();
}

function generateImprint(q1, q2, q3) {
  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 15; j++) {
      push();
      translate(i*random(-50,50), j * random(-50, 50));
      rotateZ(random(360));
      rotateX(random(360));
      rotateY(random(360));
      noStroke();

      switch(q3) {
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

      switch(q1) {
        case 0:
          tint(149, 252, 145, 225);
          break;
        case 1:
          tint(250, 20, 27, 225);
          break;
        case 2:
          tint(252, 167, 92, 225);
          break;
        case 3:
          tint(250, 97, 252, 225);
          break;
        case 4:
          tint(255, 252, 99, 225);
          break;
        case 5:
          tint(34, 148, 23, 225);
          break;
        case 6:
          tint(78, 91, 251, 225);
          break;
        case 7:
          tint(95, 191, 252, 225);
          break;
      }

      switch(q2) {
        case 0:
          sphere(random(80));
          break;
        case 1:
          cone(random(80), random(80));
          break;
        case 2:
          cylinder(random(80), random(80));
          break;
        case 3:
          plane(random(80));
          break;
      }
      pop();
    }
  }
}
