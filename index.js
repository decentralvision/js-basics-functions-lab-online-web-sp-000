// Code your solution in this file!
function distanceInFeet(blocks) {
  blocks * 264
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
