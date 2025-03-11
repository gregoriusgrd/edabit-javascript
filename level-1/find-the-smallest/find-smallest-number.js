function findSmallestNum(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findSmallestNum([34, 15, 88, 2])); // ➞ 2
console.log(findSmallestNum([34, -345, -1, 100])); // ➞ -345
console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])); // ➞ -0.9999
