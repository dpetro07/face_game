// CLICK COUNTER FUNCTIONS

// Increase click count when player clicks on each character and
// engages win message if player wins.
function counter() {
  if (this.getAttribute('data-clickable') === 'true') {
    count++;
    this.setAttribute('data-clickable', 'false');
    this.className = "friends";
  }
  document.getElementById("clickTotal").innerHTML = count;
  if (count === 20) {
    alert("You clicked all " + count + " characters with " + secondsLeft + " seconds left to spare! You won! Congratulations! =)")
    alert("Now, can you do it faster?")
    clearInterval(decTimer);
    location.reload();
  }
};

// Anonymous Function/Event Listener - when player clicks on character 
// counter function is engaged.
for(i = 0; i < clickableImages.length; i++) {
  clickableImages[i].addEventListener("click", counter); 
};