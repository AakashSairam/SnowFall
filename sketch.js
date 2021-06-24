
var snowflake,snowflakeImage;
var bgImage;

function preload() {
  snowflakeImage = loadImage("snow4.webp");
  bgImage = loadImage("snow1.jpg");
}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(bgImage);  
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImage);
  snowflake.scale = 0.1;
  }
}
