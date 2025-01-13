function divisible (num){
    if(num % 100 === 0){
      return true;
    } else {
      return false;
    }
  }
  
console.log(divisible(1)) // ➞ false
console.log(divisible(1000)) // ➞ true
console.log(divisible(100)) // ➞ true
  