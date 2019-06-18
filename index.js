// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  return Math.abs(42 - someValue)
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet (origin, destination) {
  return Math.abs(origin - destination)
}
