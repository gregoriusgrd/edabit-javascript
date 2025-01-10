// Equality Check
function checkEquality(a, b) {
    if (a === b) {
      return true;
    } else {
      return false
    }
  }
  
  checkEquality(1, true) // ➞ false
  
  checkEquality(0, "0") // ➞ false
  
  checkEquality(1,  1) // ➞ true
 