import './polyfills';

export default class Validator {

  constructor(selector) {

    this.forms = selector;
    this.validationParams=[];
    this.init();

  }

  init() {

    this.addFormListener();

  }

  addFormListener() {

  	let self=this;

    let forms = document.querySelectorAll(self.forms);

    forms.forEach(function(el) {

      el.addEventListener('submit', function() {

        event.preventDefault();

        self.validateform(event.currentTarget);

        return false;

      });

    });

  }

  validateform(formToValidate) {

    let self = this;

    self.defineParams(formToValidate);

    // self.checkValidationStatus(formToValidate);
    // alert('stop');
    // self.reportAboutStatus();

  }

  defineParams(formToGrabParams) {

  	let form=formToGrabParams;

    let regexpParams = {

      digitsRegExp: new RegExp('^[0-9]+$'),
      stringRegExp: new RegExp('^[a-zA-Z]+$'),
      emailRegExp: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),

      mediumPassRegExp: new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'),
      // contains six characters or more and has
      // at least one lowercase and one uppercase alphabetical character or has at least one lowercase
      // and one numeric character or has at least one uppercase and one numeric character.  


    };


    let inputsParams = [

      {
        name: form.elements['name'],
        pattern: regexpParams.stringRegExp,
        minLength: 'default',
        maxLength: 'default'

      },
      {
        name: form.elements['surname'],
        pattern: regexpParams.stringRegExp,
        minLength: 'default',
        maxLength: 'default'

      },
      {
        name: form.elements['phone'],
        pattern: regexpParams.digitsRegExp,
        minLength: 10,
        maxLength: 12
      },
      {
        name: form.elements['email'],
        pattern: regexpParams.emailRegExp,
        minLength: 3,
        maxLength: 100
      },

      {
        name: form.elements['password'],
        pattern: regexpParams.mediumPassRegExp,
        minLength: 6,
        maxLength: 100
      },
      // if there is no inputs with name 'chakabyka'
      // do not validate potential falsy values
      {
        name: form.elements['chakabyaka'],
        pattern: regexpParams.mediumPassRegExp,
        minLength: 6,
        maxLength: 100
      }


    ];

    // console.log(inputsParams);

    this.validationParams= inputsParams.filter(function(el) {
 
  	if (el.name !== undefined) return el;

    });

    console.log(this.validationParams);

    this.checkValidationStatus(form);


  }



  checkValidationStatus(form) {

    let self=this;

   
    let validationStatus = this.validationParams.map(function(el) {


      // console.log(el);


      if (self.validateInput(form, el.name, el.pattern, el.minLength, el.maxLength)) {

        // console.log(el);

        
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

      self.showCongrats();

      form.submit();

    }


  }



  validateInput(form, input, regexp, minLength, maxLength) {


    // console.log(minLength, maxLength);
    if ((!this.validateLength(form, input, minLength, maxLength)) || (!this.validateData(form, input, regexp))) {

    // console.log(validateLength(form, input,minLength,maxLength), validateData(form, input, regexp));

      this.showError(input);

      return false;

    } else {

      this.showStatus(input);

      return true;
    }

  }



  validateLength(formOfInputs, typeOfInput, min, max) {

    let inputName = typeOfInput.name;
    let inputValue = typeOfInput.value;
    let inputValueLength = inputValue.length;
  
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


  validateData(formOfInputs, typeOfInput, regexp) {

    let inputValue = typeOfInput.value;

    if (regexp.test(inputValue)) {


      return true;
    }

    return false;

  }



  showError(element) {

    let field = element;

    element.classList.remove('is-valid');
    element.classList.add('is-invalid');

    let errorMessages = document.querySelectorAll('.js-error-message');

    errorMessages.forEach(function(el) {

      let dataAttrValue = el.getAttribute('data-messagetype');

      if (dataAttrValue === field.name) {

        el.classList.add('is-for-error');

      }

    });



  }

  showStatus(element) {

  // changeInputStatus(currentElement);
    element.classList.remove('is-invalid');

    element.classList.add('is-valid');

    this.changeMessageStatus(element);
 
  };





  changeMessageStatus(input) {

    let errorMessages = document.querySelectorAll('.js-error-message');

    errorMessages.forEach(function(el) {


      let dataAttrValue = el.getAttribute('data-messagetype');

      if (dataAttrValue === input.name) {

      // console.log(true);

        el.classList.remove('is-for-error');

      }


    });


  }


  showCongrats() {

    alert('CONGRATS, this form was submitted');

  }


}
