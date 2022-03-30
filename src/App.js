import * as React from 'react';

import '@fontsource/roboto'

import Typography from '@mui/material/Typography';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {teal, deepPurple} from '@mui/material/colors';

import Navbar from './Navbar';

const dark_theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500]
    },
    secondary: {
      main: teal[500]
    }
  }
});

function App() {
  return (
    <div style={{"marginTop": "80px"}}>
      <ThemeProvider theme={dark_theme}>
        <Navbar />
        <header style={{"textAlign": "center"}}>
          <Typography variant="h1">
            The Nerdy Codex!
          </Typography>
          <Typography variant="subtitle1">
            The Nerdy Codex is Mehdi "Arcanite" OUESLATI's personal blog.
          </Typography>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;