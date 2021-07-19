var movingRect
var fixedRect
var Ob1,Ob2
function setup() {
  createCanvas(1500,1000);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="aqua"

  movingRect=createSprite(400, 200, 80, 50);
  movingRect.shapeColor="yellow"

  Ob1=createSprite(300, 100, 50, 80);
  Ob1.shapeColor="aqua"

  Ob2=createSprite(200, 100, 50, 80);
  Ob2.shapeColor="aqua"
  
}

function draw() {
  background("black")
  movingRect.x=mouseX  
  movingRect.y=mouseY
 
  if(isTouching(movingRect,Ob2)){
    Ob2.shapeColor="pink"
    movingRect.shapeColor="pink"
  }else{
    movingRect.shapeColor="yellow"
    Ob2.shapeColor="aqua"
  }
  drawSprites();
}
