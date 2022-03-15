function refund(){
    document.getElementById("myModal").innerHTML = (
        '<div class="modal-content">' +
        '<button class="exitbutton" onclick="exit()">✖</button>' + 
        '<p>Refund instructions: </p>' +
        '<img src="/img/bank.png" alt="facejacker" class="responsive">' +
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