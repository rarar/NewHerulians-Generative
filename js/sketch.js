let colorChoices = [
  'rgba(149, 252, 145, 0.7)', // acceptance
  'rgba(250, 20, 27, 0.7)', // anger
  'rgba(252, 167, 92, 0.7)', // anticipation
  'rgba(250, 97, 252, 0.7)', // disgust
  'rgba(255, 252, 99, 0.7)', // joy
  'rgba(34, 148, 23, 0.7)', // fear
  'rgba(78, 91, 251, 0.7)', // sadness
  'rgba(95, 191, 252, 0.7)' // surprise
];


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  generateImprint(0, 1, 1);
}

function generateImprint(q1, q2, q3) {

    // background(0);
  let c = random(colorChoices[q1]);
  lights();

  for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 100; j++) {
      //rotateX(theta);
      //rotateZ(theta + offset * i);
      push();
      //texture(img);
      noStroke();
      ambientMaterial(colorChoices[q1]);
      translate(i*random(-100,100), j * random(-100, 100));
      rotateZ(random(360));
      rotateX(random(360));
      rotateY(random(360));
      switch(3) {
        case 0:
          sphere(random(35));
          break;
        case 1:
          cone(random(35), random(35));
          break;
        case 2:
          cylinder(random(35), random(35));
          break;
        case 3:
          plane(random(35));
          break;
      }
      pop();
    }
  }
}
