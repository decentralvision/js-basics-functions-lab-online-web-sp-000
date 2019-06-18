// Code your solution in this file!
function distanceInFeet(blocks) {
  return (blocks * 264)
}
function distanceFromHqInBlocks (someValue) {
  return Math.abs(42 - someValue)
}

function distanceFromHqInFeet (someValue) {
  return distanceInFeet(distanceFromHqInBlocks(someValue))
}

function distanceTravelledInFeet (origin, destination) {
  return distanceInFeet(Math.abs(origin - destination))
}

function calculatesFarePrice (origin, destination) {
  distance = distanceTravelledInFeet(origin, destination)
  if (distance > 2500) {
    return 'cannot travel that far'
  } else if (distance <= 400) {
    return 0
  } else if (distance > 2000 ) {
    return 25
  } else {
    return (distance * 0.02)
  }
}
