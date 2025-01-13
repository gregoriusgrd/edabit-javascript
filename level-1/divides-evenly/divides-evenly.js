function dividesEvenly(a, b) {
const divide = a / b;
if (Number.isInteger(divide) && a % b === 0){
    return true;
  } else {
    return false;
  }
}

console.log(dividesEvenly(98, 7)) // ➞ true
// 98/7 = 14

console.log(dividesEvenly(85, 4)) // ➞ false
// 85/4 = 21.25