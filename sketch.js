const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,paper , firspart , secondpart , thirdpart;

function preload(){
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    dustpaper = new Paper(200 , 450 , 40);
ground = new Ground(width/2 , 470  ,width , 20 );

    firspart = new Dustbin(902,400,10,120);
    secondpart = new Dustbin(962,460,130,10);
    thirdpart = new Dustbin(1024,400,10,120);
}
function draw(){
    background(0);
    Engine.update(engine);

    
    dustpaper.display();
    firspart.display();
    secondpart.display();
    thirdpart.display(); 
    ground.display();
    drawSprites();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.applyForce(dustpaper.body,dustpaper.body.position,{x:74,y:-75});
	}
}