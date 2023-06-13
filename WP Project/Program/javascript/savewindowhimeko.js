//change into usable value
function int(value) {
  return parseInt(value);
}

// Get the modal
var savemodal = document.getElementById("savemodal");

// Get the button that opens the modal
var savebtn = document.getElementById("buttonsave");

// Get the <span> element that closes the modal
var savespan = document.getElementsByClassName("saveclose")[0];

// When the user clicks on the button, open the modal
savebtn.onclick = function() {
  savemodal.style.display = "block";

  //take value and show in save window
  let atksv = document.getElementById("atk").value;
  let spdsv = document.getElementById("spd").value;
  let critsv = document.getElementById("crit").value;
  let fdbsv = document.getElementById("fdb").value;
  let batksv = document.getElementById("batk").value;
  let skillsv = document.getElementById("skill").value;
  let ultsv = document.getElementById("ult").value;

  document.getElementById("saveatk").value = atksv;
  document.getElementById("savespd").value = spdsv;
  document.getElementById("savecrit").value = critsv;
  document.getElementById("savefdb").value = fdbsv;
  document.getElementById("savebatk").value = batksv;
  document.getElementById("saveskill").value = skillsv;
  document.getElementById("saveult").value = ultsv;
}

// When the user clicks on <span> (x), close the modal
savespan.onclick = function() {
  savemodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event)  {
  if (event.target == savemodal) {
    savemodal.style.display = "none";
  }
})