const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;
var box2;
var pig1;

function setup(){
    var canvas = createCanvas(1250,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1030,300,50,50);
    ground1 = new Ground(625,690,1250,20);
    box2 = new Box(920,280,50,50);
    pig1 = new Pigs(995,300,50,50);
}
function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    pig1.display();
}