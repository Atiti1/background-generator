var css = document.querySelector("h3");
var color5 = document.querySelector(".color5");
var color6 = document.querySelector(".color6");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
    "linear-gradient(to right, "
    + color5.value
    + ", "
    + color6.value
    + ")";
}
  
  color5.addEventListener("input", setGradient);

  color6.addEventListener("input", setGradient); 