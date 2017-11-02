import './polyfills';

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
      pattern: regexp.stringRegExp,
      minLength: 'default',
      maxLength: 'default'

    },
    {
      name: form.elements['surname'],
      pattern: regexp.stringRegExp,
      minLength: 'default',
      maxLength: 'default'

    },
    {
      name: form.elements['phone'],
      pattern: regexp.digitsRegExp,
      minLength: 10,
      maxLength: 12
    },
    {
      name: form.elements['email'],
      pattern: regexp.emailRegExp,
      minLength: 3,
      maxLength: 100
    },

    {
      name: form.elements['password'],
      pattern: regexp.mediumPassRegExp,
      minLength: 6,
      maxLength: 100
    }


  ];


  var validationStatus = inputsArray.map(function(el) {

    if (validateInput(form, el.name, el.pattern, el.minLength, el.maxLength)) {

      return true;

    } else {

      return false;

    }


  });

  

  // show result of validation
  // console.log(validationStatus);

  if (validationStatus.includes(false)) {

    return false;

  } else {

    showCongrats();

    form.submit();

  }

}





// ================================FUNCTION'S DECLARATIONS==================================


function validateInput(form, input, regexp, minLength, maxLength) {

  // console.log(minLength, maxLength);
  if ((!validateLength(form, input, minLength, maxLength)) || (!validateData(form, input, regexp))) {

    // console.log(validateLength(form, input,minLength,maxLength), validateData(form, input, regexp));

    showError(input);

    return false;

  } else {


    showStatus(input);

    return true;
  }

}

//============ VALIDATE LENGTH


function validateLength(formOfInputs, typeOfInput, min, max) {

  var inputName = typeOfInput.name;
  var inputValue = typeOfInput.value;
  var inputValueLength = inputValue.length;
  
  if (min === 'default') {
    // console.log(min);
    min = 2;
    // console.log(min);

  } 

  if (max === 'default') {
    
    max = 200;
   
  }

  if ((typeOfInput !== '') && (inputValueLength >= min) && (inputValueLength <= max)) {
    // console.log(inputValue, inputValueLength, min,max);

    return true;

  } else {

    return false;
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

  // changeInputStatus(currentElement);
  currentElement.classList.remove('is-invalid');
  currentElement.classList.add('is-valid');
  changeMessageStatus(currentElement, true);
 
};




function changeMessageStatus(input, messageBox) {

  var errorMessages = document.querySelectorAll('.js-error-message');

  errorMessages.forEach(function(el) {


    var dataAttrValue = el.getAttribute('data-messagetype');

    if (dataAttrValue === input.name) {

      // console.log(true);

      el.classList.remove('is-for-error');

    }


  });


}




function showCongrats() {

  alert('CONGRATS, this form was submitted');

}
