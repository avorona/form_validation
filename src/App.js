import React, { Component } from 'react';
import RegistrationForm from './containers/RegistrationForm';
import View from './components/View';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
// import regForm from './data_static';

class App extends Component {
  state = {
    fields: {}
  }
  onChange = updatedValue => {
    this.setState( {
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    
    });
  }
  render() {
    return (
      <View>
     <MuiThemeProvider muiTheme={getMuiTheme()}>
        <RegistrationForm  onChange={fields=> this.onChange(fields)} />
       </MuiThemeProvider>
<p className="output-field"> 
 {JSON.stringify(this.state.fields, null,8)}
  </p>
      </View>
 

  

    );
  }
}

export default App;

