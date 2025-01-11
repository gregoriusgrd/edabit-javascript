//Compare Strings by Count of Characters
function comp(str1, str2){
if(str1.length === str2.length) {
    return true
  } else {
    return false
 }
}

comp("AB", "CD") // ➞ true

comp("ABC", "DE") // ➞ false

comp("hello", "edabit") // ➞ false