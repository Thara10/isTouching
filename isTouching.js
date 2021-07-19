function isTouching(A1,A2){
    if(A1.x-A2.x<A2.width/2+A1.width/2&&
      A2.x- A1.x<A2.width/2+A1.width/2&&
      A1.y-A2.y<A2.height/2+A1.height/2&&
      A2.y- A1.y<A2.height/2+A1.height/2){
     return true
    
    }else{
     return false
    }
  
  }