
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var Score
var SurvivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage=   loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey = createSprite(30,350,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.09;
  ground = createSprite(300,380,900,10);
  ground.velocityX = -5;
  ground.x = ground.width/2;
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  
}


function draw() {
background("white");
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+Score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time:"+SurvivalTime,150,50);
  if(frameCount%25===0){
    SurvivalTime = SurvivalTime + 1;
  }
  
  
  if(keyDown("space")&&monkey.y>150){
    monkey.velocityY = -7;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  
  if(ground.x<300){
    ground.x = ground.width/2;
  }
  
  
  
  
  
  
 monkey.collide(ground);
  fruit ();
  obstacles ();
  drawSprites();
}

function fruit (){
  if(frameCount%80===0){
  banana = createSprite(590,250,10,10);
    banana.velocityX = -6;
   
    banana.y =Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
}
function obstacles (){
  if(frameCount%300 === 0){
  obstacle = createSprite(590,350,10,10);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
  }
}









