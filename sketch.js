var seaImg, shipImg;
var sea, ship; 
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadImage("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(100,200,400,20);
  sea.addImage("sea", seaImg);
  //sea.scale = 0.5;
  sea.x = sea.width /2;
  sea.velocityX = -4;

ship = createSprite(200,300,20,20);
ship.addImage("ship", shipImg);
ship.scale = 0.2

  
}

function draw() {
  background("blue");
  if (sea.x < 0){
    sea.x = ground.width/2;
  }
  drawSprites();
}