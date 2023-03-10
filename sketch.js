let bubbles = [];

function setup() {
  createCanvas(600, 400);
  button = createButton('Arrange');
  button.position(0, 0);
  button.mousePressed(arrange);
}

function mouseDragged() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

 

function draw() {
  background(0);

  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }

  //for (let i = 0; i < bubbles.length; i++) {
   // bubbles[i].move();
  //  bubbles[i].show();
  //}
}

function arrange() {
  this.x = 0;
  this.y = 0;
  for (let bubble of bubbles) {
  this.x = this.x + 10;
  //this.y = this.y + random(-5, 5);
  }

}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }

 
}
