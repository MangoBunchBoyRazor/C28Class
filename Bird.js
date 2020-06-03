class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.body.frictionAir = 0.05;
    this.xPos = x;
    this.yPos = y;
    this.toDrag = false;
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    super.display();
  }
}