//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ob, ball;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  //JSON
  opt = {
    isStatic : true
  }
  ob = Bodies.rectangle(200,400,400,150,opt);
  World.add(myWorld,ob);

  opt1 = {
    restitution : 1.0
  }

  ball = Bodies.circle(200,200,20,opt1);
  World.add(myWorld,ball);


  console.log(ob);
}

function draw() {
  Engine.update(myEngine);
  background("black");  

  rectMode(CENTER)
  rect(ob.position.x,ob.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}