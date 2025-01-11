function calculateFuel(n){
    let fuelNeeded = n * 10;
    if (fuelNeeded <= 100){
      return 100;
    } else {
      return fuelNeeded;
    }
  }
  
  console.log(calculateFuel(15)) // ➞ 150
  console.log(calculateFuel(23.5)) // ➞ 235
  console.log(calculateFuel(3)) // ➞ 100