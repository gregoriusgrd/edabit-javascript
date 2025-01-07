// Convert Hours and Minutes into Seconds
function convert(hours, minutes) {
    const convertHours = hours * 3600;
    const convertMinutes = minutes * 60;
    const totalSeconds = convertHours + convertMinutes;
    return totalSeconds;
  }
  
  console.log(convert(1, 3))