function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalContent = document.getElementById("modal_content")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

/* document.getElementById('close-modal').addEventListener('click', function(){
  modalContent.style.opacity = "0";
  modalContent.style.transform = "translateY(-150px)";
  modalContent.style.transition = "0.8s"

}) */

/* const modalbgClose = [
  {display : 'block'},
  {display : 'none'}
];

const modalbgTiming = {
  duration: 800,
  iterations: 1
}


document.querySelector('.close').addEventListener('click', function(){
  
 modalbg.animate(modalbgClose, modalbgTiming)
  
})
 */
document.querySelector('.close').addEventListener('click', function(){
  
  modalbg.style.display = "none"
   
 })

