// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    // return Math.abs(42 - location)
    if (location > 42){
        return location - 42
    } else if (location < 42){
        return 42 - location
    }
}

function distanceFromHqInFeet (location){
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, destination) {
    //return Math.abs(start - destination) * 264
    if (start > destination) {
        return (start - destination) * 264
    } else if (start < destination) {
        return (destination - start) * 264
    }
}

function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet (start,destination) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(start,destination) > 401 && distanceTravelledInFeet(start,destination) <= 2000) {
        return (distanceTravelledInFeet(start,destination)-400) * 0.02
    } else if (distanceTravelledInFeet(start,destination)> 2000 && distanceTravelledInFeet(start,destination) <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}

