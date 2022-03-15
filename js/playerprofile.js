function playerprofile(selectedValue){
  for (var i = 0; i < wordledata.length; i++) {
      
    if (wordledata[i].player === selectedValue) {
      if (wordledata[i].mostusedletters[0] !== undefined){
        var firstletter = wordledata[i].mostusedletters[0][0]        
      }else{
        firstletter = ''        
      }
      if (wordledata[i].mostusedletters[1] !== undefined){
        var secondletter = ' + ' + wordledata[i].mostusedletters[1][0]
      }else{
        secondletter = ''        
      }
      if (wordledata[i].mostusedletters[2] !== undefined){
        var thirdletter = ' + ' + wordledata[i].mostusedletters[2][0]
      }else{
        thirdletter = ''        
      }

      
   document.getElementById("myModal").innerHTML = (
        '<div class="modal-content">' +
        '<p class="exitbutton" onclick="exit()">&#9746;</p>'+
        '<p>' + wordledata[i].player + '</p>' +
        '<img src="' + wordledata[i].img + '" class="profile-picture" alt="profilepicture"><br>' + 
        wordledata[i].totalstars + '<br>' +
        wordledata[i].uncompleted + '<br>' +
        '<p>Overall average ' + wordledata[i].avg + '</p>' +
        'Most often used letters = ' + firstletter + secondletter + thirdletter + '<br>' +
        wordledata[i].summary +
      '</div>'
    )
   }
  }
    modal.style.display = "block";
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";      
    }
  }


}
