var form = document.getElementById('userForm');


form.addEventListener('submit', function() {
  event.preventDefault();
  validateform(this);

  return false;


});



function validateform(formToSubmit) {

  var form = formToSubmit;

  // clear styling

  // define regexp
  var regexp = {

    digitsRegExp: new RegExp('^[0-9]+$'),
    stringRegExp: new RegExp('^[a-zA-Z]+$'),
    emailRegExp: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),

    mediumPassRegExp: new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'),
    // contains six characters or more and has
    // at least one lowercase and one uppercase alphabetical character or has at least one lowercase
    // and one numeric character or has at least one uppercase and one numeric character.  

  };



  // define inputs

  var inputsArray = [

    {
      name: form.elements['name'],
      pattern: regexp.stringRegExp
    },
    {
      name: form.elements['surname'],
      pattern: regexp.stringRegExp
    },
    {
      name: form.elements['phone'],
      pattern: regexp.digitsRegExp
    },
    {
      name: form.elements['email'],
      pattern: regexp.emailRegExp
    },

    {
      name: form.elements['password'],
      pattern: regexp.mediumPassRegExp
    }


  ];


  var booleanArray = inputsArray.map(function(el) {

    if (validateInput(form, el.name, el.pattern)) {

      return true;

    } else {

      return false;

    }


  });

  // show result of validation
  // console.log(booleanArray);


  if (booleanArray.includes(false)) {
    return false;
  } else {

  	// showCongrats();
    form.submit();

  }


}


function validateInput(form, input, regexp) {


  if ((!validateLength(form, input)) || (!validateData(form, input, regexp))) {
    // console.log(validateLength(form, input), validateData(form, input, regexp));

    showError(input);

    return false;
  } else {
    showStatus(input);

    return true;
  }


}



function validateLength(formOfInputs, typeOfInput) {

  var inputName = typeOfInput.name;
  var inputValue = typeOfInput.value;
  var inputValueLength = inputValue.length;

  if (inputName === 'phone') {
    if ((inputValueLength >= 10) && (inputValueLength <= 12)) {
      // console.log(typeOfInput.value, inputValueLength, 'it has length');
      return true;
    } else {

      return false;
    }
  } else if (inputName === 'password') {
    if ((inputValueLength >= 6) && (inputValueLength <= 100)) {
      // console.log(typeOfInput.value, inputValueLength, 'it has length');
      return true;
    } else {
      // console.log(false);
      return false;
    }
  } else {

    if ((typeOfInput !== '') && (inputValueLength >= 2)) {
      // console.log(typeOfInput.value, inputValueLength,'it has length');
      return true;
    } else {
      // console.log(false);
      return false;
    }
  }


}


function validateData(formOfInputs, typeOfInput, regexp) {
  var inputValue = typeOfInput.value;

  if (regexp.test(inputValue)) {
    return true;
  }

  return false;

}



function showError(element) {

  var field = element;
  element.classList.remove('is-valid');
  element.classList.add('is-invalid');

  var errorMessages = document.querySelectorAll('.js-error-message');

  errorMessages.forEach(function(el) {

    var dataAttrValue = el.getAttribute('data-messagetype');

    if (dataAttrValue === field.name) {
      el.classList.add('is-for-error');
    }

  });
}



function showStatus(currentElement) {

  changeInputStatus(currentElement);
  // currentElement.classList.remove('is-invalid');
  currentElement.classList.add('is-valid');



};


function changeInputStatus(input = 'false') {

  if (input === 'false') {

    var inputElements = document.querySelectorAll('.js-form-input');

    inputElements.forEach(function(el) {

      el.classList.remove('is-invalid');

    });

  }

  input.classList.remove('is-invalid');


  changeMessageStatus(input, true);

}



function changeMessageStatus(input, messageBox = false) {

  var errorMessages = document.querySelectorAll('.js-error-message');

  errorMessages.forEach(function(el) {


    if (messageBox === false) {

      el.classList.remove('is-for-error');

    } else {


      var dataAttrValue = el.getAttribute('data-messagetype');

      if (dataAttrValue === input.name) {
        console.log(true);
        el.classList.remove('is-for-error');
      }

    }



  });


}


// function showCongrats() {

// 	var 
	
// }
