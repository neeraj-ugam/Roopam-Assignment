window.onload = function(){
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("sendLogin");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var errorMessage = document.getElementById("requiredEmail");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    var email = document.getElementById("email").value;
    if(email === ''){
      errorMessage.style.display = 'block'
    } 
    else{
      document.getElementById('regEmail').value = email;
      modal.style.display = "block";
      errorMessage.style.display = 'none'
      setDays();
      setYears();
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function setDays(){
  var start = 1;
  var end = 31;
  var options = "";
  for(var year = start ; year <=end; year++){
    options += "<option>"+ year +"</option>";
  }
  document.getElementById("select-day").innerHTML = options;
  }


function setYears() {
var start = 1900;
var end = new Date().getFullYear();
var options = "";
for(var year = start ; year <=end; year++){
  options += "<option>"+ year +"</option>";
}
document.getElementById("select-year").innerHTML = options;
}
}
