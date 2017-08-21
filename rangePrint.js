function printRange(startPoint,endPoint, increment){
    if(increment === undefined){
      increment = 1;
    } 
    if(endPoint ===undefined){
      endPoint = startPoint;
      startPoint = 0;
    }
    if(startPoint >= endPoint){
      console.log("Oops! The end point is less than the starting point.")
    }
    
    for(var i = startPoint; i < endPoint; i = i + increment){
      console.log(i);
    }
  }
  
  printRange(2, 10, 2);
  printRange(2, 10);
  printRange(4);
  