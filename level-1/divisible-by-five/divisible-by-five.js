function divisibleByFive (n){
    if(n % 5 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(divisibleByFive(5)) // ➞ true
console.log(divisibleByFive(-55)) // ➞ true
console.log(divisibleByFive(37)) // ➞ false

