




const form = document.getElementById('form-signup')

form.addEventListener('submit', validate)

function validate(event) {
  event.preventDefault();

  const getFirstnameValue = document.getElementById('first').value
  const errorFirstname = document.querySelector('.error-firstname')
  let hasError = false
  if (getFirstnameValue.length <= 2) {
    errorFirstname.style.display = "block";
    hasError = true;
  } else {
    errorFirstname.style.display = "none";
  }

  const getLastnameValue = document.getElementById('last').value
  const errorLastname = document.querySelector('.error-lastname');

  if (getLastnameValue.length <= 2) {
    errorLastname.style.display = "block";
    hasError = true;
  } else {
    errorLastname.style.display = "none";
  }

  const getEmailValue = document.getElementById('email').value
  const errorEmail = document.querySelector('.error-email')
  const validateEmail = document.querySelector('.validate-email')
  const emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g')
  testEmail = emailRegExp.test(getEmailValue)

  if (testEmail === false) {
    errorEmail.style.display = "block";
    validateEmail.style.display = "none"
    hasError = true;
  } else {
    errorEmail.style.display = "none"
    validateEmail.style.display = "block"
  }
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


  /* const inputChecked = document.querySelectorAll('.checkbox-input').checked
  console.log(inputChecked) */
  /* while(inputChecked === false){
    document.querySelector('.error-radio').style.display = "block"
  } */
  const formRadio = document.getElementById('radio-form')
  console.log(formRadio)


  for (let i = 0; i < formRadio.length; i++) {
    console.log(formRadio[i])
    if (formRadio[i].checked) {
      document.querySelector('.error-radio').style.display = "none"
    } else {
      document.querySelector('.error-radio').style.display = "block"
    }
  }

  /* if(formRadio === false){
    document.querySelector('.error-radio').style.display = "block"
  }else{
    document.querySelector('.error-radio').style.display = "none"

  } */

  const termOfService = document.getElementById('checkbox1')

  if (termOfService.checked === false) {
    document.querySelector('.error-terms-of-rules').style.display = "block"
  } else {
    document.querySelector('.error-terms-of-rules').style.display = "none"
  }
  if (hasError === false) {
    //affiche le message de confirmation
  }

}




/* const inputChecked = document.querySelectorAll('.checkbox-input')
    console.log("mes input check avec queryselector : ", inputChecked.checked) */







