class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.6,
        'friction':1.0,
        'density':0.6
    }
    this.body = Bodies.rectangle(x, y, 35, 50, options);
    this.width = 35;
    this.height = 50;
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    rectMode(CENTER);
    stroke("red");
    strokeWeight(4);
    fill(255);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.width, this.height);
    pop();
  }
};