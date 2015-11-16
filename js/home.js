/*Variables*/
var clickTimer;
var secondsLeft = 20;
var count = 0;
var faceImages = document.getElementsByClassName("friends");
var startButton = document.getElementById("startButton");


/*Timer countdown Javascript Section*/
function startTimer(){
  clickTimer = setInterval(timer, 1000);
  for (var i = 0; i < faceImages.length; i++) {
    faceImages[i].setAttribute("data-clickable", "true");
    startButton.setAttribute("class", "btn btn-danger");
  }
};

startButton.addEventListener("click", startTimer);

function timer() {
  if(secondsLeft > 0) {
    document.getElementById("time").innerHTML = secondsLeft -=1;
  } else {
      gameOver();
      location.reload();
  }
};

/*Game over Javascipt Section*/
function gameOver() {
  alert("Times Up!");
  if (count === 0) {
    alert("You clicked 0 classmates. You need to click on all 20 classmates to win. Try Again")
  } else if (count === 1) {
    alert("You clicked " + count + " classmate. You need to click 19 more classmates to win. Try Again")
  } else {
    alert("You clicked on " + count + " of your classmates. You needed to click " + (20 - count) + " more classmates to win. Try Again")
  }
  clearInterval(clickTimer);
};


function counter() {
  if (this.getAttribute("data-clickable") === 'true') {
    count++;
    this.setAttribute("data-clickable", "false");

  }
  document.getElementById("clickTotal").innerHTML = count;
  if (count === 20) {
    alert("YOU WIN! ")
    clearInterval(clickTimer);
    location.reload();
  }
};


for(i = 0; i < faceImages.length; i++) {
  faceImages[i].addEventListener("click", counter); 
};