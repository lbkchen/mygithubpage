function love() {
  // Make score visible if hidden
  document.getElementById("score-box").style.color = "#373737";

  // Increment score by random amount
  document.getElementById("score-value").innerHTML = parseInt(document.getElementById("score-value").innerHTML) + getLoveValue();
}

function getLoveValue() {
  return getRandomInt(-180, 200);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
