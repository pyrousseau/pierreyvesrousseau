/* Place your JavaScript in this file */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
 
  var x = document.getElementById("myTopnav");  
  if (x.className === "topnav") {
    x.className += " responsive"; 
  } else {
    x.className = "topnav";
  } 
}

 var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });

 
 
