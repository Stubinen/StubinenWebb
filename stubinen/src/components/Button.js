import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

class Button_ST extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <Button
            variant="contained"
            size="large"
            component={this.props.link}
          >
            {this.props.text}
          </Button>
      </MuiThemeProvider>

    );
  }
}
const theme = createMuiTheme({
  overrides: {
  // Name of the component ⚛️ / style sheet
  MuiButton: {
    // Name of the rule
    root: {
      // Some CSS
      background: 'linear-gradient(45deg, #3a2d4d 30%, #4e425e 90%)',
      borderRadius: 3,
      border: 0,
      color: '#fff !important',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      margin:'10px',
    },
  },
},
});

export default Button_ST
