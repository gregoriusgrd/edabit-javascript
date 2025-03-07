function acceptIntoMovie(age, isSupervised) {
  if (age >= 15 || isSupervised === true) {
    return true;
  } else {
    return false;
  }
}

// acceptIntoMovie(14, true) ➞ true
