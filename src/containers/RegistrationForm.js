import React, {
  Component
} from 'react';
import './RegistrationForm.css';
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import RaisedButton from "material-ui/RaisedButton";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import Validator from "./../utils/Validator";

class RegistrationForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "",
      nameError: "",
      surname: "",
      surnameError: "",
      password: "",
      passwordError: "",
      passwordRepeat: "",
      passwordRepeatError: "",
      phone: "",
      phoneError: "",
      email: "",
      emailError: "",
      delivery: false,
      weightMetter: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validate = () => {
    const errors = {
      nameError: "",
      surnameError: "",
      passwordError: "",
      passwordRepeatError: "",
      phoneError: "",
      emailError: "",
    };
    const validator = new Validator();
    let self = this;
    let isError = false;


    if (!validator.validateInput({
        value: self.state.name,
        type: "name"
      })) {
      isError = true;
      errors.nameError = "Use at least 2 characters in latin";
    }
    if (!validator.validateInput({
        value: self.state.surname,
        type: "surname"
      })) {
      isError = true;
      errors.surnameError = "Use at least 2 characters in latin";
    }
    if (!validator.validateInput({
        value: self.state.phone,
        type: "phone"
      })) {
      isError = true;
      errors.phoneError = "Use valid phone number, 10-12 digits";
    }
    if (!validator.validateInput({
        value: self.state.email,
        type: "email"
      })) {
      isError = true;
      errors.emailError = "Use valid email format - example@domain.com";
    }
    if (!validator.validateInput({
        value: self.state.password,
        type: "password"
      })) {
      isError = true;
      errors.passwordError = "Use at least 6 characters. Include letters and a number";
    }
    if (!validator.validateInput({
        value: self.state.passwordRepeat,
        type: "password"
      }) || self.state.password !== self.state.passwordRepeat) {
      isError = true;
      errors.passwordRepeatError = "Passwords don't match";
    }

    this.setState({
      ...this.state,
      ...errors,
    })

    return isError;
  }


  handleSubmit = event => {

    event.preventDefault();
    // this.props.onSubmit(this.state);

    const error = this.validate();
    if (!error) {
      this.setState({
        name: "",
        surname: "",
        password: "",
        passwordRepeat: "",
        phone: "",
        email: "",
        delivery: false,
        weightMetter: false
      });
      this.props.onChange({
        name: "",
        surname: "",
        password: "",
        passwordRepeat: "",
        phone: "",
        email: "",
        delivery: false,
        weightMetter: false
      })
    }


  }

  handleChange = event => {

    const target = event.target;
    const value = target.type === 'checkbox' ?
      target.checked :
      target.value;
    const name = target.name;

    //  console.log(target)
    this.setState({
      [name]: value
    });
    this.props.onChange({
      [name]: value
    });

   

  }
  handleDeliveryCheck = (event) => {
    if (event.target.name === "delivery") {

      this.setState({
        delivery: !this.state.delivery
      })
    }


  }
  handleWeightCheck = (event) => {
    console.log('We will send you the fatest pet')
  }
  render() {
    // console.log(this.state, this.props.items)
    let self = this;
    let deliveryField = '';
    // console.log(self.state.deliveryIsNeeded)
    if (self.state.delivery) {


      deliveryField = ( 
        <div className = "form-reg__field form-reg__field_del" >

        <DayPickerInput 
         placeholder = "DD/MM/YYYY"
          format = "DD/MM/YYYY"
           />

        </div>
      )

    }

    return (

      <form onSubmit = {
        this.handleSubmit
      }
      className = "form-reg" >

      <TextField fullWidth = { true}
      hintText = "Enter your name"
      floatingLabelText = "Name"
      floatingLabelFixed className = 'form-reg__input'
      name = "name"
      type = "text"
      value = {
        this.state.name
      }
      onChange = {
        e => self.handleChange(e)
      }
      errorText = {
        this.state.nameError
      }
      />
       <TextField fullWidth = {
        true
      }
      hintText = "Enter your surname"
      floatingLabelText = "Surname"
      floatingLabelFixed className = 'form-reg__input'
      name = "surname"
      type = "text"
      value = {
        this.state.surname
      }
      onChange = {
        e => self.handleChange(e)
      }
      errorText = {
        this.state.surnameError
      }
      />
      <TextField fullWidth = {
        true
      }
      hintText = "Enter your phone"
      floatingLabelText = "Phone"
      floatingLabelFixed className = 'form-reg__input'
      name = "phone"
      type = "tel"
      value = {
        this.state.phone
      }
      onChange = {
        e => self.handleChange(e)
      }
      errorText = {
        this.state.phoneError
      }
      /> 
      <TextField fullWidth = {
        true
      }
      hintText = "Enter your email"
      floatingLabelText = "Email"
      floatingLabelFixed className = 'form-reg__input'
      name = "email"
      type = "email"
      value = {
        this.state.email
      }
      onChange = {
        e => self.handleChange(e)
      }
      errorText = {
        this.state.emailError
      }
      /> 
      <TextField fullWidth = {
        true
      }
      hintText = "Enter your password"
      floatingLabelText = "Password"
      floatingLabelFixed className = 'form-reg__input'
      name = "password"
      type = "password"
      value = {
        this.state.password
      }
      onChange = {
        e => self.handleChange(e)
      }
      errorText = {
        this.state.passwordError
      }
      /> 
      <TextField fullWidth = {
        true
      }
      hintText = "Repeat you password"
      floatingLabelText = "Password"
      floatingLabelFixed className = 'form-reg__input'
      name = "passwordRepeat"
      type = "password"
      value = {
        this.state.passwordRepeat
      }
      onChange = {
        e => self.handleChange(e)
      }
      errorText = {
        this.state.passwordRepeatError
      }
      />
      <Checkbox 
      label="Check it if you want to choose a day for delivery"
      labelPosition="left"
      name="delivery"
      value={this.state.delivery}
      onCheck = {
        e => self.handleDeliveryCheck(e)
      }
      />

     {deliveryField }
      
      <Checkbox
      label="Check it if weight doesn't metter"
      labelPosition="left"
      value={this.state.weight}
       onCheck = {
        e => self.handleWeightCheck(e)
      }
      /> 

      <RaisedButton label = "Submit"
      onClick = {
        e => this.handleSubmit(e)
      }
      primary / >
      </form>

    )

  }

}

export default RegistrationForm;