import React, { Component } from 'react';
import RegistrationForm from './containers/RegistrationForm';
// import Form from './containers/Form';
import regForm from './data_static';

class App extends Component {
  render() {
    return (
      <RegistrationForm items={regForm} />
      // <Form items={regForm}/>
    );
  }
}

export default App;
