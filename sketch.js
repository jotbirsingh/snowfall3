var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var boyImg;
var ground;
function preload(){
  backgroundImg =loadImage("snow2.jpg");
  boyImg=loadImage("boy.png");

}

function setup() { 
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

 // ground = new Ground(width/2,height,width,20);
 snow = new snowFall(500,250,10,10)
  boy=createSprite(970,500,10,10);
  boy.scale=0.4;
  boy.addImage(boyImg);

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

//ground.display();
snow.display();
boy.display();
  drawSprites();
 
    
}