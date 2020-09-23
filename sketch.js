var wall,thickness
var weight,speed,bullet
function setup() {
  createCanvas(2000,2000);
  bullet = createSprite(50,200,50,50);
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,height/2)
  speed=random(223,321)
  weight=random(30,52)
  deformation = 0
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed
  damage = 0.5*speed*speed*weight/thickness*thickness*thickness
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
  }
  
  drawSprites();
}
function hasCollided(lbullet,lwall) {
  bulletrightedge= bullet.x + bullet.width
  wallleftedge = wall.x
  if(bulletrightedge>=wallleftedge){
    return true
  }
  return false
}