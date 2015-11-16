var secondsCount = 0;
var timerInterval;
var toggleBtn = document.getElementById("toggleBtn");

setTimeout (function() {
  if(secondsCount === 0){
    clearInterval(timerInterval);
    toggleBtn.parentNode.removeChild(toggleBtn);
    alert("Your score is")
  }
}, 2000);

function addSeconds () {
  secondsCount++;
}

function toggleTime() {
  if(this.getAttribute("data-state") === "start") {
    this.innerHTML = "Stop";
    this.setAttribute("data-state", "stop");
    secondsCount = 0;
    timerInterval = setInterval(addSeconds, 1000);
  } else {
    this.innerHTML = "Start";
    this.setAttribute("data-state", "start");
    clearInterval(timerInterval);
    alert("That lasted " + secondsCount + " seconds");
  }
}

toggleBtn.addEventListener("click", toggleTime);