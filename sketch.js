const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ax = 900, ay = 30;
var ground;
function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  World.add(world, ground);
}

function draw() {
  background("yellow");  
  Engine.update(engine);

  for(var i = 1; i <= 6 ; i++){

    ax = ax + 18;
    if(i == 3){
      ax = 900 + (36/2);
      ay = ay + 42;
    }

    if(i == 5){
      ax = 900 + (27/2);
      ay = ay + 42;
    }

    fill("red");
    var box = new Box(ax, ay);
  }

  drawSprites();
}