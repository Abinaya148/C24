const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bird;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
bird = new Bird(100,100)
    box1 = new Box(100,360,50,50)
    box2 = new Box(300,360,50,50)
    pig = new Pig(200,360,50,50)
    log = new Log(200,300,300,PI/2)
    box3 = new Box(100,280,50,50)
    box4 = new Box(300,280,50,50)
    pig1 = new Pig(200,280,50,50)
    pig2 = new Pig(200,170,50,50)
    log1 = new Log(200,220,300,PI/2)
    log2 = new Log(110,170,100,PI/7)
    log3 = new Log(270,170,100,-PI/7)
    ground = new Ground(200,380,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
   bird.display();
   box1.display();
   box2.display();
   pig.display();
   log.display();
   box3.display();
   box4.display();
   pig1.display();
   log1.display();
   log2.display();
   log3.display();
   pig2.display();
    ground.display();
}