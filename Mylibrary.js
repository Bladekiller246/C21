function istouching(movingRec, fixRec){
    if(movingRec.x-fixRec.x<fixRec.width/2+movingRec.width/2 && fixRec.x-movingRec.x<fixRec.width/2+movingRec.width/2 && movingRec.y-fixRec.y<fixRec.width/2+movingRec.width/2 && fixRec.y-movingRec.y<fixRec.width/2+movingRec.width/2){
      
      return true;
  
    }
    else{
  
      
     return false;
  }
  }