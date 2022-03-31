import {createTheme} from '@mui/material/styles';
import {teal, deepPurple} from '@mui/material/colors';
import {orange, green} from '@mui/material/colors';
import {red, blue} from '@mui/material/colors';

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

const darkTheme = createTheme({
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[500]
    },
  }
});

const dorkTheme = createTheme({
  palette: {
    primary: {
      main: red[500]
    },
    secondary: {
      main: blue[500]
    },
  }
});

export {darkTheme, dorkTheme, defaultTheme};