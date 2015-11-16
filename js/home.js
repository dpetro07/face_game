var friends = document.getElementsByClassName("friends");
for(var i=0;i<friends.length;i++){
        friends[i].addEventListener('click', increaseScore);
    }

    function addClick () {
      clickCount++;
      alert("That lasted " + clickCount + " seconds");
}