//Program to make algorithm for bouncing sprites
var car, wall;
var carImage;
var wall2;

function preload()
{
    carImage=loadImage("car.png");
}
function setup()
{
    createCanvas(1000,600)

    car=createSprite(400,100,50,50);
    car.addImage(carImage)
    car.scale=0.7;
    wall=createSprite(800,200,60,300)
    car.shapeColor=wall.shapeColor="yellow"
car.setCollider('circle',0,0,23)
wall.setCollider('rectangle',0,0,20,2)

wall2=createSprite(100,200,60,300);

wall2.setCollider('rectangle',0,0,20,23)

    car.velocityX=6;


     
car.debug=true;
wall.debug=true;
wall2.debug=true;

}

function draw()
{
    background(0);
     //console.log("Width Gap " + (car.x-wall.x )+ " "+(car.width/2+wall.width/2))
     //console.log("Height Gap "+ (car.y-wall.y )+ " " +(car.height/2+wall.height/2))
     
    isBouncing(car,wall)
    isBouncing(car,wall2)

    

    drawSprites();
}
