// Get the modal
var loadmodal = document.getElementById("loadmodal");

// Get the button that opens the modal
var loadbtn = document.getElementById("buttonload");

// Get the <span> element that closes the modal
var loadspan = document.getElementsByClassName("loadclose")[0];

// When the user clicks on the button, open the modal
loadbtn.onclick = function() {
  loadmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
loadspan.onclick = function() {
  loadmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event)  {
  if (event.target == loadmodal) {
    loadmodal.style.display = "none";
  }
})