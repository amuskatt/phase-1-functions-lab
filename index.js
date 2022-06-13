const headQuarters = 42
   const block = 264
function distanceFromHqInBlocks(street) {
    if (headQuarters < street){
    return (street) - (headQuarters);
    }
    else {
        return (headQuarters) - (street);
    }
  }
  
  function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * block;
  }

  function distanceTravelledInFeet(a, b) {
      if (a > b){
      return (a - b) * block;
      }
      else {
          return (b - a) * block;
      }
 }

  function calculatesFarePrice(start, destination){
      let journey = distanceTravelledInFeet(start, destination)
      if (journey <= 400 ){
          return 0
      }
      else if (journey > 400 && journey <= 2000){
          return (journey - 400) * .02
      }
      else if (journey >= 2000 && journey <= 2500){
          return 25
      }
      else if (journey > 2500){
          return 'cannot travel that far'
      }
    }
