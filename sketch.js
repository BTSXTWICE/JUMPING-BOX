var canvas;
var music;
var ball;
var block1,block2,block3,block4;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1= createSprite(1,580,350,20);
    block1.shapeColor= "red";

    block2= createSprite(293,580,200,20);
    block2.shapeColor="green";

    block3=createSprite(512,580,200,20);
    block3.shapeColor= "blue"

    block4=createSprite(740,580,220,20);
    block4.shapeColor="yellow";

    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor="white";
    ball.velocityX=2;
    ball.velocityY=7;
}

function draw() {
    background("black");
   edges=createEdgeSprites();
   ball.bounceOff(edges)

   if(block1.isTouching(ball)){
    ball.velocityX=0;
    ball.velocityY=0
    music.stop();
   }

   if(block2.isTouching(ball)&& ball.bounceOff(block2)){
   ball.shapeColor="green";
      
   }

   if(block3.isTouching(ball)&& ball.bounceOff(block3)){
      ball.shapeColor="blue"
      music.play();
   }

   if(block4.isTouching(ball)&& ball.bounceOff(block4))
      ball.shapeColor="yellow";

   drawSprites();
}


   
