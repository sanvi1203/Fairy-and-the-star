var backImg;
var fairy,fairyImg;
var star,starImg;

function preload()
{
   //preload the images here
   
   backImg = loadImage("images/starnight.png");
   fairyImg = loadImage("images/fairy1.png");
   starImg = loadImage("images/star.png");
  
}

function setup() {
  createCanvas(800, 750);
  
  fairy = createSprite(100,500,50,50);
  fairy.addImage("fairy3",fairyImg);
  fairy.scale = 0.2;

  star = createSprite(730,30,50,50)
  star.addImage("star1",starImg);
  star.scale = 0.2;
}


function draw() {
  background(backImg);

  if(keyDown("RIGHT_ARROW")) {
    fairy.x = fairy.x + 10;
  }

  if(keyDown("LEFT_ARROW")) {
    fairy.x = fairy.x - 10;
  }
  console.log(fairy.position.x) 

  if(keyDown("DOWN_ARROW")) {
    star.velocityY = 3;

  }

  drawSprites();
}
