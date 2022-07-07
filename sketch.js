let ground;
var bike,bikeimg;
var road,roadimg



var vx = 0;
var vy = 0;
var g = 0.05;


function preload()
{
  bikeimg = loadImage("bike.JPEG");
  
  roadimg=loadImage("road.jpg");
  

}

function setup() {
  createCanvas(800,800);

  road=createSprite(165,485,1,1)
  road.addImage(roadimg)
  

  ground = createSprite(200,710,800,20);
  ground.visible=false
  
  bike = createSprite(100,500,20,50);
  bike.addImage(bikeimg);
  bike.scale = 0.1;
  bike.debug=true;
  //bike.setCollider("rectangle",0,0,300,300)
  
}

function draw() 
{
  background("black");

  

  drawSprites();
 
}

function keyPressed()
{
  if(keyCode == UP_ARROW )
  {
    bike.y-=30
    console.log("up")
    
  }else if(keyCode == DOWN_ARROW)
  {
    bike.y+=30
    console.log("down")
  }
  
  
  

  
}



