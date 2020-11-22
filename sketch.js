var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect = createSprite(400, 200, 50, 80);
  rect1 =createSprite(200, 100, 50, 80);
  rect2 = createSprite(200, 500, 50, 80);
  fixedRect.shapeColor = "red";
   movingRect.shapeColor = "yellow";
   rect1.velocityY = 5;
   rect2.velocityY = -5;
   rect1.shapeColor = "blue";
   rect2.shapeColor = "pink";
  
}


function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2  &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "yellow";
  }

  if (rect1.y - rect2.y < rect1.height/2 + rect2.height/2
    && rect2.y - rect1.y < rect1.height/2 + rect2.height/2){
      rect1.velocityY = -1*rect1.velocityY;
      rect2.velocityY = -1*rect2.velocityY;
      
    }





  drawSprites();
}