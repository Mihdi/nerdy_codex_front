import * as React from 'react';

import '@fontsource/roboto'

import Typography from '@mui/material/Typography';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {teal, deepPurple} from '@mui/material/colors';

import Navbar from './Navbar';

import phrases from './phrases';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500]
    },
    secondary: {
      main: teal[500]
    },
  }
});


function App() {
  return (
    <div style={{"marginTop": "80px"}}>
      <ThemeProvider theme={defaultTheme}>
        <Navbar phrases={phrases}/>
        <header style={{"textAlign": "center"}}>
          <Typography variant="h1">
            {phrases.websiteName}
          </Typography>
          <Typography variant="subtitle1">
            {phrases.websiteDescription}
          </Typography>
            <img src="./try.svg" alt={phrases.logoAlt}/>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;