var movingRec,fixRec;

function setup() {
   createCanvas(800,400);
 object1=createSprite(400, 200, 50, 50);
  object2=createSprite(600, 200, 100, 50);

  object1.shapeColor="green";
  object2.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  object1.x=mouseX;
  object2.y=mouseY;
  if(istouching(object1, object2)){

    object1.shapeColor="red";
  }
  else{
    object1.shapeColor="green";
  }
 
  drawSprites();
}
