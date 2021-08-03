var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;
var red, redImg;
var orange, orangeImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  redImg = loadImage("redImage.png");
  orangeImg = loadImage("orangeleaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnOrange();

  spawnRed();

  spawnLeaf();

  spawnApple();

  drawSprites();
}

function spawnApple(){
  if (frameCount %60===0){
  apple = createSprite(200,0);
  apple.velocityY = 3 ;
  apple.addImage("apple", appleImg);
  apple.scale = 0.1;
  apple.x = Math.round (random(20,380));
  }
  } 

  function spawnLeaf(){
    if (frameCount % 60===0){
    leaf = createSprite(200,0);
    leaf.velocityY = 3 ;
    leaf.addImage("leaf", leafImg);
    leaf.scale = 0.05;
    leaf.x = Math.round (random(20,380));
    }
    } 

    function spawnRed(){
      if (frameCount % 60===0){
      red = createSprite(200,0);
      red.velocityY = 3 ;
      red.addImage("red", redImg);
      red.scale = 0.05;
      red.x = Math.round (random(20,380));
      }
      }
      
      function spawnOrange(){
        if (frameCount % 60===0){
          orange = createSprite(200,0);
        orange.velocityY = 3 ;
        orange.addImage("orange", orangeImg);
        orange.scale = 0.05;
        orange.x = Math.round (random(20,380));
        }
        } 