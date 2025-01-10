// Football Points
function footballPoints(wins, draws, losses) {
    const totalPoints = (wins * 3) + (draws * 1) + (losses * 0);
    return totalPoints;
  }
  
  console.log(footballPoints(3, 4, 2)); // ➞ 13
  console.log(footballPoints(5, 0, 2)); // ➞ 15
  console.log(footballPoints(0, 0, 1)); // ➞ 0