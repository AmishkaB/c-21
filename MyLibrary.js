function isTouching(object1, object2) //parameters
{ 
 if(Math.abs(object1.x-object2.x) <= (object1.width/2+object2.width/2) && (Math.abs(object1.y-object2.y) <=(object1.height/2+object2.height/2)))
  {
    return true;
  }
  else
  {
    return false;
  }
}
  function isBouncing(obj1,obj2){


//bouncing algorithm
if(Math.abs(obj1.x-obj2.x)<=(obj1.width/2+obj2.width/2)) {

    obj1.velocityX= obj1.velocityX *-1;
    //wall.velocityX *=-1;

}

//if(Math.abs(obj1.y-obj2.y)<=(obj1.height/2+obj2.height/2))
{
// obj1.velocityY= obj1.velocityY *-1;
 //wall.velocityY *=-1;

}
}
