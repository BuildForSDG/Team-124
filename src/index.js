import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
  <App />
  </MuiThemeProvider>
  ,
  document.getElementById('root'),
  );
