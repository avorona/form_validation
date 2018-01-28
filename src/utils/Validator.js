export default class Validator {

  constructor() {
    this.regexpParams = {};
    this.inputsParams = {};
    this.defineParams();
  }

  defineParams() {

    let self = this;
    this.regexpParams = {

      digits: new RegExp('^[0-9]+$'),
      alphabetENG: new RegExp('^[a-zA-Z]+$'),
      email: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      mediumPass: new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'),
      // contains six characters or more and has
      // at least one lowercase and one uppercase alphabetical character or has at least one lowercase
      // and one numeric character or has at least one uppercase and one numeric character.  


    };


    this.inputsParams = [

      {
        type: 'name',
        pattern: self.regexpParams.alphabetENG,
        minLength: 2,
        maxLength: 200

      },
      {
        type: 'surname',
        pattern: self.regexpParams.alphabetENG,
        minLength: 2,
        maxLength: 200

      },
      {
        type: 'phone',
        pattern: self.regexpParams.digits,
        minLength: 10,
        maxLength: 12
      },
      {
        type: 'email',
        pattern: self.regexpParams.email,
        minLength: 3,
        maxLength: 100
      },

      {
        type: 'password',
        pattern: self.regexpParams.mediumPass,
        minLength: 6,
        maxLength: 100
      },

    ];
  }

  validateInput(params) {

    if ((this.validateLength(params.type, params.value) && (this.validateData(params.type, params.value)))) {
      
      return true;
    }

    return false;

  }




  validateLength(type, value) {
    // console.log(this.inputsParams);
    const min = this.inputsParams.find(config => config.type === type).minLength;
  
    const max = this.inputsParams.find(config => config.type === type).maxLength;
// console.log(value,min,max)
    return (value.length >= min && value.length <= max) ? true : false;
  }





  validateData(type, value) {
    let validationType = '';
    switch (type) {
      case 'name':
        validationType = 'alphabetENG';
        break;
      case 'surname':
        validationType = 'alphabetENG';
        break;
      case 'phone':
        validationType = 'digits';
        break;
      case 'email':
        validationType = 'email';
        break;
      case 'password':
        validationType = 'mediumPass';
        break;
      default:
        validationType = 'alphabetENG';
    }

    return this.regexpParams[validationType].test(value) ? true : false;
  }
}