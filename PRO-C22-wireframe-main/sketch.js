const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, groundMatter;
var ursinho, spike, fundo, groundImg;
var ursinhoIMG, spikeIMG, fundoIMG, groundIMG;
var nuvemN, nuvemR, nuvemB;
var nuvemGroup;

function preload() {
 
  fundoIMG = loadImage("./assets/world1.png");
  ursinhoIMG = loadImage("./assets/bearb1.png");
  groundIMG = loadImage("./assets/ground.png");
  spikeIMG = loadImage("./assets/spike.png");
  nuvemN = loadImage("./assets/nuvemN.png");
  nuvemR = loadImage("./assets/nuvemR.png");
  nuvemB = loadImage("./assets/nuvemB.png");

}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  var options={
   isStatic:true
  };
 
  groundMatter = Bodies.rectangle(0,height-1, width*2,1,options);
  World.add(world,groundMatter);

  ursinho=createSprite(height-100,width-300,200,200);
  ursinho.addImage(ursinhoIMG);
  ursinho.scale = 0.8;

  nuvemGroup = new Group();

}

function draw() {
  background(fundoIMG);
  Engine.update(engine);
 
  rect(groundMatter.position.x, groundMatter.position.y,width*2,1);
  drawSprites(); 
  spawnclouds();
 
}

function spawnclouds() {
  if(frameCount % 60 === 0) {
    var nuvem = createSprite(width+100,height+300,10,40);
    
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: nuvem.addImage(nuvemN);
              break;
      case 2: nuvem.addImage(nuvemB);
              break;
      case 3: nuvem.addImage(nuvemR);
              break;
 
      default: break;
    }
    
    nuvem.scale = 1;
    nuvem.lifetime = 300;
    
    nuvemGroup.add(nuvem);
  }
}

