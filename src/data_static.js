const regFrom = [

  {
    inputId: "name",
    key: "1",
    inputType: "text",
    inputName: "name",
    labelText: "Name",
    value: "",
    errorMessage: "Type your name in correct way (a-z and A-Z)"
  },
  {
    inputId: "surname",
    key: "2",
    inputType: "text",
    inputName: "surname",
    labelText: "Surname",
    value: "",
    errorMessage: "Type your name in correct way (a-z and A-Z)"
  },
  {
    inputId: "phone",
    key: "3",
    inputType: "text",
    inputName: "phone",
    labelText: "Phone",
    value: "",
    errorMessage: "Phone number has to be 10-12 chars long and consists of numbers"
  },
  {
    inputId: "email",
    key: "4",
    inputType: "text",
    inputName: "email",
    labelText: "Email",
    value: "",
    errorMessage: "Write email in format example22@mail.com"
  },
  {
    inputId: "password",
    key: "5",
    inputType: "password",
    inputName: "password",
    labelText: "Password",
    value: "",
    errorMessage: "Password has to contains 6 chars or more (numbers and at least 1 alphabetical char)"
  },
  {
    inputId: "delivery",
    key: "6",
    inputType: "checkbox",
    inputName: "delivery",
    labelText: "Free delivery",
    value:  false,
    errorMessage: ""
  },
  {
    inputId: "weightMetter",
    key: "7",
    inputType: "checkbox",
    inputName: "weightMetter",
    labelText: "Check if your new pet weight is metter",
    value: false,
    errorMessage: ""
  }
]

export default regFrom;