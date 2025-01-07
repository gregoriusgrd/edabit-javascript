// The Farm Problem
function animals(chickens, cows, pigs) {
    const chickenLegs = chickens * 2;
    const cowLegs = cows * 4;
    const pigLegs = pigs * 4;
    const totalLegs = chickenLegs + cowLegs + pigLegs;
    return totalLegs;
}

console.log(animals(2, 3, 5))