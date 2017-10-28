var form = document.getElementById('userForm');
var modalStatus = document.querySelector('.js-modal-status');

form.addEventListener('submit', function() {
  event.preventDefault();
  validateform(this);

  return false;


});



function validateform(formToSubmit) {


  var form = formToSubmit;

  // clear styling

  var inputElements=document.querySelectorAll('.js-form-input');

  inputElements.forEach(function(el) {
    el.classList.remove('is-invalid');
  });




  // define regexp
 	var regexp = {

 		digitsRegExp : new RegExp('^[0-9]+$'),
 		stringRegExp : new RegExp('^[a-zA-Z]+$'),
 		emailRegExp  : new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"),

 		mediumPassRegExp : new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'),
 		  // contains six characters or more and has
  		// at least one lowercase and one uppercase alphabetical character or has at least one lowercase
  		// and one numeric character or has at least one uppercase and one numeric character.  

 	};



  // define inputs

  var inputsArray = [

    {
    	name : form.elements['name'],
    	pattern: regexp.stringRegExp
    },
    {
    	name : form.elements['surname'],
    	pattern: regexp.stringRegExp
    },
    {
    	name : form.elements['phone'],
    	pattern: regexp.digitsRegExp
    },
    {
    	name : form.elements['email'],
    	pattern: regexp.emailRegExp
    },

    {
    	 name : form.elements['password'],
    	 pattern: regexp.mediumPassRegExp
    }


  ];


  var booleanArray = inputsArray.map(function(el)	{

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

    form.submit();

  }



  // if (validateInput(form, inputs.name, stringRegExp)) {
  //   formToSubmit.submit();
  // } else {
  //   // console.log(validateInput(form, nameInput, stringRegExp ));
  //   return false;
  // }

  // if (validateInput(form, inputs.surname, stringRegExp)) {
  //   formToSubmit.submit();
  // } else {
  //   // console.log(validateInput(form, nameInput, stringRegExp ));
  //   return false;
  // }


  // if (validateInput(form, inputs.phone, digitsRegExp	)) {
  //   formToSubmit.submit();
  // } else {
  //   // console.log(validateInput(form, nameInput, stringRegExp ));
  //   return false;
  // }



  // if (validateInput(form, inputs.email, emailRegExp)) {
  //   formToSubmit.submit();
  // } else {
  //   // console.log(validateInput(form, nameInput, stringRegExp ));
  //   return false;
  // }


  // if (validateInput(form, inputs.pass, mediumPassRegExp)) {
  //   formToSubmit.submit();
  // } else {
  //   // console.log(validateInput(form, nameInput, stringRegExp ));
  //   return false;
  // }





  // validateInput(form, surnameInput, stringRegExp);
  // validateInput(form, phoneInput, digitsRegExp );
  // validateInput(form, emailInput, emailRegExp);
  // validateInput(form, passInput, mediumPassRegExp);






  // validate length

  function validateInput(form, input, regexp) {
    console.log(form, input);

    if ((!validateLength(form, input)) || (!validateData(form, input, regexp))) {
      console.log(validateLength(form, input), validateData(form, input, regexp));

      showError(form, input);

      return false;
    }
    return true;
  }






  function validateLength(formOfInputs, typeOfInput) {

  	var inputName=typeOfInput.name;
    var inputValue = typeOfInput.value;
    var inputValueLength = inputValue.length;
   
    if (inputName === 'phone') {
      if ((inputValueLength >= 10) && (inputValueLength <= 12 )) {
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









  //   if ((form.elements['name'].value === '') || (form.elements['name'].value.length < 2)) {
  //    	showError(form,'name');
  //     return false;
  //   }

  //   if ((form.elements['surname'].value === '') || (form.elements['surname'].value.length < 2)) {
  //    	showError(fieldArray,'surname');
  //     return false;
  //   }



  //   if (form.elements['phone'].value === '') {
  //     showError(fieldArray,'phone');
  // 	    return false;
  //   }


  //   form.elements['phone'].value = form.elements['phone'].value.replace(digitsRegExp, '');

  //   if (form.elements['phone'].value.length < 10) {
  //     showError(fieldArray,'phone');
  // 	    return false;
  //   }


  //   if (form.elements['phone'].value.length > 11) {
  //     showError(fieldArray,'phone');
  // 	    return false;
  //   }

  //   form.elements['email'].value = form.elements['email'].value.replace(emailRegExp, '');

  //   if (form.elements['email'].value === '') {
  //   	showError(fieldArray, email);
  //   	return false;
  //   }

  //   // form.submit();
  // }



  function showError(fieldArray, field) {

    var element = field;

    element.classList.add('is-invalid');

    console.log('showError');


  }



  // formToSubmit.submit();

}
