import React, { Component } from 'react';
import RegistrationForm from './containers/RegistrationForm';
import View from './components/View';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green900,green800, blueGrey600} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

const muiTheme=getMuiTheme({

  palette: {
    primary1Color: green800,
    textColor: green900
  },
  fontFamily: 'monospace, Ubuntu, sans-serif'
})


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
     <MuiThemeProvider muiTheme={muiTheme}>
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

