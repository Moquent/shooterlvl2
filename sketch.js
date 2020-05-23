const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box0;
var sling, holder, ball;
var ground, engine, world;
function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(900, 370);
  World.add(world, box1);

  box2 = new Box(919, 370);
  World.add(world, box2);

  box3 = new Box(938, 370);
  World.add(world, box3);

  box4 = new Box(957, 370);
  World.add(world, box4);

  box5 = new Box(909, 340);
  World.add(world, box5);
  
  box6 = new Box(928, 340);
  World.add(world, box6);

  box7 = new Box(947, 340);
  World.add(world, box7);

  box8 = new Box(918, 310);
  World.add(world, box8);

  box9 = new Box(937, 310);
  World.add(world, box9);

  box0 = new Box(927, 280);
  World.add(world, box0);

  holder = Bodies.rectangle(1000, 200, 5, 5);
  World.add(world, holder);

  ball = Bodies.rectangle(1000, 200, 15, 15, {density: 0.004});
  World.add(world, ball);

  ground = new Ground(600,height,1200,20);
  World.add(world, ground);

  sling = new Sling(ball.body, {x:200, y:100});
}

function draw() {
  background("yellow");  
  Engine.update(engine);

  fill("black");
  rect(ball.position.x, ball.position.y, ball.width, ball.height);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box0.display();

  sling.display();

  ground.display();

  drawSprites();
}
