const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  block=new block(330,235,30,40);
  block2=new block(360,195,30,40);
  block3=new block(390,195,30,40);
  block4=new block(420,195,30,40);
  block5=new block(390,155,30,40);
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot=new SlingShot(this.polygon{x:100,y:200});
}

function draw() {
  ellipseMode(CENTER);
  ellipse(polygon.position.x,polygon.position.y,40,40);
  background(255,255,255);  
  drawSprites();
}