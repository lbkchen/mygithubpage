// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = konamiCode[konamiCodePosition];

  if (key == requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition == konamiCode.length)
      activateCheats();
  } else
    konamiCodePosition = 0;
});

function activateCheats() {
  // Background
  document.getElementById("content").style.backgroundImage = "url('images/llamas.jpg')";
  document.body.style.color = "white";

  // Animations
  document.getElementById("main").style.animation = "seizure 0.3s infinite";
  var elements = document.querySelectorAll('p,a,h1,img,button');
  for (var i=0, max=elements.length; i < max; i++) {
    elements[i].style.animation = "rotate 0.5s linear infinite";
  }
  var boxes = document.getElementsByClassName("project-box");
  for (var i=0, max=boxes.length; i < max; i++) {
    boxes[i].style.animation = "pulse 0.5s ease-in-out infinite";
    boxes[i].style.animationDelay = i * 80 + "ms";
  }

  // Swag music
  var audio = new Audio('sounds/guile.mp3');
  audio.play();

  alert("cheats activated");
}
