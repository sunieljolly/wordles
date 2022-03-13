function playerprofile(selectedValue){
   document.getElementById("myModal").innerHTML = (
        '<div class="modal-content">' +
        '<p>' + selectedValue + '</p>' + 
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
