// function that takes a pickup location for a passenger
function distanceFromHqInBlocks (pickupDest) {
    const headquarters = 42;
// If statement to return number of blocks from HQ
    if (pickupDest >= headquarters) {
      return pickupDest - headquarters;
    }else {
        return headquarters - pickupDest;
    }
}

//function that translates the number of blocks from headquarters to the distance in feet
function distanceFromHqInFeet (blocks) {
    const block = distanceFromHqInBlocks(blocks);
    const blockInFeet = 264;
   return blockInFeet * block;
}

//function that calculates the number of feet a passenger travels
function distanceTravelledInFeet (start, destination) {
    const blockInFeet = 264;
    let distanceTravelled;
    if (destination > start) {
        distanceTravelled = destination - start;
    }else{
        distanceTravelled = start - destination;
    }
  return distanceTravelled * blockInFeet;
}
// variable for stoping block assuming it is headquarters
// const stopBlock = 42;

//Function to return the fare for the customer
function calculatesFarePrice (start, destination) {
    const blockInFeet = 264;
    const distance = distanceTravelledInFeet(start, destination);
    let price;
    if (distance <= 400) {
         price = 0;
    }else if (distance > 400 && distance <= 2000) {
         price = (distance - 400) * 0.02;
    }else if (distance > 2000 && distance < 2500) {
         price = 25;
    }else {
        return 'cannot travel that far';
    }
    return price;
}
const startBlock = 38;
const stopBlock = 42;
console.log(calculatesFarePrice(startBlock, stopBlock));
