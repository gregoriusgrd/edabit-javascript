function area (h, w){
    result = h * w;
    if (typeof h === 'number' && typeof w === 'number' && h > 0 && w > 0){
      return result;
    } else {
      return -1;
    }
  }
  
console.log(area(3, 4)) // ➞ 12
console.log(area(10, 11)) // ➞ 110
console.log(area(-1, 5)) // ➞ -1
