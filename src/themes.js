import {createTheme} from '@mui/material/styles';
import {teal, deepPurple, blueGrey} from '@mui/material/colors';
import {pink, green} from '@mui/material/colors';

const defaultTheme = createTheme({
  mode: "light",
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
  mode: "dark",
  palette: {
    background: {
      default: blueGrey[900]
    },
    primary: {
      main: deepPurple[400]
    },
    secondary: {
      main: teal[500]
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
    }
  },
});

const dorkTheme = createTheme({
  palette: {
    background: {
      default: green[100]
    },
    primary: {
      main: pink[500]
    },
    secondary: {
      main: green[500]
    },
  },
  typography: {
    fontFamily: ['Comic Neue']
  }
});

const themes = [
  {uid: "default", theme: defaultTheme, display: "Default"},
  {uid: "dark", theme: darkTheme, display: "Dark"},
  {uid: "dork", theme: dorkTheme, display: "Dork"},    
];

export default themes;