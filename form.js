

const form = document.getElementById('form-signup')
form.addEventListener('submit', validate)

function validate(event) {
  event.preventDefault();

  let hasError = false

  const displayError = (myVar,errorMessage) => {
    if(!myVar){
      errorMessage.style.display = "block";
      hasError = true;
    } else {
      errorMessage.style.display = "none";
    }
  }

  const displayErrorName = (condition,errorMessage) => {
    if(condition){
      errorMessage.style.display = "block"
      hasError = true;
    } else {
      errorMessage.style.display = "none"
    }
  }

  /* firstname */

  const getFirstnameValue = document.getElementById('first').value
  const errorFirstname = document.querySelector('.error-firstname')

  displayErrorName(getFirstnameValue.length <= 2, errorFirstname);

  /* lastname */

  const getLastnameValue = document.getElementById('last').value
  const errorLastname = document.querySelector('.error-lastname');

  displayErrorName(getLastnameValue.length <= 2, errorLastname);

  /* email */

  const getEmailValue = document.getElementById('email').value
  const errorEmail = document.querySelector('.error-email')
  const emailRegExp = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'g')
  testEmail = emailRegExp.test(getEmailValue)

  displayError(testEmail,errorEmail)

  /* birthDate */

  const getBirthDateValue = document.getElementById('birthdate').value
  const errorBirthDate = document.querySelector('.error-birthdate')

  displayError(getBirthDateValue,errorBirthDate)


  /* number of participation */

  const getQuantityValue = document.getElementById('quantity').value
  const errorQuantity = document.querySelector('.error-quantity')
  const quantityRegexp = new RegExp(/^\d+$/)
  testQuantity = quantityRegexp.test(getQuantityValue)

  displayError(testQuantity,errorQuantity);

  /* location */
 
  const errorOption = document.getElementById('erreur-radio')
  const valueOfFormRadio = document.forms['form-signup'].elements.location.value;

  displayError(valueOfFormRadio,errorOption)

  /* terms of use */

  const termsOfuse = document.getElementById('checkbox1').checked
  const ErrorTermsOfUse = document.querySelector('.error-terms-of-rules')

  displayError(termsOfuse,ErrorTermsOfUse)

  /* successful message */

  if (!hasError) {
    document.querySelector('.form-successfull').style.display = "block"
    form.reset()
  }

}












