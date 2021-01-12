var F1,M1;
var GO1,GO2,GO3,GO4;


function setup() {
  createCanvas(1200,800);
  M1=createSprite(200, 800, 50, 30);
  M1.shapeColor="blue";
  M1.velocityY=-3;
  F1=createSprite(200,100,50,50);
  F1.shapeColor="blue";
  F1.velocityY=3;

  GO1=createSprite(100,100,50,50);
  GO1.shapeColor="blue";
  GO2=createSprite(200,200,50,50);
  GO2.shapeColor="blue";
  GO3=createSprite(300,300,50,50);
  GO3.shapeColor="blue";
  GO4=createSprite(400,260,50,50);
  GO4.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  M1.y=mouseY;
  M1.x=mouseX;
  
  if(isTouching(M1,GO4)){
    M1.shapeColor="pink";
    GO4.shapeColor="pink";

  }else {
    M1.shapeColor="blue";
    GO4.shapeColor="blue";
  }
bounceOff(M1,F1);

  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object2.width/2+object1.width/2
     &&object2.y-object1.y<object1.height/2+object2.height/2 && object1.y-object2.y<object1.height/2+object2.height/2){

    
    return true;
  }else{
    
    return false;
  }

}

function bounceOff(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object2.width/2+object1.width/2){
    object1.velocityX=object1.velocityX*(-1);
    object2.velocityX=object2.velocityX*(-1);

  }

if(object2.y-object1.y<object1.height/2+object2.height/2 && object1.y-object2.y<object1.height/2+object2.height/2){
object1.velocityY=object1.velocityY*(-1);
object2.velocityY=object2.velocityY*(-1);
}
  
}


