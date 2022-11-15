class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

//create the rectangular shaped body.
rect(500,this.y,this.w,this.h);
    this.width = width;
    this.height = height;
    this.image = loadImage("player./assets/player.png");

    World.add(world, this.body);
  }

 
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
