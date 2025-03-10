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

const myForm = document.getElementById('form-signup')

document.getElementById('close-modal').addEventListener('click', function(){
  
  modalbg.style.display = "none"
  myForm.reset()
  document.querySelector('.form-successfull').style.display = "none"
 })

