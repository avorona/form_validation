import React, { Component } from 'react';
import './RegistrationForm.css';
import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";





class RegistrationForm extends Component {

  constructor(props) {
    super(props)

    this.state=this.props.items.reduce( (names,item)=>  {
    names[item.inputName]=item.value;
    return names;
  }, {})
  

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

handleSubmit(event) {

  alert(`This form have been submitted`);
event.preventDefault();
}

handleChange(event) {
  const target=event.target;
  const value =target.type=== 'checkbox' ? target.checked: target.value;
  const name = target.name;
//  console.log(target)
  this.setState({
      [name] : value
    })
  if (name==="delivery") {
    let isDeliveryNeeded =  (this.state["delivery"] === false) ? true: false;
    this.setState({delivery: isDeliveryNeeded})
  }



}

render ()  {
// console.log(this.state, this.props.items)
let self=this;
let deliveryField;
// console.log(self.state.deliveryIsNeeded)
if (self.state["delivery"]) {
deliveryField= (
  <div className="form-reg__field form-reg__field_del">
  
  <DayPicker selectedDays={new Date()}/>

<DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" />

  </div>
)

}


return (



<form onSubmit={this.handleSubmit} className="form-reg">



{this.props.items.map( (item, index) => 
 
  <div className="form-reg__field" key={`field${item.key}`} >
  <label htmlFor={item.inputId} key={`label${item.key}`}>{item.labelText}</label>

  <input  
    id={item.inputId}
    className='form-reg__input'
    type={item.inputType}
    name={item.inputName}
    key= {`input${item.key}`}
    data-messagetype={item.inputName}
    onChange={this.handleChange}
    value={this.state[item.value]}
   />
   <p className="form-reg__error_text">{item.errorMessage}</p>
  </div>

)};


{deliveryField}


<button>registration</button>
</form>

)

}


}

export default RegistrationForm;