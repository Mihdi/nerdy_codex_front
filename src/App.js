import React, {useState} from 'react';

import '@fontsource/roboto'

import {ThemeProvider, createTheme} from '@mui/material/styles';
import {teal, deepPurple} from '@mui/material/colors';

import Navbar from './Navbar';
import LandingPage from './LandingPage';
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

/*
 * right now, I assume the navbar has the same infos about the uids, but I could make a more generic thing... 
 * would it be worth the extra complexity?
 */
const subpages = [
  {uid: "default", display: <LandingPage phrases={phrases} />},
  {uid: "articles", display: <p> articles </p>},
  {uid: "aboutme", display: <p> aboutme </p>},
  {uid: "contactme", display: <p> contactme </p>},
  {uid: "signup", display: <p> signup </p>},
  {uid: "login", display: <p> login </p>},
]

function App() {
  const [subpage, setSubpage] = useState("default");
  const display = subpages.filter((sp) => sp.uid === subpage)[0].display;
  return (
    <div style={{"marginTop": "80px"}}>
      <ThemeProvider theme={defaultTheme}>
        <Navbar phrases={phrases} changePage={setSubpage}/>
        {display}
      </ThemeProvider>
    </div>
  );
}

export default App;