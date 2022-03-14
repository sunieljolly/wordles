function information(){
   document.getElementById("myModal").innerHTML = (
        '<div class="modal-content">' +
        '<p>Last update: 15:52:03 14-03-2022</p>' + 
        '<p>Reverse Points System</p>' + 
        '<p>1 Line = 6 Points</p>' + 
        '<p>2 Line = 5 Points</p>' + 
        '<p>3 Line = 4 Points</p>' + 
        '<p>4 Line = 3 Points</p>' + 
        '<p>5 Line = 2 Points</p>' + 
        '<p>6 Line = 1 Points</p>' + 
        '<p>Goal difference is based on 3 points for a green square, 2 points for a yellow and minus 1 for every blank square. This will be used if two players a tied for RPS.</p>' + 
        '<p>Guess the Wordle in two lines to make it on to the Hall of Fame</p>' + 
        '</div>' +
      
      '</div>'

    )
    modal.style.display = "block";
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";      
    }
  }


}
