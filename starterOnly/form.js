

const form = document.getElementById('form-signup')
form.addEventListener('submit', validate)

function validate(event) {
  event.preventDefault();

 /* firstname */

  const getFirstnameValue = document.getElementById('first').value
  const errorFirstname = document.querySelector('.error-firstname')
  let hasError = false
  if (getFirstnameValue.length <= 2) {
    errorFirstname.style.display = "block";
    hasError = true;
  } else {
    errorFirstname.style.display = "none";
  }

/* lastname */

  const getLastnameValue = document.getElementById('last').value
  const errorLastname = document.querySelector('.error-lastname');

  if (getLastnameValue.length <= 2) {
    errorLastname.style.display = "block";
    hasError = true;
  } else {
    errorLastname.style.display = "none";
  }

/* email */

  const getEmailValue = document.getElementById('email').value
  const errorEmail = document.querySelector('.error-email')
  const validateEmail = document.querySelector('.validate-email')
  const emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g')
  testEmail = emailRegExp.test(getEmailValue)

  if (testEmail === false) {
    errorEmail.style.display = "block";
    hasError = true;
  } else {
    errorEmail.style.display = "none"
  }

/* number of participation */

  const getQuantityValue = document.getElementById('quantity').value
  const errorQuantity = document.querySelector('.error-quantity')
  const quantityRegexp = new RegExp(/^\d+$/)

  testQuantity = quantityRegexp.test(getQuantityValue)

  if (testQuantity === false) {
    errorQuantity.style.display = "block";
    hasError = true;
  } else {
    errorQuantity.style.display = "none";
  }

  /* location */

  const locationInputs = document.querySelectorAll("input[name='location']")
  const errorOption = document.getElementById('erreur-radio')

  let inputChecked = 0;

    for(let i = 0; i < locationInputs.length; i++){
      if(locationInputs[i].checked === false){
        inputChecked++
    }}
    if(inputChecked >= locationInputs.length){
      errorOption.style.display = "block"
    }else{
      errorOption.style.display = "none"
    }
   

  /* terms of use */
  const termsOfuse = document.getElementById('checkbox1').checked
  if(termsOfuse === false){
    document.querySelector('.error-terms-of-rules').style.display = "block"
    hasError = true;
  }else{
    document.querySelector('.error-terms-of-rules').style.display = "none"
  }
 


  /* successful message */

  if (hasError === false) {
    document.querySelector('.form-successfull').style.display = "block"
  }

}





  








